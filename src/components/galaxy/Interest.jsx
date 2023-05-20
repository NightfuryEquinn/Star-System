import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from 'three'

useTexture.preload('src/assets/textures/volcanic.png')

export default function Interest({ onSetView }) {

  const volanicMap = useTexture('src/assets/textures/volcanic.png') 

  const volanic = useRef()

  useFrame(({ clock }) => {
    const radius = 20 * 2
    const speed = 0.025
    const angle = clock.getElapsedTime() * speed + 1
    
    volanic.current.position.x = Math.cos(angle) * radius
    volanic.current.position.z = Math.sin(angle) * radius

    volanic.current.lookAt(new THREE.Vector3(0, 0, 0))
  })

  return <>

    <mesh ref={ volanic } scale={ 1 } onClick={ (e) => { onSetView(); e.stopPropagation() } }>
      <sphereGeometry args={[ 1, 32, 32 ]} />
      <meshStandardMaterial color={[ 8, 4, 1.5 ]} map={ volanicMap } roughness={ 1 } toneMapped={ false } />
    </mesh>

  </>
}