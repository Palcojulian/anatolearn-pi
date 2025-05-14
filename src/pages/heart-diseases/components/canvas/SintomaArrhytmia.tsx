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
import Floor from "../models-3d/Floor";
import Texto3D from "../../../../components/Texto3D";
import useStoreSintomas from "../../arrhythmia/stores/useStoreSintomas";

const SintomaArrhytmia = () => {
  const { isAlertText } = useStoreSintomas();

  const position = new Vector3(0, -1.5, 0);
  const positionText = new Vector3(0, 3, 0);
  const positionTextAlert = new Vector3(0, 2.5, 0);
  
  const map = useMemo(() => [
    {name: "activeAnimation", keys: ["KeyA"]},
  ],[]);

  return (
    <Suspense fallback={<h5>Cargando...</h5>}>
      <KeyboardControls  map={map} >
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

          <Texto3D
            text={isAlertText ? "Desmayo / mareo" : "Por favor"}
            key={1}
            position={positionText}
            color="black"
            bevelEnabled
            bevelSize={0.001}
            size={0.4}
            height={0.01}
            bevelThickness={0.05}
            letterSpacing={0.01}
          />
          <Texto3D
            text={
              isAlertText
                ? 'Presiona la tecla "A" para activar la animación'
                : "¡Pasa el mause/ratón sobre mi!"
            }
            key={2}
            position={positionTextAlert}
            color="black"
            bevelEnabled
            bevelSize={0.001}
            size={0.2}
            height={0.01}
            bevelThickness={0.05}
            letterSpacing={0.01}
          />
          <SintomaArrhytmiaModel
            scale={1.7}
            position={[0, -1.5, 0]}
            rotation={[0, Math.PI, 0]}
          />
          <Floor
            position={position}
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
