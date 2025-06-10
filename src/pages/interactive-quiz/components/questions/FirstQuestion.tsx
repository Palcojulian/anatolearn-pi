import { Vector3 } from "three";
import Texto3D from "../../../../components/Texto3D";
import Btn3DHtml from "../html-3d/Btn3DHtml";
import { useProgressQuiz, useQuiz } from "../../composables/useActionsQuiz";
import { type User } from "firebase/auth";

const FirstQuestion = (user: User) => {
  const { nextQuestion } = useProgressQuiz();
  const { setAnswer } = useQuiz(user);

  const saveAnswerUser = (): void => {
    /* 
      Deben implementar logica de la respuesta del usuario 
      una vez lo hagan, se debe gurdar como:
      true: respuesta correcta
      false: respuesta incorrecta
      
      Las respuestas se van almacenando en un store, estas -
      se guardan en la DB de firebase una vez el usuario responda todas -
      las preguntas.

      NOTA: ¡LO UNICO QUE CAMBIA ES EL VALOR BOOLEANDO, TRUE O FALSE
      'pregunta_1' QUEDA IGUAL, ES LA KEY QUE SE CONFIGURO EN LA DB, -
      DE FIREBASE PARA ALMACENARLA!
    */
    setAnswer("pregunta_1", true);

    /* 
      Una vez se capturemos la respuesta del usuario, se redirige a la, -
      siguiente pregunta.
    */
    nextQuestion();
  };

  return (
    <>
      <Btn3DHtml
        position={new Vector3(8, -5, 0)}
        action={saveAnswerUser}
        label="Siguiente"
        scale={0.7}
      />
      <Texto3D
        text="1"
        color="#3F72AF"
        position={new Vector3(0, 0, -2)}
        bevelEnabled
        bevelSize={0.1}
        bevelThickness={0.02}
        height={0.2}
        letterSpacing={0.1}
        size={1}
      />
    </>
  );
};

export default FirstQuestion;
