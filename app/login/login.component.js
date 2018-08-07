"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-ui-dataform/angular");
var platform_1 = require("platform");
var dialogs_1 = require("ui/dialogs");
var page_1 = require("ui/page");
var login_form_model_1 = require("./login-form.model");
var user_service_1 = require("./shared/user.service");
var push_1 = require("kinvey-nativescript-sdk/push");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_page, _routerExtensions) {
        this._page = _page;
        this._routerExtensions = _routerExtensions;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.isLoading = false;
        this._page.actionBarHidden = true;
        this._loginForm = new login_form_model_1.LoginForm();
    };
    Object.defineProperty(LoginComponent.prototype, "loginForm", {
        get: function () {
            return this._loginForm;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onEditorUpdate = function (args) {
        // disable autocapitalization and autocorrection for email field
        if (platform_1.isIOS && args.propertyName === "email") {
            args.editor.editor.autocapitalizationType = 0 /* None */;
            args.editor.editor.autocorrectionType = 1 /* No */;
        }
    };
    LoginComponent.prototype.onSigninButtonTap = function () {
        var _this = this;
        if (this.loginFormElement.dataForm.hasValidationErrors()) {
            return;
        }
        this.isLoading = true;
        user_service_1.UserService.login(this._loginForm.email, this._loginForm.password)
            .then(function (user) {
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
                dialogs_1.alert("Device registered.  Access token: " + deviceToken);
                console.log("Device registered.  Access token: " + deviceToken);
            })
                .catch(function (error) {
                dialogs_1.alert("Error: " + error);
                console.log("Error: " + error);
            });
            _this._routerExtensions.navigate(["/care"], {
                clearHistory: true,
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });
            _this.isLoading = false;
        })
            .catch(function (error) {
            _this.isLoading = false;
            dialogs_1.alert({
                title: "Login failed",
                message: error.message,
                okButtonText: "Ok"
            });
        });
    };
    LoginComponent.prototype.onRegisterButtonTap = function () {
        this._routerExtensions.navigate(["/login/registration"], {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
    };
    __decorate([
        core_1.ViewChild("loginFormElement"),
        __metadata("design:type", angular_1.RadDataFormComponent)
    ], LoginComponent.prototype, "loginFormElement", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            templateUrl: "./login.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBRTdELHNEQUErRDtBQUUvRCw0REFBd0U7QUFDeEUscUNBQWlDO0FBQ2pDLHNDQUFtQztBQUNuQyxnQ0FBK0I7QUFFL0IsdURBQStDO0FBQy9DLHNEQUFvRDtBQUVwRCxxREFBb0Q7QUFRcEQ7SUFNSSx3QkFDWSxLQUFXLEVBQ1gsaUJBQW1DO1FBRG5DLFVBQUssR0FBTCxLQUFLLENBQU07UUFDWCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO0lBQzNDLENBQUM7SUFFTCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFFdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSw0QkFBUyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELHNCQUFJLHFDQUFTO2FBQWI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHVDQUFjLEdBQWQsVUFBZSxJQUF1QjtRQUNsQyxnRUFBZ0U7UUFDaEUsRUFBRSxDQUFDLENBQUMsZ0JBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsc0JBQXNCLGVBQW9DLENBQUM7WUFDOUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLGFBQThCLENBQUM7UUFDeEUsQ0FBQztJQUNMLENBQUM7SUFFRCwwQ0FBaUIsR0FBakI7UUFBQSxpQkFnREM7UUEvQ0csRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2RCxNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsMEJBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7YUFDN0QsSUFBSSxDQUFDLFVBQUMsSUFBaUI7WUFDcEIsV0FBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixPQUFPLEVBQUU7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCO2dCQUNELEdBQUcsRUFBRTtvQkFDSCxLQUFLLEVBQUUsSUFBSTtvQkFDWCxLQUFLLEVBQUUsSUFBSTtvQkFDWCxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNKLENBQUM7aUJBQ0QsSUFBSSxDQUFDLFVBQUMsV0FBbUI7Z0JBQ3RCLGVBQUssQ0FBQyxvQ0FBb0MsR0FBRyxXQUFXLENBQUMsQ0FBQztnQkFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsR0FBRyxXQUFXLENBQUMsQ0FBQztZQUNwRSxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBWTtnQkFDaEIsZUFBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQ3JDO2dCQUNJLFlBQVksRUFBRSxJQUFJO2dCQUNsQixRQUFRLEVBQUUsSUFBSTtnQkFDZCxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLE9BQU87b0JBQ2IsUUFBUSxFQUFFLEdBQUc7b0JBQ2IsS0FBSyxFQUFFLE1BQU07aUJBQ2hCO2FBQ0osQ0FBQyxDQUFDO1lBRVAsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBdUI7WUFDM0IsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsZUFBSyxDQUFDO2dCQUNGLEtBQUssRUFBRSxjQUFjO2dCQUNyQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ3RCLFlBQVksRUFBRSxJQUFJO2FBQ3JCLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDRDQUFtQixHQUFuQjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUNuRDtZQUNJLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxNQUFNO2FBQ2hCO1NBQ0osQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXpGOEI7UUFBOUIsZ0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQztrQ0FBbUIsOEJBQW9COzREQUFDO0lBRDdELGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBUXFCLFdBQUk7WUFDUSx5QkFBZ0I7T0FSdEMsY0FBYyxDQTJGMUI7SUFBRCxxQkFBQztDQUFBLEFBM0ZELElBMkZDO0FBM0ZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBEYXRhRm9ybUV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm1cIjtcbmltcG9ydCB7IFJhZERhdGFGb3JtQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgYWxlcnQgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbmltcG9ydCB7IExvZ2luRm9ybSB9IGZyb20gXCIuL2xvZ2luLWZvcm0ubW9kZWxcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3VzZXIuc2VydmljZVwiO1xuXG5pbXBvcnQgeyBQdXNoIH0gZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrL3B1c2hcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMb2dpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAVmlld0NoaWxkKFwibG9naW5Gb3JtRWxlbWVudFwiKSBsb2dpbkZvcm1FbGVtZW50OiBSYWREYXRhRm9ybUNvbXBvbmVudDtcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XG5cbiAgICBwcml2YXRlIF9sb2dpbkZvcm06IExvZ2luRm9ybTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9wYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fbG9naW5Gb3JtID0gbmV3IExvZ2luRm9ybSgpO1xuICAgIH1cblxuICAgIGdldCBsb2dpbkZvcm0oKTogTG9naW5Gb3JtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvZ2luRm9ybTtcbiAgICB9XG5cbiAgICBvbkVkaXRvclVwZGF0ZShhcmdzOiBEYXRhRm9ybUV2ZW50RGF0YSkge1xuICAgICAgICAvLyBkaXNhYmxlIGF1dG9jYXBpdGFsaXphdGlvbiBhbmQgYXV0b2NvcnJlY3Rpb24gZm9yIGVtYWlsIGZpZWxkXG4gICAgICAgIGlmIChpc0lPUyAmJiBhcmdzLnByb3BlcnR5TmFtZSA9PT0gXCJlbWFpbFwiKSB7XG4gICAgICAgICAgICBhcmdzLmVkaXRvci5lZGl0b3IuYXV0b2NhcGl0YWxpemF0aW9uVHlwZSA9IFVJVGV4dEF1dG9jYXBpdGFsaXphdGlvblR5cGUuTm9uZTtcbiAgICAgICAgICAgIGFyZ3MuZWRpdG9yLmVkaXRvci5hdXRvY29ycmVjdGlvblR5cGUgPSBVSVRleHRBdXRvY29ycmVjdGlvblR5cGUuTm87XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNpZ25pbkJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubG9naW5Gb3JtRWxlbWVudC5kYXRhRm9ybS5oYXNWYWxpZGF0aW9uRXJyb3JzKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICBVc2VyU2VydmljZS5sb2dpbih0aGlzLl9sb2dpbkZvcm0uZW1haWwsIHRoaXMuX2xvZ2luRm9ybS5wYXNzd29yZClcbiAgICAgICAgICAgIC50aGVuKCh1c2VyOiBLaW52ZXkuVXNlcikgPT4ge1xuICAgICAgICAgICAgICAgIFB1c2gucmVnaXN0ZXIoe1xuICAgICAgICAgICAgICAgICAgICBhbmRyb2lkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VuZGVySUQ6ICc5ODI5OTIyNDM5MzAnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGlvczoge1xuICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIGJhZGdlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIHNvdW5kOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChkZXZpY2VUb2tlbjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRGV2aWNlIHJlZ2lzdGVyZWQuICBBY2Nlc3MgdG9rZW46IFwiICsgZGV2aWNlVG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRldmljZSByZWdpc3RlcmVkLiAgQWNjZXNzIHRva2VuOiBcIiArIGRldmljZVRva2VuKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3I6IFwiICsgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9jYXJlXCJdLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEtpbnZleS5CYXNlRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTG9naW4gZmFpbGVkXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJlZ2lzdGVyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpbi9yZWdpc3RyYXRpb25cIl0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==