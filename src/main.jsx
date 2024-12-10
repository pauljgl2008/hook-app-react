import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HooksApp } from './Hooks'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HooksApp />
  </StrictMode>,
)
