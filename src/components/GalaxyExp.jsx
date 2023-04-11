import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { EffectComposer, Bloom } from '@react-three/postprocessing'

import GalaxyEnv from "./GalaxyEnv.jsx";
import Star from "./Star.jsx";
import Interest from "./Interest.jsx";
import Sport from "./Sport.jsx";
import Game from "./Game.jsx";

export default function Experience() {
  return <>

    <Perf position='top-left' />

    <OrbitControls makeDefault />

    {/* <EffectComposer>
      <Bloom 
        mipmapBlur 
        intensity={ 1.5 } 
        luminanceThreshold={ 0.75 } 
      />
    </EffectComposer> */}

    <GalaxyEnv />
    <ambientLight intensity={ 0.5 } />

    <Star />
    <pointLight 
      castShadow 
      intensity={ 5 }
      position={[ 0, 0, 0 ]}
      shadow-normalBias={ 1 }
      shadow-mapSize={[ 1080, 1080 ]}
    />

    <Interest />

    <Sport />

    <Game />

  </>
}
