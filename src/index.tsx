import { Canvas } from '@react-three/fiber'
import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Experience from './Experience.tsx'
import './styles/index.css'
import AmbientMusic from './components/AmbientMusic.tsx'
import RejectMobile from './2ds/RejectMobile.tsx'

const App = () => {
  const [ isLaptop, setIsLaptop ] = useState( false )

  useEffect(() => {
    const checkScreen = () => {
      setIsLaptop( window.innerWidth > 1024 )
    }

    checkScreen()
    window.addEventListener( "resize", checkScreen )

    return () => {
      window.removeEventListener( "resize", checkScreen )
    }
  }, [])

  if ( !isLaptop ) return <RejectMobile />

  return (
    <StrictMode>
      <Canvas
        camera={{ position: [ 50, 25, 100 ], fov: 40, near: 1, far: 4000 }}
        className="canvas-experience"
        shadows={ true }
        dpr={[ window.devicePixelRatio, 2 ]}
      >
        <Experience />
      </Canvas>

      <p className='w-screen absolute bottom-5 text-center text-opacity-50 text-white font-dm-mono-medium'>Press "SPACE" to reset view</p>
      
      <AmbientMusic />
    </StrictMode>
  )
}

// Disable strict mode if Arwes not working
createRoot( document.getElementById( 'root' )! ).render( <App /> )