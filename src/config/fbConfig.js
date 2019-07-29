import firebase from "firebase";
// import "firebase/firestore";
// import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyD2V1kTY_s29wiorVqbbfhCo70dExD5w3E",
  authDomain: "nodemcu-3aeeb.firebaseapp.com",
  databaseURL: "https://nodemcu-3aeeb.firebaseio.com",
  projectId: "nodemcu-3aeeb",
  storageBucket: "nodemcu-3aeeb.appspot.com",
  messagingSenderId: "520980630441",
  appId: "1:520980630441:web:dbe1539745ddc3a5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
