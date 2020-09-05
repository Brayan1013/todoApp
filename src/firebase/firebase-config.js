/** @format */

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAm-gewKv-eIsCD774Y-ZJPsLB6UrU2bZo",
  authDomain: "todo-app-390d9.firebaseapp.com",
  databaseURL: "https://todo-app-390d9.firebaseio.com",
  projectId: "todo-app-390d9",
  storageBucket: "todo-app-390d9.appspot.com",
  messagingSenderId: "10963607806",
  appId: "1:10963607806:web:e653328c7de698893445af",
});

const db = firebase.firestore();

export { firebase, db };
