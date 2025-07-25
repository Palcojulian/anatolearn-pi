import { Suspense } from "react";
import { OrbitControls, Environment, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TakotsuboWhatIs from "../models-3d/TakotsuboWhatIs";
import Texto3D from "../../../../components/Texto3D";
import Staging from "../../takotsubo/stagin/Stagin";
import { Vector3 } from "three";

const TakotsuboWhatIsCanvas = () => {
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
          style={{ width: "100%", height: "67vh" }}
        >
          {/* <Staging /> */}
          <Sky />
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

          <Texto3D
            text="Presiona R para girar"
            color="#3F72AF"
            position={new Vector3(-1, 3, 0)}
            bevelEnabled
            bevelSize={0.1}
            bevelThickness={0.02}
            height={0.2}
            letterSpacing={0.15}
            size={2}
            scale={0.2}
          />

          <OrbitControls enableZoom={false} enableRotate={true} />
          <Environment preset="city" background={false} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default TakotsuboWhatIsCanvas;
