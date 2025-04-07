import { initialise } from "conductor/dist/conductor/runner/util/";
import { RustLiteEvaluator } from "./RustLiteEvaluator";
const { runnerPlugin, conduit } = initialise(RustLiteEvaluator);
