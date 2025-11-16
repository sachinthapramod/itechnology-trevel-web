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
            intro: "Just a short drive and ferry ride from Hobart, Bruny Island offers breathtaking landscapes, abundant wildlife, and some of the best local food in Tasmania. This all-inclusive experience blends nature, culture, and gourmet indulgence into one unforgettable day.",
            paragraph1: "Your journey to Bruny Island begins with a scenic ferry ride across the D'Entrecasteaux Channel from Kettering. As you approach the island, you'll immediately notice the dramatic coastline and pristine beaches that make this destination so special. The island is divided into North and South Bruny, connected by a narrow isthmus known as 'The Neck' - one of the most photographed locations in Tasmania.",
            paragraph2: "One of the highlights of any Bruny Island tour is climbing The Neck Lookout, which provides spectacular 360-degree views of both North and South Bruny Island. This elevated vantage point offers panoramic vistas of the surrounding waters, beaches, and rugged coastline. It's the perfect spot for photography enthusiasts and nature lovers alike.",
            blockquote: "Bruny Island is more than just a destination - it's an experience that connects you with Tasmania's natural beauty, wildlife, and culinary excellence. From spotting white wallabies to sampling award-winning cheese and fresh oysters, every moment on the island is a discovery.",
            blockquoteAuthor: "Local Guide, Safe Travel and Tour Services",
            paragraph3: "Adventure Bay is another must-visit location on Bruny Island. This pristine beach offers opportunities for wildlife spotting, including the unique white wallabies that are native to the island. Keep your eyes peeled for sea eagles soaring overhead and seals basking on the rocks. The bay's calm waters and white sand beaches make it perfect for a relaxing stroll or a refreshing dip.",
            paragraph4: "No visit to Bruny Island would be complete without experiencing the local gourmet offerings. The island is renowned for its artisanal food producers, including award-winning cheese makers, oyster farms, chocolate artisans, and honey producers. Our tours include tastings at several of these establishments, giving you the opportunity to sample some of Tasmania's finest produce.",
            heading: "What to Expect on Your Bruny Island Tour",
            paragraph5: "Our full-day Bruny Island tours depart from Hobart at 7:30 AM and return approximately at 5:00 PM. The tour includes hotel pickup and drop-off in Hobart CBD, ferry transfers, comfortable air-conditioned transport, National Park entry fees, and gourmet tastings. Your expert local guide will share insights into the island's history, wildlife, and natural features throughout the day.",
            paragraph6: "Whether you choose a group tour or a private charter, you'll experience the best of Bruny Island in a safe, comfortable, and memorable way. Our tours are designed to showcase the island's stunning landscapes, abundant wildlife, and exceptional local food culture, all while providing genuine care and personalized service.",
            tags: ["Bruny Island", "Wildlife", "Tasmania", "Tours"]
        },
        2: {
            author: "James Wilson",
            date: "January 18, 2025",
            location: "Mount Wellington",
            title: "Mount Wellington Summit: Your Ultimate Guide to Hobart's Iconic Peak",
            intro: "Standing 1,271 metres above sea level, Mount Wellington (Kunanyi) offers some of the most spectacular views in Tasmania. This iconic peak provides sweeping panoramas over Hobart, the Derwent River, and the Tasman Peninsula, making it a must-visit destination for anyone exploring Southern Tasmania.",
            paragraph1: "Mount Wellington, known to the local Aboriginal people as Kunanyi, dominates the Hobart skyline and offers visitors an incredible perspective of Tasmania's capital city and surrounding region. The drive to the summit takes you through diverse landscapes, from eucalyptus forests to alpine heathland, with the temperature dropping noticeably as you ascend.",
            paragraph2: "At the summit, you'll find viewing platforms and walking tracks that allow you to take in the breathtaking 360-degree views. On a clear day, you can see across the Derwent River, over Hobart, and as far as the Tasman Peninsula. The crisp mountain air and panoramic vistas make this one of Tasmania's most memorable experiences.",
            blockquote: "Mount Wellington offers a unique perspective on Hobart and Southern Tasmania. The views from the summit are simply breathtaking, and the journey up the mountain is an adventure in itself. It's a must-see for anyone visiting the region.",
            blockquoteAuthor: "Tour Guide, Safe Travel and Tour Services",
            paragraph3: "After visiting the summit, our Mount Wellington tours continue to Richmond Historic Village, one of Tasmania's most picturesque heritage towns. Here, you'll wander through cobblestone streets lined with Georgian architecture, visit the iconic Richmond Bridge (Australia's oldest bridge), and explore Richmond Gaol to learn about the area's convict-era history.",
            paragraph4: "Richmond offers plenty of opportunities for shopping, with boutique shops selling local crafts, art, and souvenirs. The village is also home to several excellent cafes and bakeries where you can sample local treats and enjoy lunch at your own expense. The combination of mountain views and historic charm makes this tour a perfect introduction to Tasmania's natural and cultural heritage.",
            heading: "Planning Your Mount Wellington Visit",
            paragraph5: "Our Mount Wellington tours are 9-hour experiences that include comfortable air-conditioned transport, expert local guide commentary, and visits to both the summit and Richmond Village. Tours depart from Brooke Street Pier in Hobart, with complimentary hotel pick-up available on request for Hobart CBD accommodations.",
            paragraph6: "It's important to note that Mount Wellington can be cold even in summer, so we recommend bringing warm clothing, comfortable walking shoes, a camera, and a water bottle. Tours may be altered or cancelled due to adverse weather conditions on the mountain, as safety is our top priority.",
            tags: ["Mount Wellington", "Hobart", "Tasmania", "Scenic Views"]
        },
        3: {
            author: "Emma Thompson",
            date: "January 22, 2025",
            location: "Richmond",
            title: "Richmond Village: Exploring Tasmania's Historic Georgian Architecture",
            intro: "Richmond is one of Tasmania's most charming historic villages, offering visitors a glimpse into Australia's colonial past. With its well-preserved Georgian architecture, iconic Richmond Bridge, and fascinating convict history, Richmond is a must-visit destination on any Southern Tasmania tour.",
            paragraph1: "Richmond Village, located just 25 minutes from Hobart, is home to Australia's oldest bridge still in use. The Richmond Bridge, built by convicts in 1825, is a stunning example of colonial engineering and architecture. This historic structure spans the Coal River and provides a beautiful backdrop for photographs and a tangible connection to Tasmania's convict heritage.",
            paragraph2: "The village itself is a treasure trove of Georgian architecture, with many buildings dating back to the 1820s and 1830s. As you wander through the cobblestone streets, you'll see beautifully preserved cottages, churches, and public buildings that tell the story of early European settlement in Tasmania. The village has maintained its historic character while welcoming modern visitors with boutique shops, galleries, cafes, and restaurants.",
            blockquote: "Richmond is like stepping back in time. The Georgian architecture, the historic bridge, and the stories of convict-era Tasmania create an atmosphere that's both educational and enchanting. It's a perfect complement to the natural beauty of Mount Wellington.",
            blockquoteAuthor: "Local Historian",
            paragraph3: "Richmond Gaol is another significant historical site in the village. Built in 1825, it's one of Australia's oldest penal institutions and offers visitors a fascinating insight into the harsh realities of convict life in colonial Tasmania. The gaol's well-preserved cells, exercise yards, and administrative buildings provide a sobering but important perspective on Australia's history.",
            paragraph4: "Today, Richmond is a vibrant village that combines its rich history with modern amenities. Visitors can browse boutique shops selling local crafts, art, and souvenirs, sample delicious treats at cafes and bakeries, and enjoy lunch at one of the village's excellent restaurants. The combination of historic charm and contemporary hospitality makes Richmond a delightful destination for all ages.",
            heading: "What to See and Do in Richmond",
            paragraph5: "A typical visit to Richmond includes exploring the historic streets, photographing the iconic bridge, visiting Richmond Gaol, and enjoying free time for shopping and dining. The village is compact and easily walkable, making it perfect for a relaxed half-day visit. Many visitors combine a Richmond visit with a Mount Wellington summit tour, creating a full-day experience that showcases both Tasmania's natural beauty and historic heritage.",
            paragraph6: "Whether you're interested in history, architecture, shopping, or simply enjoying the charm of a well-preserved historic village, Richmond offers something for everyone. Our tours provide expert commentary on the village's history and significance, ensuring you get the most out of your visit.",
            tags: ["Richmond", "History", "Architecture", "Tasmania"]
        },
        4: {
            author: "Michael Brown",
            date: "January 25, 2025",
            location: "Tasmania",
            title: "Group vs Private Tours: Which Tasmania Tour Experience is Right for You?",
            intro: "When planning your Tasmania adventure, one of the first decisions you'll make is whether to join a group tour or book a private charter. Both options offer unique advantages, and the right choice depends on your preferences, budget, and travel style. Let's explore the differences to help you make the best decision for your Tasmanian journey.",
            paragraph1: "Group tours are perfect for travelers who enjoy meeting new people, sharing experiences, and getting great value for money. Our group tours to Bruny Island and Mount Wellington typically accommodate small groups, ensuring personalized attention while keeping costs affordable. You'll benefit from the camaraderie of fellow travelers, shared excitement at wildlife sightings, and the opportunity to make new friends from around the world.",
            paragraph2: "Private tours, on the other hand, offer complete flexibility and customization. With a private charter, you can adjust the itinerary to match your interests, spend more time at locations that captivate you, and enjoy the undivided attention of your guide. Private tours are ideal for families, couples seeking a romantic experience, or groups of friends who want to travel together exclusively.",
            blockquote: "The best tour is the one that matches your travel style. Group tours offer great value and social interaction, while private tours provide flexibility and personalization. Both showcase Tasmania's beauty beautifully.",
            blockquoteAuthor: "Tour Coordinator, Safe Travel and Tour Services",
            paragraph3: "Group tours follow a carefully planned itinerary designed to showcase the best of each destination. For Bruny Island, this includes the ferry crossing, The Neck Lookout, Adventure Bay, wildlife spotting, and gourmet tastings. For Mount Wellington tours, the itinerary covers the summit visit and Richmond Village exploration. The structured approach ensures you see all the highlights while staying on schedule.",
            paragraph4: "Private tours allow you to customize your experience. Want to spend extra time photographing wildlife? Interested in visiting additional locations? Prefer a later start time? With a private tour, these preferences can be accommodated. Your guide can also provide more in-depth commentary tailored to your interests, whether you're passionate about history, wildlife, photography, or local food culture.",
            heading: "Making Your Decision",
            paragraph5: "Consider your budget, travel companions, and personal preferences when choosing between group and private tours. Group tours offer excellent value at $190 for Bruny Island and $120 for Mount Wellington, making them accessible to a wide range of travelers. Private tours provide premium experiences with complete flexibility, perfect for special occasions or travelers with specific interests.",
            paragraph6: "Both tour types include expert local guides, comfortable air-conditioned transport, and all the essential inclusions. Whether you choose group or private, you'll experience the same high standards of safety, comfort, and genuine hospitality that define Safe Travel and Tour Services. The choice is yours - and either way, you're guaranteed an unforgettable Tasmanian adventure.",
            tags: ["Tours", "Travel Tips", "Tasmania", "Planning"]
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
                                                alt="Blog"
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
                                            City Tour
                                        </Link>
                                        <span>(8)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Beach Tours
                                        </Link>
                                        <span>(6)</span>
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
                                            News &amp; Tips
                                        </Link>
                                        <span>(7)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Adventure Tours
                                        </Link>
                                        <span>(9)</span>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Mountain Tours
                                        </Link>
                                        <span>(10)</span>
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
                                    <Link to="/blog">Tours</Link>
                                    <Link to="/blog">Wildlife</Link>
                                    <Link to="/blog">Adventure</Link>
                                    <Link to="/blog">Hobart</Link>
                                    <Link to="/blog">Travel</Link>
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
