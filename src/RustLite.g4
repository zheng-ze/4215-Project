grammar RustLite;

prog: stmt* EOF;

INT: [0-9]+;
BOOL: 'true' | 'false';
IDENTIFIER: [a-zA-Z_];
TYPE: 'i32' | 'i64' | 'bool' | IDENTIFIER;

expr: '(' expr ')'
    | IDENTIFIER
    | INT
    | BOOL
    | arithExpr
    | logicExpr
    | structExpr;

arithExpr: arithExpr ('+'|'-'|'*'|'/') arithExpr
        | INT
        | IDENTIFIER;

logicExpr: logicExpr ('&&'|'||') logicExpr
        | '!' logicExpr
        | BOOL
        | arithExpr ('>'|'<'|'=='|'!=') arithExpr;

structExpr: structInit
        | structDeclare
        | structFieldAccess;

stmt: exprStmt
    | declareStmt
    | condStmt
    | loopStmt
    | whileStmt
    | fnDeclareStmt
    | returnStmt;

block: '{' stmt* '}';

exprStmt: expr ';';

declareStmt: 'let' 'mut'? IDENTIFIER '=' exprStmt;

condStmt: 'if' expr block ('else' 'if' expr block)* ('else' block)?;

loopStmt: 'loop' block;

whileStmt: 'while' expr block;

// For loops
iterable: IDENTIFIER
        | INT'..'INT
        | 'range' '(' INT ',' INT ')';

forStmt: 'for' IDENTIFIER 'in' iterable block;

// Function declaration
param: IDENTIFIER ':' TYPE;
paramList: param (',' param)*;

returnType: '->' TYPE;
returnStmt: 'return' exprStmt;

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

structFieldAccess: IDENTIFIER '.' IDENTIFIER;

// Ignore whitespace and comments
WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;