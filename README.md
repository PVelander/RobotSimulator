# README
## Execute Instructions

1. **Install Dependencies** (if not already installed):
   Run `npm install`.

2. **Run a command file**:
   In the root folder, execute `npm start -- <PATH_TO_TXT_COMMAND_FILE>`.

3. **Example**:
Four .txt files are included in package. Representing Example A,B,C from instructions, and own file used in testing purpose. <br />
To run the command file for Example A, use `npm start -- example-A.txt`.


---

# Robot Simulator

## Description
The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units. There are no other obstructions on the table surface. The robot is free to roam around the surface of the table but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented; however, further valid movement commands must still be allowed.

## Assignment
Create an application that can read commands of the following form:
- **PLACE,X,Y,F**: Put the robot on the table in position `X`, `Y` and facing `NORTH`, `SOUTH`, `EAST`, or `WEST`.
- **MOVE**: Move the robot one unit forward in the direction it is currently facing.
- **LEFT**: Rotate the robot 90 degrees left.
- **RIGHT**: Rotate the robot 90 degrees right.
- **REPORT**: Announce the `X`, `Y`, and `F` of the robot. This can be in any form, but standard output is sufficient.

The origin `(0,0)` can be considered to be the south-west most corner.

- The first valid command to the robot is a **PLACE** command.
- After that, any sequence of commands may be issued, in any order, including another **PLACE** command.
- The robot should ignore all commands in the sequence (**MOVE**, **LEFT**, **RIGHT**, and **REPORT**) until a valid **PLACE** command has been executed.
- Input should be in the form of a text file.

Provide test data to exercise the application. The solution should be sufficiently unit tested. It is not required to provide any graphical output showing the movement of the toy robot.

## Constraints
- The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot.
- Any move that would cause the robot to fall must be ignored.

## Deliverables
- The source files, without any dependencies except for test dependencies.
- The test data and any test code.

## Examples
### Example A
    PLACE,0,0,NORTH
    MOVE 
    REPORT
    Output: 0,1,NORTH
### Example B
    PLACE,0,0,NORTH
    LEFT
    REPORT
    Output: 0,0,WEST
### Example C
    PLACE,1,2,EAST
    MOVE
    MOVE
    LEFT
    MOVE
    REPORT
    Output: 3,3,NORTH
