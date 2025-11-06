import React, { useState, useEffect } from 'react';
import dataService from '../../services/dataService';
import './ActivityManagement.css';

function ActivityManagement() {
    const [activities, setActivities] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingActivity, setEditingActivity] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: 'Adventure',
        duration: '',
        difficulty: 'Easy',
        price: '',
        image: '',
        featured: false
    });

    useEffect(() => {
        loadActivities();
    }, []);

    const loadActivities = async () => {
        try {
            const activitiesData = await dataService.getActivities();
            setActivities(activitiesData);
        } catch (error) {
            console.error('Error loading activities:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            if (editingActivity) {
                await dataService.updateActivity(editingActivity.id, formData);
            } else {
                await dataService.createActivity(formData);
            }
            
            await loadActivities();
            handleCloseModal();
        } catch (error) {
            console.error('Error saving activity:', error);
            alert('Error saving activity. Please try again.');
        }
    };

    const handleEdit = (activity) => {
        setEditingActivity(activity);
        setFormData(activity);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this activity?')) {
            try {
                await dataService.deleteActivity(id);
                await loadActivities();
            } catch (error) {
                console.error('Error deleting activity:', error);
                alert('Error deleting activity. Please try again.');
            }
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setEditingActivity(null);
        setFormData({
            name: '',
            description: '',
            category: 'Adventure',
            duration: '',
            difficulty: 'Easy',
            price: '',
            image: '',
            featured: false
        });
    };

    return (
        <div className="activity-management">
            <div className="page-header">
                <h1>Activity Management</h1>
                <button className="btn-primary" onClick={() => setShowModal(true)}>
                    <i className="fas fa-plus"></i>
                    Add New Activity
                </button>
            </div>

            <div className="activities-grid">
                {activities.map(activity => (
                    <div key={activity.id} className="activity-card">
                        <div className="activity-image">
                            <img src={activity.image} alt={activity.name} />
                            {activity.featured && <span className="featured-badge">Featured</span>}
                        </div>
                        <div className="activity-content">
                            <div className="activity-header">
                                <h3>{activity.name}</h3>
                                <span className="category-badge">{activity.category}</span>
                            </div>
                            <p className="activity-description">{activity.description}</p>
                            
                            <div className="activity-details">
                                <div className="detail-item">
                                    <i className="fas fa-clock"></i>
                                    <span>{activity.duration}</span>
                                </div>
                                <div className="detail-item">
                                    <i className="fas fa-signal"></i>
                                    <span>{activity.difficulty}</span>
                                </div>
                                <div className="detail-item">
                                    <i className="fas fa-dollar-sign"></i>
                                    <span>${activity.price}</span>
                                </div>
                            </div>
                            
                            <div className="activity-footer">
                                <div className="activity-bookings">{activity.bookings} bookings</div>
                                <div className="activity-actions">
                                    <button 
                                        className="btn-edit" 
                                        onClick={() => handleEdit(activity)}
                                    >
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button 
                                        className="btn-delete" 
                                        onClick={() => handleDelete(activity.id)}
                                    >
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>{editingActivity ? 'Edit Activity' : 'Add New Activity'}</h2>
                            <button className="modal-close" onClick={handleCloseModal}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="activity-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Activity Name</label>
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
                                    <label htmlFor="category">Category</label>
                                    <select
                                        id="category"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                    >
                                        <option value="Adventure">Adventure</option>
                                        <option value="Water Sports">Water Sports</option>
                                        <option value="Cultural">Cultural</option>
                                        <option value="Nature">Nature</option>
                                        <option value="Sports">Sports</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows="3"
                                    required
                                ></textarea>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="duration">Duration</label>
                                    <input
                                        type="text"
                                        id="duration"
                                        name="duration"
                                        value={formData.duration}
                                        onChange={handleInputChange}
                                        placeholder="e.g., 2 hours, 1 day"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="difficulty">Difficulty</label>
                                    <select
                                        id="difficulty"
                                        name="difficulty"
                                        value={formData.difficulty}
                                        onChange={handleInputChange}
                                    >
                                        <option value="Easy">Easy</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Hard">Hard</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="price">Price ($)</label>
                                    <input
                                        type="number"
                                        id="price"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="image">Image URL</label>
                                    <input
                                        type="url"
                                        id="image"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleInputChange}
                                        placeholder="https://example.com/image.jpg"
                                    />
                                </div>
                            </div>
                            
                            <div className="form-group checkbox-group">
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        name="featured"
                                        checked={formData.featured}
                                        onChange={handleInputChange}
                                    />
                                    <span className="checkmark"></span>
                                    Featured Activity
                                </label>
                            </div>
                            
                            <div className="form-actions">
                                <button type="button" className="btn-secondary" onClick={handleCloseModal}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn-primary">
                                    {editingActivity ? 'Update Activity' : 'Create Activity'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ActivityManagement;
