import { type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const ArteryHeartCase = (props: JSX.IntrinsicElements["group"] & { color?: string }) => {
  const { scene } = useGLTF("/models-3d/ArteryHeartCase2.glb");

  useEffect(() => {
    if (props.color) {
      scene.traverse((child) => {
        if ((child as any).isMesh && (child as any).material && (child as any).material.color) {
          (child as any).material.color.set(props.color);
          (child as any).material.needsUpdate = true;
        }
      });
    }
  }, [props.color, scene]);

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
};

export default ArteryHeartCase;

useGLTF.preload("/models-3d/ArteryHeartCase2.glb");
