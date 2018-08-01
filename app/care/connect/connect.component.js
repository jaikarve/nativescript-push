"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var router_1 = require("nativescript-angular/router");
var connect_service_1 = require("./shared/connect.service");
var ConnectComponent = /** @class */ (function () {
    function ConnectComponent(_routerExtensions, _connectService) {
        this._routerExtensions = _routerExtensions;
        this._connectService = _connectService;
    }
    Object.defineProperty(ConnectComponent.prototype, "name", {
        get: function () {
            if (this._name) {
                return this._name;
            }
            var activeUser = kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser();
            if (activeUser) {
                var givenName = activeUser.data.givenName;
                var familyName = activeUser.data.familyName;
                if (givenName && familyName) {
                    this._name = "" + (givenName + " " + familyName);
                }
                return this._name;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectComponent.prototype, "monogram", {
        get: function () {
            if (this._monogram) {
                return this._monogram;
            }
            var activeUser = kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser();
            if (activeUser) {
                var givenName = activeUser.data.givenName;
                var familyName = activeUser.data.familyName;
                if (givenName && familyName) {
                    this._monogram = givenName.charAt(0) + familyName.charAt(0);
                }
                return this._monogram;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectComponent.prototype, "careTeamItems", {
        get: function () {
            return this._careTeamItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectComponent.prototype, "friendsFamilyItems", {
        get: function () {
            return this._friendsFamilyItems;
        },
        enumerable: true,
        configurable: true
    });
    ConnectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this._connectService.getContacts()
            .then(function (contacts) {
            _this.isLoading = false;
            _this._careTeamItems = _this.getContactsByType(contacts, 0);
            _this._friendsFamilyItems = _this.getContactsByType(contacts, 1);
        });
    };
    ConnectComponent.prototype.onContactTap = function (contact) {
        this._routerExtensions.navigate(["care/connect-detail", contact.id], {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
    };
    ConnectComponent.prototype.getContactsByType = function (contacts, type) {
        return contacts.filter(function (contact) {
            return contact.type === type;
        });
    };
    ConnectComponent = __decorate([
        core_1.Component({
            selector: "Connect",
            moduleId: module.id,
            templateUrl: "./connect.component.html",
            styleUrls: ["./connect.component.css", "../care-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            connect_service_1.ConnectService])
    ], ConnectComponent);
    return ConnectComponent;
}());
exports.ConnectComponent = ConnectComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25uZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxtRUFBaUQ7QUFDakQsc0RBQStEO0FBRS9ELDREQUEwRDtBQVMxRDtJQVFJLDBCQUNZLGlCQUFtQyxFQUNuQyxlQUErQjtRQUQvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUMzQyxDQUFDO0lBRUQsc0JBQUksa0NBQUk7YUFBUjtZQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUM7WUFFRCxJQUFNLFVBQVUsR0FBUSxnQ0FBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUVwRCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNiLElBQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUM1QyxJQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFFOUMsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBRyxTQUFTLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBRSxDQUFDO2dCQUNuRCxDQUFDO2dCQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUM7UUFDTCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHNDQUFRO2FBQVo7WUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQztZQUVELElBQU0sVUFBVSxHQUFRLGdDQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBRXBELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsSUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQzVDLElBQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUU5QyxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hFLENBQUM7Z0JBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQztRQUNMLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkNBQWE7YUFBakI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdEQUFrQjthQUF0QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRTthQUM3QixJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ1gsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFELEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxPQUFnQjtRQUN6QixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMscUJBQXFCLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUMvRDtZQUNJLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxNQUFNO2FBQ2hCO1NBQ0osQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVPLDRDQUFpQixHQUF6QixVQUEwQixRQUF3QixFQUFFLElBQVk7UUFDNUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxPQUFPO1lBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF0RlEsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxvQkFBb0IsQ0FBQztTQUMvRCxDQUFDO3lDQVVpQyx5QkFBZ0I7WUFDbEIsZ0NBQWM7T0FWbEMsZ0JBQWdCLENBdUY1QjtJQUFELHVCQUFDO0NBQUEsQUF2RkQsSUF1RkM7QUF2RlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBDb25uZWN0U2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9jb25uZWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tIFwiLi9zaGFyZWQvY29udGFjdC5tb2RlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJDb25uZWN0XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2Nvbm5lY3QuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vY29ubmVjdC5jb21wb25lbnQuY3NzXCIsIFwiLi4vY2FyZS1jb21tb24uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIENvbm5lY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcblxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIF9tb25vZ3JhbTogc3RyaW5nO1xuICAgIHByaXZhdGUgX2NhcmVUZWFtSXRlbXM6IEFycmF5PENvbnRhY3Q+O1xuICAgIHByaXZhdGUgX2ZyaWVuZHNGYW1pbHlJdGVtczogQXJyYXk8Q29udGFjdD47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBfY29ubmVjdFNlcnZpY2U6IENvbm5lY3RTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuX25hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWN0aXZlVXNlcjogYW55ID0gS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpO1xuXG4gICAgICAgIGlmIChhY3RpdmVVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBnaXZlbk5hbWUgPSBhY3RpdmVVc2VyLmRhdGEuZ2l2ZW5OYW1lO1xuICAgICAgICAgICAgY29uc3QgZmFtaWx5TmFtZSA9IGFjdGl2ZVVzZXIuZGF0YS5mYW1pbHlOYW1lO1xuXG4gICAgICAgICAgICBpZiAoZ2l2ZW5OYW1lICYmIGZhbWlseU5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9uYW1lID0gYCR7Z2l2ZW5OYW1lICsgXCIgXCIgKyBmYW1pbHlOYW1lfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IG1vbm9ncmFtKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLl9tb25vZ3JhbSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbm9ncmFtO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWN0aXZlVXNlcjogYW55ID0gS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpO1xuXG4gICAgICAgIGlmIChhY3RpdmVVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBnaXZlbk5hbWUgPSBhY3RpdmVVc2VyLmRhdGEuZ2l2ZW5OYW1lO1xuICAgICAgICAgICAgY29uc3QgZmFtaWx5TmFtZSA9IGFjdGl2ZVVzZXIuZGF0YS5mYW1pbHlOYW1lO1xuXG4gICAgICAgICAgICBpZiAoZ2l2ZW5OYW1lICYmIGZhbWlseU5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb25vZ3JhbSA9IGdpdmVuTmFtZS5jaGFyQXQoMCkgKyBmYW1pbHlOYW1lLmNoYXJBdCgwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbm9ncmFtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGNhcmVUZWFtSXRlbXMoKTogQXJyYXk8Q29udGFjdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FyZVRlYW1JdGVtcztcbiAgICB9XG5cbiAgICBnZXQgZnJpZW5kc0ZhbWlseUl0ZW1zKCk6IEFycmF5PENvbnRhY3Q+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZyaWVuZHNGYW1pbHlJdGVtcztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuX2Nvbm5lY3RTZXJ2aWNlLmdldENvbnRhY3RzKClcbiAgICAgICAgICAgIC50aGVuKChjb250YWN0cykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FyZVRlYW1JdGVtcyA9IHRoaXMuZ2V0Q29udGFjdHNCeVR5cGUoY29udGFjdHMsIDApO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZyaWVuZHNGYW1pbHlJdGVtcyA9IHRoaXMuZ2V0Q29udGFjdHNCeVR5cGUoY29udGFjdHMsIDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25Db250YWN0VGFwKGNvbnRhY3Q6IENvbnRhY3QpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJjYXJlL2Nvbm5lY3QtZGV0YWlsXCIsIGNvbnRhY3QuaWRdLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENvbnRhY3RzQnlUeXBlKGNvbnRhY3RzOiBBcnJheTxDb250YWN0PiwgdHlwZTogbnVtYmVyKTogQXJyYXk8Q29udGFjdD4ge1xuICAgICAgICByZXR1cm4gY29udGFjdHMuZmlsdGVyKChjb250YWN0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY29udGFjdC50eXBlID09PSB0eXBlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=