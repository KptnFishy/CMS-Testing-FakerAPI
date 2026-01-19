export class Circle {
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
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.width / 2, this.height / 2, 0, 0, Math.PI * 2);
        ctx.fill();
    }
    handleInput(deltaTime) {
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
