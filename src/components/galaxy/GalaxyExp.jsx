import { OrbitControls, Environment, Stars } from "@react-three/drei"

export default function GalayxExp() {

  return <>

    <OrbitControls makeDefault maxDistance={ 1500 } panSpeed={ 0.375 } />

    <color args={[ '#161a1d' ]} attach='background' />
    
    <Environment
      background
      files={[
        './env/px-min.png',
        './env/nx-min.png',
        './env/py-min.png',
        './env/ny-min.png',
        './env/pz-min.png',
        './env/nz-min.png'
      ]}
    />

    <Stars 
      depth={ 60 }
      count={ 5000 }
      radius={ 350 }
      factor={ 7 }
      saturation={ 0 }
      fade
      speed={ 2 }
    />

    <ambientLight intensity={ 0.5 } />

    <pointLight 
      intensity={ 5 }
      position={[ 0, 0, 0 ]}
    />

  </>
}