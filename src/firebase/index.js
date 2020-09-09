import * as firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBmOoL_em_vnyxHbYrr64U0Po2Z-eibGCs",
  authDomain: "react-firebase-101-1d61a.firebaseapp.com",
  databaseURL: "https://react-firebase-101-1d61a.firebaseio.com",
  projectId: "react-firebase-101-1d61a",
  storageBucket: "react-firebase-101-1d61a.appspot.com",
  messagingSenderId: "683451040092",
  appId: "1:683451040092:web:535f5e9a434d29ebf64199",
  measurementId: "G-CWLEGE1CMZ",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
