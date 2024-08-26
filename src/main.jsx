import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/navbar/App.jsx'
import './index.css'
import AppMain from './components/main/appmain.jsx'

createRoot(document.getElementById('Header')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)

createRoot(document.getElementById('Main')).render(
  <StrictMode>
    <AppMain/>
  </StrictMode>
)
