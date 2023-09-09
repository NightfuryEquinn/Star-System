import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Perf } from "r3f-perf"
import { EffectComposer, Glitch } from "@react-three/postprocessing"

import GalaxyExp from "./components/galaxy/GalaxyExp.jsx"

export default function App() {
  return (
    <>

      <Canvas camera={{ position: [ 0, 20, 100 ], fov: 55, near: 0.1, far: 1500 }}>

        <Perf position='top-left' />

        <Suspense fallback={ null }>
          <GalaxyExp />

          <EffectComposer>
            <Glitch 
              delay={[ 60, 120 ]}
              duration={[ 0.3, 0.5 ]}
              strength={[ 0.2, 0.4 ]}
            />
          </EffectComposer>
        </Suspense>
        
      </Canvas>
    
    </>
  )
}


