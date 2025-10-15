import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import {getDatabase} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyBBVQERmgDv9x67LAmLiV6VFbHeKZGew1U",
  authDomain: "estructu-824d0.firebaseapp.com",
  projectId: "estructu-824d0",
  storageBucket: "estructu-824d0.firebasestorage.app",
  messagingSenderId: "146495737399",
  appId: "1:146495737399:web:03d9e51875da3d6cfd39b2",
  measurementId: "G-HHDVJ9H254"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore();
const firebaseStorage = getStorage(app);
const rtdb = getDatabase(app);

export {app, auth, analytics, googleProvider, db, firebaseStorage, rtdb}; 