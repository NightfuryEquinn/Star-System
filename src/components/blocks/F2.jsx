import { animated } from "@react-spring/three"

export default function F2( { position, geometry, material } ) {
  return <>
    <animated.mesh 
      position={ position } 
      rotation={ [ 0, 0, 0 ] } 
      geometry={ geometry } 
      material={ material } 
    />
  </>
}
