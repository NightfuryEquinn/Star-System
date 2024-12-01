import { useFrame, useLoader } from "@react-three/fiber"
import { useRef, useState } from "react"
import * as THREE from "three"
import earthFragment from "../shaders/earth/fragment.glsl"
import earthVertex from "../shaders/earth/vertex.glsl"
import atmosphereFragment from "../shaders/earth_atmosphere/fragment.glsl"
import atmosphereVertex from "../shaders/earth_atmosphere/vertex.glsl"

export default function Earth({ sunDirection }: any) {
  // Earth
  const earthMaterial = useRef<any>( null )
  const earthGeometry = useRef<any>( null )

  const earthParameters = {
    atmosphereDayColor: "#2E6CCB",
    atmosphereNightColor: "#E06F00"
  }

  const earthDayTexture = useLoader( THREE.TextureLoader, "../assets/textures/earth/day.jpg" )
  const earthNightTexture = useLoader( THREE.TextureLoader, "../assets/textures/earth/night.jpg" )
  const earthSpecularTexture = useLoader( THREE.TextureLoader, "../assets/textures/earth/specularClouds.jpg" )
  
  earthDayTexture.colorSpace = THREE.SRGBColorSpace
  earthNightTexture.colorSpace = THREE.SRGBColorSpace

  earthDayTexture.anisotropy = 8
  earthNightTexture.anisotropy = 8
  earthSpecularTexture.anisotropy = 8

  // Atmosphere
  const atmosphereGeometry = useRef<any>( null )
  const atmosphereMaterial = useRef<any>( null )

  // Orbit
  const orbitRadius = 20
  const orbitSpeed = 0.025
  const [ orbitAngle, setOrbitAngle ] = useState( 0 )

  useFrame(( _, delta ) => {
    earthMaterial.current.uniforms.uTime.value += delta
    earthGeometry.current.rotation.y += delta * 0.075

    const newOrbitAngle = orbitAngle + delta * orbitSpeed
    setOrbitAngle( newOrbitAngle )

    const x = Math.cos( newOrbitAngle ) * orbitRadius
    const z = Math.sin( newOrbitAngle ) * orbitRadius

    earthGeometry.current.position.set( x, 0, z )
    atmosphereGeometry.current.position.set( x, 0, z )

    const sunPosition = new THREE.Vector3().subVectors(
      sunDirection,
      earthGeometry.current.position
    ).normalize()

    earthMaterial.current.uniforms.uSunDirection.value.copy( sunPosition )
    atmosphereMaterial.current.uniforms.uSunDirection.value.copy( sunPosition )
  })

  return <>
    <mesh ref={ earthGeometry }>
      <sphereGeometry args={[ 2, 64, 64 ]} />
      <shaderMaterial
        ref={ earthMaterial }
        vertexShader={ earthVertex }
        fragmentShader={ earthFragment }
        uniforms={{
          uTime: { value: 0 },
          uDayTexture: { value: earthDayTexture },
          uNightTexture: { value: earthNightTexture },
          uSpecularTexture: { value: earthSpecularTexture },
          uSunDirection: { value: sunDirection },
          uAtmosphereDayColor: { value: new THREE.Color( earthParameters.atmosphereDayColor )},
          uAtmosphereNightColor: { value: new THREE.Color( earthParameters.atmosphereNightColor )}
        }}
        toneMapped={ true }
      />
    </mesh>

    <mesh ref={ atmosphereGeometry }>
      <sphereGeometry args={[ 2.125, 64, 64 ]} />
      <shaderMaterial
        ref={ atmosphereMaterial }
        side={ THREE.BackSide }
        transparent={ true }
        vertexShader={ atmosphereVertex }
        fragmentShader={ atmosphereFragment }
        uniforms={{
          uSunDirection: { value: sunDirection },
          uAtmosphereDayColor: { value: new THREE.Color( earthParameters.atmosphereDayColor )},
          uAtmosphereNightColor: { value: new THREE.Color( earthParameters.atmosphereNightColor )}
        }}
        toneMapped={ true }
      />
    </mesh>
  </>
}
