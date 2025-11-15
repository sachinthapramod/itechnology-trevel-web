import { Link } from 'react-router-dom'

function AboutFour() {
   return (
      <div className="about-area position-relative overflow-hidden overflow-hidden space" id="about-sec">
         <div className="container shape-mockup-wrap">
            <div className="row">
               <div className="col-xl-7">
                  <div className="img-box3">
                     <div className="img1">
                        <img src="/assets/img/normal/about_3_1.jpg" alt="About" />
                     </div>
                     <div className="img2">
                        <img src="/assets/img/normal/about_3_2.jpg" alt="About" />
                     </div>
                     <div className="img3 movingX">
                        <img src="/assets/img/normal/about_3_3.jpg" alt="About" />
                     </div>
                  </div>
               </div>
               <div className="col-xl-5">
                  <div className="ps-xl-4">
                     <div className="title-area mb-20">
                        <span className="sub-title style1 ">About Us</span>
                        <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                           Safe Travel and Tour Services
                        </h2>
                     </div>
                     <p className="pe-xl-5">
                        Safe Travel and Tour Services is a proudly Australian-owned and family-operated tour company based in Hobart. We specialise in one-day tours, private charters, and group adventures, offering travellers safe, comfortable, and memorable journeys.
                     </p>
                     <p className="pe-xl-5">
                        Starting our journey in Tasmania, we are expanding our services across Australia — sharing the beauty, culture, and hidden gems of this incredible country with visitors from around the world.
                     </p>
                     <p className="mb-30 pe-xl-5">
                        Our goal is simple: to make every trip enjoyable, informative, and stress-free, with genuine care and personalised service at every step.
                     </p>
                     <div className="mb-40 pe-xl-5">
                        <h3 className="sec-title mb-15" style={{ fontSize: '24px' }}>Vision Statement</h3>
                        <p className="mb-30">
                           To become one of Australia's most trusted and loved tour operators, recognised for delivering safe, authentic, and unforgettable travel experiences that connect people with the heart and beauty of Australia.
                        </p>
                        <h3 className="sec-title mb-15" style={{ fontSize: '24px' }}>Mission Statement</h3>
                        <p className="mb-30">
                           Our mission is to provide exceptional tour experiences through safety, comfort, and genuine hospitality. We aim to create meaningful travel moments for every guest — showcasing Australia's stunning landscapes, diverse culture, and friendly spirit, all while maintaining the warmth and reliability of a family business.
                        </p>
                     </div>
                     <div className="about-item-wrap">
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <img src="/assets/img/icon/about_1_1.svg" alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">One-Day Tours & Private Charters</h5>
                              <p className="about-item_text">
                                 We specialise in one-day tours, private charters, and group adventures, offering safe, comfortable, and memorable journeys.
                              </p>
                           </div>
                        </div>
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <img src="/assets/img/icon/about_1_2.svg" alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Safety & Comfort</h5>
                              <p className="about-item_text">
                                 We provide exceptional tour experiences through safety, comfort, and genuine hospitality, ensuring every journey is safe and memorable.
                              </p>
                           </div>
                        </div>
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <img src="/assets/img/icon/about_1_3.svg" alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Family Business Values</h5>
                              <p className="about-item_text">
                                 As a family-operated business, we maintain the warmth and reliability that comes with genuine care and personalised service at every step.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="mt-35">
                        <Link to="/contact" className="th-btn style3 th-icon">
                           Contact With Us
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div
               className="shape-mockup movingX d-none d-xxl-block"
               style={{ top: '0%', left: '-18%' }}
            >
               <img src="/assets/img/shape/shape_2_1.png" alt="shape" />
            </div>
            <div
               className="shape-mockup jump d-none d-xxl-block"
               style={{ top: '28%', right: '-15%' }}
            >
               <img src="/assets/img/shape/shape_2_2.png" alt="shape" />
            </div>
            <div
               className="shape-mockup spin d-none d-xxl-block"
               style={{ top: '18%', left: '-112%' }}
            >
               <img src="/assets/img/shape/shape_2_3.png" alt="shape" />
            </div>
            <div
               className="shape-mockup movixgX d-none d-xxl-block"
               style={{ bottom: '18%', right: '-12%' }}
            >
               <img src="/assets/img/shape/shape_2_4.png" alt="shape" />
            </div>
         </div>
      </div>
   )
}

export default AboutFour
