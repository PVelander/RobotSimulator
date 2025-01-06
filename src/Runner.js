"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommandProcessor_1 = require("./CommandProcessor");
if (require.main === module) {
    var filePath = process.argv[2];
    if (!filePath) {
        console.error('Please provide a file path as a command line argument.');
        process.exit(1);
    }
    var commandProcessor = new CommandProcessor_1.default();
    commandProcessor.readCommands(filePath);
}
