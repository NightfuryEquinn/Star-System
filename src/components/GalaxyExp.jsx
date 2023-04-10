import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { EffectComposer, Bloom } from '@react-three/postprocessing'

import GalaxyEnv from "./GalaxyEnv.jsx";
import Star from "./Star.jsx";
import Alpha from "./Alpha.jsx";

export default function Experience() {
  return <>

    <Perf position='top-left' />

    <OrbitControls makeDefault />

    <EffectComposer>
      <Bloom 
        mipmapBlur 
        intensity={ 1.5 } 
        luminanceThreshold={ 0.75 } 
      />
    </EffectComposer>

    <GalaxyEnv />

    <Star />

    <Alpha />

  </>
}
