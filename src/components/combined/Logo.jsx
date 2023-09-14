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
    roughness: 0.75,
    metalness: 0.5,
  });

  const { 
    F1Animate, F2Animate, 
    R1Animate, R2Animate, R3Animate,
    Y1Animate, Y2Animate, Y3Animate,
    U1Animate, U2Animate, U3Animate, U4Animate
  } = useSpring({
    from: { 
      F1Animate: [ 0, 0, 0 ], F2Animate: [ 0, -6, 0 ],
      R1Animate: [ 8, 0, 0 ], R2Animate: [ 10, -6, 0 ], R3Animate: [ 4, -10, 0 ],
      Y1Animate: [ -1, -11.5, 0 ], Y2Animate: [ 9, -11.5, 0 ], Y3Animate: [ 4, -21.45, 0 ],
      U1Animate: [ -6, -18.5, 0 ], U2Animate: [ 14, -18.5, 0 ], U3Animate: [ -1, -22.65, 0 ], U4Animate: [ 9, -22.65, 0 ]
    },
    to: [
      {
        F1Animate: [ -60, 60, 60 ], F2Animate: [ -60, -60, 60 ],
        R1Animate: [ 60, 60, -60 ], R2Animate: [ 60, 60, -60 ], R3Animate: [ 60, -60, 60 ],
        Y1Animate: [ 60, -60, 60 ], Y2Animate: [ 60, -60, -60 ], Y3Animate: [ 60, 60, 60 ],
        U1Animate: [ -60, -60, 60 ], U2Animate: [ 60, -60, -60 ], U3Animate: [ -60, -60, -60 ], U4Animate: [ 60, 60, -60 ]
      },
      {
        F1Animate: [ 0, 0, 0 ], F2Animate: [ 0, -6, 0 ],
        R1Animate: [ 8, 0, 0 ], R2Animate: [ 10, -6, 0 ], R3Animate: [ 4, -10, 0 ],
        Y1Animate: [ -1, -11.5, 0 ], Y2Animate: [ 9, -11.5, 0 ], Y3Animate: [ 4, -21.45, 0 ],
        U1Animate: [ -6, -18.5, 0 ], U2Animate: [ 14, -18.5, 0 ], U3Animate: [ -1, -22.65, 0 ], U4Animate: [ 9, -22.65, 0 ]
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
    <Center scale={ 1.5 }>
      <F1 position={ F1Animate } geometry={ nodes.F1.geometry } material={ blackMetal } />
      <F2 position={ F2Animate } geometry={ nodes.F2.geometry } material={ blackMetal } />

      <R1 position={ R1Animate } geometry={ nodes.R1.geometry } material={ blackMetal } />
      <R2 position={ R2Animate } geometry={ nodes.R2.geometry } material={ blackMetal } />
      <R3 position={ R3Animate } geometry={ nodes.R3.geometry } material={ blackMetal } />

      <Y1 position={ Y1Animate } geometry={ nodes.Y1.geometry } material={ blackMetal } />
      <Y2 position={ Y2Animate } geometry={ nodes.Y2.geometry } material={ blackMetal } />
      <Y3 position={ Y3Animate } geometry={ nodes.Y3.geometry } material={ blackMetal } />

      <U1 position={ U1Animate } geometry={ nodes.U1.geometry } material={ blackMetal } />
      <U2 position={ U2Animate } geometry={ nodes.U2.geometry } material={ blackMetal } />
      <U3 position={ U3Animate } geometry={ nodes.U3.geometry } />
      <U4 position={ U4Animate } geometry={ nodes.U4.geometry } />
    </Center>
  </>
}
