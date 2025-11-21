import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import ServiceInner from '../Components/Services/ServiceInner'
import TourTwo from '../Components/Tour/TourTwo'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import Seo from '../Components/SEO/Seo'
import { SEO_DEFAULTS } from '../config/constants'

function Service() {
    const pageTitle = 'Tasmania Tour Services | Group & Private Packages from Hobart'
    const pageDescription =
        'Discover Safe Travel and Tour Services offerings: Bruny Island tastings, Mount Wellington summit drives, premium private charters, cruise shore excursions, and Hobart-based travel management for visitors across Australia.'
    const keywords = [
        'Tasmania tour services',
        'Hobart travel agency packages',
        'Bruny Island charter',
        'Mount Wellington private tour',
        'Tasmania group tours',
        'Safe Travel services'
    ]
    const canonicalUrl = `${SEO_DEFAULTS.siteUrl}/service`
    const ogImage = `${SEO_DEFAULTS.siteUrl}/assets/img/destination/destination_1_2.jpg`
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'OfferCatalog',
        name: 'Safe Travel and Tour Services - Tasmania Experiences',
        url: canonicalUrl,
        description: pageDescription,
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'TouristTrip',
                    name: 'Bruny Island Group Tour Package',
                    description: 'Nine-hour Hobart departure with tastings, wildlife spotting, and scenic lookouts.',
                },
                price: '190',
                priceCurrency: 'AUD',
                availability: 'https://schema.org/InStock',
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'TouristTrip',
                    name: 'Mount Wellington Private Tour',
                    description: 'Customisable kunanyi/Mount Wellington summit trip plus Richmond Village heritage walk.',
                },
                price: '120',
                priceCurrency: 'AUD',
                availability: 'https://schema.org/InStock',
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
            <div>
                <HeaderOne />
                <Breadcrumb
                    title="Services"
                />
                <ServiceInner />
                <TourTwo />
                <FooterFour />
                <ScrollToTop />
            </div>
        </>
    )
}

export default Service
