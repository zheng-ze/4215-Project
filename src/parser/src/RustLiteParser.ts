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
    public static readonly TYPE = 45;
    public static readonly WS = 46;
    public static readonly COMMENT = 47;
    public static readonly RULE_prog = 0;
    public static readonly RULE_expr = 1;
    public static readonly RULE_arithExpr = 2;
    public static readonly RULE_logicExpr = 3;
    public static readonly RULE_structExpr = 4;
    public static readonly RULE_globalElement = 5;
    public static readonly RULE_stmt = 6;
    public static readonly RULE_block = 7;
    public static readonly RULE_blockContent = 8;
    public static readonly RULE_stmts = 9;
    public static readonly RULE_finalExpr = 10;
    public static readonly RULE_exprStmt = 11;
    public static readonly RULE_declareStmt = 12;
    public static readonly RULE_constStmt = 13;
    public static readonly RULE_condStmt = 14;
    public static readonly RULE_loopStmt = 15;
    public static readonly RULE_whileStmt = 16;
    public static readonly RULE_loopControl = 17;
    public static readonly RULE_loopControlStmt = 18;
    public static readonly RULE_iterable = 19;
    public static readonly RULE_forStmt = 20;
    public static readonly RULE_param = 21;
    public static readonly RULE_paramList = 22;
    public static readonly RULE_returnTypes = 23;
    public static readonly RULE_returnType = 24;
    public static readonly RULE_returnStmt = 25;
    public static readonly RULE_fnDeclareStmt = 26;
    public static readonly RULE_argList = 27;
    public static readonly RULE_fnCall = 28;
    public static readonly RULE_structDeclare = 29;
    public static readonly RULE_structDeclareFieldList = 30;
    public static readonly RULE_structDeclareField = 31;
    public static readonly RULE_structInit = 32;
    public static readonly RULE_structInitFieldList = 33;
    public static readonly RULE_structInitField = 34;
    public static readonly RULE_structFieldAccess = 35;

    public static readonly literalNames = [
        null, "'('", "')'", "'-'", "'*'", "'/'", "'%'", "'+'", "'>'", "'<'", 
        "'=='", "'!='", "'<='", "'>='", "'!'", "'&&'", "'||'", "';'", "'{'", 
        "'}'", "'let'", "'mut'", "':'", "'='", "'const'", "'if'", "'else'", 
        "'loop'", "'while'", "'break'", "'continue'", "'..'", "'..='", "'for'", 
        "'in'", "','", "'()'", "'->'", "'return'", "'fn'", "'struct'", "'.'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, "INT", "BOOL", 
        "IDENTIFIER", "TYPE", "WS", "COMMENT"
    ];
    public static readonly ruleNames = [
        "prog", "expr", "arithExpr", "logicExpr", "structExpr", "globalElement", 
        "stmt", "block", "blockContent", "stmts", "finalExpr", "exprStmt", 
        "declareStmt", "constStmt", "condStmt", "loopStmt", "whileStmt", 
        "loopControl", "loopControlStmt", "iterable", "forStmt", "param", 
        "paramList", "returnTypes", "returnType", "returnStmt", "fnDeclareStmt", 
        "argList", "fnCall", "structDeclare", "structDeclareFieldList", 
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
            this.state = 75;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & 98305) !== 0)) {
                {
                {
                this.state = 72;
                this.globalElement();
                }
                }
                this.state = 77;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 78;
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
    public expr(): ExprContext {
        let localContext = new ExprContext(this.context, this.state);
        this.enterRule(localContext, 2, RustLiteParser.RULE_expr);
        try {
            this.state = 91;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 80;
                this.match(RustLiteParser.T__0);
<<<<<<< HEAD
                this.state = 81;
                localContext._inner = this.expr();
                this.state = 82;
=======
                this.state = 71;
                localContext._inner = this.expr();
                this.state = 72;
>>>>>>> main
                this.match(RustLiteParser.T__1);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 84;
                this.match(RustLiteParser.IDENTIFIER);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 85;
                this.match(RustLiteParser.INT);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 86;
                this.match(RustLiteParser.BOOL);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 87;
                this.arithExpr(0);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 88;
                this.logicExpr(0);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 89;
                this.structExpr();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 90;
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
        let _startState = 4;
        this.enterRecursionRule(localContext, 4, RustLiteParser.RULE_arithExpr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 105;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
            case 1:
                {
                this.state = 94;
                localContext._primary = this.match(RustLiteParser.INT);
                }
                break;
            case 2:
                {
                this.state = 95;
                localContext._primary = this.match(RustLiteParser.IDENTIFIER);
                }
                break;
            case 3:
                {
                this.state = 96;
                localContext._fieldAccess = this.structFieldAccess();
                }
                break;
            case 4:
                {
                this.state = 97;
                this.match(RustLiteParser.T__0);
                this.state = 98;
                localContext._inner = this.arithExpr(0);
                this.state = 99;
                this.match(RustLiteParser.T__1);
                }
                break;
            case 5:
                {
                this.state = 101;
                localContext._op = this.match(RustLiteParser.T__2);
                this.state = 102;
                this.arithExpr(5);
                }
                break;
            case 6:
                {
                this.state = 103;
                this.match(RustLiteParser.BOOL);
                this.notifyErrorListeners("Cannot use boolean in arithmetic expressions");
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 119;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 117;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
                    case 1:
                        {
                        localContext = new ArithExprContext(parentContext, parentState);
                        localContext._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                        this.state = 107;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 108;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 112) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 109;
                        localContext._right = this.arithExpr(5);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ArithExprContext(parentContext, parentState);
                        localContext._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                        this.state = 110;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 111;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 3 || _la === 7)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 112;
                        localContext._right = this.arithExpr(4);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ArithExprContext(parentContext, parentState);
                        localContext._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                        this.state = 113;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 114;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 5 || _la === 6)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 115;
                        this.match(RustLiteParser.INT);

                                              if ((localContext._right != null ? this.tokenStream.getTextFromRange(localContext._right.start, localContext._right.stop) : '') === 0) this.notifyErrorListeners("Division by zero");
                                          
                        }
                        break;
                    }
                    }
                }
                this.state = 121;
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
        let _startState = 6;
        this.enterRecursionRule(localContext, 6, RustLiteParser.RULE_logicExpr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 138;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
            case 1:
                {
                this.state = 123;
                localContext._primary = this.match(RustLiteParser.BOOL);
                }
                break;
            case 2:
                {
                this.state = 124;
                localContext._primary = this.match(RustLiteParser.IDENTIFIER);
                }
                break;
            case 3:
                {
                this.state = 125;
                localContext._fieldAccess = this.structFieldAccess();
                }
                break;
            case 4:
                {
                this.state = 126;
                this.match(RustLiteParser.T__0);
                this.state = 127;
                localContext._inner = this.logicExpr(0);
                this.state = 128;
                this.match(RustLiteParser.T__1);
                }
                break;
            case 5:
                {
                this.state = 130;
                localContext._arithLeft = this.arithExpr(0);
                this.state = 131;
                localContext._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 16128) !== 0))) {
                    localContext._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 132;
                localContext._arithRight = this.arithExpr(0);
                }
                break;
            case 6:
                {
                this.state = 134;
                localContext._op = this.match(RustLiteParser.T__13);
                this.state = 135;
                localContext._right = this.logicExpr(4);
                }
                break;
            case 7:
                {
                this.state = 136;
                this.match(RustLiteParser.INT);
                this.notifyErrorListeners("Cannot use INT without comparison operators in logical expressions");
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 148;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 146;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
                    case 1:
                        {
                        localContext = new LogicExprContext(parentContext, parentState);
                        localContext._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_logicExpr);
                        this.state = 140;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 141;
                        localContext._op = this.match(RustLiteParser.T__14);
                        this.state = 142;
                        localContext._right = this.logicExpr(4);
                        }
                        break;
                    case 2:
                        {
                        localContext = new LogicExprContext(parentContext, parentState);
                        localContext._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_logicExpr);
                        this.state = 143;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 144;
                        localContext._op = this.match(RustLiteParser.T__15);
                        this.state = 145;
                        localContext._right = this.logicExpr(3);
                        }
                        break;
                    }
                    }
                }
                this.state = 150;
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
        this.enterRule(localContext, 8, RustLiteParser.RULE_structExpr);
        try {
            this.state = 153;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 151;
                this.structInit();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 152;
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
        this.enterRule(localContext, 10, RustLiteParser.RULE_globalElement);
        try {
            this.state = 158;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.T__38:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 155;
                this.fnDeclareStmt();
                }
                break;
            case RustLiteParser.T__39:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 156;
                this.structDeclare();
                }
                break;
            case RustLiteParser.T__23:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 157;
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
            let alternative: number;
            this.state = 181;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 160;
                this.exprStmt();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 161;
                this.declareStmt();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 162;
                this.constStmt();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 163;
                this.condStmt();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 164;
                this.loopStmt();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 165;
                this.forStmt();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 166;
                this.whileStmt();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 167;
                this.loopControlStmt();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 168;
                this.fnDeclareStmt();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 169;
                this.returnStmt();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 170;
                this.block();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 171;
                this.structDeclare();
                this.notifyErrorListeners("Struct definitions are only allowed in global scope");
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 175;
                this.errorHandler.sync(this);
                alternative = 1 + 1;
                do {
                    switch (alternative) {
                    case 1 + 1:
                        {
                        {
                        this.state = 174;
                        this.matchWildcard();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 177;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
                } while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 179;
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
        this.enterRule(localContext, 14, RustLiteParser.RULE_block);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 183;
            this.match(RustLiteParser.T__17);
            this.state = 184;
            this.blockContent();
            this.state = 185;
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
        this.enterRule(localContext, 16, RustLiteParser.RULE_blockContent);
        let _la: number;
        try {
            this.state = 196;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 187;
                this.stmts();
                this.state = 189;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16394) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 7) !== 0)) {
                    {
                    this.state = 188;
                    this.finalExpr();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 191;
                this.stmts();
                this.state = 192;
                this.expr();
                this.state = 193;
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
        this.enterRule(localContext, 18, RustLiteParser.RULE_stmts);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 201;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 14, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 198;
                    this.stmt();
                    }
                    }
                }
                this.state = 203;
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
        this.enterRule(localContext, 20, RustLiteParser.RULE_finalExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 204;
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
        this.enterRule(localContext, 22, RustLiteParser.RULE_exprStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 206;
            this.expr();
            this.state = 207;
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
        this.enterRule(localContext, 24, RustLiteParser.RULE_declareStmt);
        let _la: number;
        try {
            this.state = 251;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 22, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 209;
                this.match(RustLiteParser.T__19);
                this.state = 211;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 21) {
                    {
                    this.state = 210;
                    this.match(RustLiteParser.T__20);
                    }
                }

                this.state = 213;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 214;
                this.match(RustLiteParser.T__21);
                this.state = 215;
                this.match(RustLiteParser.TYPE);
                this.state = 216;
                this.match(RustLiteParser.T__22);
                this.state = 217;
                this.exprStmt();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 218;
                this.match(RustLiteParser.T__19);
                this.state = 220;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 21) {
                    {
                    this.state = 219;
                    this.match(RustLiteParser.T__20);
                    }
                }

                this.state = 222;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 223;
                this.match(RustLiteParser.T__21);
                this.state = 224;
                this.match(RustLiteParser.TYPE);
                this.state = 225;
                this.match(RustLiteParser.T__16);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 226;
                this.match(RustLiteParser.T__19);
                this.state = 228;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 21) {
                    {
                    this.state = 227;
                    this.match(RustLiteParser.T__20);
                    }
                }

                this.state = 230;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 231;
                this.match(RustLiteParser.T__22);
                this.state = 232;
                this.exprStmt();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
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

                                this.notifyErrorListeners("Variable declaration requires either type annotation or initialization");
                            
                this.state = 240;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 19, this.context) ) {
                case 1:
                    {
                    this.state = 239;
                    this.match(RustLiteParser.T__16);
                    }
                    break;
                }
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 242;
                this.match(RustLiteParser.T__19);
                this.state = 244;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
                case 1:
                    {
                    this.state = 243;
                    this.match(RustLiteParser.T__20);
                    }
                    break;
                }
                this.state = 248;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context) ) {
                case 1:
                    {
                    this.state = 246;
                    this.match(RustLiteParser.T__21);
                    this.state = 247;
                    this.match(RustLiteParser.TYPE);
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
        this.enterRule(localContext, 26, RustLiteParser.RULE_constStmt);
        let _la: number;
        try {
            this.state = 275;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 24, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 253;
                this.match(RustLiteParser.T__23);
                this.state = 254;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 257;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 22) {
                    {
                    this.state = 255;
                    this.match(RustLiteParser.T__21);
                    this.state = 256;
                    this.match(RustLiteParser.TYPE);
                    }
                }

                this.state = 259;
                this.match(RustLiteParser.T__22);
                this.state = 260;
                this.exprStmt();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 261;
                this.match(RustLiteParser.T__23);
                this.state = 262;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 263;
                this.match(RustLiteParser.T__22);
                this.state = 264;
                this.exprStmt();
                this.notifyErrorListeners("Constants must specify a type");
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 267;
                this.match(RustLiteParser.T__23);
                this.state = 268;
                this.match(RustLiteParser.T__20);
                this.notifyErrorListeners("Constants cannot be mutable");
                this.state = 270;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 271;
                this.match(RustLiteParser.T__21);
                this.state = 272;
                this.match(RustLiteParser.TYPE);
                this.state = 273;
                this.match(RustLiteParser.T__22);
                this.state = 274;
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
        this.enterRule(localContext, 28, RustLiteParser.RULE_condStmt);
        try {
            let alternative: number;
            this.state = 302;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 277;
                this.match(RustLiteParser.T__24);
                this.state = 278;
                this.logicExpr(0);
                this.state = 279;
                this.block();
                this.state = 287;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 25, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 280;
                        this.match(RustLiteParser.T__25);
                        this.state = 281;
                        this.match(RustLiteParser.T__24);
                        this.state = 282;
                        this.logicExpr(0);
                        this.state = 283;
                        this.block();
                        }
                        }
                    }
                    this.state = 289;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 25, this.context);
                }
                this.state = 292;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
                case 1:
                    {
                    this.state = 290;
                    this.match(RustLiteParser.T__25);
                    this.state = 291;
                    this.block();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 294;
                this.match(RustLiteParser.T__24);
                this.state = 295;
                this.expr();

                                this.notifyErrorListeners("Condition must be a boolean expression");
                            
                this.state = 297;
                this.block();
                this.state = 300;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 27, this.context) ) {
                case 1:
                    {
                    this.state = 298;
                    this.match(RustLiteParser.T__25);
                    this.state = 299;
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
        this.enterRule(localContext, 30, RustLiteParser.RULE_loopStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 304;
            this.match(RustLiteParser.T__26);
            this.state = 305;
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
        this.enterRule(localContext, 32, RustLiteParser.RULE_whileStmt);
        try {
            this.state = 316;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 29, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 307;
                this.match(RustLiteParser.T__27);
                this.state = 308;
                this.logicExpr(0);
                this.state = 309;
                this.block();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 311;
                this.match(RustLiteParser.T__27);
                this.state = 312;
                this.expr();

                                this.notifyErrorListeners("Condition must be a boolean expression");
                            
                this.state = 314;
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
        this.enterRule(localContext, 34, RustLiteParser.RULE_loopControl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 318;
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
        this.enterRule(localContext, 36, RustLiteParser.RULE_loopControlStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 320;
            this.loopControl();
            this.state = 321;
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
        this.enterRule(localContext, 38, RustLiteParser.RULE_iterable);
        let _la: number;
        try {
            this.state = 327;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 323;
                this.match(RustLiteParser.IDENTIFIER);
                }
                break;
            case RustLiteParser.INT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 324;
                this.match(RustLiteParser.INT);
                this.state = 325;
                localContext._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 31 || _la === 32)) {
                    localContext._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 326;
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
        this.enterRule(localContext, 40, RustLiteParser.RULE_forStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 329;
            this.match(RustLiteParser.T__32);
            this.state = 330;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 331;
            this.match(RustLiteParser.T__33);
            this.state = 332;
            this.iterable();
            this.state = 333;
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
        this.enterRule(localContext, 42, RustLiteParser.RULE_param);
        try {
            this.state = 340;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 335;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 336;
                this.match(RustLiteParser.T__21);
                this.state = 337;
                this.match(RustLiteParser.TYPE);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 338;
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
        this.enterRule(localContext, 44, RustLiteParser.RULE_paramList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 342;
            this.param();
            this.state = 347;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 32, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 343;
                    this.match(RustLiteParser.T__34);
                    this.state = 344;
                    this.param();
                    }
                    }
                }
                this.state = 349;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 32, this.context);
            }
            this.state = 351;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 35) {
                {
                this.state = 350;
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
        this.enterRule(localContext, 46, RustLiteParser.RULE_returnTypes);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 353;
            _la = this.tokenStream.LA(1);
            if(!(_la === 36 || _la === 45)) {
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
    public returnType(): ReturnTypeContext {
        let localContext = new ReturnTypeContext(this.context, this.state);
        this.enterRule(localContext, 48, RustLiteParser.RULE_returnType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 355;
            this.match(RustLiteParser.T__36);
            this.state = 356;
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
        this.enterRule(localContext, 50, RustLiteParser.RULE_returnStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 358;
            this.match(RustLiteParser.T__37);
            this.state = 360;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16394) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 7) !== 0)) {
                {
                this.state = 359;
                this.expr();
                }
            }

            this.state = 362;
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
        this.enterRule(localContext, 52, RustLiteParser.RULE_fnDeclareStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 364;
            this.match(RustLiteParser.T__38);
            this.state = 365;
            this.match(RustLiteParser.IDENTIFIER);
<<<<<<< HEAD
            this.state = 371;
=======
            this.state = 244;
>>>>>>> main
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.T__0:
                {
<<<<<<< HEAD
                this.state = 366;
                this.match(RustLiteParser.T__0);
                this.state = 367;
                this.paramList();
                this.state = 368;
                this.match(RustLiteParser.T__1);
                }
                break;
            case RustLiteParser.T__35:
                {
                this.state = 370;
                this.match(RustLiteParser.T__35);
=======
                this.state = 239;
                this.match(RustLiteParser.T__0);
                this.state = 240;
                this.paramList();
                this.state = 241;
                this.match(RustLiteParser.T__1);
                }
                break;
            case RustLiteParser.T__34:
                {
                this.state = 243;
                this.match(RustLiteParser.T__34);
>>>>>>> main
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
<<<<<<< HEAD
            this.state = 374;
=======
            this.state = 247;
>>>>>>> main
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 37) {
                {
<<<<<<< HEAD
                this.state = 373;
=======
                this.state = 246;
>>>>>>> main
                this.returnType();
                }
            }

<<<<<<< HEAD
            this.state = 376;
=======
            this.state = 249;
>>>>>>> main
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
        this.enterRule(localContext, 54, RustLiteParser.RULE_argList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
<<<<<<< HEAD
            this.state = 378;
            this.expr();
            this.state = 383;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 37, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 379;
                    this.match(RustLiteParser.T__34);
                    this.state = 380;
                    this.expr();
                    }
                    }
                }
                this.state = 385;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 37, this.context);
            }
            this.state = 387;
=======
            this.state = 251;
            this.expr();
            this.state = 256;
>>>>>>> main
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 35) {
                {
<<<<<<< HEAD
                this.state = 386;
                this.match(RustLiteParser.T__34);
                }
=======
                {
                this.state = 252;
                this.match(RustLiteParser.T__33);
                this.state = 253;
                this.expr();
                }
                }
                this.state = 258;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
>>>>>>> main
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
        this.enterRule(localContext, 56, RustLiteParser.RULE_fnCall);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
<<<<<<< HEAD
            this.state = 389;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 390;
            this.match(RustLiteParser.T__0);
            this.state = 392;
=======
            this.state = 259;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 260;
            this.match(RustLiteParser.T__0);
            this.state = 262;
>>>>>>> main
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16394) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 7) !== 0)) {
                {
<<<<<<< HEAD
                this.state = 391;
=======
                this.state = 261;
>>>>>>> main
                this.argList();
                }
            }

<<<<<<< HEAD
            this.state = 394;
=======
            this.state = 264;
>>>>>>> main
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
        this.enterRule(localContext, 58, RustLiteParser.RULE_structDeclare);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
<<<<<<< HEAD
            this.state = 396;
            this.match(RustLiteParser.T__39);
            this.state = 397;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 398;
=======
            this.state = 266;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 267;
            this.match(RustLiteParser.T__16);
            this.state = 268;
            this.structDeclareFieldList();
            this.state = 269;
>>>>>>> main
            this.match(RustLiteParser.T__17);
            this.state = 400;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44) {
                {
                this.state = 399;
                this.structDeclareFieldList();
                }
            }

            this.state = 402;
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
        this.enterRule(localContext, 60, RustLiteParser.RULE_structDeclareFieldList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
<<<<<<< HEAD
            this.state = 404;
            this.structDeclareField();
            this.state = 409;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 41, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 405;
                    this.match(RustLiteParser.T__34);
                    this.state = 406;
                    this.structDeclareField();
                    }
                    }
                }
                this.state = 411;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 41, this.context);
            }
            this.state = 413;
=======
            this.state = 271;
            this.structDeclareField();
            this.state = 276;
>>>>>>> main
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 35) {
                {
<<<<<<< HEAD
                this.state = 412;
                this.match(RustLiteParser.T__34);
                }
=======
                {
                this.state = 272;
                this.match(RustLiteParser.T__33);
                this.state = 273;
                this.structDeclareField();
                }
                }
                this.state = 278;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
>>>>>>> main
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
        this.enterRule(localContext, 62, RustLiteParser.RULE_structDeclareField);
        try {
            this.enterOuterAlt(localContext, 1);
            {
<<<<<<< HEAD
            this.state = 415;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 416;
            this.match(RustLiteParser.T__21);
            this.state = 417;
=======
            this.state = 279;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 280;
            this.match(RustLiteParser.T__32);
            this.state = 281;
>>>>>>> main
            this.match(RustLiteParser.TYPE);
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
        this.enterRule(localContext, 64, RustLiteParser.RULE_structInit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
<<<<<<< HEAD
            this.state = 419;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 420;
=======
            this.state = 283;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 284;
            this.match(RustLiteParser.T__16);
            this.state = 285;
            this.structInitFieldList();
            this.state = 286;
>>>>>>> main
            this.match(RustLiteParser.T__17);
            this.state = 422;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44) {
                {
                this.state = 421;
                this.structInitFieldList();
                }
            }

            this.state = 424;
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
        this.enterRule(localContext, 66, RustLiteParser.RULE_structInitFieldList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
<<<<<<< HEAD
            this.state = 426;
            this.structInitField();
            this.state = 431;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 44, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 427;
                    this.match(RustLiteParser.T__34);
                    this.state = 428;
                    this.structInitField();
                    }
                    }
                }
                this.state = 433;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 44, this.context);
            }
            this.state = 435;
=======
            this.state = 288;
            this.structInitField();
            this.state = 293;
>>>>>>> main
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 35) {
                {
<<<<<<< HEAD
                this.state = 434;
                this.match(RustLiteParser.T__34);
                }
=======
                {
                this.state = 289;
                this.match(RustLiteParser.T__33);
                this.state = 290;
                this.structInitField();
                }
                }
                this.state = 295;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
>>>>>>> main
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
        this.enterRule(localContext, 68, RustLiteParser.RULE_structInitField);
        try {
            this.enterOuterAlt(localContext, 1);
            {
<<<<<<< HEAD
            this.state = 437;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 438;
            this.match(RustLiteParser.T__21);
            this.state = 439;
=======
            this.state = 296;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 297;
            this.match(RustLiteParser.T__32);
            this.state = 298;
>>>>>>> main
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
        this.enterRule(localContext, 70, RustLiteParser.RULE_structFieldAccess);
        try {
            let alternative: number;
<<<<<<< HEAD
            this.state = 451;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 47, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 441;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 444;
=======
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 300;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 303;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 301;
                    this.match(RustLiteParser.T__38);
                    this.state = 302;
                    this.match(RustLiteParser.IDENTIFIER);
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 305;
>>>>>>> main
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 442;
                        this.match(RustLiteParser.T__40);
                        this.state = 443;
                        this.match(RustLiteParser.IDENTIFIER);
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 446;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 46, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 448;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 449;
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
        case 2:
            return this.arithExpr_sempred(localContext as ArithExprContext, predIndex);
        case 3:
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
<<<<<<< HEAD
        4,1,47,454,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,1,0,5,0,74,8,0,10,0,12,0,77,9,0,1,0,1,0,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,92,8,1,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,106,8,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,118,8,2,10,2,12,2,121,9,2,1,3,1,3,
        1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,139,
        8,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,147,8,3,10,3,12,3,150,9,3,1,4,1,
        4,3,4,154,8,4,1,5,1,5,1,5,3,5,159,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,
        6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,4,6,176,8,6,11,6,12,6,177,1,6,
        1,6,3,6,182,8,6,1,7,1,7,1,7,1,7,1,8,1,8,3,8,190,8,8,1,8,1,8,1,8,
        1,8,1,8,3,8,197,8,8,1,9,5,9,200,8,9,10,9,12,9,203,9,9,1,10,1,10,
        1,11,1,11,1,11,1,12,1,12,3,12,212,8,12,1,12,1,12,1,12,1,12,1,12,
        1,12,1,12,3,12,221,8,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,229,8,
        12,1,12,1,12,1,12,1,12,1,12,3,12,236,8,12,1,12,1,12,1,12,3,12,241,
        8,12,1,12,1,12,3,12,245,8,12,1,12,1,12,3,12,249,8,12,1,12,3,12,252,
        8,12,1,13,1,13,1,13,1,13,3,13,258,8,13,1,13,1,13,1,13,1,13,1,13,
        1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,276,
        8,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,5,14,286,8,14,10,14,
        12,14,289,9,14,1,14,1,14,3,14,293,8,14,1,14,1,14,1,14,1,14,1,14,
        1,14,3,14,301,8,14,3,14,303,8,14,1,15,1,15,1,15,1,16,1,16,1,16,1,
        16,1,16,1,16,1,16,1,16,1,16,3,16,317,8,16,1,17,1,17,1,18,1,18,1,
        18,1,19,1,19,1,19,1,19,3,19,328,8,19,1,20,1,20,1,20,1,20,1,20,1,
        20,1,21,1,21,1,21,1,21,1,21,3,21,341,8,21,1,22,1,22,1,22,5,22,346,
        8,22,10,22,12,22,349,9,22,1,22,3,22,352,8,22,1,23,1,23,1,24,1,24,
        1,24,1,25,1,25,3,25,361,8,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,
        1,26,1,26,3,26,372,8,26,1,26,3,26,375,8,26,1,26,1,26,1,27,1,27,1,
        27,5,27,382,8,27,10,27,12,27,385,9,27,1,27,3,27,388,8,27,1,28,1,
        28,1,28,3,28,393,8,28,1,28,1,28,1,29,1,29,1,29,1,29,3,29,401,8,29,
        1,29,1,29,1,30,1,30,1,30,5,30,408,8,30,10,30,12,30,411,9,30,1,30,
        3,30,414,8,30,1,31,1,31,1,31,1,31,1,32,1,32,1,32,3,32,423,8,32,1,
        32,1,32,1,33,1,33,1,33,5,33,430,8,33,10,33,12,33,433,9,33,1,33,3,
        33,436,8,33,1,34,1,34,1,34,1,34,1,35,1,35,1,35,4,35,445,8,35,11,
        35,12,35,446,1,35,1,35,1,35,3,35,452,8,35,1,35,1,177,2,4,6,36,0,
        2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
        48,50,52,54,56,58,60,62,64,66,68,70,0,7,1,0,4,6,2,0,3,3,7,7,1,0,
        5,6,1,0,8,13,1,0,29,30,1,0,31,32,2,0,36,36,45,45,497,0,75,1,0,0,
        0,2,91,1,0,0,0,4,105,1,0,0,0,6,138,1,0,0,0,8,153,1,0,0,0,10,158,
        1,0,0,0,12,181,1,0,0,0,14,183,1,0,0,0,16,196,1,0,0,0,18,201,1,0,
        0,0,20,204,1,0,0,0,22,206,1,0,0,0,24,251,1,0,0,0,26,275,1,0,0,0,
        28,302,1,0,0,0,30,304,1,0,0,0,32,316,1,0,0,0,34,318,1,0,0,0,36,320,
        1,0,0,0,38,327,1,0,0,0,40,329,1,0,0,0,42,340,1,0,0,0,44,342,1,0,
        0,0,46,353,1,0,0,0,48,355,1,0,0,0,50,358,1,0,0,0,52,364,1,0,0,0,
        54,378,1,0,0,0,56,389,1,0,0,0,58,396,1,0,0,0,60,404,1,0,0,0,62,415,
        1,0,0,0,64,419,1,0,0,0,66,426,1,0,0,0,68,437,1,0,0,0,70,451,1,0,
        0,0,72,74,3,10,5,0,73,72,1,0,0,0,74,77,1,0,0,0,75,73,1,0,0,0,75,
        76,1,0,0,0,76,78,1,0,0,0,77,75,1,0,0,0,78,79,5,0,0,1,79,1,1,0,0,
        0,80,81,5,1,0,0,81,82,3,2,1,0,82,83,5,2,0,0,83,92,1,0,0,0,84,92,
        5,44,0,0,85,92,5,42,0,0,86,92,5,43,0,0,87,92,3,4,2,0,88,92,3,6,3,
        0,89,92,3,8,4,0,90,92,3,56,28,0,91,80,1,0,0,0,91,84,1,0,0,0,91,85,
        1,0,0,0,91,86,1,0,0,0,91,87,1,0,0,0,91,88,1,0,0,0,91,89,1,0,0,0,
        91,90,1,0,0,0,92,3,1,0,0,0,93,94,6,2,-1,0,94,106,5,42,0,0,95,106,
        5,44,0,0,96,106,3,70,35,0,97,98,5,1,0,0,98,99,3,4,2,0,99,100,5,2,
        0,0,100,106,1,0,0,0,101,102,5,3,0,0,102,106,3,4,2,5,103,104,5,43,
        0,0,104,106,6,2,-1,0,105,93,1,0,0,0,105,95,1,0,0,0,105,96,1,0,0,
        0,105,97,1,0,0,0,105,101,1,0,0,0,105,103,1,0,0,0,106,119,1,0,0,0,
        107,108,10,4,0,0,108,109,7,0,0,0,109,118,3,4,2,5,110,111,10,3,0,
        0,111,112,7,1,0,0,112,118,3,4,2,4,113,114,10,1,0,0,114,115,7,2,0,
        0,115,116,5,42,0,0,116,118,6,2,-1,0,117,107,1,0,0,0,117,110,1,0,
        0,0,117,113,1,0,0,0,118,121,1,0,0,0,119,117,1,0,0,0,119,120,1,0,
        0,0,120,5,1,0,0,0,121,119,1,0,0,0,122,123,6,3,-1,0,123,139,5,43,
        0,0,124,139,5,44,0,0,125,139,3,70,35,0,126,127,5,1,0,0,127,128,3,
        6,3,0,128,129,5,2,0,0,129,139,1,0,0,0,130,131,3,4,2,0,131,132,7,
        3,0,0,132,133,3,4,2,0,133,139,1,0,0,0,134,135,5,14,0,0,135,139,3,
        6,3,4,136,137,5,42,0,0,137,139,6,3,-1,0,138,122,1,0,0,0,138,124,
        1,0,0,0,138,125,1,0,0,0,138,126,1,0,0,0,138,130,1,0,0,0,138,134,
        1,0,0,0,138,136,1,0,0,0,139,148,1,0,0,0,140,141,10,3,0,0,141,142,
        5,15,0,0,142,147,3,6,3,4,143,144,10,2,0,0,144,145,5,16,0,0,145,147,
        3,6,3,3,146,140,1,0,0,0,146,143,1,0,0,0,147,150,1,0,0,0,148,146,
        1,0,0,0,148,149,1,0,0,0,149,7,1,0,0,0,150,148,1,0,0,0,151,154,3,
        64,32,0,152,154,3,70,35,0,153,151,1,0,0,0,153,152,1,0,0,0,154,9,
        1,0,0,0,155,159,3,52,26,0,156,159,3,58,29,0,157,159,3,26,13,0,158,
        155,1,0,0,0,158,156,1,0,0,0,158,157,1,0,0,0,159,11,1,0,0,0,160,182,
        3,22,11,0,161,182,3,24,12,0,162,182,3,26,13,0,163,182,3,28,14,0,
        164,182,3,30,15,0,165,182,3,40,20,0,166,182,3,32,16,0,167,182,3,
        36,18,0,168,182,3,52,26,0,169,182,3,50,25,0,170,182,3,14,7,0,171,
        172,3,58,29,0,172,173,6,6,-1,0,173,182,1,0,0,0,174,176,9,0,0,0,175,
        174,1,0,0,0,176,177,1,0,0,0,177,178,1,0,0,0,177,175,1,0,0,0,178,
        179,1,0,0,0,179,180,5,17,0,0,180,182,6,6,-1,0,181,160,1,0,0,0,181,
        161,1,0,0,0,181,162,1,0,0,0,181,163,1,0,0,0,181,164,1,0,0,0,181,
        165,1,0,0,0,181,166,1,0,0,0,181,167,1,0,0,0,181,168,1,0,0,0,181,
        169,1,0,0,0,181,170,1,0,0,0,181,171,1,0,0,0,181,175,1,0,0,0,182,
        13,1,0,0,0,183,184,5,18,0,0,184,185,3,16,8,0,185,186,5,19,0,0,186,
        15,1,0,0,0,187,189,3,18,9,0,188,190,3,20,10,0,189,188,1,0,0,0,189,
        190,1,0,0,0,190,197,1,0,0,0,191,192,3,18,9,0,192,193,3,2,1,0,193,
        194,3,20,10,0,194,195,6,8,-1,0,195,197,1,0,0,0,196,187,1,0,0,0,196,
        191,1,0,0,0,197,17,1,0,0,0,198,200,3,12,6,0,199,198,1,0,0,0,200,
        203,1,0,0,0,201,199,1,0,0,0,201,202,1,0,0,0,202,19,1,0,0,0,203,201,
        1,0,0,0,204,205,3,2,1,0,205,21,1,0,0,0,206,207,3,2,1,0,207,208,5,
        17,0,0,208,23,1,0,0,0,209,211,5,20,0,0,210,212,5,21,0,0,211,210,
        1,0,0,0,211,212,1,0,0,0,212,213,1,0,0,0,213,214,5,44,0,0,214,215,
        5,22,0,0,215,216,5,45,0,0,216,217,5,23,0,0,217,252,3,22,11,0,218,
        220,5,20,0,0,219,221,5,21,0,0,220,219,1,0,0,0,220,221,1,0,0,0,221,
        222,1,0,0,0,222,223,5,44,0,0,223,224,5,22,0,0,224,225,5,45,0,0,225,
        252,5,17,0,0,226,228,5,20,0,0,227,229,5,21,0,0,228,227,1,0,0,0,228,
        229,1,0,0,0,229,230,1,0,0,0,230,231,5,44,0,0,231,232,5,23,0,0,232,
        252,3,22,11,0,233,235,5,20,0,0,234,236,5,21,0,0,235,234,1,0,0,0,
        235,236,1,0,0,0,236,237,1,0,0,0,237,238,5,44,0,0,238,240,6,12,-1,
        0,239,241,5,17,0,0,240,239,1,0,0,0,240,241,1,0,0,0,241,252,1,0,0,
        0,242,244,5,20,0,0,243,245,5,21,0,0,244,243,1,0,0,0,244,245,1,0,
        0,0,245,248,1,0,0,0,246,247,5,22,0,0,247,249,5,45,0,0,248,246,1,
        0,0,0,248,249,1,0,0,0,249,250,1,0,0,0,250,252,6,12,-1,0,251,209,
        1,0,0,0,251,218,1,0,0,0,251,226,1,0,0,0,251,233,1,0,0,0,251,242,
        1,0,0,0,252,25,1,0,0,0,253,254,5,24,0,0,254,257,5,44,0,0,255,256,
        5,22,0,0,256,258,5,45,0,0,257,255,1,0,0,0,257,258,1,0,0,0,258,259,
        1,0,0,0,259,260,5,23,0,0,260,276,3,22,11,0,261,262,5,24,0,0,262,
        263,5,44,0,0,263,264,5,23,0,0,264,265,3,22,11,0,265,266,6,13,-1,
        0,266,276,1,0,0,0,267,268,5,24,0,0,268,269,5,21,0,0,269,270,6,13,
        -1,0,270,271,5,44,0,0,271,272,5,22,0,0,272,273,5,45,0,0,273,274,
        5,23,0,0,274,276,3,22,11,0,275,253,1,0,0,0,275,261,1,0,0,0,275,267,
        1,0,0,0,276,27,1,0,0,0,277,278,5,25,0,0,278,279,3,6,3,0,279,287,
        3,14,7,0,280,281,5,26,0,0,281,282,5,25,0,0,282,283,3,6,3,0,283,284,
        3,14,7,0,284,286,1,0,0,0,285,280,1,0,0,0,286,289,1,0,0,0,287,285,
        1,0,0,0,287,288,1,0,0,0,288,292,1,0,0,0,289,287,1,0,0,0,290,291,
        5,26,0,0,291,293,3,14,7,0,292,290,1,0,0,0,292,293,1,0,0,0,293,303,
        1,0,0,0,294,295,5,25,0,0,295,296,3,2,1,0,296,297,6,14,-1,0,297,300,
        3,14,7,0,298,299,5,26,0,0,299,301,3,14,7,0,300,298,1,0,0,0,300,301,
        1,0,0,0,301,303,1,0,0,0,302,277,1,0,0,0,302,294,1,0,0,0,303,29,1,
        0,0,0,304,305,5,27,0,0,305,306,3,14,7,0,306,31,1,0,0,0,307,308,5,
        28,0,0,308,309,3,6,3,0,309,310,3,14,7,0,310,317,1,0,0,0,311,312,
        5,28,0,0,312,313,3,2,1,0,313,314,6,16,-1,0,314,315,3,14,7,0,315,
        317,1,0,0,0,316,307,1,0,0,0,316,311,1,0,0,0,317,33,1,0,0,0,318,319,
        7,4,0,0,319,35,1,0,0,0,320,321,3,34,17,0,321,322,5,17,0,0,322,37,
        1,0,0,0,323,328,5,44,0,0,324,325,5,42,0,0,325,326,7,5,0,0,326,328,
        5,42,0,0,327,323,1,0,0,0,327,324,1,0,0,0,328,39,1,0,0,0,329,330,
        5,33,0,0,330,331,5,44,0,0,331,332,5,34,0,0,332,333,3,38,19,0,333,
        334,3,14,7,0,334,41,1,0,0,0,335,336,5,44,0,0,336,337,5,22,0,0,337,
        341,5,45,0,0,338,339,5,44,0,0,339,341,6,21,-1,0,340,335,1,0,0,0,
        340,338,1,0,0,0,341,43,1,0,0,0,342,347,3,42,21,0,343,344,5,35,0,
        0,344,346,3,42,21,0,345,343,1,0,0,0,346,349,1,0,0,0,347,345,1,0,
        0,0,347,348,1,0,0,0,348,351,1,0,0,0,349,347,1,0,0,0,350,352,5,35,
        0,0,351,350,1,0,0,0,351,352,1,0,0,0,352,45,1,0,0,0,353,354,7,6,0,
        0,354,47,1,0,0,0,355,356,5,37,0,0,356,357,3,46,23,0,357,49,1,0,0,
        0,358,360,5,38,0,0,359,361,3,2,1,0,360,359,1,0,0,0,360,361,1,0,0,
        0,361,362,1,0,0,0,362,363,5,17,0,0,363,51,1,0,0,0,364,365,5,39,0,
        0,365,371,5,44,0,0,366,367,5,1,0,0,367,368,3,44,22,0,368,369,5,2,
        0,0,369,372,1,0,0,0,370,372,5,36,0,0,371,366,1,0,0,0,371,370,1,0,
        0,0,372,374,1,0,0,0,373,375,3,48,24,0,374,373,1,0,0,0,374,375,1,
        0,0,0,375,376,1,0,0,0,376,377,3,14,7,0,377,53,1,0,0,0,378,383,3,
        2,1,0,379,380,5,35,0,0,380,382,3,2,1,0,381,379,1,0,0,0,382,385,1,
        0,0,0,383,381,1,0,0,0,383,384,1,0,0,0,384,387,1,0,0,0,385,383,1,
        0,0,0,386,388,5,35,0,0,387,386,1,0,0,0,387,388,1,0,0,0,388,55,1,
        0,0,0,389,390,5,44,0,0,390,392,5,1,0,0,391,393,3,54,27,0,392,391,
        1,0,0,0,392,393,1,0,0,0,393,394,1,0,0,0,394,395,5,2,0,0,395,57,1,
        0,0,0,396,397,5,40,0,0,397,398,5,44,0,0,398,400,5,18,0,0,399,401,
        3,60,30,0,400,399,1,0,0,0,400,401,1,0,0,0,401,402,1,0,0,0,402,403,
        5,19,0,0,403,59,1,0,0,0,404,409,3,62,31,0,405,406,5,35,0,0,406,408,
        3,62,31,0,407,405,1,0,0,0,408,411,1,0,0,0,409,407,1,0,0,0,409,410,
        1,0,0,0,410,413,1,0,0,0,411,409,1,0,0,0,412,414,5,35,0,0,413,412,
        1,0,0,0,413,414,1,0,0,0,414,61,1,0,0,0,415,416,5,44,0,0,416,417,
        5,22,0,0,417,418,5,45,0,0,418,63,1,0,0,0,419,420,5,44,0,0,420,422,
        5,18,0,0,421,423,3,66,33,0,422,421,1,0,0,0,422,423,1,0,0,0,423,424,
        1,0,0,0,424,425,5,19,0,0,425,65,1,0,0,0,426,431,3,68,34,0,427,428,
        5,35,0,0,428,430,3,68,34,0,429,427,1,0,0,0,430,433,1,0,0,0,431,429,
        1,0,0,0,431,432,1,0,0,0,432,435,1,0,0,0,433,431,1,0,0,0,434,436,
        5,35,0,0,435,434,1,0,0,0,435,436,1,0,0,0,436,67,1,0,0,0,437,438,
        5,44,0,0,438,439,5,22,0,0,439,440,3,2,1,0,440,69,1,0,0,0,441,444,
        5,44,0,0,442,443,5,41,0,0,443,445,5,44,0,0,444,442,1,0,0,0,445,446,
        1,0,0,0,446,444,1,0,0,0,446,447,1,0,0,0,447,452,1,0,0,0,448,449,
        5,44,0,0,449,450,5,41,0,0,450,452,6,35,-1,0,451,441,1,0,0,0,451,
        448,1,0,0,0,452,71,1,0,0,0,48,75,91,105,117,119,138,146,148,153,
        158,177,181,189,196,201,211,220,228,235,240,244,248,251,257,275,
        287,292,300,302,316,327,340,347,351,360,371,374,383,387,392,400,
        409,413,422,431,435,446,451
=======
        4,1,45,308,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,1,0,5,0,64,8,0,10,0,12,0,
        67,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,82,
        8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,94,8,2,1,2,1,2,1,
        2,1,2,1,2,1,2,5,2,102,8,2,10,2,12,2,105,9,2,1,3,1,3,1,3,1,3,1,3,
        1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,121,8,3,1,3,1,3,1,3,1,3,
        1,3,1,3,5,3,129,8,3,10,3,12,3,132,9,3,1,4,1,4,1,4,3,4,137,8,4,1,
        5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,149,8,5,1,6,1,6,5,6,153,
        8,6,10,6,12,6,156,9,6,1,6,3,6,159,8,6,1,6,1,6,1,7,1,7,1,7,1,8,1,
        8,3,8,168,8,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,
        9,182,8,9,10,9,12,9,185,9,9,1,9,1,9,3,9,189,8,9,1,10,1,10,1,10,1,
        11,1,11,1,11,1,11,1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,14,1,14,3,
        14,207,8,14,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,
        17,1,17,1,17,5,17,222,8,17,10,17,12,17,225,9,17,1,18,1,18,1,19,1,
        19,1,19,1,20,1,20,3,20,234,8,20,1,20,1,20,1,21,1,21,1,21,1,21,1,
        21,1,21,1,21,3,21,245,8,21,1,21,3,21,248,8,21,1,21,1,21,1,22,1,22,
        1,22,5,22,255,8,22,10,22,12,22,258,9,22,1,23,1,23,1,23,3,23,263,
        8,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,5,25,275,
        8,25,10,25,12,25,278,9,25,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,
        1,27,1,28,1,28,1,28,5,28,292,8,28,10,28,12,28,295,9,28,1,29,1,29,
        1,29,1,29,1,30,1,30,1,30,4,30,304,8,30,11,30,12,30,305,1,30,0,2,
        4,6,31,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
        42,44,46,48,50,52,54,56,58,60,0,6,1,0,4,6,2,0,3,3,7,7,1,0,8,13,1,
        0,27,28,1,0,29,30,2,0,35,35,43,43,323,0,65,1,0,0,0,2,81,1,0,0,0,
        4,93,1,0,0,0,6,120,1,0,0,0,8,136,1,0,0,0,10,148,1,0,0,0,12,150,1,
        0,0,0,14,162,1,0,0,0,16,165,1,0,0,0,18,173,1,0,0,0,20,190,1,0,0,
        0,22,193,1,0,0,0,24,197,1,0,0,0,26,199,1,0,0,0,28,206,1,0,0,0,30,
        208,1,0,0,0,32,214,1,0,0,0,34,218,1,0,0,0,36,226,1,0,0,0,38,228,
        1,0,0,0,40,231,1,0,0,0,42,237,1,0,0,0,44,251,1,0,0,0,46,259,1,0,
        0,0,48,266,1,0,0,0,50,271,1,0,0,0,52,279,1,0,0,0,54,283,1,0,0,0,
        56,288,1,0,0,0,58,296,1,0,0,0,60,300,1,0,0,0,62,64,3,10,5,0,63,62,
        1,0,0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,68,1,0,0,0,
        67,65,1,0,0,0,68,69,5,0,0,1,69,1,1,0,0,0,70,71,5,1,0,0,71,72,3,2,
        1,0,72,73,5,2,0,0,73,82,1,0,0,0,74,82,5,42,0,0,75,82,5,40,0,0,76,
        82,5,41,0,0,77,82,3,4,2,0,78,82,3,6,3,0,79,82,3,8,4,0,80,82,3,46,
        23,0,81,70,1,0,0,0,81,74,1,0,0,0,81,75,1,0,0,0,81,76,1,0,0,0,81,
        77,1,0,0,0,81,78,1,0,0,0,81,79,1,0,0,0,81,80,1,0,0,0,82,3,1,0,0,
        0,83,84,6,2,-1,0,84,94,5,40,0,0,85,94,5,42,0,0,86,94,3,60,30,0,87,
        88,5,1,0,0,88,89,3,4,2,0,89,90,5,2,0,0,90,94,1,0,0,0,91,92,5,3,0,
        0,92,94,3,4,2,3,93,83,1,0,0,0,93,85,1,0,0,0,93,86,1,0,0,0,93,87,
        1,0,0,0,93,91,1,0,0,0,94,103,1,0,0,0,95,96,10,2,0,0,96,97,7,0,0,
        0,97,102,3,4,2,3,98,99,10,1,0,0,99,100,7,1,0,0,100,102,3,4,2,2,101,
        95,1,0,0,0,101,98,1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,103,104,
        1,0,0,0,104,5,1,0,0,0,105,103,1,0,0,0,106,107,6,3,-1,0,107,121,5,
        41,0,0,108,121,5,42,0,0,109,121,3,60,30,0,110,111,5,1,0,0,111,112,
        3,6,3,0,112,113,5,2,0,0,113,121,1,0,0,0,114,115,3,4,2,0,115,116,
        7,2,0,0,116,117,3,4,2,0,117,121,1,0,0,0,118,119,5,14,0,0,119,121,
        3,6,3,3,120,106,1,0,0,0,120,108,1,0,0,0,120,109,1,0,0,0,120,110,
        1,0,0,0,120,114,1,0,0,0,120,118,1,0,0,0,121,130,1,0,0,0,122,123,
        10,2,0,0,123,124,5,15,0,0,124,129,3,6,3,3,125,126,10,1,0,0,126,127,
        5,16,0,0,127,129,3,6,3,2,128,122,1,0,0,0,128,125,1,0,0,0,129,132,
        1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,7,1,0,0,0,132,130,1,
        0,0,0,133,137,3,54,27,0,134,137,3,48,24,0,135,137,3,60,30,0,136,
        133,1,0,0,0,136,134,1,0,0,0,136,135,1,0,0,0,137,9,1,0,0,0,138,149,
        3,14,7,0,139,149,3,16,8,0,140,149,3,18,9,0,141,149,3,20,10,0,142,
        149,3,30,15,0,143,149,3,22,11,0,144,149,3,26,13,0,145,149,3,42,21,
        0,146,149,3,40,20,0,147,149,3,12,6,0,148,138,1,0,0,0,148,139,1,0,
        0,0,148,140,1,0,0,0,148,141,1,0,0,0,148,142,1,0,0,0,148,143,1,0,
        0,0,148,144,1,0,0,0,148,145,1,0,0,0,148,146,1,0,0,0,148,147,1,0,
        0,0,149,11,1,0,0,0,150,154,5,17,0,0,151,153,3,10,5,0,152,151,1,0,
        0,0,153,156,1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,158,1,0,
        0,0,156,154,1,0,0,0,157,159,3,2,1,0,158,157,1,0,0,0,158,159,1,0,
        0,0,159,160,1,0,0,0,160,161,5,18,0,0,161,13,1,0,0,0,162,163,3,2,
        1,0,163,164,5,19,0,0,164,15,1,0,0,0,165,167,5,20,0,0,166,168,5,21,
        0,0,167,166,1,0,0,0,167,168,1,0,0,0,168,169,1,0,0,0,169,170,5,42,
        0,0,170,171,5,22,0,0,171,172,3,14,7,0,172,17,1,0,0,0,173,174,5,23,
        0,0,174,175,3,6,3,0,175,183,3,12,6,0,176,177,5,24,0,0,177,178,5,
        23,0,0,178,179,3,6,3,0,179,180,3,12,6,0,180,182,1,0,0,0,181,176,
        1,0,0,0,182,185,1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,0,184,188,
        1,0,0,0,185,183,1,0,0,0,186,187,5,24,0,0,187,189,3,12,6,0,188,186,
        1,0,0,0,188,189,1,0,0,0,189,19,1,0,0,0,190,191,5,25,0,0,191,192,
        3,12,6,0,192,21,1,0,0,0,193,194,5,26,0,0,194,195,3,6,3,0,195,196,
        3,12,6,0,196,23,1,0,0,0,197,198,7,3,0,0,198,25,1,0,0,0,199,200,3,
        24,12,0,200,201,5,19,0,0,201,27,1,0,0,0,202,207,5,42,0,0,203,204,
        5,40,0,0,204,205,7,4,0,0,205,207,5,40,0,0,206,202,1,0,0,0,206,203,
        1,0,0,0,207,29,1,0,0,0,208,209,5,31,0,0,209,210,5,42,0,0,210,211,
        5,32,0,0,211,212,3,28,14,0,212,213,3,12,6,0,213,31,1,0,0,0,214,215,
        5,42,0,0,215,216,5,33,0,0,216,217,5,43,0,0,217,33,1,0,0,0,218,223,
        3,32,16,0,219,220,5,34,0,0,220,222,3,32,16,0,221,219,1,0,0,0,222,
        225,1,0,0,0,223,221,1,0,0,0,223,224,1,0,0,0,224,35,1,0,0,0,225,223,
        1,0,0,0,226,227,7,5,0,0,227,37,1,0,0,0,228,229,5,36,0,0,229,230,
        3,36,18,0,230,39,1,0,0,0,231,233,5,37,0,0,232,234,3,2,1,0,233,232,
        1,0,0,0,233,234,1,0,0,0,234,235,1,0,0,0,235,236,5,19,0,0,236,41,
        1,0,0,0,237,238,5,38,0,0,238,244,5,42,0,0,239,240,5,1,0,0,240,241,
        3,34,17,0,241,242,5,2,0,0,242,245,1,0,0,0,243,245,5,35,0,0,244,239,
        1,0,0,0,244,243,1,0,0,0,245,247,1,0,0,0,246,248,3,38,19,0,247,246,
        1,0,0,0,247,248,1,0,0,0,248,249,1,0,0,0,249,250,3,12,6,0,250,43,
        1,0,0,0,251,256,3,2,1,0,252,253,5,34,0,0,253,255,3,2,1,0,254,252,
        1,0,0,0,255,258,1,0,0,0,256,254,1,0,0,0,256,257,1,0,0,0,257,45,1,
        0,0,0,258,256,1,0,0,0,259,260,5,42,0,0,260,262,5,1,0,0,261,263,3,
        44,22,0,262,261,1,0,0,0,262,263,1,0,0,0,263,264,1,0,0,0,264,265,
        5,2,0,0,265,47,1,0,0,0,266,267,5,42,0,0,267,268,5,17,0,0,268,269,
        3,50,25,0,269,270,5,18,0,0,270,49,1,0,0,0,271,276,3,52,26,0,272,
        273,5,34,0,0,273,275,3,52,26,0,274,272,1,0,0,0,275,278,1,0,0,0,276,
        274,1,0,0,0,276,277,1,0,0,0,277,51,1,0,0,0,278,276,1,0,0,0,279,280,
        5,42,0,0,280,281,5,33,0,0,281,282,5,43,0,0,282,53,1,0,0,0,283,284,
        5,42,0,0,284,285,5,17,0,0,285,286,3,56,28,0,286,287,5,18,0,0,287,
        55,1,0,0,0,288,293,3,58,29,0,289,290,5,34,0,0,290,292,3,58,29,0,
        291,289,1,0,0,0,292,295,1,0,0,0,293,291,1,0,0,0,293,294,1,0,0,0,
        294,57,1,0,0,0,295,293,1,0,0,0,296,297,5,42,0,0,297,298,5,33,0,0,
        298,299,3,2,1,0,299,59,1,0,0,0,300,303,5,42,0,0,301,302,5,39,0,0,
        302,304,5,42,0,0,303,301,1,0,0,0,304,305,1,0,0,0,305,303,1,0,0,0,
        305,306,1,0,0,0,306,61,1,0,0,0,25,65,81,93,101,103,120,128,130,136,
        148,154,158,167,183,188,206,223,233,244,247,256,262,276,293,305
>>>>>>> main
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
    public stmts(): StmtsContext {
        return this.getRuleContext(0, StmtsContext)!;
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
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.TYPE, 0);
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
    public exprStmt(): ExprStmtContext {
        return this.getRuleContext(0, ExprStmtContext)!;
    }
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.TYPE, 0);
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
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.TYPE, 0);
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
    public TYPE(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.TYPE, 0)!;
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
    public paramList(): ParamListContext | null {
        return this.getRuleContext(0, ParamListContext);
    }
    public returnType(): ReturnTypeContext | null {
        return this.getRuleContext(0, ReturnTypeContext);
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
    public TYPE(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.TYPE, 0)!;
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
