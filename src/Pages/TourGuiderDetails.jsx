import React from 'react'
import { useParams } from 'react-router-dom'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import TourGuiderDetailsMain from '../Components/Guide/TourGuiderDetailsMain'
import TourGuideTwo from '../Components/Guide/TourGuideTwo'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import Seo from '../Components/SEO/Seo'
import { SEO_DEFAULTS } from '../config/constants'
import guides from '../Components/data/data-guide.json'

function TourGuiderDetails() {
    const { id } = useParams()
    const guide = guides.find((post) => post.id === parseInt(id, 10)) || guides[0]

    const guideName = guide?.name || 'Tasmania Tour Guide'
    const guideRole = guide?.role || 'Hobart-based Tour Specialist'
    const guideFocus = guide?.focus || 'Bruny Island & Mount Wellington experiences'
    const heroImage = guide?.image ? `/assets/img/team/${guide.image}` : '/assets/img/team/team_1_1.jpg'
    const canonicalUrl = guide?.id
        ? `${SEO_DEFAULTS.siteUrl}/tour-guide/${guide.id}`
        : `${SEO_DEFAULTS.siteUrl}/tour-guide`

    const pageTitle = `${guideName} | ${guideRole} | Safe Travel and Tour Services`
    const pageDescription = `Meet ${guideName}, a ${guideRole.toLowerCase()} who leads ${guideFocus} with Safe Travel and Tour Services in Hobart. Learn about their Tasmania guiding style, languages, certifications, and signature tours.`

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: guideName,
        jobTitle: guideRole,
        worksFor: {
            '@type': 'Organization',
            name: 'Safe Travel and Tour Services',
            url: SEO_DEFAULTS.siteUrl,
        },
        areaServed: ['Hobart', 'Bruny Island', 'Mount Wellington', 'Richmond Village'],
        image: `${SEO_DEFAULTS.siteUrl}${heroImage}`,
        description: pageDescription,
        knowsAbout: guideFocus,
        telephone: guide?.phone || '+61 3 6248 8200',
        email: guide?.email || 'Info@safetravelandtourservices.com.au',
    }

    return (
        <>
            <Seo
                title={pageTitle}
                description={pageDescription}
                keywords={[
                    'Tasmania tour guide',
                    'Hobart tour specialist',
                    guideName,
                    guideFocus,
                ]}
                canonical={canonicalUrl}
                ogImage={`${SEO_DEFAULTS.siteUrl}${heroImage}`}
                structuredData={structuredData}
            />
            <HeaderOne />
            <Breadcrumb
                title="Tour Guide Details"
            />
            <TourGuiderDetailsMain />
            <TourGuideTwo />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default TourGuiderDetails
