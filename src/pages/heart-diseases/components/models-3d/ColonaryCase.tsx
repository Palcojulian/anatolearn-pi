import { type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const ColonaryCase = (props: JSX.IntrinsicElements["group"]) => {
  const { materials, nodes } = useGLTF("models-3d/ColonaryCase.glb");

  return (
    <group {...props} dispose={null}>
      <mesh

        material={materials.ColonaryCaseMaterial}
        geometry={(nodes.ColonaryCase as THREE.Mesh).geometry}
        onUpdate={(self) => {
          const mat = self.material as THREE.MeshStandardMaterial;
          mat.metalness = 0.9;
          mat.roughness = 0.6;
          mat.needsUpdate = true;
        }}
      />
    </group>
  );
};

export default ColonaryCase;
useGLTF.preload("models-3d/ColonaryCase.glb");
