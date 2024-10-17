// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp793lbWhuSUlbMNA5QvnvKG_jlRU1DfM",
  authDomain: "projetos-b0d06.firebaseapp.com",
  projectId: "projetos-b0d06",
  storageBucket: "projetos-b0d06.appspot.com",
  messagingSenderId: "663766718980",
  appId: "1:663766718980:web:b16c1207ed6bb6f6f17351",
  measurementId: "G-CW6QTERYRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app)

export {app, auth};