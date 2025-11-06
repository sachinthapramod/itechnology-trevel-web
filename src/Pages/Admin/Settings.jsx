import React, { useState, useEffect } from 'react';
import dataService from '../../services/dataService';
import './Settings.css';

function Settings() {
    const [settings, setSettings] = useState({
        siteName: 'TourM',
        siteDescription: 'Your ultimate travel companion',
        contactEmail: 'info@tourm.com',
        contactPhone: '+1 (555) 123-4567',
        address: '123 Travel Street, Adventure City, AC 12345',
        socialMedia: {
            facebook: 'https://facebook.com/tourm',
            twitter: 'https://twitter.com/tourm',
            instagram: 'https://instagram.com/tourm',
            youtube: 'https://youtube.com/tourm'
        },
        currency: 'USD',
        timezone: 'UTC',
        maintenanceMode: false,
        allowRegistration: true,
        emailNotifications: true
    });

    useEffect(() => {
        loadSettings();
    }, []);

    const loadSettings = async () => {
        try {
            const settingsData = await dataService.getSettings();
            setSettings(settingsData);
        } catch (error) {
            console.error('Error loading settings:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        if (name.startsWith('socialMedia.')) {
            const socialKey = name.split('.')[1];
            setSettings(prev => ({
                ...prev,
                socialMedia: {
                    ...prev.socialMedia,
                    [socialKey]: value
                }
            }));
        } else {
            setSettings(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dataService.updateSettings(settings);
            alert('Settings saved successfully!');
        } catch (error) {
            console.error('Error saving settings:', error);
            alert('Error saving settings. Please try again.');
        }
    };

    return (
        <div className="settings-page">
            <div className="page-header">
                <h1>Settings</h1>
                <p>Manage your website settings and preferences</p>
            </div>

            <div className="settings-container">
                <form onSubmit={handleSubmit} className="settings-form">
                    {/* General Settings */}
                    <div className="settings-section">
                        <h2>General Settings</h2>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="siteName">Site Name</label>
                                <input
                                    type="text"
                                    id="siteName"
                                    name="siteName"
                                    value={settings.siteName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="currency">Currency</label>
                                <select
                                    id="currency"
                                    name="currency"
                                    value={settings.currency}
                                    onChange={handleInputChange}
                                >
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="GBP">GBP</option>
                                    <option value="JPY">JPY</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="siteDescription">Site Description</label>
                            <textarea
                                id="siteDescription"
                                name="siteDescription"
                                value={settings.siteDescription}
                                onChange={handleInputChange}
                                rows="3"
                            ></textarea>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="settings-section">
                        <h2>Contact Information</h2>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="contactEmail">Contact Email</label>
                                <input
                                    type="email"
                                    id="contactEmail"
                                    name="contactEmail"
                                    value={settings.contactEmail}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contactPhone">Contact Phone</label>
                                <input
                                    type="tel"
                                    id="contactPhone"
                                    name="contactPhone"
                                    value={settings.contactPhone}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <textarea
                                id="address"
                                name="address"
                                value={settings.address}
                                onChange={handleInputChange}
                                rows="2"
                            ></textarea>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="settings-section">
                        <h2>Social Media Links</h2>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="socialMedia.facebook">Facebook</label>
                                <input
                                    type="url"
                                    id="socialMedia.facebook"
                                    name="socialMedia.facebook"
                                    value={settings.socialMedia.facebook}
                                    onChange={handleInputChange}
                                    placeholder="https://facebook.com/yourpage"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="socialMedia.twitter">Twitter</label>
                                <input
                                    type="url"
                                    id="socialMedia.twitter"
                                    name="socialMedia.twitter"
                                    value={settings.socialMedia.twitter}
                                    onChange={handleInputChange}
                                    placeholder="https://twitter.com/yourpage"
                                />
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="socialMedia.instagram">Instagram</label>
                                <input
                                    type="url"
                                    id="socialMedia.instagram"
                                    name="socialMedia.instagram"
                                    value={settings.socialMedia.instagram}
                                    onChange={handleInputChange}
                                    placeholder="https://instagram.com/yourpage"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="socialMedia.youtube">YouTube</label>
                                <input
                                    type="url"
                                    id="socialMedia.youtube"
                                    name="socialMedia.youtube"
                                    value={settings.socialMedia.youtube}
                                    onChange={handleInputChange}
                                    placeholder="https://youtube.com/yourchannel"
                                />
                            </div>
                        </div>
                    </div>

                    {/* System Settings */}
                    <div className="settings-section">
                        <h2>System Settings</h2>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="timezone">Timezone</label>
                                <select
                                    id="timezone"
                                    name="timezone"
                                    value={settings.timezone}
                                    onChange={handleInputChange}
                                >
                                    <option value="UTC">UTC</option>
                                    <option value="EST">Eastern Time</option>
                                    <option value="PST">Pacific Time</option>
                                    <option value="GMT">Greenwich Mean Time</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="checkbox-group">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    name="maintenanceMode"
                                    checked={settings.maintenanceMode}
                                    onChange={handleInputChange}
                                />
                                <span className="checkmark"></span>
                                Maintenance Mode
                            </label>
                            
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    name="allowRegistration"
                                    checked={settings.allowRegistration}
                                    onChange={handleInputChange}
                                />
                                <span className="checkmark"></span>
                                Allow User Registration
                            </label>
                            
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    name="emailNotifications"
                                    checked={settings.emailNotifications}
                                    onChange={handleInputChange}
                                />
                                <span className="checkmark"></span>
                                Email Notifications
                            </label>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn-secondary">
                            Reset to Default
                        </button>
                        <button type="submit" className="btn-primary">
                            Save Settings
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Settings;
