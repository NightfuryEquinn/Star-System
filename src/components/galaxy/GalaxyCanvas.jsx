import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { useProgress } from "@react-three/drei"

import GalaxyExp from "./GalaxyExp.jsx"
import LoadingScreen from "../ui/LoadingScreen.jsx"

export default function GalaxyCanvas() {

  const { progress } = useProgress()

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

    <LoadingScreen />
    
  </>
}
