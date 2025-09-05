import React, { useEffect } from 'react'
import { Routes, Route, useLocation, Outlet } from 'react-router-dom'
import './App.css'
import { HomePage } from './Pages/HomePage'
import { AboutPage } from './Pages/AboutPage'
import { VirusProtection } from './Pages/VirusProtection'
import { DataRecoveryPage } from './Pages/DataRecoveryPage'
import { ComputerRepairs } from './Pages/ComputerRepairs'
import { Store } from './Pages/Store'
import ProductsDetails from './components/ProductsDetails/ProductsDetails'
import ScrollToTop from './components/ScrollToTop'
import { motion, AnimatePresence } from 'framer-motion'
import { ContactPage } from './Pages/ContactPage'
import { QandA } from './Pages/QandA'
import { SignInPage } from './Pages/SignInPage'
import Overview from './Pages/Dashboard/DashboardOverview/DashboardOverview'
import {DashboardServices} from './Pages/Dashboard/DashboardServices/DashboardServices'
import Orders from './Pages/Dashboard/DashboardOrders'
import Financing from './Pages/Dashboard/DashboardFinancing'
import {DashboardAppointments} from './Pages/Dashboard/DashboardAppointments/DashboardAppointments'
import ActivityFeed from './Pages/Dashboard/DashboardActivityFeed'
import { Layout } from './Layout/Layout'

function App() {
  const location = useLocation();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="App">
      <AnimatePresence mode='wait' initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/virus-protection" element={<VirusProtection />} />
              <Route path="/data-recovery" element={<DataRecoveryPage />} />
              <Route path="/computer-repairs" element={<ComputerRepairs />} />
              <Route path="/products" element={<Store />} />
              <Route path="/products/:id" element={<ProductsDetails />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/QandA" element={<QandA />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/dashboardoverview" element={<Overview />} />
              <Route path="/dashboardservices" element={<DashboardServices />} />
              <Route path="/dashboardorders" element={<Orders />} />
              <Route path="/dashboardfinancing" element={<Financing />} />
              <Route path="/dashboardappointments" element={<DashboardAppointments />} />
              <Route path="/dashboardactivityfeed" element={<ActivityFeed />} />
              <Route path="/dashboardappointments" element={<DashboardAppointments />} />
            </Route>
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App 