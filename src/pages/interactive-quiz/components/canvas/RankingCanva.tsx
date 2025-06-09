import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Vector3 } from "three";
import { type Ranking } from "../../services/ranking-service";

import ToQuizBtn from "../html-3d/ToQuizBtn";
import RowPosition from "../html-3d/RowPosition";
import Box3d from "../models-3d/Box3d";
import RankingStaging from "../staging/RankingStaging";
import Oro from "../models-3d/Oro";
import Plata from "../models-3d/Plata";
import Bronce from "../models-3d/Bronce";
import BoxFirst from "../models-3d/BoxFirst";
import BoxSecond from "../models-3d/BoxSecond";
import BoxThird from "../models-3d/BoxThird";
import FirstPosition from "../html-3d/FirstPosition";
import SecondPosition from "../html-3d/SecondPosition";
import ThirdPosition from "../html-3d/ThirdPosition";
import Texto3D from "../../../../components/Texto3D";
import { useAuthUser } from "../../../log-in/composables/useAuthUser";

interface Props {
  data: Ranking[];
}

const RankingCanva = (props: Props) => {
  const position = new Vector3(0, -3, 0);
  const { userLooged } = useAuthUser();

  const renderPositions = () => {
    let ejeYVal = -1;

    return props.data.map((item, i) => {
      if (i == 0) {
        return (
          <FirstPosition
            {...item}
          />
        );
      }

      if (i == 1) {
        return (
          <SecondPosition
            {...item}
          />
        );
      }

      if (i == 2) {
        return (
          <ThirdPosition
            {...item}
          />
        );
      }

      if (i > 3) ejeYVal -= 0.9;
      return (
        <RowPosition
          photoUrl={item.photo_user}
          calificacion={+item.calificacion.toFixed(1)}
          index={i + 1}
          nameUser={item.name_user.toUpperCase()}
          position={new Vector3(0, ejeYVal, 0.7)}
          tiempo={+item.tiempo.toFixed(1)}
        />
      );
    });
  };

  const renderBtnQuiz = () => {
    if (userLooged) return <ToQuizBtn />;
    return (
      <Texto3D
        text="¡Debes iniciar sesión para realizar un quiz!"
        color="#3F72AF"
        position={new Vector3(0, 4.5, 0)}
        bevelEnabled
        bevelSize={0.1}
        bevelThickness={0.02}
        height={0.2}
        letterSpacing={0.1}
        size={1}
        scale={0.3}
      />
    );
  };

  return (
    <Suspense fallback={<h6>Cargando...</h6>}>
      <Canvas className="hover:cursor-move">
        <PerspectiveCamera makeDefault position={[0, 10, 0]} fov={60} />
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          maxAzimuthAngle={Math.PI / 8}
          minAzimuthAngle={Math.PI / -8}
        />
        {renderBtnQuiz()}
        <Box3d
          color="#3F72AF"
          position={new Vector3(0, -10, 0)}
          metalnesVal={0.7}
          roughness={0.1}
        />

        <BoxFirst
          color="#3F72AF"
          position={new Vector3(0, 1, 0)}
          metalnesVal={0.7}
          roughness={0.1}
        />
        <Oro position={[0, 1.9, 0]} scale={1.7} />

        <BoxSecond
          color="#3F72AF"
          position={new Vector3(-2, 0.9, 0)}
          metalnesVal={0.7}
          roughness={0.1}
        />

        <Plata position={[-2, 1.8, 0]} scale={0.8} rotation={[0, 1.7, 0]} />

        <BoxThird
          color="#3F72AF"
          position={new Vector3(2, 0.8, 0)}
          metalnesVal={0.7}
          roughness={0.1}
        />

        <Bronce position={[2, 1.6, 0]} scale={1.5} />

        {renderPositions()}

        <RankingStaging />

        <Texto3D
          text="¡Ranking"
          color="#3F72AF"
          position={new Vector3(6, 1, 1)}
          bevelEnabled
          bevelSize={0.1}
          bevelThickness={0.02}
          height={0.2}
          letterSpacing={0.1}
          size={1}
          scale={0.4}
        />
        <Texto3D
          text="de"
          color="#3F72AF"
          position={new Vector3(6.1, 0.4, 1)}
          bevelEnabled
          bevelSize={0.1}
          bevelThickness={0.02}
          height={0.2}
          letterSpacing={0.1}
          size={1}
          scale={0.4}
        />

        <Texto3D
          text="posiciones!"
          color="#3F72AF"
          position={new Vector3(6.1, -0.3, 1)}
          bevelEnabled
          bevelSize={0.1}
          bevelThickness={0.02}
          height={0.2}
          letterSpacing={0.1}
          size={1}
          scale={0.4}
        />
      </Canvas>
    </Suspense>
  );
};

export default RankingCanva;
