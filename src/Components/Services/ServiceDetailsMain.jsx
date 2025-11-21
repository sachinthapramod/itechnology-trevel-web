import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Posts from '../data/data-service.json';
import Modal from '../Gallery/Modal';

function ServiceDetailsMain() {
    const { id } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const servicePost = Posts.find(post => post.id === parseInt(id));

    if (!servicePost) {
        return <div>Post not found!</div>;
    }

    const serviceContents = {
        1: {
            title: "Bruny Island Group Tour Package",
            intro: "A full-day Tasmanian adventure that blends scenic lookouts, gourmet tastings, wildlife spotting, and insider commentary from Safe Travel and Tour Services.",
            paragraph1: "We depart Hobart in the morning, cross the D'Entrecasteaux Channel by ferry, and spend the day exploring Bruny Island’s famous Neck Lookout, Adventure Bay, and quiet beaches. Along the way we pause for artisan cheese, oysters, chocolate, and honey tastings from our favourite local makers.",
            paragraph2: "Guests enjoy comfortable transport, a small-group atmosphere, and a guide who manages timings, ferry queues, and tasting reservations so the day never feels rushed.",
            highlights: [
                "Scenic ferry crossing with commentary",
                "Climb The Neck Lookout for 360° views",
                "Wildlife viewing (white wallabies, sea eagles, dolphins)",
                "Adventure Bay beach walk & local history insights",
                "Cheese, oyster, chocolate & honey tastings",
                "Curated photo stops and flexible pacing"
            ],
            inclusions: [
                "Hotel pickup & drop-off (Hobart CBD)",
                "Return ferry fares",
                "Air-conditioned transport & expert guide",
                "National Park entry fees",
                "Gourmet tastings (cheese, oysters, chocolate, honey)",
                "Bottled water"
            ],
            exclusions: [
                "Lunch (time allocated at local cafes)",
                "Personal purchases",
                "Additional drinks"
            ],
            duration: "Approx. 9 hours",
            departure: "7:30 AM from Brooke Street Pier or CBD hotels",
            returnTime: "Around 5:00 PM",
            operation: "Daily, weather permitting",
            pickup: "CBD hotels or Brooke Street Pier",
            price: "$190.00",
            galleryAlt: "Bruny Island Scenic Moments",
            reviews: [
                {
                    name: "Isabella M.",
                    date: "12 Aug, 2025",
                    text: "The best day we had in Tasmania! Olivia knew every tasting host personally and even spotted white wallabies for us.",
                    rating: 5
                },
                {
                    name: "Daniel & Priya",
                    date: "02 Jul, 2025",
                    text: "Loved the balance of lookouts, wildlife, and gourmet stops. We never felt rushed and the ferry logistics were effortless.",
                    rating: 5
                },
                {
                    name: "Hannah M.",
                    date: "18 Jun, 2025",
                    text: "Safe Travel handled everything—from hotel pickup to ferry timings—so we could just soak up Bruny Island.",
                    rating: 5
                }
            ]
        },
        2: {
            title: "Bruny Island Private Tour Package",
            intro: "An exclusive Bruny Island charter tailored for couples, families, or small groups wanting flexible pacing, extra tastings, and custom stops.",
            paragraph1: "Your private guide designs the day around your interests—sunrise walks, photography, bird watching, extended tastings, or hidden beaches. We confirm preferences beforehand and build a relaxed yet immersive itinerary.",
            paragraph2: "With a dedicated vehicle and guide, you can add optional stops such as Cape Bruny Lighthouse, local farm visits, or premium seafood lunches.",
            highlights: [
                "Private vehicle and personalised commentary",
                "Flexible schedule for photography, tastings, or hiking",
                "Optional visits to Cape Bruny Lighthouse or artisan studios",
                "Wildlife viewing with binoculars supplied",
                "Exclusive tastings and reservations handled in advance",
                "Complimentary still/sparkling water and snacks"
            ],
            inclusions: [
                "Dedicated guide & vehicle",
                "Hotel pickup/drop-off anywhere in Hobart",
                "Ferry fares and National Park entry fees",
                "Curated tastings (cheese, oysters, chocolate)",
                "Premium bottled water & Tasmanian treats"
            ],
            exclusions: [
                "Lunch (recommendations + bookings arranged)",
                "Specialty purchases",
                "Optional add-ons (e.g. lighthouse tickets)"
            ],
            duration: "Approx. 9 hours (flexible)",
            departure: "Custom (recommended 7:30 AM)",
            returnTime: "Custom (typically 5:00 PM)",
            operation: "Daily on request",
            pickup: "Any Hobart CBD hotel or agreed meeting point",
            price: "$190.00",
            galleryAlt: "Private Bruny Island Charter",
            reviews: [
                {
                    name: "Chloe & Sam",
                    date: "05 Sep, 2025",
                    text: "Our private tour felt like travelling with a friend who knows every corner of Bruny. The personalised tastings were incredible.",
                    rating: 5
                },
                {
                    name: "Lee Family",
                    date: "25 Aug, 2025",
                    text: "Sienna planned the perfect day for our kids—beach time, wildlife, and plenty of snacks. Highly recommend!",
                    rating: 5
                }
            ]
        },
        3: {
            title: "Mount Wellington Group Tour",
            intro: "Experience kunanyi/Mount Wellington, Richmond Village, and Hobart surrounds with our knowledgeable Safe Travel guides.",
            paragraph1: "Start with a scenic drive to the summit for sweeping views over Hobart, the Derwent River, and the Tasman Peninsula. We provide extra layers, warm drinks, and photography tips for the ever-changing alpine weather.",
            paragraph2: "After the summit we explore Richmond’s convict-built bridge, sandstone cottages, and artisan bakeries before returning to Hobart in the late afternoon.",
            highlights: [
                "Summit boardwalks and viewing shelters",
                "Interpretation of geology, history, and local stories",
                "Richmond Bridge, Gaol, and local stores",
                "Free time for coffee or bakery treats",
                "Comfort stops and photo ops customised to the group",
                "Optional short walks on Pinnacle Track (conditions permitting)"
            ],
            inclusions: [
                "Hotel pickup/drop-off (Hobart CBD)",
                "Air-conditioned transport with Wi-Fi",
                "Experienced mountain guide",
                "Warm drinks & summit jackets on request"
            ],
            exclusions: [
                "Meals & snacks (local recommendations provided)",
                "Optional entry fees or tastings",
                "Personal purchases"
            ],
            duration: "Approx. 9 hours",
            departure: "8:00 AM from Hobart",
            returnTime: "4:30 PM",
            operation: "Daily (weather dependent)",
            pickup: "Brooke Street Pier or nominated CBD hotels",
            price: "$120.00",
            galleryAlt: "Mount Wellington & Richmond Highlights",
            reviews: [
                {
                    name: "Marco M.",
                    date: "30 Jul, 2025",
                    text: "Ethan managed the summit weather perfectly and still gave us plenty of time in Richmond. Loved the hot coffee at the top!",
                    rating: 5
                },
                {
                    name: "Laura M.",
                    date: "16 Jul, 2025",
                    text: "Great balance of history, scenery, and free time. The guide’s stories made the mountain come alive.",
                    rating: 5
                }
            ]
        },
        4: {
            title: "Mount Wellington Private Tour",
            intro: "A flexible private charter covering Mount Wellington summit, Richmond Village, and optional Hobart or Coal River Valley add-ons.",
            paragraph1: "Design your perfect day: sunrise summit visit, behind-the-scenes at Richmond Gaol, vineyard tastings, or additional Hobart viewpoints. Your guide adjusts pacing and routing in real time.",
            paragraph2: "Ideal for photographers, families, or guests wanting extra comfort, custom commentary, and premium local snacks.",
            highlights: [
                "Flexible summit schedule to chase the best light",
                "Guided Richmond Village heritage walk",
                "Optional vineyard or distillery stops",
                "Heated/cooled private vehicle with charging ports",
                "Wildlife spotting and short walks tailored to ability",
                "Complimentary Tasmanian treats & hot drinks"
            ],
            inclusions: [
                "Private driver-guide",
                "Door-to-door transport",
                "National Park entry & parking permits",
                "Bottled water, hot drinks, and local snacks"
            ],
            exclusions: [
                "Meals & premium tastings",
                "Optional activity fees",
                "Personal shopping"
            ],
            duration: "Approx. 9 hours (flexible)",
            departure: "Custom (morning recommended)",
            returnTime: "Custom",
            operation: "Daily by appointment",
            pickup: "Any Hobart CBD or airport hotel",
            price: "$120.00",
            galleryAlt: "Private Mount Wellington Experience",
            reviews: [
                {
                    name: "Anderson Family",
                    date: "08 Aug, 2025",
                    text: "Luca tailored the entire day to our pace. We fit in summit views, Richmond treats, and a vineyard stop without feeling rushed.",
                    rating: 5
                }
            ]
        }
    };

    const serviceContent = serviceContents[parseInt(id)] || serviceContents[1];

    // Function to open the modal with the selected image
    const openModal = (imageSrc, event) => {
        event.preventDefault(); // Prevent default link behavior
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="space">
            <div className="container shape-mockup-wrap">
                <div className="row">
                    <div className="col-xxl-8 col-lg-7">
                        <div className="page-single">
                            <div className="service-img">
                                <img 
                                    src={`/assets/img/destination/${servicePost.bannerImg}`} 
                                    alt={`${serviceContent.title} - Safe Travel and Tour Services Tasmania`} 
                                    loading="lazy" 
                                />
                            </div>
                            <div className="page-content d-block">
                                <div className="page-meta mt-50 mb-45">
                                    <Link className="page-tag" to="/tour">
                                        Safe Travel Tour
                                    </Link>
                                    <span className="ratting">
                                        <i className="fa-sharp fa-solid fa-star" />
                                        <span>4.9</span>
                                    </span>
                                </div>
                                <h2 className="box-title">
                                    {serviceContent.title}
                                </h2>
                                <p className="box-text mb-30">
                                    {serviceContent.intro}
                                </p>
                                <p className="box-text mb-30">
                                    {serviceContent.paragraph1}
                                </p>
                                <p className="box-text mb-40">
                                    {serviceContent.paragraph2}
                                </p>
                                <div className="service-inner-img mb-40">
                                    <img
                                        src="/assets/img/destination/destination-inner-1.jpg"
                                        alt={`${serviceContent.galleryAlt} - ${serviceContent.title} by Safe Travel Tasmania`}
                                        loading="lazy"
                                    />
                                </div>
                                <h2 className="box-title">Tour Highlights</h2>
                                <div className="checklist mb-40">
                                    <ul>
                                        {serviceContent.highlights.map((highlight, index) => (
                                            <li key={index}>{highlight}</li>
                                        ))}
                                    </ul>
                                </div>
                                <h2 className="box-title">What's Included</h2>
                                <div className="checklist mb-30">
                                    <ul>
                                        {serviceContent.inclusions.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <h2 className="box-title">Good To Know</h2>
                                <div className="checklist mb-30">
                                    <ul>
                                        {serviceContent.exclusions.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="destination-gallery-wrapper">
                                <h3 className="page-title mt-30 mb-30">From our gallery</h3>
                                <div className="row gy-4 gallery-row filter-active">
                                    {["/assets/img/gallery/gallery_6_1.jpg", "/assets/img/gallery/gallery_6_2.jpg", "/assets/img/gallery/gallery_6_3.jpg", "/assets/img/gallery/gallery_6_4.jpg"].map((imgSrc, index) => (
                                        <div className="col-xxl-auto filter-item" key={index}>
                                            <div className="gallery-box style3">
                                                <div className="gallery-img global-img">
                                                    <img
                                                        src={imgSrc}
                                                        alt={`${serviceContent.galleryAlt} - ${index + 1} from ${serviceContent.title}`}
                                                        loading="lazy"
                                                    />
                                                    <Link
                                                        to={imgSrc}
                                                        className="icon-btn popup-image"
                                                        onClick={(e) => openModal(imgSrc, e)}
                                                    >
                                                        <i className="fal fa-magnifying-glass-plus" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="th-comments-wrap style2 ">
                                <h2 className="blog-inner-title h4">Guest Feedback</h2>
                                <ul className="comment-list">
                                    {serviceContent.reviews.map((review, index) => (
                                        <li className="th-comment-item" key={index}>
                                            <div className="th-post-comment">
                                                <div className="comment-avater">
                                                    <img
                                                        src={`/assets/img/blog/comment-author-${(index % 3) + 1}.jpg`}
                                                        alt={`${review.name} - Guest review for ${serviceContent.title}`}
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="comment-content">
                                                    <h3 className="name">{review.name}</h3>
                                                    <div className="commented-wrapp">
                                                        <span className="commented-on">{review.date}</span>
                                                        <span className="comment-review">
                                                            {Array.from({ length: review.rating }).map((_, starIdx) => (
                                                                <i key={starIdx} className="fa-solid fa-star" />
                                                            ))}
                                                        </span>
                                                    </div>
                                                    <p className="text">
                                                        {review.text}
                                                    </p>
                                                    <div className="reply_and_edit">
                                                        <i className="fa-solid fa-thumbs-up" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
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
                                            <img src="/assets/img/icon/plane2.svg" alt="Send message icon" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-5">
                        <aside className="sidebar-area style3">
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
                                        <Link to="/tour">
                                            <img src="/assets/img/theme-img/map.svg" alt="Bruny Island Tours Tasmania" />
                                            Bruny Island Tours
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                    <li>
                                        <Link to="/tour">
                                            <img src="/assets/img/theme-img/map.svg" alt="Mount Wellington Tours Hobart" />
                                            Mount Wellington Tours
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                    <li>
                                        <Link to="/tour">
                                            <img src="/assets/img/theme-img/map.svg" alt="Sightseeing and Scenic Tours Tasmania" />
                                            Sightseeing & Scenic
                                        </Link>
                                        <span>(4)</span>
                                    </li>
                                    <li>
                                        <Link to="/tour">
                                            <img src="/assets/img/theme-img/map.svg" alt="Gourmet Food Tours Tasmania" />
                                            Gourmet Experiences
                                        </Link>
                                        <span>(3)</span>
                                    </li>
                                    <li>
                                        <Link to="/tour">
                                            <img src="/assets/img/theme-img/map.svg" alt="Wildlife and Adventure Tours Tasmania" />
                                            Wildlife & Adventure
                                        </Link>
                                        <span>(3)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget tour-booking  ">
                                <p className="widget_subtitle">
                                    From <span className="widget_price">{serviceContent.price}</span>
                                </p>
                                <div className="info-list">
                                    <ul>
                                        <li>
                                            <strong>Duration</strong>
                                            <span>{serviceContent.duration}</span>
                                        </li>
                                        <li>
                                            <strong>Departure</strong>
                                            <span>{serviceContent.departure}</span>
                                        </li>
                                        <li>
                                            <strong>Return</strong>
                                            <span>{serviceContent.returnTime}</span>
                                        </li>
                                        <li>
                                            <strong>Days of Operation</strong>
                                            <span>{serviceContent.operation}</span>
                                        </li>
                                        <li>
                                            <strong>Pickup</strong>
                                            <span>{serviceContent.pickup}</span>
                                        </li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="th-btn th-icon">
                                    Book Now
                                </Link>
                                <span className="review">
                                    <i className="fa-light fa-heart" /> 98% of travellers recommend this experience
                                </span>
                            </div>
                            <div className="widget  ">
                                <h3 className="widget_title">Recent Posts</h3>
                                <div className="recent-post-wrap">
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <Link to="/blog/1">
                                                <img
                                                    src="/assets/img/blog/recent-post-1-1.jpg"
                                                    alt="Discovering Bruny Island"
                                                    loading="lazy"
                                                />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog/1">
                                                    Discovering Bruny Island: A Complete Guide
                                                </Link>
                                            </h4>
                                            <div className="recent-post-meta">
                                                <Link to="/blog">
                                                    <i className="fa-regular fa-calendar" />
                                                    22/6/ 2025
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <Link to="/blog/2">
                                                <img
                                                    src="/assets/img/blog/recent-post-1-2.jpg"
                                                    alt="Mount Wellington Summit"
                                                    loading="lazy"
                                                />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog/2">
                                                    Mount Wellington Summit: Ultimate Guide
                                                </Link>
                                            </h4>
                                            <div className="recent-post-meta">
                                                <Link to="/blog">
                                                    <i className="fa-regular fa-calendar" />
                                                    25/6/ 2025
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <Link to="/blog/3">
                                                <img
                                                    src="/assets/img/blog/recent-post-1-3.jpg"
                                                    alt="One Day Tours Hobart"
                                                    loading="lazy"
                                                />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog/3">
                                                    One-Day Tours from Hobart
                                                </Link>
                                            </h4>
                                            <div className="recent-post-meta">
                                                <Link to="/blog">
                                                    <i className="fa-regular fa-calendar" />
                                                    27/6/ 2025
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget widget_tag_cloud  ">
                                <h3 className="widget_title">Popular Tags</h3>
                                <div className="tagcloud">
                                    <Link to="/blog">Bruny Island</Link>
                                    <Link to="/blog">Mount Wellington</Link>
                                    <Link to="/blog">Gourmet</Link>
                                    <Link to="/blog">Wildlife</Link>
                                    <Link to="/blog">Sightseeing</Link>
                                    <Link to="/blog">Private Tours</Link>
                                    <Link to="/blog">Group Tours</Link>
                                    <Link to="/blog">Tasmania</Link>
                                </div>
                            </div>
                            <div
                                className="widget widget_offer" style={{ background: 'url(/assets/img/bg/widget_bg_1.jpg)' }}
                                data-bg-src="/assets/img/bg/widget_bg_1.jpg"
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
                                            <Link className="offter-num" to="tel:+61362488200">
                                                +61 3 6248 8200
                                            </Link>
                                        </div>
                                        <Link to="/contact" className="th-btn style2 th-icon">
                                            Contact Our Team
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
                <div
                    className="shape-mockup shape1 d-none d-xxl-block"
                    style={{ bottom: "35%", right: "-12%" }}
                >
                    <img src="/assets/img/shape/shape_1.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup shape2 d-none d-xl-block"
                    style={{ bottom: "31%", right: "-8%" }}
                >
                    <img src="/assets/img/shape/shape_2.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup shape3 d-none d-xxl-block"
                    style={{ bottom: "33%", right: "-5%" }}
                >
                    <img src="/assets/img/shape/shape_3.png" alt="shape" />
                </div>
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
        </section>

    )
}

export default ServiceDetailsMain
