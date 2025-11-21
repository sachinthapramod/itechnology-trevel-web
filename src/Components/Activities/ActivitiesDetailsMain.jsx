import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, EffectFade } from "swiper/modules";

function ActivitiesDetailsMain() {
    const images = [
        "/assets/img/tour/tour_inner_2_1.jpg",
        "/assets/img/tour/tour_inner_2_2.jpg",
        "/assets/img/tour/tour_inner_2_3.jpg",
        "/assets/img/tour/tour_inner_2_4.jpg",
    ];

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <section className="space">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-lg-7">
                        <div className="tour-page-single">
                            <div className="slider-area tour-slider1">
                                {/* Main Slider */}
                                <Swiper
                                    modules={[Navigation, Thumbs, EffectFade]}
                                    effect="fade"
                                    loop={true}
                                    spaceBetween={10}
                                    navigation={{
                                        prevEl: ".slider-prev",
                                        nextEl: ".slider-next",
                                    }}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    className="swiper th-slider mb-25"
                                >
                                    {images.map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="tour-slider-img">
                                                <img src={img} alt={`Slide ${index + 1}`} />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* Thumbnail Slider */}
                                <Swiper
                                    modules={[Navigation, Thumbs]}
                                    loop={true}
                                    spaceBetween={25}
                                    slidesPerView={3}
                                    watchSlidesProgress
                                    onSwiper={setThumbsSwiper} // Connect thumbnails to main slider
                                    className="swiper tour-thumb-slider"
                                >
                                    {images.map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="tour-slider-img">
                                                <img src={img} alt={`Thumbnail ${index + 1}`} />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* Navigation Buttons */}
                                <button className="slider-arrow style3 slider-prev">
                                    <img src="/assets/img/icon/hero-arrow-left.svg" alt="Prev" />
                                </button>
                                <button className="slider-arrow style3 slider-next">
                                    <img src="/assets/img/icon/hero-arrow-right.svg" alt="Next" />
                                </button>
                            </div>
                            <div className="page-content">
                                <div className="page-meta mb-45">
                                    <Link className="page-tag mr-5" to="/tour">
                                        Featured
                                    </Link>
                                    <span className="ratting">
                                        <i className="fa-sharp fa-solid fa-star" />
                                        <span>4.8</span>
                                    </span>
                                </div>
                                <h2 className="box-title">Explore the Beauty of Hobart, Australia: Bruny Island & Mount Wellington</h2>
                                <p className="box-text mb-30">
                                    Discover the stunning natural beauty of Tasmania with our carefully crafted one-day tours from Hobart. Whether you choose a group tour or a private charter, experience the breathtaking landscapes of Bruny Island and the majestic views from Mount Wellington. Our tours are designed to showcase the best of Tasmania's natural wonders, wildlife, and scenic beauty in a single unforgettable day.
                                </p>
                                <p className="box-text mb-50">
                                    As a proudly Australian-owned and family-operated tour company based in Hobart, we specialise in providing safe, comfortable, and memorable one-day journeys. Our expert local guides share their deep knowledge of Tasmania's history, culture, and natural environment, ensuring every moment of your adventure is both enjoyable and informative.
                                </p>
                                <div className="tour-snapshot">
                                    <h4 className="box-title">Tour Snapshot</h4>
                                    <div className="tour-snap-wrapp">
                                        <div className="tour-snap">
                                            <div className="icon">
                                                <i className="fa-light fa-clock" />
                                            </div>
                                            <div className="content">
                                                <span className="title">Duration:</span>
                                                <span>9 Hours (approx.)</span>
                                            </div>
                                        </div>
                                        <div className="tour-snap">
                                            <div className="icon">
                                                <img src="/assets/img/icon/guide2.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <span className="title">Tour Type:</span>
                                                <span>Group & Private</span>
                                            </div>
                                        </div>
                                        <div className="tour-snap">
                                            <div className="icon">
                                                <img src="/assets/img/icon/ship.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <span className="title">Pick-up Location</span>
                                                <span>Hobart, Tasmania</span>
                                            </div>
                                        </div>
                                        <div className="tour-snap">
                                            <div className="icon">
                                                <img src="/assets/img/icon/clock.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <span className="title">Free Cancellation</span>
                                                <Link to="/#" className="line-btn">
                                                    Learn more
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="box-title">Overview</h2>
                                <p className="box-text mb-50">
                                    Our one-day tours from Hobart offer the perfect introduction to Tasmania's most iconic destinations. Choose between our Bruny Island tours, where you'll discover pristine beaches, dramatic coastlines, and abundant wildlife, or our Mount Wellington tours, which provide panoramic views of Hobart and the surrounding region from the summit. Both destinations showcase the natural beauty that makes Tasmania one of Australia's most captivating travel destinations. Whether you prefer the camaraderie of a group tour or the flexibility of a private charter, we ensure a safe, comfortable, and memorable experience with genuine care and personalised service throughout your journey.
                                </p>
                                <h2 className="box-title">Highlights</h2>
                                <p className="box-text mb-30">
                                    Our one-day tours are carefully designed to showcase the best of Tasmania's natural beauty and unique experiences. Here's what makes our tours special:
                                </p>
                                <div className="checklist mb-50">
                                    <ul>
                                        <li>Visit Mount Wellington summit (Kunanyi) - 1,271 metres above sea level</li>
                                        <li>Explore Richmond Historic Village with Georgian architecture</li>
                                        <li>Stop at Richmond Bridge and Richmond Gaol</li>
                                        <li>Free time for shopping and lunch (own expense)</li>
                                        <li>Small group experience with local guide</li>
                                        <li>Air-conditioned transport</li>
                                        <li>Scenic ferry ride across the D'Entrecasteaux Channel (Bruny Island tours)</li>
                                        <li>Climb The Neck Lookout for 360° views (Bruny Island tours)</li>
                                        <li>Visit Adventure Bay and pristine beaches (Bruny Island tours)</li>
                                        <li>Spot wildlife like white wallabies and sea eagles (Bruny Island tours)</li>
                                        <li>Local gourmet tastings: cheese, oysters, chocolate, honey (Bruny Island tours)</li>
                                    </ul>
                                </div>
                                <h2 className="box-title">Important Information</h2>
                                <p className="blog-text mb-35">
                                    Please review the following important information before booking your one-day tour:
                                </p>
                                <div className="activities-checklist mb-50">
                                    <div className="checklist style2">
                                        <ul>
                                            <li>Tour duration: 9 Hours (approx.)</li>
                                            <li>Departure: 7:30 AM from Hobart (Bruny Island) / Morning (Mount Wellington)</li>
                                            <li>Return: Approximately 5:00 PM</li>
                                            <li>Days of Operation: Daily</li>
                                            <li>Departure Location: Brooke Street Pier, Hobart</li>
                                            <li>Return Location: Same as departure point</li>
                                        </ul>
                                    </div>
                                    <div className="checklist style2">
                                        <ul>
                                            <li>What to bring: Comfortable walking shoes, warm clothing, camera, water bottle</li>
                                            <li>Tour may be altered or cancelled due to adverse weather on Mount Wellington</li>
                                            <li>Minimum numbers may apply</li>
                                            <li>Complimentary hotel pick-up available on request (Hobart CBD only)</li>
                                            <li>Be ready 10 minutes before departure</li>
                                            <li>Pickup confirmation sent by email the day before</li>
                                        </ul>
                                    </div>
                                </div>
                                <h2 className="box-title">Included and Excluded</h2>
                                <p className="blog-text mb-35">
                                    Here's what's included in your one-day tour and what you'll need to arrange separately:
                                </p>
                                <div className="destination-checklist">
                                    <div className="checklist style2 style4">
                                        <ul>
                                            <li>Hotel pickup and drop-off (Hobart CBD)</li>
                                            <li>Ferry transfers to and from Bruny Island (Bruny Island tours)</li>
                                            <li>Transport in comfortable air-conditioned vehicle</li>
                                            <li>National Park entry fees</li>
                                            <li>Cheese, oyster, and chocolate tastings (Bruny Island tours)</li>
                                            <li>Bottled water</li>
                                            <li>Expert local guide</li>
                                        </ul>
                                    </div>
                                    <div className="checklist style5">
                                        <ul>
                                            <li>Personal purchases</li>
                                            <li>Additional drinks</li>
                                            <li>Lunch (own expense)</li>
                                            <li>Travel insurance</li>
                                            <li>Gratuities (optional)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="location-map">
                                <h3 className="page-title mt-45 mb-30">Activity Location</h3>
                                <div className="contact-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.5!2d147.3272!3d-42.8821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa6e7584e52ccf0f%3A0x1c557e3f8af3cc3c!2sHobart%20TAS%207000!5e0!3m2!1sen!2sau!4v1690000000000!5m2!1sen!2sau"
                                        allowFullScreen=""
                                        loading="lazy"
                                        title="Activity Location Map - Hobart, Tasmania"
                                    />
                                    <div className="contact-icon">
                                        <img src="/assets/img/icon/location-dot3.svg" alt="location" />
                                    </div>
                                </div>
                            </div>
                            <div className="th-comments-wrap style2 ">
                                <h2 className="blog-inner-title h4">Reviews (3)</h2>
                                <ul className="comment-list">
                                    <li className="th-comment-item">
                                        <div className="th-post-comment">
                                            <div className="comment-avater">
                                            <img src="/assets/img/blog/comment-author-1.png" alt="Comment Author" />
                                            </div>
                                            <div className="comment-content">
                                                <h3 className="name">Adam Jhon</h3>
                                                <div className="commented-wrapp">
                                                    <span className="commented-on">20 Jun, 2024</span>
                                                    <span className="commented-time">08:56pm </span>
                                                    <span className="comment-review">
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                    </span>
                                                </div>
                                                <p className="text">
                                                    Credibly pontificate transparent quality vectors with
                                                    quality mindshare. Efficiently architect worldwide
                                                    strategic theme areas after user.
                                                </p>
                                                <div className="reply_and_edit">
                                                    <i className="fa-solid fa-thumbs-up" />
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="children">
                                            <li className="th-comment-item">
                                                <div className="th-post-comment">
                                                    <div className="comment-avater">
                                            <img src="/assets/img/blog/comment-author-4.png" alt="Comment Author" />
                                                    </div>
                                                    <div className="comment-content">
                                                        <div className="">
                                                            <h3 className="name">Maria Willson</h3>
                                                            <div className="commented-wrapp">
                                                                <span className="commented-on">23 Jun, 2024</span>
                                                                <span className="commented-time">08:56pm </span>
                                                                <span className="comment-review">
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                    <i className="fa-solid fa-star" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <p className="text">
                                                            It is different from airport transfer or port
                                                            transfer, which are services that pick you up
                                                        </p>
                                                        <div className="reply_and_edit">
                                                            <i className="fa-solid fa-thumbs-up" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="th-comment-item">
                                        <div className="th-post-comment">
                                            <div className="comment-avater">
                                            <img src="/assets/img/blog/comment-author-5.png" alt="Comment Author" />
                                            </div>
                                            <div className="comment-content">
                                                <div className="">
                                                    <h3 className="name">Michel Edwards</h3>
                                                    <div className="commented-wrapp">
                                                        <span className="commented-on">27 Jun, 2024</span>
                                                        <span className="commented-time">08:56pm </span>
                                                        <span className="comment-review">
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <p className="text">
                                                    Credibly pontificate transparent quality vectors with
                                                    quality mindshare. Efficiently architect worldwide
                                                    strategic theme areas after user.
                                                </p>
                                                <div className="reply_and_edit">
                                                    <i className="fa-solid fa-thumbs-up" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>{" "}
                            {/* Comment end */} {/* Comment Form */}
                            <div className="th-comment-form ">
                                <div className="row">
                                    <h3 className="blog-inner-title h4 mb-2">Leave a Reply</h3>
                                    <p className="mb-25">
                                        Your email address will not be published. Required fields are
                                        marked
                                    </p>
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            placeholder="Full Name*"
                                            className="form-control"
                                            required=""
                                        />
                                        <i className="far fa-user" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            placeholder="Your Email*"
                                            className="form-control"
                                            required=""
                                        />
                                        <i className="far fa-envelope" />
                                    </div>
                                    <div className="col-12 form-group">
                                        <input
                                            type="text"
                                            placeholder="Website"
                                            className="form-control"
                                            required=""
                                        />
                                        <i className="far fa-globe" />
                                    </div>
                                    <div className="col-12 form-group">
                                        <textarea
                                            placeholder="Comment*"
                                            className="form-control"
                                            defaultValue={""}
                                        />
                                        <i className="far fa-pencil" />
                                    </div>
                                    <div className="col-12 form-group">
                                        <input type="checkbox" id="html" />
                                        <label htmlFor="html">
                                            Save my name, email, and website in this browser for the next
                                            time I comment.
                                        </label>
                                    </div>
                                    <div className="col-12 form-group mb-0">
                                        <button className="th-btn">
                                            Send Message
                                            <img src="/assets/img/icon/plane2.svg" alt="plane2 icon" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-5">
                        <aside className="sidebar-area style2">
                            <div className="widget widget_search  ">
                                <form className="search-form">
                                    <input type="text" placeholder="Search" />
                                    <button type="submit">
                                        <i className="far fa-search" />
                                    </button>
                                </form>
                            </div>
                            <div className="widget widget_categories  ">
                                <h3 className="widget_title">Categories</h3>
                                <ul>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/icon/map.svg" alt="bruny island map" />
                                            Bruny Island Tours
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/icon/map.svg" alt="mount wellington map" />
                                            Mount Wellington Tours
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/icon/map.svg" alt="tasmania sightseeing map" />
                                            Sightseeing Tours
                                        </Link>
                                        <span>(4)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/icon/map.svg" alt="tasmania adventure map" />
                                            Adventure Tours
                                        </Link>
                                        <span>(4)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/icon/map.svg" alt="wildlife tour map" />
                                            Wildlife Tours
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/icon/map.svg" alt="scenic tour map" />
                                            Scenic Tours
                                        </Link>
                                        <span>(4)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget tour-booking  ">
                                <p className="widget_subtitle">
                                    From <span className="widget_price">$120.00</span>
                                </p>
                                <div className="info-list">
                                    <ul>
                                        <li>
                                            <strong>Duration </strong>
                                            <span>1 Day Tour</span>
                                        </li>
                                        <li>
                                            <strong>Tour Type</strong>
                                            <span>Group or Private</span>
                                        </li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="th-btn th-icon">
                                    Book Now
                                </Link>
                                <span className="review">
                                    <i className="fa-light fa-heart" /> 88% of travelers recommend
                                    this experience
                                </span>
                            </div>
                            <div className="widget widget_tag_cloud  ">
                                <h3 className="widget_title">Popular Tags</h3>
                                <div className="tagcloud">
                                    <Link to="/blog">Bruny Island</Link>
                                    <Link to="/blog">Mount Wellington</Link>
                                    <Link to="/blog">Sightseeing</Link>
                                    <Link to="/blog">Adventure</Link>
                                    <Link to="/blog">Wildlife</Link>
                                    <Link to="/blog">Scenic</Link>
                                    <Link to="/blog">Hobart</Link>
                                    <Link to="/blog">Tasmania</Link>
                                </div>
                            </div>
                            <div
                                className="widget widget_offer"
                                style={{ background: 'url(/assets/img/bg/widget_bg_1.jpg)' }}
                            >
                                <div className="offer-banner">
                                    <div className="offer">
                                        <h6 className="box-title">
                                            Need Help? We Are Here To Help You
                                        </h6>
                                        <div className="banner-logo">
                                            <img src="/assets/img/logo2.svg" alt="Safe Travel and Tour Services" />
                                        </div>
                                        <div className="offer">
                                            <h6 className="offer-title">You Get Online support</h6>
                                            <Link className="offter-num" to={+256214203215}>
                                                +256 214 203 215
                                            </Link>
                                        </div>
                                        <Link to="/contact" className="th-btn style2 th-icon">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ActivitiesDetailsMain
