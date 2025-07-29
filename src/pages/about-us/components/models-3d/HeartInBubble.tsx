import { type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { type ThreeEvent } from "@react-three/fiber";

interface Props {
  modelProps: JSX.IntrinsicElements["group"];
  mauseClick?: () => void;
  pointerMove?: (e: ThreeEvent<PointerEvent>) => void;
  doubleClick?: () => void;
}

const HeartInBubble = ({
  modelProps,
  mauseClick,
  doubleClick,
  pointerMove,
}: Props) => {
  const { nodes, materials } = useGLTF("/models-3d/heart-in-bubble.glb");
  return (
    <group {...modelProps} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Heart_Heart_0 as Mesh).geometry}
            material={materials.Heart}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={400}
          />

          {/* Burbble */}
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Marble_Marble_0 as Mesh).geometry}
            material={materials.Marble}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={300}
            onPointerMove={pointerMove}
            onClick={mauseClick}
            onDoubleClick={doubleClick}
          />
        </group>
      </group>
    </group>
  );
};

export default HeartInBubble;

useGLTF.preload("/models-3d/heart-in-bubble.glb");
