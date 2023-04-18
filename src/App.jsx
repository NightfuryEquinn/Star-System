import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"

import GalaxyExp from "./components/galaxy/GalaxyExp.jsx"
import LoadingScreen from "./components/ui/LoadingScreen.jsx"

export default function App() {

  const [ skipLoad, setSkipLoad ] = useState(false)
  
  return (
    <>

      <Canvas camera={{ position: [ 0, 20, 100 ], fov: 55 }}>
        <Suspense fallback={ null }>
          <GalaxyExp onClickInterest={ () => { setViewContent('interest') } } />
        </Suspense>
      </Canvas>
      
      <LoadingScreen skipped={ skipLoad } onSkipped={ () => setSkipLoad(true) } />

    </>
  )
}


