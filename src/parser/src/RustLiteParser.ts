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
    public static readonly T__41 = 42;
    public static readonly INT = 43;
    public static readonly BOOL = 44;
    public static readonly IDENTIFIER = 45;
    public static readonly U8_TYPE = 46;
    public static readonly U16_TYPE = 47;
    public static readonly U32_TYPE = 48;
    public static readonly U64_TYPE = 49;
    public static readonly I8_TYPE = 50;
    public static readonly I16_TYPE = 51;
    public static readonly I32_TYPE = 52;
    public static readonly I64_TYPE = 53;
    public static readonly BOOL_TYPE = 54;
    public static readonly STRING = 55;
    public static readonly METHOD_ACCESSOR = 56;
    public static readonly VECTOR_MODULE_NAME = 57;
    public static readonly WS = 58;
    public static readonly COMMENT = 59;
    public static readonly RULE_prog = 0;
    public static readonly RULE_type = 1;
    public static readonly RULE_expr = 2;
    public static readonly RULE_arithExpr = 3;
    public static readonly RULE_logicExpr = 4;
    public static readonly RULE_globalElement = 5;
    public static readonly RULE_stmt = 6;
    public static readonly RULE_block = 7;
    public static readonly RULE_blockContent = 8;
    public static readonly RULE_exprStmt = 9;
    public static readonly RULE_declareStmt = 10;
    public static readonly RULE_condStmt = 11;
    public static readonly RULE_whileStmt = 12;
    public static readonly RULE_loopControl = 13;
    public static readonly RULE_loopControlStmt = 14;
    public static readonly RULE_param = 15;
    public static readonly RULE_paramList = 16;
    public static readonly RULE_returnTypes = 17;
    public static readonly RULE_returnType = 18;
    public static readonly RULE_returnStmt = 19;
    public static readonly RULE_fnDeclareStmt = 20;
    public static readonly RULE_argList = 21;
    public static readonly RULE_fnCall = 22;
    public static readonly RULE_vectorType = 23;
    public static readonly RULE_vectorInit = 24;
    public static readonly RULE_vectorPush = 25;
    public static readonly RULE_vectorPop = 26;
    public static readonly RULE_vectorLen = 27;
    public static readonly RULE_vectorIndexAccess = 28;
    public static readonly RULE_vectorAssignment = 29;
    public static readonly RULE_vectorExpr = 30;
    public static readonly RULE_printlnMacro = 31;
    public static readonly RULE_printlnArgs = 32;

    public static readonly literalNames = [
        null, "'('", "')'", "'-'", "'*'", "'/'", "'%'", "'+'", "'>'", "'<'", 
        "'=='", "'!='", "'<='", "'>='", "'!'", "'&&'", "'||'", "'{'", "'}'", 
        "';'", "'let'", "'mut'", "':'", "'='", "'if'", "'else'", "'while'", 
        "'break'", "'continue'", "','", "'()'", "'->'", "'return'", "'fn'", 
        "'new'", "'vec'", "'['", "']'", "'.'", "'push'", "'pop'", "'len'", 
        "'println'", null, null, null, "'u8'", "'u16'", "'u32'", "'u64'", 
        "'i8'", "'i16'", "'i32'", "'i64'", "'bool'", null, "'::'", "'Vec'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, "INT", 
        "BOOL", "IDENTIFIER", "U8_TYPE", "U16_TYPE", "U32_TYPE", "U64_TYPE", 
        "I8_TYPE", "I16_TYPE", "I32_TYPE", "I64_TYPE", "BOOL_TYPE", "STRING", 
        "METHOD_ACCESSOR", "VECTOR_MODULE_NAME", "WS", "COMMENT"
    ];
    public static readonly ruleNames = [
        "prog", "type", "expr", "arithExpr", "logicExpr", "globalElement", 
        "stmt", "block", "blockContent", "exprStmt", "declareStmt", "condStmt", 
        "whileStmt", "loopControl", "loopControlStmt", "param", "paramList", 
        "returnTypes", "returnType", "returnStmt", "fnDeclareStmt", "argList", 
        "fnCall", "vectorType", "vectorInit", "vectorPush", "vectorPop", 
        "vectorLen", "vectorIndexAccess", "vectorAssignment", "vectorExpr", 
        "printlnMacro", "printlnArgs",
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
            this.state = 69;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 33) {
                {
                {
                this.state = 66;
                this.globalElement();
                }
                }
                this.state = 71;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 72;
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
        try {
            this.state = 84;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.U8_TYPE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 74;
                this.match(RustLiteParser.U8_TYPE);
                }
                break;
            case RustLiteParser.U16_TYPE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 75;
                this.match(RustLiteParser.U16_TYPE);
                }
                break;
            case RustLiteParser.U32_TYPE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 76;
                this.match(RustLiteParser.U32_TYPE);
                }
                break;
            case RustLiteParser.U64_TYPE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 77;
                this.match(RustLiteParser.U64_TYPE);
                }
                break;
            case RustLiteParser.I8_TYPE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 78;
                this.match(RustLiteParser.I8_TYPE);
                }
                break;
            case RustLiteParser.I16_TYPE:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 79;
                this.match(RustLiteParser.I16_TYPE);
                }
                break;
            case RustLiteParser.I32_TYPE:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 80;
                this.match(RustLiteParser.I32_TYPE);
                }
                break;
            case RustLiteParser.I64_TYPE:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 81;
                this.match(RustLiteParser.I64_TYPE);
                }
                break;
            case RustLiteParser.BOOL_TYPE:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 82;
                this.match(RustLiteParser.BOOL_TYPE);
                }
                break;
            case RustLiteParser.VECTOR_MODULE_NAME:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 83;
                this.vectorType();
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
    public expr(): ExprContext {
        let localContext = new ExprContext(this.context, this.state);
        this.enterRule(localContext, 4, RustLiteParser.RULE_expr);
        try {
            this.state = 97;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 86;
                this.match(RustLiteParser.T__0);
                this.state = 87;
                localContext._inner = this.expr();
                this.state = 88;
                this.match(RustLiteParser.T__1);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 90;
                this.match(RustLiteParser.IDENTIFIER);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 91;
                this.match(RustLiteParser.INT);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 92;
                this.match(RustLiteParser.BOOL);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 93;
                this.arithExpr(0);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 94;
                this.logicExpr(0);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 95;
                this.fnCall();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 96;
                this.vectorExpr();
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
            this.state = 110;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.INT:
                {
                this.state = 100;
                localContext._primary = this.match(RustLiteParser.INT);
                }
                break;
            case RustLiteParser.IDENTIFIER:
                {
                this.state = 101;
                localContext._primary = this.match(RustLiteParser.IDENTIFIER);
                }
                break;
            case RustLiteParser.T__0:
                {
                this.state = 102;
                this.match(RustLiteParser.T__0);
                this.state = 103;
                localContext._inner = this.arithExpr(0);
                this.state = 104;
                this.match(RustLiteParser.T__1);
                }
                break;
            case RustLiteParser.T__2:
                {
                this.state = 106;
                localContext._op = this.match(RustLiteParser.T__2);
                this.state = 107;
                this.arithExpr(5);
                }
                break;
            case RustLiteParser.BOOL:
                {
                this.state = 108;
                this.match(RustLiteParser.BOOL);
                this.notifyErrorListeners("Cannot use boolean in arithmetic expressions");
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 124;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 122;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
                    case 1:
                        {
                        localContext = new ArithExprContext(parentContext, parentState);
                        localContext._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                        this.state = 112;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 113;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 112) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 114;
                        localContext._right = this.arithExpr(5);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ArithExprContext(parentContext, parentState);
                        localContext._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                        this.state = 115;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 116;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 3 || _la === 7)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 117;
                        localContext._right = this.arithExpr(4);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ArithExprContext(parentContext, parentState);
                        localContext._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                        this.state = 118;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 119;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 5 || _la === 6)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 120;
                        this.match(RustLiteParser.INT);

                                              if ((localContext._right != null ? this.tokenStream.getTextFromRange(localContext._right.start, localContext._right.stop) : '') === 0) this.notifyErrorListeners("Division by zero");
                                          
                        }
                        break;
                    }
                    }
                }
                this.state = 126;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
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
            switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
            case 1:
                {
                this.state = 128;
                localContext._primary = this.match(RustLiteParser.BOOL);
                }
                break;
            case 2:
                {
                this.state = 129;
                localContext._primary = this.match(RustLiteParser.IDENTIFIER);
                }
                break;
            case 3:
                {
                this.state = 130;
                this.match(RustLiteParser.T__0);
                this.state = 131;
                localContext._inner = this.logicExpr(0);
                this.state = 132;
                this.match(RustLiteParser.T__1);
                }
                break;
            case 4:
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
            case 5:
                {
                this.state = 138;
                localContext._op = this.match(RustLiteParser.T__13);
                this.state = 139;
                localContext._right = this.logicExpr(4);
                }
                break;
            case 6:
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
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 150;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
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
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
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
    public globalElement(): GlobalElementContext {
        let localContext = new GlobalElementContext(this.context, this.state);
        this.enterRule(localContext, 10, RustLiteParser.RULE_globalElement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 155;
            this.fnDeclareStmt();
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
        this.enterRule(localContext, 12, RustLiteParser.RULE_stmt);
        try {
            this.state = 165;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.T__0:
            case RustLiteParser.T__2:
            case RustLiteParser.T__13:
            case RustLiteParser.T__34:
            case RustLiteParser.INT:
            case RustLiteParser.BOOL:
            case RustLiteParser.IDENTIFIER:
            case RustLiteParser.VECTOR_MODULE_NAME:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 157;
                this.exprStmt();
                }
                break;
            case RustLiteParser.T__19:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 158;
                this.declareStmt();
                }
                break;
            case RustLiteParser.T__23:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 159;
                this.condStmt();
                }
                break;
            case RustLiteParser.T__25:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 160;
                this.whileStmt();
                }
                break;
            case RustLiteParser.T__26:
            case RustLiteParser.T__27:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 161;
                this.loopControlStmt();
                }
                break;
            case RustLiteParser.T__32:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 162;
                this.fnDeclareStmt();
                }
                break;
            case RustLiteParser.T__31:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 163;
                this.returnStmt();
                }
                break;
            case RustLiteParser.T__16:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 164;
                this.block();
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
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 14, RustLiteParser.RULE_block);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 167;
            this.match(RustLiteParser.T__16);
            this.state = 168;
            this.blockContent();
            this.state = 169;
            this.match(RustLiteParser.T__17);
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
        this.enterRule(localContext, 16, RustLiteParser.RULE_blockContent);
        let _la: number;
        try {
            let alternative: number;
            this.state = 205;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 17, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 174;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 171;
                        this.stmt();
                        }
                        }
                    }
                    this.state = 176;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
                }
                this.state = 178;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16394) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4196097) !== 0)) {
                    {
                    this.state = 177;
                    localContext._finalExpr = this.expr();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 183;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 487735306) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 33568779) !== 0)) {
                    {
                    {
                    this.state = 180;
                    this.stmt();
                    }
                    }
                    this.state = 185;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 189;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 186;
                        this.stmt();
                        }
                        }
                    }
                    this.state = 191;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
                }
                this.state = 192;
                this.expr();
                this.state = 197;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        this.state = 195;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 14, this.context) ) {
                        case 1:
                            {
                            this.state = 193;
                            this.stmt();
                            }
                            break;
                        case 2:
                            {
                            this.state = 194;
                            this.expr();
                            }
                            break;
                        }
                        }
                    }
                    this.state = 199;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
                }
                this.state = 201;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16394) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4196097) !== 0)) {
                    {
                    this.state = 200;
                    localContext._finalExpr = this.expr();
                    }
                }

                this.notifyErrorListeners("Missing semicolon after expression")
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
    public exprStmt(): ExprStmtContext {
        let localContext = new ExprStmtContext(this.context, this.state);
        this.enterRule(localContext, 18, RustLiteParser.RULE_exprStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 207;
            this.expr();
            this.state = 208;
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
    public declareStmt(): DeclareStmtContext {
        let localContext = new DeclareStmtContext(this.context, this.state);
        this.enterRule(localContext, 20, RustLiteParser.RULE_declareStmt);
        let _la: number;
        try {
            this.state = 254;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 210;
                this.match(RustLiteParser.T__19);
                this.state = 212;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 21) {
                    {
                    this.state = 211;
                    this.match(RustLiteParser.T__20);
                    }
                }

                this.state = 214;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 215;
                this.match(RustLiteParser.T__21);
                this.state = 216;
                this.type_();
                this.state = 217;
                this.match(RustLiteParser.T__22);
                this.state = 218;
                this.exprStmt();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 220;
                this.match(RustLiteParser.T__19);
                this.state = 222;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 21) {
                    {
                    this.state = 221;
                    this.match(RustLiteParser.T__20);
                    }
                }

                this.state = 224;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 225;
                this.match(RustLiteParser.T__21);
                this.state = 226;
                this.type_();
                this.state = 227;
                this.match(RustLiteParser.T__18);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 229;
                this.match(RustLiteParser.T__19);
                this.state = 231;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 21) {
                    {
                    this.state = 230;
                    this.match(RustLiteParser.T__20);
                    }
                }

                this.state = 233;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 234;
                this.match(RustLiteParser.T__22);
                this.state = 235;
                this.exprStmt();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 236;
                this.match(RustLiteParser.T__19);
                this.state = 238;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 21) {
                    {
                    this.state = 237;
                    this.match(RustLiteParser.T__20);
                    }
                }

                this.state = 240;
                this.match(RustLiteParser.IDENTIFIER);

                                this.notifyErrorListeners("Variable declaration requires either type annotation or initialization");
                            
                this.state = 243;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 19) {
                    {
                    this.state = 242;
                    this.match(RustLiteParser.T__18);
                    }
                }

                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 245;
                this.match(RustLiteParser.T__19);
                this.state = 247;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 21) {
                    {
                    this.state = 246;
                    this.match(RustLiteParser.T__20);
                    }
                }

                this.state = 251;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 22) {
                    {
                    this.state = 249;
                    this.match(RustLiteParser.T__21);
                    this.state = 250;
                    this.type_();
                    }
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
    public condStmt(): CondStmtContext {
        let localContext = new CondStmtContext(this.context, this.state);
        this.enterRule(localContext, 22, RustLiteParser.RULE_condStmt);
        let _la: number;
        try {
            let alternative: number;
            this.state = 281;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 29, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 256;
                this.match(RustLiteParser.T__23);
                this.state = 257;
                this.logicExpr(0);
                this.state = 258;
                this.block();
                this.state = 266;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 26, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 259;
                        this.match(RustLiteParser.T__24);
                        this.state = 260;
                        this.match(RustLiteParser.T__23);
                        this.state = 261;
                        this.logicExpr(0);
                        this.state = 262;
                        this.block();
                        }
                        }
                    }
                    this.state = 268;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 26, this.context);
                }
                this.state = 271;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 25) {
                    {
                    this.state = 269;
                    this.match(RustLiteParser.T__24);
                    this.state = 270;
                    this.block();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 273;
                this.match(RustLiteParser.T__23);
                this.state = 274;
                this.expr();

                                this.notifyErrorListeners("Condition must be a boolean expression");
                            
                this.state = 276;
                this.block();
                this.state = 279;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 25) {
                    {
                    this.state = 277;
                    this.match(RustLiteParser.T__24);
                    this.state = 278;
                    this.block();
                    }
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
    public whileStmt(): WhileStmtContext {
        let localContext = new WhileStmtContext(this.context, this.state);
        this.enterRule(localContext, 24, RustLiteParser.RULE_whileStmt);
        try {
            this.state = 292;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 283;
                this.match(RustLiteParser.T__25);
                this.state = 284;
                this.logicExpr(0);
                this.state = 285;
                this.block();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 287;
                this.match(RustLiteParser.T__25);
                this.state = 288;
                this.expr();

                                this.notifyErrorListeners("Condition must be a boolean expression");
                            
                this.state = 290;
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
        this.enterRule(localContext, 26, RustLiteParser.RULE_loopControl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 294;
            _la = this.tokenStream.LA(1);
            if(!(_la === 27 || _la === 28)) {
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
        this.enterRule(localContext, 28, RustLiteParser.RULE_loopControlStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 296;
            this.loopControl();
            this.state = 297;
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
    public param(): ParamContext {
        let localContext = new ParamContext(this.context, this.state);
        this.enterRule(localContext, 30, RustLiteParser.RULE_param);
        try {
            this.state = 304;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 299;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 300;
                this.match(RustLiteParser.T__21);
                this.state = 301;
                this.type_();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 302;
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
        this.enterRule(localContext, 32, RustLiteParser.RULE_paramList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 306;
            this.param();
            this.state = 311;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 32, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 307;
                    this.match(RustLiteParser.T__28);
                    this.state = 308;
                    this.param();
                    }
                    }
                }
                this.state = 313;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 32, this.context);
            }
            this.state = 315;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 29) {
                {
                this.state = 314;
                this.match(RustLiteParser.T__28);
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
        this.enterRule(localContext, 34, RustLiteParser.RULE_returnTypes);
        try {
            this.state = 319;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.U8_TYPE:
            case RustLiteParser.U16_TYPE:
            case RustLiteParser.U32_TYPE:
            case RustLiteParser.U64_TYPE:
            case RustLiteParser.I8_TYPE:
            case RustLiteParser.I16_TYPE:
            case RustLiteParser.I32_TYPE:
            case RustLiteParser.I64_TYPE:
            case RustLiteParser.BOOL_TYPE:
            case RustLiteParser.VECTOR_MODULE_NAME:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 317;
                this.type_();
                }
                break;
            case RustLiteParser.T__29:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 318;
                this.match(RustLiteParser.T__29);
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
        this.enterRule(localContext, 36, RustLiteParser.RULE_returnType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 321;
            this.match(RustLiteParser.T__30);
            this.state = 322;
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
        this.enterRule(localContext, 38, RustLiteParser.RULE_returnStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 324;
            this.match(RustLiteParser.T__31);
            this.state = 326;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16394) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4196097) !== 0)) {
                {
                this.state = 325;
                this.expr();
                }
            }

            this.state = 328;
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
    public fnDeclareStmt(): FnDeclareStmtContext {
        let localContext = new FnDeclareStmtContext(this.context, this.state);
        this.enterRule(localContext, 40, RustLiteParser.RULE_fnDeclareStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 330;
            this.match(RustLiteParser.T__32);
            this.state = 331;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 338;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.T__0:
                {
                this.state = 332;
                this.match(RustLiteParser.T__0);
                this.state = 334;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 45) {
                    {
                    this.state = 333;
                    this.paramList();
                    }
                }

                this.state = 336;
                this.match(RustLiteParser.T__1);
                }
                break;
            case RustLiteParser.T__29:
                {
                this.state = 337;
                this.match(RustLiteParser.T__29);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 341;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 31) {
                {
                this.state = 340;
                this.returnType();
                }
            }

            this.state = 343;
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
        this.enterRule(localContext, 42, RustLiteParser.RULE_argList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 345;
            this.expr();
            this.state = 350;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 39, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 346;
                    this.match(RustLiteParser.T__28);
                    this.state = 347;
                    this.expr();
                    }
                    }
                }
                this.state = 352;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 39, this.context);
            }
            this.state = 354;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 29) {
                {
                this.state = 353;
                this.match(RustLiteParser.T__28);
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
        this.enterRule(localContext, 44, RustLiteParser.RULE_fnCall);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 356;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 357;
            this.match(RustLiteParser.T__0);
            this.state = 359;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16394) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4196097) !== 0)) {
                {
                this.state = 358;
                this.argList();
                }
            }

            this.state = 361;
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
    public vectorType(): VectorTypeContext {
        let localContext = new VectorTypeContext(this.context, this.state);
        this.enterRule(localContext, 46, RustLiteParser.RULE_vectorType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 363;
            this.match(RustLiteParser.VECTOR_MODULE_NAME);
            this.state = 364;
            this.match(RustLiteParser.T__8);
            this.state = 365;
            this.type_();
            this.state = 366;
            this.match(RustLiteParser.T__7);
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
    public vectorInit(): VectorInitContext {
        let localContext = new VectorInitContext(this.context, this.state);
        this.enterRule(localContext, 48, RustLiteParser.RULE_vectorInit);
        let _la: number;
        try {
            this.state = 386;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.VECTOR_MODULE_NAME:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 368;
                this.match(RustLiteParser.VECTOR_MODULE_NAME);
                this.state = 369;
                this.match(RustLiteParser.METHOD_ACCESSOR);
                this.state = 370;
                this.match(RustLiteParser.T__33);
                this.state = 374;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case RustLiteParser.T__29:
                    {
                    this.state = 371;
                    this.match(RustLiteParser.T__29);
                    }
                    break;
                case RustLiteParser.T__0:
                    {
                    this.state = 372;
                    this.match(RustLiteParser.T__0);
                    this.state = 373;
                    this.match(RustLiteParser.T__1);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            case RustLiteParser.T__34:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 376;
                this.match(RustLiteParser.T__34);
                this.state = 377;
                this.match(RustLiteParser.T__13);
                this.state = 378;
                this.match(RustLiteParser.T__35);
                this.state = 382;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 43 || _la === 44) {
                    {
                    {
                    this.state = 379;
                    localContext._initList = this.tokenStream.LT(1);
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 43 || _la === 44)) {
                        localContext._initList = this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    this.state = 384;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 385;
                this.match(RustLiteParser.T__36);
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
    public vectorPush(): VectorPushContext {
        let localContext = new VectorPushContext(this.context, this.state);
        this.enterRule(localContext, 50, RustLiteParser.RULE_vectorPush);
        try {
            this.state = 395;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 388;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 389;
                this.match(RustLiteParser.T__37);
                this.state = 390;
                this.match(RustLiteParser.T__38);
                this.state = 391;
                this.match(RustLiteParser.T__0);
                this.state = 392;
                this.match(RustLiteParser.INT);
                }
                break;
            case RustLiteParser.BOOL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 393;
                this.match(RustLiteParser.BOOL);
                this.state = 394;
                this.match(RustLiteParser.T__1);
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
    public vectorPop(): VectorPopContext {
        let localContext = new VectorPopContext(this.context, this.state);
        this.enterRule(localContext, 52, RustLiteParser.RULE_vectorPop);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 397;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 398;
            this.match(RustLiteParser.T__37);
            this.state = 399;
            this.match(RustLiteParser.T__39);
            this.state = 403;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.T__29:
                {
                this.state = 400;
                this.match(RustLiteParser.T__29);
                }
                break;
            case RustLiteParser.T__0:
                {
                this.state = 401;
                this.match(RustLiteParser.T__0);
                this.state = 402;
                this.match(RustLiteParser.T__1);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
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
    public vectorLen(): VectorLenContext {
        let localContext = new VectorLenContext(this.context, this.state);
        this.enterRule(localContext, 54, RustLiteParser.RULE_vectorLen);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 405;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 406;
            this.match(RustLiteParser.T__37);
            this.state = 407;
            this.match(RustLiteParser.T__40);
            this.state = 411;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.T__29:
                {
                this.state = 408;
                this.match(RustLiteParser.T__29);
                }
                break;
            case RustLiteParser.T__0:
                {
                this.state = 409;
                this.match(RustLiteParser.T__0);
                this.state = 410;
                this.match(RustLiteParser.T__1);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
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
    public vectorIndexAccess(): VectorIndexAccessContext {
        let localContext = new VectorIndexAccessContext(this.context, this.state);
        this.enterRule(localContext, 56, RustLiteParser.RULE_vectorIndexAccess);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 413;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 414;
            this.match(RustLiteParser.T__35);
            this.state = 415;
            this.expr();
            this.state = 416;
            this.match(RustLiteParser.T__36);
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
    public vectorAssignment(): VectorAssignmentContext {
        let localContext = new VectorAssignmentContext(this.context, this.state);
        this.enterRule(localContext, 58, RustLiteParser.RULE_vectorAssignment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 418;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 419;
            this.match(RustLiteParser.T__35);
            this.state = 420;
            this.expr();
            this.state = 421;
            this.match(RustLiteParser.T__36);
            this.state = 422;
            this.match(RustLiteParser.T__22);
            this.state = 423;
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
    public vectorExpr(): VectorExprContext {
        let localContext = new VectorExprContext(this.context, this.state);
        this.enterRule(localContext, 60, RustLiteParser.RULE_vectorExpr);
        try {
            this.state = 431;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 48, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 425;
                this.vectorInit();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 426;
                this.vectorPush();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 427;
                this.vectorPop();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 428;
                this.vectorLen();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 429;
                this.vectorIndexAccess();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 430;
                this.vectorAssignment();
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
    public printlnMacro(): PrintlnMacroContext {
        let localContext = new PrintlnMacroContext(this.context, this.state);
        this.enterRule(localContext, 62, RustLiteParser.RULE_printlnMacro);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 433;
            this.match(RustLiteParser.T__41);
            this.state = 434;
            this.match(RustLiteParser.T__13);
            this.state = 435;
            this.match(RustLiteParser.T__0);
            this.state = 436;
            this.printlnArgs();
            this.state = 437;
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
    public printlnArgs(): PrintlnArgsContext {
        let localContext = new PrintlnArgsContext(this.context, this.state);
        this.enterRule(localContext, 64, RustLiteParser.RULE_printlnArgs);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 439;
            this.match(RustLiteParser.STRING);
            this.state = 444;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 29) {
                {
                {
                this.state = 440;
                this.match(RustLiteParser.T__28);
                this.state = 441;
                this.expr();
                }
                }
                this.state = 446;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
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
        4,1,59,448,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,1,0,
        5,0,68,8,0,10,0,12,0,71,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,3,1,85,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,3,2,98,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,111,
        8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,123,8,3,10,3,12,
        3,126,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
        4,1,4,3,4,143,8,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,151,8,4,10,4,12,4,
        154,9,4,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,166,8,6,1,7,
        1,7,1,7,1,7,1,8,5,8,173,8,8,10,8,12,8,176,9,8,1,8,3,8,179,8,8,1,
        8,5,8,182,8,8,10,8,12,8,185,9,8,1,8,5,8,188,8,8,10,8,12,8,191,9,
        8,1,8,1,8,1,8,5,8,196,8,8,10,8,12,8,199,9,8,1,8,3,8,202,8,8,1,8,
        1,8,3,8,206,8,8,1,9,1,9,1,9,1,10,1,10,3,10,213,8,10,1,10,1,10,1,
        10,1,10,1,10,1,10,1,10,1,10,3,10,223,8,10,1,10,1,10,1,10,1,10,1,
        10,1,10,1,10,3,10,232,8,10,1,10,1,10,1,10,1,10,1,10,3,10,239,8,10,
        1,10,1,10,1,10,3,10,244,8,10,1,10,1,10,3,10,248,8,10,1,10,1,10,3,
        10,252,8,10,1,10,3,10,255,8,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
        1,11,5,11,265,8,11,10,11,12,11,268,9,11,1,11,1,11,3,11,272,8,11,
        1,11,1,11,1,11,1,11,1,11,1,11,3,11,280,8,11,3,11,282,8,11,1,12,1,
        12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,293,8,12,1,13,1,13,1,
        14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,3,15,305,8,15,1,16,1,16,1,
        16,5,16,310,8,16,10,16,12,16,313,9,16,1,16,3,16,316,8,16,1,17,1,
        17,3,17,320,8,17,1,18,1,18,1,18,1,19,1,19,3,19,327,8,19,1,19,1,19,
        1,20,1,20,1,20,1,20,3,20,335,8,20,1,20,1,20,3,20,339,8,20,1,20,3,
        20,342,8,20,1,20,1,20,1,21,1,21,1,21,5,21,349,8,21,10,21,12,21,352,
        9,21,1,21,3,21,355,8,21,1,22,1,22,1,22,3,22,360,8,22,1,22,1,22,1,
        23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,3,24,375,8,
        24,1,24,1,24,1,24,1,24,5,24,381,8,24,10,24,12,24,384,9,24,1,24,3,
        24,387,8,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,3,25,396,8,25,1,26,
        1,26,1,26,1,26,1,26,1,26,3,26,404,8,26,1,27,1,27,1,27,1,27,1,27,
        1,27,3,27,412,8,27,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,
        1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,3,30,432,8,30,1,31,
        1,31,1,31,1,31,1,31,1,31,1,32,1,32,1,32,5,32,443,8,32,10,32,12,32,
        446,9,32,1,32,0,2,6,8,33,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
        30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,0,6,1,0,4,
        6,2,0,3,3,7,7,1,0,5,6,1,0,8,13,1,0,27,28,1,0,43,44,500,0,69,1,0,
        0,0,2,84,1,0,0,0,4,97,1,0,0,0,6,110,1,0,0,0,8,142,1,0,0,0,10,155,
        1,0,0,0,12,165,1,0,0,0,14,167,1,0,0,0,16,205,1,0,0,0,18,207,1,0,
        0,0,20,254,1,0,0,0,22,281,1,0,0,0,24,292,1,0,0,0,26,294,1,0,0,0,
        28,296,1,0,0,0,30,304,1,0,0,0,32,306,1,0,0,0,34,319,1,0,0,0,36,321,
        1,0,0,0,38,324,1,0,0,0,40,330,1,0,0,0,42,345,1,0,0,0,44,356,1,0,
        0,0,46,363,1,0,0,0,48,386,1,0,0,0,50,395,1,0,0,0,52,397,1,0,0,0,
        54,405,1,0,0,0,56,413,1,0,0,0,58,418,1,0,0,0,60,431,1,0,0,0,62,433,
        1,0,0,0,64,439,1,0,0,0,66,68,3,10,5,0,67,66,1,0,0,0,68,71,1,0,0,
        0,69,67,1,0,0,0,69,70,1,0,0,0,70,72,1,0,0,0,71,69,1,0,0,0,72,73,
        5,0,0,1,73,1,1,0,0,0,74,85,5,46,0,0,75,85,5,47,0,0,76,85,5,48,0,
        0,77,85,5,49,0,0,78,85,5,50,0,0,79,85,5,51,0,0,80,85,5,52,0,0,81,
        85,5,53,0,0,82,85,5,54,0,0,83,85,3,46,23,0,84,74,1,0,0,0,84,75,1,
        0,0,0,84,76,1,0,0,0,84,77,1,0,0,0,84,78,1,0,0,0,84,79,1,0,0,0,84,
        80,1,0,0,0,84,81,1,0,0,0,84,82,1,0,0,0,84,83,1,0,0,0,85,3,1,0,0,
        0,86,87,5,1,0,0,87,88,3,4,2,0,88,89,5,2,0,0,89,98,1,0,0,0,90,98,
        5,45,0,0,91,98,5,43,0,0,92,98,5,44,0,0,93,98,3,6,3,0,94,98,3,8,4,
        0,95,98,3,44,22,0,96,98,3,60,30,0,97,86,1,0,0,0,97,90,1,0,0,0,97,
        91,1,0,0,0,97,92,1,0,0,0,97,93,1,0,0,0,97,94,1,0,0,0,97,95,1,0,0,
        0,97,96,1,0,0,0,98,5,1,0,0,0,99,100,6,3,-1,0,100,111,5,43,0,0,101,
        111,5,45,0,0,102,103,5,1,0,0,103,104,3,6,3,0,104,105,5,2,0,0,105,
        111,1,0,0,0,106,107,5,3,0,0,107,111,3,6,3,5,108,109,5,44,0,0,109,
        111,6,3,-1,0,110,99,1,0,0,0,110,101,1,0,0,0,110,102,1,0,0,0,110,
        106,1,0,0,0,110,108,1,0,0,0,111,124,1,0,0,0,112,113,10,4,0,0,113,
        114,7,0,0,0,114,123,3,6,3,5,115,116,10,3,0,0,116,117,7,1,0,0,117,
        123,3,6,3,4,118,119,10,1,0,0,119,120,7,2,0,0,120,121,5,43,0,0,121,
        123,6,3,-1,0,122,112,1,0,0,0,122,115,1,0,0,0,122,118,1,0,0,0,123,
        126,1,0,0,0,124,122,1,0,0,0,124,125,1,0,0,0,125,7,1,0,0,0,126,124,
        1,0,0,0,127,128,6,4,-1,0,128,143,5,44,0,0,129,143,5,45,0,0,130,131,
        5,1,0,0,131,132,3,8,4,0,132,133,5,2,0,0,133,143,1,0,0,0,134,135,
        3,6,3,0,135,136,7,3,0,0,136,137,3,6,3,0,137,143,1,0,0,0,138,139,
        5,14,0,0,139,143,3,8,4,4,140,141,5,43,0,0,141,143,6,4,-1,0,142,127,
        1,0,0,0,142,129,1,0,0,0,142,130,1,0,0,0,142,134,1,0,0,0,142,138,
        1,0,0,0,142,140,1,0,0,0,143,152,1,0,0,0,144,145,10,3,0,0,145,146,
        5,15,0,0,146,151,3,8,4,4,147,148,10,2,0,0,148,149,5,16,0,0,149,151,
        3,8,4,3,150,144,1,0,0,0,150,147,1,0,0,0,151,154,1,0,0,0,152,150,
        1,0,0,0,152,153,1,0,0,0,153,9,1,0,0,0,154,152,1,0,0,0,155,156,3,
        40,20,0,156,11,1,0,0,0,157,166,3,18,9,0,158,166,3,20,10,0,159,166,
        3,22,11,0,160,166,3,24,12,0,161,166,3,28,14,0,162,166,3,40,20,0,
        163,166,3,38,19,0,164,166,3,14,7,0,165,157,1,0,0,0,165,158,1,0,0,
        0,165,159,1,0,0,0,165,160,1,0,0,0,165,161,1,0,0,0,165,162,1,0,0,
        0,165,163,1,0,0,0,165,164,1,0,0,0,166,13,1,0,0,0,167,168,5,17,0,
        0,168,169,3,16,8,0,169,170,5,18,0,0,170,15,1,0,0,0,171,173,3,12,
        6,0,172,171,1,0,0,0,173,176,1,0,0,0,174,172,1,0,0,0,174,175,1,0,
        0,0,175,178,1,0,0,0,176,174,1,0,0,0,177,179,3,4,2,0,178,177,1,0,
        0,0,178,179,1,0,0,0,179,206,1,0,0,0,180,182,3,12,6,0,181,180,1,0,
        0,0,182,185,1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,0,184,206,1,0,
        0,0,185,183,1,0,0,0,186,188,3,12,6,0,187,186,1,0,0,0,188,191,1,0,
        0,0,189,187,1,0,0,0,189,190,1,0,0,0,190,192,1,0,0,0,191,189,1,0,
        0,0,192,197,3,4,2,0,193,196,3,12,6,0,194,196,3,4,2,0,195,193,1,0,
        0,0,195,194,1,0,0,0,196,199,1,0,0,0,197,195,1,0,0,0,197,198,1,0,
        0,0,198,201,1,0,0,0,199,197,1,0,0,0,200,202,3,4,2,0,201,200,1,0,
        0,0,201,202,1,0,0,0,202,203,1,0,0,0,203,204,6,8,-1,0,204,206,1,0,
        0,0,205,174,1,0,0,0,205,183,1,0,0,0,205,189,1,0,0,0,206,17,1,0,0,
        0,207,208,3,4,2,0,208,209,5,19,0,0,209,19,1,0,0,0,210,212,5,20,0,
        0,211,213,5,21,0,0,212,211,1,0,0,0,212,213,1,0,0,0,213,214,1,0,0,
        0,214,215,5,45,0,0,215,216,5,22,0,0,216,217,3,2,1,0,217,218,5,23,
        0,0,218,219,3,18,9,0,219,255,1,0,0,0,220,222,5,20,0,0,221,223,5,
        21,0,0,222,221,1,0,0,0,222,223,1,0,0,0,223,224,1,0,0,0,224,225,5,
        45,0,0,225,226,5,22,0,0,226,227,3,2,1,0,227,228,5,19,0,0,228,255,
        1,0,0,0,229,231,5,20,0,0,230,232,5,21,0,0,231,230,1,0,0,0,231,232,
        1,0,0,0,232,233,1,0,0,0,233,234,5,45,0,0,234,235,5,23,0,0,235,255,
        3,18,9,0,236,238,5,20,0,0,237,239,5,21,0,0,238,237,1,0,0,0,238,239,
        1,0,0,0,239,240,1,0,0,0,240,241,5,45,0,0,241,243,6,10,-1,0,242,244,
        5,19,0,0,243,242,1,0,0,0,243,244,1,0,0,0,244,255,1,0,0,0,245,247,
        5,20,0,0,246,248,5,21,0,0,247,246,1,0,0,0,247,248,1,0,0,0,248,251,
        1,0,0,0,249,250,5,22,0,0,250,252,3,2,1,0,251,249,1,0,0,0,251,252,
        1,0,0,0,252,253,1,0,0,0,253,255,6,10,-1,0,254,210,1,0,0,0,254,220,
        1,0,0,0,254,229,1,0,0,0,254,236,1,0,0,0,254,245,1,0,0,0,255,21,1,
        0,0,0,256,257,5,24,0,0,257,258,3,8,4,0,258,266,3,14,7,0,259,260,
        5,25,0,0,260,261,5,24,0,0,261,262,3,8,4,0,262,263,3,14,7,0,263,265,
        1,0,0,0,264,259,1,0,0,0,265,268,1,0,0,0,266,264,1,0,0,0,266,267,
        1,0,0,0,267,271,1,0,0,0,268,266,1,0,0,0,269,270,5,25,0,0,270,272,
        3,14,7,0,271,269,1,0,0,0,271,272,1,0,0,0,272,282,1,0,0,0,273,274,
        5,24,0,0,274,275,3,4,2,0,275,276,6,11,-1,0,276,279,3,14,7,0,277,
        278,5,25,0,0,278,280,3,14,7,0,279,277,1,0,0,0,279,280,1,0,0,0,280,
        282,1,0,0,0,281,256,1,0,0,0,281,273,1,0,0,0,282,23,1,0,0,0,283,284,
        5,26,0,0,284,285,3,8,4,0,285,286,3,14,7,0,286,293,1,0,0,0,287,288,
        5,26,0,0,288,289,3,4,2,0,289,290,6,12,-1,0,290,291,3,14,7,0,291,
        293,1,0,0,0,292,283,1,0,0,0,292,287,1,0,0,0,293,25,1,0,0,0,294,295,
        7,4,0,0,295,27,1,0,0,0,296,297,3,26,13,0,297,298,5,19,0,0,298,29,
        1,0,0,0,299,300,5,45,0,0,300,301,5,22,0,0,301,305,3,2,1,0,302,303,
        5,45,0,0,303,305,6,15,-1,0,304,299,1,0,0,0,304,302,1,0,0,0,305,31,
        1,0,0,0,306,311,3,30,15,0,307,308,5,29,0,0,308,310,3,30,15,0,309,
        307,1,0,0,0,310,313,1,0,0,0,311,309,1,0,0,0,311,312,1,0,0,0,312,
        315,1,0,0,0,313,311,1,0,0,0,314,316,5,29,0,0,315,314,1,0,0,0,315,
        316,1,0,0,0,316,33,1,0,0,0,317,320,3,2,1,0,318,320,5,30,0,0,319,
        317,1,0,0,0,319,318,1,0,0,0,320,35,1,0,0,0,321,322,5,31,0,0,322,
        323,3,34,17,0,323,37,1,0,0,0,324,326,5,32,0,0,325,327,3,4,2,0,326,
        325,1,0,0,0,326,327,1,0,0,0,327,328,1,0,0,0,328,329,5,19,0,0,329,
        39,1,0,0,0,330,331,5,33,0,0,331,338,5,45,0,0,332,334,5,1,0,0,333,
        335,3,32,16,0,334,333,1,0,0,0,334,335,1,0,0,0,335,336,1,0,0,0,336,
        339,5,2,0,0,337,339,5,30,0,0,338,332,1,0,0,0,338,337,1,0,0,0,339,
        341,1,0,0,0,340,342,3,36,18,0,341,340,1,0,0,0,341,342,1,0,0,0,342,
        343,1,0,0,0,343,344,3,14,7,0,344,41,1,0,0,0,345,350,3,4,2,0,346,
        347,5,29,0,0,347,349,3,4,2,0,348,346,1,0,0,0,349,352,1,0,0,0,350,
        348,1,0,0,0,350,351,1,0,0,0,351,354,1,0,0,0,352,350,1,0,0,0,353,
        355,5,29,0,0,354,353,1,0,0,0,354,355,1,0,0,0,355,43,1,0,0,0,356,
        357,5,45,0,0,357,359,5,1,0,0,358,360,3,42,21,0,359,358,1,0,0,0,359,
        360,1,0,0,0,360,361,1,0,0,0,361,362,5,2,0,0,362,45,1,0,0,0,363,364,
        5,57,0,0,364,365,5,9,0,0,365,366,3,2,1,0,366,367,5,8,0,0,367,47,
        1,0,0,0,368,369,5,57,0,0,369,370,5,56,0,0,370,374,5,34,0,0,371,375,
        5,30,0,0,372,373,5,1,0,0,373,375,5,2,0,0,374,371,1,0,0,0,374,372,
        1,0,0,0,375,387,1,0,0,0,376,377,5,35,0,0,377,378,5,14,0,0,378,382,
        5,36,0,0,379,381,7,5,0,0,380,379,1,0,0,0,381,384,1,0,0,0,382,380,
        1,0,0,0,382,383,1,0,0,0,383,385,1,0,0,0,384,382,1,0,0,0,385,387,
        5,37,0,0,386,368,1,0,0,0,386,376,1,0,0,0,387,49,1,0,0,0,388,389,
        5,45,0,0,389,390,5,38,0,0,390,391,5,39,0,0,391,392,5,1,0,0,392,396,
        5,43,0,0,393,394,5,44,0,0,394,396,5,2,0,0,395,388,1,0,0,0,395,393,
        1,0,0,0,396,51,1,0,0,0,397,398,5,45,0,0,398,399,5,38,0,0,399,403,
        5,40,0,0,400,404,5,30,0,0,401,402,5,1,0,0,402,404,5,2,0,0,403,400,
        1,0,0,0,403,401,1,0,0,0,404,53,1,0,0,0,405,406,5,45,0,0,406,407,
        5,38,0,0,407,411,5,41,0,0,408,412,5,30,0,0,409,410,5,1,0,0,410,412,
        5,2,0,0,411,408,1,0,0,0,411,409,1,0,0,0,412,55,1,0,0,0,413,414,5,
        45,0,0,414,415,5,36,0,0,415,416,3,4,2,0,416,417,5,37,0,0,417,57,
        1,0,0,0,418,419,5,45,0,0,419,420,5,36,0,0,420,421,3,4,2,0,421,422,
        5,37,0,0,422,423,5,23,0,0,423,424,3,4,2,0,424,59,1,0,0,0,425,432,
        3,48,24,0,426,432,3,50,25,0,427,432,3,52,26,0,428,432,3,54,27,0,
        429,432,3,56,28,0,430,432,3,58,29,0,431,425,1,0,0,0,431,426,1,0,
        0,0,431,427,1,0,0,0,431,428,1,0,0,0,431,429,1,0,0,0,431,430,1,0,
        0,0,432,61,1,0,0,0,433,434,5,42,0,0,434,435,5,14,0,0,435,436,5,1,
        0,0,436,437,3,64,32,0,437,438,5,2,0,0,438,63,1,0,0,0,439,444,5,55,
        0,0,440,441,5,29,0,0,441,443,3,4,2,0,442,440,1,0,0,0,443,446,1,0,
        0,0,444,442,1,0,0,0,444,445,1,0,0,0,445,65,1,0,0,0,446,444,1,0,0,
        0,50,69,84,97,110,122,124,142,150,152,165,174,178,183,189,195,197,
        201,205,212,222,231,238,243,247,251,254,266,271,279,281,292,304,
        311,315,319,326,334,338,341,350,354,359,374,382,386,395,403,411,
        431,444
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
    public vectorType(): VectorTypeContext | null {
        return this.getRuleContext(0, VectorTypeContext);
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
    public fnCall(): FnCallContext | null {
        return this.getRuleContext(0, FnCallContext);
    }
    public vectorExpr(): VectorExprContext | null {
        return this.getRuleContext(0, VectorExprContext);
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


export class GlobalElementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public fnDeclareStmt(): FnDeclareStmtContext {
        return this.getRuleContext(0, FnDeclareStmtContext)!;
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
    public condStmt(): CondStmtContext | null {
        return this.getRuleContext(0, CondStmtContext);
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
    public _finalExpr?: ExprContext;
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
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
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


export class VectorTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public VECTOR_MODULE_NAME(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.VECTOR_MODULE_NAME, 0)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_vectorType;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterVectorType) {
             listener.enterVectorType(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitVectorType) {
             listener.exitVectorType(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitVectorType) {
            return visitor.visitVectorType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VectorInitContext extends antlr.ParserRuleContext {
    public _initList?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public VECTOR_MODULE_NAME(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.VECTOR_MODULE_NAME, 0);
    }
    public METHOD_ACCESSOR(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.METHOD_ACCESSOR, 0);
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
    public BOOL(): antlr.TerminalNode[];
    public BOOL(i: number): antlr.TerminalNode | null;
    public BOOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustLiteParser.BOOL);
    	} else {
    		return this.getToken(RustLiteParser.BOOL, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_vectorInit;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterVectorInit) {
             listener.enterVectorInit(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitVectorInit) {
             listener.exitVectorInit(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitVectorInit) {
            return visitor.visitVectorInit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VectorPushContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
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
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_vectorPush;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterVectorPush) {
             listener.enterVectorPush(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitVectorPush) {
             listener.exitVectorPush(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitVectorPush) {
            return visitor.visitVectorPush(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VectorPopContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_vectorPop;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterVectorPop) {
             listener.enterVectorPop(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitVectorPop) {
             listener.exitVectorPop(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitVectorPop) {
            return visitor.visitVectorPop(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VectorLenContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_vectorLen;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterVectorLen) {
             listener.enterVectorLen(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitVectorLen) {
             listener.exitVectorLen(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitVectorLen) {
            return visitor.visitVectorLen(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VectorIndexAccessContext extends antlr.ParserRuleContext {
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
        return RustLiteParser.RULE_vectorIndexAccess;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterVectorIndexAccess) {
             listener.enterVectorIndexAccess(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitVectorIndexAccess) {
             listener.exitVectorIndexAccess(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitVectorIndexAccess) {
            return visitor.visitVectorIndexAccess(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VectorAssignmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.IDENTIFIER, 0)!;
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
        return RustLiteParser.RULE_vectorAssignment;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterVectorAssignment) {
             listener.enterVectorAssignment(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitVectorAssignment) {
             listener.exitVectorAssignment(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitVectorAssignment) {
            return visitor.visitVectorAssignment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VectorExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public vectorInit(): VectorInitContext | null {
        return this.getRuleContext(0, VectorInitContext);
    }
    public vectorPush(): VectorPushContext | null {
        return this.getRuleContext(0, VectorPushContext);
    }
    public vectorPop(): VectorPopContext | null {
        return this.getRuleContext(0, VectorPopContext);
    }
    public vectorLen(): VectorLenContext | null {
        return this.getRuleContext(0, VectorLenContext);
    }
    public vectorIndexAccess(): VectorIndexAccessContext | null {
        return this.getRuleContext(0, VectorIndexAccessContext);
    }
    public vectorAssignment(): VectorAssignmentContext | null {
        return this.getRuleContext(0, VectorAssignmentContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_vectorExpr;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterVectorExpr) {
             listener.enterVectorExpr(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitVectorExpr) {
             listener.exitVectorExpr(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitVectorExpr) {
            return visitor.visitVectorExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrintlnMacroContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public printlnArgs(): PrintlnArgsContext {
        return this.getRuleContext(0, PrintlnArgsContext)!;
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_printlnMacro;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterPrintlnMacro) {
             listener.enterPrintlnMacro(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitPrintlnMacro) {
             listener.exitPrintlnMacro(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitPrintlnMacro) {
            return visitor.visitPrintlnMacro(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrintlnArgsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.STRING, 0)!;
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
        return RustLiteParser.RULE_printlnArgs;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterPrintlnArgs) {
             listener.enterPrintlnArgs(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitPrintlnArgs) {
             listener.exitPrintlnArgs(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitPrintlnArgs) {
            return visitor.visitPrintlnArgs(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
