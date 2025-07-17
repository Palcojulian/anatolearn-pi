import { type JSX } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const ColonaryCase = (props: JSX.IntrinsicElements["group"] & { color?: string }) => {
  const heartRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/models-3d/ColonaryCase.glb");
  const { actions } = useAnimations(animations, heartRef);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    if (actions?.Beating) {
      actions.Beating.play();
    }
  }, [scene, actions]);

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
    <group ref={heartRef} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
};

export default ColonaryCase;

useGLTF.preload("/models-3d/ColonaryCase.glb");
