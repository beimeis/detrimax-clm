import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { applyFrameScale } from './hooks/useFrameScale'
import './index.css'

applyFrameScale()

if (import.meta.env.DEV && 'serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => registration.unregister())
  })

  if ('caches' in window) {
    caches.keys().then((keys) => {
      keys.forEach((key) => caches.delete(key))
    })
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
