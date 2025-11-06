// Synchronized Shop Component - Uses data from admin dashboard
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import completeSyncService from '../../services/completeSyncService';

function ShopOneSync() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadProducts();
        
        // Subscribe to product changes
        const unsubscribe = completeSyncService.subscribe('products', (updatedProducts) => {
            setProducts(updatedProducts);
        });

        return () => unsubscribe();
    }, []);

    const loadProducts = async () => {
        try {
            setLoading(true);
            const productsData = await completeSyncService.getProductsForHomePage();
            setProducts(productsData);
        } catch (error) {
            console.error('Error loading products:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <section className="bg-smoke overflow-hidden space" id="shop-sec">
                <div className="container">
                    <div className="title-area text-center">
                        <span className="sub-title">Shop</span>
                        <h2 className="sec-title">Travel Essentials</h2>
                        <p className="sec-text">Loading amazing products...</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-smoke overflow-hidden space" id="shop-sec">
            <div className="container">
                <div className="title-area text-center">
                    <span className="sub-title">Shop</span>
                    <h2 className="sec-title">Travel Essentials</h2>
                    <p className="sec-text">
                        Get everything you need for your next adventure, managed through our admin dashboard.
                    </p>
                </div>
                <div className="slider-area">
                    <Swiper
                        modules={[Pagination, Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation={true}
                        breakpoints={{
                            576: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 },
                        }}
                        className="swiper th-slider has-shadow"
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div className="shop-box th-ani">
                                    <div className="shop-img global-img">
                                        <img 
                                            src={product.image || '/assets/img/shop/shop_1.jpg'} 
                                            alt={product.name}
                                            onError={(e) => {
                                                e.target.src = '/assets/img/shop/shop_1.jpg';
                                            }}
                                        />
                                        {product.featured && (
                                            <div className="featured-badge" style={{
                                                position: 'absolute',
                                                top: '10px',
                                                right: '10px',
                                                backgroundColor: '#ff6b35',
                                                color: 'white',
                                                padding: '4px 8px',
                                                borderRadius: '4px',
                                                fontSize: '12px',
                                                fontWeight: 'bold'
                                            }}>
                                                Featured
                                            </div>
                                        )}
                                        <div className="shop-overlay">
                                            <div className="shop-actions">
                                                <button className="shop-btn" title="Quick View">
                                                    <i className="fa-light fa-eye"></i>
                                                </button>
                                                <button className="shop-btn" title="Add to Wishlist">
                                                    <i className="fa-light fa-heart"></i>
                                                </button>
                                                <button className="shop-btn" title="Add to Cart">
                                                    <i className="fa-light fa-shopping-cart"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shop-content">
                                        <div className="shop-meta">
                                            <span className="shop-category">{product.category}</span>
                                            <div className="shop-rating">
                                                <div className="star-rating">
                                                    {[...Array(5)].map((_, i) => (
                                                        <i key={i} className={`fa-solid fa-star ${i < Math.floor(product.rating || 5) ? 'active' : ''}`} />
                                                    ))}
                                                </div>
                                                <span className="rating-count">({product.rating || 5})</span>
                                            </div>
                                        </div>
                                        <h3 className="box-title">
                                            <Link to={`/shop-details/${product.id}`}>{product.name}</Link>
                                        </h3>
                                        <p className="shop-text">{product.description}</p>
                                        <div className="shop-footer">
                                            <div className="shop-price">
                                                <span className="currency">${product.price}</span>
                                                {product.stock > 0 ? (
                                                    <span className="stock-status in-stock">In Stock</span>
                                                ) : (
                                                    <span className="stock-status out-of-stock">Out of Stock</span>
                                                )}
                                            </div>
                                            <div className="shop-action">
                                                <Link to={`/shop-details/${product.id}`} className="th-btn style4 th-icon">
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default ShopOneSync;
