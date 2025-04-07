import {
  AbstractParseTreeVisitor,
  CharStream,
  CommonTokenStream,
} from "antlr4ng";
import {
  ArithExprContext,
  BlockContext,
  CondStmtContext,
  DeclareStmtContext,
  ExprContext,
  ExprStmtContext,
  FnDeclareStmtContext,
  ForStmtContext,
  IterableContext,
  LogicExprContext,
  LoopStmtContext,
  ParamContext,
  ParamListContext,
  ProgContext,
  ReturnStmtContext,
  ReturnTypeContext,
  RustLiteParser,
  StmtContext,
  StructDeclareContext,
  StructDeclareFieldContext,
  StructDeclareFieldListContext,
  StructExprContext,
  StructFieldAccessContext,
  StructInitContext,
  StructInitFieldContext,
  StructInitFieldListContext,
  WhileStmtContext,
} from "./parser/src/RustLiteParser";
import {
  SUPPORTED_TYPES,
  instruction,
  instruction_type,
} from "./RustLiteTypes";

import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { RustLiteLexer } from "./parser/src/RustLiteLexer";
import { RustLiteVisitor } from "./parser/src/RustLiteVisitor";
import { error } from "console";
import { stat } from "fs";

class RustLiteEvaluatorVisitor
  extends AbstractParseTreeVisitor<SUPPORTED_TYPES>
  implements RustLiteVisitor<SUPPORTED_TYPES>
{
  //TODO: Implement Visit Prog
  visitProg(ctx: ProgContext): SUPPORTED_TYPES {
    console.log(`Visiting Program, text parsed: ${ctx.getText()}`);
    let result: SUPPORTED_TYPES;
    let statement = ctx.stmt();
    if (statement) {
      for (let i = 0; i < statement.length; i++) {
        try {
          if (statement && statement[i]) {
            console.log(`Statement: ${statement[i]}`);
            result = this.visit(statement[i]);
          }
        } catch (error) {
          throw `Error while visiting statement ${statement}, with error: ${error}`;
        }
      }
      return result;
    }
  }

  visitExpr(ctx: ExprContext): SUPPORTED_TYPES {
    console.log("Visiting Expr");
    if (ctx._inner) {
      return this.visitExpr(ctx._inner);
    }
    if (ctx.BOOL()) {
      console.log("Visiting Expr: BOOL");
      return ctx.BOOL().getText() === "true";
    }
    if (ctx.INT()) {
      console.log("Visiting Expr: INT");
      return parseInt(ctx.INT().getText());
    }
    if (ctx.IDENTIFIER()) {
      console.log("Visiting Expr: IDENTIFIER");
      return 0;
    }
    if (ctx.arithExpr()) {
      return this.visit(ctx.arithExpr());
    }
    if (ctx.logicExpr()) {
      return this.visit(ctx.logicExpr());
    }
  }

  visitArithExpr(ctx: ArithExprContext): number {
    console.log("Visiting ArithExpr");
    if (ctx.INT()) {
      // Is integer
      return parseInt(ctx.INT().getText());
    }

    if (ctx.IDENTIFIER()) {
      // Is variable
      const variableName = ctx.IDENTIFIER().getText();
      return 0; //TODO: Implement retrieving variable value
    }

    if (ctx.structFieldAccess()) {
      // Accessing struct
      const structFieldAccess = ctx.structFieldAccess();
      const result = this.visitStructFieldAccess(structFieldAccess);

      if (typeof result !== "number") {
        throw new Error("Struct field is not a number");
      }
      return result;
    }

    if (ctx._inner) {
      return this.visitArithExpr(ctx._inner);
    }

    if (ctx._op && ctx._op.text === "-" && !ctx._left) {
      // Unary minus
      const right = this.visitArithExpr(ctx._right);
      return -right;
    }

    if (ctx._left && ctx._right && ctx._op) {
      // Binary operation
      const left = this.visitArithExpr(ctx._left);
      const right = this.visitArithExpr(ctx._right);

      switch (ctx._op.text) {
        case "+":
          return left + right;
        case "-":
          return left - right;
        case "*":
          return left * right;
        case "/":
          if (right === 0) {
            throw new Error("Division by zero");
          }
          return Math.trunc(left / right); // Integer division
        // TODO: Implement other operators like % and ^
        default:
          throw new Error(`Unknown operator: ${ctx._op.text}`);
      }
    }

    throw new Error(`Invalid expression: ${ctx.getText()}`);
  }

  visitLogicExpr(ctx: LogicExprContext): boolean {
    console.log("Visiting LogicExpr");
    if (ctx.BOOL()) {
      return ctx.BOOL().getText() === "true";
    }

    if (ctx.IDENTIFIER()) {
      // Is variable
      const variableName = ctx.IDENTIFIER().getText();
      if (typeof variableName !== "boolean") {
        throw new Error("Variable is not a boolean");
      }
      return false; //TODO: Implement retrieving variable value
    }

    if (ctx.structFieldAccess()) {
      // Accessing struct
      const structFieldAccess = ctx.structFieldAccess();
      const result = this.visitStructFieldAccess(structFieldAccess);

      if (typeof result !== "boolean") {
        throw new Error("Struct field is not a boolean");
      }
      return result;
    }

    if (ctx._inner) {
      return this.visitLogicExpr(ctx._inner);
    }

    if (ctx._arithLeft && ctx._arithRight && ctx._op) {
      // Comparison operation
      const left = this.visitArithExpr(ctx._arithLeft);
      const right = this.visitArithExpr(ctx._arithRight);

      switch (ctx._op.text) {
        case "==":
          return left === right;
        case "!=":
          return left !== right;
        case "<":
          return left < right;
        case "<=":
          return left <= right;
        case ">":
          return left > right;
        case ">=":
          return left >= right;
        default:
          throw new Error(`Unknown operator: ${ctx._op.text}`);
      }
    }

    if (ctx._op && ctx._op.text === "!" && !ctx._left) {
      // Unary negation
      const right = this.visitLogicExpr(ctx._right);
      return !right;
    }

    if (ctx._left && ctx._right && ctx._op) {
      // Binary operation
      const left = this.visitLogicExpr(ctx._left);
      const right = this.visitLogicExpr(ctx._right);

      switch (ctx._op.text) {
        case "&&":
          return left && right;
        case "||":
          return left || right;
        default:
          throw new Error(`Unknown operator: ${ctx._op.text}`);
      }
    }

    throw new Error(`Invalid expression: ${ctx.getText()}`);
  }

  visitStructExpr(ctx: StructExprContext): SUPPORTED_TYPES {
    console.log("Visiting StructExpr");
    return 0;
  }

  visitStmt(ctx: StmtContext): SUPPORTED_TYPES {
    const numChildren = ctx.getChildCount();
    console.log(`Statement has ${numChildren} Children`);
    if (numChildren === 0) {
      return 0;
    }

    return this.visitChildren(ctx);
  }

  visitBlock(ctx: BlockContext): SUPPORTED_TYPES {
    console.log("Visiting Block");
    const statements = ctx.stmt();
    let result: SUPPORTED_TYPES;

    for (let i = 0; i < statements.length; i++) {
      result = this.visit(statements[i]);
    }

    if (ctx.expr()) {
      return this.visit(ctx.expr());
    }

    return result;
  }

  visitExprStmt(ctx: ExprStmtContext): SUPPORTED_TYPES {
    console.log("Visiting ExprStmt");
    return this.visit(ctx.expr());
  }

  visitLoopStmt(ctx: LoopStmtContext): SUPPORTED_TYPES {
    console.log("Visiting LoopStmt");
    return 0;
  }

  visitDeclareStmt(ctx: DeclareStmtContext): SUPPORTED_TYPES {
    console.log("Visiting DeclareStmt");
    return 0;
  }

  visitCondStmt(ctx: CondStmtContext): SUPPORTED_TYPES {
    console.log("Visiting CondStmt");
    return 0;
  }

  visitWhileStmt(ctx: WhileStmtContext): SUPPORTED_TYPES {
    console.log("Visiting WhileStmt");
    return 0;
  }

  visitIterable(ctx: IterableContext): SUPPORTED_TYPES {
    console.log("Visiting Iterable");
    return 0;
  }

  visitForStmt(ctx: ForStmtContext): SUPPORTED_TYPES {
    console.log("Visiting ForStmt");
    return 0;
  }

  visitParam(ctx: ParamContext): SUPPORTED_TYPES {
    console.log("Visiting Param");
    return 0;
  }

  visitParamList(ctx: ParamListContext): SUPPORTED_TYPES {
    console.log("Visiting ParamList");
    return 0;
  }

  visitReturnType(ctx: ReturnTypeContext): SUPPORTED_TYPES {
    console.log("Visiting ReturnType");
    return 0;
  }

  visitReturnStmt(ctx: ReturnStmtContext): SUPPORTED_TYPES {
    console.log("Visiting ReturnStmt");
    return 0;
  }

  visitFnDeclareStmt(ctx: FnDeclareStmtContext): SUPPORTED_TYPES {
    console.log("Visiting FnDeclareStmt");
    return 0;
  }

  visitStructDeclare(ctx: StructDeclareContext): SUPPORTED_TYPES {
    console.log("Visiting StructDeclare");
    return 0;
  }

  visitStructDeclareField(ctx: StructDeclareFieldContext): SUPPORTED_TYPES {
    console.log("Visiting StructDeclareField");
    return 0;
  }

  visitStructDeclareFieldList(
    ctx: StructDeclareFieldListContext
  ): SUPPORTED_TYPES {
    console.log("Visiting StructDeclareFieldList");
    return 0;
  }

  visitStructInit(ctx: StructInitContext): SUPPORTED_TYPES {
    console.log("Visiting StructInit");
    return 0;
  }

  visitStructInitFieldList(ctx: StructInitFieldListContext): SUPPORTED_TYPES {
    console.log("Visiting StructInitFieldList");
    return 0;
  }

  visitStructInitField(ctx: StructInitFieldContext): SUPPORTED_TYPES {
    console.log("Visiting StructInitField");
    return 0;
  }

  visitStructFieldAccess(ctx: StructFieldAccessContext): SUPPORTED_TYPES {
    console.log("Visiting StructFieldAccess");
    return 0;
  }
  protected defaultResult(): SUPPORTED_TYPES {
    return 0;
  }

  // Override the aggregate result method
  protected aggregateResult(
    aggregate: SUPPORTED_TYPES,
    nextResult: SUPPORTED_TYPES
  ): SUPPORTED_TYPES {
    return nextResult;
  }
}

export class RustLiteEvaluator extends BasicEvaluator {
  private executionCount: number;
  private visitor: RustLiteEvaluatorVisitor;

  constructor(conductor: IRunnerPlugin) {
    super(conductor);
    this.executionCount = 0;
    this.visitor = new RustLiteEvaluatorVisitor();
  }

  async evaluateChunk(chunk: string): Promise<void> {
    this.executionCount++;
    try {
      // Create the lexer and parser
      const inputStream = CharStream.fromString(chunk);
      const lexer = new RustLiteLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new RustLiteParser(tokenStream);
      parser.removeErrorListeners();
      parser.addErrorListener({
        syntaxError: (
          recognizer,
          offendingSymbol,
          line,
          charPositionInLine,
          msg
        ) => {
          this.conductor.sendOutput(
            `Syntax error at ${line}:${charPositionInLine} - ${msg}`
          );
        },
        reportAmbiguity() {},
        reportAttemptingFullContext() {},
        reportContextSensitivity() {},
      });
      // Parse the input
      const tree = parser.prog();

      // Evaluate the parsed tree
      const result = this.visitor.visit(tree);

      // Send the result to the REPL
      this.conductor.sendOutput(`Result of expression: ${result}`);
    } catch (error) {
      // Handle errors and send them to the REPL
      if (error instanceof Error) {
        this.conductor.sendOutput(`Error: ${error.message}`);
      } else {
        this.conductor.sendOutput(`Error: ${String(error)}`);
      }
    }
  }
}
