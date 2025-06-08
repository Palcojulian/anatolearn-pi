import { Vector3 } from "three";
import Texto3D from "../../../../components/Texto3D";
import Btn3DHtml from "../html-3d/Btn3DHtml";
import { useProgressQuiz } from "../../composables/useActionsQuiz";

const EighthQuestion = () => {
  const { restoreState } = useProgressQuiz();

  return (
    <>
      <Btn3DHtml
        position={new Vector3(8, -5, 0)}
        action={restoreState}
        label="Enviar"
        scale={0.7}
      />
      <Texto3D
        text="8"
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

export default EighthQuestion;
