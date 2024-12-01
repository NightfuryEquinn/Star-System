import { useFrame, useLoader, useThree } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

export default function SpaceCompass() {
  const compassRef = useRef<any>( null )
  const { camera, size } = useThree()

  const xAxisTexture = useLoader( THREE.TextureLoader, "../assets/textures/axes/x.png" )
  const yAxisTexture = useLoader( THREE.TextureLoader, "../assets/textures/axes/y.png" )
  const zAxisTexture = useLoader( THREE.TextureLoader, "../assets/textures/axes/z.png" )
  const pointTexture = useLoader( THREE.TextureLoader, "../assets/textures/axes/point.png" )

  const renderAxis = ( axis: "X" | "Y" | "Z" ) => {
    const axesMatcap = axis === "X" ? xAxisTexture : axis === "Y" ? yAxisTexture : zAxisTexture

    return <>
      <mesh>
        <cylinderGeometry args={[ 0.02, 0.02, 0.1875, 32 ]} />
        <meshMatcapMaterial matcap={ axesMatcap } />
        
        <mesh position={[ 0, 0.125, 0 ]}>
          <coneGeometry args={[ 0.05, 0.125, 32 ]} />
          <meshMatcapMaterial matcap={ axesMatcap } />
        </mesh>
      </mesh>
    </>
  }

  useFrame(() => {
    compassRef.current.lookAt( 0, 0, 0 )

    const margin = 75
    const ndcX = -1 + ( margin / size.width ) * 2
    const ndcY = -1 + ( margin / size.height ) * 2

    const vector = new THREE.Vector3( ndcX, ndcY, 0 )
    vector.unproject( camera )

    compassRef.current.position.set( vector.x, vector.y, vector.z )
  })

  return <>
    <group ref={ compassRef } scale={ 0.25 }>
      <group>
        <group position={[ 0, 0, 0.1875 ]} rotation={[ Math.PI / 2, 0, 0 ]}>{ renderAxis( "X" ) }</group>
        <group position={[ 0, 0.1875, 0 ]} rotation={[ 0, Math.PI, 0 ]}>{ renderAxis( "Y" ) }</group>
        <group position={[ -0.1875, 0, 0 ]} rotation={[ 0, 0, Math.PI / 2 ]}>{ renderAxis( "Z" ) }</group>
      </group>

      <mesh scale={ 0.25 }>
        <sphereGeometry args={[ 0.5, 16, 16 ]} />
        <meshMatcapMaterial matcap={ pointTexture } />
      </mesh>
    </group>
  </>
}