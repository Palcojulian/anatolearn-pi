import { Vector3, Group } from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import ArrhytmiaPrevencion from "./ArrhytmiaPrevencion";
import Floor from "../../../../components/Floor";
import ActionsVideoArrhytmia from "../html-3d/ActionsVideoArrhytmia";
import useStorePrevencion from "../../arrhythmia/stores/useStorePrevencion";
import Text2D from "../../../../components/Text2D";
import Texto3D from "../../../../components/Texto3D";

const AllModelsPrevencionArrhytmia = () => {
  const { isPlayVideo, pathVideo, scaleText3d } = useStorePrevencion();
  const groupRef = useRef<Group>(null);

  const renderMessage = () => {
    if (isPlayVideo) {
      return pathVideo == "alimentacion-saludable.mp4" ? (
        <Text2D
          color="#3F72AF"
          fontSize={0.2}
          position={new Vector3(0, 1.5, 0)}
          text="ALIMENTACIÓN SALUDABLE"
        />
      ) : (
        <Text2D
          color="#3F72AF"
          fontSize={0.2}
          position={new Vector3(0, 1.5, 0)}
          text="HACER EJERCICIO"
        />
      );
    }
  };

  useFrame(() => {
    if (!groupRef.current) return;
    
    if(isPlayVideo) {
      groupRef.current.rotation.y = 0;
    }else {
      groupRef.current.rotation.y += 1 * 0.001;
    }
  });
  return (
    <group ref={groupRef}>
      <ArrhytmiaPrevencion
        rotation={[-0.1, 3.1, 0]}
        position={[0, -0.5, 0.5]}
        scale={0.8}
      />
      {renderMessage()}
      <Floor
        color="#3F72AF"
        position={new Vector3(0, -0.6, 0)}
        metalnesVal={1}
        roughness={0.7}
        scale={0.6}
      />
      <Texto3D
        text="PREVENCIÓN"
        color="#3F72AF"
        position={new Vector3(0, 1.8, 0)}
        bevelEnabled
        bevelSize={0.1}
        bevelThickness={0.02}
        height={0.2}
        letterSpacing={0.15}
        size={1}
        scale={scaleText3d}
      />
      <directionalLight
        color={"white"}
        position={[0, 5, 4]}
        intensity={5}
        castShadow
      />
      <ActionsVideoArrhytmia position={new Vector3(0, -0.9, 1.6)} />
    </group>
  );
};

export default AllModelsPrevencionArrhytmia;
