import { extend, useFrame } from '@react-three/fiber'
import { Center, shaderMaterial } from '@react-three/drei'
import { useRef } from 'react'

import starVert from '../../shaders/star/vertex.glsl?raw'
import starFrag from '../../shaders/star/fragment.glsl?raw'

const StarMaterial = shaderMaterial(
  {
    uTime: 0
  },
  starVert,
  starFrag,
)

extend({ StarMaterial })

export default function Star() {

  const star = useRef()
  const starMat = useRef()

  useFrame((state, delta) => {
    star.current.rotation.x += delta * -0.025
    star.current.rotation.y += delta * 0.025
    starMat.current.uniforms.uTime.value += delta
  })

  return <>

    <Center>

      <mesh ref={ star } scale={ 10 }>
        <sphereGeometry args={[ 1, 32, 32 ]} />
        <starMaterial ref={ starMat } toneMapped={ false } />
      </mesh>
      
    </Center>

  </>
}
