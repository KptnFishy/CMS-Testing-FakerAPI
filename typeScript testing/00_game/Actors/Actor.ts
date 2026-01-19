export interface Actor {
    x: number;
    y: number;
    width: number;
    height: number;

    speedX?: number;
    speedY?: number;

    color: string;

    update(deltaTime: number): void;
    render(ctx: CanvasRenderingContext2D): void;

    //movement stuff
    hasInput: boolean;
    keysPressed?: { [key: string]: boolean };
    handleInput?(deltaTime: number): void;
    initEventListeners?(): void;

}