import { useFrame } from '@react-three/fiber'
import { Center } from '@react-three/drei'
import { useRef } from 'react'

import starVert from '../../shaders/star/vertex.glsl?raw'
import starFrag from '../../shaders/star/fragment.glsl?raw'

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
        <shaderMaterial
          ref={ starMat }
          vertexShader={ starVert }
          fragmentShader={ starFrag }
          uniforms={{
            uTime: { value: 0 }
          }}
          toneMapped={ false }
        />
      </mesh>
      
    </Center>

  </>
}
