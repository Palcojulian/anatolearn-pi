import ColonaryCaseView from "../../components/canvas/ColonaryCaseView";

const Prevention = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-start justify-between px-8 py-6 gap-8">
      {/* Columna de texto */}
      <div className="w-full lg:w-1/2 text-justify">
        <p className="text-base leading-relaxed">
          La cardiopatía isquémica se puede prevenir adoptando un estilo de vida saludable: mantener una alimentación equilibrada, hacer ejercicio regularmente, no fumar, controlar enfermedades como la hipertensión, la diabetes y el colesterol alto, reducir el estrés, evitar el consumo excesivo de alcohol y asistir a chequeos médicos periódicos.
        </p>
      </div>

      {/* Columna del modelo 3D */}
      <div className="w-full lg:w-1/2 h-[500px]">
        <ColonaryCaseView />
      </div>
    </div>
  );
};

export default Prevention;