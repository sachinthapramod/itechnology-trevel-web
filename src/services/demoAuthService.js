// Demo Authentication Service - Works without Firebase
class DemoAuthService {
    constructor() {
        this.currentUser = null;
        this.authStateListeners = [];
    }

    // Add auth state listener
    addAuthStateListener(callback) {
        this.authStateListeners.push(callback);
        
        // Return unsubscribe function
        return () => {
            const index = this.authStateListeners.indexOf(callback);
            if (index > -1) {
                this.authStateListeners.splice(index, 1);
            }
        };
    }

    // Notify all listeners
    notifyListeners(user) {
        this.authStateListeners.forEach(callback => callback(user));
    }

    // Sign in with email and password
    async signIn(email, password) {
        try {
            // Demo authentication - accepts any email/password
            if (email && password) {
                this.currentUser = {
                    uid: 'demo-user-123',
                    email: email,
                    displayName: 'Demo Admin'
                };
                
                this.notifyListeners(this.currentUser);
                
                return {
                    success: true,
                    user: this.currentUser
                };
            } else {
                return {
                    success: false,
                    error: 'Email and password are required'
                };
            }
        } catch (error) {
            console.error('Sign in error:', error);
            return {
                success: false,
                error: 'An error occurred during sign in'
            };
        }
    }

    // Sign out
    async signOut() {
        try {
            this.currentUser = null;
            this.notifyListeners(null);
            return { success: true };
        } catch (error) {
            console.error('Sign out error:', error);
            return {
                success: false,
                error: 'Failed to sign out'
            };
        }
    }

    // Get current user
    getCurrentUser() {
        return this.currentUser;
    }

    // Check if user is authenticated
    isAuthenticated() {
        return !!this.currentUser;
    }

    // Get user token (demo)
    async getToken() {
        return 'demo-token-123';
    }
}

// Create and export a singleton instance
const demoAuthService = new DemoAuthService();
export default demoAuthService;
