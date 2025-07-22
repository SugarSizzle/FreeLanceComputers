import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { HomePage } from './Pages/HomePage'
import { AboutPage } from './Pages/AboutPage'
import { VirusProtection } from './Pages/VirusProtection'
import { DataRecoveryPage } from './Pages/DataRecoveryPage'
import { ComputerRepairs } from './Pages/ComputerRepairs'
import { Store } from './Pages/Store'
import ProductsDetails from './components/ProductsDetails/ProductsDetails'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/virus-protection" element={<VirusProtection />} />
        <Route path="/data-recovery" element={<DataRecoveryPage />} />
        <Route path="/computer-repairs" element={<ComputerRepairs />} />
        <Route path="/products" element={<Store />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
       
      </Routes>
    </div>
  )
}

export default App 