import React from "react";
import { Html } from "@react-three/drei";
import { Vector3 } from "three";
interface Props {
  position: Vector3;
  text: string;
  scale?: number;
  classTxt?: string;
}
const Label3D = ({ position, scale = 1, text, classTxt="" }: Props) => {
  return (
    <Html
      occlude={true}
      center
      transform
      position={position}
      distanceFactor={15}
      scale={scale}
    >
        <h5 className={classTxt} >{text}</h5>
    </Html>
  );
};

export default Label3D;
