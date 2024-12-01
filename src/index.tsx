import { Canvas } from '@react-three/fiber'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Experience from './Experience.tsx'
import './styles/index.css'
import AmbientMusic from './components/AmbientMusic.tsx'

// Disable strict mode if Arwes not working
createRoot( document.getElementById( 'root' )! ).render(
  <StrictMode>
    <Canvas
      camera={{ position: [ 25, 8, 5 ], fov: 40, near: 1, far: 4000 }}
      className="canvas-experience"
    >
      <Experience />
    </Canvas>

    <AmbientMusic />
  </StrictMode>,
)
