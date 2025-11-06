// Synchronized Tour Guide Component - Uses data from admin dashboard
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import completeSyncService from '../../services/completeSyncService';

function TourGuideSync() {
    const [guides, setGuides] = useState([]);
    const [loading, setLoading] = useState(true);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const paginationRef = useRef(null);

    useEffect(() => {
        loadGuides();
        
        // Subscribe to guide changes
        const unsubscribe = completeSyncService.subscribe('guides', (updatedGuides) => {
            setGuides(updatedGuides);
        });

        return () => unsubscribe();
    }, []);

    const loadGuides = async () => {
        try {
            setLoading(true);
            const guidesData = await completeSyncService.getGuidesForHomePage();
            setGuides(guidesData);
        } catch (error) {
            console.error('Error loading guides:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (swiperInstance && paginationRef.current) {
            swiperInstance.params.pagination.el = paginationRef.current;
            swiperInstance.pagination.init();
            swiperInstance.pagination.update();
        }
    }, [swiperInstance]);

    if (loading) {
        return (
            <section
                className="bg-smoke space overflow-hidden"
                style={{ backgroundImage: "url(/assets/img/bg/team_bg_1.png)" }}
            >
                <div className="container z-index-common">
                    <div className="title-area text-center">
                        <span className="sub-title">Meet with Guide</span>
                        <h2 className="sec-title">Tour Guide</h2>
                    </div>
                    <div className="slider-area">
                        <p className="text-center">Loading tour guides...</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section
            className="bg-smoke space overflow-hidden"
            style={{ backgroundImage: "url(/assets/img/bg/team_bg_1.png)" }}
        >
            <div className="container z-index-common">
                <div className="title-area text-center">
                    <span className="sub-title">Meet with Guide</span>
                    <h2 className="sec-title">Tour Guide</h2>
                </div>
                <div className="slider-area">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={20}
                        speed={1200}
                        breakpoints={{
                            576: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 },
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        className="th-slider teamSlider1 has-shadow"
                        onSwiper={setSwiperInstance}
                    >
                        {guides.map((guide) => (
                            <SwiperSlide key={guide.id}>
                                <div className="th-team team-box">
                                    <div className="team-img">
                                        <img 
                                            src={guide.image} 
                                            alt={guide.name}
                                            onError={(e) => {
                                                e.target.src = '/assets/img/team/team_1_1.jpg';
                                            }}
                                        />
                                    </div>
                                    <div className="team-content">
                                        <div className="media-body">
                                            <h3 className="box-title">
                                                <Link to={`/tour-guide/${guide.id}`}>{guide.name}</Link>
                                            </h3>
                                            <span className="team-desig">{guide.designation}</span>
                                            <div className="th-social">
                                                {guide.socialMedia && Object.entries(guide.socialMedia).map(([platform, url]) => (
                                                    <Link key={platform} target="_blank" rel="noopener noreferrer" to={url}>
                                                        <i className={`fab fa-${platform}`} />
                                                    </Link>
                                                ))}
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

export default TourGuideSync;
