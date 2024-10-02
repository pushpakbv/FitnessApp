// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe-IF29zu5Yvcbugr4BXXXA-Ra8ociWHk",
  authDomain: "fitp2-f5164.firebaseapp.com",
  projectId: "fitp2-f5164",
  storageBucket: "fitp2-f5164.appspot.com",
  messagingSenderId: "140834314410",
  appId: "1:140834314410:web:956493bd1cf6dab00fd8d3",
  measurementId: "G-49Y6MM9PWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Firebase Auth
export const db = getFirestore(app); // Firestore Database
