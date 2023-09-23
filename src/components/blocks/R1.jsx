import DissolveMaterial from "../../material/DissolveMaterial"

import { animated } from "@react-spring/three"
import { useState, useRef } from "react"

export default function R1( { controls, position, scale, geometry, material } ) {
  const [ visible, setVisible ] = useState( true )
  const [ hover, setHover ] = useState( false )

  const theMesh = useRef()

  return <>
    <animated.mesh
      ref={ theMesh }
      name="R1"
      position={ position } 
      scale={ scale }
      rotation={ [ 0, Math.PI, 0 ] } 
      geometry={ geometry } 
      onClick={ ( e ) => {
        controls.setLookAt(
          25, 25, 25,
          5, 10, 0,
          true
        )
        e.stopPropagation()
      }}
      onPointerMissed={ ( e ) => {
        controls.setLookAt(
          0, 0, 75,
          0, 0, 0,
          true
        )
        e.stopPropagation()
      }}
      onPointerEnter={ ( e ) => {
        setHover( true )
        setVisible( false )
        e.stopPropagation()
      }} 
      onPointerLeave={ ( e ) => {
        setHover( false )
        setVisible( true )
        e.stopPropagation()
      }}
    >
      <DissolveMaterial 
        baseMaterial={ material }
        visible={ visible }
      />
    </animated.mesh>
  </>
}
