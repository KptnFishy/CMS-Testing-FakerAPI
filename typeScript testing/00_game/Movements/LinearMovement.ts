import { Movement } from "./Movement";

export class LinearMovement implements Movement {
    constructor(
        public x: number,
        public y: number,
        public speedX: number,
        public speedY: number,
    ) { }

    update(deltaTime: number): void {
        this.x += this.speedX * deltaTime;
        this.y += this.speedY * deltaTime;
    }

    getPos(): { x: number; y: number } {
        return { x: this.x, y: this.y };
    }
}