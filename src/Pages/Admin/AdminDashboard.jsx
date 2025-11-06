import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminSidebar from '../../Components/Admin/AdminSidebar';
import AdminHeader from '../../Components/Admin/AdminHeader';
import AdminLogin from './AdminLogin';
import DashboardHome from './DashboardHome';
import TourManagement from './TourManagement';
import DestinationManagement from './DestinationManagement';
import ActivityManagement from './ActivityManagement';
import BlogManagement from './BlogManagement';
import ShopManagement from './ShopManagement';
import BookingManagement from './BookingManagement';
import UserManagement from './UserManagement';
import Settings from './Settings';
import FirebaseSetup from './FirebaseSetup';
import authService from '../../services/authService';
import firebaseService from '../../services/firebaseService';
import { testFirebaseConnection, checkFirebaseSetup } from '../../utils/firebaseTest';
import { debugFirebase, testFirebaseAuth, testFirestore } from '../../utils/firebaseDebug';
import './AdminDashboard.css';

function AdminDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        const initializeFirebase = async () => {
            console.log('🚀 Initializing Firebase...');
            
            // Debug Firebase setup
            debugFirebase();
            
            try {
                // Test Firebase services
                const authTest = await testFirebaseAuth();
                const firestoreTest = await testFirestore();
                
                if (authTest && firestoreTest) {
                    console.log('✅ Firebase services are working');
                    
                    // Test Firebase connection
                    const isConnected = await testFirebaseConnection();
                    
                    if (isConnected) {
                        console.log('✅ Firebase is properly configured');
                        // Initialize Firebase data
                        await firebaseService.initializeDefaultData();

                        // Listen for Firebase authentication state changes
                        const unsubscribe = authService.addAuthStateListener((user) => {
                            console.log('🔐 Auth state changed:', user ? 'Logged in' : 'Logged out');
                            setIsAuthenticated(!!user);
                            setIsLoading(false);
                        });

                        return () => unsubscribe();
                    } else {
                        console.log('❌ Firebase connection test failed');
                        checkFirebaseSetup();
                        setIsLoading(false);
                    }
                } else {
                    console.log('❌ Firebase services not working');
                    checkFirebaseSetup();
                    setIsLoading(false);
                }
            } catch (error) {
                console.error('❌ Firebase initialization error:', error);
                checkFirebaseSetup();
                setIsLoading(false);
            }
        };

        initializeFirebase();
    }, []);

    const handleLogin = async (email, password) => {
        const result = await authService.signIn(email, password);
        if (result.success) {
            setIsAuthenticated(true);
        }
        return result;
    };

    const handleLogout = async () => {
        await authService.signOut();
        setIsAuthenticated(false);
    };

    if (isLoading) {
        return (
            <div className="admin-loading">
                <div className="spinner"></div>
                <p>Loading...</p>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <AdminLogin onLogin={handleLogin} />;
    }

    return (
        <div className="admin-dashboard">
            <AdminSidebar isOpen={sidebarOpen} />
            <div className={`admin-main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                <AdminHeader onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} onLogout={handleLogout} />
                <div className="admin-content">
                    <Routes>
                        <Route path="/" element={<DashboardHome />} />
                        <Route path="/tours" element={<TourManagement />} />
                        <Route path="/destinations" element={<DestinationManagement />} />
                        <Route path="/activities" element={<ActivityManagement />} />
                        <Route path="/blog" element={<BlogManagement />} />
                        <Route path="/shop" element={<ShopManagement />} />
                        <Route path="/bookings" element={<BookingManagement />} />
                        <Route path="/users" element={<UserManagement />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/firebase-setup" element={<FirebaseSetup />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
