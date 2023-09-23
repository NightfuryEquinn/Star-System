import DissolveMaterial from "../../material/DissolveMaterial"

import { animated } from "@react-spring/three"
import { useState, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { Html } from "@react-three/drei"

export default function F1( { controls, geometry, material } ) {
  const [ hover, setHover ] = useState( false )
  const [ clicked, setClicked ] = useState( false )

  const theMesh = useRef()

  return <>
    <animated.mesh
      ref={ theMesh }
      name="F1"
      position={ [ 0, 0, 0 ] } 
      rotation={ [ 0, 0, 0 ] }
      geometry={ geometry }
      onClick={ ( e ) => {
        setClicked( true )
        controls.setLookAt(
          -12.5, 12.5, 0,
          -10, 12.5, 0,
          true
        )
        e.stopPropagation()
      }}
      onPointerMissed={ ( e ) => {
        setClicked( false )
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
      />

      <Html
        position={ [ -15, -2, 0 ] }
        center
        distanceFactor={ 50 }
      >
        <div className={`relative pr-4 border-white  duration-300 ease-in-out ${ hover ? "border-r-4" : "border-r-0" }`}>
          <h2 
            data-gw-string="F1 Here" 
            className={`glitched-title font-made-light text-4xl text-white whitespace-nowrap delay-200 duration-300 ease-in-out ${ hover ? "opacity-100" : "opacity-0" }`}
          >
            F1 Here
          </h2>
        </div>
      </Html>
    </animated.mesh>
  </>
}
