import { Suspense } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import StenosisHeart from "../models-3d/StenosisHeart";

const Stenosis = () => {
    return (
        <Suspense fallback={<h5>Cargando...</h5>}>
            <Canvas camera={{ position: [0, 0, 7] }}>
                <ambientLight intensity={3} />
                <directionalLight position={[5, 5, 10]} intensity={7} />
                {/* <OrbitControls enableZoom={false} enableRotate={true} autoRotate autoRotateSpeed={3} /> */}
                <OrbitControls enableZoom={false} enableRotate={true} />
                <Environment preset="city" background={false} />
                <StenosisHeart position={[0, -3.8, 0]} scale={50} />
            </Canvas>
        </Suspense>
    )
}

export default Stenosis;