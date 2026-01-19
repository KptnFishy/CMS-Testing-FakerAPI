import { Movement } from "./Movement";

export class KeyboardMovement implements Movement {

    constructor(
        public x: number,
        public y: number,
        public speedX: number,
        public speedY: number,

        public keysPressed: { [key: string]: boolean } = {},
    ) {
        this.initInputListeners();
    }

    update(deltaTime: number): void {
        this.handleInput(deltaTime);
    }

    getPos(): { x: number; y: number } {
        return { x: this.x, y: this.y };
    }

    private initInputListeners(): void {
        window.addEventListener("keydown", (e) => {
            this.keysPressed[e.key] = true;
        });

        window.addEventListener("keyup", (e) => {
            this.keysPressed[e.key] = false;
        });
    }

    handleInput(deltaTime: number): void {
        if (this.keysPressed["w"]) {
            this.y -= (this.speedY || 0) * deltaTime;
        }
        if (this.keysPressed["s"]) {
            this.y += (this.speedY || 0) * deltaTime;
        }
        if (this.keysPressed["a"]) {
            this.x -= (this.speedX || 0) * deltaTime;
        }
        if (this.keysPressed["d"]) {
            this.x += (this.speedX || 0) * deltaTime;
        }
    }
}