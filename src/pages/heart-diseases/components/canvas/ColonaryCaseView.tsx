import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import ColonaryCase from "../models-3d/ColonaryCase";

const ColonaryCaseView = () => {
    return (
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
            <Canvas
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                camera={{ position: [0, 0, 6], fov: 45 }}
            >
                {/* Iluminación */}
                <ambientLight intensity={1.5} />
                <directionalLight position={[3, 3, 3]} intensity={2} />
                <pointLight position={[-5, 5, 5]} intensity={0.8} />

                {/* Entorno */}
                <Environment preset="apartment" />

                {/* Modelo 3D */}
                <ColonaryCase scale={1.5} position={[0, -1.5, 0]} />

                {/* Controles de cámara */}
                <OrbitControls enableZoom={true} enableRotate={true} />
            </Canvas>
        </div>
    );
};

export default ColonaryCaseView;