import React, { useState } from 'react';
import authService from '../../services/authService';
import './AdminLogin.css';

function AdminLogin({ onLogin }) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Simple authentication (works immediately)
        if (formData.email === 'admin@tourm.com' && formData.password === 'admin123') {
            const token = 'admin-token-' + Date.now();
            onLogin(token);
        } else {
            setError('Invalid credentials. Use admin@tourm.com / admin123');
        }
        
        setIsLoading(false);
    };

    return (
        <div className="admin-login-container">
            <div className="admin-login-card">
                <div className="admin-login-header">
                    <h1>TourM Admin</h1>
                    <p>Sign in to your admin dashboard</p>
                </div>
                
                <form onSubmit={handleSubmit} className="admin-login-form">
                    {error && <div className="error-message">{error}</div>}
                    
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="admin@tourm.com"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="admin123"
                        />
                    </div>
                    
                    <button type="submit" className="admin-login-btn" disabled={isLoading}>
                        {isLoading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>
                
                <div className="admin-login-footer">
                    <p><strong>Demo Credentials:</strong></p>
                    <p>Email: admin@tourm.com</p>
                    <p>Password: admin123</p>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
