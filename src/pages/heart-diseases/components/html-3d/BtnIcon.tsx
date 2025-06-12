import React, { ReactNode } from "react";
import { Html } from "@react-three/drei";
import { Vector3 } from "three";

interface Props {
  position: Vector3;
  scale?: number;
  classBtn?: string;
  children?: ReactNode;
  isTransform?: boolean;
  action: () => void;
}
const BtnIcon = ({
  position,
  scale,
  classBtn,
  children,
  action,
  isTransform = true,
}: Props) => {
  return (
    <Html
      occlude={true}
      center
      transform={isTransform}
      position={position}
      distanceFactor={15}
      scale={scale}
    >
      <button className={classBtn} onClick={action} >
        {children}
      </button>
    </Html>
  );
};

export default BtnIcon;
