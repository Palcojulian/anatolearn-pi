import Btn3DHtml from "../html-3d/Btn3DHtml";
import Texto3D from "../../../../components/Texto3D";
import ArrhytmiaHeart from "../../../heart-diseases/components/models-3d/ArrhytmiaHeart";
import { Vector3 } from "three";
import { useProgressQuiz } from "../../composables/useActionsQuiz";


const WelcomeQuiz = () => {
  const { nextQuestion } = useProgressQuiz();
  return (
    <>
      <Btn3DHtml 
        label="¡Iniciar quiz!"
        position={new Vector3(0, -5, 0)}
        action={nextQuestion}
        key={0}
      />
      <Texto3D
        text="¡Pon a prueba lo aprendido!"
        color="#3F72AF"
        position={new Vector3(0, 7, -2)}
        bevelEnabled
        bevelSize={0.1}
        bevelThickness={0.02}
        height={0.2}
        letterSpacing={0.1}
        size={1}
      />
      <ArrhytmiaHeart scale={25} position={[0, -2, 0]} />
    </>
  );
};

export default WelcomeQuiz;
