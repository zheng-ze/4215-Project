import { MockConductor } from "./MockConductor.js";
import { RustLiteEvaluator } from "./RustLiteEvaluator.js";
import path from "path";

async function runTest() {
  const conductor = new MockConductor();
  const evaluator = new RustLiteEvaluator(conductor);

  const testFileName = "src/test_file.input";

  // Open and Read the test file into a string
  const testFilePath = path.join(process.cwd(), testFileName);
  // Check if the file exists
  try {
    const testContent = await conductor.requestFile(testFilePath);
    console.log("Test file content:", testContent);

    // Check if the file was read successfully
    if (testContent) {
      // Evaluate the file
      await evaluator.evaluateChunk(testContent);
    }
  } catch (error) {
    console.error("Error reading test file:", error);
  }
}

runTest().catch(console.error);
