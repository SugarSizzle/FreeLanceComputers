import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
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
            <Route path="/" element={<HomePage />}  />
            <Route path="/virus-protection" element={<VirusProtection />}  />
            <Route path="/data-recovery" element={<DataRecoveryPage />}  />
            <Route path="/computer-repairs" element={<ComputerRepairs />}  />
            <Route path="/products" element={<Store />}  />
            <Route path="/products/:id" element={<ProductsDetails />}  />
            <Route path="/contact" element={<ContactPage />}  />
            <Route path="/QandA" element={<QandA />}  />
            <Route path="/signin" element={<SignInPage />}  />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App 