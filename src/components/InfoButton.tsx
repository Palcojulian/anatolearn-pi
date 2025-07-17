import { Html } from "@react-three/drei";
import { ReactNode, useState } from "react";

type InfoButtonProps = {
  position?: [number, number, number];
  title?: string;
  children: ReactNode;
};

const InfoButton: React.FC<InfoButtonProps> = ({
  position = [0, 0, 0],
  title = "Ver info",
  children,
}) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Html position={position} center>
      <div
        style={{
          color: "white",
          padding: "10px",
          borderRadius: "10px",
          fontSize: "14px",
          display: "inline-block", // para que el botón no se estire
          boxShadow: "0 6px 12px rgba(0,0,0,0.5)",
        }}
      >
        <button
          onClick={() => setShowInfo(!showInfo)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            background: isHovered ? "#ffffff" : "#3f72af",
            border: "1px solid #3F72AF",
            borderRadius: "6px",
            padding: "7px 12px",
            color: isHovered ? "#3f72af" : "white",
            cursor: "pointer",
            fontSize: "13px",
            whiteSpace: "nowrap",
            display: "inline-block",
            // #1e88e5
          }}
        >
          {showInfo ? "Ocultar" : "Mostrar"} {title}
        </button>

        {showInfo && (
          <div
            style={{
              marginTop: "10px",
              backgroundColor: "rgba(0,0,0,0.6)",
              padding: "15px",
              borderRadius: "8px",
              maxWidth: "360px",
              minWidth: "280px",
              lineHeight: "1.5",
            }}
          >
            {children}
          </div>
        )}
      </div>
    </Html>
  );
};

export default InfoButton;
