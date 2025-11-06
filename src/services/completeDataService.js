// Complete Data Service for Travel Agency Website
// This service handles ALL content types for the travel agency website

class CompleteDataService {
    constructor() {
        this.storageKey = 'tourm_complete_data';
        this.initializeData();
    }

    // Initialize complete data structure
    initializeData() {
        const existingData = this.getData();
        if (!existingData) {
            const completeData = {
                // Hero/Banner Content
                banners: [
                    {
                        id: 1,
                        title: "Natural Wonder of the world",
                        subtitle: "Get unforgetable pleasure with us",
                        backgroundImage: "/assets/img/hero/hero_bg_1_1.jpg",
                        button1Text: "Explore Tours",
                        button1Link: "/tour",
                        button2Text: "Our Services",
                        button2Link: "/service",
                        active: true,
                        order: 1
                    },
                    {
                        id: 2,
                        title: "Let's make your best trip with us",
                        subtitle: "Get unforgetable pleasure with us",
                        backgroundImage: "/assets/img/hero/hero_bg_1_2.jpg",
                        button1Text: "Explore Tours",
                        button1Link: "/tour",
                        button2Text: "Our Services",
                        button2Link: "/service",
                        active: true,
                        order: 2
                    },
                    {
                        id: 3,
                        title: "Explore beauty of the whole world",
                        subtitle: "Get unforgetable pleasure with us",
                        backgroundImage: "/assets/img/hero/hero_bg_1_3.jpg",
                        button1Text: "Explore Tours",
                        button1Link: "/tour",
                        button2Text: "Our Services",
                        button2Link: "/service",
                        active: true,
                        order: 3
                    }
                ],

                // About Section
                about: {
                    id: 1,
                    title: "Plan Your Trip With us",
                    subtitle: "Let's Go Together",
                    description: "There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.",
                    image1: "/assets/img/normal/about_1_1.jpg",
                    image2: "/assets/img/normal/about_1_2.jpg",
                    image3: "/assets/img/normal/about_1_3.jpg",
                    features: [
                        {
                            id: 1,
                            title: "Exclusive Trip",
                            description: "There are many variations of passages of available but the majority.",
                            icon: "/assets/img/icon/map3.svg"
                        },
                        {
                            id: 2,
                            title: "Professional Guide",
                            description: "There are many variations of passages of available but the majority.",
                            icon: "/assets/img/icon/guide.svg"
                        }
                    ],
                    buttonText: "Learn More",
                    buttonLink: "/about"
                },

                // Statistics/Counter
                statistics: [
                    { id: 1, value: 12, suffix: "", title: "Years Experience" },
                    { id: 2, value: 97, suffix: "%", title: "Retention Rate" },
                    { id: 3, value: 8, suffix: "k", title: "Tour Completed" },
                    { id: 4, value: 19, suffix: "k", title: "Happy Travellers" }
                ],

                // Tours
                tours: [
                    {
                        id: 1,
                        name: "Greece Tour Package",
                        description: "Experience the breathtaking views from mountain peaks",
                        price: 980,
                        duration: "7 Days",
                        difficulty: "Medium",
                        location: "Greece",
                        image: "/assets/img/tour/tour_box_1.jpg",
                        featured: true,
                        bookings: 12,
                        rating: 4.8,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    },
                    {
                        id: 2,
                        name: "Italy Tour Package",
                        description: "Relax on pristine beaches and enjoy water activities",
                        price: 880,
                        duration: "5 Days",
                        difficulty: "Easy",
                        location: "Italy",
                        image: "/assets/img/tour/tour_box_2.jpg",
                        featured: false,
                        bookings: 8,
                        rating: 4.6,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }
                ],

                // Destinations
                destinations: [
                    {
                        id: 1,
                        name: "Maldives",
                        country: "Maldives",
                        description: "Breathtaking island paradise with crystal clear waters",
                        image: "/assets/img/destination/destination_1_1.jpg",
                        listings: 15,
                        featured: true,
                        climate: "Tropical",
                        bestTime: "November - April",
                        attractions: "Coral reefs, Overwater bungalows, Snorkeling",
                        tours: 5,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    },
                    {
                        id: 2,
                        name: "Thailand",
                        country: "Thailand",
                        description: "Rich culture and beautiful temples",
                        image: "/assets/img/destination/destination_1_2.jpg",
                        listings: 22,
                        featured: false,
                        climate: "Tropical",
                        bestTime: "November - March",
                        attractions: "Bangkok temples, Phuket beaches, Chiang Mai",
                        tours: 8,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }
                ],

                // Activities
                activities: [
                    {
                        id: 1,
                        name: "Paragliding",
                        description: "Soar through the skies with experienced instructors",
                        category: "Adventure",
                        duration: "2 hours",
                        difficulty: "Medium",
                        price: 150,
                        image: "/assets/img/tour/tour_5_1.jpg",
                        featured: true,
                        bookings: 25,
                        rating: 4.9,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    },
                    {
                        id: 2,
                        name: "Coastal Adventure",
                        description: "Explore beautiful coastal areas and hidden coves",
                        category: "Nature",
                        duration: "4 hours",
                        difficulty: "Easy",
                        price: 120,
                        image: "/assets/img/tour/tour_5_2.jpg",
                        featured: false,
                        bookings: 18,
                        rating: 4.7,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }
                ],

                // Blog Posts
                blogPosts: [
                    {
                        id: 1,
                        title: "10 Reasons why you should visit New Jersey",
                        content: "Discover the most amazing places to visit this year. New Jersey offers incredible diversity from beaches to mountains, urban excitement to rural tranquility.",
                        excerpt: "Explore our top picks for the best travel destinations in New Jersey...",
                        author: "John Doe",
                        category: "Travel",
                        image: "/assets/img/blog/blog_1_1.jpg",
                        featured: true,
                        published: true,
                        date: "July 05 2024",
                        readTime: "6 min read",
                        views: 1250,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    },
                    {
                        id: 2,
                        title: "The best time to visit Japan & enjoy the cherry blossoms",
                        content: "Japan's cherry blossom season is one of the most beautiful times to visit. Learn about the best spots and timing for sakura viewing.",
                        excerpt: "Discover the perfect timing for cherry blossom viewing in Japan...",
                        author: "Jane Smith",
                        category: "Destinations",
                        image: "/assets/img/blog/blog_1_2.jpg",
                        featured: false,
                        published: true,
                        date: "July 06 2024",
                        readTime: "7 min read",
                        views: 980,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }
                ],

                // Testimonials
                testimonials: [
                    {
                        id: 1,
                        name: "Maria Doe",
                        designation: "Traveller",
                        image: "/assets/img/testimonial/testi_1_1.jpg",
                        text: "A home that perfectly blends sustainability with luxury until I discovered Ecoland Residence. From the moment I stepped into this community, I knew it was where I wanted to live. The commitment to eco-friendly living.",
                        rating: 5,
                        featured: true,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    },
                    {
                        id: 2,
                        name: "Andrew Simon",
                        designation: "Traveller",
                        image: "/assets/img/testimonial/testi_1_2.jpg",
                        text: "The home boasts sleek, contemporary architecture with clean lines and expansive windows, allowing natural light to flood the interiors. It incorporates passive design principles.",
                        rating: 5,
                        featured: true,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }
                ],

                // Tour Guides
                guides: [
                    {
                        id: 1,
                        name: "Jacob Jones",
                        image: "/assets/img/team/team_1_1.jpg",
                        designation: "Tourist Guide",
                        experience: "5 years",
                        languages: ["English", "Spanish"],
                        specialties: ["Adventure Tours", "Cultural Tours"],
                        rating: 4.9,
                        featured: true,
                        socialMedia: {
                            facebook: "https://facebook.com/jacob",
                            twitter: "https://twitter.com/jacob",
                            instagram: "https://instagram.com/jacob",
                            linkedin: "https://linkedin.com/in/jacob"
                        },
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    },
                    {
                        id: 2,
                        name: "Jane Cooper",
                        image: "/assets/img/team/team_1_2.jpg",
                        designation: "Tourist Guide",
                        experience: "3 years",
                        languages: ["English", "French"],
                        specialties: ["City Tours", "Food Tours"],
                        rating: 4.8,
                        featured: true,
                        socialMedia: {
                            facebook: "https://facebook.com/jane",
                            twitter: "https://twitter.com/jane",
                            instagram: "https://instagram.com/jane",
                            linkedin: "https://linkedin.com/in/jane"
                        },
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }
                ],

                // Shop Products
                products: [
                    {
                        id: 1,
                        name: "Travel Backpack",
                        description: "Durable and spacious backpack for all your adventures",
                        price: 89.99,
                        category: "Accessories",
                        image: "/assets/img/shop/backpack.jpg",
                        stock: 25,
                        featured: true,
                        available: true,
                        sales: 45,
                        rating: 4.5,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    },
                    {
                        id: 2,
                        name: "Travel Camera",
                        description: "Professional camera for capturing your travel memories",
                        price: 299.99,
                        category: "Electronics",
                        image: "/assets/img/shop/camera.jpg",
                        stock: 15,
                        featured: false,
                        available: true,
                        sales: 23,
                        rating: 4.7,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }
                ],

                // Bookings
                bookings: [
                    {
                        id: 1,
                        customer: "John Doe",
                        email: "john@example.com",
                        tour: "Greece Tour Package",
                        date: "2024-02-15",
                        status: "Confirmed",
                        participants: 2,
                        total: 1960,
                        phone: "+1234567890",
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }
                ],

                // Users
                users: [
                    {
                        id: 1,
                        name: "John Doe",
                        email: "john@example.com",
                        role: "User",
                        status: "Active",
                        phone: "+1234567890",
                        joinDate: "2024-01-15",
                        bookings: 3,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    },
                    {
                        id: 2,
                        name: "Admin User",
                        email: "admin@tourm.com",
                        role: "Admin",
                        status: "Active",
                        phone: "+1234567890",
                        joinDate: "2024-01-01",
                        bookings: 0,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }
                ],

                // Website Settings
                settings: {
                    siteName: "TourM",
                    siteDescription: "Your ultimate travel companion",
                    contactEmail: "info@tourm.com",
                    contactPhone: "+1 (555) 123-4567",
                    address: "123 Travel Street, Adventure City, AC 12345",
                    socialMedia: {
                        facebook: "https://facebook.com/tourm",
                        twitter: "https://twitter.com/tourm",
                        instagram: "https://instagram.com/tourm",
                        youtube: "https://youtube.com/tourm"
                    },
                    currency: "USD",
                    timezone: "UTC",
                    maintenanceMode: false,
                    allowRegistration: true,
                    emailNotifications: true
                }
            };
            this.saveData(completeData);
        }
    }

    // Generic CRUD operations
    getData() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error getting data:', error);
            return null;
        }
    }

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
    async getBanners() { return await this.getAll('banners'); }
    async createBanner(bannerData) { return await this.create('banners', bannerData); }
    async updateBanner(id, bannerData) { return await this.update('banners', id, bannerData); }
    async deleteBanner(id) { return await this.delete('banners', id); }

    async getAbout() { return await this.getById('about', 1); }
    async updateAbout(aboutData) { 
        const data = this.getData();
        if (!data) return null;
        data.about = { ...data.about, ...aboutData, updatedAt: new Date().toISOString() };
        this.saveData(data);
        return data.about;
    }

    async getStatistics() { return await this.getAll('statistics'); }
    async updateStatistics(statisticsData) {
        const data = this.getData();
        if (!data) return null;
        data.statistics = statisticsData;
        this.saveData(data);
        return data.statistics;
    }

    async getTours() { return await this.getAll('tours'); }
    async getTour(id) { return await this.getById('tours', id); }
    async createTour(tourData) { return await this.create('tours', tourData); }
    async updateTour(id, tourData) { return await this.update('tours', id, tourData); }
    async deleteTour(id) { return await this.delete('tours', id); }

    async getDestinations() { return await this.getAll('destinations'); }
    async getDestination(id) { return await this.getById('destinations', id); }
    async createDestination(destinationData) { return await this.create('destinations', destinationData); }
    async updateDestination(id, destinationData) { return await this.update('destinations', id, destinationData); }
    async deleteDestination(id) { return await this.delete('destinations', id); }

    async getActivities() { return await this.getAll('activities'); }
    async getActivity(id) { return await this.getById('activities', id); }
    async createActivity(activityData) { return await this.create('activities', activityData); }
    async updateActivity(id, activityData) { return await this.update('activities', id, activityData); }
    async deleteActivity(id) { return await this.delete('activities', id); }

    async getBlogPosts() { return await this.getAll('blogPosts'); }
    async getBlogPost(id) { return await this.getById('blogPosts', id); }
    async createBlogPost(postData) { return await this.create('blogPosts', postData); }
    async updateBlogPost(id, postData) { return await this.update('blogPosts', id, postData); }
    async deleteBlogPost(id) { return await this.delete('blogPosts', id); }

    async getTestimonials() { return await this.getAll('testimonials'); }
    async getTestimonial(id) { return await this.getById('testimonials', id); }
    async createTestimonial(testimonialData) { return await this.create('testimonials', testimonialData); }
    async updateTestimonial(id, testimonialData) { return await this.update('testimonials', id, testimonialData); }
    async deleteTestimonial(id) { return await this.delete('testimonials', id); }

    async getGuides() { return await this.getAll('guides'); }
    async getGuide(id) { return await this.getById('guides', id); }
    async createGuide(guideData) { return await this.create('guides', guideData); }
    async updateGuide(id, guideData) { return await this.update('guides', id, guideData); }
    async deleteGuide(id) { return await this.delete('guides', id); }

    async getProducts() { return await this.getAll('products'); }
    async getProduct(id) { return await this.getById('products', id); }
    async createProduct(productData) { return await this.create('products', productData); }
    async updateProduct(id, productData) { return await this.update('products', id, productData); }
    async deleteProduct(id) { return await this.delete('products', id); }

    async getBookings() { return await this.getAll('bookings'); }
    async getBooking(id) { return await this.getById('bookings', id); }
    async createBooking(bookingData) { return await this.create('bookings', bookingData); }
    async updateBooking(id, bookingData) { return await this.update('bookings', id, bookingData); }
    async deleteBooking(id) { return await this.delete('bookings', id); }

    async getUsers() { return await this.getAll('users'); }
    async getUser(id) { return await this.getById('users', id); }
    async createUser(userData) { return await this.create('users', userData); }
    async updateUser(id, userData) { return await this.update('users', id, userData); }
    async deleteUser(id) { return await this.delete('users', id); }

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

// Create and export singleton instance
const completeDataService = new CompleteDataService();
export default completeDataService;
