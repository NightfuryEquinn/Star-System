import { useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import { TextureLoader } from "three"

export default function Technical() {

  const inhabitMap = useLoader(TextureLoader, '/src/assets/textures/haumea.jpg') 

  const inhabit = useRef()

  useFrame(({ clock }) => {
    const radius = 80 * 2
    const speed = 0.045
    const angle = clock.getElapsedTime() * speed + 25
    
    inhabit.current.position.x = Math.cos(angle) * radius
    inhabit.current.position.z = Math.sin(angle) * radius

    inhabit.current.rotation.y = angle * 0.75
  })

  return <>

    <mesh ref={ inhabit } scale={ 4.5 }>
      <sphereGeometry args={[ 1, 32, 32 ]} />
      <meshStandardMaterial map={ inhabitMap } roughness={ 1 } />
    </mesh>

  </>
}