import { Point, Points } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useMemo, useRef, useState } from "react"
import * as THREE from "three"

const GRID_SIZE = 5
const SPACING = 5
const BOUNDARY = GRID_SIZE * SPACING * 0.75

function getRandomOffset( scale: number ) {
  return ( Math.random() - 0.5 ) * scale
}

export default function InfiniteStarField({ size, color }: any) {
  const groupRef = useRef<any>( null )
  const [ prevCamPos ] = useState(() => new THREE.Vector3());

  const starPositions = useMemo(() => {
    const positions = []

    for ( let x = 0; x < GRID_SIZE; x++ ) {
      for ( let y = 0; y < GRID_SIZE; y++ ) {
        for ( let z = 0; z < GRID_SIZE; z++ ) {
          positions.push(
            new THREE.Vector3(
              ( x - GRID_SIZE / 2 ) * SPACING + getRandomOffset( 3.5 ),
              ( y - GRID_SIZE / 2 ) * SPACING + getRandomOffset( 1.5 ),
              ( z - GRID_SIZE / 2 ) * SPACING + getRandomOffset( 2.5 )
            )
          )
        }
      }
    }

    return positions
  }, [])

  useFrame(({ camera }) => {
    if ( !groupRef.current ) return

    const delta = new THREE.Vector3().subVectors( camera.position, prevCamPos )
    prevCamPos.copy( camera.position ) 

    starPositions.forEach(( star: any ) => {
      star.sub( delta )

      if ( star.x > camera.position.x + BOUNDARY ) star.x -= GRID_SIZE * SPACING
      if ( star.x < camera.position.x - BOUNDARY ) star.x += GRID_SIZE * SPACING
      if ( star.y > camera.position.y + BOUNDARY ) star.y -= GRID_SIZE * SPACING
      if ( star.y < camera.position.y - BOUNDARY ) star.y += GRID_SIZE * SPACING
      if ( star.z > camera.position.z + BOUNDARY ) star.z -= GRID_SIZE * SPACING
      if ( star.z < camera.position.z - BOUNDARY ) star.z += GRID_SIZE * SPACING
    })

    groupRef.current.children.forEach((child: any, i: number) => {
      child.position.copy( starPositions[ i ] )
    })
  })

  return <>
    <group ref={ groupRef }>
      {
        starPositions.map(( pos ) => (
          <Points>
            <pointsMaterial size={ size } color={ color } sizeAttenuation blending={ THREE.AdditiveBlending } />
            <Point position={ pos.toArray() } />
          </Points>
        ))
      }
    </group>
  </>
}