import { Points } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import * as THREE from "three"
import starfieldFragment from "../shaders/starfield/fragment.glsl"
import starfieldVertex from "../shaders/starfield/vertex.glsl"

export default function InfiniteStarField({ size, color }: any) {
  const materialRef = useRef<any>()
  const starCount = 1000
  const positions = useMemo(() => {
    const positions = new Float32Array( starCount * 3 )
    for ( let i = 0; i < starCount; i++ ) {
      positions[ i * 3 + 0 ] = (Math.random() - 0.5) * size
      positions[ i * 3 + 1 ] = (Math.random() - 0.5) * size
      positions[ i * 3 + 2 ] = (Math.random() - 0.5) * size
    }

    return positions
  }, [ starCount, size ])

  useFrame(({ camera }) => {
    if ( materialRef.current ) {
      materialRef.current.uniforms.uCameraPosition.value.copy( camera.position )
    }
  })

  return <>
    <Points positions={ positions }>
      <shaderMaterial
        ref={ materialRef }
        attach="material"
        transparent
        uniforms={{
          uCameraPosition: { value: new THREE.Vector3() },
          uStarDistance: { value: size },
          uColor: { value: new THREE.Color( color ) }
        }}
        vertexShader={ starfieldVertex }
        fragmentShader={ starfieldFragment }
      />
    </Points>
  </>
}