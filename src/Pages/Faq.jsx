import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import FaqInner from '../Components/Faq/FaqInner'
import ElementSection from '../Components/Elements/ElementSection'
import FaqContact from '../Components/Faq/FaqContact'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import Seo from '../Components/SEO/Seo'
import { SEO_DEFAULTS } from '../config/constants'

function Faq() {
    const pageTitle = 'Tasmania Tours FAQ | Bruny Island & Mount Wellington Tour Questions | Safe Travel'
    const pageDescription = 'Frequently asked questions about Safe Travel and Tour Services Tasmania tours. Get answers about Bruny Island tours, Mount Wellington trips, booking, pricing, what to bring, group vs private tours, and more.'
    const keywords = [
        'Tasmania tours FAQ',
        'Bruny Island tour questions',
        'Mount Wellington tour FAQ',
        'Hobart day tour questions',
        'Tasmania tour booking FAQ',
        'Safe Travel tours FAQ',
        'Tasmania travel questions',
        'Bruny Island tour information'
    ]
    const canonicalUrl = `${SEO_DEFAULTS.siteUrl}/faq`
    const ogImage = `${SEO_DEFAULTS.siteUrl}/assets/img/bg/faq-bg.jpg`

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        name: 'Tasmania Tours Frequently Asked Questions',
        description: pageDescription,
        url: canonicalUrl,
        mainEntity: [
            {
                '@type': 'Question',
                name: 'How do I book a Bruny Island or Mount Wellington tour?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'You can book your Tasmania tour by contacting Safe Travel and Tour Services via phone, email, or through our contact page. We offer both group and private tours to Bruny Island and Mount Wellington from Hobart.'
                }
            },
            {
                '@type': 'Question',
                name: 'What is included in the tour price?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Tour inclusions vary by package but typically include transport, guide services, ferry fares (for Bruny Island), National Park entry fees, and selected tastings. Please check individual tour details for specific inclusions.'
                }
            },
            {
                '@type': 'Question',
                name: 'What should I bring on a Tasmania tour?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We recommend bringing comfortable walking shoes, warm clothing (especially for Mount Wellington), a camera, water bottle, and any personal items you may need. Weather can change quickly in Tasmania.'
                }
            },
            {
                '@type': 'Question',
                name: 'What is the difference between group and private tours?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Group tours offer a social experience with other travellers at a set price, while private tours provide a customisable itinerary, flexible timing, and dedicated guide for your party. Both options include expert commentary and comfortable transport.'
                }
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
                title="FAQs"
            />
            <FaqInner />
            <ElementSection />
            <FaqContact />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default Faq
