import DissolveMaterial from "../../material/DissolveMaterial"

import { animated } from "@react-spring/three"
import { useState, useRef } from "react"

export default function Y2( { controls, geometry, material } ) {
  const [ hover, setHover ] = useState( false )
  const [ clicked, setClicked ] = useState( false )

  const theMesh = useRef()

  return <>
    <animated.mesh
      ref={ theMesh }
      name="Y2"
      position={ [ 9, -11.5, 0 ] } 
      rotation={ [ 0, Math.PI, Math.PI * 0.5 ] } 
      geometry={ geometry } 
      onClick={ ( e ) => {
        controls.setLookAt(
          12.5, 5, 25,
          5, 0, 0,
          true
        )
        e.stopPropagation()
      }}
      onPointerMissed={ ( e ) => {
        controls.setLookAt(
          0, 0, 50,
          0, 0, 0,
          true
        )
        e.stopPropagation()
      }}
      onPointerEnter={ ( e ) => {
        setHover( true )

        e.stopPropagation()
      }} 
      onPointerLeave={ ( e ) => {
        setHover( false )

        e.stopPropagation()
      }}
    >
      <DissolveMaterial 
        baseMaterial={ material }
        visible={ hover ? false : true }
        thickness={ hover ? 0.425 : 1 }
      />
    </animated.mesh>
  </>
}
