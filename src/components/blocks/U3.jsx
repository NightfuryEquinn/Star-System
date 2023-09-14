import { animated } from "@react-spring/three"

export default function U3( { position, geometry } ) {
  return <>
    <animated.mesh
      position={ position } 
      rotation={ [ 0, Math.PI, 0 ] } 
      geometry={ geometry } 
    >
      <meshStandardMaterial 
        color={ [ 7.5, 0.25, 0.25 ] } 
        toneMapped={ false } 
      />
    </animated.mesh>
  </>
}
