import { Environment, Stars } from "@react-three/drei"

export default function GalaxyEnv() {
  return <>

    <color args={[ '#161a1d' ]} attach='background' />
    
    <Environment
      background
      files={[
        '../src/assets/env/px-min.png',
        '../src/assets/env/nx-min.png',
        '../src/assets/env/py-min.png',
        '../src/assets/env/ny-min.png',
        '../src/assets/env/pz-min.png',
        '../src/assets/env/nz-min.png',
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

  </>
}
