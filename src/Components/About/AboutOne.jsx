import React from 'react'
import { Link } from 'react-router-dom'

function AboutOne() {
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
                                <img src="/assets/img/normal/about_1_1.jpg" alt="About" loading="lazy" />
                            </div>
                            <div className="img2">
                                <img src="/assets/img/normal/about_1_2.jpg" alt="About" loading="lazy" />
                            </div>
                            <div className="img3">
                                <img src="/assets/img/normal/about_1_3.jpg" alt="About" loading="lazy" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="ps-xl-4 ms-xl-2">
                            <div className="title-area mb-20 pe-xl-5 me-xl-5">
                                <span className="sub-title style1 ">About Us</span>
                                <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                                    Safe Travel and Tour Services
                                </h2>
                                <p className="sec-text mb-30">
                                    Safe Travel and Tour Services is a proudly Australian-owned and family-operated tour company based in Hobart. We specialise in one-day tours, private charters, and group adventures, offering travellers safe, comfortable, and memorable journeys.
                                </p>
                                <p className="sec-text mb-30">
                                    Starting our journey in Tasmania, we are expanding our services across Australia — sharing the beauty, culture, and hidden gems of this incredible country with visitors from around the world.
                                </p>
                                <p className="sec-text mb-30">
                                    Our goal is simple: to make every trip enjoyable, informative, and stress-free, with genuine care and personalised service at every step.
                                </p>
                            </div>
                            <div className="about-item-wrap">
                                <div className="about-item">
                                    <div className="about-item_img">
                                        <img src="/assets/img/icon/map3.svg" alt="" />
                                    </div>
                                    <div className="about-item_centent">
                                        <h5 className="box-title">One-Day Tours & Private Charters</h5>
                                        <p className="about-item_text">
                                            We specialise in one-day tours, private charters, and group adventures, offering safe, comfortable, and memorable journeys throughout Tasmania and Australia.
                                        </p>
                                    </div>
                                </div>
                                <div className="about-item">
                                    <div className="about-item_img">
                                        <img src="/assets/img/icon/guide.svg" alt="" />
                                    </div>
                                    <div className="about-item_centent">
                                        <h5 className="box-title">Genuine Care & Personalised Service</h5>
                                        <p className="about-item_text">
                                            As a family-operated business, we provide genuine care and personalised service at every step, making every trip enjoyable, informative, and stress-free.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-35">
                                <Link to="/about" className="th-btn style3 th-icon">
                                    Learn More
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

export default AboutOne
