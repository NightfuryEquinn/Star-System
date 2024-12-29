import { useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import satelliteFragment from "../shaders/satellite/fragment.glsl"
import satelliteVertex from "../shaders/satellite/vertex.glsl"

export default function Ceres({ sunDirection }: any) {
  // Ceres
  const ceresGeometry = useRef<any>( null )
  const ceresMaterial = useRef<any>( null )
  const orbitAngleRef = useRef( Math.PI / -4 )

  const ceresTexture = useLoader( THREE.TextureLoader, "../assets/textures/moons/ceres.jpg" )

  ceresTexture.colorSpace = THREE.SRGBColorSpace

  ceresTexture.anisotropy = 8

  // Orbit
  const orbitRadius = 90
  const orbitSpeed = 0.025

  useFrame(( _, delta ) => {
    ceresGeometry.current.rotation.y += delta * 0.05

    const newOrbitAngle = orbitAngleRef.current + delta * orbitSpeed
    orbitAngleRef.current = newOrbitAngle

    const x = Math.cos( newOrbitAngle ) * orbitRadius
    const y = 0;
    const z = Math.sin( newOrbitAngle ) * orbitRadius

    ceresGeometry.current.position.set( x, y, z )

    const sunPosition = new THREE.Vector3().subVectors(
      sunDirection,
      ceresGeometry.current.position
    ).normalize()

    ceresMaterial.current.uniforms.uSunDirection.value.copy( sunPosition )
  })
  
  return <>
    <mesh ref={ ceresGeometry }>
      <sphereGeometry args={[ 1.5, 64, 64 ]} />
      <shaderMaterial 
        ref={ ceresMaterial }
        vertexShader={ satelliteVertex }
        fragmentShader={ satelliteFragment }
        uniforms={{
          uMoonTexture: { value: ceresTexture },
          uSunDirection: { value: sunDirection },
        }}
        toneMapped={ true }
      />
    </mesh>
  </>
}