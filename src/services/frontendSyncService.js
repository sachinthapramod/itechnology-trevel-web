// Frontend Sync Service - Synchronizes admin data with frontend components
import dataService from './dataService';

class FrontendSyncService {
    constructor() {
        this.listeners = new Map();
        this.cache = new Map();
    }

    // Subscribe to data changes
    subscribe(entity, callback) {
        if (!this.listeners.has(entity)) {
            this.listeners.set(entity, new Set());
        }
        this.listeners.get(entity).add(callback);
        
        // Return unsubscribe function
        return () => {
            this.listeners.get(entity)?.delete(callback);
        };
    }

    // Notify all listeners of data changes
    notify(entity, data) {
        const entityListeners = this.listeners.get(entity);
        if (entityListeners) {
            entityListeners.forEach(callback => {
                try {
                    callback(data);
                } catch (error) {
                    console.error(`Error in ${entity} listener:`, error);
                }
            });
        }
    }

    // Get data with caching
    async getData(entity) {
        if (this.cache.has(entity)) {
            return this.cache.get(entity);
        }

        let data = [];
        switch (entity) {
            case 'tours':
                data = await dataService.getTours();
                break;
            case 'destinations':
                data = await dataService.getDestinations();
                break;
            case 'activities':
                data = await dataService.getActivities();
                break;
            case 'blogs':
                data = await dataService.getBlogPosts();
                break;
            case 'products':
                data = await dataService.getProducts();
                break;
            default:
                console.warn(`Unknown entity: ${entity}`);
                return [];
        }

        this.cache.set(entity, data);
        return data;
    }

    // Clear cache and notify listeners
    async refreshData(entity) {
        this.cache.delete(entity);
        const data = await this.getData(entity);
        this.notify(entity, data);
        return data;
    }

    // CRUD operations with sync
    async create(entity, data) {
        let result;
        switch (entity) {
            case 'tours':
                result = await dataService.createTour(data);
                break;
            case 'destinations':
                result = await dataService.createDestination(data);
                break;
            case 'activities':
                result = await dataService.createActivity(data);
                break;
            case 'blogs':
                result = await dataService.createBlogPost(data);
                break;
            case 'products':
                result = await dataService.createProduct(data);
                break;
            default:
                throw new Error(`Unknown entity: ${entity}`);
        }

        await this.refreshData(entity);
        return result;
    }

    async update(entity, id, data) {
        let result;
        switch (entity) {
            case 'tours':
                result = await dataService.updateTour(id, data);
                break;
            case 'destinations':
                result = await dataService.updateDestination(id, data);
                break;
            case 'activities':
                result = await dataService.updateActivity(id, data);
                break;
            case 'blogs':
                result = await dataService.updateBlogPost(id, data);
                break;
            case 'products':
                result = await dataService.updateProduct(id, data);
                break;
            default:
                throw new Error(`Unknown entity: ${entity}`);
        }

        await this.refreshData(entity);
        return result;
    }

    async delete(entity, id) {
        let result;
        switch (entity) {
            case 'tours':
                result = await dataService.deleteTour(id);
                break;
            case 'destinations':
                result = await dataService.deleteDestination(id);
                break;
            case 'activities':
                result = await dataService.deleteActivity(id);
                break;
            case 'blogs':
                result = await dataService.deleteBlogPost(id);
                break;
            case 'products':
                result = await dataService.deleteProduct(id);
                break;
            default:
                throw new Error(`Unknown entity: ${entity}`);
        }

        await this.refreshData(entity);
        return result;
    }

    // Get featured items for frontend
    async getFeaturedTours() {
        const tours = await this.getData('tours');
        return tours.filter(tour => tour.featured);
    }

    async getFeaturedDestinations() {
        const destinations = await this.getData('destinations');
        return destinations.filter(destination => destination.featured);
    }

    async getFeaturedActivities() {
        const activities = await this.getData('activities');
        return activities.filter(activity => activity.featured);
    }

    async getPublishedBlogs() {
        const blogs = await this.getData('blogs');
        return blogs.filter(blog => blog.published);
    }

    async getAvailableProducts() {
        const products = await this.getData('products');
        return products.filter(product => product.available);
    }

    // Get data for specific frontend components
    async getToursForHomePage() {
        const tours = await this.getData('tours');
        return tours.slice(0, 6); // Get first 6 tours for homepage
    }

    async getDestinationsForHomePage() {
        const destinations = await this.getData('destinations');
        return destinations.slice(0, 8); // Get first 8 destinations for homepage
    }

    async getBlogsForHomePage() {
        const blogs = await this.getPublishedBlogs();
        return blogs.slice(0, 3); // Get first 3 published blogs for homepage
    }
}

// Create and export singleton instance
const frontendSyncService = new FrontendSyncService();
export default frontendSyncService;
