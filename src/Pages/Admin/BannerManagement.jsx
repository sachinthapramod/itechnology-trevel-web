// Banner Management Component
import React, { useState, useEffect } from 'react';
import completeDataService from '../../services/completeDataService';
import './BannerManagement.css';

function BannerManagement() {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingBanner, setEditingBanner] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        backgroundImage: '',
        button1Text: 'Explore Tours',
        button1Link: '/tour',
        button2Text: 'Our Services',
        button2Link: '/service',
        active: true,
        order: 1
    });

    useEffect(() => {
        loadBanners();
    }, []);

    const loadBanners = async () => {
        try {
            setLoading(true);
            const bannersData = await completeDataService.getBanners();
            setBanners(bannersData);
        } catch (error) {
            console.error('Error loading banners:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingBanner) {
                await completeDataService.updateBanner(editingBanner.id, formData);
            } else {
                await completeDataService.createBanner(formData);
            }
            await loadBanners();
            setShowModal(false);
            setEditingBanner(null);
            setFormData({
                title: '',
                subtitle: '',
                backgroundImage: '',
                button1Text: 'Explore Tours',
                button1Link: '/tour',
                button2Text: 'Our Services',
                button2Link: '/service',
                active: true,
                order: 1
            });
        } catch (error) {
            console.error('Error saving banner:', error);
        }
    };

    const handleEdit = (banner) => {
        setEditingBanner(banner);
        setFormData(banner);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this banner?')) {
            try {
                await completeDataService.deleteBanner(id);
                await loadBanners();
            } catch (error) {
                console.error('Error deleting banner:', error);
            }
        }
    };

    const handleAddNew = () => {
        setEditingBanner(null);
        setFormData({
            title: '',
            subtitle: '',
            backgroundImage: '',
            button1Text: 'Explore Tours',
            button1Link: '/tour',
            button2Text: 'Our Services',
            button2Link: '/service',
            active: true,
            order: banners.length + 1
        });
        setShowModal(true);
    };

    if (loading) {
        return <div className="loading">Loading banners...</div>;
    }

    return (
        <div className="banner-management">
            <div className="page-header">
                <h1>Banner Management</h1>
                <button className="btn btn-primary" onClick={handleAddNew}>
                    Add New Banner
                </button>
            </div>

            <div className="banners-grid">
                {banners.map((banner) => (
                    <div key={banner.id} className="banner-card">
                        <div className="banner-preview">
                            <div 
                                className="banner-bg"
                                style={{ backgroundImage: `url(${banner.backgroundImage})` }}
                            >
                                <div className="banner-content">
                                    <h3>{banner.title}</h3>
                                    <p>{banner.subtitle}</p>
                                </div>
                            </div>
                        </div>
                        <div className="banner-info">
                            <h3>{banner.title}</h3>
                            <p>Order: {banner.order}</p>
                            <p>Status: {banner.active ? 'Active' : 'Inactive'}</p>
                        </div>
                        <div className="banner-actions">
                            <button 
                                className="btn btn-sm btn-primary" 
                                onClick={() => handleEdit(banner)}
                            >
                                Edit
                            </button>
                            <button 
                                className="btn btn-sm btn-danger" 
                                onClick={() => handleDelete(banner.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>{editingBanner ? 'Edit Banner' : 'Add New Banner'}</h2>
                            <button 
                                className="close-btn" 
                                onClick={() => setShowModal(false)}
                            >
                                ×
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="modal-body">
                            <div className="form-group">
                                <label>Title</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Subtitle</label>
                                <input
                                    type="text"
                                    value={formData.subtitle}
                                    onChange={(e) => setFormData({...formData, subtitle: e.target.value})}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Background Image URL</label>
                                <input
                                    type="url"
                                    value={formData.backgroundImage}
                                    onChange={(e) => setFormData({...formData, backgroundImage: e.target.value})}
                                    required
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Button 1 Text</label>
                                    <input
                                        type="text"
                                        value={formData.button1Text}
                                        onChange={(e) => setFormData({...formData, button1Text: e.target.value})}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Button 1 Link</label>
                                    <input
                                        type="text"
                                        value={formData.button1Link}
                                        onChange={(e) => setFormData({...formData, button1Link: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Button 2 Text</label>
                                    <input
                                        type="text"
                                        value={formData.button2Text}
                                        onChange={(e) => setFormData({...formData, button2Text: e.target.value})}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Button 2 Link</label>
                                    <input
                                        type="text"
                                        value={formData.button2Link}
                                        onChange={(e) => setFormData({...formData, button2Link: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Order</label>
                                    <input
                                        type="number"
                                        value={formData.order}
                                        onChange={(e) => setFormData({...formData, order: parseInt(e.target.value)})}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={formData.active}
                                            onChange={(e) => setFormData({...formData, active: e.target.checked})}
                                        />
                                        Active
                                    </label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={() => setShowModal(false)}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    {editingBanner ? 'Update' : 'Create'} Banner
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BannerManagement;
