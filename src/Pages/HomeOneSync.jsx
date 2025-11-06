// Synchronized Home Page - Uses data from admin dashboard
import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import BannerOne from '../Components/Banner/BannerOne'
import Booking from '../Components/Booking/Booking'
import CategoryOne from '../Components/Category/CategoryOne'
import DestinationOneSync from '../Components/Destination/DestinationOneSync'
import AboutOne from '../Components/About/AboutOne'
import TourOneSync from '../Components/Tour/TourOneSync'
import GalleryOne from '../Components/Gallery/GalleryOne'
import CounterOne from '../Components/Counter/CounterOne'
import TourGuide from '../Components/Guide/TourGuide'
import TestimonialOne from '../Components/Testimonials/TestimonialOne'
import BrandOne from '../Components/Brand/BrandOne'
import BlogOneSync from '../Components/Blog/BlogOneSync'
import FooterOne from '../Components/Footer/FooterOne'
import ScrollToTop from '../Components/ScrollToTop'

function HomeOneSync() {
    return (
        <div>
            <HeaderOne />
            <BannerOne />
            <Booking />
            <CategoryOne />
            <DestinationOneSync />
            <AboutOne />
            <TourOneSync />
            <GalleryOne />
            <CounterOne />
            <TourGuide />
            <TestimonialOne />
            <BrandOne className="space-bottom"/>
            <BlogOneSync />
            <FooterOne />
            <ScrollToTop />
        </div>
    )
}

export default HomeOneSync
