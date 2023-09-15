import { useFrame } from "@react-three/fiber";
import { patchShaders } from "gl-noise";
import { easing } from "maath";
import { useEffect, useRef } from "react"
import * as THREE from "three";
import CSM from "three-custom-shader-material";

import DissolveVertex from "../shaders/dissolve/vertex.glsl?raw"
import DissolveFragment from "../shaders/dissolve/fragment.glsl?raw"

const vertexShader = DissolveVertex
const fragmentShader = patchShaders( DissolveFragment )

export default function DissolveMaterial({
  baseMaterial,
  visible = true,
  opacity = 1,
  thickness = 1,
  color = "#DEE2E6",
  intensity = 1.125,
  duration = 0.5,
}) {
  const uniforms = useRef({
    uThickness: { value: 0.1 },
    uColor: { value: new THREE.Color( "#DEE2E6" ).multiplyScalar( 1 ) },
    uProgress: { value: 0 },
  });

  useEffect(() => {
    uniforms.current.uThickness.value = thickness;
    uniforms.current.uColor.value.set( color ).multiplyScalar( intensity );
  }, [ thickness, color, intensity ] );

  useFrame( ( state, delta ) => {
    easing.damp(
      uniforms.current.uProgress,
      "value",
      visible ? opacity = 1 : opacity = 0,
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