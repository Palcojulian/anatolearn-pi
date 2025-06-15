import { useState, useEffect, useMemo } from "react";
import { Vector3 } from "three";
import Texto3D from "../../../../components/Texto3D";
import Btn3DHtml from "../html-3d/Btn3DHtml";
import { useProgressQuiz, useQuiz } from "../../composables/useActionsQuiz";
import { type User } from "firebase/auth";

interface Option {
  key: string;
  text: string;
}

const FirstQuestion = (user: User) => {
  const { nextQuestion } = useProgressQuiz();
  const { setAnswer } = useQuiz(user);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const correctAnswerKey = "B";
  const questionId = "pregunta_3";
  const questionText = "¿Arritmia cardíaca puede causar mareo?";

  const options: Option[] = [
    { key: "A", text: "Si" },
    { key: "B", text: "No necesariamente" },
    { key: "C", text: "Nunca" },
    { key: "D", text: "No se sabe" },
  ];

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const saveAnswerUser = (): void => {
    if (!selectedOption) return;
    const isCorrect = selectedOption === correctAnswerKey;
    setAnswer(questionId, isCorrect);
    nextQuestion();
  };

  const buttonPositions = useMemo(() => {
    return options.map((_, index) => {
      return isMobile
        ? new Vector3(0, 1 - index * 2.2, 0)
        : new Vector3(-9 + index * 6, 0.5, 0);
    });
  }, [isMobile]);

  const finalizarPosition = useMemo(() => {
    return isMobile ? new Vector3(0, -8, 0) : new Vector3(8, -5, 0);
  }, [isMobile]);

  return (
    <>
      <Texto3D
        text={questionText}
        color="#3F72AF"
        position={new Vector3(0, 3, -2)}
        bevelEnabled
        bevelSize={0.1}
        bevelThickness={0.02}
        height={0.2}
        size={0.6}
        letterSpacing={0.05}
      />

      {options.map((option, index) => (
        <Btn3DHtml
          key={`${questionId}_${option.key}`}
          position={buttonPositions[index]}
          label={option.text}
          action={() => setSelectedOption(option.key)}
          scale={selectedOption === option.key ? 0.8 : 0.7}
        />
      ))}

      <Btn3DHtml
        position={finalizarPosition}
        action={saveAnswerUser}
        label="Finalizar"
        scale={0.7}
      />
    </>
  );
};

export default FirstQuestion;
