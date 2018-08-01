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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBRTdELHNEQUErRDtBQUUvRCw0REFBd0U7QUFDeEUscUNBQWlDO0FBQ2pDLHNDQUFtQztBQUNuQyxnQ0FBK0I7QUFFL0IsdURBQStDO0FBQy9DLHNEQUFvRDtBQU9wRDtJQU1JLHdCQUNZLEtBQVcsRUFDWCxpQkFBbUM7UUFEbkMsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNYLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7SUFDM0MsQ0FBQztJQUVMLGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUV2QixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLDRCQUFTLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsc0JBQUkscUNBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsdUNBQWMsR0FBZCxVQUFlLElBQXVCO1FBQ2xDLGdFQUFnRTtRQUNoRSxFQUFFLENBQUMsQ0FBQyxnQkFBSyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsZUFBb0MsQ0FBQztZQUM5RSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsYUFBOEIsQ0FBQztRQUN4RSxDQUFDO0lBQ0wsQ0FBQztJQUVELDBDQUFpQixHQUFqQjtRQUFBLGlCQThCQztRQTdCRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELE1BQU0sQ0FBQztRQUNYLENBQUM7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QiwwQkFBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQzthQUM3RCxJQUFJLENBQUMsVUFBQyxJQUFpQjtZQUNwQixLQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQ3JDO2dCQUNJLFlBQVksRUFBRSxJQUFJO2dCQUNsQixRQUFRLEVBQUUsSUFBSTtnQkFDZCxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLE9BQU87b0JBQ2IsUUFBUSxFQUFFLEdBQUc7b0JBQ2IsS0FBSyxFQUFFLE1BQU07aUJBQ2hCO2FBQ0osQ0FBQyxDQUFDO1lBRVAsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBdUI7WUFDM0IsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsZUFBSyxDQUFDO2dCQUNGLEtBQUssRUFBRSxjQUFjO2dCQUNyQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ3RCLFlBQVksRUFBRSxJQUFJO2FBQ3JCLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDRDQUFtQixHQUFuQjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUNuRDtZQUNJLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxNQUFNO2FBQ2hCO1NBQ0osQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXZFOEI7UUFBOUIsZ0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQztrQ0FBbUIsOEJBQW9COzREQUFDO0lBRDdELGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBUXFCLFdBQUk7WUFDUSx5QkFBZ0I7T0FSdEMsY0FBYyxDQXlFMUI7SUFBRCxxQkFBQztDQUFBLEFBekVELElBeUVDO0FBekVZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBEYXRhRm9ybUV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm1cIjtcbmltcG9ydCB7IFJhZERhdGFGb3JtQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgYWxlcnQgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbmltcG9ydCB7IExvZ2luRm9ybSB9IGZyb20gXCIuL2xvZ2luLWZvcm0ubW9kZWxcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3VzZXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMb2dpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAVmlld0NoaWxkKFwibG9naW5Gb3JtRWxlbWVudFwiKSBsb2dpbkZvcm1FbGVtZW50OiBSYWREYXRhRm9ybUNvbXBvbmVudDtcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XG5cbiAgICBwcml2YXRlIF9sb2dpbkZvcm06IExvZ2luRm9ybTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9wYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fbG9naW5Gb3JtID0gbmV3IExvZ2luRm9ybSgpO1xuICAgIH1cblxuICAgIGdldCBsb2dpbkZvcm0oKTogTG9naW5Gb3JtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvZ2luRm9ybTtcbiAgICB9XG5cbiAgICBvbkVkaXRvclVwZGF0ZShhcmdzOiBEYXRhRm9ybUV2ZW50RGF0YSkge1xuICAgICAgICAvLyBkaXNhYmxlIGF1dG9jYXBpdGFsaXphdGlvbiBhbmQgYXV0b2NvcnJlY3Rpb24gZm9yIGVtYWlsIGZpZWxkXG4gICAgICAgIGlmIChpc0lPUyAmJiBhcmdzLnByb3BlcnR5TmFtZSA9PT0gXCJlbWFpbFwiKSB7XG4gICAgICAgICAgICBhcmdzLmVkaXRvci5lZGl0b3IuYXV0b2NhcGl0YWxpemF0aW9uVHlwZSA9IFVJVGV4dEF1dG9jYXBpdGFsaXphdGlvblR5cGUuTm9uZTtcbiAgICAgICAgICAgIGFyZ3MuZWRpdG9yLmVkaXRvci5hdXRvY29ycmVjdGlvblR5cGUgPSBVSVRleHRBdXRvY29ycmVjdGlvblR5cGUuTm87XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNpZ25pbkJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubG9naW5Gb3JtRWxlbWVudC5kYXRhRm9ybS5oYXNWYWxpZGF0aW9uRXJyb3JzKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICBVc2VyU2VydmljZS5sb2dpbih0aGlzLl9sb2dpbkZvcm0uZW1haWwsIHRoaXMuX2xvZ2luRm9ybS5wYXNzd29yZClcbiAgICAgICAgICAgIC50aGVuKCh1c2VyOiBLaW52ZXkuVXNlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2NhcmVcIl0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogS2ludmV5LkJhc2VFcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJMb2dpbiBmYWlsZWRcIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUmVnaXN0ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luL3JlZ2lzdHJhdGlvblwiXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIl19