import Card from "../../components/Card";

function Diseases() {
  return (
    <>
      <div className="flex flex-col justify-between w-full h-full p-10">
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
            path="/"
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
      </div>
    </>
  );
}

export default Diseases;
