import { Suspense } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ArrhytmiaHeart from "../models-3d/ArrhytmiaHeart";
import Floor from "../models-3d/Floor";
import { Vector3 } from 'three';



const Arrhytmia = () => {
    const position: Vector3 = new Vector3(0,-1.5,0)

    return (
        <Suspense fallback={<h5>Cargando...</h5>}>
            <Canvas camera={{ position: [2, 0, 5] }}  style={{ height: "70vh", width: "100%" }} shadows={true}>
                <OrbitControls 
                    enableZoom={false} 
                    enableRotate={true}   
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                />
                <ambientLight intensity={3} />
                <directionalLight 
                    position={[0, 5, 5]} 
                    intensity={6} 
                    castShadow={true} 
                />
                <Environment preset="forest" background={false} />
                <ArrhytmiaHeart scale={15} position={[0,-1.2,0.8]} />
                <Floor color="#3F72AF" position={position} metalnesVal={1} roughness={0.7} />
            </Canvas>

        </Suspense>
    )
}

export default Arrhytmia;