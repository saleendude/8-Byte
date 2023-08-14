import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Loader } from "@react-three/drei";
import ByteSymbol from "../models/8Byte_Symbol_3D";

const ByteSymbolViewer = () => {
  return (
    <>
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        shadows
        dpr={[1, 1.5]}
        camera={{ fov: 8.5, position: [0, 0, -2] }}
      >
        <Suspense fallback={null}>
          <spotLight
            position={[5, 10, -6]}
            angle={0.5}
            penumbra={1}
            shadow-mapSize={[512, 512]}
            castShadow
            color={"#00fffb"}
            intensity={2}
          />
          <spotLight
            position={[5, 10, 6]}
            angle={0.5}
            penumbra={1}
            shadow-mapSize={[512, 512]}
            castShadow
            color={"#ff0000"}
            intensity={2}
          />

          <OrbitControls
            autoRotate={true}
            enableZoom={false}
            enablePan={false}
          />
          <ByteSymbol position={[0.01, 0.06, 0]} rotation={[0, 3, 0]} />
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -1.4, 0]}
            opacity={0.75}
            width={10}
            height={10}
            blur={2.6}
            far={2}
          />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default ByteSymbolViewer;
