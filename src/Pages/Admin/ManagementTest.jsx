// Management Test Page - Test all CRUD operations
import React, { useState, useEffect } from 'react';
import dataService from '../../services/dataService';

function ManagementTest() {
    const [testResults, setTestResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        runAllTests();
    }, []);

    const runAllTests = async () => {
        const results = [];
        
        try {
            // Test Tours
            console.log('Testing Tours...');
            const tour = {
                name: 'Test Tour ' + Date.now(),
                description: 'This is a test tour',
                price: 100,
                duration: '1 day',
                difficulty: 'Easy',
                location: 'Test Location',
                image: 'https://via.placeholder.com/300x200',
                featured: false
            };
            
            const createdTour = await dataService.createTour(tour);
            results.push({ category: 'Tours', operation: 'Create', status: '✅ Passed', data: createdTour.name });
            
            const updatedTour = await dataService.updateTour(createdTour.id, { ...createdTour, name: 'Updated Test Tour' });
            results.push({ category: 'Tours', operation: 'Update', status: '✅ Passed', data: updatedTour.name });
            
            await dataService.deleteTour(createdTour.id);
            results.push({ category: 'Tours', operation: 'Delete', status: '✅ Passed', data: 'Tour deleted' });

            // Test Destinations
            console.log('Testing Destinations...');
            const destination = {
                name: 'Test Destination ' + Date.now(),
                description: 'This is a test destination',
                country: 'Test Country',
                image: 'https://via.placeholder.com/300x200',
                featured: false
            };
            
            const createdDestination = await dataService.createDestination(destination);
            results.push({ category: 'Destinations', operation: 'Create', status: '✅ Passed', data: createdDestination.name });
            
            const updatedDestination = await dataService.updateDestination(createdDestination.id, { ...createdDestination, name: 'Updated Test Destination' });
            results.push({ category: 'Destinations', operation: 'Update', status: '✅ Passed', data: updatedDestination.name });
            
            await dataService.deleteDestination(createdDestination.id);
            results.push({ category: 'Destinations', operation: 'Delete', status: '✅ Passed', data: 'Destination deleted' });

            // Test Activities
            console.log('Testing Activities...');
            const activity = {
                name: 'Test Activity ' + Date.now(),
                description: 'This is a test activity',
                category: 'Adventure',
                duration: '2 hours',
                difficulty: 'Medium',
                price: 50,
                image: 'https://via.placeholder.com/300x200',
                featured: false
            };
            
            const createdActivity = await dataService.createActivity(activity);
            results.push({ category: 'Activities', operation: 'Create', status: '✅ Passed', data: createdActivity.name });
            
            const updatedActivity = await dataService.updateActivity(createdActivity.id, { ...createdActivity, name: 'Updated Test Activity' });
            results.push({ category: 'Activities', operation: 'Update', status: '✅ Passed', data: updatedActivity.name });
            
            await dataService.deleteActivity(createdActivity.id);
            results.push({ category: 'Activities', operation: 'Delete', status: '✅ Passed', data: 'Activity deleted' });

            // Test Blogs
            console.log('Testing Blogs...');
            const blog = {
                title: 'Test Blog ' + Date.now(),
                content: 'This is a test blog post content',
                author: 'Test Author',
                category: 'Travel',
                image: 'https://via.placeholder.com/300x200',
                featured: false,
                published: true
            };
            
            const createdBlog = await dataService.createBlog(blog);
            results.push({ category: 'Blogs', operation: 'Create', status: '✅ Passed', data: createdBlog.title });
            
            const updatedBlog = await dataService.updateBlog(createdBlog.id, { ...createdBlog, title: 'Updated Test Blog' });
            results.push({ category: 'Blogs', operation: 'Update', status: '✅ Passed', data: updatedBlog.title });
            
            await dataService.deleteBlog(createdBlog.id);
            results.push({ category: 'Blogs', operation: 'Delete', status: '✅ Passed', data: 'Blog deleted' });

            // Test Shop Products
            console.log('Testing Shop Products...');
            const product = {
                name: 'Test Product ' + Date.now(),
                description: 'This is a test product',
                price: 25.99,
                category: 'Accessories',
                stock: 10,
                image: 'https://via.placeholder.com/300x200',
                featured: false,
                available: true
            };
            
            const createdProduct = await dataService.createShopProduct(product);
            results.push({ category: 'Shop Products', operation: 'Create', status: '✅ Passed', data: createdProduct.name });
            
            const updatedProduct = await dataService.updateShopProduct(createdProduct.id, { ...createdProduct, name: 'Updated Test Product' });
            results.push({ category: 'Shop Products', operation: 'Update', status: '✅ Passed', data: updatedProduct.name });
            
            await dataService.deleteShopProduct(createdProduct.id);
            results.push({ category: 'Shop Products', operation: 'Delete', status: '✅ Passed', data: 'Product deleted' });
            
        } catch (error) {
            console.error('Test failed:', error);
            results.push({ category: 'Error', operation: 'Test', status: '❌ Failed', data: error.message });
        }
        
        setTestResults(results);
        setLoading(false);
    };

    if (loading) {
        return <div style={{ padding: '20px', textAlign: 'center' }}>Running comprehensive tests...</div>;
    }

    const groupedResults = testResults.reduce((acc, result) => {
        if (!acc[result.category]) {
            acc[result.category] = [];
        }
        acc[result.category].push(result);
        return acc;
    }, {});

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>🧪 Management System Test Results</h1>
            <p>This page tests all CRUD operations for all management modules.</p>
            
            {Object.entries(groupedResults).map(([category, results]) => (
                <div key={category} style={{ marginBottom: '30px' }}>
                    <h2 style={{ 
                        backgroundColor: '#f8f9fa', 
                        padding: '10px', 
                        borderRadius: '5px',
                        borderLeft: '4px solid #007bff'
                    }}>
                        {category}
                    </h2>
                    {results.map((result, index) => (
                        <div key={index} style={{ 
                            padding: '10px', 
                            margin: '5px 0', 
                            backgroundColor: result.status.includes('✅') ? '#d4edda' : '#f8d7da',
                            border: '1px solid ' + (result.status.includes('✅') ? '#c3e6cb' : '#f5c6cb'),
                            borderRadius: '4px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div>
                                <strong>{result.operation}:</strong> {result.data}
                            </div>
                            <div style={{ 
                                fontSize: '18px',
                                fontWeight: 'bold'
                            }}>
                                {result.status}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            
            <div style={{ 
                marginTop: '30px', 
                padding: '20px', 
                backgroundColor: '#e7f3ff', 
                borderRadius: '8px',
                border: '1px solid #b3d9ff'
            }}>
                <h3>🎯 Next Steps:</h3>
                <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
                    <li>If all tests passed, all management modules are working correctly</li>
                    <li>Go to <a href="/admin/tours" target="_blank">/admin/tours</a> to test the UI</li>
                    <li>Go to <a href="/admin/destinations" target="_blank">/admin/destinations</a> to test destinations</li>
                    <li>Go to <a href="/admin/activities" target="_blank">/admin/activities</a> to test activities</li>
                    <li>Go to <a href="/admin/blog" target="_blank">/admin/blog</a> to test blog posts</li>
                    <li>Go to <a href="/admin/shop" target="_blank">/admin/shop</a> to test shop products</li>
                </ul>
            </div>
        </div>
    );
}

export default ManagementTest;
