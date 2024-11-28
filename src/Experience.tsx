import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Stars } from '@react-three/drei'
import Star from './components/Star'
import Earth from './components/Earth'
import * as THREE from "three"
import { Perf } from "r3f-perf";
import { Bloom, EffectComposer } from '@react-three/postprocessing'

export default function Experience() {
  const sunDirection = new THREE.Vector3()

  return <>
    <Canvas
      camera={{ position: [12, 8, 5], fov: 55, near: 1, far: 4000 }}
    >
      <Perf position='top-left' />

      <color args={["#161A1D"]} attach="background" />
      
      <Environment
        background
        files={[
          "../public/assets/textures/galaxy/px.png",
          "../public/assets/textures/galaxy/nx.png",
          "../public/assets/textures/galaxy/py.png",
          "../public/assets/textures/galaxy/ny.png",
          "../public/assets/textures/galaxy/pz.png",
          "../public/assets/textures/galaxy/nz.png",
        ]}
      />
      
      <EffectComposer>
        <Bloom luminanceThreshold={ 0.9 } luminanceSmoothing={ 0.9 } intensity={ 3.5 } mipmapBlur />
      </EffectComposer>

      <Star sunDirection={ sunDirection } />
      <Earth sunDirection={ sunDirection } />

      <ambientLight intensity={ 0.5 } />
      <pointLight castShadow intensity={ 5 } position={[0, 0, 0]}  />

      <Stars radius={ 300 } depth={ 40 } count={ 2500 } factor={ 5 } saturation={ 1 } speed={ 1 } fade />
      <Stars radius={ 400 } depth={ 40 } count={ 3750 } factor={ 7 } saturation={ 1 } speed={ 3 } fade />
      <Stars radius={ 500 } depth={ 40 } count={ 5000 } factor={ 9 } saturation={ 1 } speed={ 5 } fade />

      <OrbitControls enableDamping makeDefault />
    </Canvas>
  </>
}