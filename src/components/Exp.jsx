import { Center, OrbitControls, PresentationControls, useGLTF } from "@react-three/drei"
import { MeshBasicMaterial, MeshStandardMaterial } from "three";

export default function Exp() {

  const { nodes } = useGLTF( "../model/logo.glb" )

  const blackMetal = new MeshStandardMaterial({
    color: "#161A1D",
    roughness: 0.75,
    metalness: 0.5,
  });

  // const redMetal = new MeshStandardMaterial({
  //   color: "#970005",
  //   toneMapped: false,
  // })

  // const blueMetal = new MeshStandardMaterial({
  //   color: "#000052",
  //   toneMapped: false,
  // })

  return <>
    <color args={ [ '#0a0c0d' ] } attach='background' />

    <ambientLight intensity={ 0.5 } />

    <pointLight 
      intensity={ 5 }
      position={ [ -15, 10, 10 ] }
    />

    <PresentationControls
      global
      polar={ [ -0.4, 0.2 ] }
      azimuth={ [ -1, 0.75 ] }
      config={ { mass: 2, tension: 400 } }
      snap={ { mass: 4, tension: 400 } }
    >
      <Center scale={ 1.5 }>
        <mesh position={ [ 0, 0, 0 ] } rotation={ [ 0, 0, 0 ] } geometry={ nodes.F1.geometry } material={ blackMetal } />
        <mesh position={ [ 0, -6, 0 ] } rotation={ [ 0, 0, 0 ] } geometry={ nodes.F2.geometry } material={ blackMetal } />

        <mesh position={ [ 8, 0, 0 ] } rotation={ [ 0, Math.PI, 0 ] } geometry={ nodes.R1.geometry } material={ blackMetal } />
        <mesh position={ [ 10, -6, 0 ] } rotation={ [ Math.PI, 0, 0 ] } geometry={ nodes.R2.geometry } material={ blackMetal } />
        <mesh position={ [ 4, -10, 0 ] } rotation={ [ 0, 0, 0 ] } geometry={ nodes.R3.geometry } material={ blackMetal } />

        <mesh position={ [ -1, -11.5, 0 ] } rotation={ [ 0, 0, Math.PI * 0.5 ] } geometry={ nodes.Y1.geometry } material={ blackMetal } />
        <mesh position={ [ 9, -11.5, 0 ] } rotation={ [ 0, Math.PI, Math.PI * 0.5 ] } geometry={ nodes.Y2.geometry } material={ blackMetal } />
        <mesh position={ [ 4, -21, 0 ] } rotation={ [ 0, 0, 0 ] } geometry={ nodes.Y3.geometry } material={ blackMetal } />

        <mesh position={ [ -6, -18.5, 0 ] } rotation={ [ 0, 0, Math.PI * 0.5 ] } geometry={ nodes.U1.geometry } material={ blackMetal } />
        <mesh position={ [ 14, -18.5, 0 ] } rotation={ [ 0, Math.PI, Math.PI * 0.5 ] } geometry={ nodes.U2.geometry } material={ blackMetal } />

        <mesh position={ [ -1, -22.65, 0 ] } rotation={ [ 0, Math.PI, 0 ] } geometry={ nodes.U3.geometry }>
          <meshStandardMaterial color={ [ 7.5, 0.25, 0.25 ] } toneMapped={ false } />
        </mesh>
        <mesh position={ [ 9, -22.65, 0 ] } rotation={ [ 0, 0, 0 ] } geometry={ nodes.U4.geometry }>
          <meshStandardMaterial color={ [ 0.25, 0.25, 7.5 ] } toneMapped={ false } />
        </mesh>
      </Center>
    </PresentationControls>

  </>
}