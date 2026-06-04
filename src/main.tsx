import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import uiPlugin from '@/plugins/ui'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  uiPlugin.install(
    <StrictMode>
      <App />
    </StrictMode>,
  ),
)
