import { Game, GameFramework } from "./GameFramework.js";
import { Actor } from "./Actors/Actor.js";
import { Rect } from "./Actors/Rect.js";
import { Circle } from "./Actors/Circle.js";

class MyGame extends Game {
    private Actors: Actor[] = [];


    init(): void {
        const rect = new Rect(40, 40, 80, 80, "red", 10);
        const circle = new Circle(500, 300, 80, 160, "blue", 100, 100, true);
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