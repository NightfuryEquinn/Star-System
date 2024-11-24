import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import starVertex from "./shaders/star/vertex.glsl"
import starFragment from "./shaders/star/fragment.glsl"

export default function Experience() {
  return <>
    <Canvas
      camera={{ fov: 45, near: 1, far: 200 }}
      className="bg-black"
    >
      <OrbitControls />

      <mesh>
        <sphereGeometry />
        <shaderMaterial
          vertexShader={ starVertex }
          fragmentShader={ starFragment }
        />
      </mesh>
    </Canvas>
  </>
}