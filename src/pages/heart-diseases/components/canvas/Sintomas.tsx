import { Suspense } from "react";
import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import SintomaStenosis from "../models-3d/SintomaStenosis";
import Floor from "../../../../components/Floor";
import { Vector3 } from "three";

const Sintomas = () => {
  const position: Vector3 = new Vector3(0.2, -5, -7.5);

  return (
    <Suspense fallback={<h5>Cargando...</h5>}>
      <Canvas
        camera={{ position: [0, 0, 7] }}
        style={{ height: "67vh", width: "100%" }}
        shadows={true}
      >
        <ambientLight intensity={3} />
        <directionalLight
          position={[5, 5, 10]}
          intensity={7}
          castShadow={true}
        />
        {/* <OrbitControls enableZoom={false} enableRotate={true} autoRotate autoRotateSpeed={3} /> */}
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={3} />

        <Sky />
        <SintomaStenosis position={[0, -4.5, -3.5]} scale={5} />
        <Floor
          color="#3F72AF"
          position={position}
          metalnesVal={0.5}
          roughness={0.7}
          scale={2.5}
        />
      </Canvas>
    </Suspense>
  );
};

export default Sintomas;
