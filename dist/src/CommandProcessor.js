"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const Robot_1 = __importDefault(require("./Robot"));
class CommandProcessor {
    constructor() {
        this.robot = new Robot_1.default();
    }
    readCommands(filePath) {
        const commands = fs.readFileSync(filePath, 'utf8').split('\n');
        commands.forEach(command => {
            const trimmedCommand = command.trim();
            if (trimmedCommand) {
                this.processCommand(trimmedCommand);
            }
        });
    }
    processCommand(command) {
        const parts = command.split(',');
        const action = parts[0].toUpperCase();
        switch (action) {
            case 'PLACE':
                const x = parseInt(parts[1], 10);
                const y = parseInt(parts[2], 10);
                const direction = parts[3];
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
    }
}
exports.default = CommandProcessor;
