import { animated } from "@react-spring/three"
import { useState, useRef } from "react"
import { useFrame } from "@react-three/fiber"

import DissolveMaterial from "../../material/DissolveMaterial"
import * as THREE from "three"

export default function F1( { position, scale, geometry, material } ) {
  const [ visible, setVisible ] = useState( true )
  const [ clicked, setClicked ] = useState( false )

  const theMesh = useRef()

  const theVector = new THREE.Vector3()
  const theCameraVector = new THREE.Vector3()

  useFrame(( state ) => {
    if( clicked ) {
      theMesh.current.position.lerp( theVector.set( -100, 0, 0 ), 0.025 )

      state.camera.position.lerp( theCameraVector.set( -100, 25, 50 ), 0.025 )
      state.camera.lookAt( theMesh.current.position )
      
      state.camera.updateProjectionMatrix()
    } else {
      theMesh.current.position.lerp( theVector.set( 0, 0, 0 ), 0.025 )

      state.camera.position.lerp( theCameraVector.set( 0, 0, 75 ), 0.025 )
      state.camera.lookAt( theMesh.current.position )
      
      state.camera.updateProjectionMatrix()
    }
  })
  
  return <>
    <animated.mesh
      ref={ theMesh }
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
