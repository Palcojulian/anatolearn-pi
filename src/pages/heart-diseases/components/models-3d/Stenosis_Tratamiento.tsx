import { type JSX } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import InfoButton from "../../../../components/InfoButton";

const Stenosis_Tratamiento = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/models-3d/corazon-valvulas.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true;
      }
    });
  }, [scene]);
  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <primitive object={scene} />
      </group>
      <InfoButton position={[-2, 1, 3]} title="Información">
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
