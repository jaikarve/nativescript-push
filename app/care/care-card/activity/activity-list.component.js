"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var care_card_activity_service_1 = require("../shared/care-card-activity.service");
var care_card_event_service_1 = require("../shared/care-card-event.service");
var care_card_service_1 = require("../shared/care-card.service");
var ActivityListComponent = /** @class */ (function () {
    function ActivityListComponent(_routerExtensions, _careCardEventService, _careCardActivityService, _careCardService) {
        this._routerExtensions = _routerExtensions;
        this._careCardEventService = _careCardEventService;
        this._careCardActivityService = _careCardActivityService;
        this._careCardService = _careCardService;
    }
    ActivityListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._physicalActivities = new Array();
        this._assessmentActivities = new Array();
        this._otherActivities = new Array();
        this._medicationActivities = new Array();
        this._dateSubscription = this._careCardService.selectedDate$.subscribe(function (date) {
            _this._selectedDate = date;
            _this.isLoading = true;
            _this._careCardActivityService.createActivitiesWithEvents(date)
                .then(function (_a) {
                var physicalActivities = _a.physicalActivities, assessmentActivities = _a.assessmentActivities, otherActivities = _a.otherActivities, medicationActivities = _a.medicationActivities;
                _this.isLoading = false;
                _this._physicalActivities = physicalActivities;
                _this._assessmentActivities = assessmentActivities;
                _this._otherActivities = otherActivities;
                _this._medicationActivities = medicationActivities;
            });
        });
    };
    ActivityListComponent.prototype.ngOnDestroy = function () {
        this._dateSubscription.unsubscribe();
    };
    Object.defineProperty(ActivityListComponent.prototype, "physicalActivities", {
        get: function () {
            return this._physicalActivities;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityListComponent.prototype, "assessmentActivities", {
        get: function () {
            return this._assessmentActivities;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityListComponent.prototype, "otherActivities", {
        get: function () {
            return this._otherActivities;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityListComponent.prototype, "medicationActivities", {
        get: function () {
            return this._medicationActivities;
        },
        enumerable: true,
        configurable: true
    });
    ActivityListComponent.prototype.onActivityEventTap = function (activity, event) {
        event.value = event.value === 0 ? 1 : 0;
        this._careCardEventService.upsertEvent(event, activity.events.length);
    };
    ActivityListComponent.prototype.onActivityTap = function (activity) {
        this._routerExtensions.navigate([
            "care/activity-detail",
            activity.title,
            this._selectedDate.toISOString()
        ], {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ActivityListComponent.prototype, "kRow", void 0);
    ActivityListComponent = __decorate([
        core_1.Component({
            selector: "ActivityList",
            moduleId: module.id,
            templateUrl: "./activity-list.component.html",
            styleUrls: ["../../care-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            care_card_event_service_1.CareCardEventService,
            care_card_activity_service_1.CareCardActivityService,
            care_card_service_1.CareCardService])
    ], ActivityListComponent);
    return ActivityListComponent;
}());
exports.ActivityListComponent = ActivityListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHktbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpdml0eS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUNwRSxzREFBK0Q7QUFHL0QsbUZBQStFO0FBQy9FLDZFQUF5RTtBQUN6RSxpRUFBOEQ7QUFVOUQ7SUFZSSwrQkFDWSxpQkFBbUMsRUFDbkMscUJBQTJDLEVBQzNDLHdCQUFpRCxFQUNqRCxnQkFBaUM7UUFIakMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNuQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXNCO1FBQzNDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBeUI7UUFDakQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtJQUFJLENBQUM7SUFFbEQsd0NBQVEsR0FBUjtRQUFBLGlCQXlCQztRQXhCRyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxLQUFLLEVBQW9CLENBQUM7UUFDekQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksS0FBSyxFQUFvQixDQUFDO1FBQzNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLEtBQUssRUFBb0IsQ0FBQztRQUN0RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxLQUFLLEVBQW9CLENBQUM7UUFFM0QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBVTtZQUM5RSxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUV0QixLQUFJLENBQUMsd0JBQXdCLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDO2lCQUN6RCxJQUFJLENBQUMsVUFBQyxFQUtOO29CQUpHLDBDQUFrQixFQUNsQiw4Q0FBb0IsRUFDcEIsb0NBQWUsRUFDZiw4Q0FBb0I7Z0JBRXBCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUV2QixLQUFJLENBQUMsbUJBQW1CLEdBQUcsa0JBQWtCLENBQUM7Z0JBQzlDLEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxvQkFBb0IsQ0FBQztnQkFDbEQsS0FBSSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FBQztnQkFDeEMsS0FBSSxDQUFDLHFCQUFxQixHQUFHLG9CQUFvQixDQUFDO1lBQ3RELENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMkNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsc0JBQUkscURBQWtCO2FBQXRCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVEQUFvQjthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrREFBZTthQUFuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1REFBb0I7YUFBeEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsa0RBQWtCLEdBQWxCLFVBQW1CLFFBQTBCLEVBQUUsS0FBb0I7UUFDL0QsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsNkNBQWEsR0FBYixVQUFjLFFBQTBCO1FBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7WUFDNUIsc0JBQXNCO1lBQ3RCLFFBQVEsQ0FBQyxLQUFLO1lBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUU7U0FBQyxFQUNqQztZQUNJLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxNQUFNO2FBQ2hCO1NBQ0osQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQWxGUTtRQUFSLFlBQUssRUFBRTs7dURBQWM7SUFEYixxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLENBQUM7eUNBY2lDLHlCQUFnQjtZQUNaLDhDQUFvQjtZQUNqQixvREFBdUI7WUFDL0IsbUNBQWU7T0FoQnBDLHFCQUFxQixDQW9GakM7SUFBRCw0QkFBQztDQUFBLEFBcEZELElBb0ZDO0FBcEZZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IENhcmVDYXJkQWN0aXZpdHlTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9jYXJlLWNhcmQtYWN0aXZpdHkuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDYXJlQ2FyZEV2ZW50U2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvY2FyZS1jYXJkLWV2ZW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2FyZUNhcmRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9jYXJlLWNhcmQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDYXJlUGxhbkFjdGl2aXR5IH0gZnJvbSBcIi4uL3NoYXJlZC9jYXJlLXBsYW4tYWN0aXZpdHkubW9kZWxcIjtcclxuaW1wb3J0IHsgQ2FyZVBsYW5FdmVudCB9IGZyb20gXCIuLi9zaGFyZWQvY2FyZS1wbGFuLWV2ZW50Lm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkFjdGl2aXR5TGlzdFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYWN0aXZpdHktbGlzdC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuLi8uLi9jYXJlLWNvbW1vbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFjdGl2aXR5TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIEBJbnB1dCgpIGtSb3c6IG51bWJlcjtcclxuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcclxuXHJcbiAgICBwcml2YXRlIF9zZWxlY3RlZERhdGU6IERhdGU7XHJcbiAgICBwcml2YXRlIF9kYXRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgcHJpdmF0ZSBfcGh5c2ljYWxBY3Rpdml0aWVzOiBBcnJheTxDYXJlUGxhbkFjdGl2aXR5PjtcclxuICAgIHByaXZhdGUgX2Fzc2Vzc21lbnRBY3Rpdml0aWVzOiBBcnJheTxDYXJlUGxhbkFjdGl2aXR5PjtcclxuICAgIHByaXZhdGUgX290aGVyQWN0aXZpdGllczogQXJyYXk8Q2FyZVBsYW5BY3Rpdml0eT47XHJcbiAgICBwcml2YXRlIF9tZWRpY2F0aW9uQWN0aXZpdGllczogQXJyYXk8Q2FyZVBsYW5BY3Rpdml0eT47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIF9jYXJlQ2FyZEV2ZW50U2VydmljZTogQ2FyZUNhcmRFdmVudFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfY2FyZUNhcmRBY3Rpdml0eVNlcnZpY2U6IENhcmVDYXJkQWN0aXZpdHlTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2NhcmVDYXJkU2VydmljZTogQ2FyZUNhcmRTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9waHlzaWNhbEFjdGl2aXRpZXMgPSBuZXcgQXJyYXk8Q2FyZVBsYW5BY3Rpdml0eT4oKTtcclxuICAgICAgICB0aGlzLl9hc3Nlc3NtZW50QWN0aXZpdGllcyA9IG5ldyBBcnJheTxDYXJlUGxhbkFjdGl2aXR5PigpO1xyXG4gICAgICAgIHRoaXMuX290aGVyQWN0aXZpdGllcyA9IG5ldyBBcnJheTxDYXJlUGxhbkFjdGl2aXR5PigpO1xyXG4gICAgICAgIHRoaXMuX21lZGljYXRpb25BY3Rpdml0aWVzID0gbmV3IEFycmF5PENhcmVQbGFuQWN0aXZpdHk+KCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2RhdGVTdWJzY3JpcHRpb24gPSB0aGlzLl9jYXJlQ2FyZFNlcnZpY2Uuc2VsZWN0ZWREYXRlJC5zdWJzY3JpYmUoKGRhdGU6IERhdGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWREYXRlID0gZGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fY2FyZUNhcmRBY3Rpdml0eVNlcnZpY2UuY3JlYXRlQWN0aXZpdGllc1dpdGhFdmVudHMoZGF0ZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7XHJcbiAgICAgICAgICAgICAgICAgICAgcGh5c2ljYWxBY3Rpdml0aWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2Vzc21lbnRBY3Rpdml0aWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQWN0aXZpdGllcyxcclxuICAgICAgICAgICAgICAgICAgICBtZWRpY2F0aW9uQWN0aXZpdGllc1xyXG4gICAgICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY2FsQWN0aXZpdGllcyA9IHBoeXNpY2FsQWN0aXZpdGllcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hc3Nlc3NtZW50QWN0aXZpdGllcyA9IGFzc2Vzc21lbnRBY3Rpdml0aWVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX290aGVyQWN0aXZpdGllcyA9IG90aGVyQWN0aXZpdGllcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZWRpY2F0aW9uQWN0aXZpdGllcyA9IG1lZGljYXRpb25BY3Rpdml0aWVzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZGF0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwaHlzaWNhbEFjdGl2aXRpZXMoKTogQXJyYXk8Q2FyZVBsYW5BY3Rpdml0eT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9waHlzaWNhbEFjdGl2aXRpZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFzc2Vzc21lbnRBY3Rpdml0aWVzKCk6IEFycmF5PENhcmVQbGFuQWN0aXZpdHk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXNzZXNzbWVudEFjdGl2aXRpZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG90aGVyQWN0aXZpdGllcygpOiBBcnJheTxDYXJlUGxhbkFjdGl2aXR5PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX290aGVyQWN0aXZpdGllcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWVkaWNhdGlvbkFjdGl2aXRpZXMoKTogQXJyYXk8Q2FyZVBsYW5BY3Rpdml0eT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZWRpY2F0aW9uQWN0aXZpdGllcztcclxuICAgIH1cclxuXHJcbiAgICBvbkFjdGl2aXR5RXZlbnRUYXAoYWN0aXZpdHk6IENhcmVQbGFuQWN0aXZpdHksIGV2ZW50OiBDYXJlUGxhbkV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQudmFsdWUgPSBldmVudC52YWx1ZSA9PT0gMCA/IDEgOiAwO1xyXG4gICAgICAgIHRoaXMuX2NhcmVDYXJkRXZlbnRTZXJ2aWNlLnVwc2VydEV2ZW50KGV2ZW50LCBhY3Rpdml0eS5ldmVudHMubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjdGl2aXR5VGFwKGFjdGl2aXR5OiBDYXJlUGxhbkFjdGl2aXR5KSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXHJcbiAgICAgICAgICAgIFwiY2FyZS9hY3Rpdml0eS1kZXRhaWxcIixcclxuICAgICAgICAgICAgYWN0aXZpdHkudGl0bGUsXHJcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkRGF0ZS50b0lTT1N0cmluZygpXSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==