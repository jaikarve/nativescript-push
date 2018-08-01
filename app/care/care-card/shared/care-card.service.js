"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var care_card_activity_service_1 = require("./care-card-activity.service");
var care_card_event_service_1 = require("./care-card-event.service");
var CareCardService = /** @class */ (function () {
    function CareCardService(_careCardEventService, _careCardActivityService) {
        this._careCardEventService = _careCardEventService;
        this._careCardActivityService = _careCardActivityService;
        // Observable selectedDate source
        this._selectedDateItemSource = new rxjs_1.BehaviorSubject(new Date());
        // Observable selectedDate stream
        this.selectedDate$ = this._selectedDateItemSource.asObservable();
    }
    CareCardService.prototype.updateSelectedDate = function (date) {
        this._selectedDateItemSource.next(date);
    };
    CareCardService.prototype.getOverviewValue = function (date) {
        var _this = this;
        return this._careCardActivityService.getActivities().
            then(function (activities) {
            var overviewValue = 0;
            var totalEventsCount = 0;
            var savedEventsCount = 0;
            var savedEventsPromises = [];
            activities.forEach(function (activity) {
                if (activity.type === 2 /* ReadOnly */) {
                    return;
                }
                var day = date.getDay();
                totalEventsCount += activity.schedule.occurrences[day] || 0;
                savedEventsPromises.push(_this._careCardEventService.findEvents(activity.title, date));
            });
            return Promise.all(savedEventsPromises)
                .then(function (values) {
                values.forEach(function (savedEvents) {
                    savedEvents.forEach(function (savedEvent) {
                        if (savedEvent.value !== 0) {
                            savedEventsCount++;
                        }
                    });
                });
                overviewValue = (savedEventsCount / totalEventsCount) * 100;
                if (overviewValue) {
                    return parseFloat(overviewValue.toFixed(2));
                }
                else {
                    return 0;
                }
            });
        });
    };
    CareCardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [care_card_event_service_1.CareCardEventService,
            care_card_activity_service_1.CareCardActivityService])
    ], CareCardService);
    return CareCardService;
}());
exports.CareCardService = CareCardService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZS1jYXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJlLWNhcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2QkFBbUQ7QUFFbkQsMkVBQXVFO0FBQ3ZFLHFFQUFpRTtBQUtqRTtJQUtJLHlCQUNZLHFCQUEyQyxFQUMzQyx3QkFBaUQ7UUFEakQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFzQjtRQUMzQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQXlCO1FBRXpELGlDQUFpQztRQUNqQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxzQkFBZSxDQUFPLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUVyRSxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckUsQ0FBQztJQUVELDRDQUFrQixHQUFsQixVQUFtQixJQUFVO1FBQ3pCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDBDQUFnQixHQUFoQixVQUFpQixJQUFVO1FBQTNCLGlCQXVDQztRQXRDRyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGFBQWEsRUFBRTtZQUNoRCxJQUFJLENBQUMsVUFBQyxVQUFtQztZQUNyQyxJQUFJLGFBQWEsR0FBVyxDQUFDLENBQUM7WUFDOUIsSUFBSSxnQkFBZ0IsR0FBVyxDQUFDLENBQUM7WUFDakMsSUFBSSxnQkFBZ0IsR0FBVyxDQUFDLENBQUM7WUFFakMsSUFBTSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7WUFFL0IsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7Z0JBQ3hCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFCQUFrQyxDQUFDLENBQUMsQ0FBQztvQkFDbEQsTUFBTSxDQUFDO2dCQUNYLENBQUM7Z0JBRUQsSUFBTSxHQUFHLEdBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNsQyxnQkFBZ0IsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRTVELG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxRixDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO2lCQUNsQyxJQUFJLENBQUMsVUFBQyxNQUFNO2dCQUNULE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxXQUFXO29CQUN2QixXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsVUFBVTt3QkFDM0IsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN6QixnQkFBZ0IsRUFBRSxDQUFDO3dCQUN2QixDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO2dCQUVILGFBQWEsR0FBRyxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUU1RCxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUNoQixNQUFNLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNiLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQTNEUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBTzBCLDhDQUFvQjtZQUNqQixvREFBdUI7T0FQcEQsZUFBZSxDQTREM0I7SUFBRCxzQkFBQztDQUFBLEFBNURELElBNERDO0FBNURZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBDYXJlQ2FyZEFjdGl2aXR5U2VydmljZSB9IGZyb20gXCIuL2NhcmUtY2FyZC1hY3Rpdml0eS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYXJlQ2FyZEV2ZW50U2VydmljZSB9IGZyb20gXCIuL2NhcmUtY2FyZC1ldmVudC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYXJlUGxhbkFjdGl2aXR5VHlwZSB9IGZyb20gXCIuL2NhcmUtcGxhbi1hY3Rpdml0eS10eXBlLmVudW1cIjtcbmltcG9ydCB7IENhcmVQbGFuQWN0aXZpdHkgfSBmcm9tIFwiLi9jYXJlLXBsYW4tYWN0aXZpdHkubW9kZWxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcmVDYXJkU2VydmljZSB7XG4gICAgc2VsZWN0ZWREYXRlJDogT2JzZXJ2YWJsZTxEYXRlPjtcblxuICAgIHByaXZhdGUgX3NlbGVjdGVkRGF0ZUl0ZW1Tb3VyY2U6IEJlaGF2aW9yU3ViamVjdDxEYXRlPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9jYXJlQ2FyZEV2ZW50U2VydmljZTogQ2FyZUNhcmRFdmVudFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2NhcmVDYXJkQWN0aXZpdHlTZXJ2aWNlOiBDYXJlQ2FyZEFjdGl2aXR5U2VydmljZVxuICAgICkge1xuICAgICAgICAvLyBPYnNlcnZhYmxlIHNlbGVjdGVkRGF0ZSBzb3VyY2VcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWREYXRlSXRlbVNvdXJjZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RGF0ZT4obmV3IERhdGUoKSk7XG5cbiAgICAgICAgLy8gT2JzZXJ2YWJsZSBzZWxlY3RlZERhdGUgc3RyZWFtXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlJCA9IHRoaXMuX3NlbGVjdGVkRGF0ZUl0ZW1Tb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU2VsZWN0ZWREYXRlKGRhdGU6IERhdGUpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWREYXRlSXRlbVNvdXJjZS5uZXh0KGRhdGUpO1xuICAgIH1cblxuICAgIGdldE92ZXJ2aWV3VmFsdWUoZGF0ZTogRGF0ZSk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJlQ2FyZEFjdGl2aXR5U2VydmljZS5nZXRBY3Rpdml0aWVzKCkuXG4gICAgICAgICAgICB0aGVuKChhY3Rpdml0aWVzOiBBcnJheTxDYXJlUGxhbkFjdGl2aXR5PikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvdmVydmlld1ZhbHVlOiBudW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgIGxldCB0b3RhbEV2ZW50c0NvdW50OiBudW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBzYXZlZEV2ZW50c0NvdW50OiBudW1iZXIgPSAwO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2F2ZWRFdmVudHNQcm9taXNlcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgYWN0aXZpdGllcy5mb3JFYWNoKChhY3Rpdml0eSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZpdHkudHlwZSA9PT0gQ2FyZVBsYW5BY3Rpdml0eVR5cGUuUmVhZE9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRheTogbnVtYmVyID0gZGF0ZS5nZXREYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdG90YWxFdmVudHNDb3VudCArPSBhY3Rpdml0eS5zY2hlZHVsZS5vY2N1cnJlbmNlc1tkYXldIHx8IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgc2F2ZWRFdmVudHNQcm9taXNlcy5wdXNoKHRoaXMuX2NhcmVDYXJkRXZlbnRTZXJ2aWNlLmZpbmRFdmVudHMoYWN0aXZpdHkudGl0bGUsIGRhdGUpKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChzYXZlZEV2ZW50c1Byb21pc2VzKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgoc2F2ZWRFdmVudHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlZEV2ZW50cy5mb3JFYWNoKChzYXZlZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzYXZlZEV2ZW50LnZhbHVlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlZEV2ZW50c0NvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVydmlld1ZhbHVlID0gKHNhdmVkRXZlbnRzQ291bnQgLyB0b3RhbEV2ZW50c0NvdW50KSAqIDEwMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG92ZXJ2aWV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChvdmVydmlld1ZhbHVlLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=