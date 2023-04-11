import { useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import { TextureLoader } from "three"
import * as THREE from 'three'

export default function Sport() {

  const [ terraMap, terraAtmoMap ] = useLoader(TextureLoader, [
    '/src/assets/textures/ceres.jpg',
    '/src/assets/textures/light_clouds.png'
  ])

  const terra = useRef()
  const terraAtmo = useRef()

  useFrame(({ clock }) => {
    const radius = 16
    const speed = 0.075
    const angle = clock.getElapsedTime() * speed
    
    terra.current.position.x = Math.cos(angle) * radius
    terra.current.position.z = Math.sin(angle) * radius
    terraAtmo.current.position.x = Math.cos(angle) * radius
    terraAtmo.current.position.z = Math.sin(angle) * radius

    terra.current.rotation.y = angle * 0.75
    terraAtmo.current.rotation.x = -angle * 0.5
    terraAtmo.current.rotation.z = angle * 0.25
  })

  return <>
  
    <mesh ref={ terra } scale={ 1.5 } castShadow receiveShadow>
      <sphereGeometry args={[ 1, 32, 32 ]} />
      <meshStandardMaterial map={ terraMap } roughness={ 1 } />
    </mesh>

    <mesh ref={ terraAtmo } scale={ 1.51 } castShadow receiveShadow>
      <sphereGeometry args={[ 1, 32, 32 ]} />
      <meshStandardMaterial map={ terraAtmoMap } side={ THREE.DoubleSide } transparent={ true } depthWrite={ false } />
    </mesh>

  </>
}
