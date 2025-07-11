import { useCallback, type JSX } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import Texto3D from "../../../../components/Texto3D";
import useStoreSintomas from "../../arrhythmia/stores/useStoreSintomas";
import { useMemo } from "react";
import { Vector3 } from "three";

const SintomaStenosis = (props: JSX.IntrinsicElements["group"]) => {
  const { isAlertText } = useStoreSintomas();
  const positionText = new Vector3(-0.5, 1.4, 0);
  const positionTextAlert = new Vector3(0, 2.5, 1);
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF("/models-3d/Student.glb");
  const { actions } = useAnimations(animations, group);
  const [currentAction, setCurrentAction] = useState<string | null>(null);
  // const [currentAction, setCurrentAction] = useState("Sick");
  const handleStudent = () => {
    if (currentAction !== "Dead") {
      setCurrentAction("Dead");
    }
  };
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
      if (e.code === "Space") {
        setCurrentAction("Sick");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Iluminación */}
      <ambientLight intensity={-3.5} />

      <group
        ref={group}
        {...props}
        dispose={null}
        onDoubleClick={handleStudent}
      >
        <group name="Scene">
          <group name="Armature">
            <skinnedMesh
              castShadow
              receiveShadow
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
              castShadow
              receiveShadow
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
              castShadow
              receiveShadow
              name="Wolf3D_Body"
              geometry={(nodes.Wolf3D_Body as THREE.SkinnedMesh).geometry}
              material={materials.Wolf3D_Body}
              skeleton={(nodes.Wolf3D_Body as THREE.SkinnedMesh).skeleton}
            />
            <skinnedMesh
              castShadow
              receiveShadow
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
      {/* Controles */}
      <Html position={[-2, 0, 2]} center>
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            color: "white",
            padding: "15px",
            borderRadius: "8px",
            fontSize: "12px",
            maxWidth: "200px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
          }}
        >
          <h3 style={{ margin: "0 0 10px 0", fontSize: "14px" }}>Controles:</h3>
          <ul style={{ margin: 0, paddingLeft: "15px" }}>
            <li>Tecla Espacio: Animacion mareo.</li>
            <li>-------------</li>
            <li>Doble Click Derecho al Mouse: Animación desmayo.</li>
          </ul>
        </div>
      </Html>
    </>
  );
};

export default SintomaStenosis;
useGLTF.preload("/models-3d/Student.glb");
