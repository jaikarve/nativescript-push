"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var activity_detail_component_1 = require("./care-card/activity-detail/activity-detail.component");
var care_component_1 = require("./care.component");
var connect_detail_component_1 = require("./connect/connect-detail/connect-detail.component");
var routes = [
    { path: "", component: care_component_1.CareComponent },
    { path: "connect-detail/:id", component: connect_detail_component_1.ConnectDetailComponent },
    { path: "activity-detail/:title/:date", component: activity_detail_component_1.ActivityDetailComponent }
];
var CareRoutingModule = /** @class */ (function () {
    function CareRoutingModule() {
    }
    CareRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], CareRoutingModule);
    return CareRoutingModule;
}());
exports.CareRoutingModule = CareRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcmUtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBRXZFLG1HQUFnRztBQUNoRyxtREFBaUQ7QUFDakQsOEZBQTJGO0FBRTNGLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUN0QyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsaURBQXNCLEVBQUU7SUFDakUsRUFBRSxJQUFJLEVBQUUsOEJBQThCLEVBQUUsU0FBUyxFQUFFLG1EQUF1QixFQUFFO0NBQy9FLENBQUM7QUFNRjtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBSjdCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBLEFBQWxDLElBQWtDO0FBQXJCLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQWN0aXZpdHlEZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9jYXJlLWNhcmQvYWN0aXZpdHktZGV0YWlsL2FjdGl2aXR5LWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmVDb21wb25lbnQgfSBmcm9tIFwiLi9jYXJlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29ubmVjdERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2Nvbm5lY3QvY29ubmVjdC1kZXRhaWwvY29ubmVjdC1kZXRhaWwuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBDYXJlQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImNvbm5lY3QtZGV0YWlsLzppZFwiLCBjb21wb25lbnQ6IENvbm5lY3REZXRhaWxDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiYWN0aXZpdHktZGV0YWlsLzp0aXRsZS86ZGF0ZVwiLCBjb21wb25lbnQ6IEFjdGl2aXR5RGV0YWlsQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJlUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==