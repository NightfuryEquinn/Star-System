import { animated } from "@react-spring/three"

export default function U4( { position, geometry } ) {
  return <>
    <animated.mesh
      position={ position } 
      rotation={ [ 0, 0, 0 ] } 
      geometry={ geometry }
    >
      <meshStandardMaterial 
        color={ [ 0.25, 0.25, 7.5 ] } 
        toneMapped={ false } 
      />
    </animated.mesh>
  </>
}
