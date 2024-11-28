import { Canvas } from '@react-three/fiber'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Experience from './Experience.tsx'
import './styles/index.css'

// Disable strict mode if Arwes not working
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Canvas
      camera={{ position: [12, 8, 5], fov: 55, near: 1, far: 4000 }}
      className="canvas-experience"
    >
      <Experience />
    </Canvas>
  </StrictMode>,
)
