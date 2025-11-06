import React, { useState, useEffect } from 'react';
import dataService from '../../services/dataService';
import './DashboardHome.css';

function DashboardHome() {
    const [stats, setStats] = useState({
        totalTours: 0,
        totalBookings: 0,
        totalUsers: 0,
        totalRevenue: 0
    });

    const [recentBookings, setRecentBookings] = useState([]);
    const [recentTours, setRecentTours] = useState([]);

    useEffect(() => {
        loadDashboardData();
    }, []);

    const loadDashboardData = async () => {
        try {
            // Load dashboard statistics
            const dashboardStats = await dataService.getDashboardStats();
            setStats(dashboardStats);

            // Load recent bookings
            const bookings = await dataService.getBookings();
            const recentBookings = bookings.slice(-4).reverse();
            setRecentBookings(recentBookings);

            // Load popular tours
            const tours = await dataService.getTours();
            const popularTours = tours
                .sort((a, b) => (b.bookings || 0) - (a.bookings || 0))
                .slice(0, 4)
                .map(tour => ({
                    id: tour.id,
                    name: tour.name,
                    bookings: tour.bookings || 0,
                    revenue: (tour.bookings || 0) * (tour.price || 0)
                }));
            setRecentTours(popularTours);
        } catch (error) {
            console.error('Error loading dashboard data:', error);
        }
    };

    const StatCard = ({ title, value, icon, color, change }) => (
        <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: color }}>
                <i className={icon}></i>
            </div>
            <div className="stat-content">
                <h3>{value}</h3>
                <p>{title}</p>
                {change && <span className={`stat-change ${change > 0 ? 'positive' : 'negative'}`}>
                    {change > 0 ? '+' : ''}{change}%
                </span>}
            </div>
        </div>
    );

    return (
        <div className="dashboard-home">
            <div className="dashboard-header">
                <h1>Dashboard Overview</h1>
                <p>Welcome back! Here's what's happening with your tourism business.</p>
            </div>

            <div className="stats-grid">
                <StatCard
                    title="Total Tours"
                    value={stats.totalTours}
                    icon="fas fa-map-marked-alt"
                    color="#3498db"
                    change={12}
                />
                <StatCard
                    title="Total Bookings"
                    value={stats.totalBookings}
                    icon="fas fa-calendar-check"
                    color="#2ecc71"
                    change={8}
                />
                <StatCard
                    title="Total Users"
                    value={stats.totalUsers}
                    icon="fas fa-users"
                    color="#f39c12"
                    change={-2}
                />
                <StatCard
                    title="Total Revenue"
                    value={`$${stats.totalRevenue.toLocaleString()}`}
                    icon="fas fa-dollar-sign"
                    color="#e74c3c"
                    change={15}
                />
            </div>

            <div className="dashboard-content">
                <div className="dashboard-section">
                    <div className="section-header">
                        <h2>Recent Bookings</h2>
                        <a href="/admin/bookings" className="view-all-link">View All</a>
                    </div>
                    <div className="bookings-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Customer</th>
                                    <th>Tour</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentBookings.map(booking => (
                                    <tr key={booking.id}>
                                        <td>{booking.customer}</td>
                                        <td>{booking.tour}</td>
                                        <td>{booking.date}</td>
                                        <td>
                                            <span className={`status-badge ${booking.status.toLowerCase()}`}>
                                                {booking.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="dashboard-section">
                    <div className="section-header">
                        <h2>Popular Tours</h2>
                        <a href="/admin/tours" className="view-all-link">View All</a>
                    </div>
                    <div className="tours-list">
                        {recentTours.map(tour => (
                            <div key={tour.id} className="tour-item">
                                <div className="tour-info">
                                    <h4>{tour.name}</h4>
                                    <p>{tour.bookings} bookings</p>
                                </div>
                                <div className="tour-revenue">
                                    ${tour.revenue}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="quick-actions">
                <h2>Quick Actions</h2>
                <div className="actions-grid">
                    <a href="/admin/tours" className="action-card">
                        <i className="fas fa-plus"></i>
                        <span>Add New Tour</span>
                    </a>
                    <a href="/admin/blog" className="action-card">
                        <i className="fas fa-edit"></i>
                        <span>Write Blog Post</span>
                    </a>
                    <a href="/admin/shop" className="action-card">
                        <i className="fas fa-shopping-cart"></i>
                        <span>Add Product</span>
                    </a>
                    <a href="/admin/users" className="action-card">
                        <i className="fas fa-user-plus"></i>
                        <span>Manage Users</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DashboardHome;
