import DissolveMaterial from "../../material/DissolveMaterial"
import { LogoBlockControls } from "../combined/LogoBlockControls"

import { animated } from "@react-spring/three"
import { useState } from "react"
import { useFrame } from "@react-three/fiber"

export default function U2( { controls, position, scale, geometry, material } ) {
  const [ visible, setVisible ] = useState( true )
  const [ clicked, setClicked ] = useState( false )

  useFrame(( _, delta ) => {
    LogoBlockControls( controls, clicked, delta )
  })

  return <>
    <animated.mesh
      position={ position } 
      scale={ scale }
      rotation={ [ 0, Math.PI, Math.PI * 0.5 ] } 
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
