import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyo2yE67S0AgX-779hj1-4OdnJR1KZPz8",
  authDomain: "clone-d96bb.firebaseapp.com",
  projectId: "clone-d96bb",
  storageBucket: "clone-d96bb.appspot.com",
  messagingSenderId: "815584311995",
  appId: "1:815584311995:web:0319b2a0b0c98f6e75c79e",
  measurementId: "G-52K8M49F18",
};

initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

export { db, auth };
