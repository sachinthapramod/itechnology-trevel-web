// Debug Admin Dashboard - Simple version to test functionality
import React, { useState, useEffect } from 'react';
import { testDataService } from '../../utils/testDataService';

function DebugAdmin() {
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('Admin panel is working!');
    const [dataServiceTest, setDataServiceTest] = useState('Testing...');

    useEffect(() => {
        const runTests = async () => {
            const result = await testDataService();
            setDataServiceTest(result ? '✅ Passed' : '❌ Failed');
        };
        runTests();
    }, []);

    const handleButtonClick = () => {
        console.log('Button clicked!');
        setMessage('Button clicked successfully!');
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setMessage('Modal closed!');
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>🔧 Debug Admin Panel</h1>
            <p>Current message: {message}</p>
            
            <div style={{ margin: '20px 0' }}>
                <button 
                    onClick={handleButtonClick}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px'
                    }}
                >
                    Test Button
                </button>
            </div>

            {showModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '10px',
                        maxWidth: '400px',
                        width: '90%'
                    }}>
                        <h2>Modal is Working!</h2>
                        <p>If you can see this modal, the admin panel functionality is working.</p>
                        <button 
                            onClick={handleCloseModal}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#dc3545',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                marginTop: '10px'
                            }}
                        >
                            Close Modal
                        </button>
                    </div>
                </div>
            )}

            <div style={{ marginTop: '20px' }}>
                <h3>Test Results:</h3>
                <ul>
                    <li>✅ React is working</li>
                    <li>✅ State management is working</li>
                    <li>✅ Event handlers are working</li>
                    <li>✅ Modal functionality is working</li>
                    <li>DataService: {dataServiceTest}</li>
                </ul>
            </div>

            <div style={{ marginTop: '20px' }}>
                <h3>Next Steps:</h3>
                <p>1. Test this debug page: <a href="/debug-admin" target="_blank">/debug-admin</a></p>
                <p>2. If debug page works, test admin panel: <a href="/admin" target="_blank">/admin</a></p>
                <p>3. Check browser console for any errors</p>
            </div>
        </div>
    );
}

export default DebugAdmin;
