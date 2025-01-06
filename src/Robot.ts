class Robot {
    private x: number = -1;
    private y: number = -1;
    private f: string = "";
    private placed: boolean = false;
    private directions: string[] = ["NORTH", "WEST", "SOUTH", "EAST"];

    //Put the robot on the table in position X, Y and facing NORTH, SOUTH, EAST or WEST
    place(x: number, y: number, f: string): void {
        if(this.isValidPosition(x, y)) {
            this.x = x;
            this.y = y;
            this.f = f;
            this.placed = true;
        }
    }

    //Move the robot one unit forward in the direction it is currently facing
    move(): void {
        if(this.placed === true)
        {
            let newY = this.y;
            let newX = this.x;
            switch (this.f) {
                case "NORTH":
                    newY++;
                    break;
                case "EAST":
                    newX++;
                    break;
                case "SOUTH":
                    newY--;
                    break;
                case "WEST":
                    newX--;
                    break;
            }
            this.place(newX, newY, this.f);
        }
    }

    //Announce the X, Y and F of the robot. This can be in any form, but standard output is sufficient
    report(): void {
        if(this.placed === true) {
            console.log(this.x, this.y, this.f);
        }
    }

    //Rotate the robot 90 degrees left
    left(): void {
        if (this.placed === true) {
            let currentIndex = this.directions.indexOf(this.f);
            this.place(this.x, this.y, this.directions[(currentIndex + 1) % 4]);
        }
    }

    //Rotate the robot 90 degrees right
    right(): void {
        if (this.placed === true) {
            let currentIndex = this.directions.indexOf(this.f);
            this.place(this.x, this.y, this.directions[(currentIndex + 3) % 4]);
        }
    }

    private isValidPosition(x: number, y: number): boolean {
        return x >= 0 && x < 5 && y >= 0 && y < 5;
    }

}

export default Robot;