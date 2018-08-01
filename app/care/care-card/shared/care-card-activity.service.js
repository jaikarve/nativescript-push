"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var care_card_event_service_1 = require("./care-card-event.service");
var care_plan_activity_model_1 = require("./care-plan-activity.model");
var care_plan_event_model_1 = require("./care-plan-event.model");
var CareCardActivityService = /** @class */ (function () {
    function CareCardActivityService(_careCardEventService) {
        this._careCardEventService = _careCardEventService;
        this._activityStore = kinvey_nativescript_sdk_1.Kinvey.DataStore.collection("Activity");
        this._activities = new Array();
    }
    CareCardActivityService.prototype.getActivity = function (title) {
        var activity = this._activities.find(function (currentActivity) {
            return currentActivity.title === title;
        });
        return activity;
    };
    CareCardActivityService.prototype.getActivities = function () {
        var _this = this;
        if (!this._activitiesPromise) {
            this._activitiesPromise = this._activityStore.find().toPromise()
                .then(function (data) {
                var activities = [];
                if (data && data.length) {
                    data.forEach(function (activityData) {
                        var activity = new care_plan_activity_model_1.CarePlanActivity(activityData);
                        activities.push(activity);
                    });
                }
                _this._activities = activities;
                return activities;
            })
                .catch(function (error) {
                alert({
                    title: "Oops something went wrong.",
                    message: error.message,
                    okButtonText: "Ok"
                });
            });
        }
        return this._activitiesPromise;
    };
    CareCardActivityService.prototype.createActivitiesWithEvents = function (selectedDate) {
        var _this = this;
        var physicalActivities = new Array();
        var assessmentActivities = new Array();
        var otherActivities = new Array();
        var medicationActivities = new Array();
        return this.getActivities()
            .then(function (activities) {
            for (var _i = 0, activities_1 = activities; _i < activities_1.length; _i++) {
                var activity = activities_1[_i];
                activity.events = new Array();
                if (activity.type !== 2 /* ReadOnly */) {
                    activity.events = _this.createActivityEventPlaceholders(activity, selectedDate);
                }
                if (activity.groupIdentifier === "Physical Activity" /* Physical */) {
                    physicalActivities.push(activity);
                }
                else if (activity.groupIdentifier === "Assessment" /* Assessment */) {
                    assessmentActivities.push(activity);
                }
                else if (activity.groupIdentifier === "Medications" /* Medication */) {
                    medicationActivities.push(activity);
                }
                else if (activity.groupIdentifier === "Other" /* Other */) {
                    otherActivities.push(activity);
                }
            }
            var mapEventsPromises = [];
            mapEventsPromises.push(_this.mapEvents(physicalActivities, selectedDate));
            mapEventsPromises.push(_this.mapEvents(assessmentActivities, selectedDate));
            mapEventsPromises.push(_this.mapEvents(otherActivities, selectedDate));
            mapEventsPromises.push(_this.mapEvents(medicationActivities, selectedDate));
            return Promise.all(mapEventsPromises)
                .then(function () { return ({
                physicalActivities: physicalActivities,
                assessmentActivities: assessmentActivities,
                otherActivities: otherActivities,
                medicationActivities: medicationActivities
            }); });
        });
    };
    CareCardActivityService.prototype.mapEvents = function (activityCollection, selectedDate) {
        var _this = this;
        var savedEventsPromises = [];
        activityCollection.forEach(function (activity) {
            if (activity.type === 2 /* ReadOnly */) {
                return;
            }
            savedEventsPromises.push(_this._careCardEventService.findEvents(activity.title, selectedDate)
                .then(function (savedEvents) {
                if (savedEvents.length && activity.events.length) {
                    for (var _i = 0, savedEvents_1 = savedEvents; _i < savedEvents_1.length; _i++) {
                        var event_1 = savedEvents_1[_i];
                        activity.events[event_1.occurrenceIndexOfDay] = event_1;
                    }
                }
            }));
        });
        return Promise.all(savedEventsPromises);
    };
    CareCardActivityService.prototype.createActivityEventPlaceholders = function (activity, selectedDate) {
        var events = new Array();
        var day = selectedDate.getDay();
        var occurrencesForDay = activity.schedule.occurrences[day] || 0;
        for (var index_1 = 0; index_1 < occurrencesForDay; index_1++) {
            var event_2 = new care_plan_event_model_1.CarePlanEvent(activity, selectedDate, index_1);
            events.push(event_2);
        }
        return events;
    };
    CareCardActivityService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [care_card_event_service_1.CareCardEventService])
    ], CareCardActivityService);
    return CareCardActivityService;
}());
exports.CareCardActivityService = CareCardActivityService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZS1jYXJkLWFjdGl2aXR5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJlLWNhcmQtYWN0aXZpdHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxtRUFBaUQ7QUFFakQscUVBQWlFO0FBR2pFLHVFQUE4RDtBQUM5RCxpRUFBd0Q7QUFHeEQ7SUFNSSxpQ0FBb0IscUJBQTJDO1FBQTNDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBc0I7UUFMdkQsbUJBQWMsR0FBRyxnQ0FBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQU0sVUFBVSxDQUFDLENBQUM7UUFNbEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEtBQUssRUFBb0IsQ0FBQztJQUNyRCxDQUFDO0lBRUQsNkNBQVcsR0FBWCxVQUFZLEtBQWE7UUFDckIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBQyxlQUFlO1lBQ25ELE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVELCtDQUFhLEdBQWI7UUFBQSxpQkEyQkM7UUExQkcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRTtpQkFDM0QsSUFBSSxDQUFDLFVBQUMsSUFBSTtnQkFDUCxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7Z0JBRXRCLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFlBQWlCO3dCQUMzQixJQUFNLFFB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QUVPLGlFQUErQixHQUF2QyxVQUF3QyxRQUEwQixFQUFFLFlBQWtCO1FBQ2xGLElBQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFpQixDQUFDO1FBRTFDLElBQU0sR0FBRyxHQUFXLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQyxJQUFNLGlCQUFpQixHQUFXLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxRSxHQUFHLENBQUMsQ0FBQyxJQUFJLE9BQUssR0FBRyxDQUFDLEVBQUUsT0FBSyxHQUFHLGlCQUFpQixFQUFFLE9BQUssRUFBRSxFQUFFLENBQUM7WUFDckQsSUFBTSxPQUFLLEdBQUcsSUFBSSxxQ0FBYSxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsT0FBSyxDQUFDLENBQUM7WUFDL0QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDO1FBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBMUhRLHVCQUF1QjtRQURuQyxpQkFBVSxFQUFFO3lDQU9rQyw4Q0FBb0I7T0FOdEQsdUJBQXVCLENBMkhuQztJQUFELDhCQUFDO0NBQUEsQUEzSEQsSUEySEM7QUEzSFksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcblxuaW1wb3J0IHsgQ2FyZUNhcmRFdmVudFNlcnZpY2UgfSBmcm9tIFwiLi9jYXJlLWNhcmQtZXZlbnQuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2FyZVBsYW5BY3Rpdml0eUdyb3VwIH0gZnJvbSBcIi4vY2FyZS1wbGFuLWFjdGl2aXR5LWdyb3VwLmVudW1cIjtcbmltcG9ydCB7IENhcmVQbGFuQWN0aXZpdHlUeXBlIH0gZnJvbSBcIi4vY2FyZS1wbGFuLWFjdGl2aXR5LXR5cGUuZW51bVwiO1xuaW1wb3J0IHsgQ2FyZVBsYW5BY3Rpdml0eSB9IGZyb20gXCIuL2NhcmUtcGxhbi1hY3Rpdml0eS5tb2RlbFwiO1xuaW1wb3J0IHsgQ2FyZVBsYW5FdmVudCB9IGZyb20gXCIuL2NhcmUtcGxhbi1ldmVudC5tb2RlbFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FyZUNhcmRBY3Rpdml0eVNlcnZpY2Uge1xuICAgIHByaXZhdGUgX2FjdGl2aXR5U3RvcmUgPSBLaW52ZXkuRGF0YVN0b3JlLmNvbGxlY3Rpb248YW55PihcIkFjdGl2aXR5XCIpO1xuXG4gICAgcHJpdmF0ZSBfYWN0aXZpdGllczogQXJyYXk8Q2FyZVBsYW5BY3Rpdml0eT47XG4gICAgcHJpdmF0ZSBfYWN0aXZpdGllc1Byb21pc2U6IFByb21pc2U8YW55PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NhcmVDYXJkRXZlbnRTZXJ2aWNlOiBDYXJlQ2FyZEV2ZW50U2VydmljZSkge1xuICAgICAgICB0aGlzLl9hY3Rpdml0aWVzID0gbmV3IEFycmF5PENhcmVQbGFuQWN0aXZpdHk+KCk7XG4gICAgfVxuXG4gICAgZ2V0QWN0aXZpdHkodGl0bGU6IHN0cmluZyk6IENhcmVQbGFuQWN0aXZpdHkge1xuICAgICAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMuX2FjdGl2aXRpZXMuZmluZCgoY3VycmVudEFjdGl2aXR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEFjdGl2aXR5LnRpdGxlID09PSB0aXRsZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2aXR5O1xuICAgIH1cblxuICAgIGdldEFjdGl2aXRpZXMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9hY3Rpdml0aWVzUHJvbWlzZSkge1xuICAgICAgICAgICAgdGhpcy5fYWN0aXZpdGllc1Byb21pc2UgPSB0aGlzLl9hY3Rpdml0eVN0b3JlLmZpbmQoKS50b1Byb21pc2UoKVxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2aXRpZXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChhY3Rpdml0eURhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2aXR5ID0gbmV3IENhcmVQbGFuQWN0aXZpdHkoYWN0aXZpdHlEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpdml0aWVzLnB1c2goYWN0aXZpdHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY3Rpdml0aWVzID0gYWN0aXZpdGllcztcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aXZpdGllcztcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEtpbnZleS5CYXNlRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiT29wcyBzb21ldGhpbmcgd2VudCB3cm9uZy5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9hY3Rpdml0aWVzUHJvbWlzZTtcbiAgICB9XG5cbiAgICBjcmVhdGVBY3Rpdml0aWVzV2l0aEV2ZW50cyhzZWxlY3RlZERhdGU6IERhdGUpIHtcbiAgICAgICAgY29uc3QgcGh5c2ljYWxBY3Rpdml0aWVzID0gbmV3IEFycmF5PENhcmVQbGFuQWN0aXZpdHk+KCk7XG4gICAgICAgIGNvbnN0IGFzc2Vzc21lbnRBY3Rpdml0aWVzID0gbmV3IEFycmF5PENhcmVQbGFuQWN0aXZpdHk+KCk7XG4gICAgICAgIGNvbnN0IG90aGVyQWN0aXZpdGllcyA9IG5ldyBBcnJheTxDYXJlUGxhbkFjdGl2aXR5PigpO1xuICAgICAgICBjb25zdCBtZWRpY2F0aW9uQWN0aXZpdGllcyA9IG5ldyBBcnJheTxDYXJlUGxhbkFjdGl2aXR5PigpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdldEFjdGl2aXRpZXMoKVxuICAgICAgICAgICAgLnRoZW4oKGFjdGl2aXRpZXM6IEFycmF5PENhcmVQbGFuQWN0aXZpdHk+KSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBhY3Rpdml0aWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5LmV2ZW50cyA9IG5ldyBBcnJheTxDYXJlUGxhbkV2ZW50PigpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpdml0eS50eXBlICE9PSBDYXJlUGxhbkFjdGl2aXR5VHlwZS5SZWFkT25seSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZpdHkuZXZlbnRzID0gdGhpcy5jcmVhdGVBY3Rpdml0eUV2ZW50UGxhY2Vob2xkZXJzKGFjdGl2aXR5LCBzZWxlY3RlZERhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2aXR5Lmdyb3VwSWRlbnRpZmllciA9PT0gQ2FyZVBsYW5BY3Rpdml0eUdyb3VwLlBoeXNpY2FsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaHlzaWNhbEFjdGl2aXRpZXMucHVzaChhY3Rpdml0eSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aXZpdHkuZ3JvdXBJZGVudGlmaWVyID09PSBDYXJlUGxhbkFjdGl2aXR5R3JvdXAuQXNzZXNzbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXNzbWVudEFjdGl2aXRpZXMucHVzaChhY3Rpdml0eSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aXZpdHkuZ3JvdXBJZGVudGlmaWVyID09PSBDYXJlUGxhbkFjdGl2aXR5R3JvdXAuTWVkaWNhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWNhdGlvbkFjdGl2aXRpZXMucHVzaChhY3Rpdml0eSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aXZpdHkuZ3JvdXBJZGVudGlmaWVyID09PSBDYXJlUGxhbkFjdGl2aXR5R3JvdXAuT3RoZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyQWN0aXZpdGllcy5wdXNoKGFjdGl2aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IG1hcEV2ZW50c1Byb21pc2VzID0gW107XG4gICAgICAgICAgICAgICAgbWFwRXZlbnRzUHJvbWlzZXMucHVzaCh0aGlzLm1hcEV2ZW50cyhwaHlzaWNhbEFjdGl2aXRpZXMsIHNlbGVjdGVkRGF0ZSkpO1xuICAgICAgICAgICAgICAgIG1hcEV2ZW50c1Byb21pc2VzLnB1c2godGhpcy5tYXBFdmVudHMoYXNzZXNzbWVudEFjdGl2aXRpZXMsIHNlbGVjdGVkRGF0ZSkpO1xuICAgICAgICAgICAgICAgIG1hcEV2ZW50c1Byb21pc2VzLnB1c2godGhpcy5tYXBFdmVudHMob3RoZXJBY3Rpdml0aWVzLCBzZWxlY3RlZERhdGUpKTtcbiAgICAgICAgICAgICAgICBtYXBFdmVudHNQcm9taXNlcy5wdXNoKHRoaXMubWFwRXZlbnRzKG1lZGljYXRpb25BY3Rpdml0aWVzLCBzZWxlY3RlZERhdGUpKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChtYXBFdmVudHNQcm9taXNlcylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBoeXNpY2FsQWN0aXZpdGllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2Vzc21lbnRBY3Rpdml0aWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJBY3Rpdml0aWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWNhdGlvbkFjdGl2aXRpZXNcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtYXBFdmVudHMoYWN0aXZpdHlDb2xsZWN0aW9uOiBBcnJheTxDYXJlUGxhbkFjdGl2aXR5Piwgc2VsZWN0ZWREYXRlOiBEYXRlKSB7XG4gICAgICAgIGNvbnN0IHNhdmVkRXZlbnRzUHJvbWlzZXMgPSBbXTtcblxuICAgICAgICBhY3Rpdml0eUNvbGxlY3Rpb24uZm9yRWFjaCgoYWN0aXZpdHkpID0+IHtcbiAgICAgICAgICAgIGlmIChhY3Rpdml0eS50eXBlID09PSBDYXJlUGxhbkFjdGl2aXR5VHlwZS5SZWFkT25seSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2F2ZWRFdmVudHNQcm9taXNlcy5wdXNoKHRoaXMuX2NhcmVDYXJkRXZlbnRTZXJ2aWNlLmZpbmRFdmVudHMoYWN0aXZpdHkudGl0bGUsIHNlbGVjdGVkRGF0ZSlcbiAgICAgICAgICAgICAgICAudGhlbigoc2F2ZWRFdmVudHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNhdmVkRXZlbnRzLmxlbmd0aCAmJiBhY3Rpdml0eS5ldmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIHNhdmVkRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZpdHkuZXZlbnRzW2V2ZW50Lm9jY3VycmVuY2VJbmRleE9mRGF5XSA9IGV2ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoc2F2ZWRFdmVudHNQcm9taXNlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVBY3Rpdml0eUV2ZW50UGxhY2Vob2xkZXJzKGFjdGl2aXR5OiBDYXJlUGxhbkFjdGl2aXR5LCBzZWxlY3RlZERhdGU6IERhdGUpOiBBcnJheTxDYXJlUGxhbkV2ZW50PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IG5ldyBBcnJheTxDYXJlUGxhbkV2ZW50PigpO1xuXG4gICAgICAgIGNvbnN0IGRheTogbnVtYmVyID0gc2VsZWN0ZWREYXRlLmdldERheSgpO1xuICAgICAgICBjb25zdCBvY2N1cnJlbmNlc0ZvckRheTogbnVtYmVyID0gYWN0aXZpdHkuc2NoZWR1bGUub2NjdXJyZW5jZXNbZGF5XSB8fCAwO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBvY2N1cnJlbmNlc0ZvckRheTsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ2FyZVBsYW5FdmVudChhY3Rpdml0eSwgc2VsZWN0ZWREYXRlLCBpbmRleCk7XG4gICAgICAgICAgICBldmVudHMucHVzaChldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXZlbnRzO1xuICAgIH1cbn1cbiJdfQ==