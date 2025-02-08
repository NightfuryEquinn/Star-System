import { useFrame, useLoader, useThree } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import earthFragment from "../shaders/earth/fragment.glsl"
import earthVertex from "../shaders/earth/vertex.glsl"
import atmosphereFragment from "../shaders/earth_atmosphere/fragment.glsl"
import atmosphereVertex from "../shaders/earth_atmosphere/vertex.glsl"
import moonFragment from "../shaders/moon/fragment.glsl"
import moonVertex from "../shaders/moon/vertex.glsl"

export default function Earth({ sunDirection, zoomedRef, orbitRef }: any) {
  const { camera } = useThree()
  const earthOffset = new THREE.Vector3( 0, 0, 10 )
  const moonOffset = new THREE.Vector3( 0, 0, 5 )

  const zoomTowards = ( planet: string ) => {
    zoomedRef.current = planet
  }

  // Earth
  const earthMaterial = useRef<any>( null )
  const earthGeometry = useRef<any>( null )
  const orbitAngleRef = useRef( Math.PI / 4 )

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
  const moonOrbitAngleRef = useRef( Math.PI / 2 )

  const moonTexture = useLoader( THREE.TextureLoader, "../assets/textures/moons/moon.jpg" )

  moonTexture.colorSpace = THREE.SRGBColorSpace

  moonTexture.anisotropy = 8

  // Orbit
  const orbitRadius = 50
  const orbitSpeed = 0.005
  const moonOrbitRadius = 7.5
  const moonOrbitSpeed = 0.015

  useFrame(( _, delta ) => {
    // For Earth
    earthGeometry.current.rotation.y += delta * 0.075
    earthMaterial.current.uniforms.uTime.value += delta
    // For Moon
    moonGeometry.current.rotation.y += delta * 0.05

    // Orbit angle for Earth
    const newOrbitAngle = orbitAngleRef.current + delta * orbitSpeed
    orbitAngleRef.current = newOrbitAngle

    const x = Math.cos( newOrbitAngle ) * orbitRadius
    const y = 0
    const z = Math.sin( newOrbitAngle ) * orbitRadius

    earthGeometry.current.position.set( x, y, z )
    atmosphereGeometry.current.position.set( x, y, z )

    // Orbit angle for Moon
    const newMoonOrbitAngle = moonOrbitAngleRef.current + delta * moonOrbitSpeed
    moonOrbitAngleRef.current = newMoonOrbitAngle

    const moonX = Math.cos( newMoonOrbitAngle ) * moonOrbitRadius
    const moonZ = Math.sin( newMoonOrbitAngle ) * moonOrbitRadius
    moonGeometry.current.position.set( x + moonX, y, z + moonZ );

    // Update moon to earth position
    moonMaterial.current.uniforms.uOrbitObjectDirection.value.copy( earthGeometry.current.position )

    // Update sun position to earth and atmosphere 
    const sunPosition = new THREE.Vector3().subVectors(
      sunDirection,
      earthGeometry.current.position
    ).normalize()

    earthMaterial.current.uniforms.uSunDirection.value.copy( sunPosition )
    atmosphereMaterial.current.uniforms.uSunDirection.value.copy( sunPosition )

    if ( zoomedRef.current === "Earth" ) {
      camera.position.copy( earthGeometry.current.position ).add( earthOffset )
      camera.lookAt( earthGeometry.current.position )
      orbitRef.current.enabled = false
    }

    if ( zoomedRef.current === "Moon" ) {
      camera.position.copy( moonGeometry.current.position ).add( moonOffset )
      camera.lookAt( moonGeometry.current.position )
      orbitRef.current.enabled = false
    }
  })

  return <>
    <mesh ref={ earthGeometry } onClick={ () => zoomTowards( "Earth" ) }>
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

    <mesh ref={ moonGeometry } onClick={ () => zoomTowards( "Moon" ) }>
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
