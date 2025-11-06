// DataService Test Component
import React, { useState, useEffect } from 'react';
import dataService from '../../services/dataService';

function DataServiceTest() {
    const [testResults, setTestResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        runTests();
    }, []);

    const runTests = async () => {
        const results = [];
        
        try {
            // Test 1: Get Tours
            console.log('Testing getTours...');
            const tours = await dataService.getTours();
            results.push({ test: 'getTours', status: '✅ Passed', data: tours.length + ' tours' });
            
            // Test 2: Create Tour
            console.log('Testing createTour...');
            const newTour = {
                name: 'Test Tour ' + Date.now(),
                description: 'This is a test tour',
                price: 100,
                duration: '1 day',
                difficulty: 'Easy',
                location: 'Test Location',
                image: 'https://via.placeholder.com/300x200',
                featured: false
            };
            
            const createdTour = await dataService.createTour(newTour);
            results.push({ test: 'createTour', status: '✅ Passed', data: 'Created tour: ' + createdTour.name });
            
            // Test 3: Update Tour
            console.log('Testing updateTour...');
            const updatedTour = await dataService.updateTour(createdTour.id, {
                ...createdTour,
                name: 'Updated Test Tour'
            });
            results.push({ test: 'updateTour', status: '✅ Passed', data: 'Updated to: ' + updatedTour.name });
            
            // Test 4: Delete Tour
            console.log('Testing deleteTour...');
            await dataService.deleteTour(createdTour.id);
            results.push({ test: 'deleteTour', status: '✅ Passed', data: 'Tour deleted' });
            
        } catch (error) {
            console.error('Test failed:', error);
            results.push({ test: 'Error', status: '❌ Failed', data: error.message });
        }
        
        setTestResults(results);
        setLoading(false);
    };

    if (loading) {
        return <div style={{ padding: '20px' }}>Running tests...</div>;
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>🧪 DataService Test Results</h1>
            
            <div style={{ marginBottom: '20px' }}>
                {testResults.map((result, index) => (
                    <div key={index} style={{ 
                        padding: '10px', 
                        margin: '5px 0', 
                        backgroundColor: result.status.includes('✅') ? '#d4edda' : '#f8d7da',
                        border: '1px solid ' + (result.status.includes('✅') ? '#c3e6cb' : '#f5c6cb'),
                        borderRadius: '4px'
                    }}>
                        <strong>{result.test}:</strong> {result.status} - {result.data}
                    </div>
                ))}
            </div>
            
            <div style={{ marginTop: '20px' }}>
                <h3>Next Steps:</h3>
                <p>1. If all tests passed, the dataService is working correctly</p>
                <p>2. Go to <a href="/admin/tours" target="_blank">/admin/tours</a> to test the tour management</p>
                <p>3. Try adding, editing, and deleting tours</p>
            </div>
        </div>
    );
}

export default DataServiceTest;
