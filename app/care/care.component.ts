import { Component } from "@angular/core";
import { isAndroid } from "platform";
import { SelectedIndexChangedEventData, TabView } from "tns-core-modules/ui/tab-view";
import { Push } from "kinvey-nativescript-sdk/push";

@Component({
    selector: "CareComponent",
    moduleId: module.id,
    templateUrl: "./care.component.html",
    styleUrls: ["./care-common.css"]
})
export class CareComponent {
    title: string;

    getIconSource(icon: string): string {
        return isAndroid ? "" : "res://tabIcons/" + icon;
    }

    onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
        const tabView = <TabView>args.object;
        const selectedTabViewItem = tabView.items[args.newIndex];

        this.title = selectedTabViewItem.title;

        Push.register({
            android: {
              senderID: '982992243930'
            },
            ios: {
              alert: true,
              badge: true,
              sound: true
            }
        })
        .then((deviceToken: string) => {
            alert("Device registered.  Access token: " + deviceToken);
            console.log("Device registered.  Access token: " + deviceToken);
        })
        .catch((error: Error) => {
            alert("Error: " + error);
            console.log("Error: " + error);
        });

        Push.onNotification((data: any) => {
            alert("Data is: " + JSON.stringify(data));
        });
    }
}
