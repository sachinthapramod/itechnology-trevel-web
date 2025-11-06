// Complete Admin Dashboard - Manages ALL content types for the travel agency website
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
import completeDataService from '../../services/completeDataService';
import './AdminDashboard.css';

function CompleteAdminDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = () => {
        // Simple authentication check
        const authToken = localStorage.getItem('admin_auth_token');
        if (authToken === 'admin_logged_in') {
            setIsAuthenticated(true);
        }
        setLoading(false);
    };

    const handleLogin = (credentials) => {
        // Simple hardcoded authentication for demo
        if (credentials.username === 'admin' && credentials.password === 'admin123') {
            localStorage.setItem('admin_auth_token', 'admin_logged_in');
            setIsAuthenticated(true);
            return true;
        }
        return false;
    };

    const handleLogout = () => {
        localStorage.removeItem('admin_auth_token');
        setIsAuthenticated(false);
    };

    if (loading) {
        return (
            <div className="admin-loading">
                <div className="loading-spinner"></div>
                <p>Loading admin dashboard...</p>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <AdminLogin onLogin={handleLogin} />;
    }

    return (
        <div className="admin-dashboard">
            <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className={`admin-main-content ${sidebarOpen ? '' : 'sidebar-closed'}`}>
                <AdminHeader onLogout={handleLogout} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
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
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default CompleteAdminDashboard;
