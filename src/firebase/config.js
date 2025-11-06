// Firebase Configuration
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration
// Replace these values with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6N-YF84aXLZv1m1H60V2NYnfB5hhDIk0",
  authDomain: "tourm-admin.firebaseapp.com",
  projectId: "tourm-admin",
  storageBucket: "tourm-admin.firebasestorage.app",
  messagingSenderId: "758192103043",
  appId: "1:758192103043:web:c11180ccdde8601cafc5b6",
  measurementId: "G-Z8F41S7ET7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
