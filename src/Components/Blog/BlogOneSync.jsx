// Synchronized Blog Component - Uses data from admin dashboard
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import frontendSyncService from '../../services/frontendSyncService';

function BlogOneSync() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadBlogs();
        
        // Subscribe to blog changes
        const unsubscribe = frontendSyncService.subscribe('blogs', (updatedBlogs) => {
            setBlogs(updatedBlogs);
        });

        return () => unsubscribe();
    }, []);

    const loadBlogs = async () => {
        try {
            setLoading(true);
            const blogsData = await frontendSyncService.getBlogsForHomePage();
            setBlogs(blogsData);
        } catch (error) {
            console.error('Error loading blogs:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <section className="blog-area space-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="title-area text-center">
                                <span className="sub-title">Latest News</span>
                                <h2 className="sec-title">Our Blog</h2>
                                <p>Loading latest blog posts...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-smoke overflow-hidden space overflow-hidden" id="blog-sec">
            <div className="container shape-mockup-wrap">
                <div className="mb-30 text-center text-md-start">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-7">
                            <div className="title-area mb-md-0">
                                <span className="sub-title">About Us Restaurant</span>
                                <h2 className="sec-title">News & Articles From Tourm</h2>
                            </div>
                        </div>
                        <div className="col-md-auto">
                            <Link to="/blog" className="th-btn style4 th-icon">
                                See More Articles
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Swiper Slider */}
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        576: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                    }}
                    className="swiper th-slider has-shadow"
                >
                    {blogs.map((post) => (
                        <SwiperSlide key={post.id}>
                            <div className="blog-box th-ani">
                                <div className="blog-img global-img">
                                    <img 
                                        src={post.image || '/assets/img/blog/blog_1_1.jpg'} 
                                        alt="blog"
                                        onError={(e) => {
                                            e.target.src = '/assets/img/blog/blog_1_1.jpg';
                                        }}
                                    />
                                    {post.featured && (
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
                                </div>
                                <div className="blog-box_content">
                                    <div className="blog-meta">
                                        <Link className="author" to="/blog">
                                            {formatDate(post.createdAt)}
                                        </Link>
                                        <Link to="/blog">{post.readTime || '5 min read'}</Link>
                                    </div>
                                    <h3 className="box-title">
                                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                    </h3>
                                    <Link to={`/blog/${post.id}`} className="th-btn style4 th-icon">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Decorative Shapes */}
                <div className="shape-mockup shape1 d-none d-xxl-block" style={{bottom:"20%", left:"-17%"}}>
                    <img src="/assets/img/shape/shape_1.png" alt="shape" />
                </div>
                <div className="shape-mockup shape2 d-none d-xl-block" style={{bottom:"5%", left:"-17%"}}>
                    <img src="/assets/img/shape/shape_2.png" alt="shape" />
                </div>
                <div className="shape-mockup shape3 d-none d-xxl-block" style={{bottom:"12%", left:"-10%"}}>
                    <img src="/assets/img/shape/shape_3.png" alt="shape" />
                </div>
            </div>
        </section>
    );
}

export default BlogOneSync;
