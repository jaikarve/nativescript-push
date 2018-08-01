"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var config_1 = require("./config");
//import { Push } from "kinvey-nativescript-sdk";
kinvey_nativescript_sdk_1.Kinvey.init({
    appKey: config_1.Config.kinveyAppKey,
    appSecret: config_1.Config.kinveyAppSecret,
    apiHostname: config_1.Config.kinveyApiHostname,
    micHostname: config_1.Config.kinveyMicHostname
});
/*
Push.register({
    android: {
      senderID: '982992243930'
    },
    ios: {
      alert: true,
      badge: true,
      sound: true
    }
  })
    .then((deviceToken: string) => {
      alert("Device registered.  Access token: " + deviceToken);
      //console.log("Device registered.  Access token: " + deviceToken);
    })
    .catch((error: Error) => {
      alert("Error: " + error);
      console.log("Error: " + error);
    });*/ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ludmV5LmNvbW1vbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImtpbnZleS5jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRUFBaUQ7QUFFakQsbUNBQWtDO0FBSWxDLGlEQUFpRDtBQUdqRCxnQ0FBTSxDQUFDLElBQUksQ0FBQztJQUNSLE1BQU0sRUFBRSxlQUFNLENBQUMsWUFBWTtJQUMzQixTQUFTLEVBQUUsZUFBTSxDQUFDLGVBQWU7SUFDakMsV0FBVyxFQUFFLGVBQU0sQ0FBQyxpQkFBaUI7SUFDckMsV0FBVyxFQUFFLGVBQU0sQ0FBQyxpQkFBaUI7Q0FDeEMsQ0FBQyxDQUFDO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQWtCUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtpbnZleSB9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuaW1wb3J0IHsgUHVzaCB9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNkay9wdXNoXCI7XG5cbi8vaW1wb3J0IHsgUHVzaCB9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xuXG5cbktpbnZleS5pbml0KHtcbiAgICBhcHBLZXk6IENvbmZpZy5raW52ZXlBcHBLZXksXG4gICAgYXBwU2VjcmV0OiBDb25maWcua2ludmV5QXBwU2VjcmV0LFxuICAgIGFwaUhvc3RuYW1lOiBDb25maWcua2ludmV5QXBpSG9zdG5hbWUsXG4gICAgbWljSG9zdG5hbWU6IENvbmZpZy5raW52ZXlNaWNIb3N0bmFtZVxufSk7XG5cbi8qXG5QdXNoLnJlZ2lzdGVyKHtcbiAgICBhbmRyb2lkOiB7XG4gICAgICBzZW5kZXJJRDogJzk4Mjk5MjI0MzkzMCdcbiAgICB9LFxuICAgIGlvczoge1xuICAgICAgYWxlcnQ6IHRydWUsXG4gICAgICBiYWRnZTogdHJ1ZSxcbiAgICAgIHNvdW5kOiB0cnVlXG4gICAgfVxuICB9KVxuICAgIC50aGVuKChkZXZpY2VUb2tlbjogc3RyaW5nKSA9PiB7XG4gICAgICBhbGVydChcIkRldmljZSByZWdpc3RlcmVkLiAgQWNjZXNzIHRva2VuOiBcIiArIGRldmljZVRva2VuKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJEZXZpY2UgcmVnaXN0ZXJlZC4gIEFjY2VzcyB0b2tlbjogXCIgKyBkZXZpY2VUb2tlbik7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgYWxlcnQoXCJFcnJvcjogXCIgKyBlcnJvcik7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKTtcbiAgICB9KTsqLyJdfQ==