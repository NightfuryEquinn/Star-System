import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience.jsx'

export default function App() {
  
  return (
    <>
      <Canvas>
        <Suspense fallback={ null }>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  )
}


