import { useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import { TextureLoader } from "three"
import * as THREE from 'three'

export default function Alpha() {

  const volanicMap = useLoader(TextureLoader, '/src/assets/textures/volcanic.png') 

  const volanic = useRef()

  useFrame(({ clock }) => {
    const radius = 6
    const speed = 0.05
    const angle = clock.getElapsedTime() * speed
    
    volanic.current.position.x = Math.cos(angle) * radius
    volanic.current.position.z = Math.sin(angle) * radius

    volanic.current.lookAt(new THREE.Vector3(0, -3.75, 0))
  })

  return <>
    <mesh ref={ volanic } scale={ 1 }>
      <sphereGeometry args={[ 1, 32, 32 ]} />
      <meshStandardMaterial color={[ 8, 4, 1.5 ]} map={ volanicMap } roughness={ 0.5 } toneMapped={ false } />
    </mesh>
  </>
}