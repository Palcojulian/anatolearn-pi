import { Vector3 } from "three";
import Floor from "../../../../components/Floor";
import { RigidBody } from "@react-three/rapier";

interface Props {
  questionId: string;
  saveAnswerUser: (q: string) => void;
  answerSelected: string;
  correctAnswer: string;
}

const FloorsAnswers = ({
  questionId,
  answerSelected,
  correctAnswer,
  saveAnswerUser,
}: Props) => {
  const colorFloor = (q: string): string => {
    if (answerSelected == "") return "#3F72AF";
    if (q == correctAnswer) return "#008f39";
    return "#cc0000";
  };

  return (
    <>
      <RigidBody
        type="fixed"
        onCollisionEnter={() => console.log("Choque floor")}
      >
        <Floor
          color="#ccc"
          position={new Vector3(0, -3, 0)}
          metalnesVal={1}
          roughness={0.7}
          scale={0.5}
        />
      </RigidBody>

      <RigidBody
        type="fixed"
        onCollisionEnter={() => saveAnswerUser(`${questionId}_A`)}
      >
        <Floor
          color={colorFloor(`${questionId}_A`)}
          position={new Vector3(-6, -3, 0)}
          metalnesVal={1}
          roughness={0.7}
          scale={0.5}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        onCollisionEnter={() => saveAnswerUser(`${questionId}_B`)}
      >
        <Floor
          color={colorFloor(`${questionId}_B`)}
          position={new Vector3(-3, -3, 0)}
          metalnesVal={1}
          roughness={0.7}
          scale={0.5}
        />
      </RigidBody>

      <RigidBody
        type="fixed"
        onCollisionEnter={() => saveAnswerUser(`${questionId}_C`)}
      >
        <Floor
          color={colorFloor(`${questionId}_C`)}
          position={new Vector3(3, -3, 0)}
          metalnesVal={1}
          roughness={0.7}
          scale={0.5}
        />
      </RigidBody>

      <RigidBody
        type="fixed"
        onCollisionEnter={() => saveAnswerUser(`${questionId}_D`)}
      >
        <Floor
          color={colorFloor(`${questionId}_D`)}
          position={new Vector3(6, -3, 0)}
          metalnesVal={1}
          roughness={0.7}
          scale={0.5}
        />
      </RigidBody>
    </>
  );
};

export default FloorsAnswers;
