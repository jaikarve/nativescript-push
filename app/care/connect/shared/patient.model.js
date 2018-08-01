"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contact_model_1 = require("./contact.model");
var Patient = /** @class */ (function () {
    function Patient(options) {
        var _this = this;
        this.name = options.name;
        this.monogram = options.monogram;
        this.userInfo = options.userInfo;
        this.tintColor = options.tintColor ? this.getHexColor(options.tintColor) : "";
        this.careTeamContacts = new Array();
        if (options.careTeamContacts && options.careTeamContacts.length) {
            options.careTeamContacts.forEach(function (careTeamContactData) {
                var careTeamContact = new contact_model_1.Contact(careTeamContactData);
                _this.careTeamContacts.push(careTeamContact);
            });
        }
    }
    Patient.prototype.getContactsByType = function (type) {
        return this.careTeamContacts.filter(function (contact) {
            return contact.type === type;
        });
    };
    Patient.prototype.getHexColor = function (tintColor) {
        var r = Math.round(tintColor.r * 255).toString().slice(0, 2);
        var g = Math.round(tintColor.g * 255).toString().slice(0, 2);
        var b = Math.round(tintColor.b * 255).toString().slice(0, 2);
        var hexColor = "#" + (r + g + b);
        var a = tintColor.a;
        if (a < 1) {
            a = Math.round(a * 255).toString().slice(0, 2);
            hexColor += a;
        }
        return hexColor;
    };
    return Patient;
}());
exports.Patient = Patient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aWVudC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhdGllbnQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBMEM7QUFFMUM7SUFPSSxpQkFBWSxPQUFZO1FBQXhCLGlCQWNDO1FBYkcsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRTlFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLEtBQUssRUFBVyxDQUFDO1FBRTdDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM5RCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQUMsbUJBQW1CO2dCQUNqRCxJQUFNLGVBQWUsR0FBRyxJQUFJLHVCQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDekQsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBRUQsbUNBQWlCLEdBQWpCLFVBQWtCLElBQVk7UUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsVUFBQyxPQUFPO1lBQ3hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyw2QkFBVyxHQUFuQixVQUFvQixTQUFjO1FBQzlCLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRS9ELElBQUksUUFBUSxHQUFHLE9BQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRXBCLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1IsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsUUFBUSxJQUFJLENBQUMsQ0FBQztRQUNsQixDQUFDO1FBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMsQUE1Q0QsSUE0Q0M7QUE1Q1ksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWN0IH0gZnJvbSBcIi4vY29udGFjdC5tb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgUGF0aWVudCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIG1vbm9ncmFtOiBzdHJpbmc7XG4gICAgdXNlckluZm86IGFueTtcbiAgICB0aW50Q29sb3I6IHN0cmluZztcbiAgICBjYXJlVGVhbUNvbnRhY3RzOiBBcnJheTxDb250YWN0PjtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGFueSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWU7XG4gICAgICAgIHRoaXMubW9ub2dyYW0gPSBvcHRpb25zLm1vbm9ncmFtO1xuICAgICAgICB0aGlzLnVzZXJJbmZvID0gb3B0aW9ucy51c2VySW5mbztcbiAgICAgICAgdGhpcy50aW50Q29sb3IgPSBvcHRpb25zLnRpbnRDb2xvciA/IHRoaXMuZ2V0SGV4Q29sb3Iob3B0aW9ucy50aW50Q29sb3IpIDogXCJcIjtcblxuICAgICAgICB0aGlzLmNhcmVUZWFtQ29udGFjdHMgPSBuZXcgQXJyYXk8Q29udGFjdD4oKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5jYXJlVGVhbUNvbnRhY3RzICYmIG9wdGlvbnMuY2FyZVRlYW1Db250YWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuY2FyZVRlYW1Db250YWN0cy5mb3JFYWNoKChjYXJlVGVhbUNvbnRhY3REYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZVRlYW1Db250YWN0ID0gbmV3IENvbnRhY3QoY2FyZVRlYW1Db250YWN0RGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJlVGVhbUNvbnRhY3RzLnB1c2goY2FyZVRlYW1Db250YWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q29udGFjdHNCeVR5cGUodHlwZTogbnVtYmVyKTogQXJyYXk8Q29udGFjdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jYXJlVGVhbUNvbnRhY3RzLmZpbHRlcigoY29udGFjdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRhY3QudHlwZSA9PT0gdHlwZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRIZXhDb2xvcih0aW50Q29sb3I6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHIgPSBNYXRoLnJvdW5kKHRpbnRDb2xvci5yICogMjU1KS50b1N0cmluZygpLnNsaWNlKDAsIDIpO1xuICAgICAgICBjb25zdCBnID0gTWF0aC5yb3VuZCh0aW50Q29sb3IuZyAqIDI1NSkudG9TdHJpbmcoKS5zbGljZSgwLCAyKTtcbiAgICAgICAgY29uc3QgYiA9IE1hdGgucm91bmQodGludENvbG9yLmIgKiAyNTUpLnRvU3RyaW5nKCkuc2xpY2UoMCwgMik7XG5cbiAgICAgICAgbGV0IGhleENvbG9yID0gYCMke3IgKyBnICsgYn1gO1xuICAgICAgICBsZXQgYSA9IHRpbnRDb2xvci5hO1xuXG4gICAgICAgIGlmIChhIDwgMSkge1xuICAgICAgICAgICAgYSA9IE1hdGgucm91bmQoYSAqIDI1NSkudG9TdHJpbmcoKS5zbGljZSgwLCAyKTtcbiAgICAgICAgICAgIGhleENvbG9yICs9IGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaGV4Q29sb3I7XG4gICAgfVxufVxuIl19