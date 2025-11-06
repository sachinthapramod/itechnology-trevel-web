// Synchronized Tour Component - Uses data from admin dashboard
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import frontendSyncService from '../../services/frontendSyncService';

function TourOneSync() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadTours();
        
        // Subscribe to tour changes
        const unsubscribe = frontendSyncService.subscribe('tours', (updatedTours) => {
            setTours(updatedTours);
        });

        return () => unsubscribe();
    }, []);

    const loadTours = async () => {
        try {
            setLoading(true);
            const toursData = await frontendSyncService.getToursForHomePage();
            setTours(toursData);
        } catch (error) {
            console.error('Error loading tours:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <section className="tour-area position-relative bg-top-center overflow-hidden space bg-no-repeat" 
                     style={{ backgroundImage: 'url(/assets/img/bg/tour_bg_1.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="title-area text-center">
                                <span className="sub-title">Best Place For You</span>
                                <h2 className="sec-title">Most Popular Tour</h2>
                                <p className="sec-text">Loading amazing tours...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="tour-area position-relative bg-top-center overflow-hidden space bg-no-repeat" 
                 id="service-sec" 
                 style={{ backgroundImage: 'url(/assets/img/bg/tour_bg_1.jpg)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="title-area text-center">
                            <span className="sub-title">Best Place For You</span>
                            <h2 className="sec-title">Most Popular Tour</h2>
                            <p className="sec-text">
                                Discover our amazing tour packages managed through our admin dashboard.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="slider-area tour-slider">
                    <Swiper
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            576: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 },
                            1300: { slidesPerView: 4 },
                        }}
                        spaceBetween={24}
                        grabCursor={true}
                        className="swiper th-slider has-shadow slider-drag-wrap"
                    >
                        {tours.map(tour => (
                            <SwiperSlide key={tour.id}>
                                <div className="tour-box th-ani gsap-cursor">
                                    <div className="tour-box_img global-img">
                                        <img 
                                            src={tour.image || '/assets/img/tour/tour_box_1.jpg'} 
                                            alt={tour.name} 
                                            onError={(e) => {
                                                e.target.src = '/assets/img/tour/tour_box_1.jpg';
                                            }}
                                        />
                                        {tour.featured && (
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
                                    <div className="tour-content">
                                        <h3 className="box-title">
                                            <Link to={`/tour-details/${tour.id}`}>{tour.name}</Link>
                                        </h3>
                                        <div className="tour-rating">
                                            <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                                <span style={{ width: '100%' }}>
                                                    Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                                                    <span className="rating">4.8</span> (4.8 Rating)
                                                </span>
                                            </div>
                                            <Link to={`/tour-details/${tour.id}`} className="woocommerce-review-link">
                                                (<span className="count">4.8</span> Rating)
                                            </Link>
                                        </div>
                                        <h4 className="tour-box_price">
                                            <span className="currency">${tour.price}</span>/Person
                                        </h4>
                                        <div className="tour-action">
                                            <span>
                                                <i className="fa-light fa-clock" />
                                                {tour.duration}
                                            </span>
                                            <Link to="/contact" className="th-btn style4 th-icon">
                                                Book Now
                                            </Link>
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

export default TourOneSync;
