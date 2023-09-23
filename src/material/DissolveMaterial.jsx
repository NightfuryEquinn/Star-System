import { useFrame } from "@react-three/fiber"
import { patchShaders } from "gl-noise"
import { easing } from "maath"
import { useEffect, useRef } from "react"
import * as THREE from "three"
import CSM from "three-custom-shader-material"

import DissolveVertex from "../shaders/dissolve/vertex.glsl?raw"
import DissolveFragment from "../shaders/dissolve/fragment.glsl?raw"

const vertexShader = DissolveVertex
const fragmentShader = patchShaders( DissolveFragment )

export default function DissolveMaterial({
  baseMaterial,
  visible = 1,
  thickness = 1,
  color = "#DEE2E6",
  intensity = 1.5,
  duration = 0.75,
}) {
  const uniforms = useRef({
    uThickness: { value: 1 },
    uColor: { value: new THREE.Color( "#DEE2E6" ).multiplyScalar( 10 ) },
    uProgress: { value: 0 },
  });

  useEffect(() => {
    uniforms.current.uThickness.value = thickness
    uniforms.current.uColor.value.set( color ).multiplyScalar( intensity )
  }, [ thickness, color, intensity ] )

  useFrame( ( _, delta ) => {
    easing.damp(
      uniforms.current.uProgress,
      "value",
      visible ? 1 : 0,
      duration,
      delta
    );
  });

  return (
    <>
      <CSM
        baseMaterial={ baseMaterial }
        vertexShader={ vertexShader }
        fragmentShader={ fragmentShader }
        uniforms={ uniforms.current }
        toneMapped={ false }
        transparent={ true }
      />
    </>
  );
}