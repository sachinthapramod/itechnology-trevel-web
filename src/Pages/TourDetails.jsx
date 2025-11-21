import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import TourDetailsMain from '../Components/Tour/TourDetailsMain'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import Seo from '../Components/SEO/Seo'
import { SEO_DEFAULTS } from '../config/constants'

function TourDetails() {
    const pageTitle = 'Tasmania Tour Details | Bruny Island & Mount Wellington Itineraries'
    const pageDescription =
        'Dive deeper into Safe Travel and Tour Services itineraries. See the full schedule for Hobart departures covering Mount Wellington summit tours, Bruny Island tastings, Richmond Village walks, and curated Tasmania experiences.'
    const keywords = [
        'Tasmania tour itinerary',
        'Bruny Island tour details',
        'Mount Wellington tour plan',
        'Tasmania day tour schedule'
    ]
    const canonicalUrl = `${SEO_DEFAULTS.siteUrl}/tour-details`
    const ogImage = `${SEO_DEFAULTS.siteUrl}/assets/img/tour/tour_inner_2.jpg`
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'TouristTrip',
        name: 'Mount Wellington & Bruny Island Signature Tour',
        description: pageDescription,
        image: ogImage,
        url: canonicalUrl,
        itinerary: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Mount Wellington summit and Richmond Village',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Bruny Island tastings and wildlife encounters',
            }
        ],
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
                title="Tour Details"
            />
            <TourDetailsMain />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default TourDetails
