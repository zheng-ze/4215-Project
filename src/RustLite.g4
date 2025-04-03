grammar RustLite;

prog: stmt* EOF;

INT: [0-9]+;
BOOL: 'true' | 'false';
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*; // - not allowed in name.
CHAR: [a-zA-Z];
TYPE: 'i32' | 'i64' | 'bool' | IDENTIFIER;

expr: '(' expr ')'
    | IDENTIFIER
    | INT
    | BOOL
    | arithExpr
    | logicExpr
    | structExpr
    | fnCall
    | 'None';

arithExpr: term ('+'|'-');

term: factor ('*'|'/') factor;

factor: '-' factor | primary;

primary: INT | IDENTIFIER;

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
    | loopControlStmt
    | fnDeclareStmt
    | returnStmt;

sequence: (stmt|expr)*;

// expr for implicit return in fn block. Need to check when compiling to bytecode
block: '{' sequence '}'; 

exprStmt: expr ';';

declareStmt: 'let' 'mut'? IDENTIFIER '=' exprStmt;

condStmt: 'if' logicExpr block ('else' 'if' logicExpr block)* ('else' block)?;

loopStmt: 'loop' block;

whileStmt: 'while' logicExpr block;

loopControl: 'break' | 'continue'; 

loopControlStmt: loopControl ';';

// For loops
iterable: IDENTIFIER
        | INT'..'INT
        | 'range' '(' INT ',' INT ')';

forStmt: 'for' IDENTIFIER 'in' iterable block;

// Function declaration
param: IDENTIFIER ':' TYPE;
paramList: param (',' param)*;

returnTypes: TYPE
            | '()';
returnType: '->' returnTypes;
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