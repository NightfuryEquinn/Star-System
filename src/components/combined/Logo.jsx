import { easings, useSpring } from "@react-spring/three"
import { Center, useGLTF } from "@react-three/drei"
import { MeshStandardMaterial } from "three"

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

export default function Logo() {
  const { nodes } = useGLTF( "../model/logo.glb" )

  const blackMetal = new MeshStandardMaterial({
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
  } = useSpring({
    from: { 
      F1Animate: [ 0, 0, 0 ], F2Animate: [ 0, -6, 0 ],
      R1Animate: [ 8, 0, 0 ], R2Animate: [ 10, -6, 0 ], R3Animate: [ 4, -10, 0 ],
      Y1Animate: [ -1, -11.5, 0 ], Y2Animate: [ 9, -11.5, 0 ], Y3Animate: [ 4, -21.45, 0 ],
      U1Animate: [ -6, -18.5, 0 ], U2Animate: [ 14, -18.5, 0 ], U3Animate: [ -1, -22.65, 0 ], U4Animate: [ 9, -22.65, 0 ],
      F1Scale: 0.0, F2Scale: 0.0,
      R1Scale: 0.0, R2Scale: 0.0, R3Scale: 0.0,
      Y1Scale: 0.0, Y2Scale: 0.0, Y3Scale: 0.0,
      U1Scale: 0.0, U2Scale: 0.0, U3Scale: 0.0, U4Scale: 0.0,
      U3Opacity: 0.0, U4Opacity: 0.0
    },
    to: [
      {
        F1Animate: [ -50, 50, 50 ], F2Animate: [ -50, -50, 50 ],
        R1Animate: [ 50, 50, -50 ], R2Animate: [ 50, 50, -50 ], R3Animate: [ 50, -50, 50 ],
        Y1Animate: [ 50, -50, 50 ], Y2Animate: [ 50, 50, -50 ], Y3Animate: [ 50, 50, 50 ],
        U1Animate: [ -50, -50, 50 ], U2Animate: [ 50, 50, -50 ], U3Animate: [ -50, -50, -50 ], U4Animate: [ 50, -50, -50 ]
      },
      {
        F1Animate: [ 0, 0, 0 ], F2Animate: [ 0, -6, 0 ],
        F1Scale: 1.0, F2Scale: 1.0
      },
      {
        R1Animate: [ 8, 0, 0 ], R2Animate: [ 10, -6, 0 ], R3Animate: [ 4, -10, 0 ],
        R1Scale: 1.0, R2Scale: 1.0, R3Scale: 1.0
      },
      {
        Y1Animate: [ -1, -11.5, 0 ], Y2Animate: [ 9, -11.5, 0 ], Y3Animate: [ 4, -21.45, 0 ],
        Y1Scale: 1.0, Y2Scale: 1.0, Y3Scale: 1.0
      },
      {
        U1Animate: [ -6, -18.5, 0 ], U2Animate: [ 14, -18.5, 0 ], 
        U1Scale: 1.0, U2Scale: 1.0
      },
      {
        U3Animate: [ -1, -22.65, 0 ], U4Animate: [ 9, -22.65, 0 ]
      },
      {
        U3Scale: 1.0, U4Scale: 1.0,
        U3Opacity: 1.0, U4Opacity: 1.0
      }
    ],
    config: {
      mass: 1,
      tension: 1,
      duration: 2000,
      easing: easings.easeInOutCirc
    },
    loop: false,
    immediate: true
  })

  

  return <>
    <Center>
      <F1 position={ F1Animate } scale={ F1Scale } geometry={ nodes.F1.geometry } material={ blackMetal } />
      <F2 position={ F2Animate } scale={ F2Scale } geometry={ nodes.F2.geometry } material={ blackMetal } />

      <R1 position={ R1Animate } scale={ R1Scale } geometry={ nodes.R1.geometry } material={ blackMetal } />
      <R2 position={ R2Animate } scale={ R2Scale } geometry={ nodes.R2.geometry } material={ blackMetal } />
      <R3 position={ R3Animate } scale={ R3Scale } geometry={ nodes.R3.geometry } material={ blackMetal } />

      <Y1 position={ Y1Animate } scale={ Y1Scale } geometry={ nodes.Y1.geometry } material={ blackMetal } />
      <Y2 position={ Y2Animate } scale={ Y2Scale } geometry={ nodes.Y2.geometry } material={ blackMetal } />
      <Y3 position={ Y3Animate } scale={ Y3Scale } geometry={ nodes.Y3.geometry } material={ blackMetal } />

      <U1 position={ U1Animate } scale={ U1Scale } geometry={ nodes.U1.geometry } material={ blackMetal } />
      <U2 position={ U2Animate } scale={ U2Scale } geometry={ nodes.U2.geometry } material={ blackMetal } />
      <U3 position={ U3Animate } scale={ U3Scale } geometry={ nodes.U3.geometry } opacity={ U3Opacity } />
      <U4 position={ U4Animate } scale={ U4Scale } geometry={ nodes.U4.geometry } opacity={ U4Opacity } />
    </Center>
  </>
}
