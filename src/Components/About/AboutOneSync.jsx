// Synchronized About Component - Uses data from admin dashboard
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import completeSyncService from '../../services/completeSyncService';

function AboutOneSync() {
    const [about, setAbout] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadAbout();
        
        // Subscribe to about changes
        const unsubscribe = completeSyncService.subscribe('about', (updatedAbout) => {
            setAbout(updatedAbout);
        });

        return () => unsubscribe();
    }, []);

    const loadAbout = async () => {
        try {
            setLoading(true);
            const aboutData = await completeSyncService.getAboutForHomePage();
            setAbout(aboutData);
        } catch (error) {
            console.error('Error loading about:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="about-area position-relative overflow-hidden space" id="about-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="img-box1">
                                <div className="img1">
                                    <div style={{ width: '100%', height: '300px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        Loading...
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="ps-xl-4 ms-xl-2">
                                <div className="title-area mb-20 pe-xl-5 me-xl-5">
                                    <span className="sub-title style1">Loading...</span>
                                    <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                                        Loading content...
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!about) {
        return null;
    }

    return (
        <div
            className="about-area position-relative overflow-hidden space"
            id="about-sec"
        >
            <div className="container shape-mockup-wrap">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="img-box1">
                            <div className="img1">
                                <img src={about.image1} alt="About" />
                            </div>
                            <div className="img2">
                                <img src={about.image2} alt="About" />
                            </div>
                            <div className="img3">
                                <img src={about.image3} alt="About" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="ps-xl-4 ms-xl-2">
                            <div className="title-area mb-20 pe-xl-5 me-xl-5">
                                <span className="sub-title style1">{about.subtitle}</span>
                                <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                                    {about.title}
                                </h2>
                                <p className="sec-text mb-30">
                                    {about.description}
                                </p>
                            </div>
                            <div className="about-item-wrap">
                                {about.features.map((feature) => (
                                    <div key={feature.id} className="about-item">
                                        <div className="about-item_img">
                                            <img src={feature.icon} alt="" />
                                        </div>
                                        <div className="about-item_centent">
                                            <h5 className="box-title">{feature.title}</h5>
                                            <p className="about-item_text">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-35">
                                <Link to={about.buttonLink} className="th-btn style3 th-icon">
                                    {about.buttonText}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="shape-mockup shape1 d-none d-xl-block"
                    style={{
                        top: "12%",
                        left: "-16%",
                    }}
                >
                    <img src="/assets/img/shape/shape_1.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup shape2 d-none d-xl-block"
                    style={{
                        top: "20%",
                        left: "-16%",
                    }}
                >
                    <img src="/assets/img/shape/shape_2.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup shape3 d-none d-xl-block"
                    style={{
                        top: "14%",
                        left: "-10%",
                    }}
                >
                    <img src="/assets/img/shape/shape_3.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup about-shape movingX d-none d-xxl-block"
                    style={{
                        bottom: "0%",
                        right: "-11%",
                    }}
                >
                    <img src="/assets/img/normal/about-slide-img.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup about-rating d-none d-xxl-block"
                    style={{
                        bottom: "50%",
                        right: "-20%",
                    }}
                >
                    <i className="fa-sharp fa-solid fa-star" />
                    <span>4.9k</span>
                </div>
                <div
                    className="shape-mockup about-emoji d-none d-xxl-block"
                    style={{
                        bottom: "25%",
                        right: "5%",
                    }}
                >
                    <img src="/assets/img/icon/emoji.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutOneSync
