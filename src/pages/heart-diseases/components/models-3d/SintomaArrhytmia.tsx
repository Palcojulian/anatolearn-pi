import { useEffect, useRef, type JSX } from "react";
import { useGLTF, useAnimations, useKeyboardControls } from "@react-three/drei";
import { Mesh, SkinnedMesh, Group } from "three";
import useStoreSintomas from "../../arrhythmia/stores/useStoreSintomas";
import { useFrame } from "@react-three/fiber";

const SintomaArrhytmia = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials, animations } = useGLTF(
    "/models-3d/arrhythmia/falling-animation.glb"
  );
  const sintomaArrhymiaModelRef = useRef<Group>(null);
  const { actions } = useAnimations(animations, sintomaArrhymiaModelRef);
  const { setStateAlertText, setStateAnimation, isActiveAnimation, isAlertText } =
    useStoreSintomas();
  const [, get] = useKeyboardControls();

  useEffect(() => {
    if (actions?.FallingAnimation && isActiveAnimation) {
      actions.FallingAnimation.play();
    }
  }, [actions, isActiveAnimation, isAlertText]);

  useFrame(() => {
    const { activeAnimation } = get();
    if (activeAnimation && isAlertText) {
      setStateAnimation();
    }
    const pressed = get().back;
  });

  return (
    <group
      ref={sintomaArrhymiaModelRef}
      {...props}
      onPointerEnter={() => setStateAlertText()}
    >
      <group name="Scene">
        <group name="AnimationSkinByBones" rotation={[0, 0.3, 0]}>
          <skinnedMesh
            name="HumanSkin"
            geometry={(nodes.HumanSkin as Mesh).geometry}
            material={materials.HumanSkinMaterial}
            skeleton={(nodes.HumanSkin as SkinnedMesh).skeleton}
            castShadow
          />
          <primitive object={nodes._rootJoint} />
        </group>
      </group>
    </group>
  );
};

export default SintomaArrhytmia;
useGLTF.preload("/models-3d/arrhythmia/falling-animation.glb");
