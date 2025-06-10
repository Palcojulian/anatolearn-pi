import React from "react";
import Texto3D from "../../../../components/Texto3D";
import { Vector3 } from "three";

const NoDataAlert = () => {
  return (
    <>
      <Texto3D
        text="¡NO SE HA REALIZADO NINGUN QUIZ"
        color="#3F72AF"
        position={new Vector3(0, 0.5, 0)}
        bevelEnabled
        bevelSize={0.1}
        bevelThickness={0.02}
        height={0.2}
        letterSpacing={0.1}
        size={1}
        scale={0.3}
      />

      <Texto3D
        text="SE EL PRIMERO!"
        color="#3F72AF"
        position={new Vector3(0, 0, 0)}
        bevelEnabled
        bevelSize={0.1}
        bevelThickness={0.02}
        height={0.2}
        letterSpacing={0.1}
        size={1}
        scale={0.3}
      />
    </>
  );
};

export default NoDataAlert;
