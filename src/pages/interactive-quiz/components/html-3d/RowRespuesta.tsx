import { Html } from "@react-three/drei";
import React from "react";
import { Vector3 } from "three";
import CircleCheck from "../../../../components/CircleCheck";
import CircleX from "../../../../components/CircleX";

interface Props {
  pregunta: string;
  respuesta: boolean;
  position: Vector3;
}

const RowRespuesta = ({ position, pregunta, respuesta }: Props) => {

  const renderIcon = () => {
    return respuesta ? <CircleCheck /> : <CircleX />;
  };

  return (
    <Html
      occlude={false}
      center
      transform
      position={position}
      distanceFactor={15}
    >
      <div className="flex bg-white w-[200px] rounded-[2px] p-1 items-center gap-1">
        <div
          className={`w-[20px] h-[20px] rounded-full ${
            respuesta ? "bg-green-500" : "bg-red-600"
          } flex items-center justify-center text-white text-xs`}
        >
          {renderIcon()}
        </div>
        <div className="text-gray-700 text-xs">{pregunta}</div>
      </div>
    </Html>
  );
};

export default RowRespuesta;
