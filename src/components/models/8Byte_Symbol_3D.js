import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function ByteSymbol(props) {
  const group = useRef();
  // eslint-disable-next-line
  const { nodes, materials } = useGLTF("/models/8Byte_Symbol_3D_c.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={nodes.Curve002.material}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve004.geometry}
          material={nodes.Curve004.material}
          scale={[1, 1, 0.17]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve007.geometry}
          material={nodes.Curve007.material}
          scale={[1, 1, 0.17]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve.geometry}
          material={nodes.Curve.material}
          scale={[1, 1, 0.17]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve001.geometry}
          material={nodes.Curve001.material}
          scale={[1, 1, 0.17]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve005.geometry}
          material={nodes.Curve005.material}
          scale={[1, 1, 0.17]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve008.geometry}
          material={nodes.Curve008.material}
          scale={[1, 1, 0.17]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve003.geometry}
          material={nodes.Curve003.material}
          scale={[1, 1, 0.17]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve006.geometry}
          material={nodes.Curve006.material}
          scale={[1, 1, 0.17]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/8Byte_Symbol_3D_c.glb");
