import React from 'react';
import { Link, useParams } from 'react-router-dom';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Posts from '../data/data-guide.json';

function TourGuiderDetailsMain() {
    const { id } = useParams();
    const { ref, inView } = useInView({ triggerOnce: true }); // ✅ Hook moved to the top

    const guidePost = Posts.find(post => post.id === parseInt(id));

    if (!guidePost) {
        return <div>Post not found!</div>;
    }

    const guideName = guidePost.name || guidePost.title;
    const guideRole = guidePost.role || "Tasmania Tour Specialist";
    const phoneNumber = guidePost.phone || "+61 3 6248 8200";
    const emailAddress = guidePost.email || "Info@safetravelandtourservices.com.au";

    const counters = [
        { value: guidePost.experienceYears || 5, suffix: "+", title: "Years Guiding" },
        { value: guidePost.guestsHosted || 1200, suffix: "+", title: "Guests Hosted" },
        { value: guidePost.fiveStarReviews || 200, suffix: "+", title: "5-Star Reviews" },
        { value: (guidePost.signatureTours && guidePost.signatureTours.length) || 2, suffix: "+", title: "Signature Tours" }
    ];

    return (
        <section className="space">
            <div className="container">
                <div className="team-details">
                    <div className="row gy-5 mb-3 mb-xl-5 pb-xl-4">
                        <div className="col-xl-4">
                            <div className="th-team team-grid">
                                <div className="team-img">
                                    <img src={`/assets/img/team/${guidePost.thumb}`} alt={`${guideName} portrait`} />
                                </div>
                                <div className="team-img2">
                                    <img src={`/assets/img/team/${guidePost.bannerImg}`} alt={`${guideName} hosting Tasmania tour`} />
                                </div>
                                <div className="team-content">
                                    <div className="media-body">
                                        <h3 className="box-title">
                                            <Link to="#">{guideName}</Link>
                                        </h3>
                                        <span className="team-desig">{guideRole}</span>
                                        {guidePost.focus && (
                                            <p className="team-focus mt-10">
                                                <i className="fa-light fa-location-dot" /> {guidePost.focus}
                                            </p>
                                        )}
                                        <div className="th-social">
                                            <Link target="_blank" to="https://facebook.com/">
                                                <i className="fab fa-facebook-f" />
                                            </Link>
                                            <Link target="_blank" to="https://twitter.com/">
                                                <i className="fab fa-twitter" />
                                            </Link>
                                            <Link target="_blank" to="https://linkedin.com/">
                                                <i className="fab fa-linkedin-in" />
                                            </Link>
                                            <Link target="_blank" to="https://youtube.com/">
                                                <i className="fab fa-youtube" />
                                            </Link>
                                            <Link target="_blank" to="https://instagram.com/">
                                                <i className="fab fa-instagram" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 ps-3 ps-xl-5 pe-xl-4">
                            <div className="team-about">
                                <h2 className="team-about_title">About {guideName}</h2>
                                <p className="team-about_text mb-25">
                                    {guidePost.bio || "Our guides live and breathe Tasmania. They balance genuine storytelling with thoughtful hosting so every traveller feels at ease."}
                                </p>
                                <p className="team-about_text mb-25">
                                    {guidePost.approach || "We customise each day around the weather, tide charts, and our guests’ interests—whether that’s an extra tasting stop or more time at a scenic lookout."}
                                </p>
                                {guidePost.experienceYears && (
                                    <h5 className="box-title">{guidePost.experienceYears}+ Years of Guiding Tasmania</h5>
                                )}
                                <p className="team-about_text mb-25">
                                    {guidePost.highlight || "From ferry crossings to summit lookouts, our team keeps every moment safe, smooth, and story-rich."}
                                </p>
                                {(guidePost.focus || guidePost.languages || guidePost.specialties) && (
                                    <div className="team-details-info mb-30">
                                        <ul>
                                            {guidePost.focus && (
                                                <li>
                                                    <strong>Guiding Focus:</strong> {guidePost.focus}
                                                </li>
                                            )}
                                            {guidePost.languages && guidePost.languages.length > 0 && (
                                                <li>
                                                    <strong>Languages:</strong> {guidePost.languages.join(', ')}
                                                </li>
                                            )}
                                            {guidePost.specialties && guidePost.specialties.length > 0 && (
                                                <li>
                                                    <strong>Specialties:</strong> {guidePost.specialties.join(' • ')}
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                )}
                                {guidePost.signatureTours && guidePost.signatureTours.length > 0 && (
                                    <>
                                        <h4 className="box-title">Signature Tours</h4>
                                        <div className="checklist mb-25">
                                            <ul>
                                                {guidePost.signatureTours.map((tour, idx) => (
                                                    <li key={idx}>{tour}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                )}
                                {guidePost.certifications && guidePost.certifications.length > 0 && (
                                    <>
                                        <h4 className="box-title">Credentials & Training</h4>
                                        <div className="checklist mb-25">
                                            <ul>
                                                {guidePost.certifications.map((cert, idx) => (
                                                    <li key={idx}>{cert}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                )}
                                <div ref={ref} className="counter-box-wrap">
                                    {counters.map((counter, index) => (
                                        <div key={index} className="counter-box">
                                            <h2 className="counter-box_number">
                                                <CountUp
                                                    start={0}
                                                    end={inView ? counter.value : 0}
                                                    duration={2}
                                                />
                                                {counter.suffix}
                                            </h2>
                                            <span className="counter-box_title">{counter.title}</span>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                    <h2 className="box-title mb-30">Contact With Me</h2>
                    <div className="row gy-4 justify-content-center">
                        <div className="col-xl-4 col-lg-6">
                            <div className="about-contact-grid style2">
                                <div className="about-contact-icon">
                                    <img src="/assets/img/icon/location-dot2.svg" alt="" />
                                </div>
                                <div className="about-contact-details">
                                    <h6 className="box-title">Our Address</h6>
                                    <p className="about-contact-details-text">
                                        6/14 Cessna Way
                                    </p>
                                    <p className="about-contact-details-text">
                                        Cambridge TAS 7170, Australia
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="about-contact-grid">
                                <div className="about-contact-icon">
                                    <img src="/assets/img/icon/call.svg" alt="" />
                                </div>
                                <div className="about-contact-details">
                                    <h6 className="box-title">Phone Number</h6>
                                    <p className="about-contact-details-text">
                                        <Link to={`tel:${phoneNumber.replace(/\\s+/g, '')}`}>{phoneNumber}</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="about-contact-grid">
                                <div className="about-contact-icon">
                                    <img src="/assets/img/icon/mail.svg" alt="" />
                                </div>
                                <div className="about-contact-details">
                                    <h6 className="box-title">Email Address</h6>
                                    <p className="about-contact-details-text">
                                        <Link to={`mailto:${emailAddress}`}>{emailAddress}</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default TourGuiderDetailsMain
