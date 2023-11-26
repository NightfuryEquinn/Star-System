import DissolveMaterial from "../../material/DissolveMaterial"

import { animated } from "@react-spring/three"
import { useState, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { Html } from "@react-three/drei"

export default function F2( { controls, geometry, material } ) {
  const [ hover, setHover ] = useState( false )
  const [ clicked, setClicked ] = useState( false )

  const theMesh = useRef()

  useFrame(() => {
    if( clicked ) {
      theMesh.current.position.lerp(
        new THREE.Vector3( -15, 0, 10 ), 0.015
      )
    } else {
      theMesh.current.position.lerp(
        new THREE.Vector3( 0, -6, 0 ), 0.015
      )
    }
  })

  return <>
    <animated.mesh
      ref={ theMesh }
      name="F2"
      position={ [ 0, -6, 0 ] } 
      rotation={ [ 0, 0, 0 ] } 
      geometry={ geometry } 
      onClick={ ( e ) => {
        setClicked( true )
        controls.setLookAt(
          -25, 0, -50,
          -25, 0, -50,
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
        position={ [ -15, -4, 0 ] }
        center
        distanceFactor={ 50 }
      >
        <div className={`relative pr-4 border-white duration-300 ease-in-out ${ hover ? "border-r-4" : "border-r-0" }`}>
          <h2 
            data-gw-string="F2 Here" 
            className={`glitched-title font-made-light text-4xl text-white whitespace-nowrap delay-200 duration-300 ease-in-out ${ hover ? "opacity-100" : "opacity-0" }`}
          >
            Mobile<br/>Developer
          </h2>
        </div>
      </Html>
    </animated.mesh>
  </>
}
