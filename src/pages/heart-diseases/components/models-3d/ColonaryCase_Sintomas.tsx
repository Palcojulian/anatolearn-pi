import { type JSX } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const ColonaryCase_Sintomas = (props: JSX.IntrinsicElements["group"] & { color?: string }) => {
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

  // Cambiar el color de todos los materiales MeshStandardMaterial si se pasa la prop color
  useEffect(() => {
    if (props.color) {
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          if (mesh.material && (mesh.material as THREE.MeshStandardMaterial).color) {
            (mesh.material as THREE.MeshStandardMaterial).color.set(props.color!);
            (mesh.material as THREE.MeshStandardMaterial).needsUpdate = true;
          }
        }
      });
    }
  }, [props.color, scene]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
};

export default ColonaryCase_Sintomas;

useGLTF.preload("/models-3d/ColonaryCase_Sintomas.glb"); 