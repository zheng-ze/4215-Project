grammar RustLite;

prog: globalElement* EOF;

INT: [0-9]+;
BOOL: 'true' | 'false';
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*; // - not allowed in name.
U8_TYPE: 'u8';
U16_TYPE: 'u16';
U32_TYPE: 'u32';
U64_TYPE: 'u64';
I8_TYPE: 'i8';
I16_TYPE: 'i16';
I32_TYPE: 'i32';
I64_TYPE: 'i64';
BOOL_TYPE: 'bool';


type: U8_TYPE | U16_TYPE | U32_TYPE | U64_TYPE 
    | I8_TYPE | I16_TYPE | I32_TYPE | I64_TYPE 
    | BOOL_TYPE | IDENTIFIER;

// Ignore whitespace and comments
WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;

expr: '(' inner=expr ')'
    | IDENTIFIER
    | INT
    | BOOL
    | arithExpr
    | logicExpr
    | structExpr
    | fnCall;

arithExpr: primary=INT
        | primary=IDENTIFIER
        | fieldAccess=structFieldAccess
        | '(' inner=arithExpr ')'
        | op='-' arithExpr
        | left=arithExpr op=('*'|'/'|'%') right=arithExpr
        | left=arithExpr op=('+'|'-') right=arithExpr
        | BOOL {this.notifyErrorListeners("Cannot use boolean in arithmetic expressions");}
        | left=arithExpr op=('/'|'%') INT {
            if ($right.text === 0) this.notifyErrorListeners("Division by zero");
        };

logicExpr: primary=BOOL
        | primary=IDENTIFIER
        | fieldAccess=structFieldAccess
        | '(' inner=logicExpr ')'
        | arithLeft=arithExpr op=('>'|'<'|'=='|'!='|'<='|'>=') arithRight=arithExpr
        | op='!' right=logicExpr
        | left=logicExpr op='&&' right=logicExpr
        | left=logicExpr op='||' right=logicExpr
        | INT {this.notifyErrorListeners("Cannot use INT without comparison operators in logical expressions");};

structExpr: structInit
        | structFieldAccess;

globalElement: fnDeclareStmt
            | structDeclare
            | constStmt;

stmt: exprStmt
    | declareStmt
    | constStmt
    | condStmt
    | loopStmt
    | forStmt
    | whileStmt
    | loopControlStmt
    | fnDeclareStmt
    | returnStmt
    | block
    | expr {this.notifyErrorListeners("Missing semicolon after expression");} 
    | structDeclare {this.notifyErrorListeners("Struct definitions are only allowed in global scope");};

// expr for implicit return in fn block. Need to check when compiling to bytecode
block: '{' blockContent '}';

blockContent: stmt* finalExpr=expr?;

exprStmt: expr ';';

declareStmt: 'let' 'mut'? IDENTIFIER ':' type '=' exprStmt
        | 'let' 'mut'? IDENTIFIER ':' type ';'
        | 'let' 'mut'? IDENTIFIER '=' exprStmt
        | 'let' 'mut'? IDENTIFIER {
                this.notifyErrorListeners("Variable declaration requires either type annotation or initialization");
            } ';'? 
        | 'let' 'mut'? (':' type)? {this.notifyErrorListeners("Missing variable name in variable declaration");};

constStmt: 'const' IDENTIFIER ':' type '=' exprStmt
        | 'const' IDENTIFIER '=' exprStmt {this.notifyErrorListeners("Constants must specify a type");}
        | 'const' 'mut' {this.notifyErrorListeners("Constants cannot be mutable");} IDENTIFIER ':' type '=' exprStmt;

condStmt: 'if' logicExpr block ('else' 'if' logicExpr block)* ('else' block)?
        | 'if' expr {
                this.notifyErrorListeners("Condition must be a boolean expression");
            } block ('else' block)?;

loopStmt: 'loop' block;

whileStmt: 'while' logicExpr block
        | 'while' expr {
                this.notifyErrorListeners("Condition must be a boolean expression");
            } block;

loopControl: 'break' | 'continue'; 

loopControlStmt: loopControl ';';

// For loops
iterable: IDENTIFIER
        | INT op=('..'|'..=') INT;

forStmt: 'for' IDENTIFIER 'in' iterable block;

// Function declaration
param: IDENTIFIER ':' type
    | IDENTIFIER {this.notifyErrorListeners("Parameters must specify a type");};
paramList: param (',' param)* ','?;

returnTypes: type
            | '()';
returnType: '->' returnTypes;
returnStmt: 'return' expr? ';';

fnDeclareStmt: 'fn' IDENTIFIER ('(' paramList? ')' | '()')  returnType? block;

argList: expr (',' expr)* ','?;
fnCall: IDENTIFIER '(' argList? ')';

// Structs
structDeclare: 'struct' IDENTIFIER '{' structDeclareFieldList? '}';
structDeclareFieldList: structDeclareField (',' structDeclareField)* ','?;
structDeclareField: IDENTIFIER ':' type;

structInit: IDENTIFIER '{' structInitFieldList? '}';
structInitFieldList: structInitField (',' structInitField)* ','?;
structInitField: IDENTIFIER ':' expr;

structFieldAccess: IDENTIFIER ('.' IDENTIFIER)+
                | IDENTIFIER '.' {this.notifyErrorListeners("Missing field name after '.'");};