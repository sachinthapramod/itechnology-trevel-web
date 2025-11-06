// Firebase Connection Test
import { db, auth } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const testFirebaseConnection = async () => {
    try {
        console.log('Testing Firebase connection...');
        
        // Test Firestore connection
        const testCollection = collection(db, 'test');
        await getDocs(testCollection);
        console.log('✅ Firestore connection successful');
        
        // Test Authentication
        try {
            await signInWithEmailAndPassword(auth, 'admin@tourm.com', 'admin123');
            console.log('✅ Firebase Authentication successful');
            return true;
        } catch (authError) {
            console.log('❌ Firebase Authentication failed:', authError.message);
            console.log('Please create admin user in Firebase Console');
            return false;
        }
        
    } catch (error) {
        console.log('❌ Firebase connection failed:', error.message);
        console.log('Please check your Firebase configuration');
        return false;
    }
};

export const checkFirebaseSetup = () => {
    console.log('🔍 Checking Firebase setup...');
    console.log('1. Make sure you have created a Firebase project');
    console.log('2. Enable Firestore Database in test mode');
    console.log('3. Enable Authentication with Email/Password');
    console.log('4. Create admin user: admin@tourm.com / admin123');
    console.log('5. Check your Firebase config in src/firebase/config.js');
};
