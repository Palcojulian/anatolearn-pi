import { type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import InfoButton from "../../../../components/InfoButton"; // Ajusta el path según tu estructura

interface GLTFResult extends THREE.Object3D {
  nodes: {
    SickHeart: THREE.Mesh;
  };
  materials: {
    SickHeartMaterial: THREE.Material;
  };
}

const TakotsuboSymtoms = (props: JSX.IntrinsicElements["group"]) => {
  const groupRef = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(
    "/models-3d/takotsubo/SickHeart.glb"
  ) as unknown as GLTFResult;

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <>
      <group ref={groupRef} {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SickHeart.geometry}
          material={materials.SickHeartMaterial}
        />
      </group>
      <InfoButton position={[-0.8, 1, 3]} title="Información">
        <h3 style={{ margin: "0 0 10px 0", fontSize: "14px" }}>Información:</h3>
        <ul style={{ listStyle: "none" }}>
          <li>
            <strong>W/S o ↑/↓:</strong> Zoom
          </li>
          <li>
            <strong>click derecho</strong> Resetar posición
          </li>
        </ul>
      </InfoButton>
    </>
  );
};

export default TakotsuboSymtoms;

useGLTF.preload("/models-3d/takotsubo/SickHeart.glb");

// import { type JSX } from "react";
// import { useGLTF } from "@react-three/drei";
// import * as THREE from "three";
// import { useRef } from "react";
// import { useFrame } from "@react-three/fiber";

// const TakotsuboSymtoms = (props: JSX.IntrinsicElements["group"]) => {
//   const groupRef = useRef<THREE.Group>(null);
//   const { nodes, materials } = useGLTF(
//     "/models-3d/takotsubo/SickHeart.glb"
//   ) as any;

//   useFrame((state, delta) => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y += delta * 0.3;
//       groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
//     }
//   });

//   return (
//     <group ref={groupRef} {...props} dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={(nodes.SickHeart as THREE.Mesh).geometry}
//         material={materials.SickHeartMaterial as THREE.Material}
//       />
//     </group>
//   );
// };

// export default TakotsuboSymtoms;

// useGLTF.preload("/models-3d/takotsubo/SickHeart.glb");
