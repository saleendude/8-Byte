import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  ContactShadows,
  Environment,
  Loader,
  Float,
  Backdrop,
} from "@react-three/drei";
import Handshake from "../models/Handshake_emoji";
import ByteSymbolFlat2 from "../models/8Byte_Symbol_3D_3c";

const ContactUsModelViewer = () => {
  return (
    <>
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        shadows
        dpr={[1, 1.5]}
        camera={{ fov: 8.5, position: [0, 1, -2] }}
      >
        <Suspense fallback={null}>
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            shadow-mapSize={[512, 512]}
            castShadow
          />

          <OrbitControls
            autoRotate={false}
            enableZoom={false}
            enablePan={false}
          />
          {/* <ByteSymbolFlat
            rotation={[-0.1, 0.5, 0]}
            scale={[0.15, 0.15, 0.15]}
          /> */}

          <pointLight position={(0, -1, 1)} intensity={1}></pointLight>
          <pointLight position={(0, -1, -1)} intensity={1}></pointLight>

          {/* <Float speed={3} rotationIntensity={0.5} floatIntensity={0.11}> */}
          <ByteSymbolFlat2
            rotation={[-0.1, -1.8, 0]}
            scale={[0.15, 0.15, 0.15]}
            position={[0, -0.03, 0]}
          />
          {/* <ByteSymbolFlat
            rotation={[-0.1, 0.5, 0]}
            scale={[0.15, 0.15, 0.15]}
              position={[0, -0.03, 0]}
          /> */}
          {/* </Float> */}

          <Float speed={3} rotationIntensity={1} floatIntensity={0.18}>
            <Handshake position={[0, 0.1, 0]} scale={[7, 7, 7]} />
          </Float>
          <Backdrop
            position={[0, -0.19, 0]}
            rotation={[0, 3, 0]}
            floor={0.5}
            segments={20}
          >
            <meshStandardMaterial color="#000" />
          </Backdrop>
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -0.12, 0]}
            opacity={0.25}
            width={1}
            height={1}
            blur={1}
            far={1}
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

export default ContactUsModelViewer;
