"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var push_1 = require("kinvey-nativescript-sdk/push");
var CareComponent = /** @class */ (function () {
    function CareComponent() {
    }
    CareComponent.prototype.getIconSource = function (icon) {
        return platform_1.isAndroid ? "" : "res://tabIcons/" + icon;
    };
    CareComponent.prototype.onSelectedIndexChanged = function (args) {
        var tabView = args.object;
        var selectedTabViewItem = tabView.items[args.newIndex];
        this.title = selectedTabViewItem.title;
        push_1.Push.register({
            android: {
                senderID: '982992243930'
            },
            ios: {
                alert: true,
                badge: true,
                sound: true
            }
        })
            .then(function (deviceToken) {
            alert("Device registered.  Access token: " + deviceToken);
            console.log("Device registered.  Access token: " + deviceToken);
        })
            .catch(function (error) {
            alert("Error: " + error);
            console.log("Error: " + error);
        });
        push_1.Push.onNotification(function (data) {
            alert("Data is: " + JSON.stringify(data));
        });
    };
    CareComponent = __decorate([
        core_1.Component({
            selector: "CareComponent",
            moduleId: module.id,
            templateUrl: "./care.component.html",
            styleUrls: ["./care-common.css"]
        })
    ], CareComponent);
    return CareComponent;
}());
exports.CareComponent = CareComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxxQ0FBcUM7QUFFckMscURBQW9EO0FBUXBEO0lBQUE7SUFvQ0EsQ0FBQztJQWpDRyxxQ0FBYSxHQUFiLFVBQWMsSUFBWTtRQUN0QixNQUFNLENBQUMsb0JBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFDckQsQ0FBQztJQUVELDhDQUFzQixHQUF0QixVQUF1QixJQUFtQztRQUN0RCxJQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7UUFFdkMsV0FBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLE9BQU8sRUFBRTtnQkFDUCxRQUFRLEVBQUUsY0FBYzthQUN6QjtZQUNELEdBQUcsRUFBRTtnQkFDSCxLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0osQ0FBQzthQUNELElBQUksQ0FBQyxVQUFDLFdBQW1CO1lBQ3RCLEtBQUssQ0FBQyxvQ0FBb0MsR0FBRyxXQUFXLENBQUMsQ0FBQztZQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxHQUFHLFdBQVcsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQVk7WUFDaEIsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUVILFdBQUksQ0FBQyxjQUFjLENBQUMsVUFBQyxJQUFTO1lBQzFCLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQW5DUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNuQyxDQUFDO09BQ1csYUFBYSxDQW9DekI7SUFBRCxvQkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIFRhYlZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiO1xuaW1wb3J0IHsgUHVzaCB9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNkay9wdXNoXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkNhcmVDb21wb25lbnRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY2FyZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9jYXJlLWNvbW1vbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZUNvbXBvbmVudCB7XG4gICAgdGl0bGU6IHN0cmluZztcblxuICAgIGdldEljb25Tb3VyY2UoaWNvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGlzQW5kcm9pZCA/IFwiXCIgOiBcInJlczovL3RhYkljb25zL1wiICsgaWNvbjtcbiAgICB9XG5cbiAgICBvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnN0IHRhYlZpZXcgPSA8VGFiVmlldz5hcmdzLm9iamVjdDtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRUYWJWaWV3SXRlbSA9IHRhYlZpZXcuaXRlbXNbYXJncy5uZXdJbmRleF07XG5cbiAgICAgICAgdGhpcy50aXRsZSA9IHNlbGVjdGVkVGFiVmlld0l0ZW0udGl0bGU7XG5cbiAgICAgICAgUHVzaC5yZWdpc3Rlcih7XG4gICAgICAgICAgICBhbmRyb2lkOiB7XG4gICAgICAgICAgICAgIHNlbmRlcklEOiAnOTgyOTkyMjQzOTMwJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlvczoge1xuICAgICAgICAgICAgICBhbGVydDogdHJ1ZSxcbiAgICAgICAgICAgICAgYmFkZ2U6IHRydWUsXG4gICAgICAgICAgICAgIHNvdW5kOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkZXZpY2VUb2tlbjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBhbGVydChcIkRldmljZSByZWdpc3RlcmVkLiAgQWNjZXNzIHRva2VuOiBcIiArIGRldmljZVRva2VuKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGV2aWNlIHJlZ2lzdGVyZWQuICBBY2Nlc3MgdG9rZW46IFwiICsgZGV2aWNlVG9rZW4pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvcjogXCIgKyBlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgUHVzaC5vbk5vdGlmaWNhdGlvbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBhbGVydChcIkRhdGEgaXM6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=