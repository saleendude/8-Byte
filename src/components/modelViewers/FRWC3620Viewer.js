import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  ContactShadows,
  Environment,
  Loader,
} from "@react-three/drei";

import FRWC3620 from "../models/FRWC_3620";

const FRWC3620Viewer = () => {
  return (
    <>
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, -1.2], fov: 50 }}
      >
        <Suspense fallback={null}>
          <spotLight
            position={[10, 10, 10]}
            intensity={1.5}
            angle={0.15}
            penumbra={1}
            shadow-mapSize={[512, 512]}
            castShadow
          />
          <spotLight
            position={[10, 10, -10]}
            intensity={1.5}
            angle={0.15}
            penumbra={1}
            shadow-mapSize={[512, 512]}
            castShadow
          />

          <OrbitControls autoRotate={true} enableZoom={false} />
          {/* <Noun98 position={[0, -0.3, 0]} scale={[0.85, 0.85, 0.85]}></Noun98> */}
          <FRWC3620 position={[0, -0.25, 0]} scale={[1.1, 1.1, 1.1]}></FRWC3620>

          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -0.35, 0]}
            opacity={0.75}
            width={3}
            height={5}
            blur={1}
            far={2}
          />
          {/* <Environment preset="city" /> */}
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

export default FRWC3620Viewer;
