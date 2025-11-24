export interface Controllable {
    switchStatus(): void;
    isActive(): boolean;
    getName(): string;
}