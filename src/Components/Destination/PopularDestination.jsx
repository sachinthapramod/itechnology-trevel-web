import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const destinations = [
    {
        id: 1,
        title: "Bruny Island Group Tour Package",
        image: "/assets/img/tour/tour_2_1.jpg",
        rating: 4.8,
        price: 980,
        duration: "1 Day",
        link: "/tour-details",
    },
    {
        id: 2,
        title: "Bruny Island Private Tour Package",
        image: "/assets/img/tour/tour_2_2.jpg",
        rating: 4.8,
        price: 980,
        duration: "1 Day",
        link: "/tour-details",
    },
    {
        id: 3,
        title: "Mount Wellington Group Tour",
        image: "/assets/img/tour/tour_2_3.jpg",
        rating: 4.8,
        price: 980,
        duration: "1 Day",
        link: "/tour-details",
    },
    {
        id: 4,
        title: "Mount Wellington Private Tour",
        image: "/assets/img/tour/tour_2_4.jpg",
        rating: 4.8,
        price: 980,
        duration: "1 Day",
        link: "/tour-details",
    },

];
const sectionStyle = {
    position: "relative",
    overflow: "hidden",
    backgroundImage: "url('/assets/img/bg/tour_bg_2.jpg')",
    backgroundPosition: "top center",
    zIndex: 3,
    backgroundRepeat: "no-repeat",
    marginBottom: -348,
  };

function PopularDestination() {
    return (
        <section
            className="tour-sec2 position-relative overflow-hidden bg-top-center z-index-3 space-top"
            id="tour-sec"
            style={sectionStyle}
        >
            <div className="container">
                <div className="title-area mb-15 text-center">
                    <span className="sub-title">Discover Tasmania</span>
                    <h2 className="sec-title">Popular Destinations: Bruny Island & Mount Wellington</h2>
                    <p className="tour-text">
                        Experience the stunning natural beauty of Tasmania with our one-day tours to Bruny Island and Mount Wellington. Choose from group or private tours, all departing from Hobart.
                    </p>
                </div>

                <div className="slider-area tour-slider">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        grabCursor={true}
                        speed={1000}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            480: { slidesPerView: 2 },
                            576: { slidesPerView: 2 },
                            1199: { slidesPerView: 3 },
                            1400: { slidesPerView: 4 },
                        }}
                        className="th-slider tourSlider2 has-shadow"
                    >
                        {destinations.map((destination) => (
                            <SwiperSlide key={destination.id}>
                                <div className="tour-card th-ani gsap-cursor">
                                    <div className="tour-card_img global-img">
                                        <img src={destination.image} alt={destination.title} />
                                    </div>
                                    <div className="tour-content">
                                        <h3 className="box-title">
                                            <Link to={destination.link}>{destination.title}</Link>
                                        </h3>
                                        <div className="tour-rating">
                                            <div className="star-rating" role="img" aria-label={`Rated ${destination.rating} out of 5`}>
                                                <span style={{ width: "100%" }}>
                                                    Rated <strong className="rating">5.00</strong> out of 5 based on{" "}
                                                    <span className="rating">{destination.rating}</span> ({destination.rating} Rating)
                                                </span>
                                            </div>
                                            <Link to={destination.link} className="woocommerce-review-link">
                                                (<span className="count">{destination.rating}</span> Rating)
                                            </Link>
                                        </div>
                                        <h4 className="tour-card_price">
                                            <span className="currency">${destination.price}.00</span>/Person
                                        </h4>
                                        <div className="tour-action">
                                            <span>
                                                <i className="fa-light fa-clock" /> {destination.duration}
                                            </span>
                                            <Link to="/contact" className="th-btn style4">
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

export default PopularDestination;
