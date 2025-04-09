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
    public static readonly INT = 35;
    public static readonly BOOL = 36;
    public static readonly IDENTIFIER = 37;
    public static readonly U8_TYPE = 38;
    public static readonly U16_TYPE = 39;
    public static readonly U32_TYPE = 40;
    public static readonly U64_TYPE = 41;
    public static readonly I8_TYPE = 42;
    public static readonly I16_TYPE = 43;
    public static readonly I32_TYPE = 44;
    public static readonly I64_TYPE = 45;
    public static readonly BOOL_TYPE = 46;
    public static readonly WS = 47;
    public static readonly COMMENT = 48;
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
    public static readonly RULE_constStmt = 11;
    public static readonly RULE_condStmt = 12;
    public static readonly RULE_whileStmt = 13;
    public static readonly RULE_loopControl = 14;
    public static readonly RULE_loopControlStmt = 15;
    public static readonly RULE_param = 16;
    public static readonly RULE_paramList = 17;
    public static readonly RULE_returnTypes = 18;
    public static readonly RULE_returnType = 19;
    public static readonly RULE_returnStmt = 20;
    public static readonly RULE_fnDeclareStmt = 21;
    public static readonly RULE_argList = 22;
    public static readonly RULE_fnCall = 23;

    public static readonly literalNames = [
        null, "'('", "')'", "'-'", "'*'", "'/'", "'%'", "'+'", "'>'", "'<'", 
        "'=='", "'!='", "'<='", "'>='", "'!'", "'&&'", "'||'", "'{'", "'}'", 
        "';'", "'let'", "':'", "'='", "'const'", "'mut'", "'if'", "'else'", 
        "'while'", "'break'", "'continue'", "','", "'()'", "'->'", "'return'", 
        "'fn'", null, null, null, "'u8'", "'u16'", "'u32'", "'u64'", "'i8'", 
        "'i16'", "'i32'", "'i64'", "'bool'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, "INT", "BOOL", "IDENTIFIER", "U8_TYPE", "U16_TYPE", 
        "U32_TYPE", "U64_TYPE", "I8_TYPE", "I16_TYPE", "I32_TYPE", "I64_TYPE", 
        "BOOL_TYPE", "WS", "COMMENT"
    ];
    public static readonly ruleNames = [
        "prog", "type", "expr", "arithExpr", "logicExpr", "globalElement", 
        "stmt", "block", "blockContent", "exprStmt", "declareStmt", "constStmt", 
        "condStmt", "whileStmt", "loopControl", "loopControlStmt", "param", 
        "paramList", "returnTypes", "returnType", "returnStmt", "fnDeclareStmt", 
        "argList", "fnCall",
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
            this.state = 51;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23 || _la === 34) {
                {
                {
                this.state = 48;
                this.globalElement();
                }
                }
                this.state = 53;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 54;
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
            this.state = 56;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 1023) !== 0))) {
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
            this.state = 68;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 58;
                this.match(RustLiteParser.T__0);
                this.state = 59;
                localContext._inner = this.expr();
                this.state = 60;
                this.match(RustLiteParser.T__1);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 62;
                this.match(RustLiteParser.IDENTIFIER);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 63;
                this.match(RustLiteParser.INT);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 64;
                this.match(RustLiteParser.BOOL);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 65;
                this.arithExpr(0);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 66;
                this.logicExpr(0);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 67;
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
            this.state = 81;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.INT:
                {
                this.state = 71;
                localContext._primary = this.match(RustLiteParser.INT);
                }
                break;
            case RustLiteParser.IDENTIFIER:
                {
                this.state = 72;
                localContext._primary = this.match(RustLiteParser.IDENTIFIER);
                }
                break;
            case RustLiteParser.T__0:
                {
                this.state = 73;
                this.match(RustLiteParser.T__0);
                this.state = 74;
                localContext._inner = this.arithExpr(0);
                this.state = 75;
                this.match(RustLiteParser.T__1);
                }
                break;
            case RustLiteParser.T__2:
                {
                this.state = 77;
                localContext._op = this.match(RustLiteParser.T__2);
                this.state = 78;
                this.arithExpr(5);
                }
                break;
            case RustLiteParser.BOOL:
                {
                this.state = 79;
                this.match(RustLiteParser.BOOL);
                this.notifyErrorListeners("Cannot use boolean in arithmetic expressions");
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 95;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 93;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
                    case 1:
                        {
                        localContext = new ArithExprContext(parentContext, parentState);
                        localContext._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                        this.state = 83;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 84;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 112) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 85;
                        localContext._right = this.arithExpr(5);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ArithExprContext(parentContext, parentState);
                        localContext._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                        this.state = 86;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 87;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 3 || _la === 7)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 88;
                        localContext._right = this.arithExpr(4);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ArithExprContext(parentContext, parentState);
                        localContext._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                        this.state = 89;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 90;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 5 || _la === 6)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 91;
                        this.match(RustLiteParser.INT);

                                              if ((localContext._right != null ? this.tokenStream.getTextFromRange(localContext._right.start, localContext._right.stop) : '') === 0) this.notifyErrorListeners("Division by zero");
                                          
                        }
                        break;
                    }
                    }
                }
                this.state = 97;
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
            this.state = 113;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
            case 1:
                {
                this.state = 99;
                localContext._primary = this.match(RustLiteParser.BOOL);
                }
                break;
            case 2:
                {
                this.state = 100;
                localContext._primary = this.match(RustLiteParser.IDENTIFIER);
                }
                break;
            case 3:
                {
                this.state = 101;
                this.match(RustLiteParser.T__0);
                this.state = 102;
                localContext._inner = this.logicExpr(0);
                this.state = 103;
                this.match(RustLiteParser.T__1);
                }
                break;
            case 4:
                {
                this.state = 105;
                localContext._arithLeft = this.arithExpr(0);
                this.state = 106;
                localContext._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 16128) !== 0))) {
                    localContext._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 107;
                localContext._arithRight = this.arithExpr(0);
                }
                break;
            case 5:
                {
                this.state = 109;
                localContext._op = this.match(RustLiteParser.T__13);
                this.state = 110;
                localContext._right = this.logicExpr(4);
                }
                break;
            case 6:
                {
                this.state = 111;
                this.match(RustLiteParser.INT);
                this.notifyErrorListeners("Cannot use INT without comparison operators in logical expressions");
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 123;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 121;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
                    case 1:
                        {
                        localContext = new LogicExprContext(parentContext, parentState);
                        localContext._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_logicExpr);
                        this.state = 115;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 116;
                        localContext._op = this.match(RustLiteParser.T__14);
                        this.state = 117;
                        localContext._right = this.logicExpr(4);
                        }
                        break;
                    case 2:
                        {
                        localContext = new LogicExprContext(parentContext, parentState);
                        localContext._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_logicExpr);
                        this.state = 118;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 119;
                        localContext._op = this.match(RustLiteParser.T__15);
                        this.state = 120;
                        localContext._right = this.logicExpr(3);
                        }
                        break;
                    }
                    }
                }
                this.state = 125;
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
    public globalElement(): GlobalElementContext {
        let localContext = new GlobalElementContext(this.context, this.state);
        this.enterRule(localContext, 10, RustLiteParser.RULE_globalElement);
        try {
            this.state = 128;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.T__33:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 126;
                this.fnDeclareStmt();
                }
                break;
            case RustLiteParser.T__22:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 127;
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
        this.enterRule(localContext, 12, RustLiteParser.RULE_stmt);
        try {
            this.state = 139;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.T__0:
            case RustLiteParser.T__2:
            case RustLiteParser.T__13:
            case RustLiteParser.INT:
            case RustLiteParser.BOOL:
            case RustLiteParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 130;
                this.exprStmt();
                }
                break;
            case RustLiteParser.T__19:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 131;
                this.declareStmt();
                }
                break;
            case RustLiteParser.T__22:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 132;
                this.constStmt();
                }
                break;
            case RustLiteParser.T__24:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 133;
                this.condStmt();
                }
                break;
            case RustLiteParser.T__26:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 134;
                this.whileStmt();
                }
                break;
            case RustLiteParser.T__27:
            case RustLiteParser.T__28:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 135;
                this.loopControlStmt();
                }
                break;
            case RustLiteParser.T__33:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 136;
                this.fnDeclareStmt();
                }
                break;
            case RustLiteParser.T__32:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 137;
                this.returnStmt();
                }
                break;
            case RustLiteParser.T__16:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 138;
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
            this.state = 141;
            this.match(RustLiteParser.T__16);
            this.state = 142;
            this.blockContent();
            this.state = 143;
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
            this.state = 179;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 17, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 148;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 145;
                        this.stmt();
                        }
                        }
                    }
                    this.state = 150;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
                }
                this.state = 152;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16394) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 7) !== 0)) {
                    {
                    this.state = 151;
                    localContext._finalExpr = this.expr();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 157;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 982663178) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 31) !== 0)) {
                    {
                    {
                    this.state = 154;
                    this.stmt();
                    }
                    }
                    this.state = 159;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 163;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 160;
                        this.stmt();
                        }
                        }
                    }
                    this.state = 165;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
                }
                this.state = 166;
                this.expr();
                this.state = 171;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        this.state = 169;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 14, this.context) ) {
                        case 1:
                            {
                            this.state = 167;
                            this.stmt();
                            }
                            break;
                        case 2:
                            {
                            this.state = 168;
                            this.expr();
                            }
                            break;
                        }
                        }
                    }
                    this.state = 173;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
                }
                this.state = 175;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16394) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 7) !== 0)) {
                    {
                    this.state = 174;
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
            this.state = 181;
            this.expr();
            this.state = 182;
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
            this.state = 216;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 184;
                this.match(RustLiteParser.T__19);
                this.state = 185;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 186;
                this.match(RustLiteParser.T__20);
                this.state = 187;
                this.type_();
                this.state = 188;
                this.match(RustLiteParser.T__21);
                this.state = 189;
                this.exprStmt();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 191;
                this.match(RustLiteParser.T__19);
                this.state = 192;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 193;
                this.match(RustLiteParser.T__20);
                this.state = 194;
                this.type_();
                this.state = 195;
                this.match(RustLiteParser.T__18);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 197;
                this.match(RustLiteParser.T__19);
                this.state = 198;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 199;
                this.match(RustLiteParser.T__21);
                this.state = 200;
                this.exprStmt();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 201;
                this.match(RustLiteParser.T__19);
                this.state = 202;
                this.match(RustLiteParser.IDENTIFIER);

                                this.notifyErrorListeners("Variable declaration requires either type annotation or initialization");
                            
                this.state = 205;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 19) {
                    {
                    this.state = 204;
                    this.match(RustLiteParser.T__18);
                    }
                }

                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 207;
                this.match(RustLiteParser.T__19);
                this.state = 210;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 21) {
                    {
                    this.state = 208;
                    this.match(RustLiteParser.T__20);
                    this.state = 209;
                    this.type_();
                    }
                }

                this.notifyErrorListeners("Missing variable name in variable declaration");
                this.state = 214;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 19) {
                    {
                    this.state = 213;
                    this.match(RustLiteParser.T__18);
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
    public constStmt(): ConstStmtContext {
        let localContext = new ConstStmtContext(this.context, this.state);
        this.enterRule(localContext, 22, RustLiteParser.RULE_constStmt);
        try {
            this.state = 240;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 22, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 218;
                this.match(RustLiteParser.T__22);
                this.state = 219;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 220;
                this.match(RustLiteParser.T__20);
                this.state = 221;
                this.type_();
                this.state = 222;
                this.match(RustLiteParser.T__21);
                this.state = 223;
                this.exprStmt();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 225;
                this.match(RustLiteParser.T__22);
                this.state = 226;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 227;
                this.match(RustLiteParser.T__21);
                this.state = 228;
                this.exprStmt();
                this.notifyErrorListeners("Constants must specify a type");
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 231;
                this.match(RustLiteParser.T__22);
                this.state = 232;
                this.match(RustLiteParser.T__23);
                this.notifyErrorListeners("Constants cannot be mutable");
                this.state = 234;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 235;
                this.match(RustLiteParser.T__20);
                this.state = 236;
                this.type_();
                this.state = 237;
                this.match(RustLiteParser.T__21);
                this.state = 238;
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
        this.enterRule(localContext, 24, RustLiteParser.RULE_condStmt);
        let _la: number;
        try {
            let alternative: number;
            this.state = 267;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 242;
                this.match(RustLiteParser.T__24);
                this.state = 243;
                this.logicExpr(0);
                this.state = 244;
                this.block();
                this.state = 252;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 23, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 245;
                        this.match(RustLiteParser.T__25);
                        this.state = 246;
                        this.match(RustLiteParser.T__24);
                        this.state = 247;
                        this.logicExpr(0);
                        this.state = 248;
                        this.block();
                        }
                        }
                    }
                    this.state = 254;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 23, this.context);
                }
                this.state = 257;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 26) {
                    {
                    this.state = 255;
                    this.match(RustLiteParser.T__25);
                    this.state = 256;
                    this.block();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 259;
                this.match(RustLiteParser.T__24);
                this.state = 260;
                this.expr();

                                this.notifyErrorListeners("Condition must be a boolean expression");
                            
                this.state = 262;
                this.block();
                this.state = 265;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 26) {
                    {
                    this.state = 263;
                    this.match(RustLiteParser.T__25);
                    this.state = 264;
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
        this.enterRule(localContext, 26, RustLiteParser.RULE_whileStmt);
        try {
            this.state = 278;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 27, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 269;
                this.match(RustLiteParser.T__26);
                this.state = 270;
                this.logicExpr(0);
                this.state = 271;
                this.block();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 273;
                this.match(RustLiteParser.T__26);
                this.state = 274;
                this.expr();

                                this.notifyErrorListeners("Condition must be a boolean expression");
                            
                this.state = 276;
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
        this.enterRule(localContext, 28, RustLiteParser.RULE_loopControl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 280;
            _la = this.tokenStream.LA(1);
            if(!(_la === 28 || _la === 29)) {
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
        this.enterRule(localContext, 30, RustLiteParser.RULE_loopControlStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 282;
            this.loopControl();
            this.state = 283;
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
        this.enterRule(localContext, 32, RustLiteParser.RULE_param);
        try {
            this.state = 290;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 285;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 286;
                this.match(RustLiteParser.T__20);
                this.state = 287;
                this.type_();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 288;
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
        this.enterRule(localContext, 34, RustLiteParser.RULE_paramList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 292;
            this.param();
            this.state = 297;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 29, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 293;
                    this.match(RustLiteParser.T__29);
                    this.state = 294;
                    this.param();
                    }
                    }
                }
                this.state = 299;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 29, this.context);
            }
            this.state = 301;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 30) {
                {
                this.state = 300;
                this.match(RustLiteParser.T__29);
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
        this.enterRule(localContext, 36, RustLiteParser.RULE_returnTypes);
        try {
            this.state = 305;
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
                this.state = 303;
                this.type_();
                }
                break;
            case RustLiteParser.T__30:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 304;
                this.match(RustLiteParser.T__30);
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
        this.enterRule(localContext, 38, RustLiteParser.RULE_returnType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 307;
            this.match(RustLiteParser.T__31);
            this.state = 308;
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
        this.enterRule(localContext, 40, RustLiteParser.RULE_returnStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 310;
            this.match(RustLiteParser.T__32);
            this.state = 312;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16394) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 7) !== 0)) {
                {
                this.state = 311;
                this.expr();
                }
            }

            this.state = 314;
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
        this.enterRule(localContext, 42, RustLiteParser.RULE_fnDeclareStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 316;
            this.match(RustLiteParser.T__33);
            this.state = 317;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 324;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.T__0:
                {
                this.state = 318;
                this.match(RustLiteParser.T__0);
                this.state = 320;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 37) {
                    {
                    this.state = 319;
                    this.paramList();
                    }
                }

                this.state = 322;
                this.match(RustLiteParser.T__1);
                }
                break;
            case RustLiteParser.T__30:
                {
                this.state = 323;
                this.match(RustLiteParser.T__30);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 327;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 32) {
                {
                this.state = 326;
                this.returnType();
                }
            }

            this.state = 329;
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
        this.enterRule(localContext, 44, RustLiteParser.RULE_argList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 331;
            this.expr();
            this.state = 336;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 36, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 332;
                    this.match(RustLiteParser.T__29);
                    this.state = 333;
                    this.expr();
                    }
                    }
                }
                this.state = 338;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 36, this.context);
            }
            this.state = 340;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 30) {
                {
                this.state = 339;
                this.match(RustLiteParser.T__29);
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
        this.enterRule(localContext, 46, RustLiteParser.RULE_fnCall);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 342;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 343;
            this.match(RustLiteParser.T__0);
            this.state = 345;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16394) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 7) !== 0)) {
                {
                this.state = 344;
                this.argList();
                }
            }

            this.state = 347;
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
        4,1,48,350,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,5,0,50,8,0,10,0,12,0,53,9,
        0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,69,
        8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,82,8,3,1,3,1,
        3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,94,8,3,10,3,12,3,97,9,3,1,
        4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,114,
        8,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,122,8,4,10,4,12,4,125,9,4,1,5,1,
        5,3,5,129,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,140,8,6,1,
        7,1,7,1,7,1,7,1,8,5,8,147,8,8,10,8,12,8,150,9,8,1,8,3,8,153,8,8,
        1,8,5,8,156,8,8,10,8,12,8,159,9,8,1,8,5,8,162,8,8,10,8,12,8,165,
        9,8,1,8,1,8,1,8,5,8,170,8,8,10,8,12,8,173,9,8,1,8,3,8,176,8,8,1,
        8,1,8,3,8,180,8,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
        1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
        1,10,3,10,206,8,10,1,10,1,10,1,10,3,10,211,8,10,1,10,1,10,3,10,215,
        8,10,3,10,217,8,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
        1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
        3,11,241,8,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,251,8,
        12,10,12,12,12,254,9,12,1,12,1,12,3,12,258,8,12,1,12,1,12,1,12,1,
        12,1,12,1,12,3,12,266,8,12,3,12,268,8,12,1,13,1,13,1,13,1,13,1,13,
        1,13,1,13,1,13,1,13,3,13,279,8,13,1,14,1,14,1,15,1,15,1,15,1,16,
        1,16,1,16,1,16,1,16,3,16,291,8,16,1,17,1,17,1,17,5,17,296,8,17,10,
        17,12,17,299,9,17,1,17,3,17,302,8,17,1,18,1,18,3,18,306,8,18,1,19,
        1,19,1,19,1,20,1,20,3,20,313,8,20,1,20,1,20,1,21,1,21,1,21,1,21,
        3,21,321,8,21,1,21,1,21,3,21,325,8,21,1,21,3,21,328,8,21,1,21,1,
        21,1,22,1,22,1,22,5,22,335,8,22,10,22,12,22,338,9,22,1,22,3,22,341,
        8,22,1,23,1,23,1,23,3,23,346,8,23,1,23,1,23,1,23,0,2,6,8,24,0,2,
        4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,0,
        6,1,0,37,46,1,0,4,6,2,0,3,3,7,7,1,0,5,6,1,0,8,13,1,0,28,29,389,0,
        51,1,0,0,0,2,56,1,0,0,0,4,68,1,0,0,0,6,81,1,0,0,0,8,113,1,0,0,0,
        10,128,1,0,0,0,12,139,1,0,0,0,14,141,1,0,0,0,16,179,1,0,0,0,18,181,
        1,0,0,0,20,216,1,0,0,0,22,240,1,0,0,0,24,267,1,0,0,0,26,278,1,0,
        0,0,28,280,1,0,0,0,30,282,1,0,0,0,32,290,1,0,0,0,34,292,1,0,0,0,
        36,305,1,0,0,0,38,307,1,0,0,0,40,310,1,0,0,0,42,316,1,0,0,0,44,331,
        1,0,0,0,46,342,1,0,0,0,48,50,3,10,5,0,49,48,1,0,0,0,50,53,1,0,0,
        0,51,49,1,0,0,0,51,52,1,0,0,0,52,54,1,0,0,0,53,51,1,0,0,0,54,55,
        5,0,0,1,55,1,1,0,0,0,56,57,7,0,0,0,57,3,1,0,0,0,58,59,5,1,0,0,59,
        60,3,4,2,0,60,61,5,2,0,0,61,69,1,0,0,0,62,69,5,37,0,0,63,69,5,35,
        0,0,64,69,5,36,0,0,65,69,3,6,3,0,66,69,3,8,4,0,67,69,3,46,23,0,68,
        58,1,0,0,0,68,62,1,0,0,0,68,63,1,0,0,0,68,64,1,0,0,0,68,65,1,0,0,
        0,68,66,1,0,0,0,68,67,1,0,0,0,69,5,1,0,0,0,70,71,6,3,-1,0,71,82,
        5,35,0,0,72,82,5,37,0,0,73,74,5,1,0,0,74,75,3,6,3,0,75,76,5,2,0,
        0,76,82,1,0,0,0,77,78,5,3,0,0,78,82,3,6,3,5,79,80,5,36,0,0,80,82,
        6,3,-1,0,81,70,1,0,0,0,81,72,1,0,0,0,81,73,1,0,0,0,81,77,1,0,0,0,
        81,79,1,0,0,0,82,95,1,0,0,0,83,84,10,4,0,0,84,85,7,1,0,0,85,94,3,
        6,3,5,86,87,10,3,0,0,87,88,7,2,0,0,88,94,3,6,3,4,89,90,10,1,0,0,
        90,91,7,3,0,0,91,92,5,35,0,0,92,94,6,3,-1,0,93,83,1,0,0,0,93,86,
        1,0,0,0,93,89,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,
        96,7,1,0,0,0,97,95,1,0,0,0,98,99,6,4,-1,0,99,114,5,36,0,0,100,114,
        5,37,0,0,101,102,5,1,0,0,102,103,3,8,4,0,103,104,5,2,0,0,104,114,
        1,0,0,0,105,106,3,6,3,0,106,107,7,4,0,0,107,108,3,6,3,0,108,114,
        1,0,0,0,109,110,5,14,0,0,110,114,3,8,4,4,111,112,5,35,0,0,112,114,
        6,4,-1,0,113,98,1,0,0,0,113,100,1,0,0,0,113,101,1,0,0,0,113,105,
        1,0,0,0,113,109,1,0,0,0,113,111,1,0,0,0,114,123,1,0,0,0,115,116,
        10,3,0,0,116,117,5,15,0,0,117,122,3,8,4,4,118,119,10,2,0,0,119,120,
        5,16,0,0,120,122,3,8,4,3,121,115,1,0,0,0,121,118,1,0,0,0,122,125,
        1,0,0,0,123,121,1,0,0,0,123,124,1,0,0,0,124,9,1,0,0,0,125,123,1,
        0,0,0,126,129,3,42,21,0,127,129,3,22,11,0,128,126,1,0,0,0,128,127,
        1,0,0,0,129,11,1,0,0,0,130,140,3,18,9,0,131,140,3,20,10,0,132,140,
        3,22,11,0,133,140,3,24,12,0,134,140,3,26,13,0,135,140,3,30,15,0,
        136,140,3,42,21,0,137,140,3,40,20,0,138,140,3,14,7,0,139,130,1,0,
        0,0,139,131,1,0,0,0,139,132,1,0,0,0,139,133,1,0,0,0,139,134,1,0,
        0,0,139,135,1,0,0,0,139,136,1,0,0,0,139,137,1,0,0,0,139,138,1,0,
        0,0,140,13,1,0,0,0,141,142,5,17,0,0,142,143,3,16,8,0,143,144,5,18,
        0,0,144,15,1,0,0,0,145,147,3,12,6,0,146,145,1,0,0,0,147,150,1,0,
        0,0,148,146,1,0,0,0,148,149,1,0,0,0,149,152,1,0,0,0,150,148,1,0,
        0,0,151,153,3,4,2,0,152,151,1,0,0,0,152,153,1,0,0,0,153,180,1,0,
        0,0,154,156,3,12,6,0,155,154,1,0,0,0,156,159,1,0,0,0,157,155,1,0,
        0,0,157,158,1,0,0,0,158,180,1,0,0,0,159,157,1,0,0,0,160,162,3,12,
        6,0,161,160,1,0,0,0,162,165,1,0,0,0,163,161,1,0,0,0,163,164,1,0,
        0,0,164,166,1,0,0,0,165,163,1,0,0,0,166,171,3,4,2,0,167,170,3,12,
        6,0,168,170,3,4,2,0,169,167,1,0,0,0,169,168,1,0,0,0,170,173,1,0,
        0,0,171,169,1,0,0,0,171,172,1,0,0,0,172,175,1,0,0,0,173,171,1,0,
        0,0,174,176,3,4,2,0,175,174,1,0,0,0,175,176,1,0,0,0,176,177,1,0,
        0,0,177,178,6,8,-1,0,178,180,1,0,0,0,179,148,1,0,0,0,179,157,1,0,
        0,0,179,163,1,0,0,0,180,17,1,0,0,0,181,182,3,4,2,0,182,183,5,19,
        0,0,183,19,1,0,0,0,184,185,5,20,0,0,185,186,5,37,0,0,186,187,5,21,
        0,0,187,188,3,2,1,0,188,189,5,22,0,0,189,190,3,18,9,0,190,217,1,
        0,0,0,191,192,5,20,0,0,192,193,5,37,0,0,193,194,5,21,0,0,194,195,
        3,2,1,0,195,196,5,19,0,0,196,217,1,0,0,0,197,198,5,20,0,0,198,199,
        5,37,0,0,199,200,5,22,0,0,200,217,3,18,9,0,201,202,5,20,0,0,202,
        203,5,37,0,0,203,205,6,10,-1,0,204,206,5,19,0,0,205,204,1,0,0,0,
        205,206,1,0,0,0,206,217,1,0,0,0,207,210,5,20,0,0,208,209,5,21,0,
        0,209,211,3,2,1,0,210,208,1,0,0,0,210,211,1,0,0,0,211,212,1,0,0,
        0,212,214,6,10,-1,0,213,215,5,19,0,0,214,213,1,0,0,0,214,215,1,0,
        0,0,215,217,1,0,0,0,216,184,1,0,0,0,216,191,1,0,0,0,216,197,1,0,
        0,0,216,201,1,0,0,0,216,207,1,0,0,0,217,21,1,0,0,0,218,219,5,23,
        0,0,219,220,5,37,0,0,220,221,5,21,0,0,221,222,3,2,1,0,222,223,5,
        22,0,0,223,224,3,18,9,0,224,241,1,0,0,0,225,226,5,23,0,0,226,227,
        5,37,0,0,227,228,5,22,0,0,228,229,3,18,9,0,229,230,6,11,-1,0,230,
        241,1,0,0,0,231,232,5,23,0,0,232,233,5,24,0,0,233,234,6,11,-1,0,
        234,235,5,37,0,0,235,236,5,21,0,0,236,237,3,2,1,0,237,238,5,22,0,
        0,238,239,3,18,9,0,239,241,1,0,0,0,240,218,1,0,0,0,240,225,1,0,0,
        0,240,231,1,0,0,0,241,23,1,0,0,0,242,243,5,25,0,0,243,244,3,8,4,
        0,244,252,3,14,7,0,245,246,5,26,0,0,246,247,5,25,0,0,247,248,3,8,
        4,0,248,249,3,14,7,0,249,251,1,0,0,0,250,245,1,0,0,0,251,254,1,0,
        0,0,252,250,1,0,0,0,252,253,1,0,0,0,253,257,1,0,0,0,254,252,1,0,
        0,0,255,256,5,26,0,0,256,258,3,14,7,0,257,255,1,0,0,0,257,258,1,
        0,0,0,258,268,1,0,0,0,259,260,5,25,0,0,260,261,3,4,2,0,261,262,6,
        12,-1,0,262,265,3,14,7,0,263,264,5,26,0,0,264,266,3,14,7,0,265,263,
        1,0,0,0,265,266,1,0,0,0,266,268,1,0,0,0,267,242,1,0,0,0,267,259,
        1,0,0,0,268,25,1,0,0,0,269,270,5,27,0,0,270,271,3,8,4,0,271,272,
        3,14,7,0,272,279,1,0,0,0,273,274,5,27,0,0,274,275,3,4,2,0,275,276,
        6,13,-1,0,276,277,3,14,7,0,277,279,1,0,0,0,278,269,1,0,0,0,278,273,
        1,0,0,0,279,27,1,0,0,0,280,281,7,5,0,0,281,29,1,0,0,0,282,283,3,
        28,14,0,283,284,5,19,0,0,284,31,1,0,0,0,285,286,5,37,0,0,286,287,
        5,21,0,0,287,291,3,2,1,0,288,289,5,37,0,0,289,291,6,16,-1,0,290,
        285,1,0,0,0,290,288,1,0,0,0,291,33,1,0,0,0,292,297,3,32,16,0,293,
        294,5,30,0,0,294,296,3,32,16,0,295,293,1,0,0,0,296,299,1,0,0,0,297,
        295,1,0,0,0,297,298,1,0,0,0,298,301,1,0,0,0,299,297,1,0,0,0,300,
        302,5,30,0,0,301,300,1,0,0,0,301,302,1,0,0,0,302,35,1,0,0,0,303,
        306,3,2,1,0,304,306,5,31,0,0,305,303,1,0,0,0,305,304,1,0,0,0,306,
        37,1,0,0,0,307,308,5,32,0,0,308,309,3,36,18,0,309,39,1,0,0,0,310,
        312,5,33,0,0,311,313,3,4,2,0,312,311,1,0,0,0,312,313,1,0,0,0,313,
        314,1,0,0,0,314,315,5,19,0,0,315,41,1,0,0,0,316,317,5,34,0,0,317,
        324,5,37,0,0,318,320,5,1,0,0,319,321,3,34,17,0,320,319,1,0,0,0,320,
        321,1,0,0,0,321,322,1,0,0,0,322,325,5,2,0,0,323,325,5,31,0,0,324,
        318,1,0,0,0,324,323,1,0,0,0,325,327,1,0,0,0,326,328,3,38,19,0,327,
        326,1,0,0,0,327,328,1,0,0,0,328,329,1,0,0,0,329,330,3,14,7,0,330,
        43,1,0,0,0,331,336,3,4,2,0,332,333,5,30,0,0,333,335,3,4,2,0,334,
        332,1,0,0,0,335,338,1,0,0,0,336,334,1,0,0,0,336,337,1,0,0,0,337,
        340,1,0,0,0,338,336,1,0,0,0,339,341,5,30,0,0,340,339,1,0,0,0,340,
        341,1,0,0,0,341,45,1,0,0,0,342,343,5,37,0,0,343,345,5,1,0,0,344,
        346,3,44,22,0,345,344,1,0,0,0,345,346,1,0,0,0,346,347,1,0,0,0,347,
        348,5,2,0,0,348,47,1,0,0,0,39,51,68,81,93,95,113,121,123,128,139,
        148,152,157,163,169,171,175,179,205,210,214,216,240,252,257,265,
        267,278,290,297,301,305,312,320,324,327,336,340,345
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
    public fnDeclareStmt(): FnDeclareStmtContext | null {
        return this.getRuleContext(0, FnDeclareStmtContext);
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
