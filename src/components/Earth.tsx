import { useFrame, useLoader } from "@react-three/fiber"
import { useRef, useState } from "react"
import * as THREE from "three"
import earthFragment from "../shaders/earth/fragment.glsl"
import earthVertex from "../shaders/earth/vertex.glsl"
import atmosphereFragment from "../shaders/earth_atmosphere/fragment.glsl"
import atmosphereVertex from "../shaders/earth_atmosphere/vertex.glsl"
import moonFragment from "../shaders/moons/fragment.glsl"
import moonVertex from "../shaders/moons/vertex.glsl"

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

  // Moon
  const moonGeometry = useRef<any>( null )
  const moonMaterial = useRef<any>( null )

  const moonTexture = useLoader( THREE.TextureLoader, "../assets/textures/moons/moon.jpg" )

  moonTexture.colorSpace = THREE.SRGBColorSpace

  moonTexture.anisotropy = 8

  // Orbit
  const orbitRadius = 25
  const orbitSpeed = 0.05
  const moonOrbitRadius = 7.5
  const moonOrbitSpeed = 0.075

  const [ orbitAngle, setOrbitAngle ] = useState( Math.PI / 4 )
  const [ moonOrbitAngle, setMoonOrbitAngle ] = useState( Math.PI / 2 )

  useFrame(( _, delta ) => {
    // For Earth
    earthMaterial.current.uniforms.uTime.value += delta
    earthGeometry.current.rotation.y += delta * 0.075

    // For Moon
    moonGeometry.current.rotation.y += delta * 0.5

    // Orbit angle for Earth
    const newOrbitAngle = orbitAngle + delta * orbitSpeed
    setOrbitAngle( newOrbitAngle )

    const x = Math.cos( newOrbitAngle ) * orbitRadius
    const z = Math.sin( newOrbitAngle ) * orbitRadius

    earthGeometry.current.position.set( x, 0, z )
    atmosphereGeometry.current.position.set( x, 0, z )

    // Orbit angle for Moon
    const newMoonOrbitAngle = moonOrbitAngle + delta * moonOrbitSpeed
    setMoonOrbitAngle( newMoonOrbitAngle )

    const moonX = Math.cos( newMoonOrbitAngle ) * moonOrbitRadius
    const moonZ = Math.sin( newMoonOrbitAngle ) * moonOrbitRadius
    moonGeometry.current.position.set( x + moonX, 0, z + moonZ );

    // Update moon to earth position
    moonMaterial.current.uniforms.uOrbitObjectDirection.value.copy( earthGeometry.current.position )

    // Update sun position to earth and atmosphere 
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

    <mesh ref={ moonGeometry }>
      <sphereGeometry args={[ 0.75, 64, 64 ]} />
      <shaderMaterial 
        ref={ moonMaterial }
        vertexShader={ moonVertex }
        fragmentShader={ moonFragment }
        uniforms={{
          uMoonTexture: { value: moonTexture },
          uSunDirection: { value: sunDirection },
          uOrbitObjectDirection: { value: new THREE.Vector3(0, 0, 0) },
        }}
        toneMapped={ true }
      />
    </mesh>
  </>
}
