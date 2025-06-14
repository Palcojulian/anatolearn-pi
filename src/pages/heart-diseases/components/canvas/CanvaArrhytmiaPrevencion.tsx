import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Sparkles, OrbitControls } from "@react-three/drei";
import AllModelsPrevencionArrhytmia from "../models-3d/AllModelsPrevencionArrhytmia";
import useStorePrevencion from "../../arrhythmia/stores/useStorePrevencion";

const CanvaArrhytmiaPrevencion = () => {
  const { pathVideo, isPlayVideo } = useStorePrevencion();

  return (
    <Suspense fallback={<h5>Cargando...</h5>}>
      <Canvas
        camera={{ position: [0, 1, 4] }}
        style={{ height: "70vh", width: "70%", borderRadius: "80px" }}
        shadows={true}
      >
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
        />
        <AllModelsPrevencionArrhytmia />
        <Sparkles
          count={20}
          speed={1.5}
          opacity={1}
          color={"white"}
          size={4}
          noise={1}
        />

        <directionalLight
          color={"white"}
          position={[0, 5, 4]}
          intensity={5}
          castShadow
        />
        <pointLight color={"white"} position={[0, 1, 1]} intensity={10} />
      </Canvas>
    </Suspense>
  );
};

export default CanvaArrhytmiaPrevencion;
