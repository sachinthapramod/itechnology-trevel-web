import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import TourGuideInner from '../Components/Guide/TourGuideInner'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import Seo from '../Components/SEO/Seo'
import { SEO_DEFAULTS } from '../config/constants'

function TourGuide() {
  const pageTitle = 'Tasmania Tour Guides | Safe Travel and Tour Services Team'
  const pageDescription =
    'Meet Safe Travel and Tour Services’ Hobart-based tour guides who lead Bruny Island tastings, Mount Wellington summit drives, Richmond heritage walks, and bespoke Tasmania adventures.'
  const keywords = [
    'Tasmania tour guides',
    'Hobart tour leaders',
    'Bruny Island guides',
    'Mount Wellington experts'
  ]
  const canonicalUrl = `${SEO_DEFAULTS.siteUrl}/tour-guide`
  const ogImage = `${SEO_DEFAULTS.siteUrl}/assets/img/team/team_1_1.jpg`
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Safe Travel and Tour Services Guides',
    description: pageDescription,
    url: canonicalUrl
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
        title="Tour Guide"
      />
      <TourGuideInner />
      <FooterFour />
      <ScrollToTop />
    </>
  )
}

export default TourGuide
