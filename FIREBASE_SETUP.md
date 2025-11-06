# Firebase Setup Guide for TourM Admin Dashboard

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name: `tourm-admin`
4. Enable Google Analytics (optional)
5. Click "Create project"

### Step 2: Enable Firestore Database
1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location (choose closest to your users)
5. Click "Done"

### Step 3: Enable Authentication
1. In Firebase Console, go to "Authentication"
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password" provider
5. Click "Save"

### Step 4: Get Firebase Configuration
1. In Firebase Console, go to "Project Settings" (gear icon)
2. Scroll down to "Your apps"
3. Click "Web" icon (`</>`)
4. Enter app nickname: `tourm-admin-web`
5. Click "Register app"
6. Copy the configuration object

### Step 5: Update Firebase Config
Replace the placeholder values in `src/firebase/config.js`:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-actual-app-id"
};
```

### Step 6: Create Admin User
1. In Firebase Console, go to "Authentication"
2. Click "Users" tab
3. Click "Add user"
4. Email: `admin@tourm.com`
5. Password: `admin123`
6. Click "Add user"

## 🔧 Advanced Configuration

### Security Rules (Optional)
In Firestore Database > Rules, you can add security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to authenticated users only
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### Environment Variables (Recommended)
Create `.env.local` file:
```
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789
REACT_APP_FIREBASE_APP_ID=your-app-id
```

Then update `src/firebase/config.js`:
```javascript
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};
```

## 🎯 Features Now Available

### ✅ Real-time Database
- **Cloud Firestore** - NoSQL document database
- **Real-time updates** - Changes sync instantly
- **Offline support** - Works without internet
- **Scalable** - Handles millions of documents

### ✅ Authentication
- **Email/Password login** - Secure authentication
- **User management** - Create and manage users
- **Session persistence** - Stay logged in
- **Security** - Firebase handles security

### ✅ Admin Features
- **Multi-user support** - Multiple admins can access
- **Data persistence** - All data saved to cloud
- **Real-time sync** - Changes appear instantly
- **Backup & recovery** - Automatic cloud backup

## 🚀 Testing the Setup

1. **Start the development server:**
   ```bash
   npm start
   ```

2. **Access admin panel:**
   - Go to `http://localhost:3000/admin`
   - Login with: `admin@tourm.com` / `admin123`

3. **Test features:**
   - Add/edit/delete tours, destinations, etc.
   - Check Firebase Console to see data
   - Test real-time updates

## 🔍 Monitoring

### Firebase Console
- **Firestore Database** - View all your data
- **Authentication** - Manage users
- **Analytics** - Usage statistics
- **Performance** - App performance metrics

### Data Structure
Your Firestore will have these collections:
- `tours` - Tour packages
- `destinations` - Travel destinations
- `activities` - Activities and experiences
- `blogPosts` - Blog articles
- `products` - Shop products
- `bookings` - Customer bookings
- `users` - User accounts
- `settings` - Site configuration

## 🆘 Troubleshooting

### Common Issues:
1. **"Firebase not initialized"** - Check your config values
2. **"Permission denied"** - Check Firestore security rules
3. **"User not found"** - Create admin user in Firebase Console
4. **"Network error"** - Check internet connection

### Support:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Firebase Console](https://console.firebase.google.com/)

## 🎉 You're Done!

Your admin dashboard now has:
- ✅ **Real cloud database**
- ✅ **Secure authentication**
- ✅ **Real-time updates**
- ✅ **Multi-user support**
- ✅ **Professional features**

The admin dashboard is now production-ready with Firebase!
