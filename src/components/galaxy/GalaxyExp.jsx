import { OrbitControls, Environment, Stars, useTexture } from "@react-three/drei"
import { Perf } from "r3f-perf"

import Star from "./Star.jsx"
import Interest from "./Interest.jsx"
import Sport from "./Sport.jsx"
import Game from "./Game.jsx"
import Contact from "./Contact.jsx"
import Technical from "./Technical.jsx"
import WorkExp from "./WorkExp.jsx"

export default function Experience() {

  return <>

    {/* <Perf position='top-left' /> */}

    <OrbitControls makeDefault />

    <color args={[ '#161a1d' ]} attach='background' />
    
    <Environment
      background
      files={[
        '../src/assets/env/px-min.png',
        '../src/assets/env/nx-min.png',
        '../src/assets/env/py-min.png',
        '../src/assets/env/ny-min.png',
        '../src/assets/env/pz-min.png',
        '../src/assets/env/nz-min.png'
      ]}
    />

    <Stars 
      depth={ 60 }
      count={ 5000 }
      radius={ 350 }
      factor={ 7 }
      saturation={ 0 }
      fade
      speed={ 2 }
    />

    <ambientLight intensity={ 0.5 } />

    <Star />
    <pointLight 
      intensity={ 5 }
      position={[ 0, 0, 0 ]}
    />

    <Interest />

    <Sport />

    <Game />

    <Contact />

    <Technical />

    <WorkExp />

  </>
}
