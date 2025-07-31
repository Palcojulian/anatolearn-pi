import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import RankingStaging from "../staging/RankingStaging";
import WelcomeQuiz from "../questions/WelcomeQuiz";
import FirstQuestion from "../questions/FirstQuestion";
import SecondQuestion from "../questions/SecondQuestion";
import ThirdQuestion from "../questions/ThirdQuestion";
import FourthQuestion from "../questions/FourthQuestion";
import Resumen from "../questions/Resumen";

import { useProgressQuiz } from "../../composables/useActionsQuiz";
import ProgressQuiz from "../html-3d/ProgressQuiz";
import { useAuthUser } from "../../../log-in/composables/useAuthUser";
import InfoButton from "../../../../components/InfoButton";

const QuizCanva = () => {
  const { nQuestion } = useProgressQuiz();
  const { userLooged } = useAuthUser();
  const [color, setColor] = useState<string>("#fff");
  const [showInstructions, setShowInstructions] = useState(false);
  const [colorButtonActive, setColorButtonActive] = useState(false);

  const [showColorInstructions, setShowColorInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };
  const handleColorButton = () => {
    setColor(colorButtonActive ? "#fff" : "#43a047"); // Verde si activo, blanco si no
    setColorButtonActive(!colorButtonActive);
    setShowColorInstructions(!showColorInstructions);
  };

  const renderModels = () => {
    if (nQuestion == 1) {
      return <FirstQuestion {...userLooged!} />;
    } else if (nQuestion == 2) {
      return <SecondQuestion {...userLooged!} />;
    } else if (nQuestion == 3) {
      return <ThirdQuestion {...userLooged!} />;
    } else if (nQuestion == 4) {
      return <FourthQuestion {...userLooged!} />;
    } else if (nQuestion == 5) {
      return <Resumen {...userLooged!} />;
    } else {
      return <WelcomeQuiz {...userLooged!} />;
    }
  };

  const renderProgress = () => {
    if (nQuestion != 0) return <ProgressQuiz />;
    return;
  };

  return (
    <Suspense fallback={<h6>Cargando...</h6>}>
      <Canvas camera={{ position: [0, 2, 7], fov: 100 }}>
        <RankingStaging />
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          maxAzimuthAngle={Math.PI / 10}
          minAzimuthAngle={Math.PI / -10}
        />
        {renderProgress()}
        {renderModels()}
      </Canvas>
      {/* Botón INFO fuera del canvas */}
      <button
        onClick={toggleInstructions}
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "#3F72AF",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#3F72AF";
          e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#3F72AF";
          e.currentTarget.style.transform = "translateY(-50%) scale(1)";
        }}
      >
        <span
          style={{
            display: "block",
            width: "100%",
            fontWeight: "bold",
            fontSize: "16px",
            letterSpacing: "1px",
          }}
        >
          INFO
        </span>
      </button>
      {showInstructions && (
        <div
          style={{
            position: "absolute",
            right: "100px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.9)",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
            fontSize: "14px",
            maxWidth: "300px",
            boxShadow: "0 8px 16px rgba(0,0,0,0.5)",
            border: "2px solid #E0D2C3",
            zIndex: 1000,
            fontFamily: "inherit",
            textAlign: "left",
          }}
        >
          <h3
            style={{
              margin: "0 0 15px 0",
              fontSize: "16px",
              color: "#FFFFFF",
              fontWeight: 700,
            }}
          >
            Instrucciones del quiz:
          </h3>
          <ul style={{ margin: 0, paddingLeft: "20px", lineHeight: "1.6" }}>
            <li>
              <strong>Click izquierdo sobre el corazón:</strong> Tomar el
              corazón.
            </li>
            <br />
            <li>
              <strong>Arrastrar el corazón:</strong> Mover suavemente el corazón
              sobre la respuesta deseada.
            </li>
            <br />
            <li>
              <strong>Escoger la respuesta deseada:</strong> Soltar el corazón
              sobre la respuesta deseada haciendo doble click izquierdo al
              mouse.
            </li>
          </ul>
        </div>
      )}
    </Suspense>
  );
};

export default QuizCanva;
