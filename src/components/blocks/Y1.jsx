import { animated } from "@react-spring/three"

export default function Y1( { position, geometry, material } ) {
  return <>
    <animated.mesh
      position={ position } 
      rotation={ [ 0, 0, Math.PI * 0.5 ] } 
      geometry={ geometry } 
      material={ material } 
    />
  </>
}
