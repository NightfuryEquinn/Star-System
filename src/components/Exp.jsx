import { OrbitControls, useGLTF } from "@react-three/drei"

export default function GalayxExp() {

  const { nodes } = useGLTF( "../model/logo.glb" )

  return <>

    <OrbitControls makeDefault maxDistance={ 1500 } panSpeed={ 0.375 } />

    <color args={ [ '#0a0c0d' ] } attach='background' />

    <ambientLight intensity={ 0.5 } />

    <pointLight 
      intensity={ 5 }
      position={ [ 0, 0, 0 ] }
    />

    <mesh geometry={ nodes.F1.geometry } />

  </>
}