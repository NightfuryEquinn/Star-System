import { animated } from "@react-spring/three"

export default function U2( { position, geometry, material } ) {
  return <>
    <animated.mesh
      position={ position } 
      rotation={ [ 0, Math.PI, Math.PI * 0.5 ] } 
      geometry={ geometry } 
      material={ material } 
    />
  </>
}
