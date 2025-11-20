import React, { useState } from 'react';
import TourguideCard from './TourguideCard';
import posts from '../data/data-guide.json';

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
            </div>
        </section>
    );
}

export default TourGuideInner;
