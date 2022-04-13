// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-NaGZCJvUPMMJuzsU_adCS1haueA_OuI",
  authDomain: "la-comiqueria.firebaseapp.com",
  projectId: "la-comiqueria",
  storageBucket: "la-comiqueria.appspot.com",
  messagingSenderId: "913745669295",
  appId: "1:913745669295:web:82ffcacbed98c1568cf85a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)