// Simple Shop Management - Fixed version
import React, { useState, useEffect } from 'react';
import dataService from '../../services/dataService';

function SimpleShopManagement() {
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: '',
        image: '',
        featured: false,
        available: true
    });

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const productsData = await dataService.getShopProducts();
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
        console.log('Submitting product form:', formData);
        
        try {
            if (editingProduct) {
                console.log('Updating product:', editingProduct.id);
                await dataService.updateShopProduct(editingProduct.id, formData);
            } else {
                console.log('Creating new product');
                await dataService.createShopProduct(formData);
            }
            
            await loadProducts();
            handleCloseModal();
            alert('Product saved successfully!');
        } catch (error) {
            console.error('Error saving product:', error);
            alert('Error saving product: ' + error.message);
        }
    };

    const handleEdit = (product) => {
        console.log('Editing product:', product);
        setEditingProduct(product);
        setFormData(product);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        console.log('Deleting product:', id);
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await dataService.deleteShopProduct(id);
                await loadProducts();
                alert('Product deleted successfully!');
            } catch (error) {
                console.error('Error deleting product:', error);
                alert('Error deleting product: ' + error.message);
            }
        }
    };

    const handleCloseModal = () => {
        console.log('Closing product modal');
        setShowModal(false);
        setEditingProduct(null);
        setFormData({
            name: '',
            description: '',
            price: '',
            category: '',
            stock: '',
            image: '',
            featured: false,
            available: true
        });
    };

    const handleAddNew = () => {
        console.log('Adding new product');
        setEditingProduct(null);
        setFormData({
            name: '',
            description: '',
            price: '',
            category: '',
            stock: '',
            image: '',
            featured: false,
            available: true
        });
        setShowModal(true);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h1>Shop Management</h1>
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
                    + Add New Product
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {products.map(product => (
                    <div key={product.id} style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '15px',
                        backgroundColor: 'white',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p><strong>Price:</strong> ${product.price}</p>
                        <p><strong>Category:</strong> {product.category}</p>
                        <p><strong>Stock:</strong> {product.stock}</p>
                        <p><strong>Status:</strong> {product.available ? 'Available' : 'Out of Stock'}</p>
                        {product.featured && <p><strong>Featured:</strong> Yes</p>}
                        
                        <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                            <button 
                                onClick={() => handleEdit(product)}
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
                                onClick={() => handleDelete(product.id)}
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
                        <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
                        
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', marginBottom: '5px' }}>Product Name:</label>
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
                                        step="0.01"
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
                                <label style={{ display: 'block', marginBottom: '5px' }}>Stock Quantity:</label>
                                <input
                                    type="number"
                                    name="stock"
                                    value={formData.stock}
                                    onChange={handleInputChange}
                                    required
                                    min="0"
                                    style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                                />
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
                                    Featured Product
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <input
                                        type="checkbox"
                                        name="available"
                                        checked={formData.available}
                                        onChange={handleInputChange}
                                    />
                                    Available
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

export default SimpleShopManagement;
