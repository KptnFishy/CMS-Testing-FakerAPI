export interface Movement {
    x: number;
    y: number;
    speedX: number;
    speedY: number;

    update(deltaTime: number): void;
    getPos(): { x: number; y: number };

    keysPressed?: { [key: string]: boolean };
    handleInput?(deltaTime: number): void;
    initEventListeners?(): void;
}