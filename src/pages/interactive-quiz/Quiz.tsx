import { useAuthUser } from "../log-in/composables/useAuthUser";
import { setInfoQuiz, getQuizsUser } from "./services/quiz-service";

const Quiz = () => {
  const { userLooged: user } = useAuthUser();

  const testSaveDb = async (): Promise<void> => {
    const tiempoInicio = new Date();
    await new Promise((resolve) => setTimeout(() => {resolve(true)}, 500));
    const tiempoFin = new Date();

    const respuestas = {
      pregunta_1: true,
      pregunta_2: true,
      pregunta_3: true,
      pregunta_4: true,
      pregunta_5: true,
      pregunta_6: true,
      pregunta_7: true,
      pregunta_8: false,
    };

    const tiempo = (tiempoFin.getTime() - tiempoInicio.getTime()) / 1000;
    const puntosPorPregunta = 5 / Object.values(respuestas).length;
    const calificacion = Object.values(respuestas).filter(val => val).length * puntosPorPregunta;

    if (user!) {
      try {
        await setInfoQuiz({
          calificacion,
          tiempo,
          respuestas,
          user,
        });
        console.log("Se guardo el quiz :3");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getQuizUser = async (): Promise<void> => {
    if (user) {
      try {
        const data = await getQuizsUser(user);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <button onClick={testSaveDb} className="btn-primary">
        Guardar
      </button>
      <button onClick={getQuizUser} className="btn-primary">
        get
      </button>
    </div>
  );
};

export default Quiz;
