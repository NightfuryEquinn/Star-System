import { animated } from "@react-spring/three"

export default function U4( { geometry } ) {
  return <>
    <animated.mesh
      position={ [ 9, -22.65, 0 ] } 
      rotation={ [ 0, 0, 0 ] } 
      geometry={ geometry }
    >
      <animated.meshStandardMaterial 
        color={ [ 0.25, 0.25, 7.5 ] } 
        toneMapped={ false }
        transparent={ true }
      />
    </animated.mesh>
  </>
}
