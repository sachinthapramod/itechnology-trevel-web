import React, { useState, useEffect } from 'react';
import dataService from '../../services/dataService';
import './BookingManagement.css';

function BookingManagement() {
    const [bookings, setBookings] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        loadBookings();
    }, []);

    const loadBookings = async () => {
        try {
            const bookingsData = await dataService.getBookings();
            setBookings(bookingsData);
        } catch (error) {
            console.error('Error loading bookings:', error);
        }
    };

    const filteredBookings = bookings.filter(booking => {
        if (filter === 'all') return true;
        return booking.status.toLowerCase() === filter;
    });

    const handleStatusChange = async (id, newStatus) => {
        try {
            await dataService.updateBooking(id, { status: newStatus });
            await loadBookings();
        } catch (error) {
            console.error('Error updating booking status:', error);
            alert('Error updating booking status. Please try again.');
        }
    };

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'confirmed': return '#2ecc71';
            case 'pending': return '#f39c12';
            case 'cancelled': return '#e74c3c';
            default: return '#6c757d';
        }
    };

    return (
        <div className="booking-management">
            <div className="page-header">
                <h1>Booking Management</h1>
                <div className="header-actions">
                    <select 
                        value={filter} 
                        onChange={(e) => setFilter(e.target.value)}
                        className="filter-select"
                    >
                        <option value="all">All Bookings</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="pending">Pending</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>
            </div>

            <div className="bookings-table-container">
                <table className="bookings-table">
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Tour</th>
                            <th>Date</th>
                            <th>Participants</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBookings.map(booking => (
                            <tr key={booking.id}>
                                <td>
                                    <div className="customer-info">
                                        <div className="customer-name">{booking.customer}</div>
                                        <div className="customer-email">{booking.email}</div>
                                        <div className="customer-phone">{booking.phone}</div>
                                    </div>
                                </td>
                                <td>{booking.tour}</td>
                                <td>{booking.date}</td>
                                <td>{booking.participants}</td>
                                <td>${booking.total}</td>
                                <td>
                                    <span 
                                        className="status-badge"
                                        style={{ backgroundColor: getStatusColor(booking.status) }}
                                    >
                                        {booking.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="booking-actions">
                                        <select 
                                            value={booking.status}
                                            onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                                            className="status-select"
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Confirmed">Confirmed</option>
                                            <option value="Cancelled">Cancelled</option>
                                        </select>
                                        <button className="btn-view">
                                            <i className="fas fa-eye"></i>
                                        </button>
                                        <button className="btn-edit">
                                            <i className="fas fa-edit"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="booking-stats">
                <div className="stat-card">
                    <h3>Total Bookings</h3>
                    <div className="stat-value">{bookings.length}</div>
                </div>
                <div className="stat-card">
                    <h3>Confirmed</h3>
                    <div className="stat-value">
                        {bookings.filter(b => b.status === 'Confirmed').length}
                    </div>
                </div>
                <div className="stat-card">
                    <h3>Pending</h3>
                    <div className="stat-value">
                        {bookings.filter(b => b.status === 'Pending').length}
                    </div>
                </div>
                <div className="stat-card">
                    <h3>Total Revenue</h3>
                    <div className="stat-value">
                        ${bookings.reduce((sum, b) => sum + b.total, 0)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingManagement;
