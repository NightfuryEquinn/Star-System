import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

// useTexture.preload('./textures/gaseous.png')

export default function WorkExp({ onSetView }) {

  const gasMap = useTexture('./textures/gaseous.png') 

  const gas = useRef()

  useFrame(({ clock }) => {
    const radius = 95 * 2
    const speed = 0.05
    const angle = clock.getElapsedTime() * speed + 36
    
    gas.current.position.x = Math.cos(angle) * radius
    gas.current.position.z = Math.sin(angle) * radius

    gas.current.rotation.y = angle * 1.05
  })

  return <>

    <mesh ref={ gas } scale={ 5.75 } onClick={ (e) => { onSetView(); e.stopPropagation() } }>
      <sphereGeometry args={[ 1, 32, 32 ]} />
      <meshStandardMaterial map={ gasMap } roughness={ 1 } />
    </mesh>

  </>
}