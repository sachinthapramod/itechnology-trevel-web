import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import ServiceInner from '../Components/Services/ServiceInner'
import TourTwo from '../Components/Tour/TourTwo'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'

function Service() {
    return (
        <div>
            <HeaderOne />
            <Breadcrumb
                title="Services"
            />
            <ServiceInner />
            <TourTwo />
            <FooterFour />
            <ScrollToTop />
        </div>
    )
}

export default Service
