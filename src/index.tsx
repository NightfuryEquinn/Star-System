import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Experience from './Experience.tsx'
import './styles/index.css'

// Disable strict mode if Arwes not working
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Experience />
  </StrictMode>,
)
