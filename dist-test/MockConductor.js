"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockConductor = void 0;
const fs_1 = require("fs");
class MockConductor {
    constructor() { }
    requestFile(fileName) {
        // Open and Read the test file into a string
        const testFile = (0, fs_1.readFileSync)(fileName, "utf-8");
        // Return the file content
        return Promise.resolve(testFile);
    }
    requestChunk() {
        throw new Error("Method not implemented.");
    }
    requestInput() {
        throw new Error("Method not implemented.");
    }
    tryRequestInput() {
        throw new Error("Method not implemented.");
    }
    sendError(error) {
        throw new Error("Method not implemented.");
    }
    updateStatus(status, isActive) {
        throw new Error("Method not implemented.");
    }
    hostLoadPlugin(pluginName) {
        throw new Error("Method not implemented.");
    }
    registerPlugin(pluginClass, ...arg) {
        throw new Error("Method not implemented.");
    }
    unregisterPlugin(plugin) {
        throw new Error("Method not implemented.");
    }
    registerModule(moduleClass) {
        throw new Error("Method not implemented.");
    }
    unregisterModule(module) {
        throw new Error("Method not implemented.");
    }
    importAndRegisterExternalPlugin(location) {
        throw new Error("Method not implemented.");
    }
    importAndRegisterExternalModule(location) {
        throw new Error("Method not implemented.");
    }
    destroy() {
        throw new Error("Method not implemented.");
    }
    // Implement the required methods from IRunnerPlugin
    sendOutput(message) {
        console.log(`[OUTPUT] ${message}`);
    }
}
exports.MockConductor = MockConductor;
