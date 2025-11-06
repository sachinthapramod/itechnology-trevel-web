import React, { useState, useEffect } from 'react';
import dataService from '../../services/dataService';
import './ShopManagement.css';

function ShopManagement() {
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: 'Accessories',
        image: '',
        stock: '',
        featured: false
    });

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const productsData = await dataService.getProducts();
            setProducts(productsData);
        } catch (error) {
            console.error('Error loading products:', error);
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
            if (editingProduct) {
                await dataService.updateProduct(editingProduct.id, formData);
            } else {
                await dataService.createProduct(formData);
            }
            
            await loadProducts();
            handleCloseModal();
        } catch (error) {
            console.error('Error saving product:', error);
            alert('Error saving product. Please try again.');
        }
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
        setFormData(product);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await dataService.deleteProduct(id);
                await loadProducts();
            } catch (error) {
                console.error('Error deleting product:', error);
                alert('Error deleting product. Please try again.');
            }
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setEditingProduct(null);
        setFormData({
            name: '',
            description: '',
            price: '',
            category: 'Accessories',
            image: '',
            stock: '',
            featured: false
        });
    };

    return (
        <div className="shop-management">
            <div className="page-header">
                <h1>Shop Management</h1>
                <button className="btn-primary" onClick={() => setShowModal(true)}>
                    <i className="fas fa-plus"></i>
                    Add New Product
                </button>
            </div>

            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <div className="product-image">
                            <img src={product.image} alt={product.name} />
                            {product.featured && <span className="featured-badge">Featured</span>}
                        </div>
                        <div className="product-content">
                            <div className="product-header">
                                <h3>{product.name}</h3>
                                <span className="category-badge">{product.category}</span>
                            </div>
                            <p className="product-description">{product.description}</p>
                            
                            <div className="product-details">
                                <div className="detail-row">
                                    <span className="detail-label">Price:</span>
                                    <span className="detail-value">${product.price}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Stock:</span>
                                    <span className="detail-value">{product.stock} units</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Sales:</span>
                                    <span className="detail-value">{product.sales} sold</span>
                                </div>
                            </div>
                            
                            <div className="product-actions">
                                <button 
                                    className="btn-edit" 
                                    onClick={() => handleEdit(product)}
                                >
                                    <i className="fas fa-edit"></i>
                                    Edit
                                </button>
                                <button 
                                    className="btn-delete" 
                                    onClick={() => handleDelete(product.id)}
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
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
                            <button className="modal-close" onClick={handleCloseModal}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="product-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Product Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price">Price ($)</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        id="price"
                                        name="price"
                                        value={formData.price}
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
                                        <option value="Accessories">Accessories</option>
                                        <option value="Clothing">Clothing</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Books">Books</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="stock">Stock Quantity</label>
                                    <input
                                        type="number"
                                        id="stock"
                                        name="stock"
                                        value={formData.stock}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows="3"
                                    required
                                ></textarea>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="image">Image URL</label>
                                <input
                                    type="url"
                                    id="image"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleInputChange}
                                    placeholder="https://example.com/image.jpg"
                                />
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
                                    Featured Product
                                </label>
                            </div>
                            
                            <div className="form-actions">
                                <button type="button" className="btn-secondary" onClick={handleCloseModal}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn-primary">
                                    {editingProduct ? 'Update Product' : 'Create Product'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShopManagement;
