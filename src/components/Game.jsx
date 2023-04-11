import { useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import { TextureLoader } from "three"
import * as THREE from 'three'

export default function Game() {

  const [ rockyMap, rockyAtmoMap ] = useLoader(TextureLoader, [
    '/src/assets/textures/makemake.jpg',
    '/src/assets/textures/high_clouds.png'
  ])

  const rocky = useRef()
  const rockyAtmo = useRef()

  useFrame(({ clock }) => {
    const radius = 25
    const speed = 0.0625
    const angle = clock.getElapsedTime() * speed
    
    rocky.current.position.x = Math.cos(angle) * radius
    rocky.current.position.z = Math.sin(angle) * radius
    rockyAtmo.current.position.x = Math.cos(angle) * radius
    rockyAtmo.current.position.z = Math.sin(angle) * radius

    rocky.current.rotation.y = angle * 0.25
    rockyAtmo.current.rotation.x = -angle * 0.25
    rockyAtmo.current.rotation.z = angle * 0.1875
  })

  return <>

    <mesh ref={ rocky } scale={ 2.5 } position-x={ 25 } castShadow receiveShadow>
      <sphereGeometry args={[ 1, 32, 32 ]} />
      <meshStandardMaterial map={ rockyMap } roughness={ 1 } />
    </mesh>

    <mesh ref={ rockyAtmo } scale={ 2.51 } position-x={ 25 } castShadow receiveShadow>
      <sphereGeometry args={[ 1, 32, 32 ]} />
      <meshStandardMaterial map={ rockyAtmoMap } side={ THREE.DoubleSide } transparent={ true } depthWrite={ false } />
    </mesh>

  </>
}
