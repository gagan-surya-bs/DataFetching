import firebase from firebase;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG_LXbCA4CAN05VZpXuK41SGhLC_urPDg",
  authDomain: "fetchdata-e7d6b.firebaseapp.com",
  projectId: "fetchdata-e7d6b",
  storageBucket: "fetchdata-e7d6b.appspot.com",
  messagingSenderId: "29816672908",
  appId: "1:29816672908:web:1ee1446e391982978761a9",
  measurementId: "G-299JTFDB6V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
