import { Suspense } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import StenosisHeart from "../models-3d/StenosisHeart";
import Floor from "../../../../components/Floor";
import { Vector3 } from 'three';

const Stenosis = () => {
    const position: Vector3 = new Vector3(0.5,-1 ,0)

    return (
        <Suspense fallback={<h5>Cargando...</h5>}>
            <Canvas camera={{ position: [2, 0, 6] }} style={{ height: "70vh", width: "100%" }} shadows={true}>
                <ambientLight intensity={3} />
                <directionalLight position={[0, 5, 5]} intensity={6} castShadow={true} />
                {/* <OrbitControls enableZoom={false} enableRotate={true} autoRotate autoRotateSpeed={3} /> */}
                <OrbitControls enableZoom={false} enableRotate={true} />
                <Environment preset="forest" background={false} />
                <StenosisHeart position={[0, -0.8, 0.8]} scale={25} />
                <Floor color="#3F72AF" position={position} metalnesVal={1} roughness={0.7} />
            </Canvas>
        </Suspense>
    )
}

export default Stenosis;