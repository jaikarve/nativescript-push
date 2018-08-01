"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var care_card_activity_service_1 = require("../shared/care-card-activity.service");
var care_card_event_service_1 = require("../shared/care-card-event.service");
var care_plan_event_model_1 = require("../shared/care-plan-event.model");
var IOS_KEYBOARDTYPE_DECIMALPAD = 8;
var ActivityDetailComponent = /** @class */ (function () {
    function ActivityDetailComponent(_careCardActivityService, _careCardEventService, _pageRoute, _routerExtensions) {
        this._careCardActivityService = _careCardActivityService;
        this._careCardEventService = _careCardEventService;
        this._pageRoute = _pageRoute;
        this._routerExtensions = _routerExtensions;
    }
    Object.defineProperty(ActivityDetailComponent.prototype, "activity", {
        get: function () {
            return this._activity;
        },
        enumerable: true,
        configurable: true
    });
    ActivityDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._pageRoute.activatedRoute
            .pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; }))
            .forEach(function (params) {
            _this._activity = _this._careCardActivityService.getActivity(params.title);
            _this._selectedDate = new Date(params.date);
            _this.isReadOnlyActivity = _this._activity.type !== 1 /* Assessment */;
            _this._careCardEventService.findEvents(params.title, _this._selectedDate)
                .then(function (events) {
                if (events && events.length) {
                    _this.event = events[0];
                    _this.value = _this.event.value;
                }
            });
        });
    };
    ActivityDetailComponent.prototype.onNumericFieldLoaded = function (args) {
        var numericField = args.object;
        if (numericField.ios) {
            numericField.ios.keyboardType = IOS_KEYBOARDTYPE_DECIMALPAD;
        }
    };
    ActivityDetailComponent.prototype.onDoneButtonTap = function () {
        var _this = this;
        // TextField input comes as numeric string
        this.value = +this.value;
        if (this.value > 0) {
            if (this.event) {
                this.event.value = this.value;
            }
            else {
                this.event = new care_plan_event_model_1.CarePlanEvent(this._activity, this._selectedDate, 0);
            }
            this.event.value = this.value;
            this._careCardEventService.upsertEvent(this.event, 1)
                .then(function () { return _this.navigateToCareCard(); });
        }
    };
    ActivityDetailComponent.prototype.onBackButtonTap = function () {
        this._routerExtensions.backToPreviousPage();
    };
    ActivityDetailComponent.prototype.navigateToCareCard = function () {
        this._routerExtensions.navigate([
            "care"
        ], {
            clearHistory: true,
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
    };
    ActivityDetailComponent = __decorate([
        core_1.Component({
            selector: "ActivityDetails",
            moduleId: module.id,
            templateUrl: "./activity-detail.component.html",
            styleUrls: ["./activity-detail.component.css", "../../care-common.css"]
        }),
        __metadata("design:paramtypes", [care_card_activity_service_1.CareCardActivityService,
            care_card_event_service_1.CareCardEventService,
            router_1.PageRoute,
            router_1.RouterExtensions])
    ], ActivityDetailComponent);
    return ActivityDetailComponent;
}());
exports.ActivityDetailComponent = ActivityDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHktZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2aXR5LWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsc0RBQTBFO0FBQzFFLDRDQUEyQztBQUczQyxtRkFBK0U7QUFDL0UsNkVBQXlFO0FBR3pFLHlFQUFnRTtBQUVoRSxJQUFNLDJCQUEyQixHQUFXLENBQUMsQ0FBQztBQVE5QztJQVFJLGlDQUNZLHdCQUFpRCxFQUNqRCxxQkFBMkMsRUFDM0MsVUFBcUIsRUFDckIsaUJBQW1DO1FBSG5DLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBeUI7UUFDakQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFzQjtRQUMzQyxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQ3JCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7SUFDM0MsQ0FBQztJQUVMLHNCQUFJLDZDQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVELDBDQUFRLEdBQVI7UUFBQSxpQkFnQkM7UUFmRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWM7YUFDekIsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBQyxjQUFjLElBQUssT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDLENBQUM7YUFDMUQsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNaLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsS0FBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSx1QkFBb0MsQ0FBQztZQUVsRixLQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQztpQkFDbEUsSUFBSSxDQUFDLFVBQUMsTUFBNEI7Z0JBQy9CLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDMUIsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7Z0JBQ2xDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHNEQUFvQixHQUFwQixVQUFxQixJQUFlO1FBQ2hDLElBQU0sWUFBWSxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbkIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsMkJBQTJCLENBQUM7UUFDaEUsQ0FBQztJQUNMLENBQUM7SUFFRCxpREFBZSxHQUFmO1FBQUEsaUJBZ0JDO1FBZkcsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRXpCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDYixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2xDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUkscUNBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUUsQ0FBQztZQUVELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFOUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztpQkFDaEQsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO1FBQy9DLENBQUM7SUFDTCxDQUFDO0lBRUQsaURBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFTyxvREFBa0IsR0FBMUI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDO1lBQzVCLE1BQU07U0FBQyxFQUNQO1lBQ0ksWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLE1BQU07YUFDaEI7U0FDSixDQUFDLENBQUM7SUFDWCxDQUFDO0lBOUVRLHVCQUF1QjtRQU5uQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsRUFBRSx1QkFBdUIsQ0FBQztTQUMxRSxDQUFDO3lDQVV3QyxvREFBdUI7WUFDMUIsOENBQW9CO1lBQy9CLGtCQUFTO1lBQ0YseUJBQWdCO09BWnRDLHVCQUF1QixDQStFbkM7SUFBRCw4QkFBQztDQUFBLEFBL0VELElBK0VDO0FBL0VZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcblxuaW1wb3J0IHsgQ2FyZUNhcmRBY3Rpdml0eVNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2NhcmUtY2FyZC1hY3Rpdml0eS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYXJlQ2FyZEV2ZW50U2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvY2FyZS1jYXJkLWV2ZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7IENhcmVQbGFuQWN0aXZpdHlUeXBlIH0gZnJvbSBcIi4uL3NoYXJlZC9jYXJlLXBsYW4tYWN0aXZpdHktdHlwZS5lbnVtXCI7XG5pbXBvcnQgeyBDYXJlUGxhbkFjdGl2aXR5IH0gZnJvbSBcIi4uL3NoYXJlZC9jYXJlLXBsYW4tYWN0aXZpdHkubW9kZWxcIjtcbmltcG9ydCB7IENhcmVQbGFuRXZlbnQgfSBmcm9tIFwiLi4vc2hhcmVkL2NhcmUtcGxhbi1ldmVudC5tb2RlbFwiO1xuXG5jb25zdCBJT1NfS0VZQk9BUkRUWVBFX0RFQ0lNQUxQQUQ6IG51bWJlciA9IDg7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkFjdGl2aXR5RGV0YWlsc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hY3Rpdml0eS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vYWN0aXZpdHktZGV0YWlsLmNvbXBvbmVudC5jc3NcIiwgXCIuLi8uLi9jYXJlLWNvbW1vbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZpdHlEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGlzUmVhZE9ubHlBY3Rpdml0eTogYm9vbGVhbjtcbiAgICB2YWx1ZTogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWREYXRlOiBEYXRlO1xuICAgIHByaXZhdGUgX2FjdGl2aXR5OiBDYXJlUGxhbkFjdGl2aXR5O1xuICAgIHByaXZhdGUgZXZlbnQ6IENhcmVQbGFuRXZlbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfY2FyZUNhcmRBY3Rpdml0eVNlcnZpY2U6IENhcmVDYXJkQWN0aXZpdHlTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9jYXJlQ2FyZEV2ZW50U2VydmljZTogQ2FyZUNhcmRFdmVudFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3BhZ2VSb3V0ZTogUGFnZVJvdXRlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgKSB7IH1cblxuICAgIGdldCBhY3Rpdml0eSgpOiBDYXJlUGxhbkFjdGl2aXR5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2aXR5O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcbiAgICAgICAgICAgIC5waXBlKHN3aXRjaE1hcCgoYWN0aXZhdGVkUm91dGUpID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcykpXG4gICAgICAgICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZpdHkgPSB0aGlzLl9jYXJlQ2FyZEFjdGl2aXR5U2VydmljZS5nZXRBY3Rpdml0eShwYXJhbXMudGl0bGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKHBhcmFtcy5kYXRlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVhZE9ubHlBY3Rpdml0eSA9IHRoaXMuX2FjdGl2aXR5LnR5cGUgIT09IENhcmVQbGFuQWN0aXZpdHlUeXBlLkFzc2Vzc21lbnQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9jYXJlQ2FyZEV2ZW50U2VydmljZS5maW5kRXZlbnRzKHBhcmFtcy50aXRsZSwgdGhpcy5fc2VsZWN0ZWREYXRlKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZXZlbnRzOiBBcnJheTxDYXJlUGxhbkV2ZW50PikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50cyAmJiBldmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudCA9IGV2ZW50c1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5ldmVudC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbk51bWVyaWNGaWVsZExvYWRlZChhcmdzOiBFdmVudERhdGEpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbnVtZXJpY0ZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcbiAgICAgICAgaWYgKG51bWVyaWNGaWVsZC5pb3MpIHtcbiAgICAgICAgICAgIG51bWVyaWNGaWVsZC5pb3Mua2V5Ym9hcmRUeXBlID0gSU9TX0tFWUJPQVJEVFlQRV9ERUNJTUFMUEFEO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Eb25lQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICAvLyBUZXh0RmllbGQgaW5wdXQgY29tZXMgYXMgbnVtZXJpYyBzdHJpbmdcbiAgICAgICAgdGhpcy52YWx1ZSA9ICt0aGlzLnZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLnZhbHVlID4gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50LnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudCA9IG5ldyBDYXJlUGxhbkV2ZW50KHRoaXMuX2FjdGl2aXR5LCB0aGlzLl9zZWxlY3RlZERhdGUsIDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmV2ZW50LnZhbHVlID0gdGhpcy52YWx1ZTtcblxuICAgICAgICAgICAgdGhpcy5fY2FyZUNhcmRFdmVudFNlcnZpY2UudXBzZXJ0RXZlbnQodGhpcy5ldmVudCwgMSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLm5hdmlnYXRlVG9DYXJlQ2FyZCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQmFja0J1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG5hdmlnYXRlVG9DYXJlQ2FyZCgpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXG4gICAgICAgICAgICBcImNhcmVcIl0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=