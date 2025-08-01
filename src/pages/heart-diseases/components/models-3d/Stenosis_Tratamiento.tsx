import { type JSX, useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import InfoButton from "../../../../components/InfoButton";

const Stenosis_Tratamiento = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/models-3d/corazon-valvulas.glb");
  const { actions } = useAnimations(animations, group);
  const audioRef = useRef(new Audio("/sounds/hearbeat.mp3"));

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true;
      }
      const audio = audioRef.current;
      audio.load();
    });
  }, [scene]);

  const handleClick = () => {
    const audio = audioRef.current;
    audio.currentTime = 0;
    audio.play().catch((err) => {
      console.warn("Audio play failed:", err);
    });
  };

  return (
    <>
      <group
        ref={group}
        {...props}
        dispose={null}
        onClick={(e) => {
          e.stopPropagation(); // si hay otros handlers
          handleClick();
        }}
      >
        <primitive object={scene} />
      </group>
      <InfoButton position={[-4.5, 1, 0]} title="Información">
        <h3 style={{ margin: "0 0 10px 0", fontSize: "14px" }}>Información:</h3>
        <ul style={{ listStyle: "none" }}>
          <li>
            <strong>W/S o ↑/↓:</strong> Zoom
          </li>
          <li>
            <strong>A/D o ←/→:</strong> Rotar Y
          </li>
          <li>
            <strong>Q/E:</strong> Rotar X
          </li>
          <li>
            <strong>R:</strong> Resetar posición
          </li>
        </ul>
      </InfoButton>
    </>
  );
};

export default Stenosis_Tratamiento;

useGLTF.preload("/models-3d/corazon-valvulas.glb");
