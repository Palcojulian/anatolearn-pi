import { Suspense, useMemo } from "react";
import {
  OrbitControls,
  Sky,
  PerspectiveCamera,
  KeyboardControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";

import SintomaArrhytmiaModel from "../models-3d/SintomaArrhytmia";
import Floor from "../../../../components/Floor";
import useStoreSintomas from "../../arrhythmia/stores/useStoreSintomas";
import Label3D from "../html-3d/Label3D";

const SintomaArrhytmia = () => {
  const { isAlertText } = useStoreSintomas();

  const map = useMemo(() => [{ name: "activeAnimation", keys: ["KeyA"] }], []);

  const renderMessages = () => {
    if (isAlertText) {
      return (
        <>
          <Label3D
            position={new Vector3(0, 3, 0)}
            text="¡Desmayo/Mareo!"
            scale={0.6}
          />
          <Label3D
            position={new Vector3(0, 2.5, 0)}
            text='Presiona la tecla "A" para activar la animación'
            scale={0.6}
          />
        </>
      );
    }

    return (
      <Label3D
        position={new Vector3(0, 2.6, 0)}
        text="Pasa el mause/ratón sobre mi"
        scale={0.7}
      />
    );
  };

  return (
    <Suspense fallback={<h5>Cargando...</h5>}>
      <KeyboardControls map={map}>
        <Canvas
          style={{ height: "70vh", width: "100%" }}
          shadows={true}
          className=" mask-radial-[40%_50%] mask-radial-from-70% hover:cursor-pointer"
        >
          <PerspectiveCamera makeDefault position={[0, 10, 0]} fov={65} />
          <OrbitControls
            enableZoom={false}
            enableRotate={true}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
          />
          <ambientLight intensity={3} />
          <pointLight
            color={"#F9F7F7"}
            position={[1, 10, -1]}
            intensity={400}
            distance={50}
            decay={2}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-radius={10}
          />

          <Sky />
          {renderMessages()}

          <SintomaArrhytmiaModel
            scale={1.7}
            position={[0, -1.5, 0]}
            rotation={[0, Math.PI, 0]}
          />
          <Floor
            position={new Vector3(0, -1.5, 0)}
            color="gray"
            roughness={0.6}
            metalnesVal={0.5}
          />
        </Canvas>
      </KeyboardControls>
    </Suspense>
  );
};

export default SintomaArrhytmia;
