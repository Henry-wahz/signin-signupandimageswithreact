// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBVlhpBwt1mqLsbHjAjCjmZwIRKUKoBBeo",
  authDomain: "sign-5e056.firebaseapp.com",
  projectId: "sign-5e056",
  storageBucket: "sign-5e056.firebasestorage.app",
  messagingSenderId: "479468729779",
  appId: "1:479468729779:web:d46c609967493f0ab4c7c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);