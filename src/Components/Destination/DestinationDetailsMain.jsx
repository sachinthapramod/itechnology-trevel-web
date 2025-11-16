import React, {useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import Posts from '../data/data-destination.json';
import Modal from '../Gallery/Modal';

function DestinationDetailsMain() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");
    const { id } = useParams();
    const destinationPost = Posts.find(post => post.id === parseInt(id));

    if (!destinationPost) {
        return <div>Post not found!</div>;
    }

    const openModal = (imageSrc, event) => {
        event.preventDefault();
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);
    return (
        <section className="space">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-lg-7">
                        <div className="page-single">
                            <div className="service-img">
                                <img src={`/assets/img/destination/${destinationPost.bannerImg}`} alt="" />
                            </div>
                            <div className="page-content d-block">
                                <div className="page-meta mt-50 mb-45">
                                    <Link className="page-tag mr-5" to="/tour">
                                        Featured
                                    </Link>
                                    <span className="ratting">
                                        <i className="fa-sharp fa-solid fa-star" />
                                        <span>4.8</span>
                                    </span>
                                </div>
                                <h2 className="box-title">
                                    Explore the Beauty of Bruny Island & Mount Wellington, Tasmania
                                </h2>
                                <p className="blog-text mb-30">
                                    Discover the stunning natural beauty of Tasmania with our one-day tours to Bruny Island and Mount Wellington. These iconic destinations showcase the best of Tasmania's landscapes, wildlife, and scenic views. Whether you choose a group tour or a private charter, experience breathtaking coastlines, pristine beaches, abundant wildlife, and panoramic mountain vistas in a single unforgettable day.
                                </p>
                                <p className="blog-text mb-35">
                                    Our carefully crafted tours from Hobart offer the perfect introduction to Tasmania's most spectacular destinations. Bruny Island features dramatic coastlines, secluded beaches, and unique wildlife encounters, while Mount Wellington provides stunning 360-degree views of Hobart and the surrounding region. Both destinations are easily accessible from Hobart and perfect for one-day adventures.
                                </p>
                                <h2 className="box-title">Basic Information</h2>
                                <p className="blog-text mb-35">
                                    Our one-day tours to Bruny Island and Mount Wellington are designed to showcase the best of Tasmania's natural beauty. Here's essential information about these destinations:
                                </p>
                                <div className="destination-checklist">
                                    <div className="checklist style2">
                                        <ul>
                                            <li>Destination</li>
                                            <li>Tour Duration</li>
                                            <li>Tour Type</li>
                                            <li>Pick-up Location</li>
                                            <li>Best Time to Visit</li>
                                            <li>Activities</li>
                                            <li>Price Per Person</li>
                                        </ul>
                                    </div>
                                    <div className="checklist style2">
                                        <ul>
                                            <li>Bruny Island & Mount Wellington</li>
                                            <li>1 Day (8-10 hours)</li>
                                            <li>Group & Private Tours</li>
                                            <li>Hobart, Tasmania</li>
                                            <li>Year Round</li>
                                            <li>Sightseeing, Adventure, Wildlife</li>
                                            <li>{destinationPost.price}</li>
                                        </ul>
                                    </div>
                                </div>
                                <blockquote>
                                    <p>
                                        Our one-day tours to Bruny Island and Mount Wellington offer an unforgettable experience of Tasmania's natural beauty. From the dramatic coastlines and wildlife of Bruny Island to the panoramic mountain views from Mount Wellington, every moment is designed to create lasting memories.
                                    </p>
                                    <cite>Safe Travel and Tour Services</cite>
                                </blockquote>
                                <p className="blog-text mb-35">
                                    Bruny Island Tours: Experience pristine beaches, dramatic sea cliffs, and abundant wildlife including seals, dolphins, and native birds. Our tours include visits to the Neck Lookout, Adventure Bay, and opportunities to spot white wallabies. The island's unique geography and diverse ecosystems make it a photographer's paradise and nature lover's dream.
                                </p>
                                <p className="blog-text mb-35">
                                    Mount Wellington Tours: Ascend to the summit of kunanyi/Mount Wellington for breathtaking 360-degree views of Hobart, the Derwent River, and surrounding landscapes. At 1,271 meters above sea level, the summit offers spectacular vistas in all directions. Our tours include stops at various lookouts, walking opportunities, and expert commentary about the mountain's geology, history, and significance to the local Aboriginal people.
                                </p>
                                <h3 className="">
                                    What Makes Our Tours Special
                                </h3>
                                <p className="mb-35">
                                    Our one-day tours are carefully designed to showcase the best of Tasmania while ensuring comfort, safety, and genuine hospitality. Whether you choose a group tour to meet fellow travelers or a private charter for a personalized experience, our expert local guides share their deep knowledge of Tasmania's history, culture, and natural environment. All tours include comfortable transportation, Hobart pick-up and drop-off, and are suitable for all fitness levels.
                                </p>
                                <div className="service-inner-img mb-40">
                                    <img
                                        src="/assets/img/destination/destination-inner-1.jpg"
                                        alt=""
                                    />
                                </div>
                                <h2 className="box-title">Highlights</h2>
                                <div className="checklist">
                                    <ul>
                                        <li>Explore Bruny Island's pristine beaches and dramatic coastlines</li>
                                        <li>Experience panoramic 360-degree views from Mount Wellington summit</li>
                                        <li>Expert local guides sharing Tasmania's history and culture</li>
                                        <li>Wildlife encounters including seals, dolphins, and native birds</li>
                                        <li>Visit iconic locations like The Neck Lookout and Adventure Bay</li>
                                        <li>Small group sizes for personalised attention (group tours)</li>
                                        <li>Flexible private tour options with customised itineraries</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="destination-gallery-wrapper">
                                <h3 className="page-title mt-30 mb-30">From our gallery</h3>
                                <div className="row gy-4 gallery-row filter-active">
                                    <div className="col-xxl-auto filter-item">
                                        <div className="gallery-box style3">
                                            <div className="gallery-img global-img">
                                                <img
                                                    src="/assets/img/gallery/gallery_6_1.jpg"
                                                    alt="gallery"
                                                    onClick={(e) => openModal('/assets/img/gallery/gallery_6_1.jpg', e)}
                                                />
                                                <Link
                                                    to="/assets/img/gallery/gallery_6_1.jpg"
                                                    className="icon-btn popup-image"
                                                    onClick={(e) => openModal('/assets/img/gallery/gallery_6_1.jpg', e)}
                                                >
                                                    <i className="fal fa-magnifying-glass-plus" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-auto filter-item">
                                        <div className="gallery-box style3">
                                            <div className="gallery-img global-img">
                                                <img
                                                    src="/assets/img/gallery/gallery_6_2.jpg"
                                                    alt="gallery"
                                                    onClick={(e) => openModal('/assets/img/gallery/gallery_6_2.jpg', e)}
                                                />
                                                <Link
                                                    to="/assets/img/gallery/gallery_6_2.jpg"
                                                    className="icon-btn popup-image"
                                                    onClick={(e) => openModal('/assets/img/gallery/gallery_6_2.jpg', e)}
                                                >
                                                    <i className="fal fa-magnifying-glass-plus" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-auto filter-item">
                                        <div className="gallery-box style3">
                                            <div className="gallery-img global-img">
                                                <img
                                                    src="/assets/img/gallery/gallery_6_3.jpg"
                                                    alt="gallery"
                                                    onClick={(e) => openModal('/assets/img/gallery/gallery_6_3.jpg', e)}
                                                />
                                                <Link
                                                    to="/assets/img/gallery/gallery_6_3.jpg"
                                                    className="icon-btn popup-image"
                                                    onClick={(e) => openModal('/assets/img/gallery/gallery_6_3.jpg', e)}
                                                >
                                                    <i className="fal fa-magnifying-glass-plus" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-auto filter-item">
                                        <div className="gallery-box style3">
                                            <div className="gallery-img global-img">
                                                <img
                                                    src="/assets/img/gallery/gallery_6_4.jpg"
                                                    alt="gallery"
                                                    onClick={(e) => openModal('/assets/img/gallery/gallery_6_4.jpg', e)}
                                                />
                                                <Link
                                                    to="/assets/img/gallery/gallery_6_4.jpg"
                                                    className="icon-btn popup-image"
                                                    onClick={(e) => openModal('/assets/img/gallery/gallery_6_4.jpg', e)}
                                                >
                                                    <i className="fal fa-magnifying-glass-plus" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="th-comments-wrap style2 ">
                                <h2 className="blog-inner-title h4">Reviews (3)</h2>
                                <ul className="comment-list">
                                    <li className="th-comment-item">
                                        <div className="th-post-comment">
                                            <div className="comment-avater">
                                                <img
                                                    src="/assets/img/blog/comment-author-1.jpg"
                                                    alt="Comment Author"
                                                />
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
                                                    Amazing one-day tour to Bruny Island! The coastline views were breathtaking and we spotted seals and dolphins. Our guide was knowledgeable and made the experience unforgettable. Highly recommend!
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
                                                        <img
                                                            src="/assets/img/blog/comment-author-4.jpg"
                                                            alt="Comment Author"
                                                        />
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
                                                            Mount Wellington tour was spectacular! The panoramic views from the summit were incredible. Great for photography and the guide shared fascinating stories about the mountain's history.
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
                                                <img
                                                    src="/assets/img/blog/comment-author-5.jpg"
                                                    alt="Comment Author"
                                                />
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
                                                    Amazing one-day tour to Bruny Island! The coastline views were breathtaking and we spotted seals and dolphins. Our guide was knowledgeable and made the experience unforgettable. Highly recommend!
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
                                            <img src="/assets/img/icon/plane2.svg" alt="" />
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
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Bruny Island Tours
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Mount Wellington Tours
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Sightseeing Tours
                                        </Link>
                                        <span>(4)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Adventure Tours
                                        </Link>
                                        <span>(4)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Wildlife Tours
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Scenic Tours
                                        </Link>
                                        <span>(4)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget  ">
                                <h3 className="widget_title">Recent Posts</h3>
                                <div className="recent-post-wrap">
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <Link to="/blog/1">
                                                <img
                                                    src="/assets/img/blog/recent-post-1-1.jpg"
                                                    alt="Blog"
                                                />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog/1">
                                                    Exploring Bruny Island's Stunning Coastlines and Wildlife
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
                                            <Link to="/blog/1">
                                                <img
                                                    src="/assets/img/blog/recent-post-1-2.jpg"
                                                    alt="Blog"
                                                />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog/1">
                                                    Mount Wellington: Panoramic Views of Hobart and Beyond
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
                                            <Link to="/blog/1">
                                                <img
                                                    src="/assets/img/blog/recent-post-1-3.jpg"
                                                    alt="Blog"
                                                />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog/1">
                                                    One-Day Tours from Hobart: The Best of Tasmania
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
                                    <Link to="/blog">Sightseeing</Link>
                                    <Link to="/blog">Adventure</Link>
                                    <Link to="/blog">Wildlife</Link>
                                    <Link to="/blog">Scenic</Link>
                                    <Link to="/blog">Hobart</Link>
                                    <Link to="/blog">Tasmania</Link>
                                </div>
                            </div>
                            <div
                                className="widget widget_offer" style={{ background: 'url(/assets/img/bg/widget_bg_1.jpg)', backgroundRepeat: "no-repeat", backgroundSize:"cover" }}
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
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
        </section>
    )
}

export default DestinationDetailsMain
