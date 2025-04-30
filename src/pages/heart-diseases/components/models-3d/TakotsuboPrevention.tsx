import { type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

// esto es un comentario para verificar algo

const TakotsuboTreatment = (props: JSX.IntrinsicElements["group"]) => {
  const groupRef = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/models-3d/takotsubo/Brain.glb") as any;

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Brain as THREE.Mesh).geometry}
        material={materials.BrainMaterial as THREE.Material}
      />
    </group>
  );
};

export default TakotsuboTreatment;

useGLTF.preload("/models-3d/takotsubo/Brain.glb");
