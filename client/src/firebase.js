// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-6fa5f.firebaseapp.com",
  projectId: "blog-6fa5f",
  storageBucket: "blog-6fa5f.appspot.com",
  messagingSenderId: "432632487715",
  appId: "1:432632487715:web:b6679f471e58f9ccbbb696"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

