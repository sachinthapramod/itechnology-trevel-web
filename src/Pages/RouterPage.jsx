import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadTop from '../Components/LoadTop'
import HomeOne from './HomeOne'
import HomeOneSync from './HomeOneSync'
import HomeCompleteSync from './HomeCompleteSync'
import HomeTwo from './HomeTwo'
import HomeThree from './HomeThree'
import HomeFour from './HomeFour'
import About from './About'
import Destination from './Destination'
import DestinationDetails from './DestinationDetails'
import Service from './Service'
import ServiceDetails from './ServiceDetails'
import Activities from './Activities'
import ActivitiesDetails from './ActivitiesDetails'
import Shop from './Shop'
import ShopDetails from './ShopDetails'
import Cart from './Cart'
import Checkout from './Checkout'
import Wishlist from './Wishlist'
import Gallery from './Gallery'
import Tour from './Tour'
import TourDetails from './TourDetails'
import Resort from './Resort'
import ResortDetails from './ResortDetails'
import TourGuide from './TourGuide'
import TourGuiderDetails from './TourGuiderDetails'
import Faq from './Faq'
import Pricing from './Pricing'
import Error from './Error'
import Blog from './Blog'
import BlogDetails from './BlogDetails'
import Contact from './Contact'
import SimpleAdminDashboard from './Admin/SimpleAdminDashboard'
import TestPage from './Admin/TestPage'
import DebugAdmin from './Admin/DebugAdmin'
import DataServiceTest from './Admin/DataServiceTest'
import ManagementTest from './Admin/ManagementTest'
import SyncTest from './Admin/SyncTest'
import CompleteSyncTest from './Admin/CompleteSyncTest'

function RouterPage() {
  return (
    <div>
      <Router>
        <LoadTop />
        <Routes>
          <Route path="/" element={<HomeOne />}></Route>
          <Route path="/sync" element={<HomeOneSync />}></Route>
          <Route path="/complete-sync" element={<HomeCompleteSync />}></Route>
          <Route path="/home-tour" element={<HomeTwo />}></Route>
          <Route path="/home-agency" element={<HomeThree />}></Route>
          <Route path="/home-yacht" element={<HomeFour />}></Route>
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
          
          {/* Test Routes */}
          <Route path="/test-admin" element={<TestPage />}></Route>
          <Route path="/debug-admin" element={<DebugAdmin />}></Route>
          <Route path="/data-test" element={<DataServiceTest />}></Route>
          <Route path="/management-test" element={<ManagementTest />}></Route>
          <Route path="/sync-test" element={<SyncTest />}></Route>
          <Route path="/complete-sync-test" element={<CompleteSyncTest />}></Route>
          
          {/* Admin Routes */}
          <Route path="/admin/*" element={<SimpleAdminDashboard />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default RouterPage