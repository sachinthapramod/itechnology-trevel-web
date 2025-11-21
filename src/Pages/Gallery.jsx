import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import GalleryInner from '../Components/Gallery/GalleryInner'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import Seo from '../Components/SEO/Seo'
import { SEO_DEFAULTS } from '../config/constants'

function Gallery() {
    const pageTitle = 'Tasmania Tour Gallery | Bruny Island & Mount Wellington Photo Highlights'
    const pageDescription =
        'View Safe Travel and Tour Services photo gallery featuring Bruny Island coastlines, Mount Wellington viewpoints, Richmond Village walks, and Hobart-based gourmet experiences captured on our Tasmania tours.'
    const keywords = [
        'Tasmania tour gallery',
        'Bruny Island photos',
        'Mount Wellington images',
        'Hobart travel photography'
    ]
    const canonicalUrl = `${SEO_DEFAULTS.siteUrl}/gallery`
    const ogImage = `${SEO_DEFAULTS.siteUrl}/assets/img/gallery/gallery_8_1.jpg`
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'ImageGallery',
        name: pageTitle,
        description: pageDescription,
        url: canonicalUrl,
        image: [
            `${SEO_DEFAULTS.siteUrl}/assets/img/gallery/gallery_8_1.jpg`,
            `${SEO_DEFAULTS.siteUrl}/assets/img/gallery/gallery_8_2.jpg`,
            `${SEO_DEFAULTS.siteUrl}/assets/img/gallery/gallery_8_3.jpg`,
            `${SEO_DEFAULTS.siteUrl}/assets/img/gallery/gallery_8_4.jpg`
        ]
    }

    return (
        <>
            <Seo
                title={pageTitle}
                description={pageDescription}
                keywords={keywords}
                canonical={canonicalUrl}
                ogImage={ogImage}
                structuredData={structuredData}
            />
            <HeaderOne />
            <Breadcrumb
                title="Gallery"
            />
            <GalleryInner />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default Gallery
