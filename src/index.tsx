import { Canvas } from '@react-three/fiber'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AmbientMusic from './components/AmbientMusic.tsx'
import Experience from './Experience.tsx'
import './styles/index.css'

const App = () => {
  return (
    <StrictMode>
      <Canvas
        camera={{ position: [ 50, 25, 100 ], fov: 40, near: 1, far: 4000 }}
        className="canvas-experience"
        dpr={[ window.devicePixelRatio, 2 ]}
      >
        <Experience />
      </Canvas>

      <AmbientMusic />
    </StrictMode>
  )
}

// Disable strict mode if Arwes not working
createRoot( document.getElementById( 'root' )! ).render( <App /> )