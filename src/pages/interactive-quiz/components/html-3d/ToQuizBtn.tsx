import React from "react";
import { Html } from "@react-three/drei";
import { useNavigate } from "react-router";

const ToQuizBtn = () => {

  const navigate = useNavigate();

  return (
    <Html
      occlude={false}
      center
      position={[-7, 3, 2]}
      distanceFactor={15}
    >
      <button className="btn-primary inline-block w-[140px] h-[50px] text-lg" onClick={() => navigate('/quiz')} >
        Realizar quiz
      </button>
    </Html>
  );
};

export default ToQuizBtn;
