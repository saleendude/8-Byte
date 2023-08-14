import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  ContactShadows,
  Environment,
  Loader,
} from "@react-three/drei";

import SMB1453 from "../models/SMB_1453";

const SMB1453Viewer = () => {
  return (
    <>
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, -0.5], fov: 50 }}
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
          <SMB1453 position={[0, -0.1, 0]} scale={[1, 1, 1]}></SMB1453>

          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -0.15, 0]}
            opacity={0.5}
            width={1}
            height={1}
            blur={1}
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

export default SMB1453Viewer;
