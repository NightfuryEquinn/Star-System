import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Perf } from "r3f-perf"
import { EffectComposer, Glitch, Bloom } from "@react-three/postprocessing"

import Exp from "./components/Exp.jsx"

export default function App() {
  return <>
    <Canvas camera={ { position: [ 0, 0, 75 ], fov: 55 } }>
      <Perf position='top-left' />

      <Suspense fallback={ null }>
        <Exp />

        <EffectComposer>
          <Glitch 
            delay={ [ 60, 120 ] }
            duration={ [ 0.3, 0.5 ] }
            strength={ [ 0.2, 0.4 ] }
          />

          <Bloom
            mipmapBlur
            intensity={ 0.25 }
            luminanceThreshold={ 1 }
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  </>
}


