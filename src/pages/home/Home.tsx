import { useNavigate } from "react-router";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

export function Tratamiento() {
  const { scene } = useGLTF("/models-3d/pulmon.glb");
  return <primitive object={scene} scale={20} />;
}
const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="flex gap-10 w-[90%] justify-start items-start px-6 py-12">
      <div className="col-span-12 md:col-span-6 text-left">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Explora el corazón en 3D y aprende sobre sus enfermedades.
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Bienvenido a nuestra plataforma interactiva. Aquí podrás aprender
          sobre algunas enfermedades del corazón, explorando sus síntomas,
          tratamientos y prevención de forma dinámica y visual.
        </p>
        <button
          onClick={() => navigate("/enfermedades-corazon")}
          className="btn-primary"
        >
          Explora las enfermedades
        </button>
      </div>
      {/* Modelo 3D */}
      <div className="col-span-12 md:col-span-6 flex justify-center">
        <div className="w-[500px] h-[500px]">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.7} />
            <Environment preset="studio" background={false} />
            <OrbitControls enableZoom={false} />
            <Tratamiento />
          </Canvas>
        </div>
      </div>
    </section>
  );
};
export default Home;
