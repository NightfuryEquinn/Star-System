import { animated } from "@react-spring/three"
import { useState } from "react"

import DissolveMaterial from "../../material/DissolveMaterial"

export default function R2( { position, scale, geometry, material } ) {
  const [ visible, setVisible ] = useState( true )

  return <>
    <animated.mesh
      position={ position } 
      scale={ scale }
      rotation={ [ Math.PI, 0, 0 ] } 
      geometry={ geometry } 
      onPointerEnter={ () => {
        setVisible( false )
      }} 
      onPointerLeave={ () => {
        setVisible( true )
      }}
    >
      <DissolveMaterial 
        baseMaterial={ material }
        visible={ visible }
      />
    </animated.mesh>
  </>
}
