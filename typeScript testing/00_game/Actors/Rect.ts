import { Actor } from "./Actor";

export class Rect implements Actor {
    constructor(
        public x: number,
        public y: number,
        public width: number,
        public height: number,

        public color: string,

        public speedX?: number,
        public speedY?: number,

        public hasInput: boolean = false,
        public keysPressed: { [key: string]: boolean } = {},
    ) {
        if (this.hasInput) {
            this.initInputListeners();
        }
    }

    private initInputListeners(): void {
        window.addEventListener("keydown", (e) => {
            this.keysPressed[e.key] = true;

        });

        window.addEventListener("keyup", (e) => {
            this.keysPressed[e.key] = false;
        });
    }

    update(deltaTime: number): void {
        if (!this.hasInput) {
            if (this.speedX) {
                this.x += this.speedX * deltaTime;
            }
            if (this.speedY) {
                this.y += this.speedY * deltaTime;
            }
        } else {
            this.handleInput(deltaTime);
        }
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    handleInput(deltaTime: number): void {
        if (this.keysPressed["ArrowUp"]) {
            this.y -= (this.speedY || 0) * deltaTime;
        }
        if (this.keysPressed["ArrowDown"]) {
            this.y += (this.speedY || 0) * deltaTime;
        }
        if (this.keysPressed["ArrowLeft"]) {
            this.x -= (this.speedX || 0) * deltaTime;
        }
        if (this.keysPressed["ArrowRight"]) {
            this.x += (this.speedX || 0) * deltaTime;
        }
    }
}