import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBox39uQWBPw0qTWxJbWzYMBPuipoB0wYQ",
  authDomain: "forwik.firebaseapp.com",
  databaseURL: "https://forwik.firebaseio.com",
  projectId: "forwik",
  storageBucket: "forwik.appspot.com",
  messagingSenderId: "549954363793",
  appId: "1:549954363793:web:b6dd704e854830102cfa30",
  measurementId: "G-PEF8SY6WL0"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
