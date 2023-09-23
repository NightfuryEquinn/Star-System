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
import * as THREE from "three"

export default function Logo( { controls } ) {
  const { nodes } = useGLTF( "../model/logo.glb" )

  const blackMetal = new THREE.MeshStandardMaterial({
    color: "#161A1D",
    roughness: 0.375,
    metalness: 0.75,
  });

  return <>
    <Center>
      <F1 controls={ controls } geometry={ nodes.F1.geometry } material={ blackMetal } />
      <F2 controls={ controls } geometry={ nodes.F2.geometry } material={ blackMetal } />

      <R1 controls={ controls } geometry={ nodes.R1.geometry } material={ blackMetal } />
      <R2 controls={ controls } geometry={ nodes.R2.geometry } material={ blackMetal } />
      <R3 controls={ controls } geometry={ nodes.R3.geometry } material={ blackMetal } />

      <Y1 controls={ controls } geometry={ nodes.Y1.geometry } material={ blackMetal } />
      <Y2 controls={ controls } geometry={ nodes.Y2.geometry } material={ blackMetal } />
      <Y3 controls={ controls } geometry={ nodes.Y3.geometry } material={ blackMetal } />

      <U1 controls={ controls } geometry={ nodes.U1.geometry } material={ blackMetal } />
      <U2 controls={ controls } geometry={ nodes.U2.geometry } material={ blackMetal } />
      <U3 geometry={ nodes.U3.geometry } />
      <U4 geometry={ nodes.U4.geometry } />
    </Center>
  </>
}
