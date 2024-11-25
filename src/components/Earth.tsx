import earthVertex from "../shaders/earth/vertex.glsl"
import earthFragment from "../shaders/earth/fragment.glsl"
import { useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

export default function Earth({ sunDirection }: any) {
  const earthMaterial = useRef<any>(null)
  const earthGeometry = useRef<any>(null)

  const earthDayTexture = useLoader(THREE.TextureLoader, "../public/assets/textures/earth/day.jpg")
  const earthNightTexture = useLoader(THREE.TextureLoader, "../public/assets/textures/earth/night.jpg")
  const earthSpecularTexture = useLoader(THREE.TextureLoader, "../public/assets/textures/earth/specularClouds.jpg")
  
  earthDayTexture.colorSpace = THREE.SRGBColorSpace
  earthNightTexture.colorSpace = THREE.SRGBColorSpace

  earthDayTexture.anisotropy = 8
  earthNightTexture.anisotropy = 8

  useFrame(( _, delta ) => {
    if (earthGeometry.current) {
      earthGeometry.current.rotation.y -= delta * 0.05
    }

    if (earthMaterial.current) {
      earthMaterial.current.uniforms.uSunDirection.value.copy(sunDirection);
    }
  })

  return <>
    <mesh ref={ earthGeometry }>
      <sphereGeometry args={[ 2, 64, 64 ]} />
      <shaderMaterial
        ref={ earthMaterial }
        vertexShader={ earthVertex }
        fragmentShader={ earthFragment }
        uniforms={{
          uDayTexture: { value: earthDayTexture },
          uNightTexture: { value: earthNightTexture },
          uSpecularTexture: { value: earthSpecularTexture },
          uSunDirection: { value: sunDirection }
        }}
      />
    </mesh>
  </>
}
