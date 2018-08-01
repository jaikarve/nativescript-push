"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var router_1 = require("nativescript-angular/router");
var LoggedInLazyLoadGuard = /** @class */ (function () {
    function LoggedInLazyLoadGuard(_routerExtensions) {
        this._routerExtensions = _routerExtensions;
    }
    LoggedInLazyLoadGuard.prototype.canLoad = function () {
        if (!kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser()) {
            this._routerExtensions.navigate(["login"], { clearHistory: true });
        }
        return true;
    };
    LoggedInLazyLoadGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], LoggedInLazyLoadGuard);
    return LoggedInLazyLoadGuard;
}());
exports.LoggedInLazyLoadGuard = LoggedInLazyLoadGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VkLWluLWxhenktbG9hZC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2dlZC1pbi1sYXp5LWxvYWQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsbUVBQWlEO0FBQ2pELHNEQUErRDtBQUcvRDtJQUNJLCtCQUFvQixpQkFBbUM7UUFBbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtJQUFJLENBQUM7SUFFNUQsdUNBQU8sR0FBUDtRQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFUUSxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTt5Q0FFOEIseUJBQWdCO09BRDlDLHFCQUFxQixDQVVqQztJQUFELDRCQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENhbkxvYWQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEtpbnZleSB9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9nZ2VkSW5MYXp5TG9hZEd1YXJkIGltcGxlbWVudHMgQ2FuTG9hZCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cclxuXHJcbiAgICBjYW5Mb2FkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wibG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuIl19