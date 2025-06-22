import { type JSX, useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import Label3D from "../../components/html-3d/Label3D";

const TakotsuboWhatIs = (props: JSX.IntrinsicElements["group"]) => {
  const groupRef = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/models-3d/takotsubo/Heart.glb") as any;

  const [hovered, setHovered] = useState(false);
  const [rotate, setRotate] = useState(false);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;

      if (rotate) {
        groupRef.current.rotation.y += delta * 1;
      }
    }
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "r") setRotate(true);
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "r") setRotate(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Heart as THREE.Mesh).geometry}
        material={
          hovered
            ? new THREE.MeshStandardMaterial({ color: "hotpink" })
            : (materials.HeartMaterial as THREE.Material)
        }
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      />
      <Label3D
        position={new THREE.Vector3(0, 1.5, 0)}
        text="Presiona R para rotar"
        classTxt="text-black text-sm font-bold"
        scale={0.5}
      />
    </group>
  );
};

useGLTF.preload("/models-3d/takotsubo/Heart.glb");

export default TakotsuboWhatIs;
