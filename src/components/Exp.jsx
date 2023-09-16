import { Float, PresentationControls } from "@react-three/drei"

import Logo from "./combined/Logo"

export default function Exp() {

  return <>
    <color args={ [ '#0a0c0d' ] } attach='background' />

    <ambientLight intensity={ 0.5 } />

    <pointLight 
      intensity={ 10 }
      position={ [ -20, 20, 5 ] }
    />

    <PresentationControls
      global
      cursor={ false }
      polar={ [ -0.75, 0.75 ] }
      azimuth={ [ -0.75, 0.75 ] }
      config={ { mass: 2, tension: 400 } }
      snap={ { mass: 4, tension: 600 } }
    >
      <Float
        rotationIntensity={ 0.75 }
        floatIntensity={ 0.75 }
        floatingRange={ [ -1.5, 1.5 ] }
      >
        <Logo />
      </Float>
    </PresentationControls>
  </>
}