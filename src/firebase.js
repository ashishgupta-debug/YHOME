// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "yhome-7f016.firebaseapp.com",
  projectId: "yhome-7f016",
  storageBucket: "yhome-7f016.firebasestorage.app",
  messagingSenderId: "791680175067",
  appId: "1:791680175067:web:d8d0f1aa4c08a412d8b5fe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);