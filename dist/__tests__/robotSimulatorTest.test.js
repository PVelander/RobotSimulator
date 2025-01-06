"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Robot_1 = __importDefault(require("../src/Robot"));
describe("Test of Robot Simulator", () => {
    let robot;
    let consoleSpy;
    beforeEach(() => {
        robot = new Robot_1.default();
        consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
    });
    afterEach(() => {
        consoleSpy.mockRestore();
    });
    describe("PLACE", () => {
        describe("Expect Success", () => {
            test("Should place robot on table facing NORTH", () => {
                robot.place(0, 0, "NORTH");
                robot.report();
                expect(consoleSpy).toHaveBeenCalledWith(0, 0, "NORTH");
            });
            test("Should place robot on table facing SOUTH", () => {
                robot.place(0, 0, "SOUTH");
                robot.report();
                expect(consoleSpy).toHaveBeenCalledWith(0, 0, "SOUTH");
            });
            test("Should place robot on table facing EAST", () => {
                robot.place(0, 0, "EAST");
                robot.report();
                expect(consoleSpy).toHaveBeenCalledWith(0, 0, "EAST");
            });
            test("Should place robot on table facing WEST", () => {
                robot.place(0, 0, "WEST");
                robot.report();
                expect(consoleSpy).toHaveBeenCalledWith(0, 0, "WEST");
            });
            test("Should place robot on table edge (4,4)", () => {
                robot.place(4, 4, "NORTH");
                robot.report();
                expect(consoleSpy).toHaveBeenCalledWith(4, 4, "NORTH");
            });
        });
        describe("Expect ignored command", () => {
            test("Should NOT override old position of robot when ignoring command", () => {
                robot.place(2, 1, "SOUTH");
                robot.place(-1, 0, "NORTH");
                robot.report();
                expect(consoleSpy).toHaveBeenCalledWith(2, 1, "SOUTH");
            });
        });
    });
    describe("MOVE", () => {
        describe("Expect Success", () => {
            test("Should increase Y when moving NORTH", () => {
                robot.place(0, 0, "NORTH");
                robot.move();
                robot.report();
                expect(consoleSpy).toHaveBeenCalledWith(0, 1, "NORTH");
            });
            test("Should decrease Y when moving SOUTH", () => {
                robot.place(2, 1, "SOUTH");
                robot.move();
                robot.report();
                expect(consoleSpy).toHaveBeenCalledWith(2, 0, "SOUTH");
            });
            test("Should increase X when moving EAST", () => {
                robot.place(2, 1, "EAST");
                robot.move();
                robot.report();
                expect(consoleSpy).toHaveBeenCalledWith(3, 1, "EAST");
            });
            test("Should decrease X when moving WEST", () => {
                robot.place(2, 3, "WEST");
                robot.move();
                robot.report();
                expect(consoleSpy).toHaveBeenCalledWith(1, 3, "WEST");
            });
        });
        describe("Expect ignored command", () => {
            test("Should not move robot if not placed", () => {
                robot.move();
                robot.report();
                expect(consoleSpy).not.toHaveBeenCalled();
            });
            test("Should not move SOUTH of table", () => {
                robot.place(1, 0, "SOUTH");
                robot.move();
                robot.report();
                expect(consoleSpy).toHaveBeenCalledWith(1, 0, "SOUTH");
            });
            test("Should not move NORTH of table", () => {
                robot.place(1, 4, "NORTH");
                robot.move();
                robot.report();
                expect(consoleSpy).toHaveBeenCalledWith(1, 4, "NORTH");
            });
            test("Should not move WEST of table", () => {
                robot.place(0, 1, "WEST");
                robot.move();
                robot.report();
                expect(consoleSpy).toHaveBeenCalledWith(0, 1, "WEST");
            });
            test("Should not move EAST of table", () => {
                robot.place(4, 1, "EAST");
                robot.move();
                robot.report();
                expect(consoleSpy).toHaveBeenCalledWith(4, 1, "EAST");
            });
        });
    });
    describe("LEFT", () => {
        describe("Expect Success", () => {
            test("Should rotate NORTH to WEST", () => {
                robot.place(2, 2, "NORTH");
                robot.left();
                robot.report();
                expect(consoleSpy).toHaveBeenCalledWith(2, 2, "WEST");
            });
            test("Should rotate WEST to SOUTH", () => {
                robot.place(2, 2, "WEST");
                robot.left();
                robot.report();
                expect(consoleSpy).toHaveBeenCalledWith(2, 2, "SOUTH");
            });
            test("Should rotate SOUTH to EAST", () => {
                robot.place(2, 2, "SOUTH");
                robot.left();
                robot.report();
                expect(consoleSpy).toHaveBeenCalledWith(2, 2, "EAST");
            });
            test("Should rotate EAST to NORTH", () => {
                robot.place(2, 2, "EAST");
                robot.left();
                robot.report();
                expect(consoleSpy).toHaveBeenCalledWith(2, 2, "NORTH");
            });
        });
        describe("Expect ignored command", () => {
            test("Should NOT rotate if not placed", () => {
                robot.left();
                robot.report();
                expect(consoleSpy).not.toHaveBeenCalled();
            });
        });
    });
    describe("RIGHT", () => {
        describe("Expect Success", () => {
            test("Should rotate WEST to NORTH", () => {
                robot.place(2, 2, "WEST");
                robot.right();
                robot.report();
                expect(consoleSpy).toHaveBeenCalledWith(2, 2, "NORTH");
            });
            test("Should rotate SOUTH to WEST", () => {
                robot.place(2, 2, "SOUTH");
                robot.right();
                robot.report();
                expect(consoleSpy).toHaveBeenCalledWith(2, 2, "WEST");
            });
            test("Should rotate WEST to NORTH", () => {
                robot.place(2, 2, "WEST");
                robot.right();
                robot.report();
                expect(consoleSpy).toHaveBeenCalledWith(2, 2, "NORTH");
            });
            test("Should rotate NORTH to EAST", () => {
                robot.place(2, 2, "NORTH");
                robot.right();
                robot.report();
                expect(consoleSpy).toHaveBeenCalledWith(2, 2, "EAST");
            });
        });
        describe("Expect ignored command", () => {
            test("Should NOT rotate if not placed", () => {
                robot.right();
                robot.report();
                expect(consoleSpy).not.toHaveBeenCalled();
            });
        });
    });
});
