import { Environment, OrbitControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { Bloom, EffectComposer, Glitch } from '@react-three/postprocessing'
import { Howl } from 'howler'
import { Perf } from "r3f-perf"
import { useRef } from 'react'
import * as THREE from "three"
import AsteroidBelt from './components/AsteroidBelt'
import Earth from './components/Earth'
import InfiniteStarField from './components/InfiniteStarField'
import Saturn from './components/Saturn'
import SpaceCompass from './components/SpaceCompass'
import Star from './components/Star'
import Venus from './components/Venus'

export default function Experience() {
  const sunDirection = new THREE.Vector3( 0, 0, 1 )
  const sunDirectionForSaturn = new THREE.Vector3( 0, 0, 1 )
  const sunDirectionForVenus = new THREE.Vector3( 0, 0, 1 )
  
  // Mouse drag sound effect
  const { camera } = useThree()
  const prevCameraPosition = useRef<any>( camera.position.clone() )
  const totalDistance = useRef<any>( 0 )
  const threshold = 10

  const orbitSound = new Howl({ src: [ "../audio/orbit.mp3" ], volume: 0.5, rate: 2.5 })

  useFrame(() => {
    const currentPosition = camera.position
    const prevPos = prevCameraPosition.current

    const frameDistance = currentPosition.distanceTo( prevPos )
    totalDistance.current += frameDistance

    if ( !orbitSound.playing() && totalDistance.current >= threshold ) {
      orbitSound.play()
      totalDistance.current = 0
    }

    prevCameraPosition.current.copy( currentPosition )
  })

  return <>
    <Perf position='top-left' />

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
        delay={ new THREE.Vector2( 30, 60 ) }
        duration={ new THREE.Vector2( 0.25, 0.5 ) }
        strength={ new THREE.Vector2( 0.2, 0.8 ) }
        ratio={ 0.75 }
      />

      <Bloom luminanceThreshold={ 0.9 } luminanceSmoothing={ 0.9 } intensity={ 3.5 } mipmapBlur />
    </EffectComposer>

    <Star sunDirection={ sunDirection } />
    <Venus sunDirection={ sunDirectionForVenus } />
    <Earth sunDirection={ sunDirection } />
    <AsteroidBelt asteroidCount={ 500 } radius={ 100 } ringThickness={ 25 } />
    <Saturn sunDirection={ sunDirectionForSaturn } />

    <InfiniteStarField size={ 0.125 } color="#03274C" />
    <InfiniteStarField size={ 0.25 } color="#4D004F" />

    <ambientLight intensity={ 0.5 } />

    <SpaceCompass />

    <OrbitControls
      enableDamping
      panSpeed={ 1 }
    />
  </>
}