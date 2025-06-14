import { useRef, type JSX } from "react";
import { useGLTF, useKeyboardControls } from "@react-three/drei";
import { Mesh, Group } from "three";
import { useFrame } from "@react-three/fiber";
import useStoreTratamiento from "../../arrhythmia/stores/useStoreTratamiento";

const ArrhytmiaTreatment = (props: JSX.IntrinsicElements["group"]) => {
  const groupRef = useRef<Group>(null);
  const { setColor, setStars, dirRotation } = useStoreTratamiento();
  const [, get] = useKeyboardControls();

  const { nodes, materials } = useGLTF(
    "/models-3d/arrhythmia/heart-with-pace-marker.glb"
  );

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 1 * dirRotation;
     const { addStars } = get();
     if(addStars) {
        setStars()
     }
     const pressed = get().back;
  });

  return (
    <group 
      ref={groupRef} {...props} 
      dispose={null} 
      onPointerEnter={() => setColor("yellow")} 
      onPointerLeave={() => setColor("white")}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.HeartPartOne as Mesh).geometry}
        material={materials.HeartMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.HeartPartTwo as Mesh).geometry}
        material={materials.HeartMaterial}
      />
    </group>
  );
};

export default ArrhytmiaTreatment;

useGLTF.preload("/models-3d/arrhythmia/heart-with-pace-marker.glb");
