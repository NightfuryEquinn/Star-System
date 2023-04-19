import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"

import GalaxyExp from "./components/galaxy/GalaxyExp.jsx"
import LoadingScreen from "./components/ui/LoadingScreen.jsx"
import Content from "./components/ui/Content.jsx"

export default function App() {

  const [ skipLoad, setSkipLoad ] = useState(false)
  const [ view, setView ] = useState(false)
  const [ planet, setPlanet ] = useState(null)
  
  return (
    <>

      <Canvas camera={{ position: [ 0, 20, 100 ], fov: 55 }}>
        <Suspense fallback={ null }>
          <GalaxyExp 
            onViewInterest={ () => { setView(true), setPlanet("interest") } }
            onViewSport={ () => { setView(true), setPlanet("sport") } }
            onViewGame={ () => { setView(true), setPlanet("game") } }
            onViewContact={ () => { setView(true), setPlanet("contact") } }
            onViewTechnical={ () => { setView(true), setPlanet("technical") } }
            onViewWorkExp={ () => { setView(true), setPlanet("workexp") } }
          />
        </Suspense>
      </Canvas>
      
      <LoadingScreen skipped={ skipLoad } onSkipped={ () => setSkipLoad(true) } />

      <Content planet={ planet } view={ view } onSetView={ () => setView(false) } />

    </>
  )
}


