import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './indexes.css' // Diarahkan ke indexes.css kamu
import App from './apps.jsx' // Diarahkan ke Apps.jsx kamu

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)