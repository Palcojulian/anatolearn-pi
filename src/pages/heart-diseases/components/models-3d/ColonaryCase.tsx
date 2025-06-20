import { type JSX } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const ColonaryCase = (props: JSX.IntrinsicElements["group"]) => {
  const heartRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/models-3d/ColonaryCase.glb");
  const { actions } = useAnimations(animations, heartRef);

  useEffect(() => {
    if (actions?.Beating) {
      actions.Beating.play();
    }
  }, [actions]);

  return (
    <group ref={heartRef} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
};

export default ColonaryCase;

useGLTF.preload("/models-3d/ColonaryCase.glb");
