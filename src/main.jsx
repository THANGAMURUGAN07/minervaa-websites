import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import emailjs from '@emailjs/browser'
import { EMAILJS_PUBLIC_KEY } from './config/emailjs'

// Initialize EmailJS once globally (v4 API requires object, not string)
emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
