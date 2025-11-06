// Sync Test Page - Demonstrates frontend-backend synchronization
import React, { useState, useEffect } from 'react';
import frontendSyncService from '../../services/frontendSyncService';

function SyncTest() {
    const [tours, setTours] = useState([]);
    const [destinations, setDestinations] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadAllData();
        
        // Subscribe to all data changes
        const unsubscribeTours = frontendSyncService.subscribe('tours', setTours);
        const unsubscribeDestinations = frontendSyncService.subscribe('destinations', setDestinations);
        const unsubscribeBlogs = frontendSyncService.subscribe('blogs', setBlogs);
        const unsubscribeProducts = frontendSyncService.subscribe('products', setProducts);

        return () => {
            unsubscribeTours();
            unsubscribeDestinations();
            unsubscribeBlogs();
            unsubscribeProducts();
        };
    }, []);

    const loadAllData = async () => {
        try {
            setLoading(true);
            const [toursData, destinationsData, blogsData, productsData] = await Promise.all([
                frontendSyncService.getData('tours'),
                frontendSyncService.getData('destinations'),
                frontendSyncService.getData('blogs'),
                frontendSyncService.getData('products')
            ]);
            
            setTours(toursData);
            setDestinations(destinationsData);
            setBlogs(blogsData);
            setProducts(productsData);
        } catch (error) {
            console.error('Error loading data:', error);
        } finally {
            setLoading(false);
        }
    };

    const testSync = async () => {
        try {
            // Create a test tour
            const testTour = {
                name: 'Sync Test Tour ' + Date.now(),
                description: 'This tour was created to test synchronization',
                price: 199,
                duration: '2 days',
                difficulty: 'Easy',
                location: 'Test Location',
                image: 'https://via.placeholder.com/300x200',
                featured: true
            };

            const createdTour = await frontendSyncService.create('tours', testTour);
            alert(`Tour created: ${createdTour.name}. Check the frontend at /sync to see it appear!`);
            
            // Wait 2 seconds then update it
            setTimeout(async () => {
                const updatedTour = await frontendSyncService.update('tours', createdTour.id, {
                    ...createdTour,
                    name: 'Updated Sync Test Tour',
                    price: 299
                });
                alert(`Tour updated: ${updatedTour.name}. Check the frontend to see the changes!`);
                
                // Wait 2 seconds then delete it
                setTimeout(async () => {
                    await frontendSyncService.delete('tours', createdTour.id);
                    alert('Tour deleted! Check the frontend to see it disappear!');
                }, 2000);
            }, 2000);
            
        } catch (error) {
            console.error('Sync test failed:', error);
            alert('Sync test failed: ' + error.message);
        }
    };

    if (loading) {
        return <div style={{ padding: '20px', textAlign: 'center' }}>Loading data...</div>;
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>🔄 Frontend-Backend Synchronization Test</h1>
            <p>This page demonstrates real-time synchronization between admin dashboard and frontend.</p>
            
            <div style={{ 
                backgroundColor: '#e7f3ff', 
                padding: '20px', 
                borderRadius: '8px', 
                marginBottom: '20px',
                border: '1px solid #b3d9ff'
            }}>
                <h3>🧪 Live Sync Test</h3>
                <p>Click the button below to test real-time synchronization:</p>
                <button 
                    onClick={testSync}
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
                    Test Live Synchronization
                </button>
                <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
                    This will create, update, and delete a tour while you watch the frontend change in real-time.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
                    <h3>Tours ({tours.length})</h3>
                    {tours.slice(0, 3).map(tour => (
                        <div key={tour.id} style={{ 
                            padding: '10px', 
                            margin: '5px 0', 
                            backgroundColor: '#f8f9fa',
                            borderRadius: '4px'
                        }}>
                            <strong>{tour.name}</strong> - ${tour.price}
                            {tour.featured && <span style={{ color: '#ff6b35', marginLeft: '10px' }}>⭐ Featured</span>}
                        </div>
                    ))}
                    {tours.length > 3 && <p style={{ color: '#666' }}>... and {tours.length - 3} more</p>}
                </div>

                <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
                    <h3>Destinations ({destinations.length})</h3>
                    {destinations.slice(0, 3).map(dest => (
                        <div key={dest.id} style={{ 
                            padding: '10px', 
                            margin: '5px 0', 
                            backgroundColor: '#f8f9fa',
                            borderRadius: '4px'
                        }}>
                            <strong>{dest.name}</strong> - {dest.country}
                            {dest.featured && <span style={{ color: '#ff6b35', marginLeft: '10px' }}>⭐ Featured</span>}
                        </div>
                    ))}
                    {destinations.length > 3 && <p style={{ color: '#666' }}>... and {destinations.length - 3} more</p>}
                </div>

                <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
                    <h3>Blog Posts ({blogs.length})</h3>
                    {blogs.slice(0, 3).map(blog => (
                        <div key={blog.id} style={{ 
                            padding: '10px', 
                            margin: '5px 0', 
                            backgroundColor: '#f8f9fa',
                            borderRadius: '4px'
                        }}>
                            <strong>{blog.title}</strong> by {blog.author}
                            {blog.featured && <span style={{ color: '#ff6b35', marginLeft: '10px' }}>⭐ Featured</span>}
                        </div>
                    ))}
                    {blogs.length > 3 && <p style={{ color: '#666' }}>... and {blogs.length - 3} more</p>}
                </div>

                <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
                    <h3>Products ({products.length})</h3>
                    {products.slice(0, 3).map(product => (
                        <div key={product.id} style={{ 
                            padding: '10px', 
                            margin: '5px 0', 
                            backgroundColor: '#f8f9fa',
                            borderRadius: '4px'
                        }}>
                            <strong>{product.name}</strong> - ${product.price}
                            {product.featured && <span style={{ color: '#ff6b35', marginLeft: '10px' }}>⭐ Featured</span>}
                        </div>
                    ))}
                    {products.length > 3 && <p style={{ color: '#666' }}>... and {products.length - 3} more</p>}
                </div>
            </div>

            <div style={{ 
                marginTop: '30px', 
                padding: '20px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '8px',
                border: '1px solid #dee2e6'
            }}>
                <h3>🎯 How to Test Synchronization:</h3>
                <ol style={{ margin: '10px 0', paddingLeft: '20px' }}>
                    <li>Open the synchronized frontend: <a href="/sync" target="_blank">/sync</a></li>
                    <li>Open the admin dashboard: <a href="/admin" target="_blank">/admin</a></li>
                    <li>In the admin dashboard, add/edit/delete tours, destinations, blogs, or products</li>
                    <li>Watch the frontend update in real-time!</li>
                </ol>
                
                <h4>Test URLs:</h4>
                <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
                    <li><strong>Original Frontend:</strong> <a href="/" target="_blank">/</a> (static data)</li>
                    <li><strong>Synchronized Frontend:</strong> <a href="/sync" target="_blank">/sync</a> (admin-controlled data)</li>
                    <li><strong>Admin Dashboard:</strong> <a href="/admin" target="_blank">/admin</a> (manage all content)</li>
                </ul>
            </div>
        </div>
    );
}

export default SyncTest;
