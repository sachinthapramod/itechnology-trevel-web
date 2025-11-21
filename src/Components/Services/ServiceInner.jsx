import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import posts from '../data/data-service.json';

const serviceHighlights = [
    {
        title: 'Bruny Island Services',
        bullets: [
            'Ferry logistics, park permits, and gourmet producer scheduling',
            'Guided walks to The Neck Lookout, Adventure Bay, and Cape Bruny',
            'White wallaby, seal, and sea eagle spotting with local guides',
        ],
    },
    {
        title: 'Mount Wellington & Richmond Services',
        bullets: [
            'Summit weather monitoring and itinerary flexibility',
            'Richmond Village heritage tours and tasting reservations',
            'Private charter upgrades with photo and sunset add-ons',
        ],
    },
];

function ServiceInner() {
    return (
        <section className="position-relative overflow-hidden space" id="destination-sec">
            <div className="container shape-mockup-wrap">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-xl-8">
                        <span className="sub-title">Tasmania Tour Services</span>
                        <h2 className="sec-title">Hobart-Based Travel Agency Services for Bruny Island & Mount Wellington</h2>
                        <p className="mb-0 text-muted">
                            Safe Travel and Tour Services handles every detail for Tasmania group tours, private charters, and cruise ship shore excursions. From Hobart hotel pickups to national park permits, ferry bookings, gourmet tastings, and Mount Wellington weather backups, our family-owned agency delivers SEO-ready, guest-ready experiences across southern Tasmania.
                        </p>
                    </div>
                </div>

                <div className="row gy-4 gx-4">
                    {posts.map((data, index) => (
                        <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                            <ServiceCard
                                serviceID={data.id}
                                serviceImage={data.image}
                                serviceTitle={data.title}
                                serviceItem={data.item}
                            />
                        </div>
                    ))}
                </div>

                <div className="row gy-4 mt-5">
                    {serviceHighlights.map((highlight) => (
                        <div key={highlight.title} className="col-lg-6">
                            <div className="service-highlight card h-100 shadow-sm">
                                <div className="card-body">
                                    <h3 className="h5 mb-3">{highlight.title}</h3>
                                    <ul className="list-unstyled mb-0">
                                        {highlight.bullets.map((bullet) => (
                                            <li key={bullet} className="d-flex align-items-start mb-2">
                                                <i className="fa-solid fa-check text-primary me-2 mt-1" aria-hidden="true" />
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="service-cta text-center mt-5">
                    <h3 className="h4 mb-3">Need a bespoke Tasmania tour solution?</h3>
                    <p className="mb-4 text-muted">
                        Our Hobart travel agency designs SEO-friendly itineraries for families, corporate groups, and cruise passengers. Combine Bruny Island tastings with Mount Wellington views, Richmond heritage walks, or Bonorong wildlife encounters in one seamless schedule.
                    </p>
                    <Link to="/contact" className="th-btn style3 th-icon">
                        Build My Tasmania Itinerary
                    </Link>
                </div>

                {/* Shapes */}
                <div className="shape-mockup shape1 d-none d-xxl-block" style={{ bottom: '17%', right: '-9%' }}>
                    <img src="/assets/img/shape/shape_1.png" alt="shape" />
                </div>
                <div className="shape-mockup shape2 d-none d-xl-block" style={{ bottom: '8%', right: '-8%' }}>
                    <img src="/assets/img/shape/shape_2.png" alt="shape" />
                </div>
                <div className="shape-mockup shape3 d-none d-xxl-block" style={{ bottom: '15%', right: '-4%' }}>
                    <img src="/assets/img/shape/shape_3.png" alt="shape" />
                </div>
            </div>
        </section>
    );
}

export default ServiceInner;
