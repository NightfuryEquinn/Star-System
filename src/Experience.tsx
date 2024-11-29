import { Environment, OrbitControls } from '@react-three/drei'
import { Bloom, EffectComposer, Glitch } from '@react-three/postprocessing'
import { Perf } from "r3f-perf"
import * as THREE from "three"
import Earth from './components/Earth'
import InfiniteStarField from './components/InfiniteStarField'
import Star from './components/Star'

export default function Experience() {
  const sunDirection = new THREE.Vector3()

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

    <InfiniteStarField count={ 100 } size={ 400 } gridSize={ 3 } />
    <InfiniteStarField count={ 200 } size={ 800 } gridSize={ 3 } />

    <ambientLight intensity={ 0.375 } />
    <pointLight castShadow intensity={ 5 } position={[0, 0, 0]}  />

    <OrbitControls
      enableDamping
      maxDistance={ 1250 }
      panSpeed={ 1 }
    />
  </>
}