import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBBRYwSjZhmdM3GlbyLXgLXTFeC3uWBu14",
  authDomain: "parcial-2-ffb56.firebaseapp.com",
  projectId: "parcial-2-ffb56",
  storageBucket: "parcial-2-ffb56.firebasestorage.app",
  messagingSenderId: "402801301189",
  appId: "1:402801301189:web:94a574968675f5862842ac",
  measurementId: "G-H2MW4GQQGZ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export const subscribeAuth = (cb) => onAuthStateChanged(auth, cb);
