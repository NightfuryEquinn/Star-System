import { useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import satelliteFragment from "../shaders/satellite/fragment.glsl"
import satelliteVertex from "../shaders/satellite/vertex.glsl"

export default function Haumea({ sunDirection }: any) {
  // Haumea
  const haumeaGeometry = useRef<any>( null )
  const haumeaMaterial = useRef<any>( null )
  const orbitAngleRef = useRef( Math.PI )

  const haumeaTexture = useLoader( THREE.TextureLoader, "../assets/textures/moons/haumea.jpg" )

  haumeaTexture.colorSpace = THREE.SRGBColorSpace

  haumeaTexture.anisotropy = 8

  // Orbit
  const orbitRadius = 110
  const orbitSpeed = 0.05

  useFrame(( _, delta ) => {
    haumeaGeometry.current.rotation.y += delta * 0.05

    const newOrbitAngle = orbitAngleRef.current + delta * orbitSpeed
    orbitAngleRef.current = newOrbitAngle

    const x = Math.cos( newOrbitAngle ) * orbitRadius
    const y = 0;
    const z = Math.sin( newOrbitAngle ) * orbitRadius

    haumeaGeometry.current.position.set( x, y, z )

    const sunPosition = new THREE.Vector3().subVectors(
      sunDirection,
      haumeaGeometry.current.position
    ).normalize()

    haumeaMaterial.current.uniforms.uSunDirection.value.copy( sunPosition )
  })
  
  return <>
    <mesh ref={ haumeaGeometry }>
      <sphereGeometry args={[ 1.15, 64, 64 ]} />
      <shaderMaterial 
        ref={ haumeaMaterial }
        vertexShader={ satelliteVertex }
        fragmentShader={ satelliteFragment }
        uniforms={{
          uMoonTexture: { value: haumeaTexture },
          uSunDirection: { value: sunDirection },
        }}
        toneMapped={ true }
      />
    </mesh>
  </>
}