import { useFrame, useLoader, useThree } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import venusFragment from "../shaders/venus/fragment.glsl"
import venusVertex from "../shaders/venus/vertex.glsl"
import venusAtmosphereFragment from "../shaders/venus_atmosphere/fragment.glsl"
import venusAtmosphereVertex from "../shaders/venus_atmosphere/vertex.glsl"

export default function Venus({ sunDirection, zoomedRef, orbitRef }: any) {
  const { camera } = useThree()
  const offset = new THREE.Vector3( 0, 0, 10 )

  const zoomTowards = () => {
    zoomedRef.current = "Venus"
  }

  // Venus
  const venusGeometry = useRef<any>( null )
  const venusMaterial = useRef<any>( null )
  const venusOrbitAngleRef = useRef( Math.PI )
  
  const venusParameters = {
    atmosphereDayColor: "#939FA5",
    atmosphereNightColor: "#C3BCA4"
  }

  const venusTexture = useLoader( THREE.TextureLoader, "../assets/textures/venus/venus.jpg" )
  const venusAtmosphereTexture = useLoader( THREE.TextureLoader, "../assets/textures/venus/venus_atmosphere.jpg" )

  venusTexture.colorSpace = THREE.SRGBColorSpace
  venusAtmosphereTexture.colorSpace = THREE.SRGBColorSpace

  venusTexture.anisotropy = 8
  venusAtmosphereTexture.anisotropy = 8

  // Atmosphere
  const atmosphereGeometry = useRef<any>( null )
  const atmosphereMaterial = useRef<any>( null )

  // Orbit
  const orbitRadius = 25
  const orbitSpeed = 0.025

  useFrame(( _, delta ) => {
    // For Venus
    venusGeometry.current.rotation.y += delta * 0.0125
    venusMaterial.current.uniforms.uTime.value += delta

    // Orbit angle for Venus
    const newOrbitAngle = venusOrbitAngleRef.current + delta * orbitSpeed
    venusOrbitAngleRef.current = newOrbitAngle

    const x = Math.cos( newOrbitAngle ) * orbitRadius
    const z = Math.sin( newOrbitAngle ) * orbitRadius

    venusGeometry.current.position.set( x, 0, z )
    atmosphereGeometry.current.position.set( x, 0, z )

    // Update sun position to venus and atmosphere
    const sunPosition = new THREE.Vector3().subVectors(
      sunDirection,
      venusGeometry.current.position
    ).normalize()

    venusMaterial.current.uniforms.uSunDirection.value.copy( sunPosition )
    atmosphereMaterial.current.uniforms.uSunDirection.value.copy( sunPosition )

    if ( zoomedRef.current === "Venus" ) {
      camera.position.copy( venusGeometry.current.position ).add( offset )
      camera.lookAt( venusGeometry.current.position )
      orbitRef.current.enabled = false
    }
  })

  return <>
    <mesh ref={ venusGeometry } onClick={ zoomTowards }>
      <sphereGeometry args={[ 1.8, 64, 64 ]} />
      <shaderMaterial 
        ref={ venusMaterial }
        vertexShader={ venusVertex }
        fragmentShader={ venusFragment }
        uniforms={{
          uTime: { value: 0 },
          uTexture: { value: venusTexture },
          uAtmosphereTexture: { value: venusAtmosphereTexture },
          uSunDirection: { value: sunDirection },
          uAtmosphereDayColor: { value: new THREE.Color( venusParameters.atmosphereDayColor )},
          uAtmosphereNightColor: { value: new THREE.Color( venusParameters.atmosphereNightColor )}
        }}
        toneMapped={ true }
      />
    </mesh>

    <mesh ref={ atmosphereGeometry }>
      <sphereGeometry args={[ 1.95, 64, 64 ]} />
      <shaderMaterial 
        ref={ atmosphereMaterial }
        side={ THREE.BackSide }
        transparent={ true }
        vertexShader={ venusAtmosphereVertex }
        fragmentShader={ venusAtmosphereFragment }
        uniforms={{
          uSunDirection: { value: sunDirection },
          uAtmosphereDayColor: { value: new THREE.Color( venusParameters.atmosphereDayColor )},
          uAtmosphereNightColor: { value: new THREE.Color( venusParameters.atmosphereNightColor )}
        }}
        toneMapped={ true }
      />
    </mesh>
  </>
}