// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOBI9hZSPml8hyriaGlbA4Sh2VwZIut-Q",
  authDomain: "assignment-11-aacfa.firebaseapp.com",
  projectId: "assignment-11-aacfa",
  storageBucket: "assignment-11-aacfa.firebasestorage.app",
  messagingSenderId: "89867349777",
  appId: "1:89867349777:web:b85a3c78d2e22a0302a6b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);