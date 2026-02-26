// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMWqy6ESC3q0PLX9a2M5ziMuLjFrJgCN8",
  authDomain: "openforge-60e5c.firebaseapp.com",
  projectId: "openforge-60e5c",
  storageBucket: "openforge-60e5c.firebasestorage.app",
  messagingSenderId: "200532808951",
  appId: "1:200532808951:web:8d70cb65af137f3f5feff2",
  measurementId: "G-P37VKD3NKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
