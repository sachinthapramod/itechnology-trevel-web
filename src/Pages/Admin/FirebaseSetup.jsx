// Firebase Setup Verification Page
import React, { useState, useEffect } from 'react';
import { debugFirebase, testFirebaseAuth, testFirestore } from '../../utils/firebaseDebug';
import { testFirebaseConnection } from '../../utils/firebaseTest';

function FirebaseSetup() {
    const [tests, setTests] = useState({
        firebaseConfig: false,
        firestore: false,
        auth: false,
        connection: false
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        runTests();
    }, []);

    const runTests = async () => {
        console.log('🧪 Running Firebase Setup Tests...');
        
        // Test 1: Firebase Config
        const configTest = debugFirebase();
        setTests(prev => ({ ...prev, firebaseConfig: configTest.firestore && configTest.auth }));
        
        // Test 2: Firestore
        const firestoreTest = await testFirestore();
        setTests(prev => ({ ...prev, firestore: firestoreTest }));
        
        // Test 3: Auth
        const authTest = await testFirebaseAuth();
        setTests(prev => ({ ...prev, auth: authTest }));
        
        // Test 4: Connection
        const connectionTest = await testFirebaseConnection();
        setTests(prev => ({ ...prev, connection: connectionTest }));
        
        setLoading(false);
    };

    const allTestsPassed = Object.values(tests).every(test => test);

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>🔥 Firebase Setup Verification</h1>
            
            {loading ? (
                <div>Running tests...</div>
            ) : (
                <div>
                    <div style={{ marginBottom: '20px' }}>
                        <h2>Test Results:</h2>
                        <div style={{ display: 'grid', gap: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span>{tests.firebaseConfig ? '✅' : '❌'}</span>
                                <span>Firebase Configuration</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span>{tests.firestore ? '✅' : '❌'}</span>
                                <span>Firestore Database</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span>{tests.auth ? '✅' : '❌'}</span>
                                <span>Firebase Authentication</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span>{tests.connection ? '✅' : '❌'}</span>
                                <span>Firebase Connection</span>
                            </div>
                        </div>
                    </div>

                    {allTestsPassed ? (
                        <div style={{ 
                            background: '#d4edda', 
                            color: '#155724', 
                            padding: '15px', 
                            borderRadius: '5px',
                            marginBottom: '20px'
                        }}>
                            <h3>🎉 All Tests Passed!</h3>
                            <p>Firebase is properly configured and ready to use.</p>
                        </div>
                    ) : (
                        <div style={{ 
                            background: '#f8d7da', 
                            color: '#721c24', 
                            padding: '15px', 
                            borderRadius: '5px',
                            marginBottom: '20px'
                        }}>
                            <h3>❌ Setup Issues Found</h3>
                            <p>Please complete the Firebase setup steps below.</p>
                        </div>
                    )}

                    <div style={{ marginBottom: '20px' }}>
                        <h3>Setup Steps:</h3>
                        <ol>
                            <li>Go to <a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer">Firebase Console</a></li>
                            <li>Find your project: <strong>tourm-admin</strong></li>
                            <li>Enable Firestore Database (test mode)</li>
                            <li>Enable Authentication (Email/Password)</li>
                            <li>Create admin user: admin@tourm.com / admin123</li>
                        </ol>
                    </div>

                    <div>
                        <h3>Next Steps:</h3>
                        {allTestsPassed ? (
                            <p>✅ You can now use the admin dashboard with Firebase!</p>
                        ) : (
                            <p>❌ Please complete the Firebase setup and refresh this page.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default FirebaseSetup;
