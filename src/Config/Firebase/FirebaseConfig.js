
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkdNwGEprjPeKBd1s3lWMbmuwjPZR1eUU",
  authDomain: "portal-7d63c.firebaseapp.com",
  projectId: "portal-7d63c",
  storageBucket: "portal-7d63c.firebasestorage.app",
  messagingSenderId: "661440577470",
  appId: "1:661440577470:web:15bc01d7b2c6f8712103ef",
  measurementId: "G-M5W7HSR2NX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);