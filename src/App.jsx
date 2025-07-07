import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import { HomePage } from './Pages/HomePage'
import { AboutPage } from './Pages/AboutPage'
import { VirusProtection } from './Pages/VirusProtection'
import { DataRecoveryPage } from './Pages/DataRecoveryPage'
// import { ComputerUpgrades } from './Pages/ComputerUpgrades'
// import { ComputerRepairs } from './Pages/ComputerRepairs'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/virus-protection" element={<VirusProtection />} />
        <Route path="/data-recovery" element={<DataRecoveryPage />} />
        {/* <Route path="/computer-upgrades" element={<ComputerUpgrades />} />
        <Route path="/computer-repairs" element={<ComputerRepairs />} /> */}
      </Routes>
    </div>
  )
}

export default App 