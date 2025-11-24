import { Controllable } from "./controllable.ts";

export class Blind implements Controllable {
    constructor(private active: boolean, private name: string) { }
    public switchStatus(): void {
        console.log("Blind status changed");
        this.active = !this.active;
    }
    public isActive(): boolean {
        return this.active;
    }
    public getName(): string {
        return this.name;
    }
}