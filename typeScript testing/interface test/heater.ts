import { Controllable } from "./controllable.ts";

export class Heater implements Controllable {
    constructor(private active: boolean, private name: string) { }
    public switchStatus(): void {
        console.log("Heater status changed");
        this.active = !this.active;
    }
    public isActive(): boolean {
        return this.active;
    }
    public getName(): string {
        return this.name;
    }
}