import { useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import satelliteFragment from "../shaders/satellite/fragment.glsl"
import satelliteVertex from "../shaders/satellite/vertex.glsl"

export default function Eris({ sunDirection }: any) {
  // Eris
  const erisGeometry = useRef<any>( null )
  const erisMaterial = useRef<any>( null )
  const orbitAngleRef = useRef( Math.PI / 7 )

  const erisTexture = useLoader( THREE.TextureLoader, "../assets/textures/moons/eris.jpg" )

  erisTexture.colorSpace = THREE.SRGBColorSpace

  erisTexture.anisotropy = 8

  // Orbit
  const orbitRadius = 100
  const orbitSpeed = 0.0375

  useFrame(( _, delta ) => {
    erisGeometry.current.rotation.y += delta * 0.05

    const newOrbitAngle = orbitAngleRef.current + delta * orbitSpeed
    orbitAngleRef.current = newOrbitAngle

    const x = Math.cos( newOrbitAngle ) * orbitRadius
    const y = 0;
    const z = Math.sin( newOrbitAngle ) * orbitRadius

    erisGeometry.current.position.set( x, y, z )

    const sunPosition = new THREE.Vector3().subVectors(
      sunDirection,
      erisGeometry.current.position
    ).normalize()

    erisMaterial.current.uniforms.uSunDirection.value.copy( sunPosition )
  })
  
  return <>
    <mesh ref={ erisGeometry }>
      <sphereGeometry args={[ 1.25, 64, 64 ]} />
      <shaderMaterial 
        ref={ erisMaterial }
        vertexShader={ satelliteVertex }
        fragmentShader={ satelliteFragment }
        uniforms={{
          uMoonTexture: { value: erisTexture },
          uSunDirection: { value: sunDirection },
        }}
        toneMapped={ true }
      />
    </mesh>
  </>
}