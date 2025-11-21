import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import posts from '../data/data-activities.json';
import ActivitiesCard from './ActivitiesCard';

const activityFilters = [
    { label: 'All Activities', value: 'all' },
    { label: 'Bruny Island', value: 'Bruny Island' },
    { label: 'Mount Wellington', value: 'Mount Wellington' },
    { label: 'Richmond', value: 'Richmond' },
];

const sidebarHighlights = [
    {
        title: 'Top Tasmania activity categories',
        items: [
            'Bruny Island scenic walks and tastings',
            'Mount Wellington summit viewpoints',
            'Richmond Village heritage and honey trails',
            'Wildlife encounters: white wallabies, seals, sea eagles',
            'Chocolate, cheese, and oyster tastings',
        ],
    },
    {
        title: 'Hobart-based travel tips',
        items: [
            'Depart from Brooke Street Pier with confirmed pickups',
            'Pack layers for summit breezes and coastal walks',
            'Advise dietary needs for tastings during booking',
            'Choose private charters for photographers and families',
        ],
    },
];

function ActivitiesInner() {
    const [currentPage, setCurrentPage] = useState(1);
    const [activeFilter, setActiveFilter] = useState('all');
    const postsPerPage = 8;

    const filteredPosts = useMemo(() => {
        if (activeFilter === 'all') return posts;
        return posts.filter((post) => post.title.includes(activeFilter));
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
                <div className="row">
                    <div className="col-xxl-8 col-lg-7">
                        <div className="destination-filter d-flex align-items-center mb-4">
                            <label htmlFor="activityFilter" className="text-uppercase fw-bold small me-3">
                                Filter by region
                            </label>
                            <select
                                id="activityFilter"
                                className="form-select w-auto"
                                value={activeFilter}
                                onChange={(e) => {
                                    setActiveFilter(e.target.value)
                                    setCurrentPage(1)
                                }}
                            >
                                {activityFilters.map((filter) => (
                                    <option key={filter.value} value={filter.value}>
                                        {filter.label}
                                    </option>
                                ))}
                            </select>
                        </div>
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
                            {sidebarHighlights.map((highlight) => (
                                <div key={highlight.title} className="widget widget_categories">
                                    <h3 className="widget_title">{highlight.title}</h3>
                                    <ul>
                                        {highlight.items.map((item) => (
                                            <li key={item}>
                                                <i className="fa-light fa-square-check" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </aside>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ActivitiesInner
