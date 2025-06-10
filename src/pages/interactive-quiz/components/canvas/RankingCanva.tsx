import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Vector3 } from "three";
import { type Ranking } from "../../services/ranking-service";

import ToQuizBtn from "../html-3d/ToQuizBtn";
import RowPosition from "../html-3d/RowPosition";
import RankingStaging from "../staging/RankingStaging";
import FirstPosition from "../html-3d/FirstPosition";
import SecondPosition from "../html-3d/SecondPosition";
import ThirdPosition from "../html-3d/ThirdPosition";
import Texto3D from "../../../../components/Texto3D";
import { useAuthUser } from "../../../log-in/composables/useAuthUser";
import Laoding from "../models-3d/Laoding";
import ModelsRanking from "../models-3d/ModelsRanking";
import NoDataAlert from "../models-3d/NoDataAlert";

interface Props {
  data: Ranking[];
  loading: boolean;
}

const RankingCanva = (props: Props) => {
  const { userLooged } = useAuthUser();

  const redenderModels = () => {
    if (props.loading) return <Laoding />;
    if (props.data.length == 0) return <NoDataAlert />;

    return <ModelsRanking />;
  };

  const renderPositions = () => {
    let ejeYVal = -1;
    return props.data.map((item, i) => {
      if (i == 0) {
        return <FirstPosition {...item} />;
      }

      if (i == 1) {
        return <SecondPosition {...item} />;
      }

      if (i == 2) {
        return <ThirdPosition {...item} />;
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

        {redenderModels()}
        {renderBtnQuiz()}
        {renderPositions()}
        <RankingStaging />
      </Canvas>
    </Suspense>
  );
};

export default RankingCanva;
