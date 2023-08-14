import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  ContactShadows,
  Environment,
  Loader,
} from "@react-three/drei";

import Toadz285 from "../models/Toadz_285";

const Toadz4883Viewer = () => {
  return (
    <>
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, -5], fov: 50 }}
      >
        <Suspense fallback={null}>
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            shadow-mapSize={[512, 512]}
            castShadow
          />
          <pointLight position={[0, 3, -2]} intensity={0.8} />

          <OrbitControls autoRotate={true} enableZoom={false} />
          <Toadz285 position={[0, 0, 0]} scale={[1, 1, 1]}></Toadz285>

          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -1.4, 0]}
            opacity={0.75}
            width={10}
            height={10}
            blur={2.6}
            far={2}
          />

          <Environment
            files="kloppenheim_06_1k.hdr"
            path="/hdris/"
            preset={null}
          />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default Toadz4883Viewer;
