import DissolveMaterial from "../../material/DissolveMaterial"

import { animated } from "@react-spring/three"
import { useState, useRef } from "react"
import { Html } from "@react-three/drei"
import { write } from "glitched-writer"

export default function Y3( { controls, position, scale, geometry, material } ) {
  const [ visible, setVisible ] = useState( true )
  const [ hover, setHover ] = useState( false )

  const theMesh = useRef()

  return <>
    <animated.mesh
      ref={ theMesh }
      name="Y3"
      position={ position } 
      scale={ scale }
      rotation={ [ 0, 0, 0 ] } 
      geometry={ geometry } 
      onClick={ ( e ) => {
        controls.setLookAt(
          0, -5, 25,
          0, -7.5, 0,
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
        write( "Y3Here", "#glitched-y3", "typewriter" )
        setHover( true )
        setVisible( false )
        e.stopPropagation()
      }} 
      onPointerLeave={ ( e ) => {
        write( "", "#glitched-y3", "typewriter" )
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
        position={ [ -2.5, -16, 0 ] }
        distanceFactor={ 75 }
        center
      >
        <h2 
          data-gw-string="Experimental" 
          className={`glitched-title lg:block hidden ease-in-out duration-300 ${ hover ? "opacity-100" : "opacity-0" }`}
        >
          Experimental
        </h2>
      </Html>
    </animated.mesh>

    <Html
      position={ [ 3, -40, 0 ] }
      distanceFactor={ 75 }
      center
    >
      <h2 
        className={`glitched-title text-center lg:hidden ease-in-out duration-300 ${ hover ? "opacity-100" : "opacity-0" }`}
        id="glitched-y3" 
      >
      </h2>
    </Html>
  </>
}
