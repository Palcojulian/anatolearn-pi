import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import ColonaryCase from "../models-3d/ColonaryCase";

const ColonaryCaseView = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 3, 3]} intensity={2} />
        <Environment preset="apartment" />
        <ColonaryCase scale={1.5} position={[0, -1.5, 0]} />
        <OrbitControls enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
};

export default ColonaryCaseView;
