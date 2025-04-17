import { Suspense } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import NormalHeart from "./models-3d/NormalHeart";
import Card from "../../components/Card";

const Diseases = () => {
  return (
    <>
      <div className="flex flex-col justify-between w-full h-full p-10 relative">
        <div className="flex justify-between w-full">
          <Card
            title="Enfermedad del corazón roto"
            subtitle="Miocardiopatía de takotsubo"
            description="La enfermedad del corazón roto, también conocida como miocardiopatía de Takotsubo, es una afección cardíaca temporal que se desencadena por situaciones de estrés emocional o físico intenso"
            path="#"
          />

          <Card
            title="Arritmia cardiaca"
            subtitle="Trastorno del ritmo cardíaco"
            description="Una arritmia cardiaca es un trastorno del ritmo cardíaco. El corazón puede latir demasiado rápido (taquicardia), demasiado lento (bradicardia) o de manera irregular. "
            path="/enfermedades-corazon/arritmia"
          />
        </div>

        <div className="flex justify-between w-full">
          <Card
            title="Válvula del corazón estrecha"
            subtitle="Estenosis valvular"
            description="La estenosis valvular es una cardiopatía congénita que se produce cuando una de las válvulas del corazón no abre completamente dificultando el flujo normal de la sangre."
            path="#"
          />
          <Card
            title="Coágulo en la sangre"
            subtitle="Trombosis"
            description="La trombosis (enfermedad trombótica) es un trastorno que implica la formación de trombos o coágulos en el sistema circulatorio. Pueden ser trombos arteriales o venosos."
            path="#"
          />
        </div>
        <div className="flex items-center justify-center absolute w-full h-full">
          <Suspense fallback={<h5>Cargando...</h5>}>
            <Canvas camera={{ position: [2, 0, 5] }}>
              <OrbitControls enableZoom={false} enableRotate={true} />
              <ambientLight intensity={3} />
              <directionalLight position={[5, 5, 10]} intensity={7} />
              <Environment preset="city" background={false} />
              <NormalHeart scale={3} />
            </Canvas>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Diseases;
