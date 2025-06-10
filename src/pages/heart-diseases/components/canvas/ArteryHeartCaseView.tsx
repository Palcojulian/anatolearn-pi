import { Suspense } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ArteryHeartCase from "../models-3d/ArteryHeartCase";

const ArteryHeartCaseView = () => {
    return (
        <Suspense fallback={<h5>Cargando...</h5>}>
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[3, 3, 3]} intensity={2} />
                <pointLight position={[-5,5,5]} intensity={0.8} />
                <OrbitControls enableZoom={false} enableRotate={true} />
                <Environment preset="city" background={false} />
                <ArteryHeartCase scale={1.5} position={[0, -1.5, 0]} />
            </Canvas>
        </Suspense>
    );
};

export default ArteryHeartCaseView;