import { type JSX, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const TakotsuboTreatment = (props: JSX.IntrinsicElements["group"]) => {
  const groupRef = useRef<THREE.Group>(null);
  const audioRef = useRef(
    new Audio("/sounds/shaking-a-pill-bottle-281273.mp3")
  );

  const { nodes, materials } = useGLTF("/models-3d/takotsubo/Pills.glb") as any;

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  const handleClick = () => {
    const audio = audioRef.current;
    audio.currentTime = 0;
    audio.play().catch((err) => {
      console.warn("Audio play failed:", err);
    });
  };

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Pills as THREE.Mesh).geometry}
        material={materials.PillsMaterial as THREE.Material}
        onClick={handleClick}
      />
    </group>
  );
};

export default TakotsuboTreatment;

useGLTF.preload("/models-3d/takotsubo/Pills.glb");
