// Synchronized Activities Component - Uses data from admin dashboard
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import completeSyncService from '../../services/completeSyncService';

function ActivitiesOneSync() {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadActivities();
        
        // Subscribe to activity changes
        const unsubscribe = completeSyncService.subscribe('activities', (updatedActivities) => {
            setActivities(updatedActivities);
        });

        return () => unsubscribe();
    }, []);

    const loadActivities = async () => {
        try {
            setLoading(true);
            const activitiesData = await completeSyncService.getActivitiesForHomePage();
            setActivities(activitiesData);
        } catch (error) {
            console.error('Error loading activities:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <section className="bg-smoke overflow-hidden space" id="activity-sec">
                <div className="container">
                    <div className="title-area text-center">
                        <span className="sub-title">Adventure</span>
                        <h2 className="sec-title">Popular Activities</h2>
                        <p className="sec-text">Loading amazing activities...</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-smoke overflow-hidden space" id="activity-sec">
            <div className="container">
                <div className="title-area text-center">
                    <span className="sub-title">Adventure</span>
                    <h2 className="sec-title">Popular Activities</h2>
                    <p className="sec-text">
                        Discover exciting activities managed through our admin dashboard.
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
                            992: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 },
                        }}
                        className="swiper th-slider has-shadow"
                    >
                        {activities.map((activity) => (
                            <SwiperSlide key={activity.id}>
                                <div className="activity-box th-ani">
                                    <div className="activity-img global-img">
                                        <img 
                                            src={activity.image || '/assets/img/tour/tour_5_1.jpg'} 
                                            alt={activity.name}
                                            onError={(e) => {
                                                e.target.src = '/assets/img/tour/tour_5_1.jpg';
                                            }}
                                        />
                                        {activity.featured && (
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
                                        <div className="activity-content">
                                            <div className="activity-meta">
                                                <span className="activity-category">{activity.category}</span>
                                                <span className="activity-duration">{activity.duration}</span>
                                            </div>
                                            <h3 className="box-title">
                                                <Link to={`/activities-details/${activity.id}`}>{activity.name}</Link>
                                            </h3>
                                            <p className="activity-text">{activity.description}</p>
                                            <div className="activity-footer">
                                                <div className="activity-price">
                                                    <span className="currency">${activity.price}</span>
                                                </div>
                                                <div className="activity-rating">
                                                    <div className="star-rating">
                                                        {[...Array(5)].map((_, i) => (
                                                            <i key={i} className={`fa-solid fa-star ${i < Math.floor(activity.rating || 5) ? 'active' : ''}`} />
                                                        ))}
                                                    </div>
                                                    <span className="rating-text">({activity.rating || 5})</span>
                                                </div>
                                            </div>
                                            <div className="activity-action">
                                                <Link to={`/activities-details/${activity.id}`} className="th-btn style4 th-icon">
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

export default ActivitiesOneSync;
