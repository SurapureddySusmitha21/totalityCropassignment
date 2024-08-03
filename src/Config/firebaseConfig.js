// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmXplqxKoUOCGfMvP4Fvu4_W4qYa8lvvw",
  authDomain: "totality-corp-app-49102.firebaseapp.com",
  projectId: "totality-corp-app-49102",
  storageBucket: "totality-corp-app-49102.appspot.com",
  messagingSenderId: "158154416033",
  appId: "1:158154416033:web:fd0115339e316dc4ccf5e0",
  measurementId: "G-9YFPK8FBY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export { auth }