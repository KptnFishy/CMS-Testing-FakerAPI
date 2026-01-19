import { Game, GameFramework } from "./GameFramework.js";
import { Actor } from "./Actors/Actor.js";
import { Rect } from "./Actors/Rect.js";
import { Circle } from "./Actors/Circle.js";

import { KeyboardMovement } from "./Movements/KeyboardMovement.js";
import { LinearMovement } from "./Movements/LinearMovement.js";

class MyGame extends Game {
    private Actors: Actor[] = [];


    init(): void {
        const rect = new Rect(40, 40, "blue", new KeyboardMovement(400, 450, 100, 100));
        const circle = new Circle(80, 80, "red", new LinearMovement(40, 40, 50, 50));
        this.Actors.push(rect);
        this.Actors.push(circle);
    }
    update(deltaTime: number): void {
        this.Actors.forEach((actor: Actor) => {
            actor.update(deltaTime);
        })
    }
    render(ctx: CanvasRenderingContext2D): void {
        this.Actors.forEach((actor: Actor) => {
            actor.render(ctx);
        })
    }
}


const game = new MyGame();
const gameFramework = new GameFramework(game);
gameFramework.start();