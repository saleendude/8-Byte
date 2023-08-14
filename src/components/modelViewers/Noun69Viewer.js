import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Noun69 from "../models/Noun_69";

const Noun69Viewer = () => {
  return (
    <>
      <Canvas camera={{ fov: 8.5, position: [0, 0, -50] }}>
        <Suspense fallback={null}>
          {/* Scene lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[0, 20, 0]} intensity={1.8} />

          {/* Noun69 Lighting: */}
          <pointLight position={[6, -0.5, 0.6]} intensity={1.2} />
          <directionalLight position={[3, 8, 0.6]} intensity={0.6} />

          {/* Screen Lighting */}
          <pointLight position={[-4, -2, 0]} intensity={1.8} />

          <OrbitControls enableZoom={false} />
          <Noun69 rotation={[49.8, 65.5, 0]} position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Noun69Viewer;
