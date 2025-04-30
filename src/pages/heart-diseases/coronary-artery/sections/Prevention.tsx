import ColonaryCaseView from "../../components/canvas/ColonaryCaseView";

const Prevention = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-start justify-between px-4">
      {/* Texto */}
      <div className="w-full lg:w-1/2 text-justify py-6 pr-4 z-10">
        <p>
          La cardiopatía isquémica se puede prevenir adoptando un estilo de vida saludable:
          mantener una alimentación equilibrada, hacer ejercicio regularmente, no fumar, controlar enfermedades 
          como la hipertensión, la diabetes y el colesterol alto, reducir el estrés, evitar el consumo excesivo de 
          alcohol y asistir a chequeos médicos periódicos.
        </p>
      </div>

      {/* Modelo 3D */}
      <div className="w-full lg:w-1/2 h-[500px] relative z-0">
        <ColonaryCaseView />
      </div>
    </div>
  );
};

export default Prevention;
