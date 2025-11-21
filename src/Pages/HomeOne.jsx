import React, { Suspense, lazy } from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import BannerOne from '../Components/Banner/BannerOne'
import Booking from '../Components/Booking/Booking'
import LazySection from '../Components/LazyImage/LazySection'
import FooterOne from '../Components/Footer/FooterOne'
import ScrollToTop from '../Components/ScrollToTop'
import Seo from '../Components/SEO/Seo'
import { APP_INFO, CONTACT_INFO, SEO_DEFAULTS, SOCIAL_LINKS, TOUR_PACKAGES } from '../config/constants'

// Lazy load components that are below the fold
const CategoryOne = lazy(() => import('../Components/Category/CategoryOne'))
const DestinationOne = lazy(() => import('../Components/Destination/DestinationOne'))
const AboutOne = lazy(() => import('../Components/About/AboutOne'))
const TourOne = lazy(() => import('../Components/Tour/TourOne'))
const GalleryOne = lazy(() => import('../Components/Gallery/GalleryOne'))
const CounterOne = lazy(() => import('../Components/Counter/CounterOne'))
const TourGuide = lazy(() => import('../Components/Guide/TourGuide'))
const TestimonialOne = lazy(() => import('../Components/Testimonials/TestimonialOne'))
const BrandOne = lazy(() => import('../Components/Brand/BrandOne'))
const BlogOne = lazy(() => import('../Components/Blog/BlogOne'))

function HomeOne() {
    const pageTitle = 'Tasmania Travel Agency | Safe Travel and Tour Services'
    const pageDescription = 'Safe Travel and Tour Services is Tasmania’s trusted travel agency for Bruny Island and Mount Wellington tours. Book one-day group trips, private charters, and Hobart departures with local guides who prioritise safety, culture, and Australian hospitality.'
    const keywords = [
        'Tasmania travel agency',
        'Hobart tour operator',
        'Bruny Island tours',
        'Mount Wellington tours',
        'Tasmania private tours',
        'Australia group tours',
        'Safe Travel and Tour Services'
    ]
    const canonicalUrl = `${SEO_DEFAULTS.siteUrl}/`
    const ogImage = `${SEO_DEFAULTS.siteUrl}/assets/img/hero/hero_bg_1_1.jpg`
    const structuredData = [
        {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: APP_INFO.name,
            url: SEO_DEFAULTS.siteUrl,
            potentialAction: {
                '@type': 'SearchAction',
                target: `${SEO_DEFAULTS.siteUrl}/tour?search={search_term_string}`,
                'query-input': 'required name=search_term_string'
            }
        },
        {
            '@context': 'https://schema.org',
            '@type': 'TravelAgency',
            name: APP_INFO.name,
            url: SEO_DEFAULTS.siteUrl,
            logo: `${SEO_DEFAULTS.siteUrl}/assets/img/logo.svg`,
            image: ogImage,
            description: pageDescription,
            telephone: CONTACT_INFO.phone.primary,
            email: CONTACT_INFO.email,
            priceRange: '$$',
            address: {
                '@type': 'PostalAddress',
                streetAddress: '6/14 Cessna Way',
                addressLocality: 'Cambridge',
                addressRegion: 'TAS',
                postalCode: '7170',
                addressCountry: 'AU'
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: -42.836,
                longitude: 147.507
            },
            openingHoursSpecification: [
                {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: [
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday',
                        'Sunday'
                    ],
                    opens: '08:00',
                    closes: '19:00'
                }
            ],
            areaServed: [
                'Hobart',
                'Bruny Island',
                'Mount Wellington',
                'Tasmania',
                'Australia'
            ],
            sameAs: Object.values(SOCIAL_LINKS),
            makesOffer: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'TouristTrip',
                        name: TOUR_PACKAGES.brunyIsland.group.title,
                        tourType: 'Guided Tour',
                        itineraryType: 'One Day Tour',
                        offers: {
                            '@type': 'AggregateOffer',
                            lowPrice: '190',
                            priceCurrency: 'AUD'
                        }
                    },
                    price: '190',
                    priceCurrency: 'AUD',
                    url: `${SEO_DEFAULTS.siteUrl}/tour`
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'TouristTrip',
                        name: TOUR_PACKAGES.mountWellington.group.title,
                        tourType: 'Guided Tour',
                        itineraryType: 'One Day Tour',
                        offers: {
                            '@type': 'AggregateOffer',
                            lowPrice: '120',
                            priceCurrency: 'AUD'
                        }
                    },
                    price: '120',
                    priceCurrency: 'AUD',
                    url: `${SEO_DEFAULTS.siteUrl}/tour`
                }
            ]
        }
    ]

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
                <BannerOne />
                <Booking />
                <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
                    <LazySection>
                        <CategoryOne />
                    </LazySection>
                    <LazySection>
                        <DestinationOne />
                    </LazySection>
                    <LazySection>
                        <AboutOne />
                    </LazySection>
                    <LazySection>
                        <TourOne />
                    </LazySection>
                    <LazySection>
                        <GalleryOne />
                    </LazySection>
                    <LazySection>
                        <CounterOne />
                    </LazySection>
                    <LazySection>
                        <TourGuide />
                    </LazySection>
                    <LazySection>
                        <TestimonialOne />
                    </LazySection>
                    <LazySection>
                        <BrandOne className="space-bottom" />
                    </LazySection>
                    <LazySection>
                        <BlogOne />
                    </LazySection>
                </Suspense>
                <FooterOne />
                <ScrollToTop />
            </div>
        </>
    )
}

export default HomeOne
