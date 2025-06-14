import { useRef, useEffect, type JSX } from "react";
import { useGLTF, useAnimations, useVideoTexture } from "@react-three/drei";
import { Mesh, SkinnedMesh, Group } from "three";
import { useFrame } from "@react-three/fiber";
import useStorePrevencion from "../../arrhythmia/stores/useStorePrevencion";


const ArrhytmiaPrevencion = (props: JSX.IntrinsicElements["group"]) => {
  const {pathVideo, isPlayVideo, setScale } = useStorePrevencion();
  const { nodes, materials } = useGLTF(
    `/models-3d/arrhythmia/monitor-vitalSings.glb`
  );

  const groupRef = useRef<Group>(null);

  const texture = useVideoTexture(`/videos/${pathVideo}`, {
    muted: true,
    loop: true,
    autoplay: false,
    start: false,
    crossOrigin: "anonymous",
  });

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 1 * 0.006;
  });

  useEffect(() => {
    console.log(pathVideo);
    isPlayVideo ? texture.image.play() : texture.image.pause()
  }, [isPlayVideo, pathVideo])

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Base as Mesh).geometry}
        material={materials.MonitorMaterial}
        position={[0, 1.313, 0.242]}
        rotation={[-1.524, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Screen as Mesh).geometry}
        material={materials.MonitorMaterial}
        position={[0, 8.696, -0.681]}
        rotation={[-1.873, 0, Math.PI]}
        scale={100}
        onPointerEnter={() => setScale(0.25)}
        onPointerLeave={() => setScale(0.15)}
      />

      <mesh position={[0, 1.35, 0.1]} rotation={[-2.85, 0, Math.PI]}>
        <planeGeometry args={[1.9, 1.75]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
    </group>
  );
};

export default ArrhytmiaPrevencion;
useGLTF.preload("/models-3d/arrhythmia/monitor-vitalSings.glb");
