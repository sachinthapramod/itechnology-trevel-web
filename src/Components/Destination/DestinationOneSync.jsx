// Synchronized Destination Component - Uses data from admin dashboard
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Link } from "react-router-dom";
import frontendSyncService from '../../services/frontendSyncService';

const sliderOptions = {
    modules: [EffectCoverflow],
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "5",
    initialSlide: 0,
    grabCursor: true,
    loop: true,
    speed: 1500,
    coverflowEffect: {
        rotate: 0,
        stretch: 95,
        depth: 212,
        modifier: 1,
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 3 },
    },
};

function DestinationOneSync() {
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cursorActive, setCursorActive] = useState(false);

    useEffect(() => {
        loadDestinations();
        
        // Subscribe to destination changes
        const unsubscribe = frontendSyncService.subscribe('destinations', (updatedDestinations) => {
            setDestinations(updatedDestinations);
        });

        return () => unsubscribe();
    }, []);

    const loadDestinations = async () => {
        try {
            setLoading(true);
            const destinationsData = await frontendSyncService.getDestinationsForHomePage();
            setDestinations(destinationsData);
        } catch (error) {
            console.error('Error loading destinations:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Add event listeners for hover effect
        const sliderWrap = document.querySelector(".slider-drag-wrap");
        const sliderLink = document.querySelectorAll(".slider-drag-wrap a");

        const handleMouseEnter = () => setCursorActive(true);
        const handleMouseLeave = () => setCursorActive(false);
        
        if (sliderWrap) {
            sliderWrap.addEventListener("mouseenter", handleMouseEnter);
            sliderWrap.addEventListener("mouseleave", handleMouseLeave);
        }
        
        sliderLink.forEach(link => {
            link.addEventListener("mouseenter", () => setCursorActive(false));
            link.addEventListener("mouseleave", () => setCursorActive(true));
        });

        // Clean up event listeners on component unmount
        return () => {
            if (sliderWrap) {
                sliderWrap.removeEventListener("mouseenter", handleMouseEnter);
                sliderWrap.removeEventListener("mouseleave", handleMouseLeave);
            }
            
            sliderLink.forEach(link => {
                link.removeEventListener("mouseenter", () => setCursorActive(false));
                link.removeEventListener("mouseleave", () => setCursorActive(true));
            });
        };
    }, [destinations]);

    if (loading) {
        return (
            <div className="position-relative overflow-hidden">
                <div className="container">
                    <div className="title-area text-center">
                        <span className="sub-title">Top Destination</span>
                        <h2 className="sec-title">Popular Destination</h2>
                        <p>Loading amazing destinations...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="position-relative overflow-hidden">
            <div className="container">
                <div className="title-area text-center">
                    <span className="sub-title">Top Destination</span>
                    <h2 className="sec-title">Popular Destination</h2>
                    <p className="sec-text">
                        Discover our amazing destinations managed through our admin dashboard.
                    </p>
                </div>

                <div className={`slider-drag-wrap ${cursorActive ? 'active' : ''}`}>
                    <Swiper {...sliderOptions} className="destination-slider">
                        {destinations.map((dest) => (
                            <SwiperSlide key={dest.id}>
                                <div className="destination-box gsap-cursor">
                                    <div className="destination-img">
                                        <img 
                                            src={dest.image || '/assets/img/destination/destination_1_1.jpg'} 
                                            alt={dest.name}
                                            onError={(e) => {
                                                e.target.src = '/assets/img/destination/destination_1_1.jpg';
                                            }}
                                        />
                                        {dest.featured && (
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
                                        <div className="destination-content">
                                            <div className="media-left">
                                                <h4 className="box-title">
                                                    <Link to={`/destination/${dest.id}`}>{dest.name}</Link>
                                                </h4>
                                                <span className="destination-subtitle">{dest.tours || 0} Listing</span>
                                            </div>
                                            <div>
                                                <Link to="/destination" className="th-btn style2 th-icon">
                                                    View All
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
        </div>
    );
}

export default DestinationOneSync;
