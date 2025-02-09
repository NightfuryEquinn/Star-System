import { useFrame, useLoader } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import * as THREE from "three"
import saturnFragment from "../shaders/saturn/fragment.glsl"
import saturnVertex from "../shaders/saturn/vertex.glsl"
import saturnAtmosphereFragment from "../shaders/saturn_atmosphere/fragment.glsl"
import saturnAtmosphereVertex from "../shaders/saturn_atmosphere/vertex.glsl"

export default function Saturn({ sunDirection }: any) {
  // Saturn
  const saturnGeometry = useRef<any>( null )
  const saturnMaterial = useRef<any>( null )
  const saturnRingGeometry = useRef<any>( null )
  const saturnOrbitAngleRef = useRef( - Math.PI / 2 )

  const saturnParameters = {
    atmosphereDayColor: "#69859E",
    atmosphereNightColor: "#EECB90"
  }

  const saturnTexture = useLoader( THREE.TextureLoader, "../assets/textures/saturn/saturn.jpg" )
  const saturnRingTexture = useLoader( THREE.TextureLoader, "../assets/textures/saturn/saturn_ring.png" )

  saturnTexture.colorSpace = THREE.SRGBColorSpace
  saturnRingTexture.colorSpace = THREE.SRGBColorSpace

  saturnTexture.anisotropy = 8
  saturnRingTexture.anisotropy = 8

  // Atmosphere
  const atmosphereGeometry = useRef<any>( null )
  const atmosphereMaterial = useRef<any>( null )

  // Saturn Ring
  const ringGeometry = useMemo(() => {
    const ringGeometry = new THREE.RingGeometry( 4, 7, 64 );
    const pos = ringGeometry.attributes.position
    const uv = ringGeometry.attributes.uv;
    const v3 = new THREE.Vector3()

    for (let i = 0; i < pos.count; i++) {
      v3.fromBufferAttribute(pos, i)
      uv.setXY(i, v3.length() < 5 ? 0 : 1, 1)
    }

    return ringGeometry
  }, [])

  // Orbit
  const orbitRadius = 150
  const orbitSpeed = 0.005

  useFrame(( _, delta ) => {
    saturnGeometry.current.rotation.y += delta * 0.05
    saturnRingGeometry.current.rotation.x += Math.abs(Math.sin(delta)) * 0.005
    saturnRingGeometry.current.rotation.y += Math.abs(Math.sin(delta)) * 0.005 

    const newOrbitAngle = saturnOrbitAngleRef.current + delta * orbitSpeed
    saturnOrbitAngleRef.current = newOrbitAngle

    const x = Math.cos( newOrbitAngle ) * orbitRadius
    const y = 0
    const z = Math.sin( newOrbitAngle ) * orbitRadius

    saturnGeometry.current.position.set( x, y, z )
    atmosphereGeometry.current.position.set( x, y, z )
    saturnRingGeometry.current.position.set( x, y, z )

    const sunPosition = new THREE.Vector3().subVectors(
      sunDirection,
      saturnGeometry.current.position
    ).normalize()

    atmosphereMaterial.current.uniforms.uSunDirection.value.copy( sunPosition )
  })

  return <>
    <mesh ref={ saturnGeometry }>
      <sphereGeometry args={[ 3, 64, 64 ]} />
      <shaderMaterial 
        ref={ saturnMaterial }
        vertexShader={ saturnVertex }
        fragmentShader={ saturnFragment }
        uniforms={{
          uTime: { value: 0 },
          uSaturnTexture: { value: saturnTexture },
          uSunDirection: { value: sunDirection },
          uAtmosphereDayColor: { value: new THREE.Color( saturnParameters.atmosphereDayColor )},
          uAtmosphereNightColor: { value: new THREE.Color( saturnParameters.atmosphereNightColor )}
        }}
        toneMapped={ true }
      />
    </mesh>

    <mesh ref={ atmosphereGeometry }>
      <sphereGeometry args={[ 3.125, 64, 64 ]} />
      <shaderMaterial 
        ref={ atmosphereMaterial }
        side={ THREE.BackSide }
        transparent={ true }
        vertexShader={ saturnAtmosphereVertex }
        fragmentShader={ saturnAtmosphereFragment }
        uniforms={{
          uSunDirection: { value: sunDirection },
          uAtmosphereDayColor: { value: new THREE.Color( saturnParameters.atmosphereDayColor )},
          uAtmosphereNightColor: { value: new THREE.Color( saturnParameters.atmosphereNightColor )}
        }}
        toneMapped={ true }
      />
    </mesh>

    <mesh ref={ saturnRingGeometry } geometry={ ringGeometry } rotation={[ Math.PI / 2, 0, 0 ]}>
      <meshBasicMaterial transparent map={ saturnRingTexture } side={ THREE.DoubleSide } />
    </mesh>
  </>
}