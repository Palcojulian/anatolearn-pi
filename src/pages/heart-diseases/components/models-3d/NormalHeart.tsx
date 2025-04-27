import { type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh, MeshStandardMaterial } from "three";

const NormalHeart = (props: JSX.IntrinsicElements["group"]) => {
  const { materials, nodes } = useGLTF("models-3d/normal-heart.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        material={materials.HeartMaterial}
        geometry={(nodes.Heart as Mesh).geometry}
        onUpdate={(self) => {
          const mat = self.material as MeshStandardMaterial;
          mat.metalness = 0.9;
          mat.roughness = 0.6;
          mat.needsUpdate = true;
        }}
      />
    </group>
  );
};

export default NormalHeart;
useGLTF.preload("models-3d/normal-heart.glb");
