// Firebase Service for Admin Dashboard
// This service handles all CRUD operations using Firebase Firestore

import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  limit,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase/config';

class FirebaseService {
  constructor() {
    this.collections = {
      tours: 'tours',
      destinations: 'destinations',
      activities: 'activities',
      blogPosts: 'blogPosts',
      products: 'products',
      bookings: 'bookings',
      users: 'users',
      settings: 'settings'
    };
  }

  // Generic CRUD operations
  async getAll(collectionName) {
    try {
      const q = query(collection(db, this.collections[collectionName]), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error(`Error getting ${collectionName}:`, error);
      throw error;
    }
  }

  async getById(collectionName, id) {
    try {
      const docRef = doc(db, this.collections[collectionName], id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      } else {
        return null;
      }
    } catch (error) {
      console.error(`Error getting ${collectionName} by id:`, error);
      throw error;
    }
  }

  async create(collectionName, data) {
    try {
      const docRef = await addDoc(collection(db, this.collections[collectionName]), {
        ...data,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      
      return { id: docRef.id, ...data };
    } catch (error) {
      console.error(`Error creating ${collectionName}:`, error);
      throw error;
    }
  }

  async update(collectionName, id, data) {
    try {
      const docRef = doc(db, this.collections[collectionName], id);
      await updateDoc(docRef, {
        ...data,
        updatedAt: serverTimestamp()
      });
      
      return { id, ...data };
    } catch (error) {
      console.error(`Error updating ${collectionName}:`, error);
      throw error;
    }
  }

  async delete(collectionName, id) {
    try {
      const docRef = doc(db, this.collections[collectionName], id);
      await deleteDoc(docRef);
      return true;
    } catch (error) {
      console.error(`Error deleting ${collectionName}:`, error);
      throw error;
    }
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

  async createProduct(productData) {
    return await this.create('products', productData);
  }

  async updateProduct(id, productData) {
    return await this.update('products', id, productData);
  }

  async deleteProduct(id) {
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
    try {
      const settingsDoc = await this.getById('settings', 'main');
      return settingsDoc || this.getDefaultSettings();
    } catch (error) {
      console.error('Error getting settings:', error);
      return this.getDefaultSettings();
    }
  }

  async updateSettings(settingsData) {
    try {
      const settingsRef = doc(db, this.collections.settings, 'main');
      await updateDoc(settingsRef, {
        ...settingsData,
        updatedAt: serverTimestamp()
      });
      return settingsData;
    } catch (error) {
      // If settings document doesn't exist, create it
      if (error.code === 'not-found') {
        return await this.create('settings', { id: 'main', ...settingsData });
      }
      throw error;
    }
  }

  getDefaultSettings() {
    return {
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
    };
  }

  // Dashboard statistics
  async getDashboardStats() {
    try {
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

  // Initialize default data
  async initializeDefaultData() {
    try {
      // Check if data already exists
      const tours = await this.getTours();
      if (tours.length > 0) {
        return; // Data already exists
      }

      // Create default data
      const defaultData = {
        tours: [
          {
            name: 'Mountain Adventure',
            description: 'Experience the breathtaking views from mountain peaks',
            price: 200,
            duration: '3 days',
            difficulty: 'Medium',
            location: 'Swiss Alps',
            image: '/img/tour/mountain-1.jpg',
            featured: true,
            bookings: 12
          },
          {
            name: 'Beach Paradise',
            description: 'Relax on pristine beaches and enjoy water activities',
            price: 150,
            duration: '5 days',
            difficulty: 'Easy',
            location: 'Maldives',
            image: '/img/tour/beach-1.jpg',
            featured: false,
            bookings: 8
          }
        ],
        destinations: [
          {
            name: 'Swiss Alps',
            country: 'Switzerland',
            description: 'Breathtaking mountain landscapes and pristine alpine lakes',
            image: '/img/destination/swiss-alps.jpg',
            climate: 'Alpine',
            bestTime: 'June - September',
            attractions: 'Matterhorn, Jungfraujoch, Interlaken',
            featured: true,
            tours: 5
          }
        ],
        activities: [
          {
            name: 'Mountain Hiking',
            description: 'Explore scenic mountain trails with experienced guides',
            category: 'Adventure',
            duration: '4 hours',
            difficulty: 'Medium',
            price: 80,
            image: '/img/activities/hiking.jpg',
            featured: true,
            bookings: 15
          }
        ],
        blogPosts: [
          {
            title: '10 Best Destinations for 2024',
            content: 'Discover the most amazing places to visit this year...',
            excerpt: 'Explore our top picks for the best travel destinations...',
            author: 'John Doe',
            category: 'Travel',
            image: '/img/blog/destinations-2024.jpg',
            featured: true,
            published: true,
            date: '2024-01-15',
            views: 1250
          }
        ],
        products: [
          {
            name: 'Travel Backpack',
            description: 'Durable and spacious backpack for all your adventures',
            price: 89.99,
            category: 'Accessories',
            image: '/img/shop/backpack.jpg',
            stock: 25,
            featured: true,
            sales: 45
          }
        ],
        bookings: [
          {
            customer: 'John Doe',
            email: 'john@example.com',
            tour: 'Mountain Adventure',
            date: '2024-02-15',
            status: 'Confirmed',
            participants: 2,
            total: 400,
            phone: '+1234567890'
          }
        ],
        users: [
          {
            name: 'John Doe',
            email: 'john@example.com',
            role: 'User',
            status: 'Active',
            phone: '+1234567890',
            joinDate: '2024-01-15',
            bookings: 3
          },
          {
            name: 'Admin User',
            email: 'admin@tourm.com',
            role: 'Admin',
            status: 'Active',
            phone: '+1234567890',
            joinDate: '2024-01-01',
            bookings: 0
          }
        ]
      };

      // Add default data to Firestore
      for (const [collectionName, items] of Object.entries(defaultData)) {
        for (const item of items) {
          await this.create(collectionName, item);
        }
      }

      // Add default settings
      await this.create('settings', { id: 'main', ...this.getDefaultSettings() });

      console.log('Default data initialized successfully');
    } catch (error) {
      console.error('Error initializing default data:', error);
    }
  }
}

// Create and export a singleton instance
const firebaseService = new FirebaseService();
export default firebaseService;
