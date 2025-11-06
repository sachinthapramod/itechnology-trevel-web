// Simple Blog Management - Fixed version
import React, { useState, useEffect } from 'react';
import dataService from '../../services/dataService';

function SimpleBlogManagement() {
    const [blogs, setBlogs] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingBlog, setEditingBlog] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: '',
        category: '',
        image: '',
        featured: false,
        published: false
    });

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = async () => {
        try {
            const blogsData = await dataService.getBlogs();
            setBlogs(blogsData);
        } catch (error) {
            console.error('Error loading blogs:', error);
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
        console.log('Submitting blog form:', formData);
        
        try {
            if (editingBlog) {
                console.log('Updating blog:', editingBlog.id);
                await dataService.updateBlog(editingBlog.id, formData);
            } else {
                console.log('Creating new blog');
                await dataService.createBlog(formData);
            }
            
            await loadBlogs();
            handleCloseModal();
            alert('Blog post saved successfully!');
        } catch (error) {
            console.error('Error saving blog:', error);
            alert('Error saving blog: ' + error.message);
        }
    };

    const handleEdit = (blog) => {
        console.log('Editing blog:', blog);
        setEditingBlog(blog);
        setFormData(blog);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        console.log('Deleting blog:', id);
        if (window.confirm('Are you sure you want to delete this blog post?')) {
            try {
                await dataService.deleteBlog(id);
                await loadBlogs();
                alert('Blog post deleted successfully!');
            } catch (error) {
                console.error('Error deleting blog:', error);
                alert('Error deleting blog: ' + error.message);
            }
        }
    };

    const handleCloseModal = () => {
        console.log('Closing blog modal');
        setShowModal(false);
        setEditingBlog(null);
        setFormData({
            title: '',
            content: '',
            author: '',
            category: '',
            image: '',
            featured: false,
            published: false
        });
    };

    const handleAddNew = () => {
        console.log('Adding new blog');
        setEditingBlog(null);
        setFormData({
            title: '',
            content: '',
            author: '',
            category: '',
            image: '',
            featured: false,
            published: false
        });
        setShowModal(true);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h1>Blog Management</h1>
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
                    + Add New Blog Post
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {blogs.map(blog => (
                    <div key={blog.id} style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '15px',
                        backgroundColor: 'white',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <h3>{blog.title}</h3>
                        <p style={{ 
                            maxHeight: '100px', 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: 'vertical'
                        }}>
                            {blog.content}
                        </p>
                        <p><strong>Author:</strong> {blog.author}</p>
                        <p><strong>Category:</strong> {blog.category}</p>
                        <p><strong>Status:</strong> {blog.published ? 'Published' : 'Draft'}</p>
                        {blog.featured && <p><strong>Featured:</strong> Yes</p>}
                        
                        <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                            <button 
                                onClick={() => handleEdit(blog)}
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
                                onClick={() => handleDelete(blog.id)}
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
                        maxWidth: '600px',
                        width: '90%',
                        maxHeight: '90vh',
                        overflowY: 'auto'
                    }}>
                        <h2>{editingBlog ? 'Edit Blog Post' : 'Add New Blog Post'}</h2>
                        
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Title:</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    required
                                    style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                                />
                            </div>
                            
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Content:</label>
                                <textarea
                                    name="content"
                                    value={formData.content}
                                    onChange={handleInputChange}
                                    required
                                    rows="6"
                                    style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                                />
                            </div>
                            
                            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', marginBottom: '5px' }}>Author:</label>
                                    <input
                                        type="text"
                                        name="author"
                                        value={formData.author}
                                        onChange={handleInputChange}
                                        required
                                        style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                                    />
                                </div>
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
                            
                            <div style={{ marginBottom: '20px', display: 'flex', gap: '20px' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <input
                                        type="checkbox"
                                        name="featured"
                                        checked={formData.featured}
                                        onChange={handleInputChange}
                                    />
                                    Featured Post
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <input
                                        type="checkbox"
                                        name="published"
                                        checked={formData.published}
                                        onChange={handleInputChange}
                                    />
                                    Published
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
                                    {editingBlog ? 'Update Blog Post' : 'Create Blog Post'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SimpleBlogManagement;
