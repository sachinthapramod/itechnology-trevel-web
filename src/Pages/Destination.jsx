import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import DestinationInner from '../Components/Destination/DestinationInner'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import Seo from '../Components/SEO/Seo'
import { SEO_DEFAULTS } from '../config/constants'

function Destination() {
    const pageTitle = 'Tasmania Destinations | Bruny Island & Mount Wellington Tours'
    const pageDescription =
        'Compare Tasmania’s bucket-list destinations with Safe Travel and Tour Services. Browse Bruny Island tastings, Mount Wellington summit experiences, Richmond Village add-ons, and Hobart day trips departing daily.'
    const keywords = [
        'Tasmania destinations',
        'Bruny Island tours',
        'Mount Wellington trips',
        'Hobart day tours',
        'Tasmanian tour packages'
    ]
    const canonicalUrl = `${SEO_DEFAULTS.siteUrl}/destination`
    const ogImage = `${SEO_DEFAULTS.siteUrl}/assets/img/destination/destination_1_1.jpg`
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: pageTitle,
        description: pageDescription,
        url: canonicalUrl,
        about: [
            {
                '@type': 'Place',
                name: 'Bruny Island, Tasmania',
                description: 'Premium Tasmania destination for wildlife, gourmet tastings, and scenic lookouts.',
                image: `${SEO_DEFAULTS.siteUrl}/assets/img/tour/tour_box_1.jpg`
            },
            {
                '@type': 'Place',
                name: 'Mount Wellington / kunanyi',
                description: 'Iconic Hobart summit featuring panoramic views, Richmond extensions, and alpine boardwalks.',
                image: `${SEO_DEFAULTS.siteUrl}/assets/img/tour/tour_box_3.jpg`
            }
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
                title="Destination"
            />
            <DestinationInner />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default Destination
