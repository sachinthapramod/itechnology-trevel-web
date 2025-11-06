// Simple Admin Dashboard - Works without Firebase
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminSidebar from '../../Components/Admin/AdminSidebar';
import AdminHeader from '../../Components/Admin/AdminHeader';
import AdminLogin from './AdminLogin';
import DashboardHome from './DashboardHome';
import SimpleTourManagement from './SimpleTourManagement';
import SimpleDestinationManagement from './SimpleDestinationManagement';
import SimpleActivityManagement from './SimpleActivityManagement';
import SimpleBlogManagement from './SimpleBlogManagement';
import SimpleShopManagement from './SimpleShopManagement';
import BookingManagement from './BookingManagement';
import UserManagement from './UserManagement';
import Settings from './Settings';
import dataService from '../../services/dataService';
import './AdminDashboard.css';

function SimpleAdminDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        // Check if user is authenticated
        const token = localStorage.getItem('adminToken');
        if (token) {
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const handleLogin = (token) => {
        localStorage.setItem('adminToken', token);
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        setIsAuthenticated(false);
    };

    if (isLoading) {
        return (
            <div className="admin-loading">
                <div className="spinner"></div>
                <p>Loading admin panel...</p>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <AdminLogin onLogin={handleLogin} />;
    }

    return (
        <div className="admin-dashboard">
            <AdminSidebar 
                isOpen={sidebarOpen} 
                onToggle={() => setSidebarOpen(!sidebarOpen)} 
            />
            <div className={`admin-main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                <AdminHeader 
                    onLogout={handleLogout}
                    onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
                />
                <div className="admin-content">
                    <Routes>
                        <Route path="/" element={<DashboardHome />} />
                        <Route path="/tours" element={<SimpleTourManagement />} />
                        <Route path="/destinations" element={<SimpleDestinationManagement />} />
                        <Route path="/activities" element={<SimpleActivityManagement />} />
                        <Route path="/blog" element={<SimpleBlogManagement />} />
                        <Route path="/shop" element={<SimpleShopManagement />} />
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

export default SimpleAdminDashboard;
