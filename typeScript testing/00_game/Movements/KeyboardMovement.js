export class KeyboardMovement {
    constructor(x, y, speedX, speedY, keysPressed = {}) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.keysPressed = keysPressed;
        this.initInputListeners();
    }
    update(deltaTime) {
        this.handleInput(deltaTime);
    }
    getPos() {
        return { x: this.x, y: this.y };
    }
    initInputListeners() {
        window.addEventListener("keydown", (e) => {
            this.keysPressed[e.key] = true;
        });
        window.addEventListener("keyup", (e) => {
            this.keysPressed[e.key] = false;
        });
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
