import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import { HomePage } from './Pages/HomePage'
import { AboutPage } from './Pages/AboutPage'
import { VirusProtection } from './Pages/VirusProtection'
// import { DataRecovery } from './Pages/DataRecovery'
// import { ComputerUpgrades } from './Pages/ComputerUpgrades'
// import { ComputerRepairs } from './Pages/ComputerRepairs'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/virus-protection" element={<VirusProtection />} />
        {/* <Route path="/data-recovery" element={<DataRecovery />} />
        <Route path="/computer-upgrades" element={<ComputerUpgrades />} />
        <Route path="/computer-repairs" element={<ComputerRepairs />} /> */}
      </Routes>
    </div>
  )
}

export default App 