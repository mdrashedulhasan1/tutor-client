// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVYA3r5By1ZwUPwWu_CGi51Nd5MGVtFwY",
  authDomain: "tutor-portal-7faa0.firebaseapp.com",
  projectId: "tutor-portal-7faa0",
  storageBucket: "tutor-portal-7faa0.appspot.com",
  messagingSenderId: "727324080132",
  appId: "1:727324080132:web:40a0fa2f716891b7bd5d51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;