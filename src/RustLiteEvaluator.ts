import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { RustLiteVisitor } from "./parser/src/RustLiteVisitor";
import { RustLiteLexer } from "./parser/src/RustLiteLexer";
import {
  CharStream,
  CommonTokenStream,
  AbstractParseTreeVisitor,
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

class RustLiteEvaluatorVisitor
  extends AbstractParseTreeVisitor<number>
  implements RustLiteVisitor<number>
{
  //TODO: Implement Visit Prog
  visitProg(ctx: ProgContext): number {
    const numStatements = ctx.getChildCount();
    if (numStatements === 0) {
      return 0;
    }

    let result = 0;
    for (let i = 0; i < numStatements; i++) {
      const statement = ctx.stmt(i);
      result = this.visit(statement);
    }
    return result;
  }

  visitExpr(ctx: ExprContext): number {
    return 0;
  }

  visitArithExpr(ctx: ArithExprContext): number {
    return 0;
  }

  visitLogicExpr(ctx: LogicExprContext): number {
    return 0;
  }

  visitStructExpr(ctx: StructExprContext): number {
    return 0;
  }

  visitStmt(ctx: StmtContext): number {
    const numChildren = ctx.getChildCount();
    if (numChildren === 0) {
      return 0;
    }

    // implcit return statement
    if (numChildren === 1) {
      return this.visit(ctx.returnStmt());
    } else if (ctx.getChild(0).getText() === "return") {
      // explicit return statement
      return this.visit(ctx.returnStmt());
    }

    if (numChildren === 2) {
      if (ctx.getChild(0).getText() === "loop") {
        // loop statement
        return this.visit(ctx.loopStmt());
      }
      if (ctx.getChild(1).getText() === ";") {
        // expression statement
        return this.visit(ctx.exprStmt());
      }
    }

    if (ctx.getChild(0).getText() === "if") {
      // conditional statement
      return this.visit(ctx.condStmt());
    }

    if (ctx.getChild(0).getText() === "for") {
      // for statement
      return this.visit(ctx.forStmt());
    }

    if (ctx.getChild(0).getText() === "while") {
      // while statement
      return this.visit(ctx.whileStmt());
    }

    if (ctx.getChild(0).getText() === "let") {
      // declare statement
      return this.visit(ctx.declareStmt());
    }

    if (ctx.getChild(0).getText() === "{") {
      // block statement
      return this.visit(ctx.block());
    }

    if (ctx.getChild(0).getText() === "fn") {
      // function statement
      return this.visit(ctx.fnDeclareStmt());
    }
  }

  visitBlock(ctx: BlockContext): number {
    return 0;
  }

  visitExprStmt(ctx: ExprStmtContext): number {
    return this.visit(ctx.expr());
  }

  visitLoopStmt(ctx: LoopStmtContext): number {
    return 0;
  }

  visitDeclareStmt(ctx: DeclareStmtContext): number {
    return 0;
  }

  visitCondStmt(ctx: CondStmtContext): number {
    return 0;
  }

  visitWhileStmt(ctx: WhileStmtContext): number {
    return 0;
  }

  visitIterable(ctx: IterableContext): number {
    return 0;
  }

  visitForStmt(ctx: ForStmtContext): number {
    return 0;
  }

  visitParam(ctx: ParamContext): number {
    return 0;
  }

  visitParamList(ctx: ParamListContext): number {
    return 0;
  }

  visitReturnType(ctx: ReturnTypeContext): number {
    return 0;
  }

  visitReturnStmt(ctx: ReturnStmtContext): number {
    return 0;
  }

  visitFnDeclareStmt(ctx: FnDeclareStmtContext): number {
    return 0;
  }

  visitStructDeclare(ctx: StructDeclareContext): number {
    return 0;
  }

  visitStructDeclareField(ctx: StructDeclareFieldContext): number {
    return 0;
  }

  visitStructDeclareFieldList(ctx: StructDeclareFieldListContext): number {
    return 0;
  }

  visitStructInit(ctx: StructInitContext): number {
    return 0;
  }

  visitStructInitFieldList(ctx: StructInitFieldListContext): number {
    return 0;
  }

  visitStructInitField(ctx: StructInitFieldContext): number {
    return 0;
  }

  visitStructFieldAccess(ctx: StructFieldAccessContext): number {
    return 0;
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
