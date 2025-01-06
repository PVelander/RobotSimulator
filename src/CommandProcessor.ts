import * as fs from 'fs';
import Robot from './Robot';

class CommandProcessor {
    private robot: Robot;

    constructor() {
        this.robot = new Robot();
    }

    readCommands(filePath: string): void {
        const commands = fs.readFileSync(filePath, 'utf8').split('\n');

        commands.forEach(command => {
            const trimmedCommand = command.trim();
            if (trimmedCommand) {
                this.processCommand(trimmedCommand);
            }
        });
    }

    private processCommand(command: string): void {
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

export default CommandProcessor;