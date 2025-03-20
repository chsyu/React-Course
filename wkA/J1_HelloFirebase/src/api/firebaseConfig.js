import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBmwntISprOhf0SjmcD8qPk6R6eOW3nit8",
  authDomain: "react2025-45f2b.firebaseapp.com",
  projectId: "react2025-45f2b",
  storageBucket: "react2025-45f2b.firebasestorage.app",
  messagingSenderId: "898704890726",
  appId: "1:898704890726:web:fb538bca3d1821220886a7",
};

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

// REFERENCE AUTH
const auth = getAuth(app);

export { db, auth };
