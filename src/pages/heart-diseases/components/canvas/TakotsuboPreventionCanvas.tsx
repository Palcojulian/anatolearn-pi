import { Suspense } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TakotsuboPrevention from "../models-3d/TakotsuboPrevention";

const TakotsuboPreventionCanvas = () => {
  return (
    <Suspense fallback={<h5>Cargando...</h5>}>
      <Canvas camera={{ position: [0, 0, 7] }} shadows>
        <ambientLight intensity={0.2} />

        <directionalLight
          castShadow
          position={[5, 10, 5]}
          intensity={5}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-near={20}
          shadow-camera-far={20}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <mesh receiveShadow position={[0, -2.5, 0]}>
          <cylinderGeometry args={[2, 2, 0.2, 32]} />
          <meshStandardMaterial color="#bbb" />
        </mesh>

        <TakotsuboPrevention
          position={[0, 0, -0.5]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={1}
        />

        <OrbitControls enableZoom={false} enableRotate={true} />
        <Environment preset="city" background={false} />
      </Canvas>
    </Suspense>
  );
};

export default TakotsuboPreventionCanvas;
