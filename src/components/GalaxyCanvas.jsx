import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

import GalaxyExp from "./GalaxyExp.jsx"

export default function GalaxyCanvas() {
  return <>

    <Canvas
      shadows
      camera={{
        position: [ 0, 10, 50 ]
      }}
    >
      <Suspense fallback={ null }>
        <GalaxyExp />
      </Suspense>
    </Canvas>
    
  </>
}
