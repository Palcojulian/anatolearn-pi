import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate();

return (
  <section className="flex gap-10 w-[90%] justify-start items-start px-6 py-12">
    <div className="max-w-xl text-left">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Explora el corazón en 3D y aprende sobre sus enfermedades.
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Bienvenido a nuestra plataforma interactiva. Aquí podrás aprender sobre algunas enfermedades del corazón,
        explorando sus síntomas, tratamientos y prevención de forma dinámica y visual.
      </p>
        <button
            onClick={() => navigate('/enfermedades-corazon')} className="btn-primary">
            Comienza a explorar las enfermedades
        </button>
    </div>
  </section>
    );
};
export default Home;