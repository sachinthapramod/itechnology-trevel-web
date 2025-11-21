import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, EffectFade } from "swiper/modules";
import { ROUTES } from '../../config/constants';

function TourDetailsMain() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeTab, setActiveTab] = useState("day-tab1");

    const days = [
        { id: "day-tab1", label: "Mount Wellington Tour" },
        { id: "day-tab2", label: "Bruny Island Tour" },
    ];

    const images = [
        "/assets/img/tour/tour_inner_1.jpg",
        "/assets/img/tour/tour_inner_2.jpg",
        "/assets/img/tour/tour_inner_3.jpg",
        "/assets/img/tour/tour_inner_4.jpg",
        "/assets/img/tour/tour_inner_5.jpg",
        "/assets/img/tour/tour_inner_6.jpg",
    ];
    const tabContent = {
        "day-tab1": [
            "Morning departure from Brooke Street Pier, Hobart (or hotel pick-up in Hobart CBD)",
            "Scenic drive to Mount Wellington summit (Kunanyi) - 1,271 metres above sea level",
            "Photo stops and enjoy sweeping views over Hobart, the Derwent River, and the Tasman Peninsula",
            "Experience crisp mountain air and panoramic vistas",
            "Drive down to Richmond Historic Village",
            "Explore cobblestone streets lined with Georgian architecture",
            "Visit the iconic Richmond Bridge (Australia's oldest bridge)",
            "Stop at Richmond Gaol to learn about convict-era history",
            "Free time for shopping, browsing boutique shops, and sampling local treats at cafes and bakeries",
            "Lunch at your own expense in Richmond",
            "Return journey to Hobart with your friendly local guide sharing insights into Tasmania's natural beauty and history",
            "Approximately 5:00 PM return to departure point",
        ],
        "day-tab2": [
            "7:30 AM departure from Hobart (hotel pick-up in Hobart CBD or meet at Brooke Street Pier)",
            "Drive to Kettering for the ferry crossing",
            "Scenic ferry ride across the D'Entrecasteaux Channel to Bruny Island",
            "Climb The Neck Lookout for spectacular 360° views of both North and South Bruny Island",
            "Visit Adventure Bay and explore pristine beaches",
            "Wildlife spotting opportunities - look for white wallabies, sea eagles, and other native wildlife",
            "Local gourmet tastings: sample award-winning cheese, fresh oysters, artisan chocolate, and local honey",
            "Explore the island's stunning landscapes and dramatic coastlines",
            "Free time for additional exploration and photography",
            "Lunch at your own expense (opportunities available on the island)",
            "Continue exploring Bruny Island's natural beauty and wildlife",
            "Ferry ride back to the mainland",
            "Return journey to Hobart with your expert local guide",
            "Approximately 5:00 PM return to departure point",
        ],
    };
    return (
        <section className="space">
            <div className="container shape-mockup-wrap">
                <div className="row">
                    <div className="col-xxl-8 col-lg-7">
                        <div className="tour-page-single">
                            <div className="slider-area tour-slider1">
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
                                    className="swiper th-slider mb-4"
                                    id="tourSlider4"
                                >
                                    {images.map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="tour-slider-img">
                                                <img src={img} alt={`Slide ${index + 1}`} />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <Swiper
                                    modules={[Navigation, Thumbs]}
                                    loop={true}
                                    spaceBetween={25}
                                    slidesPerView={3}
                                    watchSlidesProgress
                                    onSwiper={setThumbsSwiper} // Connect thumbnails to main slider
                                    className="swiper th-slider tour-thumb-slider"
                                >
                                    {images.map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="tour-slider-img">
                                                <img src={img} alt={`Thumbnail ${index + 1}`} />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <button
                                    data-slider-prev="#tourSlider4"
                                    className="slider-arrow style3 slider-prev"
                                >
                                    <img src="/assets/img/icon/hero-arrow-left.svg" alt="" />
                                </button>
                                <button
                                    data-slider-next="#tourSlider4"
                                    className="slider-arrow style3 slider-next"
                                >
                                    <img src="/assets/img/icon/hero-arrow-right.svg" alt="" />
                                </button>
                            </div>
                            <div className="page-content">
                                <div className="page-meta mb-45">
                                    <Link className="page-tag mr-5" to="/tour">
                                        Bruny Island & Mount Wellington
                                    </Link>
                                    <span className="ratting">
                                        <i className="fa-sharp fa-solid fa-star" aria-hidden="true" />
                                        <span>Rated 4.9/5 by Australian travellers</span>
                                    </span>
                                </div>
                                <h1 className="box-title">
                                    Signature Tasmania Tour: Mount Wellington Summit & Bruny Island Gourmet Adventure
                                </h1>
                                <h4 className="tour-price">
                                    <span className="currency">From AUD $120.00</span>/Person (group) · Private charters available
                                </h4>
                                <p className="box-text mb-30">
                                    Safe Travel and Tour Services designs this nine-hour Tasmania experience for visitors who want both mountain panoramas and coastal tastings. Departing Hobart daily, your accredited local guide takes you to Mount Wellington/kunanyi for sweeping views, Richmond Village for Georgian architecture, and Bruny Island for gourmet cheese, oyster, chocolate, and honey samplers.
                                </p>
                                <p className="box-text mb-50">
                                    Our Hobart-based travel agency manages ferry crossings, National Park permits, hotel pickups, and dietary-friendly tastings, so you can focus on photography, wildlife sightings, and cultural insights. Whether you book a shared departure or upgrade to a private charter, every itinerary balances comfort, safety, and genuine Tasmanian hospitality.
                                </p>
                                <h2 className="box-title">Tour Highlights</h2>
                                <p className="box-text mb-30">
                                    Explore Tasmania’s top destinations with curated stops and hosted tastings:
                                </p>
                                <div className="checklist mb-50">
                                    <ul>
                                        <li>Mount Wellington / kunanyi summit boardwalks with panoramic views over Hobart and the Derwent River</li>
                                        <li>Richmond Village heritage walking tour including the historic bridge and convict-built gaol</li>
                                        <li>Bruny Island ferry crossing through the D’Entrecasteaux Channel</li>
                                        <li>The Neck Lookout climb for 360-degree coastal vistas</li>
                                        <li>Adventure Bay beach walks and white wallaby spotting with local guides</li>
                                        <li>Cheese, oyster, chocolate, and honey tastings showcasing Tasmanian producers</li>
                                        <li>Air-conditioned coach transport with Hobart CBD hotel pickups and cruise ship transfers on request</li>
                                    </ul>
                                </div>
                                <h2 className="box-title">Tour Snapshot</h2>
                                <div className="destination-checklist mb-50">
                                    <div className="checklist style2">
                                        <ul>
                                            <li>Duration</li>
                                            <li>Tour Type</li>
                                            <li>Departure</li>
                                            <li>Return</li>
                                            <li>Group Size</li>
                                            <li>Language</li>
                                            <li>Inclusions</li>
                                        </ul>
                                    </div>
                                    <div className="checklist style2">
                                        <ul>
                                            <li>9 hours (approx.)</li>
                                            <li>Small group or private charter</li>
                                            <li>Brooke Street Pier, Hobart (hotel pickups available)</li>
                                            <li>Same as departure point, approx. 5:00 PM</li>
                                            <li>Max 20 guests (group) or custom private</li>
                                            <li>English (multilingual guides on request)</li>
                                            <li>Coach transport, ferry tickets, tastings, National Park fees, local guide</li>
                                        </ul>
                                    </div>
                                </div>
                                <h3 className="box-title">What to Bring</h3>
                                <div className="checklist mb-50">
                                    <ul>
                                        <li>Comfortable walking shoes</li>
                                        <li>Warm clothing (Mount Wellington can be cold even in summer!)</li>
                                        <li>Camera</li>
                                        <li>Water bottle</li>
                                    </ul>
                                </div>
                                <h3 className="box-title">Important Information</h3>
                                <div className="checklist mb-50">
                                    <ul>
                                        <li>Tour may be altered or cancelled due to adverse weather on Mount Wellington</li>
                                        <li>Minimum numbers may apply</li>
                                        <li>Complimentary hotel pick-up available on request (Hobart CBD only)</li>
                                        <li>Be ready 10 minutes before departure</li>
                                        <li>Pickup confirmation sent by email the day before</li>
                                    </ul>
                                </div>
                                <h2 className="box-title">Included and Excluded</h2>
                                <p className="blog-text mb-35">
                                    Here's what's included in your tour and what you'll need to arrange separately:
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
                                <h3 className="page-title mt-50 mb-0">Tour Plan</h3>
                                <div>
                                    {/* Tab Navigation */}
                                    <ul className="nav nav-tabs tour-tab mt-10" role="tablist">
                                        {days.map((day) => (
                                            <li className="nav-item" key={day.id} role="presentation">
                                                <button
                                                    className={`nav-link ${activeTab === day.id ? "active" : ""}`}
                                                    onClick={() => setActiveTab(day.id)}
                                                    type="button"
                                                    role="tab"
                                                    aria-controls={day.id + "-pane"}
                                                    aria-selected={activeTab === day.id}
                                                >
                                                    {day.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tab Content */}
                                    <div className="tab-content">
                                        {days.map((day) => (
                                            <div
                                                key={day.id}
                                                className={`tab-pane fade ${activeTab === day.id ? "show active" : ""}`}
                                                id={day.id + "-pane"}
                                                role="tabpanel"
                                                aria-labelledby={day.id}
                                                tabIndex={0}
                                            >
                                                <div className="tour-grid-plan">
                                                    <div className="checklist">
                                                        <ul>
                                                            {tabContent[day.id].map((item, index) => (
                                                                <li key={index}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-5">
                        <aside className="sidebar-area">
                            <div className="widget widget_search  ">
                                <form className="search-form">
                                    <input type="text" placeholder="Search" />
                                    <button type="submit">
                                        <i className="far fa-search" />
                                    </button>
                                </form>
                            </div>
                            <div className="widget widget_categories">
                                <h3 className="widget_title">Tasmania Tour Types</h3>
                                <ul>
                                    <li>
                                        <Link to={ROUTES.tour}>
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Bruny Island Gourmet Tours
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                    <li>
                                        <Link to={ROUTES.tour}>
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Mount Wellington Summit Trips
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                    <li>
                                        <Link to={ROUTES.tour}>
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Richmond & Heritage Walks
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                    <li>
                                        <Link to={ROUTES.tour}>
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Private Charters & Shore Excursions
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget widget_tag_cloud">
                                <h3 className="widget_title">Popular Keywords</h3>
                                <div className="tagcloud">
                                    <Link to={ROUTES.tour}>Bruny Island</Link>
                                    <Link to={ROUTES.tour}>Mount Wellington</Link>
                                    <Link to={ROUTES.tour}>Hobart Departures</Link>
                                    <Link to={ROUTES.tour}>Richmond Village</Link>
                                    <Link to={ROUTES.tour}>Gourmet Tastings</Link>
                                    <Link to={ROUTES.tour}>Private Tours</Link>
                                </div>
                            </div>
                            <div
                                className="widget widget_offer"
                                style={{ background: "url(/assets/img/bg/widget_bg_1.jpg)" }}
                            >
                                <div className="offer-banner">
                                    <div className="offer">
                                        <h6 className="box-title">
                                            Need Help? We Are Here To Help You
                                        </h6>
                                        <div className="banner-logo">
                                            <img src="/assets/img/logo2.svg" alt="Tourm" />
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
                <div className="location-map">
                    <h3 className="page-title mt-45 mb-30">Location</h3>
                    <div className="contact-map style3">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuztheme!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
                            allowFullScreen=""
                            loading="lazy"
                            title="Tour Location Map"
                        />
                        <div className="contact-icon">
                            <img src="/assets/img/icon/location-dot3.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div
                    className="shape-mockup about-shape movingX d-none d-xxl-block"
                    style={{ bottom: "30.5%", right: "0%" }}
                >
                    <img src="/assets/img/normal/about-slide-img.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup about-rating d-none d-xxl-block"
                    style={{ bottom: "40%", right: "-12%" }}
                >
                    <i className="fa-sharp fa-solid fa-star" />
                    <span>4.9k</span>
                </div>
                <div
                    className="shape-mockup about-emoji d-none d-xxl-block"
                    style={{ bottom: "36%", right: "20%" }}
                >
                    <img src="/assets/img/icon/emoji.png" alt="" />
                </div>
                <div
                    className="shape-mockup shape1 d-none d-xxl-block"
                    style={{ bottom: "49%", right: "-12%" }}
                >
                    <img src="/assets/img/shape/shape_1.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup shape2 d-none d-xl-block"
                    style={{ bottom: "45%", right: "-8%" }}
                >
                    <img src="/assets/img/shape/shape_2.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup shape3 d-none d-xxl-block"
                    style={{ bottom: "47%", right: "-5%" }}
                >
                    <img src="/assets/img/shape/shape_3.png" alt="shape" />
                </div>
            </div>
        </section>

    )
}

export default TourDetailsMain
