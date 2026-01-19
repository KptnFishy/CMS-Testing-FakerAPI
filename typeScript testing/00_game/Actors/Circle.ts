import { Actor } from "./Actor";

export class Circle implements Actor {
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
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.width / 2, this.height / 2, 0, 0, Math.PI * 2);
        ctx.fill();
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