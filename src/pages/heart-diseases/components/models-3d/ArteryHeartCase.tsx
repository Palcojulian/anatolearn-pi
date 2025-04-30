import { type JSX } from "react";
import { useGLTF } from "@react-three/drei";

const ArteryHeartCase = (props: JSX.IntrinsicElements["group"]) => {
  const { scene } = useGLTF("/models-3d/ArteryHeartCase.glb") as any;

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
};

export default ArteryHeartCase;

useGLTF.preload("/models-3d/ArteryHeartCase.glb");
