import { Actor } from "./Actor";
import { Movement } from "../Movements/Movement";

export class Circle implements Actor {
    constructor(
        public width: number,
        public height: number,

        public color: string,

        public movementType: Movement,
    ) { }


    update(deltaTime: number): void {
        this.movementType.update(deltaTime);
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.ellipse(this.movementType.getPos().x, this.movementType.getPos().y, this.width / 2, this.height / 2, 0, 0, Math.PI * 2);
        ctx.fill();
    }

}