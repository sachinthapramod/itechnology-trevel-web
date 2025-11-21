import React, { useState } from 'react';
import Modal from './Modal';
import { Link } from 'react-router-dom'

const galleryItems = [
    {
        image: '/assets/img/gallery/gallery_8_1.jpg',
        alt: 'Bruny Island Neck Lookout sunset',
        caption: 'Bruny Island – The Neck Lookout at sunset',
    },
    {
        image: '/assets/img/gallery/gallery_8_2.jpg',
        alt: 'Mount Wellington summit view over Hobart',
        caption: 'Mount Wellington / kunanyi summit boardwalks',
    },
    {
        image: '/assets/img/gallery/gallery_8_3.jpg',
        alt: 'Hobart waterfront departure',
        caption: 'Hobart waterfront departures aboard modern coaches',
    },
    {
        image: '/assets/img/gallery/gallery_8_4.jpg',
        alt: 'Richmond Village historic bridge',
        caption: 'Richmond Village heritage bridge strolls',
    },
    {
        image: '/assets/img/gallery/gallery_8_5.jpg',
        alt: 'Adventure Bay beach walk',
        caption: 'Adventure Bay wildlife and beach walks',
    },
    {
        image: '/assets/img/gallery/gallery_8_6.jpg',
        alt: 'Bruny Island gourmet tasting platter',
        caption: 'Bruny Island gourmet cheese and oyster tastings',
    },
    {
        image: '/assets/img/gallery/gallery_8_7.jpg',
        alt: 'Mount Wellington organ pipes view',
        caption: 'Organ Pipes lookout on Mount Wellington',
    },
    {
        image: '/assets/img/gallery/gallery_8_8.jpg',
        alt: 'White wallaby in Tasmanian wilderness',
        caption: 'White wallaby sightings with local guides',
    },
];

function GalleryInner() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    // Function to open the modal with the selected image
    const openModal = (imageSrc, event) => {
        event.preventDefault(); // Prevent default link behavior
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="overflow-hidden space" id="gallery-sec">
            <div className="container-fuild">
                <div className="title-area mb-30 text-center">
                    <span className="sub-title">Tasmania Photo Stories</span>
                    <h2 className="sec-title">See Bruny Island & Mount Wellington through our guests’ lens</h2>
                    <p className="mt-3 text-muted">
                        Every image comes from Safe Travel and Tour Services journeys departing Hobart. Scroll through Bruny Island coastlines, Mount Wellington summit lookouts, Richmond bridge walks, and the gourmet tastings that make Tasmania famous.
                    </p>
                </div>
                <div className="row gy-4 gallery-row4">
                    {galleryItems.map((item) => (
                        <div key={item.image} className="col-auto">
                            <div className="gallery-box style5">
                                <div className="gallery-img global-img">
                                    <img src={item.image} alt={item.alt} />
                                    <div className="gallery-overlay">
                                        <p className="gallery-caption">{item.caption}</p>
                                    </div>
                                    <Link
                                        to={item.image}
                                        className="icon-btn popup-image"
                                        onClick={(e) => openModal(item.image, e)}
                                    >
                                        <i className="fal fa-magnifying-glass-plus" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="gallery-cta text-center mt-5">
                    <h3 className="h4 mb-3">Ready to capture your own Tasmania story?</h3>
                    <p className="mb-4 text-muted">
                        Join Safe Travel and Tour Services for personalised photo stops, sunrise and sunset options, and drone-friendly charters around Bruny Island, Mount Wellington, and the Tasman Peninsula.
                    </p>
                    <Link to="/contact" className="th-btn style3 th-icon">
                        Plan My Photo-Friendly Tour
                    </Link>
                </div>
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
        </div>

    )
}

export default GalleryInner
