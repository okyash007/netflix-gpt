// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAli0PEiS5n-y-ueiHwndBACBhmODp0tQ",
  authDomain: "netflix-gpt-ai.firebaseapp.com",
  projectId: "netflix-gpt-ai",
  storageBucket: "netflix-gpt-ai.appspot.com",
  messagingSenderId: "611386474856",
  appId: "1:611386474856:web:dc863c7da84ca69e7816dd",
  measurementId: "G-BZZSR89667"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();