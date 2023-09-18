import DissolveMaterial from "../../material/DissolveMaterial"

import { animated } from "@react-spring/three"
import { useState } from "react"

export default function F1( { position, scale, geometry, material } ) {
  const [ visible, setVisible ] = useState( true )
  const [ clicked, setClicked ] = useState( false )
  
  return <>
    <animated.mesh
      position={ position } 
      scale={ scale }
      rotation={ [ 0, 0, 0 ] }
      geometry={ geometry }
      onClick={ () => {
        setClicked( !clicked )
      }}
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
