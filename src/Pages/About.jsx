import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import AboutFour from '../Components/About/AboutFour'
import OfferTwo from '../Components/Offer/OfferTwo'
import ElementSection from '../Components/Elements/ElementSection'
import TourGuideTwo from '../Components/Guide/TourGuideTwo'
import TestimonialOne from '../Components/Testimonials/TestimonialOne'
import BrandOne from '../Components/Brand/BrandOne'
import GalleryFive from '../Components/Gallery/GalleryFive'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import Seo from '../Components/SEO/Seo'
import { APP_INFO, CONTACT_INFO, SEO_DEFAULTS, SOCIAL_LINKS } from '../config/constants'

function About() {
    const pageTitle = 'About Safe Travel and Tour Services | Hobart-Based Tasmania Travel Agency'
    const pageDescription =
        'Learn how Safe Travel and Tour Services became Tasmania’s trusted Hobart travel agency, delivering Bruny Island and Mount Wellington tours with accredited guides, modern vehicles, and Australian family values.'
    const keywords = [
        'Tasmania travel agency',
        'Hobart tour company',
        'Bruny Island experts',
        'Mount Wellington tour operator',
        'family owned Australian tour business',
        'Safe Travel and Tour Services about'
    ]
    const canonicalUrl = `${SEO_DEFAULTS.siteUrl}/about`
    const ogImage = `${SEO_DEFAULTS.siteUrl}/assets/img/normal/about_3_1.jpg`
    const structuredData = [
        {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: pageTitle,
            url: canonicalUrl,
            description: pageDescription,
            mainEntity: {
                '@type': 'TravelAgency',
                name: APP_INFO.name,
                url: SEO_DEFAULTS.siteUrl,
                description: pageDescription,
                telephone: CONTACT_INFO.phone.primary,
                email: CONTACT_INFO.email,
                sameAs: Object.values(SOCIAL_LINKS),
                areaServed: ['Tasmania', 'Hobart', 'Bruny Island', 'Mount Wellington', 'Australia']
            }
        }
    ]

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
                title="About Us"
            />
            <AboutFour />
            <OfferTwo />
            <ElementSection />
            <TourGuideTwo />
            <TestimonialOne />
            <BrandOne/>
            <GalleryFive />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default About
