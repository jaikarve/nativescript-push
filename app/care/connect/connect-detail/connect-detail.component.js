"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var email = require("nativescript-email");
var phoneModule = require("nativescript-phone");
var operators_1 = require("rxjs/operators");
var connect_service_1 = require("../shared/connect.service");
var ConnectDetailComponent = /** @class */ (function () {
    function ConnectDetailComponent(_connectService, _pageRoute, _routerExtensions) {
        this._connectService = _connectService;
        this._pageRoute = _pageRoute;
        this._routerExtensions = _routerExtensions;
    }
    ConnectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._pageRoute.activatedRoute
            .pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; }))
            .forEach(function (params) {
            var contactId = params.id;
            _this._contact = _this._connectService.getContactById(contactId);
        });
    };
    Object.defineProperty(ConnectDetailComponent.prototype, "contact", {
        get: function () {
            return this._contact;
        },
        enumerable: true,
        configurable: true
    });
    ConnectDetailComponent.prototype.onBackButtonTap = function () {
        this._routerExtensions.backToPreviousPage();
    };
    ConnectDetailComponent.prototype.onInfoButtonTap = function (contactInfo) {
        var phone = contactInfo.displayString.replace(/\s/g, "");
        if (contactInfo.type === 0) {
            phoneModule.dial(phone, true);
        }
        else if (contactInfo.type === 1) {
            phoneModule.sms([phone], "");
        }
        else {
            var composeOptions_1 = {
                to: [contactInfo.displayString]
            };
            email.available().then(function (available) {
                if (available) {
                    email.compose(composeOptions_1);
                }
            });
        }
    };
    ConnectDetailComponent = __decorate([
        core_1.Component({
            selector: "ConnectDetail",
            moduleId: module.id,
            templateUrl: "./connect-detail.component.html",
            styleUrls: ["../connect.component.css", "../../care-common.css"]
        }),
        __metadata("design:paramtypes", [connect_service_1.ConnectService,
            router_1.PageRoute,
            router_1.RouterExtensions])
    ], ConnectDetailComponent);
    return ConnectDetailComponent;
}());
exports.ConnectDetailComponent = ConnectDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29ubmVjdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUEwRTtBQUMxRSwwQ0FBNEM7QUFDNUMsZ0RBQWtEO0FBQ2xELDRDQUEyQztBQUUzQyw2REFBMkQ7QUFVM0Q7SUFHSSxnQ0FDWSxlQUErQixFQUMvQixVQUFxQixFQUNyQixpQkFBbUM7UUFGbkMsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLGVBQVUsR0FBVixVQUFVLENBQVc7UUFDckIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtJQUMzQyxDQUFDO0lBRUwseUNBQVEsR0FBUjtRQUFBLGlCQVFDO1FBTkcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjO2FBQ3pCLElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQUMsY0FBYyxJQUFLLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO2FBQzFELE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDWixJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsc0JBQUksMkNBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsZ0RBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRCxnREFBZSxHQUFmLFVBQWdCLFdBQXdCO1FBQ3BDLElBQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUzRCxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQU0sZ0JBQWMsR0FBeUI7Z0JBQ3pDLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7YUFDbEMsQ0FBQztZQUVGLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxTQUFrQjtnQkFDdEMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDWixLQUFLLENBQUMsT0FBTyxDQUFDLGdCQUFjLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7SUE3Q1Esc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSx1QkFBdUIsQ0FBQztTQUNuRSxDQUFDO3lDQUsrQixnQ0FBYztZQUNuQixrQkFBUztZQUNGLHlCQUFnQjtPQU50QyxzQkFBc0IsQ0E4Q2xDO0lBQUQsNkJBQUM7Q0FBQSxBQTlDRCxJQThDQztBQTlDWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlUm91dGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBlbWFpbCBmcm9tIFwibmF0aXZlc2NyaXB0LWVtYWlsXCI7XG5pbXBvcnQgKiBhcyBwaG9uZU1vZHVsZSBmcm9tIFwibmF0aXZlc2NyaXB0LXBob25lXCI7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuaW1wb3J0IHsgQ29ubmVjdFNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2Nvbm5lY3Quc2VydmljZVwiO1xuaW1wb3J0IHsgQ29udGFjdEluZm8gfSBmcm9tIFwiLi4vc2hhcmVkL2NvbnRhY3QtaW5mby5tb2RlbFwiO1xuaW1wb3J0IHsgQ29udGFjdCB9IGZyb20gXCIuLi9zaGFyZWQvY29udGFjdC5tb2RlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJDb25uZWN0RGV0YWlsXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2Nvbm5lY3QtZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuLi9jb25uZWN0LmNvbXBvbmVudC5jc3NcIiwgXCIuLi8uLi9jYXJlLWNvbW1vbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQ29ubmVjdERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfY29udGFjdDogQ29udGFjdDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9jb25uZWN0U2VydmljZTogQ29ubmVjdFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3BhZ2VSb3V0ZTogUGFnZVJvdXRlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuX3BhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxuICAgICAgICAgICAgLnBpcGUoc3dpdGNoTWFwKChhY3RpdmF0ZWRSb3V0ZSkgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWN0SWQgPSBwYXJhbXMuaWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGFjdCA9IHRoaXMuX2Nvbm5lY3RTZXJ2aWNlLmdldENvbnRhY3RCeUlkKGNvbnRhY3RJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgY29udGFjdCgpOiBDb250YWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRhY3Q7XG4gICAgfVxuXG4gICAgb25CYWNrQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICAgIH1cblxuICAgIG9uSW5mb0J1dHRvblRhcChjb250YWN0SW5mbzogQ29udGFjdEluZm8pIHtcbiAgICAgICAgY29uc3QgcGhvbmUgPSBjb250YWN0SW5mby5kaXNwbGF5U3RyaW5nLnJlcGxhY2UoL1xccy9nLCBcIlwiKTtcblxuICAgICAgICBpZiAoY29udGFjdEluZm8udHlwZSA9PT0gMCkge1xuICAgICAgICAgICAgcGhvbmVNb2R1bGUuZGlhbChwaG9uZSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29udGFjdEluZm8udHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgcGhvbmVNb2R1bGUuc21zKFtwaG9uZV0sIFwiXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY29tcG9zZU9wdGlvbnM6IGVtYWlsLkNvbXBvc2VPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHRvOiBbY29udGFjdEluZm8uZGlzcGxheVN0cmluZ11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGVtYWlsLmF2YWlsYWJsZSgpLnRoZW4oKGF2YWlsYWJsZTogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhdmFpbGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWwuY29tcG9zZShjb21wb3NlT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=