import { Notify } from "./notify.ts";
import { Child, God, Councellor } from "./participants.ts";

class Santa {
    constructor(private notifiable: Notify[] = []) { }
    switchAllNotificationStates(): void {
        this.notifiable.forEach(notifiable => notifiable.switchNotificationState());
    }
    addNotifiable(notifiable: Notify): void {
        this.notifiable.push(notifiable);
    }
    checkAllNotificationStates(): void {
        this.notifiable.forEach(notifiable => console.log(notifiable.checkNotificationState()));
    }
}


const santa = new Santa();
const c1 = new Child("Ben");
const c2 = new Child("Max");
const g1 = new God("Allah");
const c3 = new Councellor("Linus");

santa.addNotifiable(g1);
santa.addNotifiable(c1);
santa.addNotifiable(c2);
santa.addNotifiable(c3);

santa.switchAllNotificationStates();
console.log("");
santa.checkAllNotificationStates();
console.log("");
santa.switchAllNotificationStates();

