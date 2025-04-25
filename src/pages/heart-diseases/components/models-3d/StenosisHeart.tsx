import { type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const StenosisHeart = (props: JSX.IntrinsicElements["group"]) => {
  const { materials, nodes } = useGLTF("/models-3d/corazon-estenosis.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        material={materials.HeartMaterial}
        geometry={(nodes.Heart as THREE.Mesh).geometry}
        onUpdate={(self) => {
          const mat = self.material as THREE.MeshStandardMaterial;
          mat.metalness = 0.5;
          mat.roughness = 0.6;
          mat.needsUpdate = true;
        }}
      />
    </group>
  );
};

export default StenosisHeart;

useGLTF.preload("/models-3d/corazon-estenosis.glb");