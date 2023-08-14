import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Toadz_3681 from "../models/Toadz_3681";

export default function Toadz3681Viewer() {
  const ref = useRef();
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[0, 5, 0]} intensity={6} />
        <directionalLight position={[0, 5, 3]} intensity={1} />
        <directionalLight position={[0, 5, -3]} intensity={1} />
        <pointLight position={[0, 0, 3]} intensity={0.2} />
        <pointLight position={[0, 0, -3]} intensity={0.2} />

        <Toadz_3681 />
      </Suspense>
      <OrbitControls ref={ref} />
    </Canvas>
  );
}
