grammar RustLite;

prog: globalElement* EOF;

INT: [0-9]+;
BOOL: 'true' | 'false';
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*; // - not allowed in name.
TYPE: 'u8' | 'u16' | 'u32' | 'u64' | 'i8' | 'i16' | 'i32' | 'i64' | 'bool' | IDENTIFIER;

// Ignore whitespace and comments
WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;

expr: '(' expr ')'
    | IDENTIFIER
    | INT
    | BOOL
    | arithExpr
    | logicExpr
    | structExpr
    | fnCall
    | .+? {notifyErrorListeners("Invalid Expression");};

arithExpr: primary=INT
        | primary=IDENTIFIER
        | fieldAccess=structFieldAccess
        | '(' inner=arithExpr ')'
        | op='-' arithExpr
        | left=arithExpr op=('*'|'/'|'%') right=arithExpr
        | left=arithExpr op=('+'|'-') right=arithExpr
        | BOOL {notifyErrorListeners("Cannot use boolean in arithmetic expressions");}
        | left=arithExpr op=('/'|'%') INT {
            if ($right.text.equals("0")) notifyErrorListeners("Division by zero");
        };

logicExpr: primary=BOOL
        | primary=IDENTIFIER
        | fieldAccess=structFieldAccess
        | '(' inner=logicExpr ')'
        | arithLeft=arithExpr op=('>'|'<'|'=='|'!='|'<='|'>=') arithRight=arithExpr
        | op='!' right=logicExpr
        | left=logicExpr op='&&' right=logicExpr
        | left=logicExpr op='||' right=logicExpr
        | INT {notifyErrorListeners("Cannot use INT without comparison operators in logical expressions");};

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
    | structDeclare {notifyErrorListeners("Struct definitions are only allowed in global scope");}
    | expr {notifyErrorListeners("missing semicolon")}
    | .+? ';' {notifyErrorListeners("Invalid statement");};

// expr for implicit return in fn block. Need to check when compiling to bytecode
block: '{' stmt* expr? '}';

exprStmt: expr ';';

declareStmt: 'let' 'mut'? IDENTIFIER ':' TYPE '=' exprStmt
        | 'let' 'mut'? IDENTIFIER ':' TYPE ';'
        | 'let' 'mut'? IDENTIFIER '=' exprStmt
        | 'let' 'mut'? IDENTIFIER {
                notifyErrorListeners("Variable declaration requires either type annotation or initialization");
            } ';'? 
        | 'let' 'mut'? (':' TYPE)? {notifyErrorListeners("Missing variable name in variable declaration");};

constStmt: 'const' IDENTIFIER (':' TYPE)? '=' exprStmt
        | 'const' IDENTIFIER '=' exprStmt {notifyErrorListeners("Constants must specify a type");}
        | 'const' 'mut' {notifyErrorListeners("Constants cannot be mutable");} IDENTIFIER ':' TYPE '=' exprStmt;

condStmt: 'if' logicExpr block ('else' 'if' logicExpr block)* ('else' block)?
        | 'if' expr {
                notifyErrorListeners("Condition must be a boolean expression");
            } block ('else' block)?;

loopStmt: 'loop' block;

whileStmt: 'while' logicExpr block
        | 'while' expr {
                ("Condition must be a boolean expression");
            } block;

loopControl: 'break' | 'continue'; 

loopControlStmt: loopControl ';';

// For loops
iterable: IDENTIFIER
        | INT op=('..'|'..=') INT;

forStmt: 'for' IDENTIFIER 'in' iterable block;

// Function declaration
param: IDENTIFIER ':' TYPE
    | IDENTIFIER {notifyErrorListeners("Parameters must specify a type");};
paramList: param (',' param)* ','?;

returnTypes: TYPE
            | '()';
returnType: '->' returnTypes;
returnStmt: 'return' expr? ';';

fnDeclareStmt: 'fn' IDENTIFIER '(' paramList? ')'  returnType? block;

argList: expr (',' expr)* ','?;
fnCall: IDENTIFIER '(' argList? ')';

// Structs
structDeclare: 'struct' IDENTIFIER '{' structDeclareFieldList? '}';
structDeclareFieldList: structDeclareField (',' structDeclareField)* ','?;
structDeclareField: IDENTIFIER ':' TYPE;

structInit: IDENTIFIER '{' structInitFieldList? '}';
structInitFieldList: structInitField (',' structInitField)* ','?;
structInitField: IDENTIFIER ':' expr;

structFieldAccess: IDENTIFIER ('.' IDENTIFIER)+
                | IDENTIFIER '.' {notifyErrorListeners("Missing field name after '.'");};