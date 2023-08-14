import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Noun87 from "../models/Noun_87";

const Noun87Viewer = () => {
  return (
    <>
      <Canvas camera={{ fov: 8.5, position: [0, 0, -50] }}>
        <Suspense fallback={null}>
          {/* Scene lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 20, -10]} intensity={1.8} />

          {/* Screen Lighting */}
          <pointLight position={[2, -1.8, 0]} intensity={1.5} />
          <pointLight position={[0.8, 2, 0]} intensity={1} />

          {/* Noun87 Lighting: */}
          <pointLight position={[-1, 0, -4]} intensity={1} />

          <OrbitControls enableZoom={false} />
          <Noun87 rotation={[49.7, 66.5, -0.06]} position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Noun87Viewer;
