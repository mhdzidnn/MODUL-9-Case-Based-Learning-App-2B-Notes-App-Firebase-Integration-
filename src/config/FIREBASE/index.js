import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyBoyROTzKIlUZiZvJSazegFN2e8KncBCOU",
    authDomain: "note-apps-98fc4.firebaseapp.com",
    databaseURL: "https://note-apps-98fc4-default-rtdb.firebaseio.com",
    projectId: "note-apps-98fc4",
    storageBucket: "note-apps-98fc4.appspot.com",
    messagingSenderId: "10807874069",
    appId: "1:10807874069:web:f089a95a7ea5c2b95df41c"
});

const FIREBASE = firebase;

export default FIREBASE;