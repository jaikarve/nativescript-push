"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var angular_1 = require("nativescript-ui-gauge/angular");
var angular_2 = require("nativescript-ui-listview/angular");
var activity_detail_component_1 = require("./care-card/activity-detail/activity-detail.component");
var activity_list_component_1 = require("./care-card/activity/activity-list.component");
var care_card_component_1 = require("./care-card/care-card.component");
var care_dashboard_component_1 = require("./care-card/care-dashboard/care-dashboard.component");
var radial_rating_component_1 = require("./care-card/care-dashboard/radial-rating/radial-rating.component");
var connect_detail_component_1 = require("./connect/connect-detail/connect-detail.component");
var connect_component_1 = require("./connect/connect.component");
var care_card_activity_service_1 = require("./care-card/shared/care-card-activity.service");
var care_card_event_service_1 = require("./care-card/shared/care-card-event.service");
var care_card_service_1 = require("./care-card/shared/care-card.service");
var connect_service_1 = require("./connect/shared/connect.service");
var care_routing_module_1 = require("./care-routing.module");
var care_component_1 = require("./care.component");
var CareModule = /** @class */ (function () {
    function CareModule() {
    }
    CareModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                angular_1.NativeScriptUIGaugeModule,
                angular_2.NativeScriptUIListViewModule,
                forms_1.NativeScriptFormsModule,
                care_routing_module_1.CareRoutingModule
            ],
            declarations: [
                care_card_component_1.CareCardComponent,
                care_dashboard_component_1.CareDashboardComponent,
                radial_rating_component_1.RadialRatingComponent,
                connect_component_1.ConnectComponent,
                activity_detail_component_1.ActivityDetailComponent,
                activity_list_component_1.ActivityListComponent,
                connect_detail_component_1.ConnectDetailComponent,
                care_component_1.CareComponent
            ],
            providers: [
                care_card_activity_service_1.CareCardActivityService,
                care_card_event_service_1.CareCardEventService,
                care_card_service_1.CareCardService,
                connect_service_1.ConnectService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], CareModule);
    return CareModule;
}());
exports.CareModule = CareModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsb0RBQXFFO0FBQ3JFLHlEQUEwRTtBQUMxRSw0REFBZ0Y7QUFFaEYsbUdBQWdHO0FBQ2hHLHdGQUFxRjtBQUNyRix1RUFBb0U7QUFDcEUsZ0dBQTZGO0FBQzdGLDRHQUF5RztBQUN6Ryw4RkFBMkY7QUFDM0YsaUVBQStEO0FBRS9ELDRGQUF3RjtBQUN4RixzRkFBa0Y7QUFDbEYsMEVBQXVFO0FBQ3ZFLG9FQUFrRTtBQUVsRSw2REFBMEQ7QUFDMUQsbURBQWlEO0FBOEJqRDtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBNUJ0QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QixtQ0FBeUI7Z0JBQ3pCLHNDQUE0QjtnQkFDNUIsK0JBQXVCO2dCQUN2Qix1Q0FBaUI7YUFDcEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsdUNBQWlCO2dCQUNqQixpREFBc0I7Z0JBQ3RCLCtDQUFxQjtnQkFDckIsb0NBQWdCO2dCQUNoQixtREFBdUI7Z0JBQ3ZCLCtDQUFxQjtnQkFDckIsaURBQXNCO2dCQUN0Qiw4QkFBYTthQUNoQjtZQUNELFNBQVMsRUFBRTtnQkFDUCxvREFBdUI7Z0JBQ3ZCLDhDQUFvQjtnQkFDcEIsbUNBQWU7Z0JBQ2YsZ0NBQWM7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5cbmltcG9ydCB7IEFjdGl2aXR5RGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vY2FyZS1jYXJkL2FjdGl2aXR5LWRldGFpbC9hY3Rpdml0eS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBY3Rpdml0eUxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9jYXJlLWNhcmQvYWN0aXZpdHkvYWN0aXZpdHktbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmVDYXJkQ29tcG9uZW50IH0gZnJvbSBcIi4vY2FyZS1jYXJkL2NhcmUtY2FyZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmVEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tIFwiLi9jYXJlLWNhcmQvY2FyZS1kYXNoYm9hcmQvY2FyZS1kYXNoYm9hcmQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSYWRpYWxSYXRpbmdDb21wb25lbnQgfSBmcm9tIFwiLi9jYXJlLWNhcmQvY2FyZS1kYXNoYm9hcmQvcmFkaWFsLXJhdGluZy9yYWRpYWwtcmF0aW5nLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29ubmVjdERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2Nvbm5lY3QvY29ubmVjdC1kZXRhaWwvY29ubmVjdC1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb25uZWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29ubmVjdC9jb25uZWN0LmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBDYXJlQ2FyZEFjdGl2aXR5U2VydmljZSB9IGZyb20gXCIuL2NhcmUtY2FyZC9zaGFyZWQvY2FyZS1jYXJkLWFjdGl2aXR5LnNlcnZpY2VcIjtcbmltcG9ydCB7IENhcmVDYXJkRXZlbnRTZXJ2aWNlIH0gZnJvbSBcIi4vY2FyZS1jYXJkL3NoYXJlZC9jYXJlLWNhcmQtZXZlbnQuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2FyZUNhcmRTZXJ2aWNlIH0gZnJvbSBcIi4vY2FyZS1jYXJkL3NoYXJlZC9jYXJlLWNhcmQuc2VydmljZVwiO1xuaW1wb3J0IHsgQ29ubmVjdFNlcnZpY2UgfSBmcm9tIFwiLi9jb25uZWN0L3NoYXJlZC9jb25uZWN0LnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgQ2FyZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9jYXJlLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBDYXJlQ29tcG9uZW50IH0gZnJvbSBcIi4vY2FyZS5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIENhcmVSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ2FyZUNhcmRDb21wb25lbnQsXG4gICAgICAgIENhcmVEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgICAgIFJhZGlhbFJhdGluZ0NvbXBvbmVudCxcbiAgICAgICAgQ29ubmVjdENvbXBvbmVudCxcbiAgICAgICAgQWN0aXZpdHlEZXRhaWxDb21wb25lbnQsXG4gICAgICAgIEFjdGl2aXR5TGlzdENvbXBvbmVudCxcbiAgICAgICAgQ29ubmVjdERldGFpbENvbXBvbmVudCxcbiAgICAgICAgQ2FyZUNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENhcmVDYXJkQWN0aXZpdHlTZXJ2aWNlLFxuICAgICAgICBDYXJlQ2FyZEV2ZW50U2VydmljZSxcbiAgICAgICAgQ2FyZUNhcmRTZXJ2aWNlLFxuICAgICAgICBDb25uZWN0U2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJlTW9kdWxlIHsgfVxuIl19