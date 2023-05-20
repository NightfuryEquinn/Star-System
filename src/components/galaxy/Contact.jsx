import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from 'three'

useTexture.preload([
  '../../assets/textures/earth_day.jpg',
  '../../assets/textures/earth_clouds.png'
])

export default function Contact({ onSetView }) {

  const [ earthMap, earthAtmoMap ] = useTexture([
    '../../assets/textures/earth_day.jpg',
    '../../assets/textures/earth_clouds.png'
  ])

  const earth = useRef()
  const earthAtmo = useRef()

  useFrame(({ clock }) => {
    const radius = 62 * 2
    const speed = 0.025
    const angle = clock.getElapsedTime() * speed + 16
    
    earth.current.position.x = Math.cos(angle) * radius
    earth.current.position.z = Math.sin(angle) * radius
    earthAtmo.current.position.x = Math.cos(angle) * radius
    earthAtmo.current.position.z = Math.sin(angle) * radius

    earth.current.rotation.y = angle * 0.55
    earthAtmo.current.rotation.x = -angle * 0.45
    earthAtmo.current.rotation.z = angle * 0.55
  })

  return <>

    <mesh ref={ earth } scale={ 2.75 }>
      <sphereGeometry args={[ 1, 32, 32 ]} />
      <meshStandardMaterial map={ earthMap } roughness={ 1 } />
    </mesh>

    <mesh ref={ earthAtmo } scale={ 2.76 } onClick={ (e) => { onSetView(); e.stopPropagation() } }>
      <sphereGeometry args={[ 1, 32, 32 ]} />
      <meshStandardMaterial map={ earthAtmoMap } opacity={ 0.5 } side={ THREE.DoubleSide } transparent={ true } depthWrite={ true } />
    </mesh>

  </>
}
