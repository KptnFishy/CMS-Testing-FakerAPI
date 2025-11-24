import { Controllable } from "./controllable.ts";

export class Light implements Controllable {
    constructor(private active: boolean, private name: string) { }
    public switchStatus(): void {
        console.log("Light status changed");
        this.active = !this.active;
    }
    public isActive(): boolean {
        return this.active;
    }
    public getName(): string {
        return this.name;
    }
}