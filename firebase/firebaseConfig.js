import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBSDRNUFpOJfGR3OdhVM3n-s9DSzSM9OxE",
  authDomain: "guessmaster-25b6d.firebaseapp.com",
  projectId: "guessmaster-25b6d",
  storageBucket: "guessmaster-25b6d.firebasestorage.app",
  messagingSenderId: "715682511757",
  appId: "1:715682511757:web:24dd550e0a7aaf7af55bc4"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);