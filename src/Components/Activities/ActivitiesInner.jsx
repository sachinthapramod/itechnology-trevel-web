import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import posts from '../data/data-activities.json';
import ActivitiesCard from './ActivitiesCard';

function ActivitiesInner() {
    const [value, setValue] = useState(30);
    const handleSliderChange = (e) => {
        setValue(e.target.value);
    };
    const priceFrom = ((value / 100) * 1000).toFixed(2);
    const priceTo = 1000;

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 8;

    const totalPages = Math.ceil(posts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <section className="space">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-lg-7">
                        <div className="row gy-24 gx-24">
                            {currentPosts.map((data, index) => (
                                <div key={index} className="col-md-6">
                                    <ActivitiesCard
                                        activitiesID={data.id}
                                        activitiesImage={`${data.image}`}
                                        activitiesTitle={data.title}
                                        activitiesPrice={data.price}
                                    />
                                </div>
                            ))}
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
                            <div className="widget widget_categories  ">
                                <h3 className="widget_title">Activity Themes</h3>
                                <ul>
                                    <li>
                                        <Link to="/activities">
                                            <i className="fa-light fa-square-check" />
                                            Bruny Island Scenic Walks
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                    <li>
                                        <Link to="/activities">
                                            <i className="fa-light fa-square-check" />
                                            Wildlife & Lookouts
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                    <li>
                                        <Link to="/activities">
                                            <i className="fa-light fa-square-check" />
                                            Chocolate & Cheese Tastings
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                    <li>
                                        <Link to="/activities">
                                            <i className="fa-light fa-square-check" />
                                            Mount Wellington Viewpoints
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                    <li>
                                        <Link to="/activities">
                                            <i className="fa-light fa-square-check" />
                                            Gourmet & Honey Trails
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget widget_price_filter  ">
                                <h4 className="widget_title">Filter By Price</h4>
                                <div className="price_slider_wrapper">
                                    <div className="price_label">
                                        Price: <span className="from">${priceFrom} </span> — <span className="to">${priceTo}</span>
                                    </div>
                                    <div className="price_slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                                        {/* Slider Range */}
                                        <div
                                            className="ui-slider-range ui-corner-all ui-widget-header"
                                            style={{ left: '0%', width: `${value}%` }}
                                        ></div>

                                        {/* First Handle */}
                                        <span
                                            tabIndex="0"
                                            className="ui-slider-handle ui-corner-all ui-state-default"
                                            style={{ left: '0%' }}
                                        ></span>

                                        {/* Second Handle */}
                                        <span
                                            tabIndex="0"
                                            className="ui-slider-handle ui-corner-all ui-state-default"
                                            style={{ left: `${value}%` }}
                                        ></span>

                                        {/* Hidden Input range to control the slider */}
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={value}
                                            onChange={handleSliderChange}
                                            className="slider-input"
                                            style={{ opacity: 0, position: 'absolute', zIndex: '1', top: '-22px', padding: '0', cursor:'pointer' }}  // Hides the input
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="widget widget_categories  ">
                                <h3 className="widget_title">Duration</h3>
                                <ul>
                                    <li>
                                        <Link to="/activities">
                                            <i className="fa-light fa-square-check" />
                                            Half-Day Tastings (4-5 hrs)
                                        </Link>
                                        <span>(3)</span>
                                    </li>
                                    <li>
                                        <Link to="/activities">
                                            <i className="fa-light fa-square-check" />
                                            Full Day Explorations (8-9 hrs)
                                        </Link>
                                        <span>(5)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget widget_categories  ">
                                <h3 className="widget_title">Tour Format</h3>
                                <ul>
                                    <li>
                                        <Link to="/activities">
                                            <i className="fa-light fa-square-check" />
                                            Small Group Hosted
                                        </Link>
                                        <span>(4)</span>
                                    </li>
                                    <li>
                                        <Link to="/activities">
                                            <i className="fa-light fa-square-check" />
                                            Private & Custom
                                        </Link>
                                        <span>(4)</span>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ActivitiesInner
