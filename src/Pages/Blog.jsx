import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import BlogInner from '../Components/Blog/BlogInner'
import ScrollToTop from '../Components/ScrollToTop'
import FooterFour from '../Components/Footer/FooterFour'
import Seo from '../Components/SEO/Seo'
import { SEO_DEFAULTS } from '../config/constants'
import posts from '../Components/data/data-post.json'

function Blog() {
    const pageTitle = 'Tasmania Travel Blog | Bruny Island & Mount Wellington Guides | Safe Travel'
    const pageDescription = 'Explore Tasmania with Safe Travel and Tour Services. Read our travel blog featuring Bruny Island tours, Mount Wellington guides, Hobart day trips, wildlife encounters, gourmet tastings, and insider tips for the best Tasmania experiences.'
    const keywords = [
        'Tasmania travel blog',
        'Bruny Island blog',
        'Mount Wellington guide',
        'Hobart travel tips',
        'Tasmania tour guides',
        'Bruny Island travel guide',
        'Mount Wellington summit guide',
        'Tasmania day tours blog',
        'Hobart attractions',
        'Tasmania wildlife blog'
    ]
    const canonicalUrl = `${SEO_DEFAULTS.siteUrl}/blog`
    const ogImage = `${SEO_DEFAULTS.siteUrl}/assets/img/blog/recent-post-1-1.jpg`

    // Generate ItemList structured data for blog posts
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Tasmania Travel Blog Posts',
        description: pageDescription,
        url: canonicalUrl,
        numberOfItems: posts.length,
        itemListElement: posts.map((post, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'BlogPosting',
                '@id': `${SEO_DEFAULTS.siteUrl}/blog/${post.id}`,
                name: post.title,
                url: `${SEO_DEFAULTS.siteUrl}/blog/${post.id}`,
                image: `${SEO_DEFAULTS.siteUrl}${post.image}`
            }
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
                title="Blog Lists View"
            />
            <BlogInner />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default Blog
