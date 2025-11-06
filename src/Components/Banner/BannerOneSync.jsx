// Synchronized Banner Component - Uses data from admin dashboard
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import completeSyncService from '../../services/completeSyncService';

function BannerOneSync() {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const swiperRef = useRef(null);

    useEffect(() => {
        loadBanners();
        
        // Subscribe to banner changes
        const unsubscribe = completeSyncService.subscribe('banners', (updatedBanners) => {
            setBanners(updatedBanners);
        });

        return () => unsubscribe();
    }, []);

    const loadBanners = async () => {
        try {
            setLoading(true);
            const bannersData = await completeSyncService.getBannersForHomePage();
            setBanners(bannersData);
        } catch (error) {
            console.error('Error loading banners:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Function to add animation classes
        const animationProperties = () => {
            document.querySelectorAll('[data-ani]').forEach((element) => {
                const animationName = element.getAttribute('data-ani');
                element.classList.add(animationName);
            });

            document.querySelectorAll('[data-ani-delay]').forEach((element) => {
                const delayTime = element.getAttribute('data-ani-delay');
                element.style.animationDelay = delayTime;
            });
        };

        animationProperties();
    }, [banners]);

    // Event handler for custom navigation arrows
    const handleSliderNavigation = (direction) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;
            if (direction === "prev") {
                swiper.slidePrev();
            } else {
                swiper.slideNext();
            }
        }
    };

    if (loading) {
        return (
            <div className="th-hero-wrapper hero-1" id="hero">
                <div className="container">
                    <div className="hero-style1">
                        <span className="sub-title style1">Loading...</span>
                        <h1 className="hero-title">Loading amazing content...</h1>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="th-hero-wrapper hero-1" id="hero">
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, EffectFade]}
                effect="fade"
                loop={true}
                speed={1000}
                pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                }}
                navigation={{
                    nextEl: ".slider-next",
                    prevEl: ".slider-prev",
                }}
                className="th-slider hero-slider-1"
                id="heroSlide1"
            >
                <div className="swiper-wrapper">
                    {banners.map((banner) => (
                        <SwiperSlide key={banner.id}>
                            <div className="hero-inner">
                                <div
                                    className="th-hero-bg"
                                    style={{
                                        backgroundImage: `url(${banner.backgroundImage})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                    }}
                                >
                                </div>
                                <div className="container">
                                    <div className="hero-style1">
                                        <span
                                            className="sub-title style1"
                                            data-ani="slideinup"
                                            data-ani-delay="0.2s"
                                        >
                                            {banner.subtitle}
                                        </span>
                                        <h1
                                            className="hero-title"
                                            data-ani="slideinup"
                                            data-ani-delay="0.4s"
                                        >
                                            {banner.title}
                                        </h1>
                                        <div
                                            className="btn-group"
                                            data-ani="slideinup"
                                            data-ani-delay="0.6s"
                                        >
                                            <Link to={banner.button1Link} className="th-btn th-icon">
                                                {banner.button1Text}
                                            </Link>
                                            <Link to={banner.button2Link} className="th-btn style2 th-icon">
                                                {banner.button2Text}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
                <div className="th-swiper-custom">
                    <button
                        className="slider-arrow slider-prev"
                        onClick={() => handleSliderNavigation("prev")}
                    >
                        <img src="/assets/img/icon/right-arrow.svg" alt="Prev" />
                    </button>
                    <div className="swiper-pagination" />
                    <button
                        className="slider-arrow slider-next"
                        onClick={() => handleSliderNavigation("next")}
                    >
                        <img src="/assets/img/icon/left-arrow.svg" alt="Next" />
                    </button>
                </div>
            </Swiper>
        </div>
    )
}

export default BannerOneSync
