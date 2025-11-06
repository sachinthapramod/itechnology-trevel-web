// Hybrid Service - Works with Firebase or localStorage fallback
import firebaseService from './firebaseService';
import dataService from './dataService';

class HybridService {
    constructor() {
        this.useFirebase = true;
        this.checkFirebaseConnection();
    }

    async checkFirebaseConnection() {
        try {
            // Try to connect to Firebase
            await firebaseService.getTours();
            this.useFirebase = true;
            console.log('Using Firebase database');
        } catch (error) {
            console.log('Firebase not available, using localStorage fallback');
            this.useFirebase = false;
        }
    }

    getService() {
        return this.useFirebase ? firebaseService : dataService;
    }

    // Dashboard methods
    async getDashboardStats() {
        try {
            return await this.getService().getDashboardStats();
        } catch (error) {
            console.error('Error getting dashboard stats:', error);
            return {
                totalTours: 0,
                totalBookings: 0,
                totalUsers: 0,
                totalRevenue: 0
            };
        }
    }

    // Tour methods
    async getTours() {
        return await this.getService().getTours();
    }

    async createTour(tourData) {
        return await this.getService().createTour(tourData);
    }

    async updateTour(id, tourData) {
        return await this.getService().updateTour(id, tourData);
    }

    async deleteTour(id) {
        return await this.getService().deleteTour(id);
    }

    // Destination methods
    async getDestinations() {
        return await this.getService().getDestinations();
    }

    async createDestination(destinationData) {
        return await this.getService().createDestination(destinationData);
    }

    async updateDestination(id, destinationData) {
        return await this.getService().updateDestination(id, destinationData);
    }

    async deleteDestination(id) {
        return await this.getService().deleteDestination(id);
    }

    // Activity methods
    async getActivities() {
        return await this.getService().getActivities();
    }

    async createActivity(activityData) {
        return await this.getService().createActivity(activityData);
    }

    async updateActivity(id, activityData) {
        return await this.getService().updateActivity(id, activityData);
    }

    async deleteActivity(id) {
        return await this.getService().deleteActivity(id);
    }

    // Blog methods
    async getBlogPosts() {
        return await this.getService().getBlogPosts();
    }

    async createBlogPost(postData) {
        return await this.getService().createBlogPost(postData);
    }

    async updateBlogPost(id, postData) {
        return await this.getService().updateBlogPost(id, postData);
    }

    async deleteBlogPost(id) {
        return await this.getService().deleteBlogPost(id);
    }

    // Product methods
    async getProducts() {
        return await this.getService().getProducts();
    }

    async createProduct(productData) {
        return await this.getService().createProduct(productData);
    }

    async updateProduct(id, productData) {
        return await this.getService().updateProduct(id, productData);
    }

    async deleteProduct(id) {
        return await this.getService().deleteProduct(id);
    }

    // Booking methods
    async getBookings() {
        return await this.getService().getBookings();
    }

    async updateBooking(id, bookingData) {
        return await this.getService().updateBooking(id, bookingData);
    }

    // User methods
    async getUsers() {
        return await this.getService().getUsers();
    }

    async createUser(userData) {
        return await this.getService().createUser(userData);
    }

    async updateUser(id, userData) {
        return await this.getService().updateUser(id, userData);
    }

    async deleteUser(id) {
        return await this.getService().deleteUser(id);
    }

    // Settings methods
    async getSettings() {
        return await this.getService().getSettings();
    }

    async updateSettings(settingsData) {
        return await this.getService().updateSettings(settingsData);
    }

    // Initialize data
    async initializeDefaultData() {
        return await this.getService().initializeDefaultData();
    }
}

// Create and export a singleton instance
const hybridService = new HybridService();
export default hybridService;
