import { Game, GameFramework } from "./GameFramework.js";
import { Rect } from "./Actors/Rect.js";
import { Circle } from "./Actors/Circle.js";
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.Actors = [];
    }
    init() {
        const rect = new Rect(40, 40, 80, 80, "red", 10);
        const circle = new Circle(500, 300, 80, 160, "blue", 100, 100, true);
        this.Actors.push(rect);
        this.Actors.push(circle);
    }
    update(deltaTime) {
        this.Actors.forEach((actor) => {
            actor.update(deltaTime);
        });
    }
    render(ctx) {
        this.Actors.forEach((actor) => {
            actor.render(ctx);
        });
    }
}
const game = new MyGame();
const gameFramework = new GameFramework(game);
gameFramework.start();
