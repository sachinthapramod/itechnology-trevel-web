import React, { useState, useEffect } from 'react';
import dataService from '../../services/dataService';
import './DestinationManagement.css';

function DestinationManagement() {
    const [destinations, setDestinations] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingDestination, setEditingDestination] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        country: '',
        description: '',
        image: '',
        climate: '',
        bestTime: '',
        attractions: '',
        featured: false
    });

    useEffect(() => {
        loadDestinations();
    }, []);

    const loadDestinations = async () => {
        try {
            const destinationsData = await dataService.getDestinations();
            setDestinations(destinationsData);
        } catch (error) {
            console.error('Error loading destinations:', error);
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
            if (editingDestination) {
                await dataService.updateDestination(editingDestination.id, formData);
            } else {
                await dataService.createDestination(formData);
            }
            
            await loadDestinations();
            handleCloseModal();
        } catch (error) {
            console.error('Error saving destination:', error);
            alert('Error saving destination. Please try again.');
        }
    };

    const handleEdit = (destination) => {
        setEditingDestination(destination);
        setFormData(destination);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this destination?')) {
            try {
                await dataService.deleteDestination(id);
                await loadDestinations();
            } catch (error) {
                console.error('Error deleting destination:', error);
                alert('Error deleting destination. Please try again.');
            }
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setEditingDestination(null);
        setFormData({
            name: '',
            country: '',
            description: '',
            image: '',
            climate: '',
            bestTime: '',
            attractions: '',
            featured: false
        });
    };

    return (
        <div className="destination-management">
            <div className="page-header">
                <h1>Destination Management</h1>
                <button className="btn-primary" onClick={() => setShowModal(true)}>
                    <i className="fas fa-plus"></i>
                    Add New Destination
                </button>
            </div>

            <div className="destinations-grid">
                {destinations.map(destination => (
                    <div key={destination.id} className="destination-card">
                        <div className="destination-image">
                            <img src={destination.image} alt={destination.name} />
                            {destination.featured && <span className="featured-badge">Featured</span>}
                        </div>
                        <div className="destination-content">
                            <div className="destination-header">
                                <h3>{destination.name}</h3>
                                <span className="country-badge">{destination.country}</span>
                            </div>
                            <p className="destination-description">{destination.description}</p>
                            
                            <div className="destination-details">
                                <div className="detail-row">
                                    <span className="detail-label">Climate:</span>
                                    <span className="detail-value">{destination.climate}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Best Time:</span>
                                    <span className="detail-value">{destination.bestTime}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Tours:</span>
                                    <span className="detail-value">{destination.tours} available</span>
                                </div>
                            </div>
                            
                            <div className="destination-attractions">
                                <strong>Attractions:</strong>
                                <p>{destination.attractions}</p>
                            </div>
                            
                            <div className="destination-actions">
                                <button 
                                    className="btn-edit" 
                                    onClick={() => handleEdit(destination)}
                                >
                                    <i className="fas fa-edit"></i>
                                    Edit
                                </button>
                                <button 
                                    className="btn-delete" 
                                    onClick={() => handleDelete(destination.id)}
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
                            <h2>{editingDestination ? 'Edit Destination' : 'Add New Destination'}</h2>
                            <button className="modal-close" onClick={handleCloseModal}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="destination-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Destination Name</label>
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
                                    <label htmlFor="country">Country</label>
                                    <input
                                        type="text"
                                        id="country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        required
                                    />
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
                                    <label htmlFor="climate">Climate</label>
                                    <select
                                        id="climate"
                                        name="climate"
                                        value={formData.climate}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select Climate</option>
                                        <option value="Tropical">Tropical</option>
                                        <option value="Temperate">Temperate</option>
                                        <option value="Alpine">Alpine</option>
                                        <option value="Desert">Desert</option>
                                        <option value="Mediterranean">Mediterranean</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="bestTime">Best Time to Visit</label>
                                    <input
                                        type="text"
                                        id="bestTime"
                                        name="bestTime"
                                        value={formData.bestTime}
                                        onChange={handleInputChange}
                                        placeholder="e.g., June - September"
                                    />
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="attractions">Main Attractions</label>
                                <textarea
                                    id="attractions"
                                    name="attractions"
                                    value={formData.attractions}
                                    onChange={handleInputChange}
                                    rows="2"
                                    placeholder="List main attractions separated by commas"
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
                                    Featured Destination
                                </label>
                            </div>
                            
                            <div className="form-actions">
                                <button type="button" className="btn-secondary" onClick={handleCloseModal}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn-primary">
                                    {editingDestination ? 'Update Destination' : 'Create Destination'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DestinationManagement;
