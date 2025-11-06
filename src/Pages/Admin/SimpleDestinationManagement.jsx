// Simple Destination Management - Fixed version
import React, { useState, useEffect } from 'react';
import dataService from '../../services/dataService';

function SimpleDestinationManagement() {
    const [destinations, setDestinations] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingDestination, setEditingDestination] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        country: '',
        image: '',
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
        console.log('Submitting destination form:', formData);
        
        try {
            if (editingDestination) {
                console.log('Updating destination:', editingDestination.id);
                await dataService.updateDestination(editingDestination.id, formData);
            } else {
                console.log('Creating new destination');
                await dataService.createDestination(formData);
            }
            
            await loadDestinations();
            handleCloseModal();
            alert('Destination saved successfully!');
        } catch (error) {
            console.error('Error saving destination:', error);
            alert('Error saving destination: ' + error.message);
        }
    };

    const handleEdit = (destination) => {
        console.log('Editing destination:', destination);
        setEditingDestination(destination);
        setFormData(destination);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        console.log('Deleting destination:', id);
        if (window.confirm('Are you sure you want to delete this destination?')) {
            try {
                await dataService.deleteDestination(id);
                await loadDestinations();
                alert('Destination deleted successfully!');
            } catch (error) {
                console.error('Error deleting destination:', error);
                alert('Error deleting destination: ' + error.message);
            }
        }
    };

    const handleCloseModal = () => {
        console.log('Closing destination modal');
        setShowModal(false);
        setEditingDestination(null);
        setFormData({
            name: '',
            description: '',
            country: '',
            image: '',
            featured: false
        });
    };

    const handleAddNew = () => {
        console.log('Adding new destination');
        setEditingDestination(null);
        setFormData({
            name: '',
            description: '',
            country: '',
            image: '',
            featured: false
        });
        setShowModal(true);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h1>Destination Management</h1>
                <button 
                    onClick={handleAddNew}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px'
                    }}
                >
                    + Add New Destination
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {destinations.map(destination => (
                    <div key={destination.id} style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '15px',
                        backgroundColor: 'white',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <h3>{destination.name}</h3>
                        <p>{destination.description}</p>
                        <p><strong>Country:</strong> {destination.country}</p>
                        {destination.featured && <p><strong>Featured:</strong> Yes</p>}
                        
                        <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                            <button 
                                onClick={() => handleEdit(destination)}
                                style={{
                                    padding: '8px 16px',
                                    backgroundColor: '#28a745',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                Edit
                            </button>
                            <button 
                                onClick={() => handleDelete(destination.id)}
                                style={{
                                    padding: '8px 16px',
                                    backgroundColor: '#dc3545',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '10px',
                        maxWidth: '500px',
                        width: '90%',
                        maxHeight: '90vh',
                        overflowY: 'auto'
                    }}>
                        <h2>{editingDestination ? 'Edit Destination' : 'Add New Destination'}</h2>
                        
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Destination Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                                />
                            </div>
                            
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    required
                                    rows="3"
                                    style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                                />
                            </div>
                            
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Country:</label>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    required
                                    style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                                />
                            </div>
                            
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Image URL:</label>
                                <input
                                    type="url"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleInputChange}
                                    placeholder="https://example.com/image.jpg"
                                    style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                                />
                            </div>
                            
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <input
                                        type="checkbox"
                                        name="featured"
                                        checked={formData.featured}
                                        onChange={handleInputChange}
                                    />
                                    Featured Destination
                                </label>
                            </div>
                            
                            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                                <button 
                                    type="button" 
                                    onClick={handleCloseModal}
                                    style={{
                                        padding: '10px 20px',
                                        backgroundColor: '#6c757d',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    style={{
                                        padding: '10px 20px',
                                        backgroundColor: '#007bff',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer'
                                    }}
                                >
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

export default SimpleDestinationManagement;
