// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBf-lL07HcXQZVy1OV1Sa8SNX-BB6msma8",
  authDomain: "wp-services-18155.firebaseapp.com",
  projectId: "wp-services-18155",
  storageBucket: "wp-services-18155.firebasestorage.app",
  messagingSenderId: "160842090989",
  appId: "1:160842090989:web:a49bb559d59364fa8c7fe4",
  measurementId: "G-VKBMG22W8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Auth export
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export const logout = () => {
  return signOut(auth);
};
