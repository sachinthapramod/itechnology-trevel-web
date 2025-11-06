// Simple test page to verify admin panel is working
import React from 'react';

function TestPage() {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>🎉 Admin Panel is Working!</h1>
            <p>If you can see this page, the admin panel is working correctly.</p>
            <div style={{ marginTop: '20px' }}>
                <a href="/admin" style={{ 
                    display: 'inline-block', 
                    padding: '10px 20px', 
                    backgroundColor: '#007bff', 
                    color: 'white', 
                    textDecoration: 'none', 
                    borderRadius: '5px' 
                }}>
                    Go to Admin Dashboard
                </a>
            </div>
        </div>
    );
}

export default TestPage;
