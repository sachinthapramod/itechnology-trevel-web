import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import GetInTouch from '../Components/Contact/GetInTouch'
import BookATour from '../Components/Contact/BookATour'
import ContactMap from '../Components/Contact/ContactMap'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import Seo from '../Components/SEO/Seo'
import { SEO_DEFAULTS, CONTACT_INFO } from '../config/constants'

function Contact() {
    const pageTitle = 'Contact Safe Travel and Tour Services | Book Tasmania Tours | Hobart'
    const pageDescription = 'Contact Safe Travel and Tour Services in Hobart, Tasmania. Book your Bruny Island or Mount Wellington tour today. Located at 6/14 Cessna Way, Cambridge TAS 7170. Call or email for group and private tour bookings.'
    const keywords = [
        'contact Safe Travel Tasmania',
        'book Tasmania tours',
        'Hobart tour booking',
        'Bruny Island tour contact',
        'Mount Wellington tour booking',
        'Tasmania travel agency contact',
        'Hobart day tour booking',
        'Safe Travel contact details'
    ]
    const canonicalUrl = `${SEO_DEFAULTS.siteUrl}/contact`
    const ogImage = `${SEO_DEFAULTS.siteUrl}/assets/img/bg/contact-bg.jpg`

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Safe Travel and Tour Services',
        description: pageDescription,
        url: canonicalUrl,
        mainEntity: {
            '@type': 'TravelAgency',
            name: 'Safe Travel and Tour Services',
            url: SEO_DEFAULTS.siteUrl,
            address: {
                '@type': 'PostalAddress',
                streetAddress: '6/14 Cessna Way',
                addressLocality: 'Cambridge',
                addressRegion: 'TAS',
                postalCode: '7170',
                addressCountry: 'AU'
            },
            telephone: CONTACT_INFO.phone.primary,
            email: CONTACT_INFO.email,
            areaServed: {
                '@type': 'State',
                name: 'Tasmania'
            }
        }
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
                title='Contact Us'
            />
            <GetInTouch />
            <BookATour />
            <ContactMap />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default Contact
