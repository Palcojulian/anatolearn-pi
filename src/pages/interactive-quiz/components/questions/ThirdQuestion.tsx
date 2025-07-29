import { useState } from "react";
import { Vector3 } from "three";
import Btn3DHtml from "../html-3d/Btn3DHtml";
import { useProgressQuiz, useQuiz } from "../../composables/useActionsQuiz";
import { type User } from "firebase/auth";
import { Physics, RigidBody } from "@react-three/rapier";
import Text2D from "../../../../components/Text2D";
import BallToCatch from "../models-3d/BallToCatch";
import FloorsAnswers from "../models-3d/FloorsAnswers";

const FirstQuestion = (user: User) => {
  const { nextQuestion } = useProgressQuiz();
  const { setAnswer } = useQuiz(user);

  const [optionSelected, setOption] = useState<string>("");
  const [stateAnswer, setStateAnswer] = useState(false);

  const questionId = "pregunta_3";
  const correctAnswerKey = `${questionId}_B`;
  const questionText = "¿Arritmia cardíaca puede causar mareo?";

  const catchAnswerUser = (respuesta: string): void => {
    setStateAnswer(correctAnswerKey == respuesta);
    setOption(respuesta);
  };

  const saveAnswer = (): void => {
    setAnswer(questionId, stateAnswer);
    nextQuestion();
  };

  const renderBtn = () => {
    if (optionSelected != "") {
      return (
        <Btn3DHtml
          action={saveAnswer}
          label="Siguiente"
          position={new Vector3(9, 2, 0)}
          key={1}
          scale={0.5}
        />
      );
    }
  };
  return (
    <>
      <Physics>
        <BallToCatch disabledMove={optionSelected != ""} />
        <FloorsAnswers
          key={1}
          questionId={questionId}
          saveAnswerUser={catchAnswerUser}
          answerSelected={optionSelected}
          correctAnswer={correctAnswerKey}
        />

        <RigidBody type="fixed">{renderBtn()}</RigidBody>

        <RigidBody type="fixed">
          <Text2D
            position={new Vector3(0, 6.5, -1)}
            color="#3F72AF"
            fontSize={0.7}
            text={questionText}
          />
        </RigidBody>

        {/* ANSWER A  */}
        <RigidBody type="fixed">
          <Text2D
            position={new Vector3(-6, -4, 0.1)}
            color="#3F72AF"
            fontSize={0.5}
            text="Si"
          />
        </RigidBody>

        {/* ANSWER B  */}
        <RigidBody type="fixed">
          <Text2D
            position={new Vector3(-3, -4, 0.1)}
            color="#3F72AF"
            fontSize={0.5}
            text="No"
          />
        </RigidBody>
        <RigidBody type="fixed">
          <Text2D
            position={new Vector3(-3, -4.4, 0.1)}
            color="#3F72AF"
            fontSize={0.5}
            text="necesariamente"
          />
        </RigidBody>
        {/* ANSWER C  */}
        <RigidBody type="fixed">
          <Text2D
            position={new Vector3(3, -4, 0.1)}
            color="#3F72AF"
            fontSize={0.5}
            text="Nunca"
          />
        </RigidBody>
        
        {/* ANSWER D */}
        <RigidBody type="fixed">
          <Text2D
            position={new Vector3(6, -4, 0.1)}
            color="#3F72AF"
            fontSize={0.5}
            text="No se sabe"
          />
        </RigidBody>
      </Physics>
    </>
  );
};

export default FirstQuestion;
