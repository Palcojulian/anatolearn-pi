import { useGLTF } from "@react-three/drei";
import { type JSX } from "react";

const ColonaryCase = (props: JSX.IntrinsicElements["group"]) => {
  const { scene } = useGLTF("/models-3d/ColonaryCase.glb") as any;

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
};

export default ColonaryCase;

useGLTF.preload("/models-3d/ColonaryCase.glb");
