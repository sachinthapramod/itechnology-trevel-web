// Simple Activity Management - Fixed version
import React, { useState, useEffect } from 'react';
import dataService from '../../services/dataService';

function SimpleActivityManagement() {
    const [activities, setActivities] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingActivity, setEditingActivity] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
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
        console.log('Submitting activity form:', formData);
        
        try {
            if (editingActivity) {
                console.log('Updating activity:', editingActivity.id);
                await dataService.updateActivity(editingActivity.id, formData);
            } else {
                console.log('Creating new activity');
                await dataService.createActivity(formData);
            }
            
            await loadActivities();
            handleCloseModal();
            alert('Activity saved successfully!');
        } catch (error) {
            console.error('Error saving activity:', error);
            alert('Error saving activity: ' + error.message);
        }
    };

    const handleEdit = (activity) => {
        console.log('Editing activity:', activity);
        setEditingActivity(activity);
        setFormData(activity);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        console.log('Deleting activity:', id);
        if (window.confirm('Are you sure you want to delete this activity?')) {
            try {
                await dataService.deleteActivity(id);
                await loadActivities();
                alert('Activity deleted successfully!');
            } catch (error) {
                console.error('Error deleting activity:', error);
                alert('Error deleting activity: ' + error.message);
            }
        }
    };

    const handleCloseModal = () => {
        console.log('Closing activity modal');
        setShowModal(false);
        setEditingActivity(null);
        setFormData({
            name: '',
            description: '',
            category: '',
            duration: '',
            difficulty: 'Easy',
            price: '',
            image: '',
            featured: false
        });
    };

    const handleAddNew = () => {
        console.log('Adding new activity');
        setEditingActivity(null);
        setFormData({
            name: '',
            description: '',
            category: '',
            duration: '',
            difficulty: 'Easy',
            price: '',
            image: '',
            featured: false
        });
        setShowModal(true);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h1>Activity Management</h1>
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
                    + Add New Activity
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {activities.map(activity => (
                    <div key={activity.id} style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '15px',
                        backgroundColor: 'white',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <h3>{activity.name}</h3>
                        <p>{activity.description}</p>
                        <p><strong>Category:</strong> {activity.category}</p>
                        <p><strong>Duration:</strong> {activity.duration}</p>
                        <p><strong>Difficulty:</strong> {activity.difficulty}</p>
                        <p><strong>Price:</strong> ${activity.price}</p>
                        {activity.featured && <p><strong>Featured:</strong> Yes</p>}
                        
                        <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                            <button 
                                onClick={() => handleEdit(activity)}
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
                                onClick={() => handleDelete(activity.id)}
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
                        <h2>{editingActivity ? 'Edit Activity' : 'Add New Activity'}</h2>
                        
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Activity Name:</label>
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
                                    <label style={{ display: 'block', marginBottom: '5px' }}>Category:</label>
                                    <input
                                        type="text"
                                        name="category"
                                        value={formData.category}
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
                                        placeholder="e.g., 2 hours"
                                        style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                                    />
                                </div>
                            </div>
                            
                            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
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
                                    Featured Activity
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

export default SimpleActivityManagement;
