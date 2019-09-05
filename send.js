const admin = require("firebase-admin");

const serviceAccount = require("../FCM/secrets/fcm.json");


const firebaseToken = 'abcdeabcdeabcde'; // This token will be received from the client end

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fcm-node-5b035.firebaseio.com"
});

const payload = {
    notification: {
        title: 'Test messagings',
        body: 'This is an example notification',
    }
};

const options = {
    priority: 'high',
    timeToLive: 60 * 60 * 24, // 1 day
};


admin.messaging().sendToDevice(firebaseToken, payload, options)
    .then(msg => console.log("Sent Notification", msg))
    .catch(err => console.log("err", err));


