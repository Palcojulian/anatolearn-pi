import { Suspense, useMemo } from "react";
import { OrbitControls, Sky, Stars, KeyboardControls } from "@react-three/drei";
import { Vector3 } from "three";

import { Canvas } from "@react-three/fiber";
import ArrhytmiaTreatment from "../models-3d/ArrhytmiaTreatment";
import Box3d from "../../../../components/Box3d";
import useStoreTratamiento from "../../arrhythmia/stores/useStoreTratamiento";
import Texto3D from "../../../../components/Texto3D";
import Text2D from "../../../../components/Text2D";
import BtnIcon from "../html-3d/BtnIcon";
import ArrowRight from "../../../../components/ArrowRight";
import IconArrowLeft from "../../../../components/IconArrowLeft";



const CanvaArrhytmiaTreatment = () => {
  const { colorLight, nStars, setLeftDir, setRightDir } = useStoreTratamiento();
  const map = useMemo(() => [{ name: "addStars", keys: ["Space"] }], []);

  return (
    <Suspense fallback={<h5>Cargando...</h5>}>
      <KeyboardControls map={map}>
        <Canvas
          camera={{ position: [0, 0, 5] }}
          style={{ height: "70vh", width: "70%" }}
          shadows={true}
          className="mask-radial-[60%_60%] mask-radial-from-70% hover:cursor-pointer"
        >
          <OrbitControls
            enableZoom={false}
            enableRotate={true}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />

          <ArrhytmiaTreatment
            scale={13}
            position={[0, -1.5, 0]}
            rotation={[0, 15, 0]}
          />

          <spotLight
            color={colorLight}
            position={[0, 7, 8]}
            intensity={250}
            castShadow={true}
            angle={Math.PI / 10.5}
          />

          <pointLight color={"white"} position={[3, 0, -3]} intensity={5} />
          <pointLight color={"white"} position={[-3, 0, -3]} intensity={5} />

          <Sky  />
          <Stars count={nStars} />
          <Box3d
            color="#3F72AF"
            metalnesVal={0.4}
            roughness={0.1}
            scale={1}
            height={5}
            width={4}
            position={new Vector3(0, 0, -2)}
            depth={0.4}
          />

          <Texto3D
            text="Presione la tecla 'ESPACIO'" 
            color="#3F72AF"
             position={new Vector3(0, 3, 0)}
            bevelEnabled
            bevelSize={0.1}
            bevelThickness={0.02}
            height={0.2}
            letterSpacing={0.15}
            size={1}
            scale={0.2}
          />
          <BtnIcon 
            position={new Vector3(-2.5,0,0)}
            children={<IconArrowLeft />}
            isTransform={false}
            classBtn="bg-[#3F72AF] rounded-full hover:cursor-pointer"
            scale={1}
            action={setLeftDir}
          />

          <BtnIcon 
            position={new Vector3(2.5,0,0)}
            children={<ArrowRight />}
            isTransform={false}
            classBtn="bg-[#3F72AF] rounded-full hover:cursor-pointer"
            scale={1}
            action={setRightDir}
          />
          <Text2D
          position={new Vector3(0, -2.5, 0)} 
             
              color="#3F72AF"
              fontSize={0.4}
              text="MARCAPASOS"
          />

          
        </Canvas>
      </KeyboardControls>
    </Suspense>
  );
};

export default CanvaArrhytmiaTreatment;
