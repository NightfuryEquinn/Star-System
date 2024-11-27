import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Star from './components/Star'
import Earth from './components/Earth'
import * as THREE from "three"
import { Perf } from "r3f-perf";
import { Bloom, EffectComposer } from '@react-three/postprocessing'

export default function Experience() {
  const sunDirection = new THREE.Vector3()

  return <>
    <Canvas
      shadows
      camera={{ position: [ 20, 8, 2 ], fov: 45, near: 1, far: 200 }}
      className="bg-black"
    >
      <Perf position='top-left' />
      
      {/* <Environment
        background
      /> */}
      
      <EffectComposer>
        <Bloom luminanceThreshold={ 0.5 } luminanceSmoothing={ 0.25 } intensity={ 1.5 } mipmapBlur />
      </EffectComposer>

      <Star sunDirection={ sunDirection } />
      <Earth sunDirection={ sunDirection } />

      <OrbitControls enableDamping makeDefault />
    </Canvas>
  </>
}