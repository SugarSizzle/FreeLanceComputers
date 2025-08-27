import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { UseVirusContext } from './Context/UseVirusContext'
import { AuthContextProvider } from './Context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <UseVirusContext>
          <App />
        </UseVirusContext>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
) 