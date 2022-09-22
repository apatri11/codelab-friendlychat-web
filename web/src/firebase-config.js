/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBI9kYyRo_x6PQskq-hHR5pWx6VNNIT358",
  authDomain: "friendlychat-70948.firebaseapp.com",
  projectId: "friendlychat-70948",
  storageBucket: "friendlychat-70948.appspot.com",
  messagingSenderId: "347190127505",
  appId: "1:347190127505:web:b07cac84de3256ca4fc830"
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
