import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

import GalaxyExp from "./GalaxyExp.jsx"

export default function GalaxyCanvas() {
  return <>

    <Canvas
      camera={{
        position: [ 0, 20, 100 ],
        fov: 55
      }}
    >
      <Suspense fallback={ null }>
        <GalaxyExp />
      </Suspense>
    </Canvas>
    
  </>
}
