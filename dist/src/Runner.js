"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CommandProcessor_1 = __importDefault(require("./CommandProcessor"));
if (require.main === module) {
    const filePath = process.argv[2];
    if (!filePath) {
        console.error('Please provide a file path as a command line argument.');
        process.exit(1);
    }
    const commandProcessor = new CommandProcessor_1.default();
    commandProcessor.readCommands(filePath);
}
