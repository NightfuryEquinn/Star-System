import { useFrame } from '@react-three/fiber'
import { Center } from '@react-three/drei'
import { useRef } from 'react'

export default function Star() {

  const star = useRef()

  useFrame((state, delta) => {
    star.current.rotation.x += delta * -0.025
    star.current.rotation.y += delta * 0.025
  })

  return <>

    <Center>

      <mesh ref={ star } scale={ 10 } onClick={ (e) => e.stopPropagation() } >
        <sphereGeometry args={[ 1, 32, 32 ]} />
        <meshStandardMaterial color={[ 15, 3, 1 ]} toneMapped={ false } />
      </mesh>
      
    </Center>

  </>
}
