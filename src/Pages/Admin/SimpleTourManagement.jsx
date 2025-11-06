// Simple Tour Management - Fixed version
import React, { useState, useEffect } from 'react';
import dataService from '../../services/dataService';

function SimpleTourManagement() {
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
        console.log('Submitting form:', formData);
        
        try {
            if (editingTour) {
                console.log('Updating tour:', editingTour.id);
                await dataService.updateTour(editingTour.id, formData);
            } else {
                console.log('Creating new tour');
                await dataService.createTour(formData);
            }
            
            await loadTours();
            handleCloseModal();
            alert('Tour saved successfully!');
        } catch (error) {
            console.error('Error saving tour:', error);
            alert('Error saving tour: ' + error.message);
        }
    };

    const handleEdit = (tour) => {
        console.log('Editing tour:', tour);
        setEditingTour(tour);
        setFormData(tour);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        console.log('Deleting tour:', id);
        if (window.confirm('Are you sure you want to delete this tour?')) {
            try {
                await dataService.deleteTour(id);
                await loadTours();
                alert('Tour deleted successfully!');
            } catch (error) {
                console.error('Error deleting tour:', error);
                alert('Error deleting tour: ' + error.message);
            }
        }
    };

    const handleCloseModal = () => {
        console.log('Closing modal');
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
        console.log('Adding new tour');
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
        setShowModal(true);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h1>Tour Management</h1>
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
                    + Add New Tour
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {tours.map(tour => (
                    <div key={tour.id} style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '15px',
                        backgroundColor: 'white',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <h3>{tour.name}</h3>
                        <p>{tour.description}</p>
                        <p><strong>Price:</strong> ${tour.price}</p>
                        <p><strong>Duration:</strong> {tour.duration}</p>
                        <p><strong>Location:</strong> {tour.location}</p>
                        <p><strong>Difficulty:</strong> {tour.difficulty}</p>
                        {tour.featured && <p><strong>Featured:</strong> Yes</p>}
                        
                        <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                            <button 
                                onClick={() => handleEdit(tour)}
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
                                onClick={() => handleDelete(tour.id)}
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
                        <h2>{editingTour ? 'Edit Tour' : 'Add New Tour'}</h2>
                        
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Tour Name:</label>
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
                            
                            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', marginBottom: '5px' }}>Price ($):</label>
                                    <input
                                        type="number"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleInputChange}
                                        required
                                        style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                                    />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', marginBottom: '5px' }}>Duration:</label>
                                    <input
                                        type="text"
                                        name="duration"
                                        value={formData.duration}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="e.g., 3 days"
                                        style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                                    />
                                </div>
                            </div>
                            
                            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', marginBottom: '5px' }}>Location:</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        required
                                        style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                                    />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', marginBottom: '5px' }}>Difficulty:</label>
                                    <select
                                        name="difficulty"
                                        value={formData.difficulty}
                                        onChange={handleInputChange}
                                        style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                                    >
                                        <option value="Easy">Easy</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Hard">Hard</option>
                                    </select>
                                </div>
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
                                    Featured Tour
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

export default SimpleTourManagement;
