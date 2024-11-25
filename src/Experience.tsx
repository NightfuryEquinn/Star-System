import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Star from './components/Star'
import Earth from './components/Earth'
import * as THREE from "three"

export default function Experience() {
  const sunDirection = new THREE.Vector3()

  return <>
    <Canvas
      camera={{ position: [ 12, 8, 2 ], fov: 45, near: 1, far: 200 }}
      className="bg-black"
    >
      <OrbitControls enableDamping />

      <Star sunDirection={ sunDirection } />
      <Earth sunDirection={ sunDirection } />
    </Canvas>
  </>
}