// Firebase Configuration
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration
// Uses environment variables for security
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyC6N-YF84aXLZv1m1H60V2NYnfB5hhDIk0",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "tourm-admin.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "tourm-admin",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "tourm-admin.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "758192103043",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:758192103043:web:c11180ccdde8601cafc5b6",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-Z8F41S7ET7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
