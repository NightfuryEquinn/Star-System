import starVertex from "../shaders/star/vertex.glsl"
import starFragment from "../shaders/star/fragment.glsl"
import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber";
import * as THREE from "three"

export default function Star({ sunDirection }: any) {
  const starMaterial = useRef<any>(null)
  const starGeometry = useRef<any>(null)
  const sunSpherical = useMemo(() => new THREE.Spherical(1, Math.PI * 0.5, 0.5), [])

  useFrame(( _, delta ) => {
    sunSpherical.theta += delta * 0.125
    sunDirection.setFromSpherical(sunSpherical)
    starGeometry.current.position.copy(sunDirection).multiplyScalar(5)

    if (starMaterial.current) {
      // starMaterial.current.uniforms.uTime.value += delta
    }
  })

  return <>
    <mesh ref={ starGeometry }>
      <icosahedronGeometry args={[ 0.1, 2 ]} />
      <shaderMaterial
        ref={ starMaterial }
        vertexShader={ starVertex }
        fragmentShader={ starFragment }
        uniforms={{
          uTime: { value: 0 }
        }}
      />
    </mesh>
  </>
}