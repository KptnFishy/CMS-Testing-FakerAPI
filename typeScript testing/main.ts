import { Car } from "./car.ts";
import { Engine } from "./engine.ts";
import { Cylinder } from "./cylinder.ts";

let cylinder = new Cylinder(1, 2);
let engine = new Engine(200, cylinder, 6);

let car1 = new Car("Toyota", "corrolla", 10000, 2022, engine);

console.log(car1);
