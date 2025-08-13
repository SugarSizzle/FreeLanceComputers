import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { UseVirusContext } from './Context/UseVirusContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UseVirusContext>
        <App />
      </UseVirusContext>
    </BrowserRouter>
  </React.StrictMode>,
) 