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
    const numStatements = ctx.getChildCount();
    if (numStatements === 0) {
      return 0;
    }

    let result: SUPPORTED_TYPES;
    for (let i = 0; i < numStatements; i++) {
      let statement;
      try {
        statement = ctx.stmt(i);
        console.log(`Got statement at index ${i}: ${statement}`);
      } catch {
        throw "Unable to get statement";
      }
      try {
        if (statement && statement[0]) {
          console.log(`Statement: ${statement[0]}`);
          result = this.visitStmt(statement[0]);
        }
      } catch (error) {
        throw `Error while visiting statement ${statement}, with error: ${error}`;
      }
    }
    return result;
  }

  visitExpr(ctx: ExprContext): SUPPORTED_TYPES {
    return 0;
  }

  visitArithExpr(ctx: ArithExprContext): number {
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
    return 0;
  }

  visitStmt(ctx: StmtContext): SUPPORTED_TYPES {
    const numChildren = ctx.getChildCount();
    if (numChildren === 0) {
      return 0;
    }

    // implicit return statement
    if (numChildren === 1) {
      return this.visitReturnStmt(ctx.returnStmt());
    } else if (ctx.getChild(0).getText() === "return") {
      // explicit return statement
      return this.visitReturnStmt(ctx.returnStmt());
    }

    if (numChildren === 2) {
      if (ctx.getChild(0).getText() === "loop") {
        // loop statement
        return this.visitLoopStmt(ctx.loopStmt());
      }
      if (ctx.getChild(1).getText() === ";") {
        // expression statement
        return this.visitExprStmt(ctx.exprStmt());
      }
    }

    if (ctx.getChild(0).getText() === "if") {
      // conditional statement
      return this.visitCondStmt(ctx.condStmt());
    }

    if (ctx.getChild(0).getText() === "for") {
      // for statement
      return this.visitForStmt(ctx.forStmt());
    }

    if (ctx.getChild(0).getText() === "while") {
      // while statement
      return this.visitWhileStmt(ctx.whileStmt());
    }

    if (ctx.getChild(0).getText() === "let") {
      // declare statement
      return this.visitDeclareStmt(ctx.declareStmt());
    }

    if (ctx.getChild(0).getText() === "{") {
      // block statement
      return this.visitBlock(ctx.block());
    }

    if (ctx.getChild(0).getText() === "fn") {
      // function statement
      return this.visitFnDeclareStmt(ctx.fnDeclareStmt());
    }
  }

  visitBlock(ctx: BlockContext): SUPPORTED_TYPES {
    return 0;
  }

  visitExprStmt(ctx: ExprStmtContext): SUPPORTED_TYPES {
    return this.visit(ctx.expr());
  }

  visitLoopStmt(ctx: LoopStmtContext): SUPPORTED_TYPES {
    return 0;
  }

  visitDeclareStmt(ctx: DeclareStmtContext): SUPPORTED_TYPES {
    return 0;
  }

  visitCondStmt(ctx: CondStmtContext): SUPPORTED_TYPES {
    return 0;
  }

  visitWhileStmt(ctx: WhileStmtContext): SUPPORTED_TYPES {
    return 0;
  }

  visitIterable(ctx: IterableContext): SUPPORTED_TYPES {
    return 0;
  }

  visitForStmt(ctx: ForStmtContext): SUPPORTED_TYPES {
    return 0;
  }

  visitParam(ctx: ParamContext): SUPPORTED_TYPES {
    return 0;
  }

  visitParamList(ctx: ParamListContext): SUPPORTED_TYPES {
    return 0;
  }

  visitReturnType(ctx: ReturnTypeContext): SUPPORTED_TYPES {
    return 0;
  }

  visitReturnStmt(ctx: ReturnStmtContext): SUPPORTED_TYPES {
    return 0;
  }

  visitFnDeclareStmt(ctx: FnDeclareStmtContext): SUPPORTED_TYPES {
    return 0;
  }

  visitStructDeclare(ctx: StructDeclareContext): SUPPORTED_TYPES {
    return 0;
  }

  visitStructDeclareField(ctx: StructDeclareFieldContext): SUPPORTED_TYPES {
    return 0;
  }

  visitStructDeclareFieldList(
    ctx: StructDeclareFieldListContext
  ): SUPPORTED_TYPES {
    return 0;
  }

  visitStructInit(ctx: StructInitContext): SUPPORTED_TYPES {
    return 0;
  }

  visitStructInitFieldList(ctx: StructInitFieldListContext): SUPPORTED_TYPES {
    return 0;
  }

  visitStructInitField(ctx: StructInitFieldContext): SUPPORTED_TYPES {
    return 0;
  }

  visitStructFieldAccess(ctx: StructFieldAccessContext): SUPPORTED_TYPES {
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
