import React, { Suspense, lazy } from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import BannerOne from '../Components/Banner/BannerOne'
import Booking from '../Components/Booking/Booking'
import LazySection from '../Components/LazyImage/LazySection'
import FooterOne from '../Components/Footer/FooterOne'
import ScrollToTop from '../Components/ScrollToTop'

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
    return (
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
                    <BrandOne className="space-bottom"/>
                </LazySection>
                <LazySection>
                    <BlogOne />
                </LazySection>
            </Suspense>
            <FooterOne />
            <ScrollToTop />
        </div>
    )
}

export default HomeOne
