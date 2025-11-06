import React, { useState, useEffect } from 'react';
import dataService from '../../services/dataService';
import './BlogManagement.css';

function BlogManagement() {
    const [posts, setPosts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingPost, setEditingPost] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        excerpt: '',
        author: '',
        category: 'Travel',
        image: '',
        featured: false,
        published: false
    });

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        try {
            const postsData = await dataService.getBlogPosts();
            setPosts(postsData);
        } catch (error) {
            console.error('Error loading blog posts:', error);
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
            if (editingPost) {
                await dataService.updateBlogPost(editingPost.id, formData);
            } else {
                await dataService.createBlogPost(formData);
            }
            
            await loadPosts();
            handleCloseModal();
        } catch (error) {
            console.error('Error saving blog post:', error);
            alert('Error saving blog post. Please try again.');
        }
    };

    const handleEdit = (post) => {
        setEditingPost(post);
        setFormData(post);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            try {
                await dataService.deleteBlogPost(id);
                await loadPosts();
            } catch (error) {
                console.error('Error deleting blog post:', error);
                alert('Error deleting blog post. Please try again.');
            }
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setEditingPost(null);
        setFormData({
            title: '',
            content: '',
            excerpt: '',
            author: '',
            category: 'Travel',
            image: '',
            featured: false,
            published: false
        });
    };

    return (
        <div className="blog-management">
            <div className="page-header">
                <h1>Blog Management</h1>
                <button className="btn-primary" onClick={() => setShowModal(true)}>
                    <i className="fas fa-plus"></i>
                    Add New Post
                </button>
            </div>

            <div className="posts-grid">
                {posts.map(post => (
                    <div key={post.id} className="post-card">
                        <div className="post-image">
                            <img src={post.image} alt={post.title} />
                            {post.featured && <span className="featured-badge">Featured</span>}
                            {post.published && <span className="published-badge">Published</span>}
                        </div>
                        <div className="post-content">
                            <div className="post-header">
                                <h3>{post.title}</h3>
                                <span className="category-badge">{post.category}</span>
                            </div>
                            <p className="post-excerpt">{post.excerpt}</p>
                            
                            <div className="post-meta">
                                <div className="meta-item">
                                    <i className="fas fa-user"></i>
                                    <span>{post.author}</span>
                                </div>
                                <div className="meta-item">
                                    <i className="fas fa-calendar"></i>
                                    <span>{post.date}</span>
                                </div>
                                <div className="meta-item">
                                    <i className="fas fa-eye"></i>
                                    <span>{post.views} views</span>
                                </div>
                            </div>
                            
                            <div className="post-actions">
                                <button 
                                    className="btn-edit" 
                                    onClick={() => handleEdit(post)}
                                >
                                    <i className="fas fa-edit"></i>
                                    Edit
                                </button>
                                <button 
                                    className="btn-delete" 
                                    onClick={() => handleDelete(post.id)}
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
                    <div className="modal-content large">
                        <div className="modal-header">
                            <h2>{editingPost ? 'Edit Post' : 'Add New Post'}</h2>
                            <button className="modal-close" onClick={handleCloseModal}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="blog-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="title">Post Title</label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="author">Author</label>
                                    <input
                                        type="text"
                                        id="author"
                                        name="author"
                                        value={formData.author}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="category">Category</label>
                                    <select
                                        id="category"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                    >
                                        <option value="Travel">Travel</option>
                                        <option value="Adventure">Adventure</option>
                                        <option value="Culture">Culture</option>
                                        <option value="Food">Food</option>
                                        <option value="Tips">Tips</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="image">Featured Image URL</label>
                                    <input
                                        type="url"
                                        id="image"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleInputChange}
                                        placeholder="https://example.com/image.jpg"
                                    />
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="excerpt">Excerpt</label>
                                <textarea
                                    id="excerpt"
                                    name="excerpt"
                                    value={formData.excerpt}
                                    onChange={handleInputChange}
                                    rows="2"
                                    placeholder="Brief description of the post..."
                                ></textarea>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="content">Content</label>
                                <textarea
                                    id="content"
                                    name="content"
                                    value={formData.content}
                                    onChange={handleInputChange}
                                    rows="8"
                                    placeholder="Write your blog post content here..."
                                    required
                                ></textarea>
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
                                    Featured Post
                                </label>
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        name="published"
                                        checked={formData.published}
                                        onChange={handleInputChange}
                                    />
                                    <span className="checkmark"></span>
                                    Published
                                </label>
                            </div>
                            
                            <div className="form-actions">
                                <button type="button" className="btn-secondary" onClick={handleCloseModal}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn-primary">
                                    {editingPost ? 'Update Post' : 'Create Post'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BlogManagement;
