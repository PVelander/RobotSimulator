"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Robot_1 = require("./Robot");
var CommandProcessor = /** @class */ (function () {
    function CommandProcessor() {
        this.robot = new Robot_1.default();
    }
    CommandProcessor.prototype.readCommands = function (filePath) {
        var _this = this;
        var commands = fs.readFileSync(filePath, 'utf8').split('\n');
        commands.forEach(function (command) {
            var trimmedCommand = command.trim();
            if (trimmedCommand) {
                _this.processCommand(trimmedCommand);
            }
        });
    };
    CommandProcessor.prototype.processCommand = function (command) {
        var parts = command.split(',');
        var action = parts[0].toUpperCase();
        switch (action) {
            case 'PLACE':
                var x = parseInt(parts[1], 10);
                var y = parseInt(parts[2], 10);
                var direction = parts[3];
                this.robot.place(x, y, direction);
                break;
            case 'MOVE':
                this.robot.move();
                break;
            case 'REPORT':
                this.robot.report();
                break;
            case 'LEFT':
                this.robot.left();
                break;
            case 'RIGHT':
                this.robot.right();
                break;
        }
    };
    return CommandProcessor;
}());
exports.default = CommandProcessor;
