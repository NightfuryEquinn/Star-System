import { OrbitControls, Environment, Stars } from "@react-three/drei"

import Star from "./Star.jsx"
import Interest from "./Interest.jsx"
import Sport from "./Sport.jsx"
import Game from "./Game.jsx"
import Contact from "./Contact.jsx"
import Technical from "./Technical.jsx"
import WorkExp from "./WorkExp.jsx"

export default function GalayxExp({ onViewInterest, onViewSport, onViewGame, onViewContact, onViewTechnical, onViewWorkExp }) {

  return <>

    <OrbitControls makeDefault maxDistance={ 1500 } panSpeed={ 0.375 } />

    <color args={[ '#161a1d' ]} attach='background' />
    
    <Environment
      background
      files={[
        './env/px-min.png',
        './env/nx-min.png',
        './env/py-min.png',
        './env/ny-min.png',
        './env/pz-min.png',
        './env/nz-min.png'
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

    <Interest onSetView={ onViewInterest } />

    <Sport onSetView={ onViewSport } />

    <Game onSetView={ onViewGame } />

    <Contact onSetView={ onViewContact } />

    <Technical onSetView={ onViewTechnical } />

    <WorkExp onSetView={ onViewWorkExp } />

  </>
}