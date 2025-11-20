import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Posts from '../data/data-post.json';

function BlogDetailsMain() {
    const { id } = useParams();
    const blogPost = Posts.find(post => post.id === parseInt(id));

    if (!blogPost) {
        return <div>Post not found!</div>;
    }

    // Blog content based on post ID
    const blogContents = {
        1: {
            author: "Sarah Mitchell",
            date: "January 15, 2025",
            location: "Bruny Island",
            title: "Discovering Bruny Island: A Complete Guide to Tasmania's Island Paradise",
            intro: "Just a short drive and ferry ride from Hobart, Bruny Island offers dramatic coastlines, gourmet indulgence, and unforgettable wildlife moments. This guide covers everything you need to plan the perfect one-day tour with Safe Travel and Tour Services.",
            paragraph1: "Your Bruny Island adventure begins at Brooke Street Pier where your guide shares the day’s plan before we travel to Kettering for the ferry. The 20-minute crossing across the D'Entrecasteaux Channel sets the tone with sweeping views of Oyster Cove, fishing boats, and seabirds. Keep your camera ready—dolphins frequently surf the bow wave.",
            paragraph2: "Once ashore we explore North and South Bruny, linked by the slender isthmus called The Neck. A short climb up the timber boardwalk rewards you with one of Tasmania’s best photo opportunities: 360-degree views of sandy beaches, turquoise water, and rolling hills. Interpretive signs explain the history of Truganini Lookout and the island’s unique formation.",
            blockquote: "Bruny Island combines Tasmanian wilderness with artisan flavours. Expect rugged sea cliffs, white wallabies at Adventure Bay, and the freshest cheese and oysters you’ll taste anywhere in Australia.",
            blockquoteAuthor: "Olivia Bennett, Lead Guide",
            paragraph3: "Adventure Bay is your base for wildlife and beach walks. Our guides know the best spots to find the famous white wallabies, wedge-tailed eagles, and seasonal penguin burrows. Depending on the conditions we may walk to Grass Point, visit the Bligh Museum, or simply relax on the beach with a locally roasted coffee.",
            paragraph4: "Bruny is equally renowned for its food. Safe Travel tours include curated tastings from cheesemakers, oyster farmers, chocolatiers, and honey producers. We pre-book tastings to avoid queues and make sure dietary preferences are catered for. There is always enough free time to purchase extra treats or a platter for lunch.",
            heading: "What to Expect on Your Bruny Island Tour",
            paragraph5: "Our full-day experiences depart Hobart at 7:30 AM and return around 5:00 PM. The itinerary balances lookouts, beach walks, tastings, and wildlife encounters with regular comfort stops. Transport is in modern, air-conditioned vehicles with charging ports, cold water, and sunscreen supplied.",
            paragraph6: "We intentionally keep group sizes small so guides can tailor commentary to your interests—photography, geology, birdlife, or gourmet producers. Private charters follow the same structure but allow additional time at Luggaboine Circuit, Cape Bruny Lighthouse, or premium dining venues.",
            keyHighlights: [
                "Scenic ferry ride across the D'Entrecasteaux Channel",
                "Panoramic vistas from The Neck Lookout and Truganini steps",
                "Wildlife encounters with white wallabies, seals, and sea eagles",
                "Curated tastings of cheese, oysters, chocolate, and honey",
                "Guided walks at Adventure Bay and quiet southern beaches",
                "Locally hosted commentary covering history, geology, and culture"
            ],
            itinerary: [
                { time: "7:30 AM", detail: "Depart Hobart, hotel pickups finalised, travel to Kettering." },
                { time: "8:30 AM", detail: "Ferry crossing with commentary and photo opportunities." },
                { time: "9:00 AM", detail: "Arrive North Bruny, visit The Neck Lookout and penguin rookery boardwalk." },
                { time: "10:30 AM", detail: "Adventure Bay walk, wildlife spotting, and local coffee stop." },
                { time: "12:00 PM", detail: "Cheese, oyster, chocolate, and honey tastings with time for lunch." },
                { time: "2:00 PM", detail: "South Bruny scenic drive, optional lighthouse or beach visits." },
                { time: "4:30 PM", detail: "Return ferry and scenic drive back to Hobart." }
            ],
            tips: [
                "Wear layered clothing—coastal breezes can be cool even in summer.",
                "Bring a reusable water bottle; refills are available throughout the day.",
                "Pack reef-safe sunscreen and comfortable walking shoes for boardwalks.",
                "Pre-book during peak months (Dec–Mar) as departures sell out quickly.",
                "Advise dietary needs when booking so tastings can be customised."
            ],
            faqs: [
                {
                    question: "Do I need to book the Bruny Island ferry separately?",
                    answer: "No. Ferry tickets, National Park passes, tastings, and transport are all included in Safe Travel tour packages."
                },
                {
                    question: "Can you accommodate vegetarians or gluten-free travellers?",
                    answer: "Absolutely. We partner with producers who provide alternative platters—just let us know your requirements at the time of booking."
                },
                {
                    question: "Is the tour suitable for children?",
                    answer: "Yes. Our guides include shorter walks and wildlife moments to keep younger travellers engaged. Child seats can be arranged on request."
                }
            ],
            cta: {
                text: "Ready to experience Bruny Island with Safe Travel?",
                description: "See available departure dates, compare group or private options, and secure your seat online.",
                button: "View Bruny Island Tours",
                link: "/tour?destination=Bruny%20Island"
            },
            tags: ["Bruny Island", "Tasmania Tours", "Wildlife", "Gourmet Travel"]
        },
        2: {
            author: "James Wilson",
            date: "January 18, 2025",
            location: "Mount Wellington",
            title: "Mount Wellington Summit: Your Ultimate Guide to Hobart's Iconic Peak",
            intro: "Standing 1,271 metres above sea level, kunanyi / Mount Wellington frames the Hobart skyline and offers one of Australia’s most accessible alpine experiences. Use this guide to plan a stress-free summit visit plus Richmond Village add-on.",
            paragraph1: "Mount Wellington’s microclimates change rapidly, so travelling with a Safe Travel guide means you get real-time weather updates and flexible timing. As we ascend, the landscape shifts from temperate rainforest to snow gum forest and finally to alpine boulder fields carved by ancient glaciers.",
            paragraph2: "Summit boardwalks and lookouts sit above the Organ Pipes cliffs, revealing uninterrupted views across Hobart, the Derwent River, and out to the Tasman Peninsula. On clear days you can see Bruny Island to the south and the Hazards mountain range on the east coast.",
            blockquote: "Mount Wellington delivers big-mountain drama without requiring technical hiking skills. Our guides bring spare jackets, hot drinks, and the storytelling that brings kunanyi’s cultural significance to life.",
            blockquoteAuthor: "Ethan MacGregor, Expedition Leader",
            paragraph3: "After the summit, we descend to Richmond Historic Village—a perfect contrast to the alpine environment. Established in the 1820s, Richmond is home to Australia’s oldest convict-built bridge. Guests can wander boutique shops, visit Richmond Gaol, or enjoy wood-fired bakery treats.",
            paragraph4: "We design enough free time for lunch, photography, and shopping before returning to Hobart in the late afternoon. If the weather closes in on the summit, we adjust the schedule to visit secret lower-level lookouts, waterfalls, or Coal River Valley wineries instead.",
            heading: "Planning Your Mount Wellington Visit",
            paragraph5: "Our Mount Wellington tours are nine-hour experiences departing from Brooke Street Pier with CBD hotel pickups available. Vehicles carry cold-weather gear, binoculars, Wi-Fi, and charging cables so you can share summit photos instantly.",
            paragraph6: "Each guide is trained in alpine safety and monitors conditions via Parks Tasmania updates. If winds exceed safe limits, we pivot to sheltered sites while still delivering the Richmond component, ensuring you get maximum value from the day.",
            keyHighlights: [
                "Guided summit visit with historical and geological interpretation",
                "Complimentary warm drinks and spare jackets on chilly days",
                "Photo stops at the Organ Pipes, Chalet, and Fern Tree",
                "Richmond Village exploration with time for cafes and galleries",
                "Flexible itineraries designed around the day’s weather patterns",
                "Small-group format for personalised commentary"
            ],
            itinerary: [
                { time: "8:00 AM", detail: "Depart Hobart, brief on weather conditions, drive through Fern Tree forests." },
                { time: "9:00 AM", detail: "Summit boardwalks, viewing shelters, and panoramas across southern Tasmania." },
                { time: "11:00 AM", detail: "Optional short walk to the Organ Pipes lookout or Cascade Gardens." },
                { time: "12:30 PM", detail: "Arrive in Richmond Village for curated history walk and lunch break." },
                { time: "2:30 PM", detail: "Free time for shops, galleries, or the gaol; optional wine tasting add-on." },
                { time: "4:30 PM", detail: "Return to Hobart via Coal River Valley scenic route." }
            ],
            tips: [
                "Pack a windproof jacket—even in summer the summit can feel like winter.",
                "Charge your phone or bring a power bank for photos; we also provide USB charging.",
                "Wear comfortable shoes for uneven boardwalks and village cobblestones.",
                "Let us know if you want to add a vineyard stop or custom pickup location.",
                "Check forecast but trust your guide—conditions can change within minutes."
            ],
            faqs: [
                {
                    question: "What happens if the summit is closed?",
                    answer: "Safety comes first. If the pinnacle road closes, we access mid-mountain lookouts, Wellington Falls trails, or extend time in Richmond and the Coal River Valley."
                },
                {
                    question: "Is the tour suitable for mobility-impaired travellers?",
                    answer: "Yes. Boardwalks are largely accessible, and we can tailor the day with shorter walks or additional Richmond time. Please advise mobility requirements when booking."
                },
                {
                    question: "Can we combine Mount Wellington with another destination?",
                    answer: "Private charters can add Bonorong Wildlife Sanctuary, MONA, or local wineries. Ask our team for bespoke itineraries."
                }
            ],
            cta: {
                text: "Secure Your Mount Wellington Experience",
                description: "Choose between our small-group departures or a fully private summit charter with Richmond add-ons.",
                button: "Plan Mount Wellington Tour",
                link: "/tour?destination=Mount%20Wellington"
            },
            tags: ["Mount Wellington", "Hobart Day Tours", "Richmond Village", "Tasmania Travel"]
        },
        3: {
            author: "Emma Thompson",
            date: "January 22, 2025",
            location: "Richmond",
            title: "Richmond Village: Exploring Tasmania's Historic Georgian Architecture",
            intro: "Richmond Village offers one of the best-preserved snapshots of colonial Tasmania. Use this guide to uncover the must-see landmarks, foodie stops, and photography angles in this charming Georgian township.",
            paragraph1: "Located just 25 minutes from Hobart, Richmond is home to Australia’s oldest convict-built bridge (1825). The sandstone arches glow golden at sunrise and sunset, making it a favourite stop for photographers and history lovers alike.",
            paragraph2: "The village streets are lined with 1820s-era cottages that now house galleries, antique stores, and providores. As you stroll along Bridge Street, listen to your guide share stories of early settlers, military barracks, and the thriving Coal River Valley farming community.",
            blockquote: "Richmond is where Tasmania’s convict history meets artisan makers. You can visit the gaol, taste local pinot, and still be back in Hobart for dinner.",
            blockquoteAuthor: "Harper Nguyen, Cultural Storyteller",
            paragraph3: "Richmond Gaol is a highlight for many guests. Built the same year as the bridge, it offers an immersive look into convict-era punishment, with solitary cells, chain gang yards, and displays of original artefacts. Safe Travel guides provide context so the experience feels informative rather than confronting.",
            paragraph4: "Beyond history, Richmond is a foodie hub. You can sample Coal River Farm chocolate, visit Puddleduck Vineyard, or enjoy a classic Tasmanian pie at the bakery. We plan enough free time for lunch, wine tastings, or shopping for handcrafted souvenirs.",
            heading: "What to See and Do in Richmond",
            paragraph5: "Our tours pair Richmond with Mount Wellington or Bonorong Wildlife Sanctuary, creating a full-day story arc of nature, wildlife, and heritage. The village itself is compact and walkable, making it ideal for travellers of all ages.",
            paragraph6: "Travelling with Safe Travel means your guide manages parking, shares local introductions, and knows which cafes have available tables. You can relax into the experience without worrying about logistics.",
            keyHighlights: [
                "Historic Richmond Bridge, gaol, and St John’s Church (Australia’s oldest Catholic church)",
                "Boutique shopping for Tasmanian crafts, ceramics, and jewellery",
                "Local wine and cheese tastings in the Coal River Valley",
                "Photography tips for sunrise, sunset, and night-sky shoots",
                "Family-friendly walks along the Coal River",
                "Flexible itineraries when paired with Mount Wellington or Bonorong"
            ],
            itinerary: [
                { time: "11:30 AM", detail: "Arrive in Richmond after Mount Wellington or Bonorong visit." },
                { time: "11:45 AM", detail: "Guided walk covering the bridge, gaol, and key heritage buildings." },
                { time: "12:30 PM", detail: "Free time for lunch at local cafes or farm-gate platters." },
                { time: "1:30 PM", detail: "Optional wine tasting, chocolate sampling, or shopping." },
                { time: "2:30 PM", detail: "Regroup for stories at St John’s Church before returning to Hobart." }
            ],
            tips: [
                "Bring a hat and sunscreen—Richmond can be warmer than the summit.",
                "Have a small budget for tastings or artisan goods; many makers operate boutique stalls.",
                "Ask your guide for the best angles of the bridge to avoid crowds.",
                "Combine Richmond with Bonorong if you want a wildlife element.",
                "Visit mid-week for quieter streets and shorter waits at cafes."
            ],
            faqs: [
                {
                    question: "How much walking is involved?",
                    answer: "The village loop is less than 2 km on mostly flat terrain, with plenty of benches and shaded spots for rests."
                },
                {
                    question: "Can I visit Richmond independently after the tour?",
                    answer: "Absolutely. We’re happy to drop you off in the village and arrange a later shuttle back to Hobart (additional cost applies)."
                },
                {
                    question: "Are there vegetarian or gluten-free dining options?",
                    answer: "Yes. Richmond’s cafes and bakeries offer plant-based and gluten-free menus—your guide can recommend the best spots."
                }
            ],
            cta: {
                text: "Add Richmond Village to Your Tasmania Itinerary",
                description: "Join a combined Mount Wellington + Richmond tour or request a private heritage charter tailored to your interests.",
                button: "Explore Richmond Tours",
                link: "/tour?destination=Richmond"
            },
            tags: ["Richmond Village", "Tasmania History", "Coal River Valley", "Heritage Travel"]
        },
        4: {
            author: "Michael Brown",
            date: "January 25, 2025",
            location: "Tasmania",
            title: "Group vs Private Tours: Which Tasmania Tour Experience is Right for You?",
            intro: "Should you explore Tasmania with a small group or book a private charter? This guide compares inclusions, pricing, flexibility, and guest profiles to help you choose the tour style that suits your travel goals.",
            paragraph1: "Group tours are ideal for sociable travellers who want value, structure, and the chance to meet like-minded explorers. Safe Travel limits group sizes to keep commentary personal while ensuring departures run daily—even during shoulder seasons.",
            paragraph2: "Private tours are perfect for families, photographers, or travellers with specific interests such as gourmet dining or in-depth history. You control the pace, start time, and stops. Guides adapt commentary to your passions and can even build itineraries around special occasions.",
            blockquote: "Both formats showcase Tasmania’s beauty. The right choice depends on how you like to travel, not what you might miss.",
            blockquoteAuthor: "Sienna Clarke, Experience Designer",
            paragraph3: "Group itineraries cover the Bruny Island essentials—The Neck, Adventure Bay, wildlife, and tastings—or the Mount Wellington + Richmond circuit. Schedules are optimised for daylight, ferry slots, and producer availability, so you can relax knowing everything is taken care of.",
            paragraph4: "Private charters allow extras such as sunrise lighthouse visits, vineyard lunches, or bonus wildlife sanctuaries. You can linger longer at photo stops, request detours, or end the tour at the airport if you’re flying out that evening.",
            heading: "Making Your Decision",
            paragraph5: "Budget is a factor: group tours start at $120–$190 per person, while private charters are priced per vehicle. Consider who you’re travelling with, how much flexibility you crave, and whether you want exclusive tasting sessions or time-sensitive photo projects.",
            paragraph6: "Regardless of format, every Safe Travel guest receives professional guiding, premium vehicles, National Park passes, and access to our concierge team for pre-trip advice.",
            keyHighlights: [
                "Group tours = value, fixed itineraries, guaranteed departures",
                "Private tours = flexibility, custom pacing, bespoke inclusions",
                "Both include hotel pickups, ferry tickets (if required), and gourmet tastings",
                "Guides share the same local expertise and safety focus across all formats",
                "Private groups can request multilingual guides or special occasion touches",
                "Group travellers benefit from meeting people who share their interests"
            ],
            tips: [
                "Travelling during peak season? Book early regardless of format to secure ferry and tasting slots.",
                "If you’re a photographer or foodie, list your non-negotiables so we can recommend the best fit.",
                "Families with young children often prefer private charters for nap-friendly pacing.",
                "Solo travellers love group tours for instant travel companions.",
                "Consider a hybrid approach: join a group for Bruny Island and book a private Mount Wellington sunset charter."
            ],
            faqs: [
                {
                    question: "Can we upgrade a group booking to private?",
                    answer: "Yes, subject to availability. Contact us at least 48 hours before departure to discuss upgrade options."
                },
                {
                    question: "What vehicles do you use for private tours?",
                    answer: "We operate premium SUVs and mini-coaches equipped with leather seating, climate control, and phone charging."
                },
                {
                    question: "Do private tours include tastings and ferry tickets?",
                    answer: "All essential inclusions (tastings, ferry fares, National Park fees) mirror the group offerings unless you request something bespoke."
                }
            ],
            cta: {
                text: "Need Help Choosing?",
                description: "Speak with our Hobart-based team to compare itineraries, request a quote, or design a hybrid itinerary.",
                button: "Chat With Our Tour Specialists",
                link: "/contact"
            },
            tags: ["Tasmania Tours", "Private Tours", "Group Travel", "Trip Planning"]
        }
    };

    const content = blogContents[parseInt(id)] || blogContents[1];

    return (
        <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
            <div className="container shape-mockup-wrap">
                <div className="row">
                    <div className="col-xxl-8 col-lg-7">
                        <div className="th-blog blog-single">
                            <div className="blog-img">
                                <img src={`/assets/img/blog/${blogPost.bannerImg}`} alt="Blog" />
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link className="author" to="/blog">
                                        <i className="fa-light fa-user" />
                                        by {content.author}
                                    </Link>
                                    <Link to="/blog">
                                        <i className="fa-regular fa-calendar" />
                                        {content.date}
                                    </Link>
                                    <Link to="#">
                                        <img src="/assets/img/icon/map.svg" alt="" />
                                        {content.location}
                                    </Link>
                                </div>
                                <h2 className="blog-title">
                                    {content.title}
                                </h2>
                                <p className="blog-text mb-30">
                                    {content.intro}
                                </p>
                                <p className="blog-text mb-30">
                                    {content.paragraph1}
                                </p>
                                <blockquote>
                                    <p>
                                        {content.blockquote}
                                    </p>
                                    <cite>{content.blockquoteAuthor}</cite>
                                </blockquote>
                                <p className="blog-text mt-5 mb-4">
                                    {content.paragraph2}
                                </p>
                                <p className="blog-text mt-5 mb-4">
                                    {content.paragraph3}
                                </p>
                                <h3 className="mt-4">
                                    {content.heading}
                                </h3>
                                <p className="">
                                    {content.paragraph4}
                                </p>
                                <div className="row gy-4">
                                    <div className="col-12">
                                        <div className="blog-img">
                                            <img
                                                className="w-100"
                                                src="/assets/img/blog/blog_inner_1.jpg"
                                                alt={content.title}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p className=" mb-0">
                                    {content.paragraph5}
                                </p>
                                <p>
                                    {content.paragraph6}
                                </p>
                                {content.keyHighlights && content.keyHighlights.length > 0 && (
                                    <>
                                        <h3 className="mt-4">Key Highlights</h3>
                                        <div className="checklist mb-30">
                                            <ul>
                                                {content.keyHighlights.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                )}
                                {content.itinerary && content.itinerary.length > 0 && (
                                    <>
                                        <h3 className="mt-4">Sample One-Day Itinerary</h3>
                                        <ol className="itinerary-list mb-30">
                                            {content.itinerary.map((item, idx) => (
                                                <li key={idx}>
                                                    <strong>{item.time}</strong> — {item.detail}
                                                </li>
                                            ))}
                                        </ol>
                                    </>
                                )}
                                {content.tips && content.tips.length > 0 && (
                                    <>
                                        <h3 className="mt-4">Travel Tips</h3>
                                        <ul className="list-unstyled mb-30">
                                            {content.tips.map((tip, idx) => (
                                                <li key={idx}>
                                                    <i className="fa-solid fa-circle-check me-2 text-primary" />
                                                    {tip}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                                {content.faqs && content.faqs.length > 0 && (
                                    <div className="mt-4 mb-40">
                                        <h3>Frequently Asked Questions</h3>
                                        <div className="faq-accordion">
                                            {content.faqs.map((faq, idx) => (
                                                <div className="faq-item" key={idx}>
                                                    <h4 className="faq-title">{faq.question}</h4>
                                                    <p className="faq-text">{faq.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {content.cta && (
                                    <div className="tour-cta-box">
                                        <h4>{content.cta.text}</h4>
                                        <p>{content.cta.description}</p>
                                        <Link to={content.cta.link} className="th-btn style3 mt-2">
                                            {content.cta.button}
                                        </Link>
                                    </div>
                                )}
                                <div className="share-links clearfix ">
                                    <div className="row justify-content-between">
                                        <div className="col-md-auto">
                                            <span className="share-links-title">Tags:</span>
                                            <div className="tagcloud">
                                                {content.tags.map((tag, index) => (
                                                    <Link key={index} to="/blog">{tag}</Link>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-auto text-xl-end">
                                            <div className="share-links_wrapp">
                                                <span className="share-links-title">Share:</span>
                                                <div className="social-links">
                                                    <Link to="https://www.facebook.com/">
                                                        <i className="fab fa-facebook-f" />
                                                    </Link>
                                                    <Link to="https://www.twitter.com/">
                                                        <i className="fab fa-twitter" />
                                                    </Link>
                                                    <Link to="https://www.instagram.com/">
                                                        <i className="fab fa-instagram" />
                                                    </Link>
                                                    <Link to="https://www.linkedin.com/">
                                                        <i className="fab fa-linkedin-in" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Share Links Area end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="th-comments-wrap ">
                            <h2 className="blog-inner-title h4"> Comments (03)</h2>
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
                                            <span className="commented-on">20Jun, 2024 08:56pm</span>
                                            <p className="text">
                                                Credibly pontificate transparent quality vectors with
                                                quality mindshare. Efficiently architect worldwide strategic
                                                theme areas after user.
                                            </p>
                                            <div className="reply_and_edit">
                                                <Link to="#" className="reply-btn">
                                                    <i className="fas fa-reply" />
                                                    Reply
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="children">
                                        <li className="th-comment-item">
                                            <div className="th-post-comment">
                                                <div className="comment-avater">
                                                    <img
                                                        src="/assets/img/blog/comment-author-2.jpg"
                                                        alt="Comment Author"
                                                    />
                                                </div>
                                                <div className="comment-content">
                                                    <div className="">
                                                        <h3 className="name">Jhon Abraham</h3>
                                                        <span className="commented-on">
                                                            25Jun, 2024 08:56pm
                                                        </span>
                                                    </div>
                                                    <p className="text">
                                                        It is different from airport transfer or port transfer,
                                                        which are services that pick you up
                                                    </p>
                                                    <div className="reply_and_edit">
                                                        <Link to="#" className="reply-btn">
                                                            <i className="fas fa-reply" />
                                                            Reply
                                                        </Link>
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
                                                src="/assets/img/blog/comment-author-3.jpg"
                                                alt="Comment Author"
                                            />
                                        </div>
                                        <div className="comment-content">
                                            <div className="">
                                                <h3 className="name">Anadi Juila</h3>
                                                <span className="commented-on">27Jun, 2024 08:56pm</span>
                                            </div>
                                            <p className="text">
                                                Credibly pontificate transparent quality vectors with
                                                quality mindshare. Efficiently architect worldwide strategic
                                                theme areas after user.
                                            </p>
                                            <div className="reply_and_edit">
                                                <Link to="#" className="reply-btn">
                                                    <i className="fas fa-reply" />
                                                    Reply
                                                </Link>
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
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input
                                                type="text"
                                                placeholder="Full Name*"
                                                className="form-control"
                                                required
                                            />
                                            <i className="far fa-user" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input
                                                type="text"
                                                placeholder="Your Email*"
                                                className="form-control"
                                                required
                                            />
                                            <i className="far fa-envelope" />
                                        </div>
                                        <div className="col-12 form-group">
                                            <input
                                                type="text"
                                                placeholder="Website"
                                                className="form-control"
                                                required
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
                                            <button className="th-btn" type="submit">
                                                Send Message
                                                <img src="/assets/img/icon/plane2.svg" alt="" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-5">
                        <aside className="sidebar-area">
                            <div className="widget widget_search  ">
                                <form className="search-form">
                                    <input type="text" placeholder="Search" required />
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
                                            Bruny Island Guides
                                        </Link>
                                        <span>(4)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Mount Wellington Tips
                                        </Link>
                                        <span>(3)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Richmond Heritage
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Travel Planning
                                        </Link>
                                        <span>(5)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Group vs Private Tours
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Tasmania Inspiration
                                        </Link>
                                        <span>(6)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget  ">
                                <h3 className="widget_title">Recent Posts</h3>
                                <div className="recent-post-wrap">
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <Link to="#">
                                                <img
                                                    src="/assets/img/blog/recent-post-1-1.jpg"
                                                    alt="Blog"
                                                />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog/1">
                                                    Discovering Bruny Island: A Complete Guide to Tasmania's Island Paradise
                                                </Link>
                                            </h4>
                                            <div className="recent-post-meta">
                                                <Link to="/blog">
                                                    <i className="fa-regular fa-calendar" />
                                                    January 15, 2025
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <Link to="/blog/2">
                                                <img
                                                    src="/assets/img/blog/recent-post-1-2.jpg"
                                                    alt="Blog"
                                                />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog/2">
                                                    Mount Wellington Summit: Your Ultimate Guide to Hobart's Iconic Peak
                                                </Link>
                                            </h4>
                                            <div className="recent-post-meta">
                                                <Link to="/blog">
                                                    <i className="fa-regular fa-calendar" />
                                                    January 18, 2025
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <Link to="/blog/3">
                                                <img
                                                    src="/assets/img/blog/recent-post-1-3.jpg"
                                                    alt="Blog"
                                                />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog/3">
                                                    Richmond Village: Exploring Tasmania's Historic Georgian Architecture
                                                </Link>
                                            </h4>
                                            <div className="recent-post-meta">
                                                <Link to="/blog">
                                                    <i className="fa-regular fa-calendar" />
                                                    January 22, 2025
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget widget_tag_cloud  ">
                                <h3 className="widget_title">Popular Tags</h3>
                                <div className="tagcloud">
                                    <Link to="/blog">Tasmania</Link>
                                    <Link to="/blog">Bruny Island</Link>
                                    <Link to="/blog">Mount Wellington</Link>
                                    <Link to="/blog">Richmond</Link>
                                    <Link to="/blog">Gourmet</Link>
                                    <Link to="/blog">Wildlife</Link>
                                    <Link to="/blog">Private Tours</Link>
                                    <Link to="/blog">Group Travel</Link>
                                </div>
                            </div>
                            <div
                                className="widget widget_offer"
                                style={{ background: "url(/assets/img/bg/widget_bg_1.jpg)" }}
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
                    style={{ bottom: "5%", right: "-8%" }}
                >
                    <img src="/assets/img/shape/shape_1.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup shape2 d-none d-xl-block"
                    style={{ bottom: "1%", right: "-7%" }}
                >
                    <img src="/assets/img/shape/shape_2.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup shape3 d-none d-xxl-block"
                    style={{ bottom: "2%", right: "0%" }}
                >
                    <img src="/assets/img/shape/shape_3.png" alt="shape" />
                </div>
            </div>
        </section>

    )
}

export default BlogDetailsMain
