import { Notify } from "./notify.ts";

export class Child implements Notify {
    constructor(public name: String, public notified: Boolean = false) { }
    switchNotificationState(): void {
        this.notified = !this.notified;
        console.log(`Child ${this.name} has been ${this.notified ? "notified." : "unnotified."}`);
    }
    checkNotificationState(): String {
        return this.notified ? `Child ${this.name} is currently notified.` : `Child ${this.name} is currently not notified.`;
    }

}

export class God implements Notify {
    constructor(public name: String, public notified: Boolean = false) { }
    switchNotificationState(): void {
        this.notified = !this.notified;
        console.log(`God ${this.name} has been ${this.notified ? "notified." : "unnotified."}`);
    }
    checkNotificationState(): String {
        return this.notified ? `God ${this.name} is currently notified.` : `God ${this.name} is currently not notified.`;
    }
}

export class Councellor implements Notify {
    constructor(public name: String, public notified: Boolean = false) { }
    switchNotificationState(): void {
        this.notified = !this.notified;
        console.log(`Councellor ${this.name} has been ${this.notified ? "notified." : "unnotified."}`);
    }
    checkNotificationState(): String {
        return this.notified ? `Councellor ${this.name} is currently notified.` : `Councellor ${this.name} is currently not notified.`;
    }
}