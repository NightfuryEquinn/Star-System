import DissolveMaterial from "../../material/DissolveMaterial"

import { animated } from "@react-spring/three"
import { useState, useRef } from "react"
import { Html } from "@react-three/drei"
import { write } from "glitched-writer"

export default function U2( { controls, position, scale, geometry, material } ) {
  const [ visible, setVisible ] = useState( true )
  const [ hover, setHover ] = useState( false )

  const theMesh = useRef()

  return <>
    <animated.mesh
      ref={ theMesh }
      name="U2"
      position={ position } 
      scale={ scale }
      rotation={ [ 0, Math.PI, Math.PI * 0.5 ] } 
      geometry={ geometry } 
      onClick={ ( e ) => {
        controls.setLookAt(
          25, 0, 25,
          2.5, -10, 0,
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
        write( "U2Here", "#glitched-u2", "typewriter" )
        setHover( true )
        setVisible( false )
        e.stopPropagation()
      }} 
      onPointerLeave={ ( e ) => {
        write( "", "#glitched-u2", "typewriter" )
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
        position={ [ -5, 13, 0 ] }
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
        id="glitched-u2" 
      >
      </h2>
    </Html>
  </>
}
