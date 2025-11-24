import { Blind } from "./blind.ts";
import { Controllable } from "./controllable.ts";
import { Light } from "./light.ts";
import { Heater } from "./heater.ts";


const b1 = new Blind(false, "Blind");
const l1 = new Light(false, "Light");
const h1 = new Heater(false, "Heater");

class Controller {
    constructor(private devices: Controllable[]) { }
    public switchStatus(index: number): void {
        this.devices[index].switchStatus();
    }

    public isActive(index: number): boolean {
        return this.devices[index].isActive();
    }

    public getName(index: number): string {
        return this.devices[index].getName();
    }

    public getAll(): Controllable[] {
        return this.devices;
    }
}

const controller = new Controller([b1, l1, h1]);

controller.switchStatus(0);
console.log(controller.isActive(0));
console.log(controller.getAll());