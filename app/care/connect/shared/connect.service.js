"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var contact_model_1 = require("./contact.model");
var ConnectService = /** @class */ (function () {
    function ConnectService() {
        this._contactStore = kinvey_nativescript_sdk_1.Kinvey.DataStore.collection("Contact");
    }
    ConnectService.prototype.getContactById = function (id) {
        return this._contacts.find(function (contact) {
            return contact.id === id;
        });
    };
    ConnectService.prototype.getContacts = function () {
        var _this = this;
        if (!this._contactsPromise) {
            this._contactsPromise = this._contactStore.find().toPromise()
                .then(function (data) {
                var contacts = [];
                if (data && data.length) {
                    data.forEach(function (contactData) {
                        var contact = new contact_model_1.Contact(contactData);
                        contacts.push(contact);
                    });
                }
                _this._contacts = contacts;
                return contacts;
            })
                .catch(function (error) {
                alert({
                    title: "Oops something went wrong.",
                    message: error.message,
                    okButtonText: "Ok"
                });
            });
        }
        return this._contactsPromise;
    };
    ConnectService = __decorate([
        core_1.Injectable()
    ], ConnectService);
    return ConnectService;
}());
exports.ConnectService = ConnectService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29ubmVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLG1FQUFpRDtBQUdqRCxpREFBMEM7QUFHMUM7SUFEQTtRQUlZLGtCQUFhLEdBQUcsZ0NBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFNLFNBQVMsQ0FBQyxDQUFDO0lBcUN4RSxDQUFDO0lBbENHLHVDQUFjLEdBQWQsVUFBZSxFQUFVO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQU87WUFDL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFBQSxpQkEyQkM7UUExQkcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRTtpQkFDeEQsSUFBSSxDQUFDLFVBQUMsSUFBSTtnQkFDUCxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBRXBCLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFdBQWdCO3dCQUMxQixJQUFNLE9BQU8sR0FBRyxJQUFJLHVCQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ3pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzNCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsS0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7Z0JBRTFCLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDcEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLEtBQXVCO2dCQUMzQixLQUFLLENBQUM7b0JBQ0YsS0FBSyxFQUFFLDRCQUE0QjtvQkFDbkMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO29CQUN0QixZQUFZLEVBQUUsSUFBSTtpQkFDckIsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqQyxDQUFDO0lBdkNRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTtPQUNBLGNBQWMsQ0F3QzFCO0lBQUQscUJBQUM7Q0FBQSxBQXhDRCxJQXdDQztBQXhDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHsgQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3QubW9kZWxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbm5lY3RTZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9jb250YWN0czogQXJyYXk8Q29udGFjdD47XG5cbiAgICBwcml2YXRlIF9jb250YWN0U3RvcmUgPSBLaW52ZXkuRGF0YVN0b3JlLmNvbGxlY3Rpb248YW55PihcIkNvbnRhY3RcIik7XG4gICAgcHJpdmF0ZSBfY29udGFjdHNQcm9taXNlOiBQcm9taXNlPGFueT47XG5cbiAgICBnZXRDb250YWN0QnlJZChpZDogc3RyaW5nKTogQ29udGFjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb250YWN0cy5maW5kKChjb250YWN0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY29udGFjdC5pZCA9PT0gaWQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldENvbnRhY3RzKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGlmICghdGhpcy5fY29udGFjdHNQcm9taXNlKSB7XG4gICAgICAgICAgICB0aGlzLl9jb250YWN0c1Byb21pc2UgPSB0aGlzLl9jb250YWN0U3RvcmUuZmluZCgpLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFjdHMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChjb250YWN0RGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFjdCA9IG5ldyBDb250YWN0KGNvbnRhY3REYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWN0cy5wdXNoKGNvbnRhY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb250YWN0cyA9IGNvbnRhY3RzO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWN0cztcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEtpbnZleS5CYXNlRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiT29wcyBzb21ldGhpbmcgd2VudCB3cm9uZy5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250YWN0c1Byb21pc2U7XG4gICAgfVxufVxuIl19