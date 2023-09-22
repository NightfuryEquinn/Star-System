import DissolveMaterial from "../../material/DissolveMaterial"

import { animated } from "@react-spring/three"
import { Html } from "@react-three/drei"
import { useState, useRef } from "react"

export default function F2( { controls, position, scale, geometry, material } ) {
  const [ visible, setVisible ] = useState( true )
  const [ hover, setHover ] = useState( false )

  const theMesh = useRef()

  return <>
    <animated.mesh
      ref={ theMesh }
      name="F2"
      position={ position } 
      scale={ scale }
      rotation={ [ 0, 0, 0 ] } 
      geometry={ geometry } 
      onClick={ ( e ) => {
        controls.setLookAt(
          -25, 15, 25,
          -10, 6, 0,
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
      
      <Html 
        position={ [ -20, -5, 0 ] }
        distanceFactor={ 75 }
        center
      >
        <h2 
          data-gw-string="Experimental" 
          className={ `glitched-title ease-in-out duration-300 ${ hover ? "opacity-100" : "opacity-0" }`}
        >
          Experimental
        </h2>
      </Html>
        
    </animated.mesh>
  </>
}
