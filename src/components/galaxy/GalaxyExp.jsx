import { OrbitControls } from "@react-three/drei"
import { Perf } from "r3f-perf"
import { EffectComposer, Bloom } from '@react-three/postprocessing'

import GalaxyEnv from "./GalaxyEnv.jsx"
import Star from "./Star.jsx"
import Interest from "./Interest.jsx"
import Sport from "./Sport.jsx"
import Game from "./Game.jsx"
import Contact from "./Contact.jsx"
import Technical from "./Technical.jsx"
import WorkExp from "./WorkExp.jsx"

export default function Experience() {
  return <>

    <Perf position='top-left' />

    <OrbitControls makeDefault />

    {/* <EffectComposer>
      <Bloom 
        mipmapBlur 
        intensity={ 1.25 } 
        luminanceThreshold={ 1 } 
      />
    </EffectComposer> */}

    <GalaxyEnv />
    <ambientLight intensity={ 0.5 } />

    {/* <Star />
    <pointLight 
      intensity={ 5 }
      position={[ 0, 0, 0 ]}
    />

    <Interest />

    <Sport />

    <Game />

    <Contact />

    <Technical />

    <WorkExp /> */}

  </>
}
