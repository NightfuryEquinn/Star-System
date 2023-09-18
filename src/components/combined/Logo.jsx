import F1 from "../blocks/F1"
import F2 from "../blocks/F2"
import R1 from "../blocks/R1"
import R2 from "../blocks/R2"
import R3 from "../blocks/R3"
import Y1 from "../blocks/Y1"
import Y2 from "../blocks/Y2"
import Y3 from "../blocks/Y3"
import U1 from "../blocks/U1"
import U2 from "../blocks/U2"
import U3 from "../blocks/U3"
import U4 from "../blocks/U4"

import { Center, useGLTF } from "@react-three/drei"
import { useThree, useFrame } from "@react-three/fiber"
import { useMemo, useState } from "react"
import * as THREE from "three"
import CameraControls from "camera-controls"
import LogoAnimation from "./LogoAnimation"

CameraControls.install( { THREE } )

export default function Logo() {
  const { nodes } = useGLTF( "../model/logo.glb" )

  const blackMetal = new THREE.MeshStandardMaterial({
    color: "#161A1D",
    roughness: 0.375,
    metalness: 0.75,
  });

  const { 
    F1Animate, F2Animate, 
    R1Animate, R2Animate, R3Animate,
    Y1Animate, Y2Animate, Y3Animate,
    U1Animate, U2Animate, U3Animate, U4Animate,
    F1Scale, F2Scale, 
    R1Scale, R2Scale, R3Scale,
    Y1Scale, Y2Scale, Y3Scale,
    U1Scale, U2Scale, U3Scale, U4Scale,
    U3Opacity, U4Opacity
  } = LogoAnimation()

  //External camera controls, disabling its controls to let presentation controls running
  const { camera, gl } = useThree( ( state ) => state )
  const controls = useMemo( () => new CameraControls( camera, gl.domElement ), [] )
  controls.smoothTime = 3.75
  controls.restThreshold = 1
  controls.enabled = false

  return <>
    <Center>
      <F1 controls={ controls } position={ F1Animate } scale={ F1Scale } geometry={ nodes.F1.geometry } material={ blackMetal } />
      <F2 controls={ controls } position={ F2Animate } scale={ F2Scale } geometry={ nodes.F2.geometry } material={ blackMetal } />

      <R1 controls={ controls } position={ R1Animate } scale={ R1Scale } geometry={ nodes.R1.geometry } material={ blackMetal } />
      <R2 controls={ controls } position={ R2Animate } scale={ R2Scale } geometry={ nodes.R2.geometry } material={ blackMetal } />
      <R3 controls={ controls } position={ R3Animate } scale={ R3Scale } geometry={ nodes.R3.geometry } material={ blackMetal } />

      <Y1 controls={ controls } position={ Y1Animate } scale={ Y1Scale } geometry={ nodes.Y1.geometry } material={ blackMetal } />
      <Y2 controls={ controls } position={ Y2Animate } scale={ Y2Scale } geometry={ nodes.Y2.geometry } material={ blackMetal } />
      <Y3 controls={ controls } position={ Y3Animate } scale={ Y3Scale } geometry={ nodes.Y3.geometry } material={ blackMetal } />

      <U1 controls={ controls } position={ U1Animate } scale={ U1Scale } geometry={ nodes.U1.geometry } material={ blackMetal } />
      <U2 controls={ controls } position={ U2Animate } scale={ U2Scale } geometry={ nodes.U2.geometry } material={ blackMetal } />
      <U3 controls={ controls } position={ U3Animate } scale={ U3Scale } geometry={ nodes.U3.geometry } opacity={ U3Opacity } />
      <U4 controls={ controls } position={ U4Animate } scale={ U4Scale } geometry={ nodes.U4.geometry } opacity={ U4Opacity } />
    </Center>
  </>
}
