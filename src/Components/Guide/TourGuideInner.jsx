import React, { useState } from 'react';
import TourguideCard from './TourguideCard';
import posts from '../data/data-guide.json';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config/constants';

function TourGuideInner() {
    const [currentPage] = useState(1);
    const postsPerPage = 6;

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <section className="space" id="team-sec">
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-xl-8">
                        <span className="sub-title">Meet Our Hobart Guides</span>
                        <h2 className="sec-title">Accredited Tasmania Tour Leaders with Local Expertise</h2>
                        <p className="mb-0 text-muted">
                            Safe Travel and Tour Services is led by Hobart-based guides who specialise in Bruny Island wildlife encounters, Mount Wellington summit narratives, Richmond heritage walks, and gourmet producer introductions. Every tour is hosted with safety, storytelling, and genuine Australian hospitality.
                        </p>
                    </div>
                </div>
                <div className="row gx-30" style={{ rowGap: '110px' }}>
                    {currentPosts.map((data) => (
                        <div key={data.id} className="col-xl-4 col-md-6">
                            <TourguideCard
                                guideID={data.id}
                                guideThumb={`${data.thumb}`}
                                guideImage={`${data.image}`}
                                guideName={data.name || data.title}
                                guideRole={data.role}
                                guideFocus={data.focus}
                            />
                        </div>
                    ))}
                </div>
                <div className="text-center mt-5">
                    <h3 className="h4 mb-3">Need a specific guide or language support?</h3>
                    <p className="text-muted mb-4">
                        We match travellers with the best Tasmania guide for Bruny Island, Mount Wellington, wildlife sanctuaries, or cruise ship shore excursions. Private charters can request photographers, multilingual hosts, or special-interest specialists.
                    </p>
                    <Link to={ROUTES.contact} className="th-btn style3 th-icon">
                        Request Your Ideal Guide
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default TourGuideInner;
