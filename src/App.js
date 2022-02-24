import * as THREE from "three"
import React, { Suspense, useEffect} from "react";
import {Canvas, useThree} from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Rain from "./Rain_rig"
import "./styles.css";



export default function App() {
  return (
    <Canvas  >
 
       <color attach="background" args={"white"} />
    <OrbitControls/>
      <directionalLight intensity={0.7} />
      <ambientLight intensity={0.7}/>
      <spotLight intensity={0.5} angle={0.1} penumbra={1}  castShadow />
      <group position={[0, -6, 0]}>
  <Suspense fallback={null}>
    <Rain/>
  </Suspense>
</group>
    
    </Canvas>
  );
}
