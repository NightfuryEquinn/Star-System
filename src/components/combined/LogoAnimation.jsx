import { easings, useSpring } from "@react-spring/three"

export default function LogoAnimation() {
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
        R1Animate: [ 50, 50, -50 ], R2Animate: [ 50, 50, 50 ], R3Animate: [ 50, -50, 50 ],
        Y1Animate: [ -25, -50, 50 ], Y2Animate: [ 25, 50, -50 ], Y3Animate: [ 0, 0, -50 ],
        U1Animate: [ -50, -50, 50 ], U2Animate: [ 50, -50, -50 ], U3Animate: [ -50, 0, -50 ], U4Animate: [ 50, 0, -50 ]
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
      duration: 1250,
      easing: easings.easeInOutCirc
    },
    loop: false,
    immediate: true,
  })

  return {
    F1Animate, F2Animate, 
    R1Animate, R2Animate, R3Animate,
    Y1Animate, Y2Animate, Y3Animate,
    U1Animate, U2Animate, U3Animate, U4Animate,
    F1Scale, F2Scale, 
    R1Scale, R2Scale, R3Scale,
    Y1Scale, Y2Scale, Y3Scale,
    U1Scale, U2Scale, U3Scale, U4Scale,
    U3Opacity, U4Opacity
  }
}
