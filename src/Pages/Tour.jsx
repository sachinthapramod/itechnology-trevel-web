import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import TourInner from '../Components/Tour/TourInner'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import Seo from '../Components/SEO/Seo'
import { SEO_DEFAULTS } from '../config/constants'
import tours from '../Components/data/data-tour.json'

function Tour() {
    const pageTitle = 'Tasmania Tours | Bruny Island & Mount Wellington Packages'
    const pageDescription =
        'Compare Safe Travel and Tour Services itineraries: Bruny Island group tours, private Mount Wellington charters, Richmond add-ons, and Hobart departures designed for Australian travellers seeking trusted Tasmania tour packages.'
    const keywords = [
        'Tasmania tours',
        'Bruny Island tour packages',
        'Mount Wellington tours',
        'Hobart tour operator',
        'Tasmania private charters'
    ]
    const canonicalUrl = `${SEO_DEFAULTS.siteUrl}/tour`
    const ogImage = `${SEO_DEFAULTS.siteUrl}/assets/img/tour/tour_box_1.jpg`
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Safe Travel and Tour Services – Tasmania packages',
        description: pageDescription,
        url: canonicalUrl,
        itemListElement: tours.map((tour, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: tour.title,
            url: canonicalUrl,
            description: tour.description || 'Tasmania tour package operated by Safe Travel and Tour Services',
        }))
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
                title="Popular Tours"
            />
            <TourInner />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default Tour
