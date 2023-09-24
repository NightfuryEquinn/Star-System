import { animated } from "@react-spring/three"

export default function U3( { geometry } ) {
  return <>
    <animated.mesh
      position={ [ -1, -22.65, 0 ] } 
      rotation={ [ 0, Math.PI, 0 ] } 
      geometry={ geometry }
    >
      <animated.meshStandardMaterial 
        color={ [ 7.5, 0.25, 0.25 ] } 
        toneMapped={ false }
        transparent={ true }
      />
    </animated.mesh>
  </>
}
