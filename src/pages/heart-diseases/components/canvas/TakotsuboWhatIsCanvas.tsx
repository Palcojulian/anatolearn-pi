import { Suspense } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TakotsuboWhatIs from "../models-3d/TakotsuboWhatIs";
import Staging from "../../takotsubo/stagin/Stagin";

const TakotsuboWhatIsCanvas = () => {
  return (
    <Suspense fallback={<h5>Cargando...</h5>}>
      <Canvas camera={{ position: [0, 0, 7] }} shadows>
        <Staging />
        <ambientLight intensity={0.2} />

        <directionalLight
          castShadow
          position={[2, 2, 5]}
          intensity={5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={20}
          shadow-camera-far={20}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <mesh receiveShadow position={[0, -2.05, 0]}>
          <cylinderGeometry args={[2, 2, 0.2, 32]} />
          <meshStandardMaterial color="#dddddd" />
        </mesh>

        <TakotsuboWhatIs position={[0, 0, -0.5]} scale={2} />

        <OrbitControls enableZoom={false} enableRotate={true} />
        <Environment preset="city" background={false} />
      </Canvas>
    </Suspense>
  );
};

export default TakotsuboWhatIsCanvas;
