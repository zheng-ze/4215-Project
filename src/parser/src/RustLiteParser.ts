// Generated from src/b.g4 by ANTLR 4.13.1

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
    public static readonly TYPE = 38;
    public static readonly WS = 39;
    public static readonly COMMENT = 40;
    public static readonly RULE_prog = 0;
    public static readonly RULE_expr = 1;
    public static readonly RULE_arithExpr = 2;
    public static readonly RULE_logicExpr = 3;
    public static readonly RULE_structExpr = 4;
    public static readonly RULE_stmt = 5;
    public static readonly RULE_block = 6;
    public static readonly RULE_exprStmt = 7;
    public static readonly RULE_declareStmt = 8;
    public static readonly RULE_condStmt = 9;
    public static readonly RULE_loopStmt = 10;
    public static readonly RULE_whileStmt = 11;
    public static readonly RULE_iterable = 12;
    public static readonly RULE_forStmt = 13;
    public static readonly RULE_param = 14;
    public static readonly RULE_paramList = 15;
    public static readonly RULE_returnTypes = 16;
    public static readonly RULE_returnType = 17;
    public static readonly RULE_returnStmt = 18;
    public static readonly RULE_fnDeclareStmt = 19;
    public static readonly RULE_argList = 20;
    public static readonly RULE_fnCall = 21;
    public static readonly RULE_structDeclare = 22;
    public static readonly RULE_structDeclareFieldList = 23;
    public static readonly RULE_structDeclareField = 24;
    public static readonly RULE_structInit = 25;
    public static readonly RULE_structInitFieldList = 26;
    public static readonly RULE_structInitField = 27;
    public static readonly RULE_structFieldAccess = 28;

    public static readonly literalNames = [
        null, "'('", "')'", "'+'", "'-'", "'*'", "'/'", "'&&'", "'||'", 
        "'!'", "'>'", "'<'", "'=='", "'!='", "'{'", "'}'", "';'", "'let'", 
        "'mut'", "'='", "'if'", "'else'", "'loop'", "'while'", "'..'", "'range'", 
        "','", "'for'", "'in'", "':'", "'()'", "'->'", "'return'", "'fn'", 
        "'.'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, "INT", "BOOL", "IDENTIFIER", "TYPE", "WS", "COMMENT"
    ];
    public static readonly ruleNames = [
        "prog", "expr", "arithExpr", "logicExpr", "structExpr", "stmt", 
        "block", "exprStmt", "declareStmt", "condStmt", "loopStmt", "whileStmt", 
        "iterable", "forStmt", "param", "paramList", "returnTypes", "returnType", 
        "returnStmt", "fnDeclareStmt", "argList", "fnCall", "structDeclare", 
        "structDeclareFieldList", "structDeclareField", "structInit", "structInitFieldList", 
        "structInitField", "structFieldAccess",
    ];

  public get grammarFileName(): string {
    return "RustLite.g4";
  }
  public get literalNames(): (string | null)[] {
    return RustLiteParser.literalNames;
  }
  public get symbolicNames(): (string | null)[] {
    return RustLiteParser.symbolicNames;
  }
  public get ruleNames(): string[] {
    return RustLiteParser.ruleNames;
  }
  public get serializedATN(): number[] {
    return RustLiteParser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string
  ): antlr.FailedPredicateException {
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
            this.state = 61;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 13763074) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 59) !== 0)) {
                {
                {
                this.state = 58;
                this.stmt();
                }
                }
                this.state = 63;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 64;
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
            this.state = 77;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 66;
                this.match(RustLiteParser.T__0);
                this.state = 67;
                this.expr();
                this.state = 68;
                this.match(RustLiteParser.T__1);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 70;
                this.match(RustLiteParser.IDENTIFIER);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 71;
                this.match(RustLiteParser.INT);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 72;
                this.match(RustLiteParser.BOOL);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 73;
                this.arithExpr(0);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 74;
                this.logicExpr(0);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 75;
                this.structExpr();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 76;
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
            this.state = 82;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.INT:
                {
                this.state = 80;
                this.match(RustLiteParser.INT);
                }
                break;
            case RustLiteParser.IDENTIFIER:
                {
                this.state = 81;
                this.match(RustLiteParser.IDENTIFIER);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 89;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new ArithExprContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                    this.state = 84;
                    if (!(this.precpred(this.context, 3))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                    }
                    this.state = 85;
                    _la = this.tokenStream.LA(1);
                    if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 120) !== 0))) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 86;
                    this.arithExpr(4);
                    }
                    }
                }
                this.state = 91;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
            }
            }
        }
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
            this.state = 100;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.T__8:
                {
                this.state = 93;
                this.match(RustLiteParser.T__8);
                this.state = 94;
                this.logicExpr(3);
                }
                break;
            case RustLiteParser.BOOL:
                {
                this.state = 95;
                this.match(RustLiteParser.BOOL);
                }
                break;
            case RustLiteParser.INT:
            case RustLiteParser.IDENTIFIER:
                {
                this.state = 96;
                this.arithExpr(0);
                this.state = 97;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 15360) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 98;
                this.arithExpr(0);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 107;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new LogicExprContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_logicExpr);
                    this.state = 102;
                    if (!(this.precpred(this.context, 4))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                    }
                    this.state = 103;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 7 || _la === 8)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 104;
                    this.logicExpr(5);
                    }
                    }
                }
                this.state = 109;
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
    public structExpr(): StructExprContext {
        let localContext = new StructExprContext(this.context, this.state);
        this.enterRule(localContext, 8, RustLiteParser.RULE_structExpr);
        try {
            this.state = 113;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 110;
                this.structInit();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 111;
                this.structDeclare();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 112;
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
    public stmt(): StmtContext {
        let localContext = new StmtContext(this.context, this.state);
        this.enterRule(localContext, 10, RustLiteParser.RULE_stmt);
        try {
            this.state = 122;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.T__0:
            case RustLiteParser.T__8:
            case RustLiteParser.INT:
            case RustLiteParser.BOOL:
            case RustLiteParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 115;
                this.exprStmt();
                }
                break;
            case RustLiteParser.T__16:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 116;
                this.declareStmt();
                }
                break;
            case RustLiteParser.T__19:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 117;
                this.condStmt();
                }
                break;
            case RustLiteParser.T__21:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 118;
                this.loopStmt();
                }
                break;
            case RustLiteParser.T__22:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 119;
                this.whileStmt();
                }
                break;
            case RustLiteParser.T__32:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 120;
                this.fnDeclareStmt();
                }
                break;
            case RustLiteParser.T__31:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 121;
                this.returnStmt();
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
        this.enterRule(localContext, 12, RustLiteParser.RULE_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 124;
            this.match(RustLiteParser.T__13);
            this.state = 128;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 13763074) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 59) !== 0)) {
                {
                {
                this.state = 125;
                this.stmt();
                }
                }
                this.state = 130;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 131;
            this.match(RustLiteParser.T__14);
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
        this.enterRule(localContext, 14, RustLiteParser.RULE_exprStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 133;
            this.expr();
            this.state = 134;
            this.match(RustLiteParser.T__15);
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
        this.enterRule(localContext, 16, RustLiteParser.RULE_declareStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 136;
            this.match(RustLiteParser.T__16);
            this.state = 138;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 18) {
                {
                this.state = 137;
                this.match(RustLiteParser.T__17);
                }
            }

            this.state = 140;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 141;
            this.match(RustLiteParser.T__18);
            this.state = 142;
            this.exprStmt();
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
        this.enterRule(localContext, 18, RustLiteParser.RULE_condStmt);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 144;
            this.match(RustLiteParser.T__19);
            this.state = 145;
            this.expr();
            this.state = 146;
            this.block();
            this.state = 154;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 147;
                    this.match(RustLiteParser.T__20);
                    this.state = 148;
                    this.match(RustLiteParser.T__19);
                    this.state = 149;
                    this.expr();
                    this.state = 150;
                    this.block();
                    }
                    }
                }
                this.state = 156;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
            }
            this.state = 159;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 21) {
                {
                this.state = 157;
                this.match(RustLiteParser.T__20);
                this.state = 158;
                this.block();
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
    public loopStmt(): LoopStmtContext {
        let localContext = new LoopStmtContext(this.context, this.state);
        this.enterRule(localContext, 20, RustLiteParser.RULE_loopStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 161;
            this.match(RustLiteParser.T__21);
            this.state = 162;
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
        this.enterRule(localContext, 22, RustLiteParser.RULE_whileStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 164;
            this.match(RustLiteParser.T__22);
            this.state = 165;
            this.expr();
            this.state = 166;
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
    public iterable(): IterableContext {
        let localContext = new IterableContext(this.context, this.state);
        this.enterRule(localContext, 24, RustLiteParser.RULE_iterable);
        try {
            this.state = 178;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 168;
                this.match(RustLiteParser.IDENTIFIER);
                }
                break;
            case RustLiteParser.INT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 169;
                this.match(RustLiteParser.INT);
                this.state = 170;
                this.match(RustLiteParser.T__23);
                this.state = 171;
                this.match(RustLiteParser.INT);
                }
                break;
            case RustLiteParser.T__24:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 172;
                this.match(RustLiteParser.T__24);
                this.state = 173;
                this.match(RustLiteParser.T__0);
                this.state = 174;
                this.match(RustLiteParser.INT);
                this.state = 175;
                this.match(RustLiteParser.T__25);
                this.state = 176;
                this.match(RustLiteParser.INT);
                this.state = 177;
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
    public forStmt(): ForStmtContext {
        let localContext = new ForStmtContext(this.context, this.state);
        this.enterRule(localContext, 26, RustLiteParser.RULE_forStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 180;
            this.match(RustLiteParser.T__26);
            this.state = 181;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 182;
            this.match(RustLiteParser.T__27);
            this.state = 183;
            this.iterable();
            this.state = 184;
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
        this.enterRule(localContext, 28, RustLiteParser.RULE_param);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 186;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 187;
            this.match(RustLiteParser.T__28);
            this.state = 188;
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
    public paramList(): ParamListContext {
        let localContext = new ParamListContext(this.context, this.state);
        this.enterRule(localContext, 30, RustLiteParser.RULE_paramList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 190;
            this.param();
            this.state = 195;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 26) {
                {
                {
                this.state = 191;
                this.match(RustLiteParser.T__25);
                this.state = 192;
                this.param();
                }
                }
                this.state = 197;
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
    public returnTypes(): ReturnTypesContext {
        let localContext = new ReturnTypesContext(this.context, this.state);
        this.enterRule(localContext, 32, RustLiteParser.RULE_returnTypes);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 198;
            _la = this.tokenStream.LA(1);
            if(!(_la === 30 || _la === 38)) {
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
        this.enterRule(localContext, 34, RustLiteParser.RULE_returnType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 200;
            this.match(RustLiteParser.T__30);
            this.state = 201;
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
        this.enterRule(localContext, 36, RustLiteParser.RULE_returnStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 203;
            this.match(RustLiteParser.T__31);
            this.state = 204;
            this.exprStmt();
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
        this.enterRule(localContext, 38, RustLiteParser.RULE_fnDeclareStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 206;
            this.match(RustLiteParser.T__32);
            this.state = 207;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 208;
            this.match(RustLiteParser.T__0);
            this.state = 210;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 37) {
                {
                this.state = 209;
                this.paramList();
                }
            }

            this.state = 212;
            this.match(RustLiteParser.T__1);
            this.state = 214;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 31) {
                {
                this.state = 213;
                this.returnType();
                }
            }

            this.state = 216;
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
        this.enterRule(localContext, 40, RustLiteParser.RULE_argList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 218;
            this.expr();
            this.state = 223;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 26) {
                {
                {
                this.state = 219;
                this.match(RustLiteParser.T__25);
                this.state = 220;
                this.expr();
                }
                }
                this.state = 225;
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
    public fnCall(): FnCallContext {
        let localContext = new FnCallContext(this.context, this.state);
        this.enterRule(localContext, 42, RustLiteParser.RULE_fnCall);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 226;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 227;
            this.match(RustLiteParser.T__0);
            this.state = 229;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1 || _la === 9 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 7) !== 0)) {
                {
                this.state = 228;
                this.argList();
                }
            }

            this.state = 231;
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
        this.enterRule(localContext, 44, RustLiteParser.RULE_structDeclare);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 233;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 234;
            this.match(RustLiteParser.T__13);
            this.state = 235;
            this.structDeclareFieldList();
            this.state = 236;
            this.match(RustLiteParser.T__14);
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
        this.enterRule(localContext, 46, RustLiteParser.RULE_structDeclareFieldList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 238;
            this.structDeclareField();
            this.state = 243;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 26) {
                {
                {
                this.state = 239;
                this.match(RustLiteParser.T__25);
                this.state = 240;
                this.structDeclareField();
                }
                }
                this.state = 245;
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
    public structDeclareField(): StructDeclareFieldContext {
        let localContext = new StructDeclareFieldContext(this.context, this.state);
        this.enterRule(localContext, 48, RustLiteParser.RULE_structDeclareField);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 246;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 247;
            this.match(RustLiteParser.T__28);
            this.state = 248;
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
        this.enterRule(localContext, 50, RustLiteParser.RULE_structInit);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 250;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 251;
            this.match(RustLiteParser.T__13);
            this.state = 252;
            this.structInitFieldList();
            this.state = 253;
            this.match(RustLiteParser.T__14);
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
        this.enterRule(localContext, 52, RustLiteParser.RULE_structInitFieldList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 255;
            this.structInitField();
            this.state = 260;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 26) {
                {
                {
                this.state = 256;
                this.match(RustLiteParser.T__25);
                this.state = 257;
                this.structInitField();
                }
                }
                this.state = 262;
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
    public structInitField(): StructInitFieldContext {
        let localContext = new StructInitFieldContext(this.context, this.state);
        this.enterRule(localContext, 54, RustLiteParser.RULE_structInitField);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 263;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 264;
            this.match(RustLiteParser.T__28);
            this.state = 265;
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
        this.enterRule(localContext, 56, RustLiteParser.RULE_structFieldAccess);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 267;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 268;
            this.match(RustLiteParser.T__33);
            this.state = 269;
            this.match(RustLiteParser.IDENTIFIER);
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

  public override sempred(
    localContext: antlr.ParserRuleContext | null,
    ruleIndex: number,
    predIndex: number
  ): boolean {
    switch (ruleIndex) {
      case 2:
        return this.arithExpr_sempred(
          localContext as ArithExprContext,
          predIndex
        );
      case 3:
        return this.logicExpr_sempred(
          localContext as LogicExprContext,
          predIndex
        );
    }
    return true;
  }
  private arithExpr_sempred(
    localContext: ArithExprContext | null,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this.context, 3);
    }
    return true;
  }
  private logicExpr_sempred(
    localContext: LogicExprContext | null,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 1:
        return this.precpred(this.context, 4);
    }
    return true;
  }

    public static readonly _serializedATN: number[] = [
        4,1,40,272,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,1,0,5,0,60,8,0,10,0,12,0,63,9,0,1,0,1,0,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,78,8,1,1,2,1,2,1,2,3,
        2,83,8,2,1,2,1,2,1,2,5,2,88,8,2,10,2,12,2,91,9,2,1,3,1,3,1,3,1,3,
        1,3,1,3,1,3,1,3,3,3,101,8,3,1,3,1,3,1,3,5,3,106,8,3,10,3,12,3,109,
        9,3,1,4,1,4,1,4,3,4,114,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,123,
        8,5,1,6,1,6,5,6,127,8,6,10,6,12,6,130,9,6,1,6,1,6,1,7,1,7,1,7,1,
        8,1,8,3,8,139,8,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
        9,5,9,153,8,9,10,9,12,9,156,9,9,1,9,1,9,3,9,160,8,9,1,10,1,10,1,
        10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,
        12,1,12,3,12,179,8,12,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,
        14,1,14,1,15,1,15,1,15,5,15,194,8,15,10,15,12,15,197,9,15,1,16,1,
        16,1,17,1,17,1,17,1,18,1,18,1,18,1,19,1,19,1,19,1,19,3,19,211,8,
        19,1,19,1,19,3,19,215,8,19,1,19,1,19,1,20,1,20,1,20,5,20,222,8,20,
        10,20,12,20,225,9,20,1,21,1,21,1,21,3,21,230,8,21,1,21,1,21,1,22,
        1,22,1,22,1,22,1,22,1,23,1,23,1,23,5,23,242,8,23,10,23,12,23,245,
        9,23,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,
        5,26,259,8,26,10,26,12,26,262,9,26,1,27,1,27,1,27,1,27,1,28,1,28,
        1,28,1,28,1,28,0,2,4,6,29,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
        30,32,34,36,38,40,42,44,46,48,50,52,54,56,0,4,1,0,3,6,1,0,10,13,
        1,0,7,8,2,0,30,30,38,38,276,0,61,1,0,0,0,2,77,1,0,0,0,4,82,1,0,0,
        0,6,100,1,0,0,0,8,113,1,0,0,0,10,122,1,0,0,0,12,124,1,0,0,0,14,133,
        1,0,0,0,16,136,1,0,0,0,18,144,1,0,0,0,20,161,1,0,0,0,22,164,1,0,
        0,0,24,178,1,0,0,0,26,180,1,0,0,0,28,186,1,0,0,0,30,190,1,0,0,0,
        32,198,1,0,0,0,34,200,1,0,0,0,36,203,1,0,0,0,38,206,1,0,0,0,40,218,
        1,0,0,0,42,226,1,0,0,0,44,233,1,0,0,0,46,238,1,0,0,0,48,246,1,0,
        0,0,50,250,1,0,0,0,52,255,1,0,0,0,54,263,1,0,0,0,56,267,1,0,0,0,
        58,60,3,10,5,0,59,58,1,0,0,0,60,63,1,0,0,0,61,59,1,0,0,0,61,62,1,
        0,0,0,62,64,1,0,0,0,63,61,1,0,0,0,64,65,5,0,0,1,65,1,1,0,0,0,66,
        67,5,1,0,0,67,68,3,2,1,0,68,69,5,2,0,0,69,78,1,0,0,0,70,78,5,37,
        0,0,71,78,5,35,0,0,72,78,5,36,0,0,73,78,3,4,2,0,74,78,3,6,3,0,75,
        78,3,8,4,0,76,78,3,42,21,0,77,66,1,0,0,0,77,70,1,0,0,0,77,71,1,0,
        0,0,77,72,1,0,0,0,77,73,1,0,0,0,77,74,1,0,0,0,77,75,1,0,0,0,77,76,
        1,0,0,0,78,3,1,0,0,0,79,80,6,2,-1,0,80,83,5,35,0,0,81,83,5,37,0,
        0,82,79,1,0,0,0,82,81,1,0,0,0,83,89,1,0,0,0,84,85,10,3,0,0,85,86,
        7,0,0,0,86,88,3,4,2,4,87,84,1,0,0,0,88,91,1,0,0,0,89,87,1,0,0,0,
        89,90,1,0,0,0,90,5,1,0,0,0,91,89,1,0,0,0,92,93,6,3,-1,0,93,94,5,
        9,0,0,94,101,3,6,3,3,95,101,5,36,0,0,96,97,3,4,2,0,97,98,7,1,0,0,
        98,99,3,4,2,0,99,101,1,0,0,0,100,92,1,0,0,0,100,95,1,0,0,0,100,96,
        1,0,0,0,101,107,1,0,0,0,102,103,10,4,0,0,103,104,7,2,0,0,104,106,
        3,6,3,5,105,102,1,0,0,0,106,109,1,0,0,0,107,105,1,0,0,0,107,108,
        1,0,0,0,108,7,1,0,0,0,109,107,1,0,0,0,110,114,3,50,25,0,111,114,
        3,44,22,0,112,114,3,56,28,0,113,110,1,0,0,0,113,111,1,0,0,0,113,
        112,1,0,0,0,114,9,1,0,0,0,115,123,3,14,7,0,116,123,3,16,8,0,117,
        123,3,18,9,0,118,123,3,20,10,0,119,123,3,22,11,0,120,123,3,38,19,
        0,121,123,3,36,18,0,122,115,1,0,0,0,122,116,1,0,0,0,122,117,1,0,
        0,0,122,118,1,0,0,0,122,119,1,0,0,0,122,120,1,0,0,0,122,121,1,0,
        0,0,123,11,1,0,0,0,124,128,5,14,0,0,125,127,3,10,5,0,126,125,1,0,
        0,0,127,130,1,0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,129,131,1,0,
        0,0,130,128,1,0,0,0,131,132,5,15,0,0,132,13,1,0,0,0,133,134,3,2,
        1,0,134,135,5,16,0,0,135,15,1,0,0,0,136,138,5,17,0,0,137,139,5,18,
        0,0,138,137,1,0,0,0,138,139,1,0,0,0,139,140,1,0,0,0,140,141,5,37,
        0,0,141,142,5,19,0,0,142,143,3,14,7,0,143,17,1,0,0,0,144,145,5,20,
        0,0,145,146,3,2,1,0,146,154,3,12,6,0,147,148,5,21,0,0,148,149,5,
        20,0,0,149,150,3,2,1,0,150,151,3,12,6,0,151,153,1,0,0,0,152,147,
        1,0,0,0,153,156,1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,159,
        1,0,0,0,156,154,1,0,0,0,157,158,5,21,0,0,158,160,3,12,6,0,159,157,
        1,0,0,0,159,160,1,0,0,0,160,19,1,0,0,0,161,162,5,22,0,0,162,163,
        3,12,6,0,163,21,1,0,0,0,164,165,5,23,0,0,165,166,3,2,1,0,166,167,
        3,12,6,0,167,23,1,0,0,0,168,179,5,37,0,0,169,170,5,35,0,0,170,171,
        5,24,0,0,171,179,5,35,0,0,172,173,5,25,0,0,173,174,5,1,0,0,174,175,
        5,35,0,0,175,176,5,26,0,0,176,177,5,35,0,0,177,179,5,2,0,0,178,168,
        1,0,0,0,178,169,1,0,0,0,178,172,1,0,0,0,179,25,1,0,0,0,180,181,5,
        27,0,0,181,182,5,37,0,0,182,183,5,28,0,0,183,184,3,24,12,0,184,185,
        3,12,6,0,185,27,1,0,0,0,186,187,5,37,0,0,187,188,5,29,0,0,188,189,
        5,38,0,0,189,29,1,0,0,0,190,195,3,28,14,0,191,192,5,26,0,0,192,194,
        3,28,14,0,193,191,1,0,0,0,194,197,1,0,0,0,195,193,1,0,0,0,195,196,
        1,0,0,0,196,31,1,0,0,0,197,195,1,0,0,0,198,199,7,3,0,0,199,33,1,
        0,0,0,200,201,5,31,0,0,201,202,3,32,16,0,202,35,1,0,0,0,203,204,
        5,32,0,0,204,205,3,14,7,0,205,37,1,0,0,0,206,207,5,33,0,0,207,208,
        5,37,0,0,208,210,5,1,0,0,209,211,3,30,15,0,210,209,1,0,0,0,210,211,
        1,0,0,0,211,212,1,0,0,0,212,214,5,2,0,0,213,215,3,34,17,0,214,213,
        1,0,0,0,214,215,1,0,0,0,215,216,1,0,0,0,216,217,3,12,6,0,217,39,
        1,0,0,0,218,223,3,2,1,0,219,220,5,26,0,0,220,222,3,2,1,0,221,219,
        1,0,0,0,222,225,1,0,0,0,223,221,1,0,0,0,223,224,1,0,0,0,224,41,1,
        0,0,0,225,223,1,0,0,0,226,227,5,37,0,0,227,229,5,1,0,0,228,230,3,
        40,20,0,229,228,1,0,0,0,229,230,1,0,0,0,230,231,1,0,0,0,231,232,
        5,2,0,0,232,43,1,0,0,0,233,234,5,37,0,0,234,235,5,14,0,0,235,236,
        3,46,23,0,236,237,5,15,0,0,237,45,1,0,0,0,238,243,3,48,24,0,239,
        240,5,26,0,0,240,242,3,48,24,0,241,239,1,0,0,0,242,245,1,0,0,0,243,
        241,1,0,0,0,243,244,1,0,0,0,244,47,1,0,0,0,245,243,1,0,0,0,246,247,
        5,37,0,0,247,248,5,29,0,0,248,249,5,38,0,0,249,49,1,0,0,0,250,251,
        5,37,0,0,251,252,5,14,0,0,252,253,3,52,26,0,253,254,5,15,0,0,254,
        51,1,0,0,0,255,260,3,54,27,0,256,257,5,26,0,0,257,259,3,54,27,0,
        258,256,1,0,0,0,259,262,1,0,0,0,260,258,1,0,0,0,260,261,1,0,0,0,
        261,53,1,0,0,0,262,260,1,0,0,0,263,264,5,37,0,0,264,265,5,29,0,0,
        265,266,3,2,1,0,266,55,1,0,0,0,267,268,5,37,0,0,268,269,5,34,0,0,
        269,270,5,37,0,0,270,57,1,0,0,0,20,61,77,82,89,100,107,113,122,128,
        138,154,159,178,195,210,214,223,229,243,260
    ];

  private static __ATN: antlr.ATN;
  public static get _ATN(): antlr.ATN {
    if (!RustLiteParser.__ATN) {
      RustLiteParser.__ATN = new antlr.ATNDeserializer().deserialize(
        RustLiteParser._serializedATN
      );
    }

    return RustLiteParser.__ATN;
  }

  private static readonly vocabulary = new antlr.Vocabulary(
    RustLiteParser.literalNames,
    RustLiteParser.symbolicNames,
    []
  );

  public override get vocabulary(): antlr.Vocabulary {
    return RustLiteParser.vocabulary;
  }

  private static readonly decisionsToDFA =
    RustLiteParser._ATN.decisionToState.map(
      (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index)
    );
}

export class ProgContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public EOF(): antlr.TerminalNode {
    return this.getToken(RustLiteParser.EOF, 0)!;
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
    return RustLiteParser.RULE_prog;
  }
  public override enterRule(listener: RustLiteListener): void {
    if (listener.enterProg) {
      listener.enterProg(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitProg) {
      listener.exitProg(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
    if (visitor.visitProg) {
      return visitor.visitProg(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ExprContext extends antlr.ParserRuleContext {
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
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
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
  public override get ruleIndex(): number {
    return RustLiteParser.RULE_arithExpr;
  }
  public override enterRule(listener: RustLiteListener): void {
    if (listener.enterArithExpr) {
      listener.enterArithExpr(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitArithExpr) {
      listener.exitArithExpr(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
    if (visitor.visitArithExpr) {
      return visitor.visitArithExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class LogicExprContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
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
  public BOOL(): antlr.TerminalNode | null {
    return this.getToken(RustLiteParser.BOOL, 0);
  }
  public arithExpr(): ArithExprContext[];
  public arithExpr(i: number): ArithExprContext | null;
  public arithExpr(i?: number): ArithExprContext[] | ArithExprContext | null {
    if (i === undefined) {
      return this.getRuleContexts(ArithExprContext);
    }

    return this.getRuleContext(i, ArithExprContext);
  }
  public override get ruleIndex(): number {
    return RustLiteParser.RULE_logicExpr;
  }
  public override enterRule(listener: RustLiteListener): void {
    if (listener.enterLogicExpr) {
      listener.enterLogicExpr(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitLogicExpr) {
      listener.exitLogicExpr(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
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
    public structDeclare(): StructDeclareContext | null {
        return this.getRuleContext(0, StructDeclareContext);
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

export class StmtContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
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
  public loopStmt(): LoopStmtContext | null {
    return this.getRuleContext(0, LoopStmtContext);
  }
  public whileStmt(): WhileStmtContext | null {
    return this.getRuleContext(0, WhileStmtContext);
  }
  public fnDeclareStmt(): FnDeclareStmtContext | null {
    return this.getRuleContext(0, FnDeclareStmtContext);
  }
  public returnStmt(): ReturnStmtContext | null {
    return this.getRuleContext(0, ReturnStmtContext);
  }
  public override get ruleIndex(): number {
    return RustLiteParser.RULE_stmt;
  }
  public override enterRule(listener: RustLiteListener): void {
    if (listener.enterStmt) {
      listener.enterStmt(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitStmt) {
      listener.exitStmt(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
    if (visitor.visitStmt) {
      return visitor.visitStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class BlockContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
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
    return RustLiteParser.RULE_block;
  }
  public override enterRule(listener: RustLiteListener): void {
    if (listener.enterBlock) {
      listener.enterBlock(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitBlock) {
      listener.exitBlock(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
    if (visitor.visitBlock) {
      return visitor.visitBlock(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ExprStmtContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext)!;
  }
  public override get ruleIndex(): number {
    return RustLiteParser.RULE_exprStmt;
  }
  public override enterRule(listener: RustLiteListener): void {
    if (listener.enterExprStmt) {
      listener.enterExprStmt(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitExprStmt) {
      listener.exitExprStmt(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
    if (visitor.visitExprStmt) {
      return visitor.visitExprStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class DeclareStmtContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public IDENTIFIER(): antlr.TerminalNode {
    return this.getToken(RustLiteParser.IDENTIFIER, 0)!;
  }
  public exprStmt(): ExprStmtContext {
    return this.getRuleContext(0, ExprStmtContext)!;
  }
  public override get ruleIndex(): number {
    return RustLiteParser.RULE_declareStmt;
  }
  public override enterRule(listener: RustLiteListener): void {
    if (listener.enterDeclareStmt) {
      listener.enterDeclareStmt(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitDeclareStmt) {
      listener.exitDeclareStmt(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
    if (visitor.visitDeclareStmt) {
      return visitor.visitDeclareStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class CondStmtContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
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
  public block(): BlockContext[];
  public block(i: number): BlockContext | null;
  public block(i?: number): BlockContext[] | BlockContext | null {
    if (i === undefined) {
      return this.getRuleContexts(BlockContext);
    }

    return this.getRuleContext(i, BlockContext);
  }
  public override get ruleIndex(): number {
    return RustLiteParser.RULE_condStmt;
  }
  public override enterRule(listener: RustLiteListener): void {
    if (listener.enterCondStmt) {
      listener.enterCondStmt(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitCondStmt) {
      listener.exitCondStmt(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
    if (visitor.visitCondStmt) {
      return visitor.visitCondStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class LoopStmtContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public block(): BlockContext {
    return this.getRuleContext(0, BlockContext)!;
  }
  public override get ruleIndex(): number {
    return RustLiteParser.RULE_loopStmt;
  }
  public override enterRule(listener: RustLiteListener): void {
    if (listener.enterLoopStmt) {
      listener.enterLoopStmt(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitLoopStmt) {
      listener.exitLoopStmt(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
    if (visitor.visitLoopStmt) {
      return visitor.visitLoopStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class WhileStmtContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext)!;
  }
  public block(): BlockContext {
    return this.getRuleContext(0, BlockContext)!;
  }
  public override get ruleIndex(): number {
    return RustLiteParser.RULE_whileStmt;
  }
  public override enterRule(listener: RustLiteListener): void {
    if (listener.enterWhileStmt) {
      listener.enterWhileStmt(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitWhileStmt) {
      listener.exitWhileStmt(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
    if (visitor.visitWhileStmt) {
      return visitor.visitWhileStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class IterableContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
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
    if (listener.enterIterable) {
      listener.enterIterable(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitIterable) {
      listener.exitIterable(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
    if (visitor.visitIterable) {
      return visitor.visitIterable(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ForStmtContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
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
    if (listener.enterForStmt) {
      listener.enterForStmt(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitForStmt) {
      listener.exitForStmt(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
    if (visitor.visitForStmt) {
      return visitor.visitForStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ParamContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public IDENTIFIER(): antlr.TerminalNode {
    return this.getToken(RustLiteParser.IDENTIFIER, 0)!;
  }
  public TYPE(): antlr.TerminalNode {
    return this.getToken(RustLiteParser.TYPE, 0)!;
  }
  public override get ruleIndex(): number {
    return RustLiteParser.RULE_param;
  }
  public override enterRule(listener: RustLiteListener): void {
    if (listener.enterParam) {
      listener.enterParam(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitParam) {
      listener.exitParam(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
    if (visitor.visitParam) {
      return visitor.visitParam(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ParamListContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
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
    if (listener.enterParamList) {
      listener.enterParamList(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitParamList) {
      listener.exitParamList(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
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
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public exprStmt(): ExprStmtContext {
    return this.getRuleContext(0, ExprStmtContext)!;
  }
  public override get ruleIndex(): number {
    return RustLiteParser.RULE_returnStmt;
  }
  public override enterRule(listener: RustLiteListener): void {
    if (listener.enterReturnStmt) {
      listener.enterReturnStmt(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitReturnStmt) {
      listener.exitReturnStmt(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
    if (visitor.visitReturnStmt) {
      return visitor.visitReturnStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class FnDeclareStmtContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
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
    if (listener.enterFnDeclareStmt) {
      listener.enterFnDeclareStmt(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitFnDeclareStmt) {
      listener.exitFnDeclareStmt(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
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
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public IDENTIFIER(): antlr.TerminalNode {
    return this.getToken(RustLiteParser.IDENTIFIER, 0)!;
  }
  public structDeclareFieldList(): StructDeclareFieldListContext {
    return this.getRuleContext(0, StructDeclareFieldListContext)!;
  }
  public override get ruleIndex(): number {
    return RustLiteParser.RULE_structDeclare;
  }
  public override enterRule(listener: RustLiteListener): void {
    if (listener.enterStructDeclare) {
      listener.enterStructDeclare(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitStructDeclare) {
      listener.exitStructDeclare(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
    if (visitor.visitStructDeclare) {
      return visitor.visitStructDeclare(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class StructDeclareFieldListContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public structDeclareField(): StructDeclareFieldContext[];
  public structDeclareField(i: number): StructDeclareFieldContext | null;
  public structDeclareField(
    i?: number
  ): StructDeclareFieldContext[] | StructDeclareFieldContext | null {
    if (i === undefined) {
      return this.getRuleContexts(StructDeclareFieldContext);
    }

    return this.getRuleContext(i, StructDeclareFieldContext);
  }
  public override get ruleIndex(): number {
    return RustLiteParser.RULE_structDeclareFieldList;
  }
  public override enterRule(listener: RustLiteListener): void {
    if (listener.enterStructDeclareFieldList) {
      listener.enterStructDeclareFieldList(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitStructDeclareFieldList) {
      listener.exitStructDeclareFieldList(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
    if (visitor.visitStructDeclareFieldList) {
      return visitor.visitStructDeclareFieldList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class StructDeclareFieldContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
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
    if (listener.enterStructDeclareField) {
      listener.enterStructDeclareField(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitStructDeclareField) {
      listener.exitStructDeclareField(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
    if (visitor.visitStructDeclareField) {
      return visitor.visitStructDeclareField(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class StructInitContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public IDENTIFIER(): antlr.TerminalNode {
    return this.getToken(RustLiteParser.IDENTIFIER, 0)!;
  }
  public structInitFieldList(): StructInitFieldListContext {
    return this.getRuleContext(0, StructInitFieldListContext)!;
  }
  public override get ruleIndex(): number {
    return RustLiteParser.RULE_structInit;
  }
  public override enterRule(listener: RustLiteListener): void {
    if (listener.enterStructInit) {
      listener.enterStructInit(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitStructInit) {
      listener.exitStructInit(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
    if (visitor.visitStructInit) {
      return visitor.visitStructInit(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class StructInitFieldListContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public structInitField(): StructInitFieldContext[];
  public structInitField(i: number): StructInitFieldContext | null;
  public structInitField(
    i?: number
  ): StructInitFieldContext[] | StructInitFieldContext | null {
    if (i === undefined) {
      return this.getRuleContexts(StructInitFieldContext);
    }

    return this.getRuleContext(i, StructInitFieldContext);
  }
  public override get ruleIndex(): number {
    return RustLiteParser.RULE_structInitFieldList;
  }
  public override enterRule(listener: RustLiteListener): void {
    if (listener.enterStructInitFieldList) {
      listener.enterStructInitFieldList(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitStructInitFieldList) {
      listener.exitStructInitFieldList(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
    if (visitor.visitStructInitFieldList) {
      return visitor.visitStructInitFieldList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class StructInitFieldContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
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
    if (listener.enterStructInitField) {
      listener.enterStructInitField(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitStructInitField) {
      listener.exitStructInitField(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
    if (visitor.visitStructInitField) {
      return visitor.visitStructInitField(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class StructFieldAccessContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public IDENTIFIER(): antlr.TerminalNode[];
  public IDENTIFIER(i: number): antlr.TerminalNode | null;
  public IDENTIFIER(
    i?: number
  ): antlr.TerminalNode | null | antlr.TerminalNode[] {
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
    if (listener.enterStructFieldAccess) {
      listener.enterStructFieldAccess(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitStructFieldAccess) {
      listener.exitStructFieldAccess(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
    if (visitor.visitStructFieldAccess) {
      return visitor.visitStructFieldAccess(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
