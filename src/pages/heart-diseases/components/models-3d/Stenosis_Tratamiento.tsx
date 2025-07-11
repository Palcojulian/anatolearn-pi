import { type JSX } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Stenosis_Tratamiento = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/models-3d/corazon-valvulas.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
};

export default Stenosis_Tratamiento;

useGLTF.preload("/models-3d/corazon-valvulas.glb");
