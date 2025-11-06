import React, { useState } from 'react';
import './AdminHeader.css';

function AdminHeader({ onToggleSidebar, onLogout }) {
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
        <header className="admin-header">
            <div className="admin-header-left">
                <button className="sidebar-toggle" onClick={onToggleSidebar}>
                    <i className="fas fa-bars"></i>
                </button>
                <h1>Admin Dashboard</h1>
            </div>
            
            <div className="admin-header-right">
                <div className="header-actions">
                    <button className="notification-btn">
                        <i className="fas fa-bell"></i>
                        <span className="notification-badge">3</span>
                    </button>
                    
                    <div className="user-menu">
                        <button 
                            className="user-menu-toggle"
                            onClick={() => setShowUserMenu(!showUserMenu)}
                        >
                            <div className="user-avatar">
                                <i className="fas fa-user"></i>
                            </div>
                            <span className="user-name">Admin User</span>
                            <i className="fas fa-chevron-down"></i>
                        </button>
                        
                        {showUserMenu && (
                            <div className="user-dropdown">
                                <div className="user-info">
                                    <div className="user-avatar-large">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div>
                                        <div className="user-name-large">Admin User</div>
                                        <div className="user-email">admin@tourm.com</div>
                                    </div>
                                </div>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-user"></i>
                                    Profile
                                </a>
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-cog"></i>
                                    Settings
                                </a>
                                <div className="dropdown-divider"></div>
                                <button className="dropdown-item logout-btn" onClick={onLogout}>
                                    <i className="fas fa-sign-out-alt"></i>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default AdminHeader;
