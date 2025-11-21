import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import DestinationCard from './DestinationCard';
import posts from '../data/data-destination.json';
import DestinationCardTwo from './DestinationCardTwo';

const seoFilters = [
    { label: 'All Experiences', value: 'all', description: 'Browse every Tasmania destination' },
    { label: 'Bruny Island', value: 'Bruny Island', description: 'Gourmet & wildlife tours' },
    { label: 'Mount Wellington', value: 'Mount Wellington', description: 'Summit & Richmond day trips' },
];

const seoHighlights = [
    {
        title: 'Bruny Island Highlights',
        bullets: [
            'Scenic ferry across the D’Entrecasteaux Channel',
            'The Neck Lookout & Truganini steps',
            'Adventure Bay walks and white wallaby spotting',
            'Curated tastings: cheese, oysters, chocolate, honey',
        ],
    },
    {
        title: 'Mount Wellington & Richmond Highlights',
        bullets: [
            'kunanyi/Mount Wellington summit boardwalks',
            'Optional Organ Pipes and fern tree forest stops',
            'Richmond Village heritage strolls and cafes',
            'Complimentary warm drinks and flexible weather plans',
        ],
    },
];

function DestinationInner() {
    const [activeTab, setActiveTab] = useState('tab-grid');
    const [currentPage, setCurrentPage] = useState(1);
    const [activeFilter, setActiveFilter] = useState('all');
    const postsPerPage = 9;

    const filteredPosts = useMemo(() => {
        if (activeFilter === 'all') return posts;
        return posts.filter((post) => post.title?.includes(activeFilter));
    }, [activeFilter]);

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <section className="space">
            <div className="container">
                <div className="th-sort-bar">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-4">
                            <div className="search-form-area">
                                <div className="destination-filter">
                                    <label htmlFor="destinationFilter" className="text-uppercase fw-bold small mb-1">
                                        Filter by Tasmania destination
                                    </label>
                                    <select
                                        id="destinationFilter"
                                        className="form-select"
                                        value={activeFilter}
                                        onChange={(e) => {
                                            setActiveFilter(e.target.value);
                                            setCurrentPage(1);
                                        }}
                                    >
                                        {seoFilters.map((filter) => (
                                            <option key={filter.value} value={filter.value}>
                                                {filter.label}
                                            </option>
                                        ))}
                                    </select>
                                    <p className="filter-description mt-2 small text-muted">
                                        {seoFilters.find((filter) => filter.value === activeFilter)?.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-auto">
                            <div className="sorting-filter-wrap">
                                <div className="nav" role="tablist">
                                    <Link
                                        to="#"
                                        id="tab-destination-grid"
                                        data-bs-toggle="tab"
                                        data-bs-target="#tab-grid"
                                        role="tab"
                                        aria-controls="tab-grid"
                                        aria-selected="true"
                                        className={`${activeTab === 'tab-grid' ? 'active' : ''}`}
                                        type="button"
                                        onClick={() => setActiveTab('tab-grid')}
                                    >
                                        <i className="fa-light fa-grid-2" />
                                    </Link>
                                    <Link
                                        to="#"
                                        id="tab-destination-list"
                                        data-bs-toggle="tab"
                                        data-bs-target="#tab-list"
                                        role="tab"
                                        aria-controls="tab-list"
                                        aria-selected="false"
                                        className={`${activeTab === 'tab-list' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('tab-list')}
                                    >
                                        <i className="fa-solid fa-list" />
                                    </Link>
                                </div>
                                <div className="destination-intro seo-copy ms-3">
                                    <h2 className="h5 mb-1">Tasmania destinations curated by a Hobart travel agency</h2>
                                    <p className="mb-0 text-muted">
                                        Compare Bruny Island wildlife tours, Mount Wellington summit drives, and Richmond Village add-ons. Every itinerary departs from Hobart with Safe Travel and Tour Services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gy-4 align-items-start my-4">
                    {seoHighlights.map((highlight) => (
                        <div key={highlight.title} className="col-md-6">
                            <div className="destination-highlight card h-100 shadow-sm">
                                <div className="card-body">
                                    <h3 className="h5 mb-3">{highlight.title}</h3>
                                    <ul className="list-unstyled mb-3">
                                        {highlight.bullets.map((bullet) => (
                                            <li key={bullet} className="d-flex align-items-start mb-2">
                                                <i className="fa-solid fa-check text-primary me-2 mt-1" aria-hidden="true" />
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/tour" className="th-btn style4 th-icon">
                                        View Itineraries
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-xxl-9 col-lg-8">
                        <div className="tab-content" id="nav-tabContent">
                            <div className={`tab-pane fade ${activeTab === 'tab-grid' ? 'show active' : ''}`} id="tab-grid" role="tabpanel"
                            >
                                <div className="row gy-30">
                                    {currentPosts.map((data, index) => (
                                        <div key={index} className="col-xxl-4 col-xl-6">
                                            <DestinationCard
                                                destinationID={data.id}
                                                destinationImage={`${data.image}`}
                                                destinationTitle={data.title}
                                                destinationPrice={data.price}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={`tab-pane fade ${activeTab === 'tab-list' ? 'show active' : ''}`} id="tab-list" role="tabpanel"
                            >
                                <div className="row gy-30">
                                    {currentPosts.map((data, index) => (
                                        <div key={index} className="col-12">
                                            <DestinationCardTwo
                                                destinationID={data.id}
                                                destinationImage={`${data.image}`}
                                                destinationTitle={data.title}
                                                destinationPrice={data.price}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="th-pagination text-center mt-60 mb-0">
                            <ul>
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <li key={i}>
                                        <Link
                                            className={currentPage === i + 1 ? 'active' : ''}
                                            to="#"
                                            onClick={() => handlePageChange(i + 1)}
                                        >
                                            {i + 1}
                                        </Link>
                                    </li>
                                ))}
                                {currentPage < totalPages && (
                                    <li>
                                        <Link className="next-page" to="#" onClick={() => handlePageChange(currentPage + 1)}>
                                            Next <img src="/assets/img/icon/arrow-right4.svg" alt="" />
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4">
                        <aside className="sidebar-area style2">
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
                                className="widget widget_offer  "
                                data-bg-src="/assets/img/bg/widget_bg_1.jpg"
                                style={{ backgroundImage: "url(/assets/img/bg/widget_bg_1.jpg)" }}
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
            <div className="destination-cta text-center mt-5">
                <h3 className="h4 mb-3">Need help choosing the right Tasmania destination?</h3>
                <p className="mb-4 text-muted">
                    Speak with our Hobart-based travel planners to compare Bruny Island departures, Mount Wellington add-ons, and private charter upgrades tailored to your group.
                </p>
                <Link to="/contact" className="th-btn style3 th-icon">
                    Chat with Safe Travel Experts
                </Link>
            </div>
        </section>

    )
}

export default DestinationInner
