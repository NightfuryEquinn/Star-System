import { Environment, OrbitControls, Stars } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Bloom, EffectComposer, Glitch } from '@react-three/postprocessing'
import { Perf } from "r3f-perf"
import { useRef, useState } from 'react'
import * as THREE from "three"
import Earth from './components/Earth'
import Star from './components/Star'

export default function Experience() {
  const sunDirection = new THREE.Vector3()

  const maxRadius = 1250
  const orbitControlsRef = useRef<any>()
  const [ controlsActive, setControlsActive ] = useState(true)

  const checkRadius = (camera: any) => {
    const distanceFromOrigin = camera.position.length()
    if (distanceFromOrigin >= maxRadius) {
      setControlsActive(false)
    }
  }

  useFrame(() => {
    if (!controlsActive) {
      orbitControlsRef.current.reset()
      setControlsActive(true)
    }
  })

  return <>
    <Perf position='top-left' />

    <color args={["#161A1D"]} attach="background" />
    
    <Environment
      background
      files={[
        "../assets/textures/galaxy/px.png",
        "../assets/textures/galaxy/nx.png",
        "../assets/textures/galaxy/py.png",
        "../assets/textures/galaxy/ny.png",
        "../assets/textures/galaxy/pz.png",
        "../assets/textures/galaxy/nz.png",
      ]}
    />
    
    <EffectComposer>
      <Glitch
        delay={ new THREE.Vector2(30, 60) }
        duration={ new THREE.Vector2(0.25, 0.5) }
        strength={ new THREE.Vector2(0.2, 0.8) }
        ratio={ 0.75 }
      />

      <Bloom luminanceThreshold={ 0.9 } luminanceSmoothing={ 0.9 } intensity={ 3.5 } mipmapBlur />
    </EffectComposer>

    <Star sunDirection={ sunDirection } />
    <Earth sunDirection={ sunDirection } />

    <ambientLight intensity={ 0.5 } />
    <pointLight castShadow intensity={ 5 } position={[0, 0, 0]}  />

    <Stars radius={ 300 } depth={ 40 } count={ 2500 } factor={ 5 } saturation={ 1 } speed={ 1 } fade />
    <Stars radius={ 400 } depth={ 40 } count={ 3750 } factor={ 7 } saturation={ 1 } speed={ 3 } fade />
    <Stars radius={ 500 } depth={ 40 } count={ 5000 } factor={ 9 } saturation={ 1 } speed={ 5 } fade />

    <OrbitControls
      ref={ orbitControlsRef }
      enableDamping
      maxDistance={ 1250 }
      panSpeed={ 1 }
      onChange={(e: any) => {
        checkRadius(e.target.object)
      }}
    />
  </>
}