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
  public static readonly INT = 34;
  public static readonly BOOL = 35;
  public static readonly IDENTIFIER = 36;
  public static readonly TYPE = 37;
  public static readonly WS = 38;
  public static readonly COMMENT = 39;
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
  public static readonly RULE_returnType = 16;
  public static readonly RULE_returnStmt = 17;
  public static readonly RULE_fnDeclareStmt = 18;
  public static readonly RULE_structDeclare = 19;
  public static readonly RULE_structDeclareFieldList = 20;
  public static readonly RULE_structDeclareField = 21;
  public static readonly RULE_structInit = 22;
  public static readonly RULE_structInitFieldList = 23;
  public static readonly RULE_structInitField = 24;
  public static readonly RULE_structFieldAccess = 25;

  public static readonly literalNames = [
    null,
    "'('",
    "')'",
    "'+'",
    "'-'",
    "'*'",
    "'/'",
    "'&&'",
    "'||'",
    "'!'",
    "'>'",
    "'<'",
    "'=='",
    "'!='",
    "'{'",
    "'}'",
    "';'",
    "'let'",
    "'mut'",
    "'='",
    "'if'",
    "'else'",
    "'loop'",
    "'while'",
    "'..'",
    "'range'",
    "','",
    "'for'",
    "'in'",
    "':'",
    "'->'",
    "'return'",
    "'fn'",
    "'.'",
  ];

  public static readonly symbolicNames = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "INT",
    "BOOL",
    "IDENTIFIER",
    "TYPE",
    "WS",
    "COMMENT",
  ];
  public static readonly ruleNames = [
    "prog",
    "expr",
    "arithExpr",
    "logicExpr",
    "structExpr",
    "stmt",
    "block",
    "exprStmt",
    "declareStmt",
    "condStmt",
    "loopStmt",
    "whileStmt",
    "iterable",
    "forStmt",
    "param",
    "paramList",
    "returnType",
    "returnStmt",
    "fnDeclareStmt",
    "structDeclare",
    "structDeclareFieldList",
    "structDeclareField",
    "structInit",
    "structInitFieldList",
    "structInitField",
    "structFieldAccess",
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
    this.interpreter = new antlr.ParserATNSimulator(
      this,
      RustLiteParser._ATN,
      RustLiteParser.decisionsToDFA,
      new antlr.PredictionContextCache()
    );
  }
  public prog(): ProgContext {
    let localContext = new ProgContext(this.context, this.state);
    this.enterRule(localContext, 0, RustLiteParser.RULE_prog);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 55;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        while (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 2161246722) !== 0) ||
          (((_la - 32) & ~0x1f) === 0 && ((1 << (_la - 32)) & 29) !== 0)
        ) {
          {
            {
              this.state = 52;
              this.stmt();
            }
          }
          this.state = 57;
          this.errorHandler.sync(this);
          _la = this.tokenStream.LA(1);
        }
        this.state = 58;
        this.match(RustLiteParser.EOF);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public expr(): ExprContext {
    let localContext = new ExprContext(this.context, this.state);
    this.enterRule(localContext, 2, RustLiteParser.RULE_expr);
    try {
      this.state = 70;
      this.errorHandler.sync(this);
      switch (
        this.interpreter.adaptivePredict(this.tokenStream, 1, this.context)
      ) {
        case 1:
          this.enterOuterAlt(localContext, 1);
          {
            this.state = 60;
            this.match(RustLiteParser.T__0);
            this.state = 61;
            this.expr();
            this.state = 62;
            this.match(RustLiteParser.T__1);
          }
          break;
        case 2:
          this.enterOuterAlt(localContext, 2);
          {
            this.state = 64;
            this.match(RustLiteParser.IDENTIFIER);
          }
          break;
        case 3:
          this.enterOuterAlt(localContext, 3);
          {
            this.state = 65;
            this.match(RustLiteParser.INT);
          }
          break;
        case 4:
          this.enterOuterAlt(localContext, 4);
          {
            this.state = 66;
            this.match(RustLiteParser.BOOL);
          }
          break;
        case 5:
          this.enterOuterAlt(localContext, 5);
          {
            this.state = 67;
            this.arithExpr(0);
          }
          break;
        case 6:
          this.enterOuterAlt(localContext, 6);
          {
            this.state = 68;
            this.logicExpr(0);
          }
          break;
        case 7:
          this.enterOuterAlt(localContext, 7);
          {
            this.state = 69;
            this.structExpr();
          }
          break;
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
        this.state = 75;
        this.errorHandler.sync(this);
        switch (this.tokenStream.LA(1)) {
          case RustLiteParser.INT:
            {
              this.state = 73;
              this.match(RustLiteParser.INT);
            }
            break;
          case RustLiteParser.IDENTIFIER:
            {
              this.state = 74;
              this.match(RustLiteParser.IDENTIFIER);
            }
            break;
          default:
            throw new antlr.NoViableAltException(this);
        }
        this.context!.stop = this.tokenStream.LT(-1);
        this.state = 82;
        this.errorHandler.sync(this);
        alternative = this.interpreter.adaptivePredict(
          this.tokenStream,
          3,
          this.context
        );
        while (
          alternative !== 2 &&
          alternative !== antlr.ATN.INVALID_ALT_NUMBER
        ) {
          if (alternative === 1) {
            if (this.parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            previousContext = localContext;
            {
              {
                localContext = new ArithExprContext(parentContext, parentState);
                this.pushNewRecursionContext(
                  localContext,
                  _startState,
                  RustLiteParser.RULE_arithExpr
                );
                this.state = 77;
                if (!this.precpred(this.context, 3)) {
                  throw this.createFailedPredicateException(
                    "this.precpred(this.context, 3)"
                  );
                }
                this.state = 78;
                _la = this.tokenStream.LA(1);
                if (!((_la & ~0x1f) === 0 && ((1 << _la) & 120) !== 0)) {
                  this.errorHandler.recoverInline(this);
                } else {
                  this.errorHandler.reportMatch(this);
                  this.consume();
                }
                this.state = 79;
                this.arithExpr(4);
              }
            }
          }
          this.state = 84;
          this.errorHandler.sync(this);
          alternative = this.interpreter.adaptivePredict(
            this.tokenStream,
            3,
            this.context
          );
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
        this.state = 93;
        this.errorHandler.sync(this);
        switch (this.tokenStream.LA(1)) {
          case RustLiteParser.T__8:
            {
              this.state = 86;
              this.match(RustLiteParser.T__8);
              this.state = 87;
              this.logicExpr(3);
            }
            break;
          case RustLiteParser.BOOL:
            {
              this.state = 88;
              this.match(RustLiteParser.BOOL);
            }
            break;
          case RustLiteParser.INT:
          case RustLiteParser.IDENTIFIER:
            {
              this.state = 89;
              this.arithExpr(0);
              this.state = 90;
              _la = this.tokenStream.LA(1);
              if (!((_la & ~0x1f) === 0 && ((1 << _la) & 15360) !== 0)) {
                this.errorHandler.recoverInline(this);
              } else {
                this.errorHandler.reportMatch(this);
                this.consume();
              }
              this.state = 91;
              this.arithExpr(0);
            }
            break;
          default:
            throw new antlr.NoViableAltException(this);
        }
        this.context!.stop = this.tokenStream.LT(-1);
        this.state = 100;
        this.errorHandler.sync(this);
        alternative = this.interpreter.adaptivePredict(
          this.tokenStream,
          5,
          this.context
        );
        while (
          alternative !== 2 &&
          alternative !== antlr.ATN.INVALID_ALT_NUMBER
        ) {
          if (alternative === 1) {
            if (this.parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            previousContext = localContext;
            {
              {
                localContext = new LogicExprContext(parentContext, parentState);
                this.pushNewRecursionContext(
                  localContext,
                  _startState,
                  RustLiteParser.RULE_logicExpr
                );
                this.state = 95;
                if (!this.precpred(this.context, 4)) {
                  throw this.createFailedPredicateException(
                    "this.precpred(this.context, 4)"
                  );
                }
                this.state = 96;
                _la = this.tokenStream.LA(1);
                if (!(_la === 7 || _la === 8)) {
                  this.errorHandler.recoverInline(this);
                } else {
                  this.errorHandler.reportMatch(this);
                  this.consume();
                }
                this.state = 97;
                this.logicExpr(5);
              }
            }
          }
          this.state = 102;
          this.errorHandler.sync(this);
          alternative = this.interpreter.adaptivePredict(
            this.tokenStream,
            5,
            this.context
          );
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
  public structExpr(): StructExprContext {
    let localContext = new StructExprContext(this.context, this.state);
    this.enterRule(localContext, 8, RustLiteParser.RULE_structExpr);
    try {
      this.state = 105;
      this.errorHandler.sync(this);
      switch (
        this.interpreter.adaptivePredict(this.tokenStream, 6, this.context)
      ) {
        case 1:
          this.enterOuterAlt(localContext, 1);
          {
            this.state = 103;
            this.structInit();
          }
          break;
        case 2:
          this.enterOuterAlt(localContext, 2);
          {
            this.state = 104;
            this.structDeclare();
          }
          break;
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public stmt(): StmtContext {
    let localContext = new StmtContext(this.context, this.state);
    this.enterRule(localContext, 10, RustLiteParser.RULE_stmt);
    try {
      this.state = 114;
      this.errorHandler.sync(this);
      switch (this.tokenStream.LA(1)) {
        case RustLiteParser.T__0:
        case RustLiteParser.T__8:
        case RustLiteParser.INT:
        case RustLiteParser.BOOL:
        case RustLiteParser.IDENTIFIER:
          this.enterOuterAlt(localContext, 1);
          {
            this.state = 107;
            this.exprStmt();
          }
          break;
        case RustLiteParser.T__16:
          this.enterOuterAlt(localContext, 2);
          {
            this.state = 108;
            this.declareStmt();
          }
          break;
        case RustLiteParser.T__19:
          this.enterOuterAlt(localContext, 3);
          {
            this.state = 109;
            this.condStmt();
          }
          break;
        case RustLiteParser.T__21:
          this.enterOuterAlt(localContext, 4);
          {
            this.state = 110;
            this.loopStmt();
          }
          break;
        case RustLiteParser.T__22:
          this.enterOuterAlt(localContext, 5);
          {
            this.state = 111;
            this.whileStmt();
          }
          break;
        case RustLiteParser.T__31:
          this.enterOuterAlt(localContext, 6);
          {
            this.state = 112;
            this.fnDeclareStmt();
          }
          break;
        case RustLiteParser.T__30:
          this.enterOuterAlt(localContext, 7);
          {
            this.state = 113;
            this.returnStmt();
          }
          break;
        default:
          throw new antlr.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
        this.state = 116;
        this.match(RustLiteParser.T__13);
        this.state = 120;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        while (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 2161246722) !== 0) ||
          (((_la - 32) & ~0x1f) === 0 && ((1 << (_la - 32)) & 29) !== 0)
        ) {
          {
            {
              this.state = 117;
              this.stmt();
            }
          }
          this.state = 122;
          this.errorHandler.sync(this);
          _la = this.tokenStream.LA(1);
        }
        this.state = 123;
        this.match(RustLiteParser.T__14);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
        this.state = 125;
        this.expr();
        this.state = 126;
        this.match(RustLiteParser.T__15);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
        this.state = 128;
        this.match(RustLiteParser.T__16);
        this.state = 130;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 18) {
          {
            this.state = 129;
            this.match(RustLiteParser.T__17);
          }
        }

        this.state = 132;
        this.match(RustLiteParser.IDENTIFIER);
        this.state = 133;
        this.match(RustLiteParser.T__18);
        this.state = 134;
        this.exprStmt();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
        this.state = 136;
        this.match(RustLiteParser.T__19);
        this.state = 137;
        this.expr();
        this.state = 138;
        this.block();
        this.state = 146;
        this.errorHandler.sync(this);
        alternative = this.interpreter.adaptivePredict(
          this.tokenStream,
          10,
          this.context
        );
        while (
          alternative !== 2 &&
          alternative !== antlr.ATN.INVALID_ALT_NUMBER
        ) {
          if (alternative === 1) {
            {
              {
                this.state = 139;
                this.match(RustLiteParser.T__20);
                this.state = 140;
                this.match(RustLiteParser.T__19);
                this.state = 141;
                this.expr();
                this.state = 142;
                this.block();
              }
            }
          }
          this.state = 148;
          this.errorHandler.sync(this);
          alternative = this.interpreter.adaptivePredict(
            this.tokenStream,
            10,
            this.context
          );
        }
        this.state = 151;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 21) {
          {
            this.state = 149;
            this.match(RustLiteParser.T__20);
            this.state = 150;
            this.block();
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
        this.state = 153;
        this.match(RustLiteParser.T__21);
        this.state = 154;
        this.block();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
        this.state = 156;
        this.match(RustLiteParser.T__22);
        this.state = 157;
        this.expr();
        this.state = 158;
        this.block();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public iterable(): IterableContext {
    let localContext = new IterableContext(this.context, this.state);
    this.enterRule(localContext, 24, RustLiteParser.RULE_iterable);
    try {
      this.state = 170;
      this.errorHandler.sync(this);
      switch (this.tokenStream.LA(1)) {
        case RustLiteParser.IDENTIFIER:
          this.enterOuterAlt(localContext, 1);
          {
            this.state = 160;
            this.match(RustLiteParser.IDENTIFIER);
          }
          break;
        case RustLiteParser.INT:
          this.enterOuterAlt(localContext, 2);
          {
            this.state = 161;
            this.match(RustLiteParser.INT);
            this.state = 162;
            this.match(RustLiteParser.T__23);
            this.state = 163;
            this.match(RustLiteParser.INT);
          }
          break;
        case RustLiteParser.T__24:
          this.enterOuterAlt(localContext, 3);
          {
            this.state = 164;
            this.match(RustLiteParser.T__24);
            this.state = 165;
            this.match(RustLiteParser.T__0);
            this.state = 166;
            this.match(RustLiteParser.INT);
            this.state = 167;
            this.match(RustLiteParser.T__25);
            this.state = 168;
            this.match(RustLiteParser.INT);
            this.state = 169;
            this.match(RustLiteParser.T__1);
          }
          break;
        default:
          throw new antlr.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
        this.state = 172;
        this.match(RustLiteParser.T__26);
        this.state = 173;
        this.match(RustLiteParser.IDENTIFIER);
        this.state = 174;
        this.match(RustLiteParser.T__27);
        this.state = 175;
        this.iterable();
        this.state = 176;
        this.block();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
        this.state = 178;
        this.match(RustLiteParser.IDENTIFIER);
        this.state = 179;
        this.match(RustLiteParser.T__28);
        this.state = 180;
        this.match(RustLiteParser.TYPE);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
        this.state = 182;
        this.param();
        this.state = 187;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        while (_la === 26) {
          {
            {
              this.state = 183;
              this.match(RustLiteParser.T__25);
              this.state = 184;
              this.param();
            }
          }
          this.state = 189;
          this.errorHandler.sync(this);
          _la = this.tokenStream.LA(1);
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
      this.exitRule();
    }
    return localContext;
  }
  public returnType(): ReturnTypeContext {
    let localContext = new ReturnTypeContext(this.context, this.state);
    this.enterRule(localContext, 32, RustLiteParser.RULE_returnType);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 190;
        this.match(RustLiteParser.T__29);
        this.state = 191;
        this.match(RustLiteParser.TYPE);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public returnStmt(): ReturnStmtContext {
    let localContext = new ReturnStmtContext(this.context, this.state);
    this.enterRule(localContext, 34, RustLiteParser.RULE_returnStmt);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 193;
        this.match(RustLiteParser.T__30);
        this.state = 194;
        this.exprStmt();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public fnDeclareStmt(): FnDeclareStmtContext {
    let localContext = new FnDeclareStmtContext(this.context, this.state);
    this.enterRule(localContext, 36, RustLiteParser.RULE_fnDeclareStmt);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 196;
        this.match(RustLiteParser.T__31);
        this.state = 197;
        this.match(RustLiteParser.IDENTIFIER);
        this.state = 198;
        this.match(RustLiteParser.T__0);
        this.state = 200;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 36) {
          {
            this.state = 199;
            this.paramList();
          }
        }

        this.state = 202;
        this.match(RustLiteParser.T__1);
        this.state = 204;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        if (_la === 30) {
          {
            this.state = 203;
            this.returnType();
          }
        }

        this.state = 206;
        this.block();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public structDeclare(): StructDeclareContext {
    let localContext = new StructDeclareContext(this.context, this.state);
    this.enterRule(localContext, 38, RustLiteParser.RULE_structDeclare);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 208;
        this.match(RustLiteParser.IDENTIFIER);
        this.state = 209;
        this.match(RustLiteParser.T__13);
        this.state = 210;
        this.structDeclareFieldList();
        this.state = 211;
        this.match(RustLiteParser.T__14);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public structDeclareFieldList(): StructDeclareFieldListContext {
    let localContext = new StructDeclareFieldListContext(
      this.context,
      this.state
    );
    this.enterRule(
      localContext,
      40,
      RustLiteParser.RULE_structDeclareFieldList
    );
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 213;
        this.structDeclareField();
        this.state = 218;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        while (_la === 26) {
          {
            {
              this.state = 214;
              this.match(RustLiteParser.T__25);
              this.state = 215;
              this.structDeclareField();
            }
          }
          this.state = 220;
          this.errorHandler.sync(this);
          _la = this.tokenStream.LA(1);
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
      this.exitRule();
    }
    return localContext;
  }
  public structDeclareField(): StructDeclareFieldContext {
    let localContext = new StructDeclareFieldContext(this.context, this.state);
    this.enterRule(localContext, 42, RustLiteParser.RULE_structDeclareField);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 221;
        this.match(RustLiteParser.IDENTIFIER);
        this.state = 222;
        this.match(RustLiteParser.T__28);
        this.state = 223;
        this.match(RustLiteParser.TYPE);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public structInit(): StructInitContext {
    let localContext = new StructInitContext(this.context, this.state);
    this.enterRule(localContext, 44, RustLiteParser.RULE_structInit);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 225;
        this.match(RustLiteParser.IDENTIFIER);
        this.state = 226;
        this.match(RustLiteParser.T__13);
        this.state = 227;
        this.structInitFieldList();
        this.state = 228;
        this.match(RustLiteParser.T__14);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public structInitFieldList(): StructInitFieldListContext {
    let localContext = new StructInitFieldListContext(this.context, this.state);
    this.enterRule(localContext, 46, RustLiteParser.RULE_structInitFieldList);
    let _la: number;
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 230;
        this.structInitField();
        this.state = 235;
        this.errorHandler.sync(this);
        _la = this.tokenStream.LA(1);
        while (_la === 26) {
          {
            {
              this.state = 231;
              this.match(RustLiteParser.T__25);
              this.state = 232;
              this.structInitField();
            }
          }
          this.state = 237;
          this.errorHandler.sync(this);
          _la = this.tokenStream.LA(1);
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
      this.exitRule();
    }
    return localContext;
  }
  public structInitField(): StructInitFieldContext {
    let localContext = new StructInitFieldContext(this.context, this.state);
    this.enterRule(localContext, 48, RustLiteParser.RULE_structInitField);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 238;
        this.match(RustLiteParser.IDENTIFIER);
        this.state = 239;
        this.match(RustLiteParser.T__28);
        this.state = 240;
        this.expr();
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }
  public structFieldAccess(): StructFieldAccessContext {
    let localContext = new StructFieldAccessContext(this.context, this.state);
    this.enterRule(localContext, 50, RustLiteParser.RULE_structFieldAccess);
    try {
      this.enterOuterAlt(localContext, 1);
      {
        this.state = 242;
        this.match(RustLiteParser.IDENTIFIER);
        this.state = 243;
        this.match(RustLiteParser.T__32);
        this.state = 244;
        this.match(RustLiteParser.IDENTIFIER);
      }
    } catch (re) {
      if (re instanceof antlr.RecognitionException) {
        this.errorHandler.reportError(this, re);
        this.errorHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
    4, 1, 39, 247, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4,
    2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2,
    11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7,
    16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2,
    22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 1, 0, 5, 0, 54, 8, 0,
    10, 0, 12, 0, 57, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 3, 1, 71, 8, 1, 1, 2, 1, 2, 1, 2, 3, 2, 76, 8, 2, 1, 2,
    1, 2, 1, 2, 5, 2, 81, 8, 2, 10, 2, 12, 2, 84, 9, 2, 1, 3, 1, 3, 1, 3, 1, 3,
    1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 94, 8, 3, 1, 3, 1, 3, 1, 3, 5, 3, 99, 8, 3,
    10, 3, 12, 3, 102, 9, 3, 1, 4, 1, 4, 3, 4, 106, 8, 4, 1, 5, 1, 5, 1, 5, 1,
    5, 1, 5, 1, 5, 1, 5, 3, 5, 115, 8, 5, 1, 6, 1, 6, 5, 6, 119, 8, 6, 10, 6,
    12, 6, 122, 9, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 3, 8, 131, 8, 8,
    1, 8, 1, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 5,
    9, 145, 8, 9, 10, 9, 12, 9, 148, 9, 9, 1, 9, 1, 9, 3, 9, 152, 8, 9, 1, 10,
    1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12,
    1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 171, 8, 12, 1, 13, 1, 13, 1, 13,
    1, 13, 1, 13, 1, 13, 1, 14, 1, 14, 1, 14, 1, 14, 1, 15, 1, 15, 1, 15, 5, 15,
    186, 8, 15, 10, 15, 12, 15, 189, 9, 15, 1, 16, 1, 16, 1, 16, 1, 17, 1, 17,
    1, 17, 1, 18, 1, 18, 1, 18, 1, 18, 3, 18, 201, 8, 18, 1, 18, 1, 18, 3, 18,
    205, 8, 18, 1, 18, 1, 18, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 20, 1, 20,
    1, 20, 5, 20, 217, 8, 20, 10, 20, 12, 20, 220, 9, 20, 1, 21, 1, 21, 1, 21,
    1, 21, 1, 22, 1, 22, 1, 22, 1, 22, 1, 22, 1, 23, 1, 23, 1, 23, 5, 23, 234,
    8, 23, 10, 23, 12, 23, 237, 9, 23, 1, 24, 1, 24, 1, 24, 1, 24, 1, 25, 1, 25,
    1, 25, 1, 25, 1, 25, 0, 2, 4, 6, 26, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20,
    22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 0, 3, 1, 0, 3,
    6, 1, 0, 10, 13, 1, 0, 7, 8, 250, 0, 55, 1, 0, 0, 0, 2, 70, 1, 0, 0, 0, 4,
    75, 1, 0, 0, 0, 6, 93, 1, 0, 0, 0, 8, 105, 1, 0, 0, 0, 10, 114, 1, 0, 0, 0,
    12, 116, 1, 0, 0, 0, 14, 125, 1, 0, 0, 0, 16, 128, 1, 0, 0, 0, 18, 136, 1,
    0, 0, 0, 20, 153, 1, 0, 0, 0, 22, 156, 1, 0, 0, 0, 24, 170, 1, 0, 0, 0, 26,
    172, 1, 0, 0, 0, 28, 178, 1, 0, 0, 0, 30, 182, 1, 0, 0, 0, 32, 190, 1, 0, 0,
    0, 34, 193, 1, 0, 0, 0, 36, 196, 1, 0, 0, 0, 38, 208, 1, 0, 0, 0, 40, 213,
    1, 0, 0, 0, 42, 221, 1, 0, 0, 0, 44, 225, 1, 0, 0, 0, 46, 230, 1, 0, 0, 0,
    48, 238, 1, 0, 0, 0, 50, 242, 1, 0, 0, 0, 52, 54, 3, 10, 5, 0, 53, 52, 1, 0,
    0, 0, 54, 57, 1, 0, 0, 0, 55, 53, 1, 0, 0, 0, 55, 56, 1, 0, 0, 0, 56, 58, 1,
    0, 0, 0, 57, 55, 1, 0, 0, 0, 58, 59, 5, 0, 0, 1, 59, 1, 1, 0, 0, 0, 60, 61,
    5, 1, 0, 0, 61, 62, 3, 2, 1, 0, 62, 63, 5, 2, 0, 0, 63, 71, 1, 0, 0, 0, 64,
    71, 5, 36, 0, 0, 65, 71, 5, 34, 0, 0, 66, 71, 5, 35, 0, 0, 67, 71, 3, 4, 2,
    0, 68, 71, 3, 6, 3, 0, 69, 71, 3, 8, 4, 0, 70, 60, 1, 0, 0, 0, 70, 64, 1, 0,
    0, 0, 70, 65, 1, 0, 0, 0, 70, 66, 1, 0, 0, 0, 70, 67, 1, 0, 0, 0, 70, 68, 1,
    0, 0, 0, 70, 69, 1, 0, 0, 0, 71, 3, 1, 0, 0, 0, 72, 73, 6, 2, -1, 0, 73, 76,
    5, 34, 0, 0, 74, 76, 5, 36, 0, 0, 75, 72, 1, 0, 0, 0, 75, 74, 1, 0, 0, 0,
    76, 82, 1, 0, 0, 0, 77, 78, 10, 3, 0, 0, 78, 79, 7, 0, 0, 0, 79, 81, 3, 4,
    2, 4, 80, 77, 1, 0, 0, 0, 81, 84, 1, 0, 0, 0, 82, 80, 1, 0, 0, 0, 82, 83, 1,
    0, 0, 0, 83, 5, 1, 0, 0, 0, 84, 82, 1, 0, 0, 0, 85, 86, 6, 3, -1, 0, 86, 87,
    5, 9, 0, 0, 87, 94, 3, 6, 3, 3, 88, 94, 5, 35, 0, 0, 89, 90, 3, 4, 2, 0, 90,
    91, 7, 1, 0, 0, 91, 92, 3, 4, 2, 0, 92, 94, 1, 0, 0, 0, 93, 85, 1, 0, 0, 0,
    93, 88, 1, 0, 0, 0, 93, 89, 1, 0, 0, 0, 94, 100, 1, 0, 0, 0, 95, 96, 10, 4,
    0, 0, 96, 97, 7, 2, 0, 0, 97, 99, 3, 6, 3, 5, 98, 95, 1, 0, 0, 0, 99, 102,
    1, 0, 0, 0, 100, 98, 1, 0, 0, 0, 100, 101, 1, 0, 0, 0, 101, 7, 1, 0, 0, 0,
    102, 100, 1, 0, 0, 0, 103, 106, 3, 44, 22, 0, 104, 106, 3, 38, 19, 0, 105,
    103, 1, 0, 0, 0, 105, 104, 1, 0, 0, 0, 106, 9, 1, 0, 0, 0, 107, 115, 3, 14,
    7, 0, 108, 115, 3, 16, 8, 0, 109, 115, 3, 18, 9, 0, 110, 115, 3, 20, 10, 0,
    111, 115, 3, 22, 11, 0, 112, 115, 3, 36, 18, 0, 113, 115, 3, 34, 17, 0, 114,
    107, 1, 0, 0, 0, 114, 108, 1, 0, 0, 0, 114, 109, 1, 0, 0, 0, 114, 110, 1, 0,
    0, 0, 114, 111, 1, 0, 0, 0, 114, 112, 1, 0, 0, 0, 114, 113, 1, 0, 0, 0, 115,
    11, 1, 0, 0, 0, 116, 120, 5, 14, 0, 0, 117, 119, 3, 10, 5, 0, 118, 117, 1,
    0, 0, 0, 119, 122, 1, 0, 0, 0, 120, 118, 1, 0, 0, 0, 120, 121, 1, 0, 0, 0,
    121, 123, 1, 0, 0, 0, 122, 120, 1, 0, 0, 0, 123, 124, 5, 15, 0, 0, 124, 13,
    1, 0, 0, 0, 125, 126, 3, 2, 1, 0, 126, 127, 5, 16, 0, 0, 127, 15, 1, 0, 0,
    0, 128, 130, 5, 17, 0, 0, 129, 131, 5, 18, 0, 0, 130, 129, 1, 0, 0, 0, 130,
    131, 1, 0, 0, 0, 131, 132, 1, 0, 0, 0, 132, 133, 5, 36, 0, 0, 133, 134, 5,
    19, 0, 0, 134, 135, 3, 14, 7, 0, 135, 17, 1, 0, 0, 0, 136, 137, 5, 20, 0, 0,
    137, 138, 3, 2, 1, 0, 138, 146, 3, 12, 6, 0, 139, 140, 5, 21, 0, 0, 140,
    141, 5, 20, 0, 0, 141, 142, 3, 2, 1, 0, 142, 143, 3, 12, 6, 0, 143, 145, 1,
    0, 0, 0, 144, 139, 1, 0, 0, 0, 145, 148, 1, 0, 0, 0, 146, 144, 1, 0, 0, 0,
    146, 147, 1, 0, 0, 0, 147, 151, 1, 0, 0, 0, 148, 146, 1, 0, 0, 0, 149, 150,
    5, 21, 0, 0, 150, 152, 3, 12, 6, 0, 151, 149, 1, 0, 0, 0, 151, 152, 1, 0, 0,
    0, 152, 19, 1, 0, 0, 0, 153, 154, 5, 22, 0, 0, 154, 155, 3, 12, 6, 0, 155,
    21, 1, 0, 0, 0, 156, 157, 5, 23, 0, 0, 157, 158, 3, 2, 1, 0, 158, 159, 3,
    12, 6, 0, 159, 23, 1, 0, 0, 0, 160, 171, 5, 36, 0, 0, 161, 162, 5, 34, 0, 0,
    162, 163, 5, 24, 0, 0, 163, 171, 5, 34, 0, 0, 164, 165, 5, 25, 0, 0, 165,
    166, 5, 1, 0, 0, 166, 167, 5, 34, 0, 0, 167, 168, 5, 26, 0, 0, 168, 169, 5,
    34, 0, 0, 169, 171, 5, 2, 0, 0, 170, 160, 1, 0, 0, 0, 170, 161, 1, 0, 0, 0,
    170, 164, 1, 0, 0, 0, 171, 25, 1, 0, 0, 0, 172, 173, 5, 27, 0, 0, 173, 174,
    5, 36, 0, 0, 174, 175, 5, 28, 0, 0, 175, 176, 3, 24, 12, 0, 176, 177, 3, 12,
    6, 0, 177, 27, 1, 0, 0, 0, 178, 179, 5, 36, 0, 0, 179, 180, 5, 29, 0, 0,
    180, 181, 5, 37, 0, 0, 181, 29, 1, 0, 0, 0, 182, 187, 3, 28, 14, 0, 183,
    184, 5, 26, 0, 0, 184, 186, 3, 28, 14, 0, 185, 183, 1, 0, 0, 0, 186, 189, 1,
    0, 0, 0, 187, 185, 1, 0, 0, 0, 187, 188, 1, 0, 0, 0, 188, 31, 1, 0, 0, 0,
    189, 187, 1, 0, 0, 0, 190, 191, 5, 30, 0, 0, 191, 192, 5, 37, 0, 0, 192, 33,
    1, 0, 0, 0, 193, 194, 5, 31, 0, 0, 194, 195, 3, 14, 7, 0, 195, 35, 1, 0, 0,
    0, 196, 197, 5, 32, 0, 0, 197, 198, 5, 36, 0, 0, 198, 200, 5, 1, 0, 0, 199,
    201, 3, 30, 15, 0, 200, 199, 1, 0, 0, 0, 200, 201, 1, 0, 0, 0, 201, 202, 1,
    0, 0, 0, 202, 204, 5, 2, 0, 0, 203, 205, 3, 32, 16, 0, 204, 203, 1, 0, 0, 0,
    204, 205, 1, 0, 0, 0, 205, 206, 1, 0, 0, 0, 206, 207, 3, 12, 6, 0, 207, 37,
    1, 0, 0, 0, 208, 209, 5, 36, 0, 0, 209, 210, 5, 14, 0, 0, 210, 211, 3, 40,
    20, 0, 211, 212, 5, 15, 0, 0, 212, 39, 1, 0, 0, 0, 213, 218, 3, 42, 21, 0,
    214, 215, 5, 26, 0, 0, 215, 217, 3, 42, 21, 0, 216, 214, 1, 0, 0, 0, 217,
    220, 1, 0, 0, 0, 218, 216, 1, 0, 0, 0, 218, 219, 1, 0, 0, 0, 219, 41, 1, 0,
    0, 0, 220, 218, 1, 0, 0, 0, 221, 222, 5, 36, 0, 0, 222, 223, 5, 29, 0, 0,
    223, 224, 5, 37, 0, 0, 224, 43, 1, 0, 0, 0, 225, 226, 5, 36, 0, 0, 226, 227,
    5, 14, 0, 0, 227, 228, 3, 46, 23, 0, 228, 229, 5, 15, 0, 0, 229, 45, 1, 0,
    0, 0, 230, 235, 3, 48, 24, 0, 231, 232, 5, 26, 0, 0, 232, 234, 3, 48, 24, 0,
    233, 231, 1, 0, 0, 0, 234, 237, 1, 0, 0, 0, 235, 233, 1, 0, 0, 0, 235, 236,
    1, 0, 0, 0, 236, 47, 1, 0, 0, 0, 237, 235, 1, 0, 0, 0, 238, 239, 5, 36, 0,
    0, 239, 240, 5, 29, 0, 0, 240, 241, 3, 2, 1, 0, 241, 49, 1, 0, 0, 0, 242,
    243, 5, 36, 0, 0, 243, 244, 5, 33, 0, 0, 244, 245, 5, 36, 0, 0, 245, 51, 1,
    0, 0, 0, 18, 55, 70, 75, 82, 93, 100, 105, 114, 120, 130, 146, 151, 170,
    187, 200, 204, 218, 235,
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
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
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
  public override get ruleIndex(): number {
    return RustLiteParser.RULE_expr;
  }
  public override enterRule(listener: RustLiteListener): void {
    if (listener.enterExpr) {
      listener.enterExpr(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitExpr) {
      listener.exitExpr(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
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
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public structInit(): StructInitContext | null {
    return this.getRuleContext(0, StructInitContext);
  }
  public structDeclare(): StructDeclareContext | null {
    return this.getRuleContext(0, StructDeclareContext);
  }
  public override get ruleIndex(): number {
    return RustLiteParser.RULE_structExpr;
  }
  public override enterRule(listener: RustLiteListener): void {
    if (listener.enterStructExpr) {
      listener.enterStructExpr(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitStructExpr) {
      listener.exitStructExpr(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
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

export class ReturnTypeContext extends antlr.ParserRuleContext {
  public constructor(
    parent: antlr.ParserRuleContext | null,
    invokingState: number
  ) {
    super(parent, invokingState);
  }
  public TYPE(): antlr.TerminalNode {
    return this.getToken(RustLiteParser.TYPE, 0)!;
  }
  public override get ruleIndex(): number {
    return RustLiteParser.RULE_returnType;
  }
  public override enterRule(listener: RustLiteListener): void {
    if (listener.enterReturnType) {
      listener.enterReturnType(this);
    }
  }
  public override exitRule(listener: RustLiteListener): void {
    if (listener.exitReturnType) {
      listener.exitReturnType(this);
    }
  }
  public override accept<Result>(
    visitor: RustLiteVisitor<Result>
  ): Result | null {
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
