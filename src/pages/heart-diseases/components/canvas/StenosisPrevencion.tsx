import { Suspense } from "react";
import { OrbitControls, Sky, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import StenosisPrevencion from "../models-3d/Stenosis_Prevencion";
import Floor from "../../../../components/Floor";
import Texto3D from "../../../../components/Texto3D";
import { Vector3 } from "three";

const Stenosis_Prevencion = () => {
  const position: Vector3 = new Vector3(0.2, -7.5, -8.5);

  return (
    <Suspense fallback={<h5>Cargando...</h5>}>
      <Canvas
        camera={{ position: [0, 0, 7] }}
        style={{ height: "66vh", width: "100%" }}
        shadows={true}
      >
        <Html position={[-1.5, 3, -2]} style={{ pointerEvents: "none" }}>
          <h2
            style={{
              color: "#3F72AF",
              fontWeight: 800,
              fontSize: "1.1em",
              margin: 0,
              textShadow: "0 2px 8px rgba(0,0,0,0.18)",
            }}
          >
            Modelo de demostración
          </h2>
        </Html>
        <ambientLight intensity={3} />
        <directionalLight
          position={[5, 5, 10]}
          intensity={7}
          castShadow={true}
        />
        {/* <OrbitControls enableZoom={false} enableRotate={true} autoRotate autoRotateSpeed={3} /> */}
        <OrbitControls enableZoom={false} enableRotate={true} />
        <ambientLight intensity={3} />

        <Sky />
        <StenosisPrevencion position={[0, -7.5, -4.5]} scale={5} />
        <Floor
          color="#3F72AF"
          position={position}
          metalnesVal={0.5}
          roughness={0.7}
          scale={2.5}
        />
        <Texto3D
          text="Presiona E para activar animación"
          color="#3F72AF"
          position={new Vector3(0, 3.2, 0)}
          bevelEnabled
          bevelSize={0.1}
          bevelThickness={0.02}
          height={0.2}
          letterSpacing={0.15}
          size={2}
          scale={0.2}
        />
      </Canvas>
    </Suspense>
  );
};

export default Stenosis_Prevencion;
