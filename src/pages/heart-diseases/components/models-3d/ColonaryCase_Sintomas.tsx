import { type JSX } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const ColonaryCase_Sintomas = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/models-3d/ColonaryCase_Sintomas.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Iniciamos la animación cuando el componente se monta
    const animation = Object.values(actions)[0];
    if (animation) {
      animation.play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
};

export default ColonaryCase_Sintomas;

useGLTF.preload("/models-3d/ColonaryCase_Sintomas.glb"); 