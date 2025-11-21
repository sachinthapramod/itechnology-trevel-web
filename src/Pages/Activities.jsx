import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import ActivitiesInner from '../Components/Activities/ActivitiesInner'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import Seo from '../Components/SEO/Seo'
import { SEO_DEFAULTS } from '../config/constants'
import activities from '../Components/data/data-activities.json'

function Activities() {
    const pageTitle = 'Tasmania Activities | Bruny Island & Mount Wellington Experiences'
    const pageDescription =
        'Browse the top Tasmania activities curated by Safe Travel and Tour Services: Bruny Island tastings, Mount Wellington lookouts, Richmond heritage walks, wildlife encounters, and Hobart-based gourmet tours.'
    const keywords = [
        'Tasmania activities',
        'Bruny Island experiences',
        'Mount Wellington adventures',
        'Hobart things to do',
        'Tasmania tastings and walks'
    ]
    const canonicalUrl = `${SEO_DEFAULTS.siteUrl}/activities`
    const ogImage = `${SEO_DEFAULTS.siteUrl}/assets/img/activities/activities_1_1.jpg`
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: pageTitle,
        description: pageDescription,
        url: canonicalUrl,
        itemListElement: activities.map((activity, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: canonicalUrl,
            name: activity.title,
            description: activity.description || 'Tasmania tour activity curated by Safe Travel and Tour Services',
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
                title="Activities"
            />
            <ActivitiesInner />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default Activities
