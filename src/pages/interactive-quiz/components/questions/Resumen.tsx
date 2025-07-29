import React from "react";
import BoxResumen from "../models-3d/BoxResumen";
import { Vector3 } from "three";
import { useQuiz } from "../../composables/useActionsQuiz";
import { type User } from "firebase/auth";
import Texto3D from "../../../../components/Texto3D";
import Btn3DHtml from "../html-3d/Btn3DHtml";
import RowRespuesta from "../html-3d/RowRespuesta";

const Resumen = (user: User) => {
  const { respuestas, saveAllAnswers } = useQuiz(user);

  return (
    <>
      <BoxResumen
        color="#3F72AF"
        position={new Vector3(0, -1, 0)}
        metalnesVal={0.5}
        roughness={0.1}
      />

      <Texto3D
        text="¡Resumen!"
        color="#3F72AF"
        position={new Vector3(0, 6, -1)}
        bevelEnabled
        bevelSize={0.1}
        bevelThickness={0.02}
        height={0.2}
        letterSpacing={0.1}
        size={1}
      />

      <RowRespuesta
        position={new Vector3(0, 2.5, 0)}
        pregunta="Pregunta N° 1"
        respuesta={respuestas["pregunta_1"]}
        key={1}
      />

      <RowRespuesta
        position={new Vector3(0, 1.3, 0)}
        pregunta="Pregunta N° 2"
        respuesta={respuestas["pregunta_2"]}
        key={2}
      />

      <RowRespuesta
        position={new Vector3(0, 0.1, 0)}
        pregunta="Pregunta N° 3"
        respuesta={respuestas["pregunta_3"]}
        key={3}
      />

      <RowRespuesta
        position={new Vector3(0, -1.1, 0)}
        pregunta="Pregunta N° 4"
        respuesta={respuestas["pregunta_4"]}
        key={4}
      />
      
      <Btn3DHtml
        position={new Vector3(0, -7.5, 0)}
        action={saveAllAnswers}
        label="Guardar resultados"
        scale={0.7}
        width="w-[250px]"
      />
    </>
  );
};

export default Resumen;
