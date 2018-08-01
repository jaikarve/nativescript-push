import { Kinvey } from "kinvey-nativescript-sdk";

import { Config } from "./config";

import { Push } from "kinvey-nativescript-sdk/push";

//import { Push } from "kinvey-nativescript-sdk";


Kinvey.init({
    appKey: Config.kinveyAppKey,
    appSecret: Config.kinveyAppSecret,
    apiHostname: Config.kinveyApiHostname,
    micHostname: Config.kinveyMicHostname
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