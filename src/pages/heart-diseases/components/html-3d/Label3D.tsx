import React from "react";
import { Html } from "@react-three/drei";
import { Vector3 } from "three";
interface Props {
  position: Vector3;
  text: string;
  scale?: number;
}
const Label3D = ({ position, scale = 1, text }: Props) => {
  return (
    <Html
      occlude={false}
      center
      transform
      position={position}
      distanceFactor={15}
      scale={scale}
    >
        <h5>{text}</h5>
    </Html>
  );
};

export default Label3D;
