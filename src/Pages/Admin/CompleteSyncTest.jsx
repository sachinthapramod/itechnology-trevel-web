// Complete Synchronization Test - Demonstrates ALL content types
import React, { useState, useEffect } from 'react';
import completeSyncService from '../../services/completeSyncService';
import completeDataService from '../../services/completeDataService';

function CompleteSyncTest() {
    const [log, setLog] = useState([]);
    const [banners, setBanners] = useState([]);
    const [about, setAbout] = useState(null);
    const [statistics, setStatistics] = useState([]);
    const [tours, setTours] = useState([]);
    const [destinations, setDestinations] = useState([]);
    const [activities, setActivities] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [guides, setGuides] = useState([]);
    const [products, setProducts] = useState([]);

    const addLog = (message) => {
        setLog(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
    };

    useEffect(() => {
        addLog('Initializing Complete Sync Test...');

        // Subscribe to all content types
        const unsubscribers = [
            completeSyncService.subscribe('banners', (data) => {
                addLog(`Banners updated: ${data.length} items`);
                setBanners(data);
            }),
            completeSyncService.subscribe('about', (data) => {
                addLog(`About section updated`);
                setAbout(data);
            }),
            completeSyncService.subscribe('statistics', (data) => {
                addLog(`Statistics updated: ${data.length} items`);
                setStatistics(data);
            }),
            completeSyncService.subscribe('tours', (data) => {
                addLog(`Tours updated: ${data.length} items`);
                setTours(data);
            }),
            completeSyncService.subscribe('destinations', (data) => {
                addLog(`Destinations updated: ${data.length} items`);
                setDestinations(data);
            }),
            completeSyncService.subscribe('activities', (data) => {
                addLog(`Activities updated: ${data.length} items`);
                setActivities(data);
            }),
            completeSyncService.subscribe('blogPosts', (data) => {
                addLog(`Blogs updated: ${data.length} items`);
                setBlogs(data);
            }),
            completeSyncService.subscribe('testimonials', (data) => {
                addLog(`Testimonials updated: ${data.length} items`);
                setTestimonials(data);
            }),
            completeSyncService.subscribe('guides', (data) => {
                addLog(`Guides updated: ${data.length} items`);
                setGuides(data);
            }),
            completeSyncService.subscribe('products', (data) => {
                addLog(`Products updated: ${data.length} items`);
                setProducts(data);
            })
        ];

        return () => {
            unsubscribers.forEach(unsubscribe => unsubscribe());
        };
    }, []);

    const runCompleteSyncTest = async () => {
        addLog('--- Starting Complete Synchronization Test ---');

        // Test Banner Management
        addLog('Testing Banner Management...');
        const newBanner = await completeDataService.createBanner({
            title: 'Test Banner - Created',
            subtitle: 'This is a test banner created during sync test',
            backgroundImage: '/assets/img/hero/hero_bg_1_1.jpg',
            button1Text: 'Test Button 1',
            button1Link: '/test',
            button2Text: 'Test Button 2',
            button2Link: '/test2',
            active: true,
            order: 99
        });
        addLog(`Created Banner: ${newBanner.title} (ID: ${newBanner.id})`);
        await new Promise(resolve => setTimeout(resolve, 500));

        // Test About Section
        addLog('Testing About Section...');
        await completeDataService.updateAbout({
            title: 'Updated About Title',
            subtitle: 'Updated Subtitle',
            description: 'This about section has been updated during the sync test.'
        });
        addLog('Updated About Section');
        await new Promise(resolve => setTimeout(resolve, 500));

        // Test Statistics
        addLog('Testing Statistics...');
        await completeDataService.updateStatistics([
            { id: 1, value: 15, suffix: "", title: "Years Experience" },
            { id: 2, value: 99, suffix: "%", title: "Retention Rate" },
            { id: 3, value: 10, suffix: "k", title: "Tour Completed" },
            { id: 4, value: 25, suffix: "k", title: "Happy Travellers" }
        ]);
        addLog('Updated Statistics');
        await new Promise(resolve => setTimeout(resolve, 500));

        // Test Tour Management
        addLog('Testing Tour Management...');
        const newTour = await completeDataService.createTour({
            name: 'Complete Sync Test Tour',
            description: 'A tour created during complete sync test',
            price: 1500,
            duration: '10 Days',
            difficulty: 'Hard',
            location: 'Test Location',
            image: '/assets/img/tour/tour_box_test.jpg',
            featured: true
        });
        addLog(`Created Tour: ${newTour.name} (ID: ${newTour.id})`);
        await new Promise(resolve => setTimeout(resolve, 500));

        // Test Destination Management
        addLog('Testing Destination Management...');
        const newDestination = await completeDataService.createDestination({
            name: 'Complete Sync Test Destination',
            country: 'Testland',
            description: 'A destination created during complete sync test',
            image: '/assets/img/destination/destination_test.jpg',
            featured: true,
            tours: 1
        });
        addLog(`Created Destination: ${newDestination.name} (ID: ${newDestination.id})`);
        await new Promise(resolve => setTimeout(resolve, 500));

        // Test Activity Management
        addLog('Testing Activity Management...');
        const newActivity = await completeDataService.createActivity({
            name: 'Complete Sync Test Activity',
            description: 'An activity created during complete sync test',
            category: 'Adventure',
            duration: '3 hours',
            difficulty: 'Medium',
            price: 200,
            image: '/assets/img/tour/tour_5_test.jpg',
            featured: true
        });
        addLog(`Created Activity: ${newActivity.name} (ID: ${newActivity.id})`);
        await new Promise(resolve => setTimeout(resolve, 500));

        // Test Blog Management
        addLog('Testing Blog Management...');
        const newBlog = await completeDataService.createBlogPost({
            title: 'Complete Sync Test Blog Post',
            content: 'This is a blog post created during the complete sync test.',
            excerpt: 'Excerpt for complete sync test blog post.',
            author: 'Sync Tester',
            category: 'Test',
            image: '/assets/img/blog/blog_test.jpg',
            featured: true,
            published: true,
            date: new Date().toISOString(),
            readTime: '5 min read'
        });
        addLog(`Created Blog: ${newBlog.title} (ID: ${newBlog.id})`);
        await new Promise(resolve => setTimeout(resolve, 500));

        // Test Testimonial Management
        addLog('Testing Testimonial Management...');
        const newTestimonial = await completeDataService.createTestimonial({
            name: 'Complete Sync Test Customer',
            designation: 'Test Traveller',
            image: '/assets/img/testimonial/testi_test.jpg',
            text: 'This is a testimonial created during the complete sync test.',
            rating: 5,
            featured: true
        });
        addLog(`Created Testimonial: ${newTestimonial.name} (ID: ${newTestimonial.id})`);
        await new Promise(resolve => setTimeout(resolve, 500));

        // Test Guide Management
        addLog('Testing Guide Management...');
        const newGuide = await completeDataService.createGuide({
            name: 'Complete Sync Test Guide',
            image: '/assets/img/team/team_test.jpg',
            designation: 'Test Guide',
            experience: '2 years',
            languages: ['English', 'Test'],
            specialties: ['Test Tours'],
            rating: 4.8,
            featured: true,
            socialMedia: {
                facebook: 'https://facebook.com/test',
                twitter: 'https://twitter.com/test',
                instagram: 'https://instagram.com/test',
                linkedin: 'https://linkedin.com/in/test'
            }
        });
        addLog(`Created Guide: ${newGuide.name} (ID: ${newGuide.id})`);
        await new Promise(resolve => setTimeout(resolve, 500));

        // Test Product Management
        addLog('Testing Product Management...');
        const newProduct = await completeDataService.createProduct({
            name: 'Complete Sync Test Product',
            description: 'A product created during complete sync test',
            price: 99.99,
            category: 'Test',
            image: '/assets/img/shop/shop_test.jpg',
            stock: 10,
            featured: true,
            available: true
        });
        addLog(`Created Product: ${newProduct.name} (ID: ${newProduct.id})`);
        await new Promise(resolve => setTimeout(resolve, 500));

        addLog('--- Complete Synchronization Test Finished ---');
        addLog('All content types have been tested and synchronized!');
    };

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
            <h1>Complete Synchronization Test</h1>
            <p>This page demonstrates real-time synchronization between the admin dashboard and ALL frontend components.</p>
            <p>Open <code>http://localhost:3000/complete-sync</code> in another tab to see the synchronized frontend update live.</p>

            <button 
                onClick={runCompleteSyncTest} 
                style={{ 
                    padding: '15px 30px', 
                    fontSize: '18px', 
                    backgroundColor: '#28a745', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px', 
                    cursor: 'pointer',
                    marginBottom: '20px'
                }}
            >
                Test Complete Synchronization
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                <div style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                    <h3>Banners ({banners.length})</h3>
                    <ul>
                        {banners.map(banner => <li key={banner.id}>{banner.title}</li>)}
                    </ul>
                </div>
                <div style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                    <h3>About Section</h3>
                    <p>{about ? about.title : 'Loading...'}</p>
                </div>
                <div style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                    <h3>Statistics ({statistics.length})</h3>
                    <ul>
                        {statistics.map(stat => <li key={stat.id}>{stat.title}: {stat.value}{stat.suffix}</li>)}
                    </ul>
                </div>
                <div style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                    <h3>Tours ({tours.length})</h3>
                    <ul>
                        {tours.map(tour => <li key={tour.id}>{tour.name} (${tour.price})</li>)}
                    </ul>
                </div>
                <div style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                    <h3>Destinations ({destinations.length})</h3>
                    <ul>
                        {destinations.map(dest => <li key={dest.id}>{dest.name} ({dest.country})</li>)}
                    </ul>
                </div>
                <div style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                    <h3>Activities ({activities.length})</h3>
                    <ul>
                        {activities.map(activity => <li key={activity.id}>{activity.name} (${activity.price})</li>)}
                    </ul>
                </div>
                <div style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                    <h3>Blogs ({blogs.length})</h3>
                    <ul>
                        {blogs.map(blog => <li key={blog.id}>{blog.title}</li>)}
                    </ul>
                </div>
                <div style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                    <h3>Testimonials ({testimonials.length})</h3>
                    <ul>
                        {testimonials.map(testimonial => <li key={testimonial.id}>{testimonial.name}</li>)}
                    </ul>
                </div>
                <div style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                    <h3>Guides ({guides.length})</h3>
                    <ul>
                        {guides.map(guide => <li key={guide.id}>{guide.name}</li>)}
                    </ul>
                </div>
                <div style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                    <h3>Products ({products.length})</h3>
                    <ul>
                        {products.map(product => <li key={product.id}>{product.name} (${product.price})</li>)}
                    </ul>
                </div>
            </div>

            <h2>Activity Log</h2>
            <div style={{ 
                border: '1px solid #ccc', 
                padding: '15px', 
                height: '300px', 
                overflowY: 'scroll', 
                backgroundColor: '#f0f0f0',
                borderRadius: '8px'
            }}>
                {log.map((entry, index) => (
                    <p key={index} style={{ margin: '0', borderBottom: '1px dotted #ddd', paddingBottom: '5px', marginBottom: '5px' }}>{entry}</p>
                ))}
            </div>
        </div>
    );
}

export default CompleteSyncTest;
