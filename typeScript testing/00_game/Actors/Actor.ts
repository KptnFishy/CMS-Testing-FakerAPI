import { Movement } from "../Movements/Movement";

export interface Actor {
    width: number;
    height: number;

    color: string;

    update(deltaTime: number): void;
    render(ctx: CanvasRenderingContext2D): void;

    //movement stuff
    movementType: Movement;

}