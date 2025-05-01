import { type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const TakotsuboTreatment = (props: JSX.IntrinsicElements["group"]) => {
  const groupRef = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/models-3d/takotsubo/Pills.glb") as any;

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Pills as THREE.Mesh).geometry}
        material={materials.PillsMaterial as THREE.Material}
      />
    </group>
  );
};

export default TakotsuboTreatment;

useGLTF.preload("/models-3d/takotsubo/Pills.glb");
