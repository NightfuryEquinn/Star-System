import Logo from "./Logo"

import { Float, PresentationControls } from "@react-three/drei"
import CameraControls from "camera-controls"
import * as THREE from "three"
import { useThree, useFrame } from "@react-three/fiber"
import { useMemo } from "react"

CameraControls.install( { THREE } )

export default function Exp() {
  // External camera controls, disabling its controls to let presentation controls running
  const { camera, gl } = useThree( ( state ) => state )
  const controls = useMemo( () => new CameraControls( camera, gl.domElement ), [] )
  controls.smoothTime = 1.25
  controls.restThreshold = 1
  controls.enabled = false

  useFrame(( _, delta ) => {
    controls.update( delta )
  })

  return <>
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
      config={ { mass: 2, tension: 150 } }
      snap={ { mass: 4, tension: 150 } }
    >
      <Float>
        <Logo controls={ controls } />
      </Float>
    </PresentationControls>
  </>
}