"use strict";
// Generated from src/RustLite.g4 by ANTLR 4.13.1
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintlnArgsContext = exports.PrintlnMacroContext = exports.VectorExprContext = exports.VectorAssignmentContext = exports.VectorIndexAccessContext = exports.VectorLenContext = exports.VectorPopContext = exports.VectorPushContext = exports.VectorInitContext = exports.VectorTypeContext = exports.FnCallContext = exports.ArgListContext = exports.FnDeclareStmtContext = exports.ReturnStmtContext = exports.ReturnTypeContext = exports.ReturnTypesContext = exports.ParamListContext = exports.ParamContext = exports.LoopControlStmtContext = exports.LoopControlContext = exports.WhileStmtContext = exports.CondStmtContext = exports.DeclareStmtContext = exports.ExprStmtContext = exports.BlockContentContext = exports.BlockContext = exports.StmtContext = exports.GlobalElementContext = exports.LogicExprContext = exports.ArithExprContext = exports.ExprContext = exports.TypeContext = exports.ProgContext = exports.RustLiteParser = void 0;
const antlr = __importStar(require("antlr4ng"));
class RustLiteParser extends antlr.Parser {
    get grammarFileName() { return "RustLite.g4"; }
    get literalNames() { return RustLiteParser.literalNames; }
    get symbolicNames() { return RustLiteParser.symbolicNames; }
    get ruleNames() { return RustLiteParser.ruleNames; }
    get serializedATN() { return RustLiteParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new antlr.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, RustLiteParser._ATN, RustLiteParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    prog() {
        let localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 0, RustLiteParser.RULE_prog);
        let _la;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    type_() {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    expr() {
        let localContext = new ExprContext(this.context, this.state);
        this.enterRule(localContext, 4, RustLiteParser.RULE_expr);
        try {
            this.state = 97;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context)) {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    arithExpr(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ArithExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 6;
        this.enterRecursionRule(localContext, 6, RustLiteParser.RULE_arithExpr, _p);
        let _la;
        try {
            let alternative;
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
                this.context.stop = this.tokenStream.LT(-1);
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
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context)) {
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
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 112) !== 0))) {
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
                                        if (!(_la === 3 || _la === 7)) {
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
                                        if (!(_la === 5 || _la === 6)) {
                                            localContext._op = this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 120;
                                        this.match(RustLiteParser.INT);
                                        if ((localContext._right != null ? this.tokenStream.getTextFromRange(localContext._right.start, localContext._right.stop) : '') === 0)
                                            this.notifyErrorListeners("Division by zero");
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    logicExpr(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new LogicExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 8;
        this.enterRecursionRule(localContext, 8, RustLiteParser.RULE_logicExpr, _p);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 142;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context)) {
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
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 16128) !== 0))) {
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
                this.context.stop = this.tokenStream.LT(-1);
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
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context)) {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    globalElement() {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    stmt() {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    block() {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    blockContent() {
        let localContext = new BlockContentContext(this.context, this.state);
        this.enterRule(localContext, 16, RustLiteParser.RULE_blockContent);
        let _la;
        try {
            let alternative;
            this.state = 205;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 17, this.context)) {
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
                                    switch (this.interpreter.adaptivePredict(this.tokenStream, 14, this.context)) {
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
                        this.notifyErrorListeners("Missing semicolon after expression");
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    exprStmt() {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    declareStmt() {
        let localContext = new DeclareStmtContext(this.context, this.state);
        this.enterRule(localContext, 20, RustLiteParser.RULE_declareStmt);
        let _la;
        try {
            this.state = 254;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context)) {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    condStmt() {
        let localContext = new CondStmtContext(this.context, this.state);
        this.enterRule(localContext, 22, RustLiteParser.RULE_condStmt);
        let _la;
        try {
            let alternative;
            this.state = 281;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 29, this.context)) {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    whileStmt() {
        let localContext = new WhileStmtContext(this.context, this.state);
        this.enterRule(localContext, 24, RustLiteParser.RULE_whileStmt);
        try {
            this.state = 292;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context)) {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    loopControl() {
        let localContext = new LoopControlContext(this.context, this.state);
        this.enterRule(localContext, 26, RustLiteParser.RULE_loopControl);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 294;
                _la = this.tokenStream.LA(1);
                if (!(_la === 27 || _la === 28)) {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    loopControlStmt() {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    param() {
        let localContext = new ParamContext(this.context, this.state);
        this.enterRule(localContext, 30, RustLiteParser.RULE_param);
        try {
            this.state = 304;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context)) {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    paramList() {
        let localContext = new ParamListContext(this.context, this.state);
        this.enterRule(localContext, 32, RustLiteParser.RULE_paramList);
        let _la;
        try {
            let alternative;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    returnTypes() {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    returnType() {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    returnStmt() {
        let localContext = new ReturnStmtContext(this.context, this.state);
        this.enterRule(localContext, 38, RustLiteParser.RULE_returnStmt);
        let _la;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    fnDeclareStmt() {
        let localContext = new FnDeclareStmtContext(this.context, this.state);
        this.enterRule(localContext, 40, RustLiteParser.RULE_fnDeclareStmt);
        let _la;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    argList() {
        let localContext = new ArgListContext(this.context, this.state);
        this.enterRule(localContext, 42, RustLiteParser.RULE_argList);
        let _la;
        try {
            let alternative;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    fnCall() {
        let localContext = new FnCallContext(this.context, this.state);
        this.enterRule(localContext, 44, RustLiteParser.RULE_fnCall);
        let _la;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    vectorType() {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    vectorInit() {
        let localContext = new VectorInitContext(this.context, this.state);
        this.enterRule(localContext, 48, RustLiteParser.RULE_vectorInit);
        let _la;
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
                                    if (!(_la === 43 || _la === 44)) {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    vectorPush() {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    vectorPop() {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    vectorLen() {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    vectorIndexAccess() {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    vectorAssignment() {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    vectorExpr() {
        let localContext = new VectorExprContext(this.context, this.state);
        this.enterRule(localContext, 60, RustLiteParser.RULE_vectorExpr);
        try {
            this.state = 431;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 48, this.context)) {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    printlnMacro() {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    printlnArgs() {
        let localContext = new PrintlnArgsContext(this.context, this.state);
        this.enterRule(localContext, 64, RustLiteParser.RULE_printlnArgs);
        let _la;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    sempred(localContext, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 3:
                return this.arithExpr_sempred(localContext, predIndex);
            case 4:
                return this.logicExpr_sempred(localContext, predIndex);
        }
        return true;
    }
    arithExpr_sempred(localContext, predIndex) {
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
    logicExpr_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 3:
                return this.precpred(this.context, 3);
            case 4:
                return this.precpred(this.context, 2);
        }
        return true;
    }
    static get _ATN() {
        if (!RustLiteParser.__ATN) {
            RustLiteParser.__ATN = new antlr.ATNDeserializer().deserialize(RustLiteParser._serializedATN);
        }
        return RustLiteParser.__ATN;
    }
    get vocabulary() {
        return RustLiteParser.vocabulary;
    }
}
exports.RustLiteParser = RustLiteParser;
RustLiteParser.T__0 = 1;
RustLiteParser.T__1 = 2;
RustLiteParser.T__2 = 3;
RustLiteParser.T__3 = 4;
RustLiteParser.T__4 = 5;
RustLiteParser.T__5 = 6;
RustLiteParser.T__6 = 7;
RustLiteParser.T__7 = 8;
RustLiteParser.T__8 = 9;
RustLiteParser.T__9 = 10;
RustLiteParser.T__10 = 11;
RustLiteParser.T__11 = 12;
RustLiteParser.T__12 = 13;
RustLiteParser.T__13 = 14;
RustLiteParser.T__14 = 15;
RustLiteParser.T__15 = 16;
RustLiteParser.T__16 = 17;
RustLiteParser.T__17 = 18;
RustLiteParser.T__18 = 19;
RustLiteParser.T__19 = 20;
RustLiteParser.T__20 = 21;
RustLiteParser.T__21 = 22;
RustLiteParser.T__22 = 23;
RustLiteParser.T__23 = 24;
RustLiteParser.T__24 = 25;
RustLiteParser.T__25 = 26;
RustLiteParser.T__26 = 27;
RustLiteParser.T__27 = 28;
RustLiteParser.T__28 = 29;
RustLiteParser.T__29 = 30;
RustLiteParser.T__30 = 31;
RustLiteParser.T__31 = 32;
RustLiteParser.T__32 = 33;
RustLiteParser.T__33 = 34;
RustLiteParser.T__34 = 35;
RustLiteParser.T__35 = 36;
RustLiteParser.T__36 = 37;
RustLiteParser.T__37 = 38;
RustLiteParser.T__38 = 39;
RustLiteParser.T__39 = 40;
RustLiteParser.T__40 = 41;
RustLiteParser.T__41 = 42;
RustLiteParser.INT = 43;
RustLiteParser.BOOL = 44;
RustLiteParser.IDENTIFIER = 45;
RustLiteParser.U8_TYPE = 46;
RustLiteParser.U16_TYPE = 47;
RustLiteParser.U32_TYPE = 48;
RustLiteParser.U64_TYPE = 49;
RustLiteParser.I8_TYPE = 50;
RustLiteParser.I16_TYPE = 51;
RustLiteParser.I32_TYPE = 52;
RustLiteParser.I64_TYPE = 53;
RustLiteParser.BOOL_TYPE = 54;
RustLiteParser.STRING = 55;
RustLiteParser.METHOD_ACCESSOR = 56;
RustLiteParser.VECTOR_MODULE_NAME = 57;
RustLiteParser.WS = 58;
RustLiteParser.COMMENT = 59;
RustLiteParser.RULE_prog = 0;
RustLiteParser.RULE_type = 1;
RustLiteParser.RULE_expr = 2;
RustLiteParser.RULE_arithExpr = 3;
RustLiteParser.RULE_logicExpr = 4;
RustLiteParser.RULE_globalElement = 5;
RustLiteParser.RULE_stmt = 6;
RustLiteParser.RULE_block = 7;
RustLiteParser.RULE_blockContent = 8;
RustLiteParser.RULE_exprStmt = 9;
RustLiteParser.RULE_declareStmt = 10;
RustLiteParser.RULE_condStmt = 11;
RustLiteParser.RULE_whileStmt = 12;
RustLiteParser.RULE_loopControl = 13;
RustLiteParser.RULE_loopControlStmt = 14;
RustLiteParser.RULE_param = 15;
RustLiteParser.RULE_paramList = 16;
RustLiteParser.RULE_returnTypes = 17;
RustLiteParser.RULE_returnType = 18;
RustLiteParser.RULE_returnStmt = 19;
RustLiteParser.RULE_fnDeclareStmt = 20;
RustLiteParser.RULE_argList = 21;
RustLiteParser.RULE_fnCall = 22;
RustLiteParser.RULE_vectorType = 23;
RustLiteParser.RULE_vectorInit = 24;
RustLiteParser.RULE_vectorPush = 25;
RustLiteParser.RULE_vectorPop = 26;
RustLiteParser.RULE_vectorLen = 27;
RustLiteParser.RULE_vectorIndexAccess = 28;
RustLiteParser.RULE_vectorAssignment = 29;
RustLiteParser.RULE_vectorExpr = 30;
RustLiteParser.RULE_printlnMacro = 31;
RustLiteParser.RULE_printlnArgs = 32;
RustLiteParser.literalNames = [
    null, "'('", "')'", "'-'", "'*'", "'/'", "'%'", "'+'", "'>'", "'<'",
    "'=='", "'!='", "'<='", "'>='", "'!'", "'&&'", "'||'", "'{'", "'}'",
    "';'", "'let'", "'mut'", "':'", "'='", "'if'", "'else'", "'while'",
    "'break'", "'continue'", "','", "'()'", "'->'", "'return'", "'fn'",
    "'new'", "'vec'", "'['", "']'", "'.'", "'push'", "'pop'", "'len'",
    "'println'", null, null, null, "'u8'", "'u16'", "'u32'", "'u64'",
    "'i8'", "'i16'", "'i32'", "'i64'", "'bool'", null, "'::'", "'Vec'"
];
RustLiteParser.symbolicNames = [
    null, null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, "INT",
    "BOOL", "IDENTIFIER", "U8_TYPE", "U16_TYPE", "U32_TYPE", "U64_TYPE",
    "I8_TYPE", "I16_TYPE", "I32_TYPE", "I64_TYPE", "BOOL_TYPE", "STRING",
    "METHOD_ACCESSOR", "VECTOR_MODULE_NAME", "WS", "COMMENT"
];
RustLiteParser.ruleNames = [
    "prog", "type", "expr", "arithExpr", "logicExpr", "globalElement",
    "stmt", "block", "blockContent", "exprStmt", "declareStmt", "condStmt",
    "whileStmt", "loopControl", "loopControlStmt", "param", "paramList",
    "returnTypes", "returnType", "returnStmt", "fnDeclareStmt", "argList",
    "fnCall", "vectorType", "vectorInit", "vectorPush", "vectorPop",
    "vectorLen", "vectorIndexAccess", "vectorAssignment", "vectorExpr",
    "printlnMacro", "printlnArgs",
];
RustLiteParser._serializedATN = [
    4, 1, 59, 448, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7,
    6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13,
    2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20,
    7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26,
    2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 1, 0,
    5, 0, 68, 8, 0, 10, 0, 12, 0, 71, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 3, 1, 85, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
    2, 3, 2, 98, 8, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 111,
    8, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 5, 3, 123, 8, 3, 10, 3, 12,
    3, 126, 9, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1,
    4, 1, 4, 3, 4, 143, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 5, 4, 151, 8, 4, 10, 4, 12, 4,
    154, 9, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6, 166, 8, 6, 1, 7,
    1, 7, 1, 7, 1, 7, 1, 8, 5, 8, 173, 8, 8, 10, 8, 12, 8, 176, 9, 8, 1, 8, 3, 8, 179, 8, 8, 1,
    8, 5, 8, 182, 8, 8, 10, 8, 12, 8, 185, 9, 8, 1, 8, 5, 8, 188, 8, 8, 10, 8, 12, 8, 191, 9,
    8, 1, 8, 1, 8, 1, 8, 5, 8, 196, 8, 8, 10, 8, 12, 8, 199, 9, 8, 1, 8, 3, 8, 202, 8, 8, 1, 8,
    1, 8, 3, 8, 206, 8, 8, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 3, 10, 213, 8, 10, 1, 10, 1, 10, 1,
    10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 223, 8, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1,
    10, 1, 10, 1, 10, 3, 10, 232, 8, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 239, 8, 10,
    1, 10, 1, 10, 1, 10, 3, 10, 244, 8, 10, 1, 10, 1, 10, 3, 10, 248, 8, 10, 1, 10, 1, 10, 3,
    10, 252, 8, 10, 1, 10, 3, 10, 255, 8, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 5, 11, 265, 8, 11, 10, 11, 12, 11, 268, 9, 11, 1, 11, 1, 11, 3, 11, 272, 8, 11,
    1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 280, 8, 11, 3, 11, 282, 8, 11, 1, 12, 1,
    12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 293, 8, 12, 1, 13, 1, 13, 1,
    14, 1, 14, 1, 14, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 3, 15, 305, 8, 15, 1, 16, 1, 16, 1,
    16, 5, 16, 310, 8, 16, 10, 16, 12, 16, 313, 9, 16, 1, 16, 3, 16, 316, 8, 16, 1, 17, 1,
    17, 3, 17, 320, 8, 17, 1, 18, 1, 18, 1, 18, 1, 19, 1, 19, 3, 19, 327, 8, 19, 1, 19, 1, 19,
    1, 20, 1, 20, 1, 20, 1, 20, 3, 20, 335, 8, 20, 1, 20, 1, 20, 3, 20, 339, 8, 20, 1, 20, 3,
    20, 342, 8, 20, 1, 20, 1, 20, 1, 21, 1, 21, 1, 21, 5, 21, 349, 8, 21, 10, 21, 12, 21, 352,
    9, 21, 1, 21, 3, 21, 355, 8, 21, 1, 22, 1, 22, 1, 22, 3, 22, 360, 8, 22, 1, 22, 1, 22, 1,
    23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 3, 24, 375, 8,
    24, 1, 24, 1, 24, 1, 24, 1, 24, 5, 24, 381, 8, 24, 10, 24, 12, 24, 384, 9, 24, 1, 24, 3,
    24, 387, 8, 24, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 3, 25, 396, 8, 25, 1, 26,
    1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 3, 26, 404, 8, 26, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27,
    1, 27, 3, 27, 412, 8, 27, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 29, 1, 29, 1, 29, 1, 29,
    1, 29, 1, 29, 1, 29, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 3, 30, 432, 8, 30, 1, 31,
    1, 31, 1, 31, 1, 31, 1, 31, 1, 31, 1, 32, 1, 32, 1, 32, 5, 32, 443, 8, 32, 10, 32, 12, 32,
    446, 9, 32, 1, 32, 0, 2, 6, 8, 33, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28,
    30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 0, 6, 1, 0, 4,
    6, 2, 0, 3, 3, 7, 7, 1, 0, 5, 6, 1, 0, 8, 13, 1, 0, 27, 28, 1, 0, 43, 44, 500, 0, 69, 1, 0,
    0, 0, 2, 84, 1, 0, 0, 0, 4, 97, 1, 0, 0, 0, 6, 110, 1, 0, 0, 0, 8, 142, 1, 0, 0, 0, 10, 155,
    1, 0, 0, 0, 12, 165, 1, 0, 0, 0, 14, 167, 1, 0, 0, 0, 16, 205, 1, 0, 0, 0, 18, 207, 1, 0,
    0, 0, 20, 254, 1, 0, 0, 0, 22, 281, 1, 0, 0, 0, 24, 292, 1, 0, 0, 0, 26, 294, 1, 0, 0, 0,
    28, 296, 1, 0, 0, 0, 30, 304, 1, 0, 0, 0, 32, 306, 1, 0, 0, 0, 34, 319, 1, 0, 0, 0, 36, 321,
    1, 0, 0, 0, 38, 324, 1, 0, 0, 0, 40, 330, 1, 0, 0, 0, 42, 345, 1, 0, 0, 0, 44, 356, 1, 0,
    0, 0, 46, 363, 1, 0, 0, 0, 48, 386, 1, 0, 0, 0, 50, 395, 1, 0, 0, 0, 52, 397, 1, 0, 0, 0,
    54, 405, 1, 0, 0, 0, 56, 413, 1, 0, 0, 0, 58, 418, 1, 0, 0, 0, 60, 431, 1, 0, 0, 0, 62, 433,
    1, 0, 0, 0, 64, 439, 1, 0, 0, 0, 66, 68, 3, 10, 5, 0, 67, 66, 1, 0, 0, 0, 68, 71, 1, 0, 0,
    0, 69, 67, 1, 0, 0, 0, 69, 70, 1, 0, 0, 0, 70, 72, 1, 0, 0, 0, 71, 69, 1, 0, 0, 0, 72, 73,
    5, 0, 0, 1, 73, 1, 1, 0, 0, 0, 74, 85, 5, 46, 0, 0, 75, 85, 5, 47, 0, 0, 76, 85, 5, 48, 0,
    0, 77, 85, 5, 49, 0, 0, 78, 85, 5, 50, 0, 0, 79, 85, 5, 51, 0, 0, 80, 85, 5, 52, 0, 0, 81,
    85, 5, 53, 0, 0, 82, 85, 5, 54, 0, 0, 83, 85, 3, 46, 23, 0, 84, 74, 1, 0, 0, 0, 84, 75, 1,
    0, 0, 0, 84, 76, 1, 0, 0, 0, 84, 77, 1, 0, 0, 0, 84, 78, 1, 0, 0, 0, 84, 79, 1, 0, 0, 0, 84,
    80, 1, 0, 0, 0, 84, 81, 1, 0, 0, 0, 84, 82, 1, 0, 0, 0, 84, 83, 1, 0, 0, 0, 85, 3, 1, 0, 0,
    0, 86, 87, 5, 1, 0, 0, 87, 88, 3, 4, 2, 0, 88, 89, 5, 2, 0, 0, 89, 98, 1, 0, 0, 0, 90, 98,
    5, 45, 0, 0, 91, 98, 5, 43, 0, 0, 92, 98, 5, 44, 0, 0, 93, 98, 3, 6, 3, 0, 94, 98, 3, 8, 4,
    0, 95, 98, 3, 44, 22, 0, 96, 98, 3, 60, 30, 0, 97, 86, 1, 0, 0, 0, 97, 90, 1, 0, 0, 0, 97,
    91, 1, 0, 0, 0, 97, 92, 1, 0, 0, 0, 97, 93, 1, 0, 0, 0, 97, 94, 1, 0, 0, 0, 97, 95, 1, 0, 0,
    0, 97, 96, 1, 0, 0, 0, 98, 5, 1, 0, 0, 0, 99, 100, 6, 3, -1, 0, 100, 111, 5, 43, 0, 0, 101,
    111, 5, 45, 0, 0, 102, 103, 5, 1, 0, 0, 103, 104, 3, 6, 3, 0, 104, 105, 5, 2, 0, 0, 105,
    111, 1, 0, 0, 0, 106, 107, 5, 3, 0, 0, 107, 111, 3, 6, 3, 5, 108, 109, 5, 44, 0, 0, 109,
    111, 6, 3, -1, 0, 110, 99, 1, 0, 0, 0, 110, 101, 1, 0, 0, 0, 110, 102, 1, 0, 0, 0, 110,
    106, 1, 0, 0, 0, 110, 108, 1, 0, 0, 0, 111, 124, 1, 0, 0, 0, 112, 113, 10, 4, 0, 0, 113,
    114, 7, 0, 0, 0, 114, 123, 3, 6, 3, 5, 115, 116, 10, 3, 0, 0, 116, 117, 7, 1, 0, 0, 117,
    123, 3, 6, 3, 4, 118, 119, 10, 1, 0, 0, 119, 120, 7, 2, 0, 0, 120, 121, 5, 43, 0, 0, 121,
    123, 6, 3, -1, 0, 122, 112, 1, 0, 0, 0, 122, 115, 1, 0, 0, 0, 122, 118, 1, 0, 0, 0, 123,
    126, 1, 0, 0, 0, 124, 122, 1, 0, 0, 0, 124, 125, 1, 0, 0, 0, 125, 7, 1, 0, 0, 0, 126, 124,
    1, 0, 0, 0, 127, 128, 6, 4, -1, 0, 128, 143, 5, 44, 0, 0, 129, 143, 5, 45, 0, 0, 130, 131,
    5, 1, 0, 0, 131, 132, 3, 8, 4, 0, 132, 133, 5, 2, 0, 0, 133, 143, 1, 0, 0, 0, 134, 135,
    3, 6, 3, 0, 135, 136, 7, 3, 0, 0, 136, 137, 3, 6, 3, 0, 137, 143, 1, 0, 0, 0, 138, 139,
    5, 14, 0, 0, 139, 143, 3, 8, 4, 4, 140, 141, 5, 43, 0, 0, 141, 143, 6, 4, -1, 0, 142, 127,
    1, 0, 0, 0, 142, 129, 1, 0, 0, 0, 142, 130, 1, 0, 0, 0, 142, 134, 1, 0, 0, 0, 142, 138,
    1, 0, 0, 0, 142, 140, 1, 0, 0, 0, 143, 152, 1, 0, 0, 0, 144, 145, 10, 3, 0, 0, 145, 146,
    5, 15, 0, 0, 146, 151, 3, 8, 4, 4, 147, 148, 10, 2, 0, 0, 148, 149, 5, 16, 0, 0, 149, 151,
    3, 8, 4, 3, 150, 144, 1, 0, 0, 0, 150, 147, 1, 0, 0, 0, 151, 154, 1, 0, 0, 0, 152, 150,
    1, 0, 0, 0, 152, 153, 1, 0, 0, 0, 153, 9, 1, 0, 0, 0, 154, 152, 1, 0, 0, 0, 155, 156, 3,
    40, 20, 0, 156, 11, 1, 0, 0, 0, 157, 166, 3, 18, 9, 0, 158, 166, 3, 20, 10, 0, 159, 166,
    3, 22, 11, 0, 160, 166, 3, 24, 12, 0, 161, 166, 3, 28, 14, 0, 162, 166, 3, 40, 20, 0,
    163, 166, 3, 38, 19, 0, 164, 166, 3, 14, 7, 0, 165, 157, 1, 0, 0, 0, 165, 158, 1, 0, 0,
    0, 165, 159, 1, 0, 0, 0, 165, 160, 1, 0, 0, 0, 165, 161, 1, 0, 0, 0, 165, 162, 1, 0, 0,
    0, 165, 163, 1, 0, 0, 0, 165, 164, 1, 0, 0, 0, 166, 13, 1, 0, 0, 0, 167, 168, 5, 17, 0,
    0, 168, 169, 3, 16, 8, 0, 169, 170, 5, 18, 0, 0, 170, 15, 1, 0, 0, 0, 171, 173, 3, 12,
    6, 0, 172, 171, 1, 0, 0, 0, 173, 176, 1, 0, 0, 0, 174, 172, 1, 0, 0, 0, 174, 175, 1, 0,
    0, 0, 175, 178, 1, 0, 0, 0, 176, 174, 1, 0, 0, 0, 177, 179, 3, 4, 2, 0, 178, 177, 1, 0,
    0, 0, 178, 179, 1, 0, 0, 0, 179, 206, 1, 0, 0, 0, 180, 182, 3, 12, 6, 0, 181, 180, 1, 0,
    0, 0, 182, 185, 1, 0, 0, 0, 183, 181, 1, 0, 0, 0, 183, 184, 1, 0, 0, 0, 184, 206, 1, 0,
    0, 0, 185, 183, 1, 0, 0, 0, 186, 188, 3, 12, 6, 0, 187, 186, 1, 0, 0, 0, 188, 191, 1, 0,
    0, 0, 189, 187, 1, 0, 0, 0, 189, 190, 1, 0, 0, 0, 190, 192, 1, 0, 0, 0, 191, 189, 1, 0,
    0, 0, 192, 197, 3, 4, 2, 0, 193, 196, 3, 12, 6, 0, 194, 196, 3, 4, 2, 0, 195, 193, 1, 0,
    0, 0, 195, 194, 1, 0, 0, 0, 196, 199, 1, 0, 0, 0, 197, 195, 1, 0, 0, 0, 197, 198, 1, 0,
    0, 0, 198, 201, 1, 0, 0, 0, 199, 197, 1, 0, 0, 0, 200, 202, 3, 4, 2, 0, 201, 200, 1, 0,
    0, 0, 201, 202, 1, 0, 0, 0, 202, 203, 1, 0, 0, 0, 203, 204, 6, 8, -1, 0, 204, 206, 1, 0,
    0, 0, 205, 174, 1, 0, 0, 0, 205, 183, 1, 0, 0, 0, 205, 189, 1, 0, 0, 0, 206, 17, 1, 0, 0,
    0, 207, 208, 3, 4, 2, 0, 208, 209, 5, 19, 0, 0, 209, 19, 1, 0, 0, 0, 210, 212, 5, 20, 0,
    0, 211, 213, 5, 21, 0, 0, 212, 211, 1, 0, 0, 0, 212, 213, 1, 0, 0, 0, 213, 214, 1, 0, 0,
    0, 214, 215, 5, 45, 0, 0, 215, 216, 5, 22, 0, 0, 216, 217, 3, 2, 1, 0, 217, 218, 5, 23,
    0, 0, 218, 219, 3, 18, 9, 0, 219, 255, 1, 0, 0, 0, 220, 222, 5, 20, 0, 0, 221, 223, 5,
    21, 0, 0, 222, 221, 1, 0, 0, 0, 222, 223, 1, 0, 0, 0, 223, 224, 1, 0, 0, 0, 224, 225, 5,
    45, 0, 0, 225, 226, 5, 22, 0, 0, 226, 227, 3, 2, 1, 0, 227, 228, 5, 19, 0, 0, 228, 255,
    1, 0, 0, 0, 229, 231, 5, 20, 0, 0, 230, 232, 5, 21, 0, 0, 231, 230, 1, 0, 0, 0, 231, 232,
    1, 0, 0, 0, 232, 233, 1, 0, 0, 0, 233, 234, 5, 45, 0, 0, 234, 235, 5, 23, 0, 0, 235, 255,
    3, 18, 9, 0, 236, 238, 5, 20, 0, 0, 237, 239, 5, 21, 0, 0, 238, 237, 1, 0, 0, 0, 238, 239,
    1, 0, 0, 0, 239, 240, 1, 0, 0, 0, 240, 241, 5, 45, 0, 0, 241, 243, 6, 10, -1, 0, 242, 244,
    5, 19, 0, 0, 243, 242, 1, 0, 0, 0, 243, 244, 1, 0, 0, 0, 244, 255, 1, 0, 0, 0, 245, 247,
    5, 20, 0, 0, 246, 248, 5, 21, 0, 0, 247, 246, 1, 0, 0, 0, 247, 248, 1, 0, 0, 0, 248, 251,
    1, 0, 0, 0, 249, 250, 5, 22, 0, 0, 250, 252, 3, 2, 1, 0, 251, 249, 1, 0, 0, 0, 251, 252,
    1, 0, 0, 0, 252, 253, 1, 0, 0, 0, 253, 255, 6, 10, -1, 0, 254, 210, 1, 0, 0, 0, 254, 220,
    1, 0, 0, 0, 254, 229, 1, 0, 0, 0, 254, 236, 1, 0, 0, 0, 254, 245, 1, 0, 0, 0, 255, 21, 1,
    0, 0, 0, 256, 257, 5, 24, 0, 0, 257, 258, 3, 8, 4, 0, 258, 266, 3, 14, 7, 0, 259, 260,
    5, 25, 0, 0, 260, 261, 5, 24, 0, 0, 261, 262, 3, 8, 4, 0, 262, 263, 3, 14, 7, 0, 263, 265,
    1, 0, 0, 0, 264, 259, 1, 0, 0, 0, 265, 268, 1, 0, 0, 0, 266, 264, 1, 0, 0, 0, 266, 267,
    1, 0, 0, 0, 267, 271, 1, 0, 0, 0, 268, 266, 1, 0, 0, 0, 269, 270, 5, 25, 0, 0, 270, 272,
    3, 14, 7, 0, 271, 269, 1, 0, 0, 0, 271, 272, 1, 0, 0, 0, 272, 282, 1, 0, 0, 0, 273, 274,
    5, 24, 0, 0, 274, 275, 3, 4, 2, 0, 275, 276, 6, 11, -1, 0, 276, 279, 3, 14, 7, 0, 277,
    278, 5, 25, 0, 0, 278, 280, 3, 14, 7, 0, 279, 277, 1, 0, 0, 0, 279, 280, 1, 0, 0, 0, 280,
    282, 1, 0, 0, 0, 281, 256, 1, 0, 0, 0, 281, 273, 1, 0, 0, 0, 282, 23, 1, 0, 0, 0, 283, 284,
    5, 26, 0, 0, 284, 285, 3, 8, 4, 0, 285, 286, 3, 14, 7, 0, 286, 293, 1, 0, 0, 0, 287, 288,
    5, 26, 0, 0, 288, 289, 3, 4, 2, 0, 289, 290, 6, 12, -1, 0, 290, 291, 3, 14, 7, 0, 291,
    293, 1, 0, 0, 0, 292, 283, 1, 0, 0, 0, 292, 287, 1, 0, 0, 0, 293, 25, 1, 0, 0, 0, 294, 295,
    7, 4, 0, 0, 295, 27, 1, 0, 0, 0, 296, 297, 3, 26, 13, 0, 297, 298, 5, 19, 0, 0, 298, 29,
    1, 0, 0, 0, 299, 300, 5, 45, 0, 0, 300, 301, 5, 22, 0, 0, 301, 305, 3, 2, 1, 0, 302, 303,
    5, 45, 0, 0, 303, 305, 6, 15, -1, 0, 304, 299, 1, 0, 0, 0, 304, 302, 1, 0, 0, 0, 305, 31,
    1, 0, 0, 0, 306, 311, 3, 30, 15, 0, 307, 308, 5, 29, 0, 0, 308, 310, 3, 30, 15, 0, 309,
    307, 1, 0, 0, 0, 310, 313, 1, 0, 0, 0, 311, 309, 1, 0, 0, 0, 311, 312, 1, 0, 0, 0, 312,
    315, 1, 0, 0, 0, 313, 311, 1, 0, 0, 0, 314, 316, 5, 29, 0, 0, 315, 314, 1, 0, 0, 0, 315,
    316, 1, 0, 0, 0, 316, 33, 1, 0, 0, 0, 317, 320, 3, 2, 1, 0, 318, 320, 5, 30, 0, 0, 319,
    317, 1, 0, 0, 0, 319, 318, 1, 0, 0, 0, 320, 35, 1, 0, 0, 0, 321, 322, 5, 31, 0, 0, 322,
    323, 3, 34, 17, 0, 323, 37, 1, 0, 0, 0, 324, 326, 5, 32, 0, 0, 325, 327, 3, 4, 2, 0, 326,
    325, 1, 0, 0, 0, 326, 327, 1, 0, 0, 0, 327, 328, 1, 0, 0, 0, 328, 329, 5, 19, 0, 0, 329,
    39, 1, 0, 0, 0, 330, 331, 5, 33, 0, 0, 331, 338, 5, 45, 0, 0, 332, 334, 5, 1, 0, 0, 333,
    335, 3, 32, 16, 0, 334, 333, 1, 0, 0, 0, 334, 335, 1, 0, 0, 0, 335, 336, 1, 0, 0, 0, 336,
    339, 5, 2, 0, 0, 337, 339, 5, 30, 0, 0, 338, 332, 1, 0, 0, 0, 338, 337, 1, 0, 0, 0, 339,
    341, 1, 0, 0, 0, 340, 342, 3, 36, 18, 0, 341, 340, 1, 0, 0, 0, 341, 342, 1, 0, 0, 0, 342,
    343, 1, 0, 0, 0, 343, 344, 3, 14, 7, 0, 344, 41, 1, 0, 0, 0, 345, 350, 3, 4, 2, 0, 346,
    347, 5, 29, 0, 0, 347, 349, 3, 4, 2, 0, 348, 346, 1, 0, 0, 0, 349, 352, 1, 0, 0, 0, 350,
    348, 1, 0, 0, 0, 350, 351, 1, 0, 0, 0, 351, 354, 1, 0, 0, 0, 352, 350, 1, 0, 0, 0, 353,
    355, 5, 29, 0, 0, 354, 353, 1, 0, 0, 0, 354, 355, 1, 0, 0, 0, 355, 43, 1, 0, 0, 0, 356,
    357, 5, 45, 0, 0, 357, 359, 5, 1, 0, 0, 358, 360, 3, 42, 21, 0, 359, 358, 1, 0, 0, 0, 359,
    360, 1, 0, 0, 0, 360, 361, 1, 0, 0, 0, 361, 362, 5, 2, 0, 0, 362, 45, 1, 0, 0, 0, 363, 364,
    5, 57, 0, 0, 364, 365, 5, 9, 0, 0, 365, 366, 3, 2, 1, 0, 366, 367, 5, 8, 0, 0, 367, 47,
    1, 0, 0, 0, 368, 369, 5, 57, 0, 0, 369, 370, 5, 56, 0, 0, 370, 374, 5, 34, 0, 0, 371, 375,
    5, 30, 0, 0, 372, 373, 5, 1, 0, 0, 373, 375, 5, 2, 0, 0, 374, 371, 1, 0, 0, 0, 374, 372,
    1, 0, 0, 0, 375, 387, 1, 0, 0, 0, 376, 377, 5, 35, 0, 0, 377, 378, 5, 14, 0, 0, 378, 382,
    5, 36, 0, 0, 379, 381, 7, 5, 0, 0, 380, 379, 1, 0, 0, 0, 381, 384, 1, 0, 0, 0, 382, 380,
    1, 0, 0, 0, 382, 383, 1, 0, 0, 0, 383, 385, 1, 0, 0, 0, 384, 382, 1, 0, 0, 0, 385, 387,
    5, 37, 0, 0, 386, 368, 1, 0, 0, 0, 386, 376, 1, 0, 0, 0, 387, 49, 1, 0, 0, 0, 388, 389,
    5, 45, 0, 0, 389, 390, 5, 38, 0, 0, 390, 391, 5, 39, 0, 0, 391, 392, 5, 1, 0, 0, 392, 396,
    5, 43, 0, 0, 393, 394, 5, 44, 0, 0, 394, 396, 5, 2, 0, 0, 395, 388, 1, 0, 0, 0, 395, 393,
    1, 0, 0, 0, 396, 51, 1, 0, 0, 0, 397, 398, 5, 45, 0, 0, 398, 399, 5, 38, 0, 0, 399, 403,
    5, 40, 0, 0, 400, 404, 5, 30, 0, 0, 401, 402, 5, 1, 0, 0, 402, 404, 5, 2, 0, 0, 403, 400,
    1, 0, 0, 0, 403, 401, 1, 0, 0, 0, 404, 53, 1, 0, 0, 0, 405, 406, 5, 45, 0, 0, 406, 407,
    5, 38, 0, 0, 407, 411, 5, 41, 0, 0, 408, 412, 5, 30, 0, 0, 409, 410, 5, 1, 0, 0, 410, 412,
    5, 2, 0, 0, 411, 408, 1, 0, 0, 0, 411, 409, 1, 0, 0, 0, 412, 55, 1, 0, 0, 0, 413, 414, 5,
    45, 0, 0, 414, 415, 5, 36, 0, 0, 415, 416, 3, 4, 2, 0, 416, 417, 5, 37, 0, 0, 417, 57,
    1, 0, 0, 0, 418, 419, 5, 45, 0, 0, 419, 420, 5, 36, 0, 0, 420, 421, 3, 4, 2, 0, 421, 422,
    5, 37, 0, 0, 422, 423, 5, 23, 0, 0, 423, 424, 3, 4, 2, 0, 424, 59, 1, 0, 0, 0, 425, 432,
    3, 48, 24, 0, 426, 432, 3, 50, 25, 0, 427, 432, 3, 52, 26, 0, 428, 432, 3, 54, 27, 0,
    429, 432, 3, 56, 28, 0, 430, 432, 3, 58, 29, 0, 431, 425, 1, 0, 0, 0, 431, 426, 1, 0,
    0, 0, 431, 427, 1, 0, 0, 0, 431, 428, 1, 0, 0, 0, 431, 429, 1, 0, 0, 0, 431, 430, 1, 0,
    0, 0, 432, 61, 1, 0, 0, 0, 433, 434, 5, 42, 0, 0, 434, 435, 5, 14, 0, 0, 435, 436, 5, 1,
    0, 0, 436, 437, 3, 64, 32, 0, 437, 438, 5, 2, 0, 0, 438, 63, 1, 0, 0, 0, 439, 444, 5, 55,
    0, 0, 440, 441, 5, 29, 0, 0, 441, 443, 3, 4, 2, 0, 442, 440, 1, 0, 0, 0, 443, 446, 1, 0,
    0, 0, 444, 442, 1, 0, 0, 0, 444, 445, 1, 0, 0, 0, 445, 65, 1, 0, 0, 0, 446, 444, 1, 0, 0,
    0, 50, 69, 84, 97, 110, 122, 124, 142, 150, 152, 165, 174, 178, 183, 189, 195, 197,
    201, 205, 212, 222, 231, 238, 243, 247, 251, 254, 266, 271, 279, 281, 292, 304,
    311, 315, 319, 326, 334, 338, 341, 350, 354, 359, 374, 382, 386, 395, 403, 411,
    431, 444
];
RustLiteParser.vocabulary = new antlr.Vocabulary(RustLiteParser.literalNames, RustLiteParser.symbolicNames, []);
RustLiteParser.decisionsToDFA = RustLiteParser._ATN.decisionToState.map((ds, index) => new antlr.DFA(ds, index));
class ProgContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EOF() {
        return this.getToken(RustLiteParser.EOF, 0);
    }
    globalElement(i) {
        if (i === undefined) {
            return this.getRuleContexts(GlobalElementContext);
        }
        return this.getRuleContext(i, GlobalElementContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_prog;
    }
    enterRule(listener) {
        if (listener.enterProg) {
            listener.enterProg(this);
        }
    }
    exitRule(listener) {
        if (listener.exitProg) {
            listener.exitProg(this);
        }
    }
    accept(visitor) {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ProgContext = ProgContext;
class TypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    U8_TYPE() {
        return this.getToken(RustLiteParser.U8_TYPE, 0);
    }
    U16_TYPE() {
        return this.getToken(RustLiteParser.U16_TYPE, 0);
    }
    U32_TYPE() {
        return this.getToken(RustLiteParser.U32_TYPE, 0);
    }
    U64_TYPE() {
        return this.getToken(RustLiteParser.U64_TYPE, 0);
    }
    I8_TYPE() {
        return this.getToken(RustLiteParser.I8_TYPE, 0);
    }
    I16_TYPE() {
        return this.getToken(RustLiteParser.I16_TYPE, 0);
    }
    I32_TYPE() {
        return this.getToken(RustLiteParser.I32_TYPE, 0);
    }
    I64_TYPE() {
        return this.getToken(RustLiteParser.I64_TYPE, 0);
    }
    BOOL_TYPE() {
        return this.getToken(RustLiteParser.BOOL_TYPE, 0);
    }
    vectorType() {
        return this.getRuleContext(0, VectorTypeContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_type;
    }
    enterRule(listener) {
        if (listener.enterType) {
            listener.enterType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitType) {
            listener.exitType(this);
        }
    }
    accept(visitor) {
        if (visitor.visitType) {
            return visitor.visitType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeContext = TypeContext;
class ExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    INT() {
        return this.getToken(RustLiteParser.INT, 0);
    }
    BOOL() {
        return this.getToken(RustLiteParser.BOOL, 0);
    }
    arithExpr() {
        return this.getRuleContext(0, ArithExprContext);
    }
    logicExpr() {
        return this.getRuleContext(0, LogicExprContext);
    }
    fnCall() {
        return this.getRuleContext(0, FnCallContext);
    }
    vectorExpr() {
        return this.getRuleContext(0, VectorExprContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_expr;
    }
    enterRule(listener) {
        if (listener.enterExpr) {
            listener.enterExpr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExpr) {
            listener.exitExpr(this);
        }
    }
    accept(visitor) {
        if (visitor.visitExpr) {
            return visitor.visitExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExprContext = ExprContext;
class ArithExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    INT() {
        return this.getToken(RustLiteParser.INT, 0);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    arithExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ArithExprContext);
        }
        return this.getRuleContext(i, ArithExprContext);
    }
    BOOL() {
        return this.getToken(RustLiteParser.BOOL, 0);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_arithExpr;
    }
    enterRule(listener) {
        if (listener.enterArithExpr) {
            listener.enterArithExpr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArithExpr) {
            listener.exitArithExpr(this);
        }
    }
    accept(visitor) {
        if (visitor.visitArithExpr) {
            return visitor.visitArithExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArithExprContext = ArithExprContext;
class LogicExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    BOOL() {
        return this.getToken(RustLiteParser.BOOL, 0);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    logicExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(LogicExprContext);
        }
        return this.getRuleContext(i, LogicExprContext);
    }
    arithExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ArithExprContext);
        }
        return this.getRuleContext(i, ArithExprContext);
    }
    INT() {
        return this.getToken(RustLiteParser.INT, 0);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_logicExpr;
    }
    enterRule(listener) {
        if (listener.enterLogicExpr) {
            listener.enterLogicExpr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLogicExpr) {
            listener.exitLogicExpr(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLogicExpr) {
            return visitor.visitLogicExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LogicExprContext = LogicExprContext;
class GlobalElementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    fnDeclareStmt() {
        return this.getRuleContext(0, FnDeclareStmtContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_globalElement;
    }
    enterRule(listener) {
        if (listener.enterGlobalElement) {
            listener.enterGlobalElement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitGlobalElement) {
            listener.exitGlobalElement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitGlobalElement) {
            return visitor.visitGlobalElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GlobalElementContext = GlobalElementContext;
class StmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    exprStmt() {
        return this.getRuleContext(0, ExprStmtContext);
    }
    declareStmt() {
        return this.getRuleContext(0, DeclareStmtContext);
    }
    condStmt() {
        return this.getRuleContext(0, CondStmtContext);
    }
    whileStmt() {
        return this.getRuleContext(0, WhileStmtContext);
    }
    loopControlStmt() {
        return this.getRuleContext(0, LoopControlStmtContext);
    }
    fnDeclareStmt() {
        return this.getRuleContext(0, FnDeclareStmtContext);
    }
    returnStmt() {
        return this.getRuleContext(0, ReturnStmtContext);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_stmt;
    }
    enterRule(listener) {
        if (listener.enterStmt) {
            listener.enterStmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStmt) {
            listener.exitStmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitStmt) {
            return visitor.visitStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StmtContext = StmtContext;
class BlockContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    blockContent() {
        return this.getRuleContext(0, BlockContentContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_block;
    }
    enterRule(listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    }
    accept(visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BlockContext = BlockContext;
class BlockContentContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    stmt(i) {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }
        return this.getRuleContext(i, StmtContext);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_blockContent;
    }
    enterRule(listener) {
        if (listener.enterBlockContent) {
            listener.enterBlockContent(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBlockContent) {
            listener.exitBlockContent(this);
        }
    }
    accept(visitor) {
        if (visitor.visitBlockContent) {
            return visitor.visitBlockContent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BlockContentContext = BlockContentContext;
class ExprStmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_exprStmt;
    }
    enterRule(listener) {
        if (listener.enterExprStmt) {
            listener.enterExprStmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExprStmt) {
            listener.exitExprStmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitExprStmt) {
            return visitor.visitExprStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExprStmtContext = ExprStmtContext;
class DeclareStmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    exprStmt() {
        return this.getRuleContext(0, ExprStmtContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_declareStmt;
    }
    enterRule(listener) {
        if (listener.enterDeclareStmt) {
            listener.enterDeclareStmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDeclareStmt) {
            listener.exitDeclareStmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDeclareStmt) {
            return visitor.visitDeclareStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DeclareStmtContext = DeclareStmtContext;
class CondStmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    logicExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(LogicExprContext);
        }
        return this.getRuleContext(i, LogicExprContext);
    }
    block(i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockContext);
        }
        return this.getRuleContext(i, BlockContext);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_condStmt;
    }
    enterRule(listener) {
        if (listener.enterCondStmt) {
            listener.enterCondStmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCondStmt) {
            listener.exitCondStmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCondStmt) {
            return visitor.visitCondStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CondStmtContext = CondStmtContext;
class WhileStmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    logicExpr() {
        return this.getRuleContext(0, LogicExprContext);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_whileStmt;
    }
    enterRule(listener) {
        if (listener.enterWhileStmt) {
            listener.enterWhileStmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWhileStmt) {
            listener.exitWhileStmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWhileStmt) {
            return visitor.visitWhileStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.WhileStmtContext = WhileStmtContext;
class LoopControlContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_loopControl;
    }
    enterRule(listener) {
        if (listener.enterLoopControl) {
            listener.enterLoopControl(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLoopControl) {
            listener.exitLoopControl(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLoopControl) {
            return visitor.visitLoopControl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LoopControlContext = LoopControlContext;
class LoopControlStmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    loopControl() {
        return this.getRuleContext(0, LoopControlContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_loopControlStmt;
    }
    enterRule(listener) {
        if (listener.enterLoopControlStmt) {
            listener.enterLoopControlStmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLoopControlStmt) {
            listener.exitLoopControlStmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLoopControlStmt) {
            return visitor.visitLoopControlStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LoopControlStmtContext = LoopControlStmtContext;
class ParamContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_param;
    }
    enterRule(listener) {
        if (listener.enterParam) {
            listener.enterParam(this);
        }
    }
    exitRule(listener) {
        if (listener.exitParam) {
            listener.exitParam(this);
        }
    }
    accept(visitor) {
        if (visitor.visitParam) {
            return visitor.visitParam(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParamContext = ParamContext;
class ParamListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    param(i) {
        if (i === undefined) {
            return this.getRuleContexts(ParamContext);
        }
        return this.getRuleContext(i, ParamContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_paramList;
    }
    enterRule(listener) {
        if (listener.enterParamList) {
            listener.enterParamList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitParamList) {
            listener.exitParamList(this);
        }
    }
    accept(visitor) {
        if (visitor.visitParamList) {
            return visitor.visitParamList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParamListContext = ParamListContext;
class ReturnTypesContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_returnTypes;
    }
    enterRule(listener) {
        if (listener.enterReturnTypes) {
            listener.enterReturnTypes(this);
        }
    }
    exitRule(listener) {
        if (listener.exitReturnTypes) {
            listener.exitReturnTypes(this);
        }
    }
    accept(visitor) {
        if (visitor.visitReturnTypes) {
            return visitor.visitReturnTypes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReturnTypesContext = ReturnTypesContext;
class ReturnTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    returnTypes() {
        return this.getRuleContext(0, ReturnTypesContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_returnType;
    }
    enterRule(listener) {
        if (listener.enterReturnType) {
            listener.enterReturnType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitReturnType) {
            listener.exitReturnType(this);
        }
    }
    accept(visitor) {
        if (visitor.visitReturnType) {
            return visitor.visitReturnType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReturnTypeContext = ReturnTypeContext;
class ReturnStmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_returnStmt;
    }
    enterRule(listener) {
        if (listener.enterReturnStmt) {
            listener.enterReturnStmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitReturnStmt) {
            listener.exitReturnStmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitReturnStmt) {
            return visitor.visitReturnStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReturnStmtContext = ReturnStmtContext;
class FnDeclareStmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    returnType() {
        return this.getRuleContext(0, ReturnTypeContext);
    }
    paramList() {
        return this.getRuleContext(0, ParamListContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_fnDeclareStmt;
    }
    enterRule(listener) {
        if (listener.enterFnDeclareStmt) {
            listener.enterFnDeclareStmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFnDeclareStmt) {
            listener.exitFnDeclareStmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFnDeclareStmt) {
            return visitor.visitFnDeclareStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FnDeclareStmtContext = FnDeclareStmtContext;
class ArgListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_argList;
    }
    enterRule(listener) {
        if (listener.enterArgList) {
            listener.enterArgList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArgList) {
            listener.exitArgList(this);
        }
    }
    accept(visitor) {
        if (visitor.visitArgList) {
            return visitor.visitArgList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArgListContext = ArgListContext;
class FnCallContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    argList() {
        return this.getRuleContext(0, ArgListContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_fnCall;
    }
    enterRule(listener) {
        if (listener.enterFnCall) {
            listener.enterFnCall(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFnCall) {
            listener.exitFnCall(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFnCall) {
            return visitor.visitFnCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FnCallContext = FnCallContext;
class VectorTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    VECTOR_MODULE_NAME() {
        return this.getToken(RustLiteParser.VECTOR_MODULE_NAME, 0);
    }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_vectorType;
    }
    enterRule(listener) {
        if (listener.enterVectorType) {
            listener.enterVectorType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVectorType) {
            listener.exitVectorType(this);
        }
    }
    accept(visitor) {
        if (visitor.visitVectorType) {
            return visitor.visitVectorType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VectorTypeContext = VectorTypeContext;
class VectorInitContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    VECTOR_MODULE_NAME() {
        return this.getToken(RustLiteParser.VECTOR_MODULE_NAME, 0);
    }
    METHOD_ACCESSOR() {
        return this.getToken(RustLiteParser.METHOD_ACCESSOR, 0);
    }
    INT(i) {
        if (i === undefined) {
            return this.getTokens(RustLiteParser.INT);
        }
        else {
            return this.getToken(RustLiteParser.INT, i);
        }
    }
    BOOL(i) {
        if (i === undefined) {
            return this.getTokens(RustLiteParser.BOOL);
        }
        else {
            return this.getToken(RustLiteParser.BOOL, i);
        }
    }
    get ruleIndex() {
        return RustLiteParser.RULE_vectorInit;
    }
    enterRule(listener) {
        if (listener.enterVectorInit) {
            listener.enterVectorInit(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVectorInit) {
            listener.exitVectorInit(this);
        }
    }
    accept(visitor) {
        if (visitor.visitVectorInit) {
            return visitor.visitVectorInit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VectorInitContext = VectorInitContext;
class VectorPushContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    INT() {
        return this.getToken(RustLiteParser.INT, 0);
    }
    BOOL() {
        return this.getToken(RustLiteParser.BOOL, 0);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_vectorPush;
    }
    enterRule(listener) {
        if (listener.enterVectorPush) {
            listener.enterVectorPush(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVectorPush) {
            listener.exitVectorPush(this);
        }
    }
    accept(visitor) {
        if (visitor.visitVectorPush) {
            return visitor.visitVectorPush(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VectorPushContext = VectorPushContext;
class VectorPopContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_vectorPop;
    }
    enterRule(listener) {
        if (listener.enterVectorPop) {
            listener.enterVectorPop(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVectorPop) {
            listener.exitVectorPop(this);
        }
    }
    accept(visitor) {
        if (visitor.visitVectorPop) {
            return visitor.visitVectorPop(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VectorPopContext = VectorPopContext;
class VectorLenContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_vectorLen;
    }
    enterRule(listener) {
        if (listener.enterVectorLen) {
            listener.enterVectorLen(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVectorLen) {
            listener.exitVectorLen(this);
        }
    }
    accept(visitor) {
        if (visitor.visitVectorLen) {
            return visitor.visitVectorLen(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VectorLenContext = VectorLenContext;
class VectorIndexAccessContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_vectorIndexAccess;
    }
    enterRule(listener) {
        if (listener.enterVectorIndexAccess) {
            listener.enterVectorIndexAccess(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVectorIndexAccess) {
            listener.exitVectorIndexAccess(this);
        }
    }
    accept(visitor) {
        if (visitor.visitVectorIndexAccess) {
            return visitor.visitVectorIndexAccess(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VectorIndexAccessContext = VectorIndexAccessContext;
class VectorAssignmentContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_vectorAssignment;
    }
    enterRule(listener) {
        if (listener.enterVectorAssignment) {
            listener.enterVectorAssignment(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVectorAssignment) {
            listener.exitVectorAssignment(this);
        }
    }
    accept(visitor) {
        if (visitor.visitVectorAssignment) {
            return visitor.visitVectorAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VectorAssignmentContext = VectorAssignmentContext;
class VectorExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    vectorInit() {
        return this.getRuleContext(0, VectorInitContext);
    }
    vectorPush() {
        return this.getRuleContext(0, VectorPushContext);
    }
    vectorPop() {
        return this.getRuleContext(0, VectorPopContext);
    }
    vectorLen() {
        return this.getRuleContext(0, VectorLenContext);
    }
    vectorIndexAccess() {
        return this.getRuleContext(0, VectorIndexAccessContext);
    }
    vectorAssignment() {
        return this.getRuleContext(0, VectorAssignmentContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_vectorExpr;
    }
    enterRule(listener) {
        if (listener.enterVectorExpr) {
            listener.enterVectorExpr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVectorExpr) {
            listener.exitVectorExpr(this);
        }
    }
    accept(visitor) {
        if (visitor.visitVectorExpr) {
            return visitor.visitVectorExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VectorExprContext = VectorExprContext;
class PrintlnMacroContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    printlnArgs() {
        return this.getRuleContext(0, PrintlnArgsContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_printlnMacro;
    }
    enterRule(listener) {
        if (listener.enterPrintlnMacro) {
            listener.enterPrintlnMacro(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPrintlnMacro) {
            listener.exitPrintlnMacro(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPrintlnMacro) {
            return visitor.visitPrintlnMacro(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PrintlnMacroContext = PrintlnMacroContext;
class PrintlnArgsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    STRING() {
        return this.getToken(RustLiteParser.STRING, 0);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_printlnArgs;
    }
    enterRule(listener) {
        if (listener.enterPrintlnArgs) {
            listener.enterPrintlnArgs(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPrintlnArgs) {
            listener.exitPrintlnArgs(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPrintlnArgs) {
            return visitor.visitPrintlnArgs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PrintlnArgsContext = PrintlnArgsContext;
