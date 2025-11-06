import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AdminSidebar.css';

function AdminSidebar({ isOpen }) {
    const location = useLocation();

    const menuItems = [
        {
            path: '/admin',
            icon: 'fas fa-tachometer-alt',
            label: 'Dashboard',
            exact: true
        },
        {
            path: '/admin/tours',
            icon: 'fas fa-map-marked-alt',
            label: 'Tours',
            exact: false
        },
        {
            path: '/admin/destinations',
            icon: 'fas fa-globe',
            label: 'Destinations',
            exact: false
        },
        {
            path: '/admin/activities',
            icon: 'fas fa-hiking',
            label: 'Activities',
            exact: false
        },
        {
            path: '/admin/blog',
            icon: 'fas fa-blog',
            label: 'Blog Posts',
            exact: false
        },
        {
            path: '/admin/shop',
            icon: 'fas fa-shopping-cart',
            label: 'Shop Products',
            exact: false
        },
        {
            path: '/admin/bookings',
            icon: 'fas fa-calendar-check',
            label: 'Bookings',
            exact: false
        },
        {
            path: '/admin/users',
            icon: 'fas fa-users',
            label: 'Users',
            exact: false
        },
        {
            path: '/admin/settings',
            icon: 'fas fa-cog',
            label: 'Settings',
            exact: false
        }
    ];

    const isActive = (path, exact) => {
        if (exact) {
            return location.pathname === path;
        }
        return location.pathname.startsWith(path);
    };

    return (
        <div className={`admin-sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="admin-sidebar-header">
                <h3>TourM Admin</h3>
            </div>
            
            <nav className="admin-sidebar-nav">
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.path}
                                className={`admin-nav-link ${isActive(item.path, item.exact) ? 'active' : ''}`}
                            >
                                <i className={item.icon}></i>
                                <span className="nav-label">{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            
            <div className="admin-sidebar-footer">
                <Link to="/" className="view-site-link">
                    <i className="fas fa-external-link-alt"></i>
                    <span>View Site</span>
                </Link>
            </div>
        </div>
    );
}

export default AdminSidebar;
