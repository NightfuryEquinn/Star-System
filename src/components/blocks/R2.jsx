import { animated } from "@react-spring/three"

export default function R2( { position, geometry, material } ) {
  return <>
    <animated.mesh
      position={ position } 
      rotation={ [ Math.PI, 0, 0 ] } 
      geometry={ geometry } 
      material={ material } 
    />
  </>
}
