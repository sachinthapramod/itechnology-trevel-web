// Test dataService functionality
import dataService from '../services/dataService';

export const testDataService = async () => {
    console.log('🧪 Testing dataService...');
    
    try {
        // Test getting tours
        console.log('1. Testing getTours...');
        const tours = await dataService.getTours();
        console.log('✅ getTours works:', tours.length, 'tours found');
        
        // Test creating a tour
        console.log('2. Testing createTour...');
        const newTour = {
            name: 'Test Tour',
            description: 'This is a test tour',
            price: 100,
            duration: '1 day',
            difficulty: 'Easy',
            location: 'Test Location',
            image: 'https://via.placeholder.com/300x200',
            featured: false
        };
        
        const createdTour = await dataService.createTour(newTour);
        console.log('✅ createTour works:', createdTour);
        
        // Test updating the tour
        console.log('3. Testing updateTour...');
        const updatedTour = await dataService.updateTour(createdTour.id, {
            ...createdTour,
            name: 'Updated Test Tour'
        });
        console.log('✅ updateTour works:', updatedTour);
        
        // Test deleting the tour
        console.log('4. Testing deleteTour...');
        await dataService.deleteTour(createdTour.id);
        console.log('✅ deleteTour works');
        
        console.log('🎉 All dataService tests passed!');
        return true;
        
    } catch (error) {
        console.error('❌ dataService test failed:', error);
        return false;
    }
};

// Auto-run test when imported
testDataService();
