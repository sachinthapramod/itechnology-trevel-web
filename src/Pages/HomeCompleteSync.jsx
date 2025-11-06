// Complete Synchronized Homepage - Uses data from admin dashboard
import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import BannerOneSync from '../Components/Banner/BannerOneSync'
import Booking from '../Components/Booking/Booking'
import CategoryOne from '../Components/Category/CategoryOne'
import DestinationOneSync from '../Components/Destination/DestinationOneSync'
import AboutOneSync from '../Components/About/AboutOneSync'
import TourOneSync from '../Components/Tour/TourOneSync'
import ActivitiesOneSync from '../Components/Activities/ActivitiesOneSync'
import GalleryOne from '../Components/Gallery/GalleryOne'
import CounterOneSync from '../Components/Counter/CounterOneSync'
import TourGuideSync from '../Components/Guide/TourGuideSync'
import TestimonialOneSync from '../Components/Testimonials/TestimonialOneSync'
import BrandOne from '../Components/Brand/BrandOne'
import BlogOneSync from '../Components/Blog/BlogOneSync'
import ShopOneSync from '../Components/Shop/ShopOneSync'
import FooterOne from '../Components/Footer/FooterOne'
import ScrollToTop from '../Components/ScrollToTop'

function HomeCompleteSync() {
    return (
        <div>
            <HeaderOne />
            <BannerOneSync />
            <Booking />
            <CategoryOne />
            <DestinationOneSync />
            <AboutOneSync />
            <TourOneSync />
            <ActivitiesOneSync />
            <GalleryOne />
            <CounterOneSync />
            <TourGuideSync />
            <TestimonialOneSync />
            <BrandOne className="space-bottom"/>
            <BlogOneSync />
            <ShopOneSync />
            <FooterOne />
            <ScrollToTop />
        </div>
    )
}

export default HomeCompleteSync
