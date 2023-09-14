import { animated } from "@react-spring/three"

export default function U4( { position, geometry, opacity } ) {
  return <>
    <animated.mesh
      position={ position } 
      rotation={ [ 0, 0, 0 ] } 
      geometry={ geometry }
    >
      <animated.meshStandardMaterial 
        color={ [ 0.25, 0.25, 7.5 ] } 
        toneMapped={ false }
        transparent={ true }
        opacity={ opacity }
      />
    </animated.mesh>
  </>
}
