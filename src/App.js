import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Kick from "./Vincent"
import "./styles.css";

export default function App() {
  return (
    <Canvas>
       <color attach="background" args={"#FFFFFF"} />
      {/* <OrbitControls/> */}
      <directionalLight intensity={0.9} />
      <ambientLight intensity={0.7}/>
     


  <Suspense fallback={null} style={{cursor:"pointer"}}>

<Kick/>

 

  </Suspense>



    
    </Canvas>
  );
}
