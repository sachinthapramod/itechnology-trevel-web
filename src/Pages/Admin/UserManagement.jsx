import React, { useState, useEffect } from 'react';
import dataService from '../../services/dataService';
import './UserManagement.css';

function UserManagement() {
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'User',
        status: 'Active',
        phone: '',
        joinDate: ''
    });

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const usersData = await dataService.getUsers();
            setUsers(usersData);
        } catch (error) {
            console.error('Error loading users:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            if (editingUser) {
                await dataService.updateUser(editingUser.id, formData);
            } else {
                await dataService.createUser(formData);
            }
            
            await loadUsers();
            handleCloseModal();
        } catch (error) {
            console.error('Error saving user:', error);
            alert('Error saving user. Please try again.');
        }
    };

    const handleEdit = (user) => {
        setEditingUser(user);
        setFormData(user);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await dataService.deleteUser(id);
                await loadUsers();
            } catch (error) {
                console.error('Error deleting user:', error);
                alert('Error deleting user. Please try again.');
            }
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setEditingUser(null);
        setFormData({
            name: '',
            email: '',
            role: 'User',
            status: 'Active',
            phone: '',
            joinDate: ''
        });
    };

    const getStatusColor = (status) => {
        return status === 'Active' ? '#2ecc71' : '#e74c3c';
    };

    const getRoleColor = (role) => {
        return role === 'Admin' ? '#e74c3c' : '#3498db';
    };

    return (
        <div className="user-management">
            <div className="page-header">
                <h1>User Management</h1>
                <button className="btn-primary" onClick={() => setShowModal(true)}>
                    <i className="fas fa-plus"></i>
                    Add New User
                </button>
            </div>

            <div className="users-table-container">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Join Date</th>
                            <th>Bookings</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>
                                    <div className="user-info">
                                        <div className="user-avatar">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div className="user-details">
                                            <div className="user-name">{user.name}</div>
                                            <div className="user-email">{user.email}</div>
                                            <div className="user-phone">{user.phone}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span 
                                        className="role-badge"
                                        style={{ backgroundColor: getRoleColor(user.role) }}
                                    >
                                        {user.role}
                                    </span>
                                </td>
                                <td>
                                    <span 
                                        className="status-badge"
                                        style={{ backgroundColor: getStatusColor(user.status) }}
                                    >
                                        {user.status}
                                    </span>
                                </td>
                                <td>{user.joinDate}</td>
                                <td>{user.bookings}</td>
                                <td>
                                    <div className="user-actions">
                                        <button 
                                            className="btn-edit" 
                                            onClick={() => handleEdit(user)}
                                        >
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button 
                                            className="btn-delete" 
                                            onClick={() => handleDelete(user.id)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="user-stats">
                <div className="stat-card">
                    <h3>Total Users</h3>
                    <div className="stat-value">{users.length}</div>
                </div>
                <div className="stat-card">
                    <h3>Active Users</h3>
                    <div className="stat-value">
                        {users.filter(u => u.status === 'Active').length}
                    </div>
                </div>
                <div className="stat-card">
                    <h3>Admins</h3>
                    <div className="stat-value">
                        {users.filter(u => u.role === 'Admin').length}
                    </div>
                </div>
                <div className="stat-card">
                    <h3>Total Bookings</h3>
                    <div className="stat-value">
                        {users.reduce((sum, u) => sum + u.bookings, 0)}
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>{editingUser ? 'Edit User' : 'Add New User'}</h2>
                            <button className="modal-close" onClick={handleCloseModal}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="user-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="role">Role</label>
                                    <select
                                        id="role"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleInputChange}
                                    >
                                        <option value="User">User</option>
                                        <option value="Admin">Admin</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="status">Status</label>
                                <select
                                    id="status"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleInputChange}
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                            
                            <div className="form-actions">
                                <button type="button" className="btn-secondary" onClick={handleCloseModal}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn-primary">
                                    {editingUser ? 'Update User' : 'Create User'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserManagement;
