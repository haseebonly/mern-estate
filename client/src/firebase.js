// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d1904.firebaseapp.com",
  projectId: "mern-estate-d1904",
  storageBucket: "mern-estate-d1904.appspot.com",
  messagingSenderId: "939693646590",
  appId: "1:939693646590:web:6831d0af477230e79bbbaf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);