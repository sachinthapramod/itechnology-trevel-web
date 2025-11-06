// Firebase Debug Utility
import { db, auth } from '../firebase/config';

export const debugFirebase = () => {
    console.log('🔍 Firebase Debug Information:');
    console.log('Firebase Config:', {
        projectId: 'tourm-admin',
        authDomain: 'tourm-admin.firebaseapp.com'
    });
    
    console.log('Firebase Services:');
    console.log('- Firestore DB:', db ? '✅ Connected' : '❌ Not connected');
    console.log('- Auth:', auth ? '✅ Connected' : '❌ Not connected');
    
    return {
        firestore: !!db,
        auth: !!auth
    };
};

export const testFirebaseAuth = async () => {
    try {
        console.log('🔐 Testing Firebase Authentication...');
        
        // Test if we can access auth
        if (!auth) {
            console.log('❌ Firebase Auth not initialized');
            return false;
        }
        
        console.log('✅ Firebase Auth initialized');
        console.log('Current user:', auth.currentUser);
        
        return true;
    } catch (error) {
        console.log('❌ Firebase Auth error:', error.message);
        return false;
    }
};

export const testFirestore = async () => {
    try {
        console.log('🗄️ Testing Firestore...');
        
        if (!db) {
            console.log('❌ Firestore not initialized');
            return false;
        }
        
        console.log('✅ Firestore initialized');
        return true;
    } catch (error) {
        console.log('❌ Firestore error:', error.message);
        return false;
    }
};
