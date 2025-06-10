import React, {  type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

const Oro = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF("/models-3d/positions/oro.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Base as Mesh).geometry}
        material={materials.PlacaMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Placa as Mesh).geometry}
        material={materials.PlacaMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Copa as Mesh).geometry}
        material={materials.PlacaMaterial}
      />
    </group>
  );
};

export default Oro;

useGLTF.preload("/models-3d/positions/oro.glb");
