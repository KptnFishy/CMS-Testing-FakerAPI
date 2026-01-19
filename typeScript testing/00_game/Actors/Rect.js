export class Rect {
    constructor(width, height, color, movementType) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.movementType = movementType;
    }
    update(deltaTime) {
        this.movementType.update(deltaTime);
    }
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.movementType.getPos().x, this.movementType.getPos().y, this.width, this.height);
    }
}
