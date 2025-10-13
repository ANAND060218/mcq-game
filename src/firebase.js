// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// No need for getAnalytics in this setup unless you plan to use it

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-EmT92IGTxzNUIq49SHXli3U8-jVTIR0",
  authDomain: "nptel-quiz-4d56a.firebaseapp.com",
  projectId: "nptel-quiz-4d56a",
  storageBucket: "nptel-quiz-4d56a.appspot.com", // Corrected from .firebasestorage.app
  messagingSenderId: "104523364341",
  appId: "1:104523364341:web:69148ebb6fc7ed458b52bc",
  measurementId: "G-MJQSBN0K40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// A simple function to trigger the Google login popup
export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { auth };