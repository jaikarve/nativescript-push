"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-ui-dataform/angular");
var platform_1 = require("platform");
var page_1 = require("ui/page");
var utils_1 = require("utils/utils");
var user_service_1 = require("../shared/user.service");
var registration_form_model_1 = require("./registration-form.model");
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(_page, _routerExtensions) {
        this._page = _page;
        this._routerExtensions = _routerExtensions;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.isLoading = false;
        if (platform_1.isAndroid) {
            this._page.actionBarHidden = true;
        }
        this._registrationForm = new registration_form_model_1.RegistrationForm();
    };
    Object.defineProperty(RegistrationComponent.prototype, "registrationForm", {
        get: function () {
            return this._registrationForm;
        },
        enumerable: true,
        configurable: true
    });
    RegistrationComponent.prototype.onEditorUpdate = function (args) {
        // disable autocapitalization and autocorrection for email field
        if (platform_1.isIOS && args.propertyName === "email") {
            args.editor.editor.autocapitalizationType = 0 /* None */;
            args.editor.editor.autocorrectionType = 1 /* No */;
        }
        // disable autocorrection for givenName and familyName fields
        if (platform_1.isIOS && (args.propertyName === "givenName" || args.propertyName === "familyName")) {
            args.editor.editor.autocorrectionType = 1 /* No */;
        }
    };
    RegistrationComponent.prototype.onGroupUpdate = function (args) {
        // Apply padding to group headers.
        var group = args.group;
        var desiredPadding = 40;
        if (platform_1.isIOS) {
            var defaultTitleHeight = 30;
            group.titleView.style.insets = new UIEdgeInsets({
                top: desiredPadding,
                left: group.titleView.style.insets.left,
                bottom: group.titleView.style.insets.bottom,
                right: group.titleView.style.insets.right
            });
            group.titleView.frame = CGRectMake(0, 0, 0, defaultTitleHeight + desiredPadding);
        }
        else {
            var paddingInPixels = desiredPadding * utils_1.layout.getDisplayDensity();
            group.getHeaderContainer().setPadding(0, paddingInPixels, 0, 0);
        }
    };
    RegistrationComponent.prototype.onRegisterButtonTap = function () {
        var _this = this;
        var hasPasswordConfirmValidationErrors = this.hasPasswordConfirmValidationErrors();
        var hasValidationErrors = this.registrationFormElement.dataForm.hasValidationErrors();
        if (hasValidationErrors || hasPasswordConfirmValidationErrors) {
            return;
        }
        this.isLoading = true;
        user_service_1.UserService.signup(this._registrationForm)
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
            alert({
                title: "Registration failed",
                message: error.message,
                okButtonText: "Ok"
            });
        });
    };
    RegistrationComponent.prototype.hasPasswordConfirmValidationErrors = function () {
        var password = this.registrationFormElement.dataForm.getPropertyByName("password");
        var passwordConfirm = this.registrationFormElement.dataForm.getPropertyByName("passwordConfirm");
        if (password.valueCandidate !== passwordConfirm.valueCandidate) {
            passwordConfirm.errorMessage = "Password does not match the confirm password.";
            this.registrationFormElement.dataForm.notifyValidated("passwordConfirm", false);
            return true;
        }
        return false;
    };
    __decorate([
        core_1.ViewChild("registrationFormElement"),
        __metadata("design:type", angular_1.RadDataFormComponent)
    ], RegistrationComponent.prototype, "registrationFormElement", void 0);
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: "Registration",
            moduleId: module.id,
            templateUrl: "./registration.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFFN0Qsc0RBQStEO0FBRS9ELDREQUF3RTtBQUN4RSxxQ0FBNEM7QUFDNUMsZ0NBQStCO0FBQy9CLHFDQUFxQztBQUVyQyx1REFBcUQ7QUFDckQscUVBQTZEO0FBTzdEO0lBTUksK0JBQ1ksS0FBVyxFQUNYLGlCQUFtQztRQURuQyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQ1gsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtJQUMzQyxDQUFDO0lBRUwsd0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBRXZCLEVBQUUsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLENBQUM7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSwwQ0FBZ0IsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFRCxzQkFBSSxtREFBZ0I7YUFBcEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQsOENBQWMsR0FBZCxVQUFlLElBQXVCO1FBQ2xDLGdFQUFnRTtRQUNoRSxFQUFFLENBQUMsQ0FBQyxnQkFBSyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsZUFBb0MsQ0FBQztZQUM5RSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsYUFBOEIsQ0FBQztRQUN4RSxDQUFDO1FBRUQsNkRBQTZEO1FBQzdELEVBQUUsQ0FBQyxDQUFDLGdCQUFLLElBQUksQ0FB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QUMsVUFBVSxDQUFDLENBQUM7UUFDckYsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRW5HLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEtBQUssZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDN0QsZUFBZSxDQUFDLFlBQVksR0FBRywrQ0FBK0MsQ0FBQztZQUMvRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUVoRixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUF2R3FDO1FBQXJDLGdCQUFTLENBQUMseUJBQXlCLENBQUM7a0NBQTBCLDhCQUFvQjswRUFBQztJQUQzRSxxQkFBcUI7UUFMakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1NBQy9DLENBQUM7eUNBUXFCLFdBQUk7WUFDUSx5QkFBZ0I7T0FSdEMscUJBQXFCLENBeUdqQztJQUFELDRCQUFDO0NBQUEsQUF6R0QsSUF5R0M7QUF6R1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBEYXRhRm9ybUV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm1cIjtcbmltcG9ydCB7IFJhZERhdGFGb3JtQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IGxheW91dCB9IGZyb20gXCJ1dGlscy91dGlsc1wiO1xuXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSZWdpc3RyYXRpb25Gb3JtIH0gZnJvbSBcIi4vcmVnaXN0cmF0aW9uLWZvcm0ubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiUmVnaXN0cmF0aW9uXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdHJhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQFZpZXdDaGlsZChcInJlZ2lzdHJhdGlvbkZvcm1FbGVtZW50XCIpIHJlZ2lzdHJhdGlvbkZvcm1FbGVtZW50OiBSYWREYXRhRm9ybUNvbXBvbmVudDtcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XG5cbiAgICBwcml2YXRlIF9yZWdpc3RyYXRpb25Gb3JtOiBSZWdpc3RyYXRpb25Gb3JtO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3BhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICAgICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3JlZ2lzdHJhdGlvbkZvcm0gPSBuZXcgUmVnaXN0cmF0aW9uRm9ybSgpO1xuICAgIH1cblxuICAgIGdldCByZWdpc3RyYXRpb25Gb3JtKCk6IFJlZ2lzdHJhdGlvbkZvcm0ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0cmF0aW9uRm9ybTtcbiAgICB9XG5cbiAgICBvbkVkaXRvclVwZGF0ZShhcmdzOiBEYXRhRm9ybUV2ZW50RGF0YSkge1xuICAgICAgICAvLyBkaXNhYmxlIGF1dG9jYXBpdGFsaXphdGlvbiBhbmQgYXV0b2NvcnJlY3Rpb24gZm9yIGVtYWlsIGZpZWxkXG4gICAgICAgIGlmIChpc0lPUyAmJiBhcmdzLnByb3BlcnR5TmFtZSA9PT0gXCJlbWFpbFwiKSB7XG4gICAgICAgICAgICBhcmdzLmVkaXRvci5lZGl0b3IuYXV0b2NhcGl0YWxpemF0aW9uVHlwZSA9IFVJVGV4dEF1dG9jYXBpdGFsaXphdGlvblR5cGUuTm9uZTtcbiAgICAgICAgICAgIGFyZ3MuZWRpdG9yLmVkaXRvci5hdXRvY29ycmVjdGlvblR5cGUgPSBVSVRleHRBdXRvY29ycmVjdGlvblR5cGUuTm87XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkaXNhYmxlIGF1dG9jb3JyZWN0aW9uIGZvciBnaXZlbk5hbWUgYW5kIGZhbWlseU5hbWUgZmllbGRzXG4gICAgICAgIGlmIChpc0lPUyAmJiAoYXJncy5wcm9wZXJ0eU5hbWUgPT09IFwiZ2l2ZW5OYW1lXCIgfHwgYXJncy5wcm9wZXJ0eU5hbWUgPT09IFwiZmFtaWx5TmFtZVwiKSkge1xuICAgICAgICAgICAgYXJncy5lZGl0b3IuZWRpdG9yLmF1dG9jb3JyZWN0aW9uVHlwZSA9IFVJVGV4dEF1dG9jb3JyZWN0aW9uVHlwZS5ObztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uR3JvdXBVcGRhdGUoYXJnczogRGF0YUZvcm1FdmVudERhdGEpIHtcbiAgICAgICAgLy8gQXBwbHkgcGFkZGluZyB0byBncm91cCBoZWFkZXJzLlxuICAgICAgICBjb25zdCBncm91cCA9IGFyZ3MuZ3JvdXA7XG4gICAgICAgIGNvbnN0IGRlc2lyZWRQYWRkaW5nID0gNDA7XG5cbiAgICAgICAgaWYgKGlzSU9TKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0VGl0bGVIZWlnaHQgPSAzMDtcbiAgICAgICAgICAgIGdyb3VwLnRpdGxlVmlldy5zdHlsZS5pbnNldHMgPSBuZXcgVUlFZGdlSW5zZXRzKHtcbiAgICAgICAgICAgICAgICB0b3A6IGRlc2lyZWRQYWRkaW5nLFxuICAgICAgICAgICAgICAgIGxlZnQ6IGdyb3VwLnRpdGxlVmlldy5zdHlsZS5pbnNldHMubGVmdCxcbiAgICAgICAgICAgICAgICBib3R0b206IGdyb3VwLnRpdGxlVmlldy5zdHlsZS5pbnNldHMuYm90dG9tLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiBncm91cC50aXRsZVZpZXcuc3R5bGUuaW5zZXRzLnJpZ2h0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGdyb3VwLnRpdGxlVmlldy5mcmFtZSA9IENHUmVjdE1ha2UoMCwgMCwgMCwgZGVmYXVsdFRpdGxlSGVpZ2h0ICsgZGVzaXJlZFBhZGRpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcGFkZGluZ0luUGl4ZWxzID0gZGVzaXJlZFBhZGRpbmcgKiBsYXlvdXQuZ2V0RGlzcGxheURlbnNpdHkoKTtcbiAgICAgICAgICAgIGdyb3VwLmdldEhlYWRlckNvbnRhaW5lcigpLnNldFBhZGRpbmcoMCwgcGFkZGluZ0luUGl4ZWxzLCAwLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUmVnaXN0ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGhhc1Bhc3N3b3JkQ29uZmlybVZhbGlkYXRpb25FcnJvcnMgPSB0aGlzLmhhc1Bhc3N3b3JkQ29uZmlybVZhbGlkYXRpb25FcnJvcnMoKTtcbiAgICAgICAgY29uc3QgaGFzVmFsaWRhdGlvbkVycm9ycyA9IHRoaXMucmVnaXN0cmF0aW9uRm9ybUVsZW1lbnQuZGF0YUZvcm0uaGFzVmFsaWRhdGlvbkVycm9ycygpO1xuXG4gICAgICAgIGlmIChoYXNWYWxpZGF0aW9uRXJyb3JzIHx8IGhhc1Bhc3N3b3JkQ29uZmlybVZhbGlkYXRpb25FcnJvcnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICBVc2VyU2VydmljZS5zaWdudXAodGhpcy5fcmVnaXN0cmF0aW9uRm9ybSlcbiAgICAgICAgICAgIC50aGVuKCh1c2VyOiBLaW52ZXkuVXNlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2NhcmVcIl0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogS2ludmV5LkJhc2VFcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJSZWdpc3RyYXRpb24gZmFpbGVkXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhc1Bhc3N3b3JkQ29uZmlybVZhbGlkYXRpb25FcnJvcnMoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5yZWdpc3RyYXRpb25Gb3JtRWxlbWVudC5kYXRhRm9ybS5nZXRQcm9wZXJ0eUJ5TmFtZShcInBhc3N3b3JkXCIpO1xuICAgICAgICBjb25zdCBwYXNzd29yZENvbmZpcm0gPSB0aGlzLnJlZ2lzdHJhdGlvbkZvcm1FbGVtZW50LmRhdGFGb3JtLmdldFByb3BlcnR5QnlOYW1lKFwicGFzc3dvcmRDb25maXJtXCIpO1xuXG4gICAgICAgIGlmIChwYXNzd29yZC52YWx1ZUNhbmRpZGF0ZSAhPT0gcGFzc3dvcmRDb25maXJtLnZhbHVlQ2FuZGlkYXRlKSB7XG4gICAgICAgICAgICBwYXNzd29yZENvbmZpcm0uZXJyb3JNZXNzYWdlID0gXCJQYXNzd29yZCBkb2VzIG5vdCBtYXRjaCB0aGUgY29uZmlybSBwYXNzd29yZC5cIjtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRm9ybUVsZW1lbnQuZGF0YUZvcm0ubm90aWZ5VmFsaWRhdGVkKFwicGFzc3dvcmRDb25maXJtXCIsIGZhbHNlKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIl19