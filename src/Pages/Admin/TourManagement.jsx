import React, { useState, useEffect } from 'react';
import dataService from '../../services/dataService';
import './TourManagement.css';

function TourManagement() {
    const [tours, setTours] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingTour, setEditingTour] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        duration: '',
        difficulty: 'Easy',
        location: '',
        image: '',
        featured: false
    });

    useEffect(() => {
        loadTours();
    }, []);

    const loadTours = async () => {
        try {
            const toursData = await dataService.getTours();
            setTours(toursData);
        } catch (error) {
            console.error('Error loading tours:', error);
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
            if (editingTour) {
                // Update existing tour
                await dataService.updateTour(editingTour.id, formData);
            } else {
                // Add new tour
                await dataService.createTour(formData);
            }
            
            // Reload tours
            await loadTours();
            handleCloseModal();
        } catch (error) {
            console.error('Error saving tour:', error);
            alert('Error saving tour. Please try again.');
        }
    };

    const handleEdit = (tour) => {
        setEditingTour(tour);
        setFormData(tour);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this tour?')) {
            try {
                await dataService.deleteTour(id);
                await loadTours();
            } catch (error) {
                console.error('Error deleting tour:', error);
                alert('Error deleting tour. Please try again.');
            }
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setEditingTour(null);
        setFormData({
            name: '',
            description: '',
            price: '',
            duration: '',
            difficulty: 'Easy',
            location: '',
            image: '',
            featured: false
        });
    };

    const handleAddNew = () => {
        setEditingTour(null);
        setShowModal(true);
    };

    return (
        <div className="tour-management">
            <div className="page-header">
                <h1>Tour Management</h1>
                <button className="btn-primary" onClick={handleAddNew}>
                    <i className="fas fa-plus"></i>
                    Add New Tour
                </button>
            </div>

            <div className="tours-grid">
                {tours.map(tour => (
                    <div key={tour.id} className="tour-card">
                        <div className="tour-image">
                            <img src={tour.image} alt={tour.name} />
                            {tour.featured && <span className="featured-badge">Featured</span>}
                        </div>
                        <div className="tour-content">
                            <h3>{tour.name}</h3>
                            <p className="tour-description">{tour.description}</p>
                            <div className="tour-details">
                                <div className="detail-item">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>{tour.location}</span>
                                </div>
                                <div className="detail-item">
                                    <i className="fas fa-clock"></i>
                                    <span>{tour.duration}</span>
                                </div>
                                <div className="detail-item">
                                    <i className="fas fa-signal"></i>
                                    <span>{tour.difficulty}</span>
                                </div>
                            </div>
                            <div className="tour-footer">
                                <div className="tour-price">${tour.price}</div>
                                <div className="tour-bookings">{tour.bookings} bookings</div>
                            </div>
                            <div className="tour-actions">
                                <button 
                                    className="btn-edit" 
                                    onClick={() => handleEdit(tour)}
                                >
                                    <i className="fas fa-edit"></i>
                                    Edit
                                </button>
                                <button 
                                    className="btn-delete" 
                                    onClick={() => handleDelete(tour.id)}
                                >
                                    <i className="fas fa-trash"></i>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>{editingTour ? 'Edit Tour' : 'Add New Tour'}</h2>
                            <button className="modal-close" onClick={handleCloseModal}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="tour-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Tour Name</label>
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
                                        placeholder="e.g., 3 days, 1 week"
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
                            
                            <div className="form-group">
                                <label htmlFor="location">Location</label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows="4"
                                    required
                                ></textarea>
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
                            
                            <div className="form-group checkbox-group">
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        name="featured"
                                        checked={formData.featured}
                                        onChange={handleInputChange}
                                    />
                                    <span className="checkmark"></span>
                                    Featured Tour
                                </label>
                            </div>
                            
                            <div className="form-actions">
                                <button type="button" className="btn-secondary" onClick={handleCloseModal}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn-primary">
                                    {editingTour ? 'Update Tour' : 'Create Tour'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TourManagement;
