"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var care_card_event_service_1 = require("../shared/care-card-event.service");
var care_card_service_1 = require("../shared/care-card.service");
var CareDashboardComponent = /** @class */ (function () {
    function CareDashboardComponent(_careCardService, _careCardEventService) {
        this._careCardService = _careCardService;
        this._careCardEventService = _careCardEventService;
    }
    CareDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.weeklyState = this.initializeWeeklyData();
        this._dateSubscription = this._careCardService.selectedDate$.subscribe(function (date) {
            _this._selectedDate = date;
        });
        this._eventSubscription = this._careCardEventService.updatedEvent$.subscribe(function (event) {
            // TODO: reconsider how to trigger this one-time operation
            // one option is a separate listener for eventService.getEvents()
            if (!event) {
                _this.weeklyState.forEach(function (weekItem) {
                    _this._careCardService.getOverviewValue(weekItem.date).then(function (value) {
                        _this.updateWeekItemValue(weekItem.date, value);
                    });
                });
                return;
            }
            if (event.date.toDateString() === _this._selectedDate.toDateString()) {
                _this._careCardService.getOverviewValue(_this._selectedDate).then(function (value) {
                    _this.updateWeekItemValue(_this._selectedDate, value);
                });
            }
        });
    };
    CareDashboardComponent.prototype.ngOnDestroy = function () {
        this._dateSubscription.unsubscribe();
        this._eventSubscription.unsubscribe();
    };
    Object.defineProperty(CareDashboardComponent.prototype, "selectedDate", {
        get: function () {
            return this._selectedDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CareDashboardComponent.prototype, "selectedValue", {
        get: function () {
            return this.weeklyState[this._selectedDate.getDay()].value;
        },
        enumerable: true,
        configurable: true
    });
    CareDashboardComponent.prototype.initializeWeeklyData = function () {
        var _this = this;
        var data = this.getWeeklyOverview();
        data.forEach(function (weekItem) {
            _this._careCardService.getOverviewValue(weekItem.date).then(function (value) {
                weekItem.value = value;
            });
        });
        return data;
    };
    CareDashboardComponent.prototype.onItemTap = function (weekItem) {
        this._careCardService.updateSelectedDate(weekItem.date);
    };
    CareDashboardComponent.prototype.updateWeekItemValue = function (selectedDate, value) {
        var weekItemToUpdate = this.weeklyState.find(function (weekItem) {
            return weekItem.date.toDateString() === selectedDate.toDateString();
        });
        if (weekItemToUpdate) {
            weekItemToUpdate.value = value;
        }
    };
    CareDashboardComponent.prototype.getWeeklyOverview = function () {
        var sunday = this.getPreviousSunday(new Date());
        var result = [];
        for (var i = 0; i < 7; i++) {
            var date = new Date(sunday);
            date.setDate(sunday.getDate() + i);
            result.push({
                date: date,
                value: 0
            });
        }
        return result;
    };
    CareDashboardComponent.prototype.getPreviousSunday = function (date) {
        var result = new Date(date);
        result.setDate(date.getDate() - date.getDay());
        return result;
    };
    CareDashboardComponent = __decorate([
        core_1.Component({
            selector: "CareDashboard",
            moduleId: module.id,
            templateUrl: "./care-dashboard.component.html",
            styleUrls: ["./care-dashboard.component.css", "../../care-common.css"]
        }),
        __metadata("design:paramtypes", [care_card_service_1.CareCardService,
            care_card_event_service_1.CareCardEventService])
    ], CareDashboardComponent);
    return CareDashboardComponent;
}());
exports.CareDashboardComponent = CareDashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZS1kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyZS1kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9FO0FBR3BFLDZFQUF5RTtBQUN6RSxpRUFBOEQ7QUFTOUQ7SUFPSSxnQ0FDWSxnQkFBaUMsRUFDakMscUJBQTJDO1FBRDNDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFzQjtJQUFJLENBQUM7SUFFNUQseUNBQVEsR0FBUjtRQUFBLGlCQTBCQztRQXpCRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBRS9DLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQVU7WUFDOUUsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFvQjtZQUM5RiwwREFBMEQ7WUFDMUQsaUVBQWlFO1lBQ2pFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDVCxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7b0JBQzlCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBSzt3QkFDN0QsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ25ELENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO2dCQUVILE1B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O0lBRU8sa0RBQWlCLEdBQXpCLFVBQTBCLElBQVU7UUFDaEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFL0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBbEdRLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUsdUJBQXVCLENBQUM7U0FDekUsQ0FBQzt5Q0FTZ0MsbUNBQWU7WUFDViw4Q0FBb0I7T0FUOUMsc0JBQXNCLENBbUdsQztJQUFELDZCQUFDO0NBQUEsQUFuR0QsSUFtR0M7QUFuR1ksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgQ2FyZUNhcmRFdmVudFNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2NhcmUtY2FyZC1ldmVudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENhcmVDYXJkU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvY2FyZS1jYXJkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2FyZVBsYW5FdmVudCB9IGZyb20gXCIuLi9zaGFyZWQvY2FyZS1wbGFuLWV2ZW50Lm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkNhcmVEYXNoYm9hcmRcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NhcmUtZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vY2FyZS1kYXNoYm9hcmQuY29tcG9uZW50LmNzc1wiLCBcIi4uLy4uL2NhcmUtY29tbW9uLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyZURhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIHdlZWtseVN0YXRlOiBBcnJheTxhbnk+O1xyXG5cclxuICAgIHByaXZhdGUgX3NlbGVjdGVkRGF0ZTogRGF0ZTtcclxuICAgIHByaXZhdGUgX2RhdGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgX2V2ZW50U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfY2FyZUNhcmRTZXJ2aWNlOiBDYXJlQ2FyZFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfY2FyZUNhcmRFdmVudFNlcnZpY2U6IENhcmVDYXJkRXZlbnRTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLndlZWtseVN0YXRlID0gdGhpcy5pbml0aWFsaXplV2Vla2x5RGF0YSgpO1xyXG5cclxuICAgICAgICB0aGlzLl9kYXRlU3Vic2NyaXB0aW9uID0gdGhpcy5fY2FyZUNhcmRTZXJ2aWNlLnNlbGVjdGVkRGF0ZSQuc3Vic2NyaWJlKChkYXRlOiBEYXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IGRhdGU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2V2ZW50U3Vic2NyaXB0aW9uID0gdGhpcy5fY2FyZUNhcmRFdmVudFNlcnZpY2UudXBkYXRlZEV2ZW50JC5zdWJzY3JpYmUoKGV2ZW50OiBDYXJlUGxhbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IHJlY29uc2lkZXIgaG93IHRvIHRyaWdnZXIgdGhpcyBvbmUtdGltZSBvcGVyYXRpb25cclxuICAgICAgICAgICAgLy8gb25lIG9wdGlvbiBpcyBhIHNlcGFyYXRlIGxpc3RlbmVyIGZvciBldmVudFNlcnZpY2UuZ2V0RXZlbnRzKClcclxuICAgICAgICAgICAgaWYgKCFldmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWVrbHlTdGF0ZS5mb3JFYWNoKCh3ZWVrSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhcmVDYXJkU2VydmljZS5nZXRPdmVydmlld1ZhbHVlKHdlZWtJdGVtLmRhdGUpLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlV2Vla0l0ZW1WYWx1ZSh3ZWVrSXRlbS5kYXRlLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRlLnRvRGF0ZVN0cmluZygpID09PSB0aGlzLl9zZWxlY3RlZERhdGUudG9EYXRlU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhcmVDYXJkU2VydmljZS5nZXRPdmVydmlld1ZhbHVlKHRoaXMuX3NlbGVjdGVkRGF0ZSkudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVdlZWtJdGVtVmFsdWUodGhpcy5fc2VsZWN0ZWREYXRlLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2RhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLl9ldmVudFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZWxlY3RlZERhdGUoKTogRGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2VsZWN0ZWRWYWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndlZWtseVN0YXRlW3RoaXMuX3NlbGVjdGVkRGF0ZS5nZXREYXkoKV0udmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZVdlZWtseURhdGEoKTogQXJyYXk8YW55PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0V2Vla2x5T3ZlcnZpZXcoKTtcclxuICAgICAgICBkYXRhLmZvckVhY2goKHdlZWtJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhcmVDYXJkU2VydmljZS5nZXRPdmVydmlld1ZhbHVlKHdlZWtJdGVtLmRhdGUpLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3ZWVrSXRlbS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgb25JdGVtVGFwKHdlZWtJdGVtOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jYXJlQ2FyZFNlcnZpY2UudXBkYXRlU2VsZWN0ZWREYXRlKHdlZWtJdGVtLmRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlV2Vla0l0ZW1WYWx1ZShzZWxlY3RlZERhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB3ZWVrSXRlbVRvVXBkYXRlID0gdGhpcy53ZWVrbHlTdGF0ZS5maW5kKCh3ZWVrSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gd2Vla0l0ZW0uZGF0ZS50b0RhdGVTdHJpbmcoKSA9PT0gc2VsZWN0ZWREYXRlLnRvRGF0ZVN0cmluZygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAod2Vla0l0ZW1Ub1VwZGF0ZSkge1xyXG4gICAgICAgICAgICB3ZWVrSXRlbVRvVXBkYXRlLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0V2Vla2x5T3ZlcnZpZXcoKTogQXJyYXk8YW55PiB7XHJcbiAgICAgICAgY29uc3Qgc3VuZGF5ID0gdGhpcy5nZXRQcmV2aW91c1N1bmRheShuZXcgRGF0ZSgpKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoc3VuZGF5KTtcclxuICAgICAgICAgICAgZGF0ZS5zZXREYXRlKHN1bmRheS5nZXREYXRlKCkgKyBpKTtcclxuXHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQcmV2aW91c1N1bmRheShkYXRlOiBEYXRlKTogRGF0ZSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgcmVzdWx0LnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkYXRlLmdldERheSgpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG4iXX0=