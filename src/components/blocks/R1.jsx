import { animated } from "@react-spring/three"

export default function R1( { position, geometry, material } ) {
  return <>
    <animated.mesh
      position={ position } 
      rotation={ [ 0, Math.PI, 0 ] } 
      geometry={ geometry } 
      material={ material } 
    />
  </>
}
