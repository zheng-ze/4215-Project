"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MockConductor_js_1 = require("./MockConductor.js");
const RustLiteEvaluator_js_1 = require("./RustLiteEvaluator.js");
const path_1 = __importDefault(require("path"));
async function runTest() {
    const conductor = new MockConductor_js_1.MockConductor();
    const evaluator = new RustLiteEvaluator_js_1.RustLiteEvaluator(conductor);
    const testFileName = "src/test_file.input";
    // Open and Read the test file into a string
    const testFilePath = path_1.default.join(process.cwd(), testFileName);
    // Check if the file exists
    try {
        const testContent = await conductor.requestFile(testFilePath);
        console.log("Test file content:", testContent);
        // Check if the file was read successfully
        if (testContent) {
            // Evaluate the file
            await evaluator.evaluateChunk(testContent);
        }
    }
    catch (error) {
        console.error("Error reading test file:", error);
    }
}
runTest().catch(console.error);
