import { Suspense } from "react";
import Texto3D from "../../../components/Texto3D";
import { Canvas } from "@react-three/fiber";

import { Vector3 } from "three";
import { Environment, OrbitControls } from "@react-three/drei";
import Floor from "../../../components/Floor";

const Nquizs = (props: { text: string }) => {
  const position = new Vector3(0, 0, 2.5);
  const positionFloor = new Vector3(0, -3, 0);

  return (
    <Suspense fallback={<h5>Cargando...</h5>}>
      <Canvas
        camera={{ position: [0, 10, 0] }}
        style={{ width: "100px", height: "100px" }}
        shadows={true}
      >
        <Texto3D
          text={props.text}
          key={1}
          position={position}
          color="#3F72AF"
          bevelEnabled
          bevelSize={0.4}
          size={5}
          height={0.1}
          bevelThickness={0.5}
          letterSpacing={0.1}
        />
        <ambientLight intensity={3} />
        <directionalLight
          position={[0, 5, 5]}
          intensity={4}
          castShadow={true}
        />
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={3}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <Environment preset="city" background={false} />
        <Floor
          position={positionFloor}
          color="gray"
          roughness={0.6}
          metalnesVal={0.5}
          scale={2}
        />
      </Canvas>
    </Suspense>
  );
};

export default Nquizs;
