// Generated from src/RustLite.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { RustLiteListener } from "./RustLiteListener.js";
import { RustLiteVisitor } from "./RustLiteVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class RustLiteParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly T__15 = 16;
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly T__19 = 20;
    public static readonly T__20 = 21;
    public static readonly T__21 = 22;
    public static readonly T__22 = 23;
    public static readonly T__23 = 24;
    public static readonly T__24 = 25;
    public static readonly T__25 = 26;
    public static readonly T__26 = 27;
    public static readonly T__27 = 28;
    public static readonly T__28 = 29;
    public static readonly T__29 = 30;
    public static readonly T__30 = 31;
    public static readonly T__31 = 32;
    public static readonly T__32 = 33;
    public static readonly T__33 = 34;
    public static readonly T__34 = 35;
    public static readonly T__35 = 36;
    public static readonly T__36 = 37;
    public static readonly T__37 = 38;
    public static readonly T__38 = 39;
    public static readonly T__39 = 40;
    public static readonly T__40 = 41;
    public static readonly INT = 42;
    public static readonly BOOL = 43;
    public static readonly IDENTIFIER = 44;
    public static readonly U8_TYPE = 45;
    public static readonly U16_TYPE = 46;
    public static readonly U32_TYPE = 47;
    public static readonly U64_TYPE = 48;
    public static readonly I8_TYPE = 49;
    public static readonly I16_TYPE = 50;
    public static readonly I32_TYPE = 51;
    public static readonly I64_TYPE = 52;
    public static readonly BOOL_TYPE = 53;
    public static readonly WS = 54;
    public static readonly COMMENT = 55;
    public static readonly RULE_prog = 0;
    public static readonly RULE_type = 1;
    public static readonly RULE_expr = 2;
    public static readonly RULE_arithExpr = 3;
    public static readonly RULE_logicExpr = 4;
    public static readonly RULE_structExpr = 5;
    public static readonly RULE_globalElement = 6;
    public static readonly RULE_stmt = 7;
    public static readonly RULE_block = 8;
    public static readonly RULE_blockContent = 9;
    public static readonly RULE_stmts = 10;
    public static readonly RULE_finalExpr = 11;
    public static readonly RULE_exprStmt = 12;
    public static readonly RULE_declareStmt = 13;
    public static readonly RULE_constStmt = 14;
    public static readonly RULE_condStmt = 15;
    public static readonly RULE_loopStmt = 16;
    public static readonly RULE_whileStmt = 17;
    public static readonly RULE_loopControl = 18;
    public static readonly RULE_loopControlStmt = 19;
    public static readonly RULE_iterable = 20;
    public static readonly RULE_forStmt = 21;
    public static readonly RULE_param = 22;
    public static readonly RULE_paramList = 23;
    public static readonly RULE_returnTypes = 24;
    public static readonly RULE_returnType = 25;
    public static readonly RULE_returnStmt = 26;
    public static readonly RULE_fnDeclareStmt = 27;
    public static readonly RULE_argList = 28;
    public static readonly RULE_fnCall = 29;
    public static readonly RULE_structDeclare = 30;
    public static readonly RULE_structDeclareFieldList = 31;
    public static readonly RULE_structDeclareField = 32;
    public static readonly RULE_structInit = 33;
    public static readonly RULE_structInitFieldList = 34;
    public static readonly RULE_structInitField = 35;
    public static readonly RULE_structFieldAccess = 36;

    public static readonly literalNames = [
        null, "'('", "')'", "'-'", "'*'", "'/'", "'%'", "'+'", "'>'", "'<'", 
        "'=='", "'!='", "'<='", "'>='", "'!'", "'&&'", "'||'", "';'", "'{'", 
        "'}'", "'let'", "'mut'", "':'", "'='", "'const'", "'if'", "'else'", 
        "'loop'", "'while'", "'break'", "'continue'", "'..'", "'..='", "'for'", 
        "'in'", "','", "'()'", "'->'", "'return'", "'fn'", "'struct'", "'.'", 
        null, null, null, "'u8'", "'u16'", "'u32'", "'u64'", "'i8'", "'i16'", 
        "'i32'", "'i64'", "'bool'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, "INT", "BOOL", 
        "IDENTIFIER", "U8_TYPE", "U16_TYPE", "U32_TYPE", "U64_TYPE", "I8_TYPE", 
        "I16_TYPE", "I32_TYPE", "I64_TYPE", "BOOL_TYPE", "WS", "COMMENT"
    ];
    public static readonly ruleNames = [
        "prog", "type", "expr", "arithExpr", "logicExpr", "structExpr", 
        "globalElement", "stmt", "block", "blockContent", "stmts", "finalExpr", 
        "exprStmt", "declareStmt", "constStmt", "condStmt", "loopStmt", 
        "whileStmt", "loopControl", "loopControlStmt", "iterable", "forStmt", 
        "param", "paramList", "returnTypes", "returnType", "returnStmt", 
        "fnDeclareStmt", "argList", "fnCall", "structDeclare", "structDeclareFieldList", 
        "structDeclareField", "structInit", "structInitFieldList", "structInitField", 
        "structFieldAccess",
    ];

    public get grammarFileName(): string { return "RustLite.g4"; }
    public get literalNames(): (string | null)[] { return RustLiteParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return RustLiteParser.symbolicNames; }
    public get ruleNames(): string[] { return RustLiteParser.ruleNames; }
    public get serializedATN(): number[] { return RustLiteParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, RustLiteParser._ATN, RustLiteParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public prog(): ProgContext {
        let localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 0, RustLiteParser.RULE_prog);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 77;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & 98305) !== 0)) {
                {
                {
                this.state = 74;
                this.globalElement();
                }
                }
                this.state = 79;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 80;
            this.match(RustLiteParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public type_(): TypeContext {
        let localContext = new TypeContext(this.context, this.state);
        this.enterRule(localContext, 2, RustLiteParser.RULE_type);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 82;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 1023) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expr(): ExprContext {
        let localContext = new ExprContext(this.context, this.state);
        this.enterRule(localContext, 4, RustLiteParser.RULE_expr);
        try {
            this.state = 95;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 84;
                this.match(RustLiteParser.T__0);
                this.state = 85;
                localContext._inner = this.expr();
                this.state = 86;
                this.match(RustLiteParser.T__1);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 88;
                this.match(RustLiteParser.IDENTIFIER);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 89;
                this.match(RustLiteParser.INT);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 90;
                this.match(RustLiteParser.BOOL);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 91;
                this.arithExpr(0);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 92;
                this.logicExpr(0);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 93;
                this.structExpr();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 94;
                this.fnCall();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public arithExpr(): ArithExprContext;
    public arithExpr(_p: number): ArithExprContext;
    public arithExpr(_p?: number): ArithExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ArithExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 6;
        this.enterRecursionRule(localContext, 6, RustLiteParser.RULE_arithExpr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 109;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
            case 1:
                {
                this.state = 98;
                localContext._primary = this.match(RustLiteParser.INT);
                }
                break;
            case 2:
                {
                this.state = 99;
                localContext._primary = this.match(RustLiteParser.IDENTIFIER);
                }
                break;
            case 3:
                {
                this.state = 100;
                localContext._fieldAccess = this.structFieldAccess();
                }
                break;
            case 4:
                {
                this.state = 101;
                this.match(RustLiteParser.T__0);
                this.state = 102;
                localContext._inner = this.arithExpr(0);
                this.state = 103;
                this.match(RustLiteParser.T__1);
                }
                break;
            case 5:
                {
                this.state = 105;
                localContext._op = this.match(RustLiteParser.T__2);
                this.state = 106;
                this.arithExpr(5);
                }
                break;
            case 6:
                {
                this.state = 107;
                this.match(RustLiteParser.BOOL);
                this.notifyErrorListeners("Cannot use boolean in arithmetic expressions");
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 123;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 121;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
                    case 1:
                        {
                        localContext = new ArithExprContext(parentContext, parentState);
                        localContext._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                        this.state = 111;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 112;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 112) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 113;
                        localContext._right = this.arithExpr(5);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ArithExprContext(parentContext, parentState);
                        localContext._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                        this.state = 114;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 115;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 3 || _la === 7)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 116;
                        localContext._right = this.arithExpr(4);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ArithExprContext(parentContext, parentState);
                        localContext._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                        this.state = 117;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 118;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 5 || _la === 6)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 119;
                        this.match(RustLiteParser.INT);

                                              if ((localContext._right != null ? this.tokenStream.getTextFromRange(localContext._right.start, localContext._right.stop) : '') === 0) this.notifyErrorListeners("Division by zero");
                                          
                        }
                        break;
                    }
                    }
                }
                this.state = 125;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public logicExpr(): LogicExprContext;
    public logicExpr(_p: number): LogicExprContext;
    public logicExpr(_p?: number): LogicExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new LogicExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 8;
        this.enterRecursionRule(localContext, 8, RustLiteParser.RULE_logicExpr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 142;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
            case 1:
                {
                this.state = 127;
                localContext._primary = this.match(RustLiteParser.BOOL);
                }
                break;
            case 2:
                {
                this.state = 128;
                localContext._primary = this.match(RustLiteParser.IDENTIFIER);
                }
                break;
            case 3:
                {
                this.state = 129;
                localContext._fieldAccess = this.structFieldAccess();
                }
                break;
            case 4:
                {
                this.state = 130;
                this.match(RustLiteParser.T__0);
                this.state = 131;
                localContext._inner = this.logicExpr(0);
                this.state = 132;
                this.match(RustLiteParser.T__1);
                }
                break;
            case 5:
                {
                this.state = 134;
                localContext._arithLeft = this.arithExpr(0);
                this.state = 135;
                localContext._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 16128) !== 0))) {
                    localContext._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 136;
                localContext._arithRight = this.arithExpr(0);
                }
                break;
            case 6:
                {
                this.state = 138;
                localContext._op = this.match(RustLiteParser.T__13);
                this.state = 139;
                localContext._right = this.logicExpr(4);
                }
                break;
            case 7:
                {
                this.state = 140;
                this.match(RustLiteParser.INT);
                this.notifyErrorListeners("Cannot use INT without comparison operators in logical expressions");
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 152;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 150;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
                    case 1:
                        {
                        localContext = new LogicExprContext(parentContext, parentState);
                        localContext._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_logicExpr);
                        this.state = 144;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 145;
                        localContext._op = this.match(RustLiteParser.T__14);
                        this.state = 146;
                        localContext._right = this.logicExpr(4);
                        }
                        break;
                    case 2:
                        {
                        localContext = new LogicExprContext(parentContext, parentState);
                        localContext._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_logicExpr);
                        this.state = 147;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 148;
                        localContext._op = this.match(RustLiteParser.T__15);
                        this.state = 149;
                        localContext._right = this.logicExpr(3);
                        }
                        break;
                    }
                    }
                }
                this.state = 154;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public structExpr(): StructExprContext {
        let localContext = new StructExprContext(this.context, this.state);
        this.enterRule(localContext, 10, RustLiteParser.RULE_structExpr);
        try {
            this.state = 157;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 155;
                this.structInit();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 156;
                this.structFieldAccess();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public globalElement(): GlobalElementContext {
        let localContext = new GlobalElementContext(this.context, this.state);
        this.enterRule(localContext, 12, RustLiteParser.RULE_globalElement);
        try {
            this.state = 162;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.T__38:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 159;
                this.fnDeclareStmt();
                }
                break;
            case RustLiteParser.T__39:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 160;
                this.structDeclare();
                }
                break;
            case RustLiteParser.T__23:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 161;
                this.constStmt();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stmt(): StmtContext {
        let localContext = new StmtContext(this.context, this.state);
        this.enterRule(localContext, 14, RustLiteParser.RULE_stmt);
        try {
            let alternative: number;
            this.state = 185;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 164;
                this.exprStmt();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 165;
                this.declareStmt();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 166;
                this.constStmt();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 167;
                this.condStmt();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 168;
                this.loopStmt();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 169;
                this.forStmt();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 170;
                this.whileStmt();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 171;
                this.loopControlStmt();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 172;
                this.fnDeclareStmt();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 173;
                this.returnStmt();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 174;
                this.block();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 175;
                this.structDeclare();
                this.notifyErrorListeners("Struct definitions are only allowed in global scope");
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 179;
                this.errorHandler.sync(this);
                alternative = 1 + 1;
                do {
                    switch (alternative) {
                    case 1 + 1:
                        {
                        {
                        this.state = 178;
                        this.matchWildcard();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 181;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
                } while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 183;
                this.match(RustLiteParser.T__16);
                this.notifyErrorListeners("Invalid statement");
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 16, RustLiteParser.RULE_block);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 187;
            this.match(RustLiteParser.T__17);
            this.state = 188;
            this.blockContent();
            this.state = 189;
            this.match(RustLiteParser.T__18);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public blockContent(): BlockContentContext {
        let localContext = new BlockContentContext(this.context, this.state);
        this.enterRule(localContext, 18, RustLiteParser.RULE_blockContent);
        let _la: number;
        try {
            this.state = 201;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 191;
                this.stmts();
                this.state = 193;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16394) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 7) !== 0)) {
                    {
                    this.state = 192;
                    this.finalExpr();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 195;
                this.stmts();
                this.state = 196;
                this.expr();
                this.state = 197;
                this.stmts();
                this.state = 198;
                this.finalExpr();
                this.notifyErrorListeners("Missing semicolon")
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stmts(): StmtsContext {
        let localContext = new StmtsContext(this.context, this.state);
        this.enterRule(localContext, 20, RustLiteParser.RULE_stmts);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 206;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 203;
                    this.stmt();
                    }
                    }
                }
                this.state = 208;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public finalExpr(): FinalExprContext {
        let localContext = new FinalExprContext(this.context, this.state);
        this.enterRule(localContext, 22, RustLiteParser.RULE_finalExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 209;
            this.expr();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public exprStmt(): ExprStmtContext {
        let localContext = new ExprStmtContext(this.context, this.state);
        this.enterRule(localContext, 24, RustLiteParser.RULE_exprStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 211;
            this.expr();
            this.state = 212;
            this.match(RustLiteParser.T__16);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public declareStmt(): DeclareStmtContext {
        let localContext = new DeclareStmtContext(this.context, this.state);
        this.enterRule(localContext, 26, RustLiteParser.RULE_declareStmt);
        let _la: number;
        try {
            this.state = 258;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 22, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 214;
                this.match(RustLiteParser.T__19);
                this.state = 216;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 21) {
                    {
                    this.state = 215;
                    this.match(RustLiteParser.T__20);
                    }
                }

                this.state = 218;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 219;
                this.match(RustLiteParser.T__21);
                this.state = 220;
                this.type_();
                this.state = 221;
                this.match(RustLiteParser.T__22);
                this.state = 222;
                this.exprStmt();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 224;
                this.match(RustLiteParser.T__19);
                this.state = 226;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 21) {
                    {
                    this.state = 225;
                    this.match(RustLiteParser.T__20);
                    }
                }

                this.state = 228;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 229;
                this.match(RustLiteParser.T__21);
                this.state = 230;
                this.type_();
                this.state = 231;
                this.match(RustLiteParser.T__16);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 233;
                this.match(RustLiteParser.T__19);
                this.state = 235;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 21) {
                    {
                    this.state = 234;
                    this.match(RustLiteParser.T__20);
                    }
                }

                this.state = 237;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 238;
                this.match(RustLiteParser.T__22);
                this.state = 239;
                this.exprStmt();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 240;
                this.match(RustLiteParser.T__19);
                this.state = 242;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 21) {
                    {
                    this.state = 241;
                    this.match(RustLiteParser.T__20);
                    }
                }

                this.state = 244;
                this.match(RustLiteParser.IDENTIFIER);

                                this.notifyErrorListeners("Variable declaration requires either type annotation or initialization");
                            
                this.state = 247;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 19, this.context) ) {
                case 1:
                    {
                    this.state = 246;
                    this.match(RustLiteParser.T__16);
                    }
                    break;
                }
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 249;
                this.match(RustLiteParser.T__19);
                this.state = 251;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
                case 1:
                    {
                    this.state = 250;
                    this.match(RustLiteParser.T__20);
                    }
                    break;
                }
                this.state = 255;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context) ) {
                case 1:
                    {
                    this.state = 253;
                    this.match(RustLiteParser.T__21);
                    this.state = 254;
                    this.type_();
                    }
                    break;
                }
                this.notifyErrorListeners("Missing variable name in variable declaration");
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constStmt(): ConstStmtContext {
        let localContext = new ConstStmtContext(this.context, this.state);
        this.enterRule(localContext, 28, RustLiteParser.RULE_constStmt);
        try {
            this.state = 282;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 23, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 260;
                this.match(RustLiteParser.T__23);
                this.state = 261;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 262;
                this.match(RustLiteParser.T__21);
                this.state = 263;
                this.type_();
                this.state = 264;
                this.match(RustLiteParser.T__22);
                this.state = 265;
                this.exprStmt();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 267;
                this.match(RustLiteParser.T__23);
                this.state = 268;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 269;
                this.match(RustLiteParser.T__22);
                this.state = 270;
                this.exprStmt();
                this.notifyErrorListeners("Constants must specify a type");
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 273;
                this.match(RustLiteParser.T__23);
                this.state = 274;
                this.match(RustLiteParser.T__20);
                this.notifyErrorListeners("Constants cannot be mutable");
                this.state = 276;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 277;
                this.match(RustLiteParser.T__21);
                this.state = 278;
                this.type_();
                this.state = 279;
                this.match(RustLiteParser.T__22);
                this.state = 280;
                this.exprStmt();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public condStmt(): CondStmtContext {
        let localContext = new CondStmtContext(this.context, this.state);
        this.enterRule(localContext, 30, RustLiteParser.RULE_condStmt);
        try {
            let alternative: number;
            this.state = 309;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 27, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 284;
                this.match(RustLiteParser.T__24);
                this.state = 285;
                this.logicExpr(0);
                this.state = 286;
                this.block();
                this.state = 294;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 24, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 287;
                        this.match(RustLiteParser.T__25);
                        this.state = 288;
                        this.match(RustLiteParser.T__24);
                        this.state = 289;
                        this.logicExpr(0);
                        this.state = 290;
                        this.block();
                        }
                        }
                    }
                    this.state = 296;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 24, this.context);
                }
                this.state = 299;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context) ) {
                case 1:
                    {
                    this.state = 297;
                    this.match(RustLiteParser.T__25);
                    this.state = 298;
                    this.block();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 301;
                this.match(RustLiteParser.T__24);
                this.state = 302;
                this.expr();

                                this.notifyErrorListeners("Condition must be a boolean expression");
                            
                this.state = 304;
                this.block();
                this.state = 307;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
                case 1:
                    {
                    this.state = 305;
                    this.match(RustLiteParser.T__25);
                    this.state = 306;
                    this.block();
                    }
                    break;
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public loopStmt(): LoopStmtContext {
        let localContext = new LoopStmtContext(this.context, this.state);
        this.enterRule(localContext, 32, RustLiteParser.RULE_loopStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 311;
            this.match(RustLiteParser.T__26);
            this.state = 312;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whileStmt(): WhileStmtContext {
        let localContext = new WhileStmtContext(this.context, this.state);
        this.enterRule(localContext, 34, RustLiteParser.RULE_whileStmt);
        try {
            this.state = 323;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 314;
                this.match(RustLiteParser.T__27);
                this.state = 315;
                this.logicExpr(0);
                this.state = 316;
                this.block();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 318;
                this.match(RustLiteParser.T__27);
                this.state = 319;
                this.expr();

                                this.notifyErrorListeners("Condition must be a boolean expression");
                            
                this.state = 321;
                this.block();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public loopControl(): LoopControlContext {
        let localContext = new LoopControlContext(this.context, this.state);
        this.enterRule(localContext, 36, RustLiteParser.RULE_loopControl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 325;
            _la = this.tokenStream.LA(1);
            if(!(_la === 29 || _la === 30)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public loopControlStmt(): LoopControlStmtContext {
        let localContext = new LoopControlStmtContext(this.context, this.state);
        this.enterRule(localContext, 38, RustLiteParser.RULE_loopControlStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 327;
            this.loopControl();
            this.state = 328;
            this.match(RustLiteParser.T__16);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public iterable(): IterableContext {
        let localContext = new IterableContext(this.context, this.state);
        this.enterRule(localContext, 40, RustLiteParser.RULE_iterable);
        let _la: number;
        try {
            this.state = 334;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 330;
                this.match(RustLiteParser.IDENTIFIER);
                }
                break;
            case RustLiteParser.INT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 331;
                this.match(RustLiteParser.INT);
                this.state = 332;
                localContext._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 31 || _la === 32)) {
                    localContext._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 333;
                this.match(RustLiteParser.INT);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public forStmt(): ForStmtContext {
        let localContext = new ForStmtContext(this.context, this.state);
        this.enterRule(localContext, 42, RustLiteParser.RULE_forStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 336;
            this.match(RustLiteParser.T__32);
            this.state = 337;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 338;
            this.match(RustLiteParser.T__33);
            this.state = 339;
            this.iterable();
            this.state = 340;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public param(): ParamContext {
        let localContext = new ParamContext(this.context, this.state);
        this.enterRule(localContext, 44, RustLiteParser.RULE_param);
        try {
            this.state = 347;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 342;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 343;
                this.match(RustLiteParser.T__21);
                this.state = 344;
                this.type_();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 345;
                this.match(RustLiteParser.IDENTIFIER);
                this.notifyErrorListeners("Parameters must specify a type");
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public paramList(): ParamListContext {
        let localContext = new ParamListContext(this.context, this.state);
        this.enterRule(localContext, 46, RustLiteParser.RULE_paramList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 349;
            this.param();
            this.state = 354;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 31, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 350;
                    this.match(RustLiteParser.T__34);
                    this.state = 351;
                    this.param();
                    }
                    }
                }
                this.state = 356;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 31, this.context);
            }
            this.state = 358;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 35) {
                {
                this.state = 357;
                this.match(RustLiteParser.T__34);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public returnTypes(): ReturnTypesContext {
        let localContext = new ReturnTypesContext(this.context, this.state);
        this.enterRule(localContext, 48, RustLiteParser.RULE_returnTypes);
        try {
            this.state = 362;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.IDENTIFIER:
            case RustLiteParser.U8_TYPE:
            case RustLiteParser.U16_TYPE:
            case RustLiteParser.U32_TYPE:
            case RustLiteParser.U64_TYPE:
            case RustLiteParser.I8_TYPE:
            case RustLiteParser.I16_TYPE:
            case RustLiteParser.I32_TYPE:
            case RustLiteParser.I64_TYPE:
            case RustLiteParser.BOOL_TYPE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 360;
                this.type_();
                }
                break;
            case RustLiteParser.T__35:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 361;
                this.match(RustLiteParser.T__35);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public returnType(): ReturnTypeContext {
        let localContext = new ReturnTypeContext(this.context, this.state);
        this.enterRule(localContext, 50, RustLiteParser.RULE_returnType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 364;
            this.match(RustLiteParser.T__36);
            this.state = 365;
            this.returnTypes();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public returnStmt(): ReturnStmtContext {
        let localContext = new ReturnStmtContext(this.context, this.state);
        this.enterRule(localContext, 52, RustLiteParser.RULE_returnStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 367;
            this.match(RustLiteParser.T__37);
            this.state = 369;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16394) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 7) !== 0)) {
                {
                this.state = 368;
                this.expr();
                }
            }

            this.state = 371;
            this.match(RustLiteParser.T__16);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fnDeclareStmt(): FnDeclareStmtContext {
        let localContext = new FnDeclareStmtContext(this.context, this.state);
        this.enterRule(localContext, 54, RustLiteParser.RULE_fnDeclareStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 373;
            this.match(RustLiteParser.T__38);
            this.state = 374;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 381;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.T__0:
                {
                this.state = 375;
                this.match(RustLiteParser.T__0);
                this.state = 377;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 44) {
                    {
                    this.state = 376;
                    this.paramList();
                    }
                }

                this.state = 379;
                this.match(RustLiteParser.T__1);
                }
                break;
            case RustLiteParser.T__35:
                {
                this.state = 380;
                this.match(RustLiteParser.T__35);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 384;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 37) {
                {
                this.state = 383;
                this.returnType();
                }
            }

            this.state = 386;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public argList(): ArgListContext {
        let localContext = new ArgListContext(this.context, this.state);
        this.enterRule(localContext, 56, RustLiteParser.RULE_argList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 388;
            this.expr();
            this.state = 393;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 389;
                    this.match(RustLiteParser.T__34);
                    this.state = 390;
                    this.expr();
                    }
                    }
                }
                this.state = 395;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
            }
            this.state = 397;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 35) {
                {
                this.state = 396;
                this.match(RustLiteParser.T__34);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fnCall(): FnCallContext {
        let localContext = new FnCallContext(this.context, this.state);
        this.enterRule(localContext, 58, RustLiteParser.RULE_fnCall);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 399;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 400;
            this.match(RustLiteParser.T__0);
            this.state = 402;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16394) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 7) !== 0)) {
                {
                this.state = 401;
                this.argList();
                }
            }

            this.state = 404;
            this.match(RustLiteParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structDeclare(): StructDeclareContext {
        let localContext = new StructDeclareContext(this.context, this.state);
        this.enterRule(localContext, 60, RustLiteParser.RULE_structDeclare);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 406;
            this.match(RustLiteParser.T__39);
            this.state = 407;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 408;
            this.match(RustLiteParser.T__17);
            this.state = 410;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44) {
                {
                this.state = 409;
                this.structDeclareFieldList();
                }
            }

            this.state = 412;
            this.match(RustLiteParser.T__18);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structDeclareFieldList(): StructDeclareFieldListContext {
        let localContext = new StructDeclareFieldListContext(this.context, this.state);
        this.enterRule(localContext, 62, RustLiteParser.RULE_structDeclareFieldList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 414;
            this.structDeclareField();
            this.state = 419;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 42, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 415;
                    this.match(RustLiteParser.T__34);
                    this.state = 416;
                    this.structDeclareField();
                    }
                    }
                }
                this.state = 421;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 42, this.context);
            }
            this.state = 423;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 35) {
                {
                this.state = 422;
                this.match(RustLiteParser.T__34);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structDeclareField(): StructDeclareFieldContext {
        let localContext = new StructDeclareFieldContext(this.context, this.state);
        this.enterRule(localContext, 64, RustLiteParser.RULE_structDeclareField);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 425;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 426;
            this.match(RustLiteParser.T__21);
            this.state = 427;
            this.type_();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structInit(): StructInitContext {
        let localContext = new StructInitContext(this.context, this.state);
        this.enterRule(localContext, 66, RustLiteParser.RULE_structInit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 429;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 430;
            this.match(RustLiteParser.T__17);
            this.state = 432;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44) {
                {
                this.state = 431;
                this.structInitFieldList();
                }
            }

            this.state = 434;
            this.match(RustLiteParser.T__18);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structInitFieldList(): StructInitFieldListContext {
        let localContext = new StructInitFieldListContext(this.context, this.state);
        this.enterRule(localContext, 68, RustLiteParser.RULE_structInitFieldList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 436;
            this.structInitField();
            this.state = 441;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 45, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 437;
                    this.match(RustLiteParser.T__34);
                    this.state = 438;
                    this.structInitField();
                    }
                    }
                }
                this.state = 443;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 45, this.context);
            }
            this.state = 445;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 35) {
                {
                this.state = 444;
                this.match(RustLiteParser.T__34);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structInitField(): StructInitFieldContext {
        let localContext = new StructInitFieldContext(this.context, this.state);
        this.enterRule(localContext, 70, RustLiteParser.RULE_structInitField);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 447;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 448;
            this.match(RustLiteParser.T__21);
            this.state = 449;
            this.expr();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structFieldAccess(): StructFieldAccessContext {
        let localContext = new StructFieldAccessContext(this.context, this.state);
        this.enterRule(localContext, 72, RustLiteParser.RULE_structFieldAccess);
        try {
            let alternative: number;
            this.state = 461;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 48, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 451;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 454;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 452;
                        this.match(RustLiteParser.T__40);
                        this.state = 453;
                        this.match(RustLiteParser.IDENTIFIER);
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 456;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 47, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 458;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 459;
                this.match(RustLiteParser.T__40);
                this.notifyErrorListeners("Missing field name after '.'");
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 3:
            return this.arithExpr_sempred(localContext as ArithExprContext, predIndex);
        case 4:
            return this.logicExpr_sempred(localContext as LogicExprContext, predIndex);
        }
        return true;
    }
    private arithExpr_sempred(localContext: ArithExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 4);
        case 1:
            return this.precpred(this.context, 3);
        case 2:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private logicExpr_sempred(localContext: LogicExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 3:
            return this.precpred(this.context, 3);
        case 4:
            return this.precpred(this.context, 2);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,55,464,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,2,36,7,36,1,0,5,0,76,8,0,10,0,12,0,79,9,
        0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,
        2,96,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,110,
        8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,122,8,3,10,3,12,
        3,125,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
        4,1,4,1,4,3,4,143,8,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,151,8,4,10,4,12,
        4,154,9,4,1,5,1,5,3,5,158,8,5,1,6,1,6,1,6,3,6,163,8,6,1,7,1,7,1,
        7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,4,7,180,8,7,11,
        7,12,7,181,1,7,1,7,3,7,186,8,7,1,8,1,8,1,8,1,8,1,9,1,9,3,9,194,8,
        9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,202,8,9,1,10,5,10,205,8,10,10,10,12,
        10,208,9,10,1,11,1,11,1,12,1,12,1,12,1,13,1,13,3,13,217,8,13,1,13,
        1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,227,8,13,1,13,1,13,1,13,
        1,13,1,13,1,13,1,13,3,13,236,8,13,1,13,1,13,1,13,1,13,1,13,3,13,
        243,8,13,1,13,1,13,1,13,3,13,248,8,13,1,13,1,13,3,13,252,8,13,1,
        13,1,13,3,13,256,8,13,1,13,3,13,259,8,13,1,14,1,14,1,14,1,14,1,14,
        1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
        1,14,1,14,1,14,1,14,3,14,283,8,14,1,15,1,15,1,15,1,15,1,15,1,15,
        1,15,1,15,5,15,293,8,15,10,15,12,15,296,9,15,1,15,1,15,3,15,300,
        8,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,308,8,15,3,15,310,8,15,1,
        16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,324,
        8,17,1,18,1,18,1,19,1,19,1,19,1,20,1,20,1,20,1,20,3,20,335,8,20,
        1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,3,22,348,
        8,22,1,23,1,23,1,23,5,23,353,8,23,10,23,12,23,356,9,23,1,23,3,23,
        359,8,23,1,24,1,24,3,24,363,8,24,1,25,1,25,1,25,1,26,1,26,3,26,370,
        8,26,1,26,1,26,1,27,1,27,1,27,1,27,3,27,378,8,27,1,27,1,27,3,27,
        382,8,27,1,27,3,27,385,8,27,1,27,1,27,1,28,1,28,1,28,5,28,392,8,
        28,10,28,12,28,395,9,28,1,28,3,28,398,8,28,1,29,1,29,1,29,3,29,403,
        8,29,1,29,1,29,1,30,1,30,1,30,1,30,3,30,411,8,30,1,30,1,30,1,31,
        1,31,1,31,5,31,418,8,31,10,31,12,31,421,9,31,1,31,3,31,424,8,31,
        1,32,1,32,1,32,1,32,1,33,1,33,1,33,3,33,433,8,33,1,33,1,33,1,34,
        1,34,1,34,5,34,440,8,34,10,34,12,34,443,9,34,1,34,3,34,446,8,34,
        1,35,1,35,1,35,1,35,1,36,1,36,1,36,4,36,455,8,36,11,36,12,36,456,
        1,36,1,36,1,36,3,36,462,8,36,1,36,1,181,2,6,8,37,0,2,4,6,8,10,12,
        14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,
        58,60,62,64,66,68,70,72,0,7,1,0,44,53,1,0,4,6,2,0,3,3,7,7,1,0,5,
        6,1,0,8,13,1,0,29,30,1,0,31,32,507,0,77,1,0,0,0,2,82,1,0,0,0,4,95,
        1,0,0,0,6,109,1,0,0,0,8,142,1,0,0,0,10,157,1,0,0,0,12,162,1,0,0,
        0,14,185,1,0,0,0,16,187,1,0,0,0,18,201,1,0,0,0,20,206,1,0,0,0,22,
        209,1,0,0,0,24,211,1,0,0,0,26,258,1,0,0,0,28,282,1,0,0,0,30,309,
        1,0,0,0,32,311,1,0,0,0,34,323,1,0,0,0,36,325,1,0,0,0,38,327,1,0,
        0,0,40,334,1,0,0,0,42,336,1,0,0,0,44,347,1,0,0,0,46,349,1,0,0,0,
        48,362,1,0,0,0,50,364,1,0,0,0,52,367,1,0,0,0,54,373,1,0,0,0,56,388,
        1,0,0,0,58,399,1,0,0,0,60,406,1,0,0,0,62,414,1,0,0,0,64,425,1,0,
        0,0,66,429,1,0,0,0,68,436,1,0,0,0,70,447,1,0,0,0,72,461,1,0,0,0,
        74,76,3,12,6,0,75,74,1,0,0,0,76,79,1,0,0,0,77,75,1,0,0,0,77,78,1,
        0,0,0,78,80,1,0,0,0,79,77,1,0,0,0,80,81,5,0,0,1,81,1,1,0,0,0,82,
        83,7,0,0,0,83,3,1,0,0,0,84,85,5,1,0,0,85,86,3,4,2,0,86,87,5,2,0,
        0,87,96,1,0,0,0,88,96,5,44,0,0,89,96,5,42,0,0,90,96,5,43,0,0,91,
        96,3,6,3,0,92,96,3,8,4,0,93,96,3,10,5,0,94,96,3,58,29,0,95,84,1,
        0,0,0,95,88,1,0,0,0,95,89,1,0,0,0,95,90,1,0,0,0,95,91,1,0,0,0,95,
        92,1,0,0,0,95,93,1,0,0,0,95,94,1,0,0,0,96,5,1,0,0,0,97,98,6,3,-1,
        0,98,110,5,42,0,0,99,110,5,44,0,0,100,110,3,72,36,0,101,102,5,1,
        0,0,102,103,3,6,3,0,103,104,5,2,0,0,104,110,1,0,0,0,105,106,5,3,
        0,0,106,110,3,6,3,5,107,108,5,43,0,0,108,110,6,3,-1,0,109,97,1,0,
        0,0,109,99,1,0,0,0,109,100,1,0,0,0,109,101,1,0,0,0,109,105,1,0,0,
        0,109,107,1,0,0,0,110,123,1,0,0,0,111,112,10,4,0,0,112,113,7,1,0,
        0,113,122,3,6,3,5,114,115,10,3,0,0,115,116,7,2,0,0,116,122,3,6,3,
        4,117,118,10,1,0,0,118,119,7,3,0,0,119,120,5,42,0,0,120,122,6,3,
        -1,0,121,111,1,0,0,0,121,114,1,0,0,0,121,117,1,0,0,0,122,125,1,0,
        0,0,123,121,1,0,0,0,123,124,1,0,0,0,124,7,1,0,0,0,125,123,1,0,0,
        0,126,127,6,4,-1,0,127,143,5,43,0,0,128,143,5,44,0,0,129,143,3,72,
        36,0,130,131,5,1,0,0,131,132,3,8,4,0,132,133,5,2,0,0,133,143,1,0,
        0,0,134,135,3,6,3,0,135,136,7,4,0,0,136,137,3,6,3,0,137,143,1,0,
        0,0,138,139,5,14,0,0,139,143,3,8,4,4,140,141,5,42,0,0,141,143,6,
        4,-1,0,142,126,1,0,0,0,142,128,1,0,0,0,142,129,1,0,0,0,142,130,1,
        0,0,0,142,134,1,0,0,0,142,138,1,0,0,0,142,140,1,0,0,0,143,152,1,
        0,0,0,144,145,10,3,0,0,145,146,5,15,0,0,146,151,3,8,4,4,147,148,
        10,2,0,0,148,149,5,16,0,0,149,151,3,8,4,3,150,144,1,0,0,0,150,147,
        1,0,0,0,151,154,1,0,0,0,152,150,1,0,0,0,152,153,1,0,0,0,153,9,1,
        0,0,0,154,152,1,0,0,0,155,158,3,66,33,0,156,158,3,72,36,0,157,155,
        1,0,0,0,157,156,1,0,0,0,158,11,1,0,0,0,159,163,3,54,27,0,160,163,
        3,60,30,0,161,163,3,28,14,0,162,159,1,0,0,0,162,160,1,0,0,0,162,
        161,1,0,0,0,163,13,1,0,0,0,164,186,3,24,12,0,165,186,3,26,13,0,166,
        186,3,28,14,0,167,186,3,30,15,0,168,186,3,32,16,0,169,186,3,42,21,
        0,170,186,3,34,17,0,171,186,3,38,19,0,172,186,3,54,27,0,173,186,
        3,52,26,0,174,186,3,16,8,0,175,176,3,60,30,0,176,177,6,7,-1,0,177,
        186,1,0,0,0,178,180,9,0,0,0,179,178,1,0,0,0,180,181,1,0,0,0,181,
        182,1,0,0,0,181,179,1,0,0,0,182,183,1,0,0,0,183,184,5,17,0,0,184,
        186,6,7,-1,0,185,164,1,0,0,0,185,165,1,0,0,0,185,166,1,0,0,0,185,
        167,1,0,0,0,185,168,1,0,0,0,185,169,1,0,0,0,185,170,1,0,0,0,185,
        171,1,0,0,0,185,172,1,0,0,0,185,173,1,0,0,0,185,174,1,0,0,0,185,
        175,1,0,0,0,185,179,1,0,0,0,186,15,1,0,0,0,187,188,5,18,0,0,188,
        189,3,18,9,0,189,190,5,19,0,0,190,17,1,0,0,0,191,193,3,20,10,0,192,
        194,3,22,11,0,193,192,1,0,0,0,193,194,1,0,0,0,194,202,1,0,0,0,195,
        196,3,20,10,0,196,197,3,4,2,0,197,198,3,20,10,0,198,199,3,22,11,
        0,199,200,6,9,-1,0,200,202,1,0,0,0,201,191,1,0,0,0,201,195,1,0,0,
        0,202,19,1,0,0,0,203,205,3,14,7,0,204,203,1,0,0,0,205,208,1,0,0,
        0,206,204,1,0,0,0,206,207,1,0,0,0,207,21,1,0,0,0,208,206,1,0,0,0,
        209,210,3,4,2,0,210,23,1,0,0,0,211,212,3,4,2,0,212,213,5,17,0,0,
        213,25,1,0,0,0,214,216,5,20,0,0,215,217,5,21,0,0,216,215,1,0,0,0,
        216,217,1,0,0,0,217,218,1,0,0,0,218,219,5,44,0,0,219,220,5,22,0,
        0,220,221,3,2,1,0,221,222,5,23,0,0,222,223,3,24,12,0,223,259,1,0,
        0,0,224,226,5,20,0,0,225,227,5,21,0,0,226,225,1,0,0,0,226,227,1,
        0,0,0,227,228,1,0,0,0,228,229,5,44,0,0,229,230,5,22,0,0,230,231,
        3,2,1,0,231,232,5,17,0,0,232,259,1,0,0,0,233,235,5,20,0,0,234,236,
        5,21,0,0,235,234,1,0,0,0,235,236,1,0,0,0,236,237,1,0,0,0,237,238,
        5,44,0,0,238,239,5,23,0,0,239,259,3,24,12,0,240,242,5,20,0,0,241,
        243,5,21,0,0,242,241,1,0,0,0,242,243,1,0,0,0,243,244,1,0,0,0,244,
        245,5,44,0,0,245,247,6,13,-1,0,246,248,5,17,0,0,247,246,1,0,0,0,
        247,248,1,0,0,0,248,259,1,0,0,0,249,251,5,20,0,0,250,252,5,21,0,
        0,251,250,1,0,0,0,251,252,1,0,0,0,252,255,1,0,0,0,253,254,5,22,0,
        0,254,256,3,2,1,0,255,253,1,0,0,0,255,256,1,0,0,0,256,257,1,0,0,
        0,257,259,6,13,-1,0,258,214,1,0,0,0,258,224,1,0,0,0,258,233,1,0,
        0,0,258,240,1,0,0,0,258,249,1,0,0,0,259,27,1,0,0,0,260,261,5,24,
        0,0,261,262,5,44,0,0,262,263,5,22,0,0,263,264,3,2,1,0,264,265,5,
        23,0,0,265,266,3,24,12,0,266,283,1,0,0,0,267,268,5,24,0,0,268,269,
        5,44,0,0,269,270,5,23,0,0,270,271,3,24,12,0,271,272,6,14,-1,0,272,
        283,1,0,0,0,273,274,5,24,0,0,274,275,5,21,0,0,275,276,6,14,-1,0,
        276,277,5,44,0,0,277,278,5,22,0,0,278,279,3,2,1,0,279,280,5,23,0,
        0,280,281,3,24,12,0,281,283,1,0,0,0,282,260,1,0,0,0,282,267,1,0,
        0,0,282,273,1,0,0,0,283,29,1,0,0,0,284,285,5,25,0,0,285,286,3,8,
        4,0,286,294,3,16,8,0,287,288,5,26,0,0,288,289,5,25,0,0,289,290,3,
        8,4,0,290,291,3,16,8,0,291,293,1,0,0,0,292,287,1,0,0,0,293,296,1,
        0,0,0,294,292,1,0,0,0,294,295,1,0,0,0,295,299,1,0,0,0,296,294,1,
        0,0,0,297,298,5,26,0,0,298,300,3,16,8,0,299,297,1,0,0,0,299,300,
        1,0,0,0,300,310,1,0,0,0,301,302,5,25,0,0,302,303,3,4,2,0,303,304,
        6,15,-1,0,304,307,3,16,8,0,305,306,5,26,0,0,306,308,3,16,8,0,307,
        305,1,0,0,0,307,308,1,0,0,0,308,310,1,0,0,0,309,284,1,0,0,0,309,
        301,1,0,0,0,310,31,1,0,0,0,311,312,5,27,0,0,312,313,3,16,8,0,313,
        33,1,0,0,0,314,315,5,28,0,0,315,316,3,8,4,0,316,317,3,16,8,0,317,
        324,1,0,0,0,318,319,5,28,0,0,319,320,3,4,2,0,320,321,6,17,-1,0,321,
        322,3,16,8,0,322,324,1,0,0,0,323,314,1,0,0,0,323,318,1,0,0,0,324,
        35,1,0,0,0,325,326,7,5,0,0,326,37,1,0,0,0,327,328,3,36,18,0,328,
        329,5,17,0,0,329,39,1,0,0,0,330,335,5,44,0,0,331,332,5,42,0,0,332,
        333,7,6,0,0,333,335,5,42,0,0,334,330,1,0,0,0,334,331,1,0,0,0,335,
        41,1,0,0,0,336,337,5,33,0,0,337,338,5,44,0,0,338,339,5,34,0,0,339,
        340,3,40,20,0,340,341,3,16,8,0,341,43,1,0,0,0,342,343,5,44,0,0,343,
        344,5,22,0,0,344,348,3,2,1,0,345,346,5,44,0,0,346,348,6,22,-1,0,
        347,342,1,0,0,0,347,345,1,0,0,0,348,45,1,0,0,0,349,354,3,44,22,0,
        350,351,5,35,0,0,351,353,3,44,22,0,352,350,1,0,0,0,353,356,1,0,0,
        0,354,352,1,0,0,0,354,355,1,0,0,0,355,358,1,0,0,0,356,354,1,0,0,
        0,357,359,5,35,0,0,358,357,1,0,0,0,358,359,1,0,0,0,359,47,1,0,0,
        0,360,363,3,2,1,0,361,363,5,36,0,0,362,360,1,0,0,0,362,361,1,0,0,
        0,363,49,1,0,0,0,364,365,5,37,0,0,365,366,3,48,24,0,366,51,1,0,0,
        0,367,369,5,38,0,0,368,370,3,4,2,0,369,368,1,0,0,0,369,370,1,0,0,
        0,370,371,1,0,0,0,371,372,5,17,0,0,372,53,1,0,0,0,373,374,5,39,0,
        0,374,381,5,44,0,0,375,377,5,1,0,0,376,378,3,46,23,0,377,376,1,0,
        0,0,377,378,1,0,0,0,378,379,1,0,0,0,379,382,5,2,0,0,380,382,5,36,
        0,0,381,375,1,0,0,0,381,380,1,0,0,0,382,384,1,0,0,0,383,385,3,50,
        25,0,384,383,1,0,0,0,384,385,1,0,0,0,385,386,1,0,0,0,386,387,3,16,
        8,0,387,55,1,0,0,0,388,393,3,4,2,0,389,390,5,35,0,0,390,392,3,4,
        2,0,391,389,1,0,0,0,392,395,1,0,0,0,393,391,1,0,0,0,393,394,1,0,
        0,0,394,397,1,0,0,0,395,393,1,0,0,0,396,398,5,35,0,0,397,396,1,0,
        0,0,397,398,1,0,0,0,398,57,1,0,0,0,399,400,5,44,0,0,400,402,5,1,
        0,0,401,403,3,56,28,0,402,401,1,0,0,0,402,403,1,0,0,0,403,404,1,
        0,0,0,404,405,5,2,0,0,405,59,1,0,0,0,406,407,5,40,0,0,407,408,5,
        44,0,0,408,410,5,18,0,0,409,411,3,62,31,0,410,409,1,0,0,0,410,411,
        1,0,0,0,411,412,1,0,0,0,412,413,5,19,0,0,413,61,1,0,0,0,414,419,
        3,64,32,0,415,416,5,35,0,0,416,418,3,64,32,0,417,415,1,0,0,0,418,
        421,1,0,0,0,419,417,1,0,0,0,419,420,1,0,0,0,420,423,1,0,0,0,421,
        419,1,0,0,0,422,424,5,35,0,0,423,422,1,0,0,0,423,424,1,0,0,0,424,
        63,1,0,0,0,425,426,5,44,0,0,426,427,5,22,0,0,427,428,3,2,1,0,428,
        65,1,0,0,0,429,430,5,44,0,0,430,432,5,18,0,0,431,433,3,68,34,0,432,
        431,1,0,0,0,432,433,1,0,0,0,433,434,1,0,0,0,434,435,5,19,0,0,435,
        67,1,0,0,0,436,441,3,70,35,0,437,438,5,35,0,0,438,440,3,70,35,0,
        439,437,1,0,0,0,440,443,1,0,0,0,441,439,1,0,0,0,441,442,1,0,0,0,
        442,445,1,0,0,0,443,441,1,0,0,0,444,446,5,35,0,0,445,444,1,0,0,0,
        445,446,1,0,0,0,446,69,1,0,0,0,447,448,5,44,0,0,448,449,5,22,0,0,
        449,450,3,4,2,0,450,71,1,0,0,0,451,454,5,44,0,0,452,453,5,41,0,0,
        453,455,5,44,0,0,454,452,1,0,0,0,455,456,1,0,0,0,456,454,1,0,0,0,
        456,457,1,0,0,0,457,462,1,0,0,0,458,459,5,44,0,0,459,460,5,41,0,
        0,460,462,6,36,-1,0,461,451,1,0,0,0,461,458,1,0,0,0,462,73,1,0,0,
        0,49,77,95,109,121,123,142,150,152,157,162,181,185,193,201,206,216,
        226,235,242,247,251,255,258,282,294,299,307,309,323,334,347,354,
        358,362,369,377,381,384,393,397,402,410,419,423,432,441,445,456,
        461
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!RustLiteParser.__ATN) {
            RustLiteParser.__ATN = new antlr.ATNDeserializer().deserialize(RustLiteParser._serializedATN);
        }

        return RustLiteParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(RustLiteParser.literalNames, RustLiteParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return RustLiteParser.vocabulary;
    }

    private static readonly decisionsToDFA = RustLiteParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.EOF, 0)!;
    }
    public globalElement(): GlobalElementContext[];
    public globalElement(i: number): GlobalElementContext | null;
    public globalElement(i?: number): GlobalElementContext[] | GlobalElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GlobalElementContext);
        }

        return this.getRuleContext(i, GlobalElementContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_prog;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterProg) {
             listener.enterProg(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitProg) {
             listener.exitProg(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public U8_TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.U8_TYPE, 0);
    }
    public U16_TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.U16_TYPE, 0);
    }
    public U32_TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.U32_TYPE, 0);
    }
    public U64_TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.U64_TYPE, 0);
    }
    public I8_TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.I8_TYPE, 0);
    }
    public I16_TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.I16_TYPE, 0);
    }
    public I32_TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.I32_TYPE, 0);
    }
    public I64_TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.I64_TYPE, 0);
    }
    public BOOL_TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.BOOL_TYPE, 0);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_type;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterType) {
             listener.enterType(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitType) {
             listener.exitType(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitType) {
            return visitor.visitType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprContext extends antlr.ParserRuleContext {
    public _inner?: ExprContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.INT, 0);
    }
    public BOOL(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.BOOL, 0);
    }
    public arithExpr(): ArithExprContext | null {
        return this.getRuleContext(0, ArithExprContext);
    }
    public logicExpr(): LogicExprContext | null {
        return this.getRuleContext(0, LogicExprContext);
    }
    public structExpr(): StructExprContext | null {
        return this.getRuleContext(0, StructExprContext);
    }
    public fnCall(): FnCallContext | null {
        return this.getRuleContext(0, FnCallContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_expr;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterExpr) {
             listener.enterExpr(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitExpr) {
             listener.exitExpr(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitExpr) {
            return visitor.visitExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArithExprContext extends antlr.ParserRuleContext {
    public _left?: ArithExprContext;
    public _primary?: Token | null;
    public _fieldAccess?: StructFieldAccessContext;
    public _inner?: ArithExprContext;
    public _op?: Token | null;
    public _right?: ArithExprContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.INT, 0);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    public structFieldAccess(): StructFieldAccessContext | null {
        return this.getRuleContext(0, StructFieldAccessContext);
    }
    public arithExpr(): ArithExprContext[];
    public arithExpr(i: number): ArithExprContext | null;
    public arithExpr(i?: number): ArithExprContext[] | ArithExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ArithExprContext);
        }

        return this.getRuleContext(i, ArithExprContext);
    }
    public BOOL(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.BOOL, 0);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_arithExpr;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterArithExpr) {
             listener.enterArithExpr(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitArithExpr) {
             listener.exitArithExpr(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitArithExpr) {
            return visitor.visitArithExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogicExprContext extends antlr.ParserRuleContext {
    public _left?: LogicExprContext;
    public _primary?: Token | null;
    public _fieldAccess?: StructFieldAccessContext;
    public _inner?: LogicExprContext;
    public _arithLeft?: ArithExprContext;
    public _op?: Token | null;
    public _arithRight?: ArithExprContext;
    public _right?: LogicExprContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BOOL(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.BOOL, 0);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    public structFieldAccess(): StructFieldAccessContext | null {
        return this.getRuleContext(0, StructFieldAccessContext);
    }
    public logicExpr(): LogicExprContext[];
    public logicExpr(i: number): LogicExprContext | null;
    public logicExpr(i?: number): LogicExprContext[] | LogicExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LogicExprContext);
        }

        return this.getRuleContext(i, LogicExprContext);
    }
    public arithExpr(): ArithExprContext[];
    public arithExpr(i: number): ArithExprContext | null;
    public arithExpr(i?: number): ArithExprContext[] | ArithExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ArithExprContext);
        }

        return this.getRuleContext(i, ArithExprContext);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.INT, 0);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_logicExpr;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterLogicExpr) {
             listener.enterLogicExpr(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitLogicExpr) {
             listener.exitLogicExpr(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitLogicExpr) {
            return visitor.visitLogicExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public structInit(): StructInitContext | null {
        return this.getRuleContext(0, StructInitContext);
    }
    public structFieldAccess(): StructFieldAccessContext | null {
        return this.getRuleContext(0, StructFieldAccessContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_structExpr;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterStructExpr) {
             listener.enterStructExpr(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitStructExpr) {
             listener.exitStructExpr(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitStructExpr) {
            return visitor.visitStructExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GlobalElementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public fnDeclareStmt(): FnDeclareStmtContext | null {
        return this.getRuleContext(0, FnDeclareStmtContext);
    }
    public structDeclare(): StructDeclareContext | null {
        return this.getRuleContext(0, StructDeclareContext);
    }
    public constStmt(): ConstStmtContext | null {
        return this.getRuleContext(0, ConstStmtContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_globalElement;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterGlobalElement) {
             listener.enterGlobalElement(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitGlobalElement) {
             listener.exitGlobalElement(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitGlobalElement) {
            return visitor.visitGlobalElement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public exprStmt(): ExprStmtContext | null {
        return this.getRuleContext(0, ExprStmtContext);
    }
    public declareStmt(): DeclareStmtContext | null {
        return this.getRuleContext(0, DeclareStmtContext);
    }
    public constStmt(): ConstStmtContext | null {
        return this.getRuleContext(0, ConstStmtContext);
    }
    public condStmt(): CondStmtContext | null {
        return this.getRuleContext(0, CondStmtContext);
    }
    public loopStmt(): LoopStmtContext | null {
        return this.getRuleContext(0, LoopStmtContext);
    }
    public forStmt(): ForStmtContext | null {
        return this.getRuleContext(0, ForStmtContext);
    }
    public whileStmt(): WhileStmtContext | null {
        return this.getRuleContext(0, WhileStmtContext);
    }
    public loopControlStmt(): LoopControlStmtContext | null {
        return this.getRuleContext(0, LoopControlStmtContext);
    }
    public fnDeclareStmt(): FnDeclareStmtContext | null {
        return this.getRuleContext(0, FnDeclareStmtContext);
    }
    public returnStmt(): ReturnStmtContext | null {
        return this.getRuleContext(0, ReturnStmtContext);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public structDeclare(): StructDeclareContext | null {
        return this.getRuleContext(0, StructDeclareContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_stmt;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterStmt) {
             listener.enterStmt(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitStmt) {
             listener.exitStmt(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitStmt) {
            return visitor.visitStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public blockContent(): BlockContentContext {
        return this.getRuleContext(0, BlockContentContext)!;
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_block;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterBlock) {
             listener.enterBlock(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitBlock) {
             listener.exitBlock(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockContentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public stmts(): StmtsContext[];
    public stmts(i: number): StmtsContext | null;
    public stmts(i?: number): StmtsContext[] | StmtsContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StmtsContext);
        }

        return this.getRuleContext(i, StmtsContext);
    }
    public finalExpr(): FinalExprContext | null {
        return this.getRuleContext(0, FinalExprContext);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_blockContent;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterBlockContent) {
             listener.enterBlockContent(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitBlockContent) {
             listener.exitBlockContent(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitBlockContent) {
            return visitor.visitBlockContent(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StmtsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public stmt(): StmtContext[];
    public stmt(i: number): StmtContext | null;
    public stmt(i?: number): StmtContext[] | StmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }

        return this.getRuleContext(i, StmtContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_stmts;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterStmts) {
             listener.enterStmts(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitStmts) {
             listener.exitStmts(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitStmts) {
            return visitor.visitStmts(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FinalExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_finalExpr;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterFinalExpr) {
             listener.enterFinalExpr(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitFinalExpr) {
             listener.exitFinalExpr(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitFinalExpr) {
            return visitor.visitFinalExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_exprStmt;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterExprStmt) {
             listener.enterExprStmt(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitExprStmt) {
             listener.exitExprStmt(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitExprStmt) {
            return visitor.visitExprStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DeclareStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public exprStmt(): ExprStmtContext | null {
        return this.getRuleContext(0, ExprStmtContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_declareStmt;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterDeclareStmt) {
             listener.enterDeclareStmt(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitDeclareStmt) {
             listener.exitDeclareStmt(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitDeclareStmt) {
            return visitor.visitDeclareStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConstStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.IDENTIFIER, 0)!;
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public exprStmt(): ExprStmtContext {
        return this.getRuleContext(0, ExprStmtContext)!;
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_constStmt;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterConstStmt) {
             listener.enterConstStmt(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitConstStmt) {
             listener.exitConstStmt(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitConstStmt) {
            return visitor.visitConstStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CondStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public logicExpr(): LogicExprContext[];
    public logicExpr(i: number): LogicExprContext | null;
    public logicExpr(i?: number): LogicExprContext[] | LogicExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LogicExprContext);
        }

        return this.getRuleContext(i, LogicExprContext);
    }
    public block(): BlockContext[];
    public block(i: number): BlockContext | null;
    public block(i?: number): BlockContext[] | BlockContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BlockContext);
        }

        return this.getRuleContext(i, BlockContext);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_condStmt;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterCondStmt) {
             listener.enterCondStmt(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitCondStmt) {
             listener.exitCondStmt(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitCondStmt) {
            return visitor.visitCondStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LoopStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_loopStmt;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterLoopStmt) {
             listener.enterLoopStmt(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitLoopStmt) {
             listener.exitLoopStmt(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitLoopStmt) {
            return visitor.visitLoopStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhileStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public logicExpr(): LogicExprContext | null {
        return this.getRuleContext(0, LogicExprContext);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_whileStmt;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterWhileStmt) {
             listener.enterWhileStmt(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitWhileStmt) {
             listener.exitWhileStmt(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitWhileStmt) {
            return visitor.visitWhileStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LoopControlContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_loopControl;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterLoopControl) {
             listener.enterLoopControl(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitLoopControl) {
             listener.exitLoopControl(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitLoopControl) {
            return visitor.visitLoopControl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LoopControlStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public loopControl(): LoopControlContext {
        return this.getRuleContext(0, LoopControlContext)!;
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_loopControlStmt;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterLoopControlStmt) {
             listener.enterLoopControlStmt(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitLoopControlStmt) {
             listener.exitLoopControlStmt(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitLoopControlStmt) {
            return visitor.visitLoopControlStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IterableContext extends antlr.ParserRuleContext {
    public _op?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    public INT(): antlr.TerminalNode[];
    public INT(i: number): antlr.TerminalNode | null;
    public INT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustLiteParser.INT);
    	} else {
    		return this.getToken(RustLiteParser.INT, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_iterable;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterIterable) {
             listener.enterIterable(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitIterable) {
             listener.exitIterable(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitIterable) {
            return visitor.visitIterable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ForStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.IDENTIFIER, 0)!;
    }
    public iterable(): IterableContext {
        return this.getRuleContext(0, IterableContext)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_forStmt;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterForStmt) {
             listener.enterForStmt(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitForStmt) {
             listener.exitForStmt(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitForStmt) {
            return visitor.visitForStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.IDENTIFIER, 0)!;
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_param;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterParam) {
             listener.enterParam(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitParam) {
             listener.exitParam(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitParam) {
            return visitor.visitParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParamListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public param(): ParamContext[];
    public param(i: number): ParamContext | null;
    public param(i?: number): ParamContext[] | ParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParamContext);
        }

        return this.getRuleContext(i, ParamContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_paramList;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterParamList) {
             listener.enterParamList(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitParamList) {
             listener.exitParamList(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitParamList) {
            return visitor.visitParamList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReturnTypesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_returnTypes;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterReturnTypes) {
             listener.enterReturnTypes(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitReturnTypes) {
             listener.exitReturnTypes(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitReturnTypes) {
            return visitor.visitReturnTypes(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReturnTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public returnTypes(): ReturnTypesContext {
        return this.getRuleContext(0, ReturnTypesContext)!;
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_returnType;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterReturnType) {
             listener.enterReturnType(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitReturnType) {
             listener.exitReturnType(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitReturnType) {
            return visitor.visitReturnType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReturnStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_returnStmt;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterReturnStmt) {
             listener.enterReturnStmt(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitReturnStmt) {
             listener.exitReturnStmt(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitReturnStmt) {
            return visitor.visitReturnStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FnDeclareStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.IDENTIFIER, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public returnType(): ReturnTypeContext | null {
        return this.getRuleContext(0, ReturnTypeContext);
    }
    public paramList(): ParamListContext | null {
        return this.getRuleContext(0, ParamListContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_fnDeclareStmt;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterFnDeclareStmt) {
             listener.enterFnDeclareStmt(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitFnDeclareStmt) {
             listener.exitFnDeclareStmt(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitFnDeclareStmt) {
            return visitor.visitFnDeclareStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArgListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_argList;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterArgList) {
             listener.enterArgList(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitArgList) {
             listener.exitArgList(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitArgList) {
            return visitor.visitArgList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FnCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.IDENTIFIER, 0)!;
    }
    public argList(): ArgListContext | null {
        return this.getRuleContext(0, ArgListContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_fnCall;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterFnCall) {
             listener.enterFnCall(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitFnCall) {
             listener.exitFnCall(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitFnCall) {
            return visitor.visitFnCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructDeclareContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.IDENTIFIER, 0)!;
    }
    public structDeclareFieldList(): StructDeclareFieldListContext | null {
        return this.getRuleContext(0, StructDeclareFieldListContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_structDeclare;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterStructDeclare) {
             listener.enterStructDeclare(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitStructDeclare) {
             listener.exitStructDeclare(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitStructDeclare) {
            return visitor.visitStructDeclare(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructDeclareFieldListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public structDeclareField(): StructDeclareFieldContext[];
    public structDeclareField(i: number): StructDeclareFieldContext | null;
    public structDeclareField(i?: number): StructDeclareFieldContext[] | StructDeclareFieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StructDeclareFieldContext);
        }

        return this.getRuleContext(i, StructDeclareFieldContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_structDeclareFieldList;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterStructDeclareFieldList) {
             listener.enterStructDeclareFieldList(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitStructDeclareFieldList) {
             listener.exitStructDeclareFieldList(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitStructDeclareFieldList) {
            return visitor.visitStructDeclareFieldList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructDeclareFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.IDENTIFIER, 0)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_structDeclareField;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterStructDeclareField) {
             listener.enterStructDeclareField(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitStructDeclareField) {
             listener.exitStructDeclareField(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitStructDeclareField) {
            return visitor.visitStructDeclareField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructInitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.IDENTIFIER, 0)!;
    }
    public structInitFieldList(): StructInitFieldListContext | null {
        return this.getRuleContext(0, StructInitFieldListContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_structInit;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterStructInit) {
             listener.enterStructInit(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitStructInit) {
             listener.exitStructInit(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitStructInit) {
            return visitor.visitStructInit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructInitFieldListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public structInitField(): StructInitFieldContext[];
    public structInitField(i: number): StructInitFieldContext | null;
    public structInitField(i?: number): StructInitFieldContext[] | StructInitFieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StructInitFieldContext);
        }

        return this.getRuleContext(i, StructInitFieldContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_structInitFieldList;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterStructInitFieldList) {
             listener.enterStructInitFieldList(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitStructInitFieldList) {
             listener.exitStructInitFieldList(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitStructInitFieldList) {
            return visitor.visitStructInitFieldList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructInitFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.IDENTIFIER, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_structInitField;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterStructInitField) {
             listener.enterStructInitField(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitStructInitField) {
             listener.exitStructInitField(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitStructInitField) {
            return visitor.visitStructInitField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructFieldAccessContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode[];
    public IDENTIFIER(i: number): antlr.TerminalNode | null;
    public IDENTIFIER(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustLiteParser.IDENTIFIER);
    	} else {
    		return this.getToken(RustLiteParser.IDENTIFIER, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_structFieldAccess;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterStructFieldAccess) {
             listener.enterStructFieldAccess(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitStructFieldAccess) {
             listener.exitStructFieldAccess(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitStructFieldAccess) {
            return visitor.visitStructFieldAccess(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
