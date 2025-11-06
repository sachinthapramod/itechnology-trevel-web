// Data Service for Admin Dashboard
// This service handles all CRUD operations for the admin dashboard

class DataService {
    constructor() {
        this.storageKey = 'tourm_admin_data';
        this.initializeData();
    }

    // Initialize default data if not exists
    initializeData() {
        const existingData = this.getData();
        if (!existingData) {
            const defaultData = {
                tours: [
                    {
                        id: 1,
                        name: 'Mountain Adventure',
                        description: 'Experience the breathtaking views from mountain peaks',
                        price: 200,
                        duration: '3 days',
                        difficulty: 'Medium',
                        location: 'Swiss Alps',
                        image: '/img/tour/mountain-1.jpg',
                        featured: true,
                        bookings: 12,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    },
                    {
                        id: 2,
                        name: 'Beach Paradise',
                        description: 'Relax on pristine beaches and enjoy water activities',
                        price: 150,
                        duration: '5 days',
                        difficulty: 'Easy',
                        location: 'Maldives',
                        image: '/img/tour/beach-1.jpg',
                        featured: false,
                        bookings: 8,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }
                ],
                destinations: [
                    {
                        id: 1,
                        name: 'Swiss Alps',
                        country: 'Switzerland',
                        description: 'Breathtaking mountain landscapes and pristine alpine lakes',
                        image: '/img/destination/swiss-alps.jpg',
                        climate: 'Alpine',
                        bestTime: 'June - September',
                        attractions: 'Matterhorn, Jungfraujoch, Interlaken',
                        featured: true,
                        tours: 5,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }
                ],
                activities: [
                    {
                        id: 1,
                        name: 'Mountain Hiking',
                        description: 'Explore scenic mountain trails with experienced guides',
                        category: 'Adventure',
                        duration: '4 hours',
                        difficulty: 'Medium',
                        price: 80,
                        image: '/img/activities/hiking.jpg',
                        featured: true,
                        bookings: 15,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }
                ],
                blogPosts: [
                    {
                        id: 1,
                        title: '10 Best Destinations for 2024',
                        content: 'Discover the most amazing places to visit this year...',
                        excerpt: 'Explore our top picks for the best travel destinations...',
                        author: 'John Doe',
                        category: 'Travel',
                        image: '/img/blog/destinations-2024.jpg',
                        featured: true,
                        published: true,
                        date: '2024-01-15',
                        views: 1250,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }
                ],
                products: [
                    {
                        id: 1,
                        name: 'Travel Backpack',
                        description: 'Durable and spacious backpack for all your adventures',
                        price: 89.99,
                        category: 'Accessories',
                        image: '/img/shop/backpack.jpg',
                        stock: 25,
                        featured: true,
                        sales: 45,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }
                ],
                bookings: [
                    {
                        id: 1,
                        customer: 'John Doe',
                        email: 'john@example.com',
                        tour: 'Mountain Adventure',
                        date: '2024-02-15',
                        status: 'Confirmed',
                        participants: 2,
                        total: 400,
                        phone: '+1234567890',
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }
                ],
                users: [
                    {
                        id: 1,
                        name: 'John Doe',
                        email: 'john@example.com',
                        role: 'User',
                        status: 'Active',
                        phone: '+1234567890',
                        joinDate: '2024-01-15',
                        bookings: 3,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    },
                    {
                        id: 2,
                        name: 'Admin User',
                        email: 'admin@tourm.com',
                        role: 'Admin',
                        status: 'Active',
                        phone: '+1234567890',
                        joinDate: '2024-01-01',
                        bookings: 0,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }
                ],
                settings: {
                    siteName: 'TourM',
                    siteDescription: 'Your ultimate travel companion',
                    contactEmail: 'info@tourm.com',
                    contactPhone: '+1 (555) 123-4567',
                    address: '123 Travel Street, Adventure City, AC 12345',
                    socialMedia: {
                        facebook: 'https://facebook.com/tourm',
                        twitter: 'https://twitter.com/tourm',
                        instagram: 'https://instagram.com/tourm',
                        youtube: 'https://youtube.com/tourm'
                    },
                    currency: 'USD',
                    timezone: 'UTC',
                    maintenanceMode: false,
                    allowRegistration: true,
                    emailNotifications: true
                }
            };
            this.saveData(defaultData);
        }
    }

    // Get all data from localStorage
    getData() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error getting data:', error);
            return null;
        }
    }

    // Save data to localStorage
    saveData(data) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error saving data:', error);
            return false;
        }
    }

    // Generic CRUD operations
    async getAll(entity) {
        const data = this.getData();
        return data ? data[entity] || [] : [];
    }

    async getById(entity, id) {
        const items = await this.getAll(entity);
        return items.find(item => item.id === parseInt(id));
    }

    async create(entity, item) {
        const data = this.getData();
        if (!data) return null;

        const newItem = {
            ...item,
            id: Date.now(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        data[entity] = [...(data[entity] || []), newItem];
        this.saveData(data);
        return newItem;
    }

    async update(entity, id, updates) {
        const data = this.getData();
        if (!data) return null;

        const items = data[entity] || [];
        const index = items.findIndex(item => item.id === parseInt(id));
        
        if (index === -1) return null;

        const updatedItem = {
            ...items[index],
            ...updates,
            updatedAt: new Date().toISOString()
        };

        data[entity][index] = updatedItem;
        this.saveData(data);
        return updatedItem;
    }

    async delete(entity, id) {
        const data = this.getData();
        if (!data) return false;

        data[entity] = (data[entity] || []).filter(item => item.id !== parseInt(id));
        this.saveData(data);
        return true;
    }

    // Specific entity methods
    async getTours() {
        return await this.getAll('tours');
    }

    async getTour(id) {
        return await this.getById('tours', id);
    }

    async createTour(tourData) {
        return await this.create('tours', tourData);
    }

    async updateTour(id, tourData) {
        return await this.update('tours', id, tourData);
    }

    async deleteTour(id) {
        return await this.delete('tours', id);
    }

    async getDestinations() {
        return await this.getAll('destinations');
    }

    async createDestination(destinationData) {
        return await this.create('destinations', destinationData);
    }

    async updateDestination(id, destinationData) {
        return await this.update('destinations', id, destinationData);
    }

    async deleteDestination(id) {
        return await this.delete('destinations', id);
    }

    async getActivities() {
        return await this.getAll('activities');
    }

    async createActivity(activityData) {
        return await this.create('activities', activityData);
    }

    async updateActivity(id, activityData) {
        return await this.update('activities', id, activityData);
    }

    async deleteActivity(id) {
        return await this.delete('activities', id);
    }

    async getBlogPosts() {
        return await this.getAll('blogPosts');
    }

    async getBlogs() {
        return await this.getAll('blogPosts');
    }

    async createBlog(postData) {
        return await this.create('blogPosts', postData);
    }

    async updateBlog(id, postData) {
        return await this.update('blogPosts', id, postData);
    }

    async deleteBlog(id) {
        return await this.delete('blogPosts', id);
    }

    async createBlogPost(postData) {
        return await this.create('blogPosts', postData);
    }

    async updateBlogPost(id, postData) {
        return await this.update('blogPosts', id, postData);
    }

    async deleteBlogPost(id) {
        return await this.delete('blogPosts', id);
    }

    async getProducts() {
        return await this.getAll('products');
    }

    async getShopProducts() {
        return await this.getAll('products');
    }

    async createProduct(productData) {
        return await this.create('products', productData);
    }

    async createShopProduct(productData) {
        return await this.create('products', productData);
    }

    async updateProduct(id, productData) {
        return await this.update('products', id, productData);
    }

    async updateShopProduct(id, productData) {
        return await this.update('products', id, productData);
    }

    async deleteProduct(id) {
        return await this.delete('products', id);
    }

    async deleteShopProduct(id) {
        return await this.delete('products', id);
    }

    async getBookings() {
        return await this.getAll('bookings');
    }

    async updateBooking(id, bookingData) {
        return await this.update('bookings', id, bookingData);
    }

    async getUsers() {
        return await this.getAll('users');
    }

    async createUser(userData) {
        return await this.create('users', userData);
    }

    async updateUser(id, userData) {
        return await this.update('users', id, userData);
    }

    async deleteUser(id) {
        return await this.delete('users', id);
    }

    async getSettings() {
        const data = this.getData();
        return data ? data.settings : {};
    }

    async updateSettings(settingsData) {
        const data = this.getData();
        if (!data) return null;

        data.settings = { ...data.settings, ...settingsData };
        this.saveData(data);
        return data.settings;
    }

    // Dashboard statistics
    async getDashboardStats() {
        const [tours, bookings, users, products] = await Promise.all([
            this.getTours(),
            this.getBookings(),
            this.getUsers(),
            this.getProducts()
        ]);

        const totalRevenue = bookings.reduce((sum, booking) => sum + (booking.total || 0), 0);

        return {
            totalTours: tours.length,
            totalBookings: bookings.length,
            totalUsers: users.length,
            totalRevenue: totalRevenue
        };
    }
}

// Create and export a singleton instance
const dataService = new DataService();
export default dataService;
