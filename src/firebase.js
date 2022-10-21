// Import the functions you need from the SDKs you need
import firebase from "firebase";
//import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdqGFWr5kXb7n4QM8YFUSDHi-m2iQvBvA",
  authDomain: "challenge-d5e9c.firebaseapp.com",
  projectId: "challenge-d5e9c",
  storageBucket: "challenge-d5e9c.appspot.com",
  messagingSenderId: "310780354659",
  appId: "1:310780354659:web:91ab4363ca6456e0d09856",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = app.firestore();
// const auth = getAuth();

// export { db, auth };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
