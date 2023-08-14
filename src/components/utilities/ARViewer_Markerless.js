import React, { Suspense, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  ARCanvas,
  useXRFrame,
  Interactive,
  DefaultXRControllers,
  // useHitTest,
} from "@react-three/xr";
import { ARButton as CustomARButton } from "./ARButton";

import { useGLTF } from "@react-three/drei";

const ARViewer_Markerless = () => {
  const { projectname, id } = useParams();
  console.log(projectname);
  console.log(id);

  const Model = () => {
    const [select, setSelect] = useState(false);
    const onSelect = () => {
      console.log("I'm hit!");
      setSelect(!select);
    };

    useXRFrame((time, xrFrame) => {
      if (select) {
        group.current.rotation.y += 0.02;
      }
    });

    // useHitTest((hit) => {
    //   hit.decompose(
    //     group.current.position
    //     // group.current.rotation
    //     // group.current.scale
    //   );
    // });
    const group = useRef();
    // const gltf = useGLTF(`/models/${projectname}_${id}.glb`);
    const gltf = useGLTF(
      `/ar_files/${projectname}/glb_files/${projectname}_${id}.glb`
    );
    return (
      <>
        <Interactive onSelect={onSelect}>
          <primitive
            object={gltf.scene}
            scale={1}
            position={[0, -0.2, -0.6]}
            ref={group}
          />
        </Interactive>
      </>
    );
  };

  return (
    <ARCanvas
      sessionInit={{ requiredFeatures: ["hit-test"] }}
      dpr={window.devicePixelRatio}
      onCreated={({ gl }) => {
        document.body.appendChild(CustomARButton.createButton(gl));
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Model></Model>
      </Suspense>
      <DefaultXRControllers />
    </ARCanvas>
  );
};

export default ARViewer_Markerless;
