grammar RustLite;

prog: stmt* EOF;

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
    | fnCall;

arithExpr: primary=INT
        | primary=IDENTIFIER
        | fieldAccess=structFieldAccess
        | '(' inner=arithExpr ')'
        | op='-' arithExpr
        | left=arithExpr op=('*'|'/'|'%') right=arithExpr
        | left=arithExpr op=('+'|'-') right=arithExpr;

logicExpr: primary=BOOL
        | primary=IDENTIFIER
        | fieldAccess=structFieldAccess
        | '(' inner=logicExpr ')'
        | arithLeft=arithExpr op=('>'|'<'|'=='|'!='|'<='|'>=') arithRight=arithExpr
        | op='!' right=logicExpr
        | left=logicExpr op='&&' right=logicExpr
        | left=logicExpr op='||' right=logicExpr;

structExpr: structInit
        | structDeclare
        | structFieldAccess;

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
    | block;

// expr for implicit return in fn block. Need to check when compiling to bytecode
block: '{' stmt* expr? '}';

exprStmt: expr ';';

declareStmt: 'let' 'mut'? IDENTIFIER '=' exprStmt;

constStmt: 'const' IDENTIFIER (':' TYPE)? '=' exprStmt;

condStmt: 'if' logicExpr block ('else' 'if' logicExpr block)* ('else' block)?;

loopStmt: 'loop' block;

whileStmt: 'while' logicExpr block;

loopControl: 'break' | 'continue'; 

loopControlStmt: loopControl ';';

// For loops
iterable: IDENTIFIER
        | INT op=('..'|'..=') INT;

forStmt: 'for' IDENTIFIER 'in' iterable block;

// Function declaration
param: IDENTIFIER ':' TYPE;
paramList: param (',' param)*;

returnTypes: TYPE
            | '()';
returnType: '->' returnTypes;
returnStmt: 'return' expr? ';';

fnDeclareStmt: 'fn' IDENTIFIER '(' paramList? ')'  returnType? block;

argList: expr (',' expr)*;
fnCall: IDENTIFIER '(' argList? ')';

// Structs
structDeclare: IDENTIFIER '{' structDeclareFieldList '}';
structDeclareFieldList: structDeclareField (',' structDeclareField)*;
structDeclareField: IDENTIFIER ':' TYPE;

structInit: IDENTIFIER '{' structInitFieldList '}';
structInitFieldList: structInitField (',' structInitField)*;
structInitField: IDENTIFIER ':' expr;

structFieldAccess: IDENTIFIER ('.' IDENTIFIER)+;