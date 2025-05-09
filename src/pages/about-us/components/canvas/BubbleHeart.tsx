import { Suspense } from "react";
import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HeartInBubble from "../models-3d/HeartInBubble";
import { Vector3 } from "three";

const BubbleHeart = () => {
  const positionText = new Vector3(9, 0, 0);

  return (
    <Suspense fallback={<h5>Cargando...</h5>}>
      <Canvas
        camera={{ position: [0, 0, 5] }}
        style={{ height: "70vh", width: "100%", borderRadius: "20px" }}
        className=" mask-radial-[40%_50%] mask-radial-from-70% hover:cursor-pointer"
      >
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          autoRotate autoRotateSpeed={2}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={3} />
        <directionalLight
          position={[0, 5, 5]}
          intensity={6}
          castShadow={true}
        />

        <HeartInBubble scale={0.9} />

        <Sky />
       
      </Canvas>
    </Suspense>
  );
};

export default BubbleHeart;
