import { Cylinder } from "./cylinder.ts";
export class Engine {
    constructor(private horsePower: number, private cylinders: Cylinder, private cylinderCount: number) {
        horsePower < 0? this.horsePower = 0: this.horsePower = horsePower;
        cylinderCount < 0? this.cylinderCount = 0: this.cylinderCount = cylinderCount;        
    }

    public setHorsePower(horsePower: number): void {
        horsePower < 0? this.horsePower = 0: this.horsePower = horsePower;
    }

    public getHorsePower(): number {
        return this.horsePower;
    }

    public setCylinderCount(cylinderCount: number): void {
        cylinderCount < 0? this.cylinderCount = 0: this.cylinderCount = cylinderCount;
    }
    public getCylinderCount(): number {
        return this.cylinderCount;
    }

}