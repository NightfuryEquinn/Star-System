import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from 'three'

useTexture.preload([
  './textures/ceres.jpg',
  './textures/light_clouds.png'
])

export default function Sport({ onSetView }) {

  const [ terraMap, terraAtmoMap ] = useTexture([
    './textures/ceres.jpg',
    './textures/light_clouds.png'
  ])

  const terra = useRef()
  const terraAtmo = useRef()

  useFrame(({ clock }) => {
    const radius = 32 * 2
    const speed = 0.045
    const angle = clock.getElapsedTime() * speed + 4
    
    terra.current.position.x = Math.cos(angle) * radius
    terra.current.position.z = Math.sin(angle) * radius
    terraAtmo.current.position.x = Math.cos(angle) * radius
    terraAtmo.current.position.z = Math.sin(angle) * radius

    terra.current.rotation.y = angle * 0.75
    terraAtmo.current.rotation.x = -angle * 0.5
    terraAtmo.current.rotation.z = angle * 0.25
  })

  return <>
  
    <mesh ref={ terra } scale={ 1.25 }>
      <sphereGeometry args={[ 1, 32, 32 ]} />
      <meshStandardMaterial map={ terraMap } roughness={ 1 } />
    </mesh>

    <mesh ref={ terraAtmo } scale={ 1.26 } onClick={ (e) => { onSetView(); e.stopPropagation() } }>
      <sphereGeometry args={[ 1, 32, 32 ]} />
      <meshStandardMaterial map={ terraAtmoMap } side={ THREE.DoubleSide } transparent={ true } depthWrite={ true } />
    </mesh>

  </>
}
