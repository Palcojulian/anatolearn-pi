import { useRef, useEffect, type JSX } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Mesh, SkinnedMesh, Group } from "three";

const ArrhytmiaHeart = (props: JSX.IntrinsicElements["group"]) => {
  const arrhymiaModelRef = useRef<Group>(null);

  const { nodes, materials, animations } = useGLTF(
    "/models-3d/arrhythmia/beating-heart.glb"
  );

  const { actions } = useAnimations(animations, arrhymiaModelRef);

  useEffect(() => {
    console.log(actions);
    if (actions?.BeatingHeart) {
      actions.BeatingHeart.play();
      actions.BeatingHeart.timeScale = 0.7;
    }
  }, [actions]);

  return (
    <group ref={arrhymiaModelRef} {...props} dispose={null}>
      <group name="Scene">
        <group name="BonesAnimationHeart" scale={0.014}>
          <skinnedMesh
            name="Heart"
            geometry={(nodes.Heart as Mesh).geometry}
            material={materials.HeartMaterial}
            skeleton={(nodes.Heart as SkinnedMesh).skeleton}
            castShadow
          />
          <primitive object={nodes.GLTF_created_0_rootJoint} />
        </group>
      </group>
    </group>
  );
};

export default ArrhytmiaHeart;

useGLTF.preload("/models-3d/arrhythmia/beating-heart.glb");
