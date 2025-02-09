import { useFrame, useLoader } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import * as THREE from "three"
import starFragment from "../shaders/star/fragment.glsl"
import starVertex from "../shaders/star/vertex.glsl"
import starAtmosphereFragment from "../shaders/star_atmosphere/fragment.glsl"
import starAtmosphereVertex from "../shaders/star_atmosphere/vertex.glsl"

export default function Star({ sunDirection }: any) {
  // Sun
  const starMaterial = useRef<any>( null )
  const starGeometry = useRef<any>( null )
  const sunSpherical = useMemo(() => new THREE.Spherical(1, Math.PI * 0.5, 0.5), [])

  const sunParameters = {
    sunLightColor: "#C86920",
    sunDarkColor: "#F9C353"
  }

  const sunTexture = useLoader( THREE.TextureLoader, "../assets/textures/solar/sun.jpg" )
  sunTexture.colorSpace = THREE.SRGBColorSpace
  sunTexture.anisotropy = 8

  // Atmosphere
  const starAtmosphereGeometry = useRef<any>( null )
  const starAtmosphereMaterial = useRef<any>( null )
  
  useFrame(() => {
    sunDirection.setFromSpherical( sunSpherical )
    starMaterial.current.uniforms.uTime.value += (1 / 60)
  })

  return <>
    <mesh ref={ starGeometry }>
      <sphereGeometry args={[ 5, 24, 24 ]} />
      <shaderMaterial
        ref={ starMaterial }
        vertexShader={ starVertex }
        fragmentShader={ starFragment }
        uniforms={{
          uTime: { value: 0 },
          uSunTexture: { value: sunTexture },
          uSunLightColor: { value: new THREE.Color(sunParameters.sunLightColor) },
          uSunDarkColor: { value: new THREE.Color(sunParameters.sunDarkColor) }
        }}
        toneMapped={ true }
      />
    </mesh>

    <mesh ref={ starAtmosphereGeometry }>
      <sphereGeometry args={[ 6.75, 24, 24 ]} />
      <shaderMaterial 
        ref={ starAtmosphereMaterial }
        side={ THREE.BackSide }
        transparent={ true }
        vertexShader={ starAtmosphereVertex }
        fragmentShader={ starAtmosphereFragment }
        uniforms={{
          uSunLightColor: { value: new THREE.Color(sunParameters.sunLightColor) },
          uSunDarkColor: { value: new THREE.Color(sunParameters.sunDarkColor) }
        }}
        toneMapped={ true }
      />
    </mesh>
  </>
}