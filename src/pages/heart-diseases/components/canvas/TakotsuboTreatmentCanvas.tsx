import { Suspense } from "react";
import { OrbitControls, Environment, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TakotsuboTreatment from "../models-3d/TakotsuboTreatment";
import Texto3D from "../../../../components/Texto3D";
import { Vector3 } from "three";

const TakotsuboTreatmentCanvas = () => {
  return (
    <div
      style={{
        maxHeight: "70vh",
        aspectRatio: "1 / 1",
        marginLeft: "2rem",
        marginRight: "auto",
      }}
    >
      <Suspense fallback={<h5>Cargando...</h5>}>
        <Canvas
          camera={{ position: [0, 0, 7] }}
          shadows
          style={{ width: "100%", height: "67vh" }}
        >
          <Sky />
          <ambientLight intensity={0.2} />

          <directionalLight
            castShadow
            position={[2, 2, 5]}
            intensity={4}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={1}
            shadow-camera-far={20}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />

          <directionalLight
            castShadow
            position={[-3, 5, -2]}
            intensity={2}
            color={"#ffffff"}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={1}
            shadow-camera-far={20}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />

          <mesh receiveShadow position={[0, -1.05, 0]}>
            <cylinderGeometry args={[2, 2, 0.2, 32]} />
            <meshStandardMaterial color="#dddddd" />
          </mesh>

          <TakotsuboTreatment
            castShadow
            receiveShadow
            position={[0, 0, -0.5]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={1}
          />

          <Texto3D
            text="Haz click sobre el modelo"
            color="#3F72AF"
            position={new Vector3(-1, 3.5, 0)}
            bevelEnabled
            bevelSize={0.1}
            bevelThickness={0.02}
            height={0.2}
            letterSpacing={0.15}
            size={2}
            scale={0.2}
          />

          <OrbitControls enableZoom={false} enableRotate={true} />
          <Environment preset="city" background={false} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default TakotsuboTreatmentCanvas;
