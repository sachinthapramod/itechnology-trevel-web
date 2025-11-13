import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadTop from '../Components/LoadTop'

// Lazy load all route components for code splitting
const HomeOne = lazy(() => import('./HomeOne'))
const About = lazy(() => import('./About'))
const Destination = lazy(() => import('./Destination'))
const DestinationDetails = lazy(() => import('./DestinationDetails'))
const Service = lazy(() => import('./Service'))
const ServiceDetails = lazy(() => import('./ServiceDetails'))
const Activities = lazy(() => import('./Activities'))
const ActivitiesDetails = lazy(() => import('./ActivitiesDetails'))
const Shop = lazy(() => import('./Shop'))
const ShopDetails = lazy(() => import('./ShopDetails'))
const Cart = lazy(() => import('./Cart'))
const Checkout = lazy(() => import('./Checkout'))
const Wishlist = lazy(() => import('./Wishlist'))
const Gallery = lazy(() => import('./Gallery'))
const Tour = lazy(() => import('./Tour'))
const TourDetails = lazy(() => import('./TourDetails'))
const Resort = lazy(() => import('./Resort'))
const ResortDetails = lazy(() => import('./ResortDetails'))
const TourGuide = lazy(() => import('./TourGuide'))
const TourGuiderDetails = lazy(() => import('./TourGuiderDetails'))
const Faq = lazy(() => import('./Faq'))
const Pricing = lazy(() => import('./Pricing'))
const Error = lazy(() => import('./Error'))
const Blog = lazy(() => import('./Blog'))
const BlogDetails = lazy(() => import('./BlogDetails'))
const Contact = lazy(() => import('./Contact'))

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '50vh' 
  }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
)

function RouterPage() {
  return (
    <div>
      <Router>
        <LoadTop />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomeOne />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/destination" element={<Destination />}></Route>
            <Route path="/destination/:id" element={<DestinationDetails />} />
            <Route path="/service" element={<Service />}></Route>
            <Route path="/service/:id" element={<ServiceDetails />} />
            <Route path="/activities" element={<Activities />}></Route>
            <Route path="/activities-details" element={<ActivitiesDetails />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/shop/:id" element={<ShopDetails />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/tour" element={<Tour />}></Route>
            <Route path="/tour-details" element={<TourDetails />}></Route>
            <Route path="/resort" element={<Resort />}></Route>
            <Route path="/resort/:id" element={<ResortDetails />}></Route>
            <Route path="/tour-guide" element={<TourGuide />}></Route>
            <Route path="/tour-guide/:id" element={<TourGuiderDetails />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route path="/price" element={<Pricing />}></Route>
            <Route path="/error" element={<Error />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blog/:id" element={<BlogDetails />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  )
}

export default RouterPage