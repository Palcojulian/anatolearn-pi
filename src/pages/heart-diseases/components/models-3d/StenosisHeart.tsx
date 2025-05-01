import { type JSX } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const StenosisHeart = (props: JSX.IntrinsicElements["group"]) => {
  const heartRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/models-3d/corazon-estenosis.glb"); // Ojo: scene
  const { actions } = useAnimations(animations, heartRef);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    
    if (actions?.Beating) {
      actions.Beating.reset().play();
    }
  }, [scene, actions]);

  return (
    <group ref={heartRef} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
};

export default StenosisHeart;

useGLTF.preload("/models-3d/corazon-estenosis.glb");

// import { type JSX } from "react";
// import { useGLTF } from "@react-three/drei";
// import * as THREE from "three";

// const StenosisHeart = (props: JSX.IntrinsicElements["group"]) => {
//   const { materials, nodes } = useGLTF("/models-3d/corazon-estenosis.glb");

//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         material={materials.HeartMaterial}
//         geometry={(nodes.Heart as THREE.Mesh).geometry}
//         onUpdate={(self) => {
//           const mat = self.material as THREE.MeshStandardMaterial;
//           mat.metalness = 0.5;
//           mat.roughness = 0.6;
//           mat.needsUpdate = true;
//         }}
//       />
//     </group>
//   );
// };

// export default StenosisHeart;

// useGLTF.preload("/models-3d/corazon-estenosis.glb");
