import { type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

const Plata = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF("/models-3d/positions/plata.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Base as Mesh).geometry}
        material={materials.PlacaMaterial}
        position={[0, 0, -106.191]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Copa as Mesh).geometry}
        material={materials.PlacaMaterial}
        position={[0, 0, -106.191]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Placa as Mesh).geometry}
        material={materials.PlacaMaterial}
        position={[0, 0, -106.191]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

export default Plata;

useGLTF.preload("/models-3d/positions/plata.glb");
