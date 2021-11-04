import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBy9TCUN0zzgTicY6U42eiu1z7tuaf8FpU",
    authDomain: "e-commerceproject-e5ca8.firebaseapp.com",
    projectId: "e-commerceproject-e5ca8",
    storageBucket: "e-commerceproject-e5ca8.appspot.com",
    messagingSenderId: "633031069279",
    appId: "1:633031069279:web:5750f272a9b521692355ea"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth}