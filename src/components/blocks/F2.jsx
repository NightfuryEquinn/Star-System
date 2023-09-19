import DissolveMaterial from "../../material/DissolveMaterial"
import { LogoBlockControls } from "../combined/LogoBlockControls"

import { animated } from "@react-spring/three"
import { useState, useRef } from "react"
import { useFrame } from "@react-three/fiber"

export default function F2( { controls, position, scale, geometry, material } ) {
  const [ visible, setVisible ] = useState( true )
  const [ clicked, setClicked ] = useState( false )

  const theMesh = useRef()

  useFrame(( _, delta ) => {
    LogoBlockControls( theMesh, controls, clicked, delta )
  })

  return <>
    <animated.mesh
      ref={ theMesh }
      name="F2"
      position={ position } 
      scale={ scale }
      rotation={ [ 0, 0, 0 ] } 
      geometry={ geometry } 
      onClick={ ( e ) => {
        setClicked( !clicked )
        e.stopPropagation()
      }}
      onPointerEnter={ ( e ) => {
        setVisible( false )
        e.stopPropagation()
      }} 
      onPointerLeave={ ( e ) => {
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
