"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.login = function (username, password) {
        return kinvey_nativescript_sdk_1.Kinvey.User.login(username.toLowerCase(), password);
    };
    UserService.signup = function (registrationForm) {
        return kinvey_nativescript_sdk_1.Kinvey.User.signup({
            username: registrationForm.email.toLowerCase(),
            password: registrationForm.password,
            givenName: registrationForm.givenName,
            familyName: registrationForm.familyName,
            email: registrationForm.email,
            gender: registrationForm.gender,
            dateOfBirth: registrationForm.dateOfBirth
        });
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLG1FQUFpRDtBQUtqRDtJQUFBO0lBZ0JBLENBQUM7SUFmVSxpQkFBSyxHQUFaLFVBQWEsUUFBZ0IsRUFBRSxRQUFnQjtRQUMzQyxNQUFNLENBQUMsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU0sa0JBQU0sR0FBYixVQUFjLGdCQUFrQztRQUM1QyxNQUFNLENBQUMsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3RCLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQzlDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRO1lBQ25DLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxTQUFTO1lBQ3JDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVO1lBQ3ZDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLO1lBQzdCLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNO1lBQy9CLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXO1NBQzVDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFmUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7T0FDQSxXQUFXLENBZ0J2QjtJQUFELGtCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XHJcblxyXG5pbXBvcnQgeyBSZWdpc3RyYXRpb25Gb3JtIH0gZnJvbSBcIi4uL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24tZm9ybS5tb2RlbFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gICAgc3RhdGljIGxvZ2luKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBLaW52ZXkuVXNlci5sb2dpbih1c2VybmFtZS50b0xvd2VyQ2FzZSgpLCBwYXNzd29yZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNpZ251cChyZWdpc3RyYXRpb25Gb3JtOiBSZWdpc3RyYXRpb25Gb3JtKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIuc2lnbnVwKHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHJlZ2lzdHJhdGlvbkZvcm0uZW1haWwudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHJlZ2lzdHJhdGlvbkZvcm0ucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGdpdmVuTmFtZTogcmVnaXN0cmF0aW9uRm9ybS5naXZlbk5hbWUsXHJcbiAgICAgICAgICAgIGZhbWlseU5hbWU6IHJlZ2lzdHJhdGlvbkZvcm0uZmFtaWx5TmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IHJlZ2lzdHJhdGlvbkZvcm0uZW1haWwsXHJcbiAgICAgICAgICAgIGdlbmRlcjogcmVnaXN0cmF0aW9uRm9ybS5nZW5kZXIsXHJcbiAgICAgICAgICAgIGRhdGVPZkJpcnRoOiByZWdpc3RyYXRpb25Gb3JtLmRhdGVPZkJpcnRoXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19