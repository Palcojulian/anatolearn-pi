import AboutUsCard from "../../components/AboutUsCard";
import BubbleHeart from "./components/canvas/BubbleHeart";

const AboutUs = () => {
  return (
    <div className="flex  gap-10 w-[90%] ">
      <div className="w-full flex items-center justify-center  gap-5">
        <BubbleHeart />
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-5 pb-5">
        <h1 className="mb-3" >Conócenos</h1>

        <AboutUsCard
          title="¿Quiénes somos?"
          description="Anatolearn es una plataforma educativa dedicada a informar sobre enfermedades del corazón, su prevencion, diagnostico y tratamiento. Nuestro objetivo es dar informacion clara, confiable y accesible para todos las personas. "
        />
        <AboutUsCard
          title="Misión"
          description="Nuestra misión es brindar informacion clara, precisa y accesible sobre las enfermedades del corazón, con el objetivo de concientizar a la población sobre la importancia de la salud cardiovascular. "
        />
        <AboutUsCard
          title="Visión"
          description="Ser una plataforma de referencia de educacion de enfermedades  del corazón, proporcionando información confiable y actualizada que contribuya a la prevención y el manejo de afecciones cardiovasculares."
        />
      </div>
    </div>
  );
};

export default AboutUs;
