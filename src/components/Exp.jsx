import { Float, PresentationControls } from "@react-three/drei"

import Logo from "./combined/Logo"

export default function Exp() {

  return <>
    <color args={ [ '#0a0c0d' ] } attach='background' />

    <ambientLight intensity={ 0.5 } />

    <pointLight 
      intensity={ 5 }
      position={ [ -15, 10, 10 ] }
    />

    <PresentationControls
      global
      cursor={ false }
      polar={ [ -1, 0.75 ] }
      azimuth={ [ -1, 0.75 ] }
      config={ { mass: 2, tension: 400 } }
      snap={ { mass: 4, tension: 600 } }
    >
      <Float
        rotationIntensity={ 1.5 }
        floatIntensity={ 1.5 }
        floatingRange={ [ -2.5, 2.5 ] }
      >
        <Logo />
      </Float>
    </PresentationControls>
  </>
}