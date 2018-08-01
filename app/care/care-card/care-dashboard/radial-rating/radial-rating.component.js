"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core"); // tslint:disable-line:max-line-length
var animation_1 = require("ui/animation/animation");
var enums_1 = require("ui/enums");
var radialAnimationDurationMilliseconds = 1000;
var RadialRatingComponent = /** @class */ (function () {
    function RadialRatingComponent() {
    }
    Object.defineProperty(RadialRatingComponent.prototype, "radialAnimationDuration", {
        get: function () {
            return radialAnimationDurationMilliseconds;
        },
        enumerable: true,
        configurable: true
    });
    RadialRatingComponent.prototype.ngAfterViewInit = function () {
        this._progresslabel = (this.progressLabelElement.nativeElement);
        this._completionLabel = (this.completionLabelElement.nativeElement);
        this._animation = new animation_1.Animation([{
                target: this._progresslabel,
                opacity: 0,
                duration: 0,
                delay: this.radialAnimationDuration
            }, {
                target: this._completionLabel,
                opacity: 1,
                duration: 200,
                curve: enums_1.AnimationCurve.easeIn
            }], true);
        this.updateAnimation(this.value);
    };
    RadialRatingComponent.prototype.ngOnChanges = function (changes) {
        if (this._animation && changes.value) {
            this.updateAnimation(changes.value.currentValue || 0);
        }
    };
    RadialRatingComponent.prototype.updateAnimation = function (value) {
        var _this = this;
        if (this._animation.isPlaying) {
            this._animation.cancel();
        }
        this._completionLabel.opacity = 0;
        this._progresslabel.opacity = 1;
        if (value === 100) {
            // catch animation cancelled error (and do nothing)
            setTimeout(function () { return _this._animation.play().catch(function () { return void 0; }); });
        }
    };
    __decorate([
        core_1.ViewChild("progressLabel"),
        __metadata("design:type", core_1.ElementRef)
    ], RadialRatingComponent.prototype, "progressLabelElement", void 0);
    __decorate([
        core_1.ViewChild("completionLabel"),
        __metadata("design:type", core_1.ElementRef)
    ], RadialRatingComponent.prototype, "completionLabelElement", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RadialRatingComponent.prototype, "kCompletionIconFontSize", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RadialRatingComponent.prototype, "kCol", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RadialRatingComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RadialRatingComponent.prototype, "inProgressIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RadialRatingComponent.prototype, "completionIcon", void 0);
    RadialRatingComponent = __decorate([
        core_1.Component({
            selector: "RadialRating",
            moduleId: module.id,
            templateUrl: "./radial-rating.component.html",
            styleUrls: ["./radial-rating.component.css"]
        })
    ], RadialRatingComponent);
    return RadialRatingComponent;
}());
exports.RadialRatingComponent = RadialRatingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaWFsLXJhdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyYWRpYWwtcmF0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUErSCxDQUFDLHNDQUFzQztBQUN0SyxvREFBbUQ7QUFDbkQsa0NBQTBDO0FBRzFDLElBQU0sbUNBQW1DLEdBQUcsSUFBSSxDQUFDO0FBUWpEO0lBQUE7SUF5REEsQ0FBQztJQTFDRyxzQkFBSSwwREFBdUI7YUFBM0I7WUFDSSxNQUFNLENBQUMsbUNBQW1DLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFFRCwrQ0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBVSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsZ0JBQWdCLEdBQVUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFM0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHFCQUFTLENBQUMsQ0FBQztnQkFDN0IsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjO2dCQUMzQixPQUFPLEVBQUUsQ0FBQztnQkFDVixRQUFRLEVBQUUsQ0FBQztnQkFDWCxLQUFLLEVBQUUsSUFBSSxDQUFDLHVCQUF1QjthQUN0QyxFQUFFO2dCQUNDLE1BQU0sRUFBRSxJQUFJLENBQUMsZ0JBQWdCO2dCQUM3QixPQUFPLEVBQUUsQ0FBQztnQkFDVixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsc0JBQWMsQ0FBQyxNQUFNO2FBQy9CLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVWLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCwyQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDOUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUM7SUFDTCxDQUFDO0lBRU8sK0NBQWUsR0FBdkIsVUFBd0IsS0FBYTtRQUFyQyxpQkFZQztRQVhHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzdCLENBQUM7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFFaEMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDaEIsbURBQW1EO1lBQ25ELFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBTSxPQUFBLEtBQUssQ0FBQyxFQUFOLENBQU0sQ0FBQyxFQUExQyxDQUEwQyxDQUFDLENBQUM7UUFDakUsQ0FBQztJQUNMLENBQUM7SUF0RDJCO1FBQTNCLGdCQUFTLENBQUMsZUFBZSxDQUFDO2tDQUF1QixpQkFBVTt1RUFBQztJQUMvQjtRQUE3QixnQkFBUyxDQUFDLGlCQUFpQixDQUFDO2tDQUF5QixpQkFBVTt5RUFBQztJQUV4RDtRQUFSLFlBQUssRUFBRTs7MEVBQWlDO0lBQ2hDO1FBQVIsWUFBSyxFQUFFOzt1REFBYztJQUNiO1FBQVIsWUFBSyxFQUFFOzt3REFBZTtJQUNkO1FBQVIsWUFBSyxFQUFFOztpRUFBd0I7SUFDdkI7UUFBUixZQUFLLEVBQUU7O2lFQUF3QjtJQVR2QixxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQy9DLENBQUM7T0FDVyxxQkFBcUIsQ0F5RGpDO0lBQUQsNEJBQUM7Q0FBQSxBQXpERCxJQXlEQztBQXpEWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZSwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjsgLy8gdHNsaW50OmRpc2FibGUtbGluZTptYXgtbGluZS1sZW5ndGhcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJ1aS9hbmltYXRpb24vYW5pbWF0aW9uXCI7XG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZSB9IGZyb20gXCJ1aS9lbnVtc1wiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcblxuY29uc3QgcmFkaWFsQW5pbWF0aW9uRHVyYXRpb25NaWxsaXNlY29uZHMgPSAxMDAwO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJSYWRpYWxSYXRpbmdcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmFkaWFsLXJhdGluZy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9yYWRpYWwtcmF0aW5nLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgUmFkaWFsUmF0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcblxuICAgIEBWaWV3Q2hpbGQoXCJwcm9ncmVzc0xhYmVsXCIpIHByb2dyZXNzTGFiZWxFbGVtZW50OiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJjb21wbGV0aW9uTGFiZWxcIikgY29tcGxldGlvbkxhYmVsRWxlbWVudDogRWxlbWVudFJlZjtcblxuICAgIEBJbnB1dCgpIGtDb21wbGV0aW9uSWNvbkZvbnRTaXplOiBudW1iZXI7XG4gICAgQElucHV0KCkga0NvbDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHZhbHVlOiBudW1iZXI7XG4gICAgQElucHV0KCkgaW5Qcm9ncmVzc0ljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBjb21wbGV0aW9uSWNvbjogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfcHJvZ3Jlc3NsYWJlbDogTGFiZWw7XG4gICAgcHJpdmF0ZSBfY29tcGxldGlvbkxhYmVsOiBMYWJlbDtcbiAgICBwcml2YXRlIF9hbmltYXRpb246IEFuaW1hdGlvbjtcblxuICAgIGdldCByYWRpYWxBbmltYXRpb25EdXJhdGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gcmFkaWFsQW5pbWF0aW9uRHVyYXRpb25NaWxsaXNlY29uZHM7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wcm9ncmVzc2xhYmVsID0gPExhYmVsPih0aGlzLnByb2dyZXNzTGFiZWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLl9jb21wbGV0aW9uTGFiZWwgPSA8TGFiZWw+KHRoaXMuY29tcGxldGlvbkxhYmVsRWxlbWVudC5uYXRpdmVFbGVtZW50KTtcblxuICAgICAgICB0aGlzLl9hbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uKFt7XG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMuX3Byb2dyZXNzbGFiZWwsXG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgICAgICBkZWxheTogdGhpcy5yYWRpYWxBbmltYXRpb25EdXJhdGlvblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMuX2NvbXBsZXRpb25MYWJlbCxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VJblxuICAgICAgICB9XSwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVBbmltYXRpb24odGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fYW5pbWF0aW9uICYmIGNoYW5nZXMudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQW5pbWF0aW9uKGNoYW5nZXMudmFsdWUuY3VycmVudFZhbHVlIHx8IDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVBbmltYXRpb24odmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fYW5pbWF0aW9uLmlzUGxheWluZykge1xuICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uLmNhbmNlbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY29tcGxldGlvbkxhYmVsLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLl9wcm9ncmVzc2xhYmVsLm9wYWNpdHkgPSAxO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMTAwKSB7XG4gICAgICAgICAgICAvLyBjYXRjaCBhbmltYXRpb24gY2FuY2VsbGVkIGVycm9yIChhbmQgZG8gbm90aGluZylcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fYW5pbWF0aW9uLnBsYXkoKS5jYXRjaCgoKSA9PiB2b2lkIDApKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==