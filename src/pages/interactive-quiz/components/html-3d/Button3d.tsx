import React from "react";
import { Html } from "@react-three/drei";

const Button3d = () => {
  return (
    <Html
      occlude={false}
      center
      position={[-7, 3, 2]}
      distanceFactor={15}
    >
      <button className="btn-primary inline-block w-[140px] h-[50px] text-lg">
        Realizar quiz
      </button>
    </Html>
  );
};

export default Button3d;
