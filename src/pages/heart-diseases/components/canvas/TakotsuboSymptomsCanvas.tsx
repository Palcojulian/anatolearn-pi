import { Suspense, useEffect, useRef, useState } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import TakotsuboSymtoms from "../models-3d/TakotsuboSymtoms";
import * as THREE from "three";

const InteractiveModel = () => {
  const modelRef = useRef<THREE.Group>(null);
  const { camera } = useThree();
  const [scale, setScale] = useState(2);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "w") {
        setScale((prev) => Math.min(prev + 0.1, 5));
      } else if (e.key === "s") {
        setScale((prev) => Math.max(prev - 0.1, 0.5));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 2) {
        setScale(2);
      }
    };

    window.addEventListener("mousedown", handleMouseDown);
    return () => window.removeEventListener("mousedown", handleMouseDown);
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.scale.set(scale, scale, scale);
    }
  });

  return <TakotsuboSymtoms ref={modelRef} position={[0, 0, -0.5]} />;
};

const TakotsuboSymtomsCanvas = () => {
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
          style={{ width: "100%", height: "100%" }}
        >
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

          <InteractiveModel />

          <OrbitControls enableZoom={false} enableRotate={true} />
          <Environment preset="city" background={false} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default TakotsuboSymtomsCanvas;
