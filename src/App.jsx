import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"
import { EffectComposer, Bloom } from '@react-three/postprocessing'

import GalaxyExp from "./components/galaxy/GalaxyExp.jsx"
import LoadingScreen from "./components/ui/LoadingScreen.jsx"

export default function App() {

  const [ skipLoad, setSkipLoad ] = useState(false)
  
  return (
    <>

      <Canvas
        camera={{
          position: [ 0, 20, 100 ],
          fov: 55
        }}
      >

        <Suspense fallback={ null }>
          { skipLoad && <GalaxyExp /> }
        </Suspense>

        {/* <EffectComposer>
          <Bloom 
            mipmapBlur 
            intensity={ 1.25 } 
            luminanceThreshold={ 1 } 
          />
        </EffectComposer> */}

      </Canvas>

      <LoadingScreen skipped={ skipLoad } onSkipped={ () => setSkipLoad(true) } />

    </>
  )
}


