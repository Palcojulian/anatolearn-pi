import { Suspense } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import NormalHeart from "../models-3d/NormalHeart";

const Heart = () => {
    return (
        <Suspense fallback={<h5>Cargando...</h5>}>
            <Canvas camera={{ position: [2, 0, 5] }}>
                <OrbitControls enableZoom={false} enableRotate={true} autoRotate autoRotateSpeed={3} />
                <ambientLight intensity={3} />
                <directionalLight position={[5, 5, 10]} intensity={7} />
                <Environment preset="city" background={false} />
                <NormalHeart scale={3} />
            </Canvas>
        </Suspense>
    )
}

export default Heart;