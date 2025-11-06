// Complete Synchronization Service for Travel Agency Website
// This service handles real-time synchronization between admin dashboard and all frontend components

import completeDataService from './completeDataService';

class CompleteSyncService {
    constructor() {
        this.subscribers = {};
        this.initListeners();
    }

    initListeners() {
        // This service will notify subscribers when data changes
        // In a real application, this would connect to WebSocket or Firebase real-time listeners
    }

    subscribe(entity, callback) {
        if (!this.subscribers[entity]) {
            this.subscribers[entity] = [];
        }
        this.subscribers[entity].push(callback);
        
        // Immediately send current data to new subscriber
        this.notify(entity, completeDataService.getAll(entity));
        
        // Return an unsubscribe function
        return () => {
            this.subscribers[entity] = this.subscribers[entity].filter(sub => sub !== callback);
        };
    }

    notify(entity, data) {
        if (this.subscribers[entity]) {
            this.subscribers[entity].forEach(callback => callback(data));
        }
    }

    // --- Methods to fetch data for specific frontend components ---

    // Banner/Hero Section
    async getBannersForHomePage() {
        const banners = await completeDataService.getBanners();
        return banners.filter(banner => banner.active).sort((a, b) => a.order - b.order);
    }

    // About Section
    async getAboutForHomePage() {
        return await completeDataService.getAbout();
    }

    // Statistics/Counter Section
    async getStatisticsForHomePage() {
        return await completeDataService.getStatistics();
    }

    // Tours Section
    async getToursForHomePage() {
        const tours = await completeDataService.getTours();
        return tours.filter(tour => tour.featured).slice(0, 8);
    }

    async getToursForToursPage() {
        return await completeDataService.getTours();
    }

    async getTourForDetails(id) {
        return await completeDataService.getTour(id);
    }

    // Destinations Section
    async getDestinationsForHomePage() {
        const destinations = await completeDataService.getDestinations();
        return destinations.filter(dest => dest.featured).slice(0, 10);
    }

    async getDestinationsForDestinationsPage() {
        return await completeDataService.getDestinations();
    }

    async getDestinationForDetails(id) {
        return await completeDataService.getDestination(id);
    }

    // Activities Section
    async getActivitiesForHomePage() {
        const activities = await completeDataService.getActivities();
        return activities.filter(activity => activity.featured).slice(0, 6);
    }

    async getActivitiesForActivitiesPage() {
        return await completeDataService.getActivities();
    }

    async getActivityForDetails(id) {
        return await completeDataService.getActivity(id);
    }

    // Blog Section
    async getBlogsForHomePage() {
        const blogs = await completeDataService.getBlogPosts();
        return blogs.filter(blog => blog.published && blog.featured)
                   .sort((a, b) => new Date(b.date) - new Date(a.date))
                   .slice(0, 6);
    }

    async getBlogsForBlogPage() {
        const blogs = await completeDataService.getBlogPosts();
        return blogs.filter(blog => blog.published)
                   .sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    async getBlogForDetails(id) {
        return await completeDataService.getBlogPost(id);
    }

    // Testimonials Section
    async getTestimonialsForHomePage() {
        const testimonials = await completeDataService.getTestimonials();
        return testimonials.filter(testimonial => testimonial.featured);
    }

    // Tour Guides Section
    async getGuidesForHomePage() {
        const guides = await completeDataService.getGuides();
        return guides.filter(guide => guide.featured).slice(0, 8);
    }

    async getGuidesForGuidesPage() {
        return await completeDataService.getGuides();
    }

    async getGuideForDetails(id) {
        return await completeDataService.getGuide(id);
    }

    // Shop Products Section
    async getProductsForHomePage() {
        const products = await completeDataService.getProducts();
        return products.filter(product => product.featured && product.available).slice(0, 8);
    }

    async getProductsForShopPage() {
        const products = await completeDataService.getProducts();
        return products.filter(product => product.available);
    }

    async getProductForDetails(id) {
        return await completeDataService.getProduct(id);
    }

    // Booking functionality
    async createBooking(bookingData) {
        const booking = await completeDataService.createBooking(bookingData);
        if (booking) {
            this.notify('bookings', await completeDataService.getBookings());
        }
        return booking;
    }

    // Search functionality
    async searchTours(query) {
        const tours = await completeDataService.getTours();
        return tours.filter(tour => 
            tour.name.toLowerCase().includes(query.toLowerCase()) ||
            tour.description.toLowerCase().includes(query.toLowerCase()) ||
            tour.location.toLowerCase().includes(query.toLowerCase())
        );
    }

    async searchDestinations(query) {
        const destinations = await completeDataService.getDestinations();
        return destinations.filter(destination => 
            destination.name.toLowerCase().includes(query.toLowerCase()) ||
            destination.country.toLowerCase().includes(query.toLowerCase()) ||
            destination.description.toLowerCase().includes(query.toLowerCase())
        );
    }

    async searchActivities(query) {
        const activities = await completeDataService.getActivities();
        return activities.filter(activity => 
            activity.name.toLowerCase().includes(query.toLowerCase()) ||
            activity.description.toLowerCase().includes(query.toLowerCase()) ||
            activity.category.toLowerCase().includes(query.toLowerCase())
        );
    }

    async searchBlogs(query) {
        const blogs = await completeDataService.getBlogPosts();
        return blogs.filter(blog => 
            blog.title.toLowerCase().includes(query.toLowerCase()) ||
            blog.content.toLowerCase().includes(query.toLowerCase()) ||
            blog.category.toLowerCase().includes(query.toLowerCase())
        );
    }

    // Filter functionality
    async getToursByCategory(category) {
        const tours = await completeDataService.getTours();
        return tours.filter(tour => tour.category === category);
    }

    async getToursByPriceRange(minPrice, maxPrice) {
        const tours = await completeDataService.getTours();
        return tours.filter(tour => tour.price >= minPrice && tour.price <= maxPrice);
    }

    async getToursByDifficulty(difficulty) {
        const tours = await completeDataService.getTours();
        return tours.filter(tour => tour.difficulty === difficulty);
    }

    async getBlogsByCategory(category) {
        const blogs = await completeDataService.getBlogPosts();
        return blogs.filter(blog => blog.category === category);
    }

    async getProductsByCategory(category) {
        const products = await completeDataService.getProducts();
        return products.filter(product => product.category === category);
    }

    // Featured content
    async getFeaturedTours() {
        const tours = await completeDataService.getTours();
        return tours.filter(tour => tour.featured);
    }

    async getFeaturedDestinations() {
        const destinations = await completeDataService.getDestinations();
        return destinations.filter(destination => destination.featured);
    }

    async getFeaturedActivities() {
        const activities = await completeDataService.getActivities();
        return activities.filter(activity => activity.featured);
    }

    async getFeaturedBlogs() {
        const blogs = await completeDataService.getBlogPosts();
        return blogs.filter(blog => blog.featured && blog.published);
    }

    async getFeaturedProducts() {
        const products = await completeDataService.getProducts();
        return products.filter(product => product.featured && product.available);
    }

    // Recent content
    async getRecentBlogs(limit = 5) {
        const blogs = await completeDataService.getBlogPosts();
        return blogs.filter(blog => blog.published)
                   .sort((a, b) => new Date(b.date) - new Date(a.date))
                   .slice(0, limit);
    }

    async getRecentTours(limit = 5) {
        const tours = await completeDataService.getTours();
        return tours.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                   .slice(0, limit);
    }

    // Popular content
    async getPopularTours(limit = 5) {
        const tours = await completeDataService.getTours();
        return tours.sort((a, b) => (b.bookings || 0) - (a.bookings || 0))
                   .slice(0, limit);
    }

    async getPopularDestinations(limit = 5) {
        const destinations = await completeDataService.getDestinations();
        return destinations.sort((a, b) => (b.tours || 0) - (a.tours || 0))
                          .slice(0, limit);
    }

    // Statistics for dashboard
    async getDashboardStats() {
        return await completeDataService.getDashboardStats();
    }

    // Website settings
    async getWebsiteSettings() {
        return await completeDataService.getSettings();
    }

    async updateWebsiteSettings(settings) {
        const updatedSettings = await completeDataService.updateSettings(settings);
        if (updatedSettings) {
            this.notify('settings', updatedSettings);
        }
        return updatedSettings;
    }
}

// Create and export singleton instance
const completeSyncService = new CompleteSyncService();

// Intercept dataService operations to notify completeSyncService
const originalMethods = {
    create: completeDataService.create,
    update: completeDataService.update,
    delete: completeDataService.delete
};

// Override methods to trigger notifications
completeDataService.create = async function(entity, item) {
    const result = await originalMethods.create.call(this, entity, item);
    if (result) {
        completeSyncService.notify(entity, await this.getAll(entity));
    }
    return result;
};

completeDataService.update = async function(entity, id, updates) {
    const result = await originalMethods.update.call(this, entity, id, updates);
    if (result) {
        completeSyncService.notify(entity, await this.getAll(entity));
    }
    return result;
};

completeDataService.delete = async function(entity, id) {
    const result = await originalMethods.delete.call(this, entity, id);
    if (result) {
        completeSyncService.notify(entity, await this.getAll(entity));
    }
    return result;
};

export default completeSyncService;
