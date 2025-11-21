import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import ActivitiesDetailsMain from '../Components/Activities/ActivitiesDetailsMain'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import Seo from '../Components/SEO/Seo'
import { SEO_DEFAULTS } from '../config/constants'

function ActivitiesDetails() {
    const pageTitle = 'Tasmania Activities Details | Bruny Island & Mount Wellington Experiences'
    const pageDescription =
        'Dive into the full itinerary for Safe Travel’s Tasmania activities, covering Hobart departures to Bruny Island, Mount Wellington, Richmond Village, wildlife encounters, and gourmet tastings.'
    const keywords = [
        'Tasmania activity details',
        'Bruny Island activity plan',
        'Mount Wellington experience',
        'Hobart activity schedule'
    ]
    const canonicalUrl = `${SEO_DEFAULTS.siteUrl}/activities-details`
    const ogImage = `${SEO_DEFAULTS.siteUrl}/assets/img/gallery/gallery_8_5.jpg`
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'TouristTrip',
        name: 'Bruny Island & Mount Wellington Activities',
        description: pageDescription,
        image: ogImage,
        url: canonicalUrl,
        itinerary: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Mount Wellington / kunanyi summit and Richmond Village',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Bruny Island tastings, wildlife sightings, and coastal walks',
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
                title="Activities Details"
            />
            <ActivitiesDetailsMain />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default ActivitiesDetails
