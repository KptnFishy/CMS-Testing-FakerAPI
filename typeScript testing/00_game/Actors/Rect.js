export class Rect {
    constructor(x, y, width, height, color, speedX, speedY, hasInput = false, keysPressed = {}) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
        this.hasInput = hasInput;
        this.keysPressed = keysPressed;
        if (this.hasInput) {
            this.initInputListeners();
        }
    }
    initInputListeners() {
        window.addEventListener("keydown", (e) => {
            this.keysPressed[e.key] = true;
        });
        window.addEventListener("keyup", (e) => {
            this.keysPressed[e.key] = false;
        });
    }
    update(deltaTime) {
        if (!this.hasInput) {
            if (this.speedX) {
                this.x += this.speedX * deltaTime;
            }
            if (this.speedY) {
                this.y += this.speedY * deltaTime;
            }
        }
        else {
            this.handleInput(deltaTime);
        }
    }
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    handleInput(deltaTime) {
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
