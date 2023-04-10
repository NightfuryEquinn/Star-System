import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import GalaxyEnv from "./GalaxyEnv";

export default function Canvas() {
  return <>

    <Perf position='top-left' />

    <OrbitControls makeDefault />

    <GalaxyEnv />

    <mesh>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  </>
}
