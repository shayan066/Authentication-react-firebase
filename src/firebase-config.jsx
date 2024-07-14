// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN2v0SawkR9vxQ75vDOD0Jw51TIF6dNWg",
  authDomain: "react-firebase-60208.firebaseapp.com",
  projectId: "react-firebase-60208",
  storageBucket: "react-firebase-60208.appspot.com",
  messagingSenderId: "315227018027",
  appId: "1:315227018027:web:c17756f086f1576871eb6e",
  measurementId: "G-VWZXPKGN4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);