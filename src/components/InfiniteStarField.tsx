import { useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

const generateStars = (count: number, size: number) => {
  const positions = []

  for (let i = 0; i < count; i++) {
    positions.push(
      ( Math.random() - 0.5 ) * size,
      ( Math.random() - 0.5 ) * size,
      ( Math.random() - 0.5 ) * size
    )
  }

  return new Float32Array( positions )
}

export default function InfiniteStarField({ count, size, gridSize, alternate = false }: any) {
  const groupRef = useRef<any>( null )
  const positions = generateStars( count, size )

  const whiteStarTexture = useLoader( THREE.TextureLoader, "../assets/textures/stars/white-star.png" )
  const blueStarTexture = useLoader( THREE.TextureLoader, "../assets/textures/stars/blue-star.png" )

  useFrame(({ camera }) => {
    const cameraGridX = Math.floor( camera.position.x / size )
    const cameraGridY = Math.floor( camera.position.y / size )
    const cameraGridZ = Math.floor( camera.position.z / size )

    groupRef.current.position.set(
      cameraGridX * size,
      cameraGridY * size,
      cameraGridZ * size
    );
  });

  return <>
    <group ref={ groupRef }>
      {Array.from({ length: gridSize ** 3 }).map(( _, i ) => {
        const x = ( i % gridSize ) - Math.floor( gridSize / 2 )
        const y = ( Math.floor( i / gridSize ) % gridSize ) - Math.floor( gridSize / 2 )
        const z = Math.floor( i / ( gridSize * gridSize )) - Math.floor( gridSize / 2 )

        return (
          <points key={ i } position={[ x * size, y * size, z * size ]}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                array={ positions }
                count={ positions.length / 3 }
                itemSize={ 3 }              
              >
              </bufferAttribute>
            </bufferGeometry>
            <pointsMaterial
              map={ alternate ? blueStarTexture : whiteStarTexture }
              size={ alternate ? 2.5 : 5 }
              sizeAttenuation
              color="#DEE2E6"
              transparent={ true }
              blending={ THREE.AdditiveBlending }
              depthWrite={ false }
            />
          </points>
        )
      })}
    </group>
  </>
}