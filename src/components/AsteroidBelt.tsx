import { PointMaterial, Points } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import * as THREE from "three"

export default function AsteroidBelt({ asteroidCount, radius, ringThickness }: any) {
  const pointsRef = useRef<any>( null )

  const asteroidPositions = useMemo(() => {
    const positions = []
    for ( let i = 0; i < asteroidCount; i++ ) {
      const angle = Math.random() * Math.PI * 2
      const offset = Math.random() * ringThickness - ringThickness / 2
      const x = ( radius + offset ) * Math.cos( angle )
      const y = Math.random() * 5 - 1
      const z = ( radius + offset ) * Math.sin( angle )
      positions.push( x, y, z )
    }

    return new Float32Array( positions )
  }, [ asteroidCount, radius, ringThickness ])

  useFrame(( _, delta ) => {
    pointsRef.current.rotation.y += delta * -0.0125
  })

  return <>
    <Points ref={ pointsRef } positions={ asteroidPositions } stride={ 3 }>
      <PointMaterial
        size={ 1 }
        transparent={ true }
        sizeAttenuation={ true }
        depthWrite={ false }
        opacity={ 0.5 }
        color="#DEE2E6"
        blending={ THREE.AdditiveBlending }
      />
    </Points>
  </>
}
