import Card from "../../components/Card";
import Heart from "./components/canvas/Heart";

const Diseases = () => {
  return (
    <>
      <div className="flex flex-col gap-5 justify-between w-full h-full relative p-5">
        <div className="grid grid-cols-2">
          <div className="col-span-1 flex justify-center">
            <Card
              title="Enfermedad del corazón roto"
              subtitle="Miocardiopatía de takotsubo"
              description="La enfermedad del corazón roto, también conocida como miocardiopatía de Takotsubo, es una afección cardíaca temporal que se desencadena por situaciones de estrés emocional o físico intenso"
              path="/enfermedades-corazon/takotsubo"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <Card
              title="Arritmia cardiaca"
              subtitle="Trastorno del ritmo cardíaco"
              description="Una arritmia cardiaca es un trastorno del ritmo cardíaco. El corazón puede latir demasiado rápido (taquicardia), demasiado lento (bradicardia) o de manera irregular. "
              path="/enfermedades-corazon/arritmia"
            />
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="col-span-1 flex justify-center">
            <Card
              title="Válvula del corazón estrecha"
              subtitle="Estenosis valvular"
              description="La estenosis valvular es una cardiopatía congénita que se produce cuando una de las válvulas del corazón no abre completamente dificultando el flujo normal de la sangre."
              path="#"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <Card
              title="Coágulo en la sangre"
              subtitle="Trombosis"
              description="La trombosis (enfermedad trombótica) es un trastorno que implica la formación de trombos o coágulos en el sistema circulatorio. Pueden ser trombos arteriales o venosos."
              path="#"
            />
          </div>
        </div>
        <div className="flex items-center justify-center absolute w-full h-full">
          <Heart />
        </div>
      </div>
    </>
  );
};

export default Diseases;
