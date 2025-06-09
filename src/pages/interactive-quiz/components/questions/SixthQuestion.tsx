import { Vector3 } from "three";
import Texto3D from "../../../../components/Texto3D";
import Btn3DHtml from "../html-3d/Btn3DHtml";
import { useProgressQuiz, useQuiz } from "../../composables/useActionsQuiz";
import { type User } from "firebase/auth";

const SixthQuestion = (user: User) => {
  const { nextQuestion } = useProgressQuiz();
  const { setAnswer, setEndTime } = useQuiz(user);

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
      'pregunta_6' QUEDA IGUAL, ES LA KEY QUE SE CONFIGURO EN LA DB, -
      DE FIREBASE PARA ALMACENARLA!
      */
    setAnswer("pregunta_6", false);

    /* 
      Una vez se capturemos la respuesta del usuario, se redirige a la, -
      siguiente pregunta.
      
      NOTA: ¡Como es la ultima pregunta, se pasa a un resumen de lo - 
      respondido por el usuario!
    */
    setEndTime();
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
        text="6"
        color="#3F72AF"
        position={new Vector3(0, 0, 0)}
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

export default SixthQuestion;
