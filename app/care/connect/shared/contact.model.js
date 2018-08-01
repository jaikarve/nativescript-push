"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contact_info_model_1 = require("./contact-info.model");
var Contact = /** @class */ (function () {
    function Contact(options) {
        var _this = this;
        this.id = options._id;
        this.name = options.name;
        this.monogram = options.monogram;
        this.relation = options.relation;
        this.type = options.type;
        this.contactInfoItems = new Array();
        if (options.contactInfoItems && options.contactInfoItems.length) {
            options.contactInfoItems.forEach(function (contactInfoData) {
                var contactInfo = new contact_info_model_1.ContactInfo(contactInfoData);
                _this.contactInfoItems.push(contactInfo);
            });
        }
    }
    return Contact;
}());
exports.Contact = Contact;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRhY3QubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyREFBbUQ7QUFFbkQ7SUFTSSxpQkFBWSxPQUFZO1FBQXhCLGlCQWVDO1FBZEcsSUFBSSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUV6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxLQUFLLEVBQWUsQ0FBQztRQUVqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLElBQUksT0FBTyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDOUQsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFDLGVBQWU7Z0JBQzdDLElBQU0sV0FBVyxHQUFHLElBQUksZ0NBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDckQsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7QUF6QlksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWN0SW5mbyB9IGZyb20gXCIuL2NvbnRhY3QtaW5mby5tb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgQ29udGFjdCB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbW9ub2dyYW06IHN0cmluZztcbiAgICB0aW50Q29sb3I6IHN0cmluZztcbiAgICByZWxhdGlvbjogc3RyaW5nO1xuICAgIHR5cGU6IG51bWJlcjtcbiAgICBjb250YWN0SW5mb0l0ZW1zOiBBcnJheTxDb250YWN0SW5mbz47XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBhbnkpIHtcbiAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuX2lkO1xuICAgICAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWU7XG4gICAgICAgIHRoaXMubW9ub2dyYW0gPSBvcHRpb25zLm1vbm9ncmFtO1xuICAgICAgICB0aGlzLnJlbGF0aW9uID0gb3B0aW9ucy5yZWxhdGlvbjtcbiAgICAgICAgdGhpcy50eXBlID0gb3B0aW9ucy50eXBlO1xuXG4gICAgICAgIHRoaXMuY29udGFjdEluZm9JdGVtcyA9IG5ldyBBcnJheTxDb250YWN0SW5mbz4oKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5jb250YWN0SW5mb0l0ZW1zICYmIG9wdGlvbnMuY29udGFjdEluZm9JdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuY29udGFjdEluZm9JdGVtcy5mb3JFYWNoKChjb250YWN0SW5mb0RhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWN0SW5mbyA9IG5ldyBDb250YWN0SW5mbyhjb250YWN0SW5mb0RhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFjdEluZm9JdGVtcy5wdXNoKGNvbnRhY3RJbmZvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19