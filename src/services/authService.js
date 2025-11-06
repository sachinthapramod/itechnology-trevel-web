// Firebase Authentication Service
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import { auth } from '../firebase/config';

class AuthService {
  constructor() {
    this.currentUser = null;
    this.authStateListeners = [];
    
    // Listen for auth state changes
    onAuthStateChanged(auth, (user) => {
      this.currentUser = user;
      this.notifyListeners(user);
    });
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
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return {
        success: true,
        user: userCredential.user
      };
    } catch (error) {
      console.error('Sign in error:', error);
      return {
        success: false,
        error: this.getErrorMessage(error.code)
      };
    }
  }

  // Sign out
  async signOut() {
    try {
      await signOut(auth);
      return { success: true };
    } catch (error) {
      console.error('Sign out error:', error);
      return {
        success: false,
        error: 'Failed to sign out'
      };
    }
  }

  // Create user account
  async createUser(email, password, displayName) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update user profile
      await updateProfile(userCredential.user, {
        displayName: displayName
      });

      return {
        success: true,
        user: userCredential.user
      };
    } catch (error) {
      console.error('Create user error:', error);
      return {
        success: false,
        error: this.getErrorMessage(error.code)
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

  // Get user token
  async getToken() {
    if (this.currentUser) {
      return await this.currentUser.getIdToken();
    }
    return null;
  }

  // Get error message from error code
  getErrorMessage(errorCode) {
    const errorMessages = {
      'auth/user-not-found': 'No user found with this email address.',
      'auth/wrong-password': 'Incorrect password.',
      'auth/email-already-in-use': 'An account with this email already exists.',
      'auth/weak-password': 'Password should be at least 6 characters.',
      'auth/invalid-email': 'Invalid email address.',
      'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
      'auth/network-request-failed': 'Network error. Please check your connection.',
      'auth/user-disabled': 'This account has been disabled.',
      'auth/operation-not-allowed': 'This sign-in method is not allowed.'
    };

    return errorMessages[errorCode] || 'An error occurred. Please try again.';
  }

  // Demo admin login (for development)
  async demoAdminLogin() {
    // This is for demo purposes only
    // In production, you should create a real admin user in Firebase Console
    try {
      // Try to sign in with demo credentials
      const result = await this.signIn('admin@tourm.com', 'admin123');
      
      if (!result.success) {
        // If demo user doesn't exist, create it
        const createResult = await this.createUser('admin@tourm.com', 'admin123', 'Admin User');
        return createResult;
      }
      
      return result;
    } catch (error) {
      console.error('Demo admin login error:', error);
      return {
        success: false,
        error: 'Failed to create demo admin account'
      };
    }
  }
}

// Create and export a singleton instance
const authService = new AuthService();
export default authService;
