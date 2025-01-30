import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { OverlayProvider } from './contexts/OverlayProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OverlayProvider>
      <App />
    </OverlayProvider>
  </StrictMode>,
)
