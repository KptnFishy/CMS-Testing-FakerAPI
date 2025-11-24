export class Cylinder {
    constructor(private height: number, private radius: number) {
        this.height = height;
        this.radius = radius;
    }

    public getHeight(): number {
        return this.height;
    }

    public setHeight(height: number): void {
        this.height = height;
    }
    public getRadius(): number {
        return this.radius;
    }

    public setRadius(radius: number): void {
        this.radius = radius;
    }
}