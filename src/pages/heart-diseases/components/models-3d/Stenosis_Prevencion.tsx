import { type JSX } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import InfoButton from "../../../../components/InfoButton";

const Stenosis_Prevencion = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>(null);
  const { nodes, scene, materials, animations } = useGLTF(
    "/models-3d/AvatarJumping.glb"
  );
  const [currentAction, setCurrentAction] = useState<string | null>(null);

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!currentAction || !actions) return;

    Object.values(actions).forEach((action) => {
      if (action) action.stop();
    });

    actions[currentAction]?.reset().fadeIn(0.5).play();

    return () => {
      actions[currentAction]?.fadeOut(0.5);
    };
  }, [actions, currentAction]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "KeyE") {
        setCurrentAction("Armature.001|mixamo.com|Layer0");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (actions) {
      console.log("Animaciones disponibles:", Object.keys(actions));
    }
  }, [actions]);

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="Armature">
            <skinnedMesh
              name="EyeLeft"
              geometry={(nodes.EyeLeft as THREE.SkinnedMesh).geometry}
              material={materials.Wolf3D_Eye}
              skeleton={(nodes.EyeLeft as THREE.SkinnedMesh).skeleton}
              morphTargetDictionary={
                (nodes.EyeLeft as THREE.SkinnedMesh).morphTargetDictionary
              }
              morphTargetInfluences={
                (nodes.EyeLeft as THREE.SkinnedMesh).morphTargetInfluences
              }
            />
            <skinnedMesh
              name="EyeRight"
              geometry={(nodes.EyeRight as THREE.SkinnedMesh).geometry}
              material={materials.Wolf3D_Eye}
              skeleton={(nodes.EyeRight as THREE.SkinnedMesh).skeleton}
              morphTargetDictionary={
                (nodes.EyeRight as THREE.SkinnedMesh).morphTargetDictionary
              }
              morphTargetInfluences={
                (nodes.EyeRight as THREE.SkinnedMesh).morphTargetInfluences
              }
            />
            <skinnedMesh
              name="Wolf3D_Body"
              geometry={(nodes.Wolf3D_Body as THREE.SkinnedMesh).geometry}
              material={materials.Wolf3D_Body}
              skeleton={(nodes.Wolf3D_Body as THREE.SkinnedMesh).skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Head"
              geometry={(nodes.Wolf3D_Head as THREE.SkinnedMesh).geometry}
              material={materials.Wolf3D_Skin}
              skeleton={(nodes.Wolf3D_Head as THREE.SkinnedMesh).skeleton}
              morphTargetDictionary={
                (nodes.Wolf3D_Head as THREE.SkinnedMesh).morphTargetDictionary
              }
              morphTargetInfluences={
                (nodes.Wolf3D_Head as THREE.SkinnedMesh).morphTargetInfluences
              }
            />
            <skinnedMesh
              castShadow
              receiveShadow
              name="Wolf3D_Outfit_Bottom"
              geometry={
                (nodes.Wolf3D_Outfit_Bottom as THREE.SkinnedMesh).geometry
              }
              material={materials.Wolf3D_Outfit_Bottom}
              skeleton={
                (nodes.Wolf3D_Outfit_Bottom as THREE.SkinnedMesh).skeleton
              }
            />
            <skinnedMesh
              castShadow
              receiveShadow
              name="Wolf3D_Outfit_Footwear"
              geometry={
                (nodes.Wolf3D_Outfit_Footwear as THREE.SkinnedMesh).geometry
              }
              material={materials.Wolf3D_Outfit_Footwear}
              skeleton={
                (nodes.Wolf3D_Outfit_Footwear as THREE.SkinnedMesh).skeleton
              }
            />
            <skinnedMesh
              castShadow
              receiveShadow
              name="Wolf3D_Outfit_Top"
              geometry={(nodes.Wolf3D_Outfit_Top as THREE.SkinnedMesh).geometry}
              material={materials.Wolf3D_Outfit_Top}
              skeleton={(nodes.Wolf3D_Outfit_Top as THREE.SkinnedMesh).skeleton}
            />
            <skinnedMesh
              castShadow
              receiveShadow
              name="Wolf3D_Teeth"
              geometry={(nodes.Wolf3D_Teeth as THREE.SkinnedMesh).geometry}
              material={materials.Wolf3D_Teeth}
              skeleton={(nodes.Wolf3D_Teeth as THREE.SkinnedMesh).skeleton}
              morphTargetDictionary={
                (nodes.Wolf3D_Teeth as THREE.SkinnedMesh).morphTargetDictionary
              }
              morphTargetInfluences={
                (nodes.Wolf3D_Teeth as THREE.SkinnedMesh).morphTargetInfluences
              }
            />
            <primitive object={nodes.Hips} />
          </group>
        </group>
      </group>
    </>
  );
};

export default Stenosis_Prevencion;
useGLTF.preload("/models-3d/AvatarJumping.glb");
