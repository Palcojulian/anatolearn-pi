import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import RankingStaging from "../staging/RankingStaging";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Vector3 } from "three";
import Button3d from "../html-3d/Button3d";
import RowPosition from "../html-3d/RowPosition";
import Box3d from "../models-3d/Box3d";
import { type Ranking } from "../../services/ranking-service";

interface Props {
  data: Ranking[];
}

const RankingCanva = (props: Props) => {
  const position = new Vector3(0, -3, 0);

  const renderPositions = () => {
    let ejeYVal = -0.8;

    return props.data.map((item, i) => {
      if (i > 0) ejeYVal -= 0.9;
      return (
        <RowPosition
          photoUrl="https://lh3.googleusercontent.com/a/ACg8ocL9zPDUH4ql98o378MPwdjaOrkFboutDIKxwEcDKmYtfbx9WUWV=s96-c"
          calificacion={item.calificacion}
          index={i + 1}
          nameUser={item.name_user.toUpperCase()}
          position={new Vector3(0, ejeYVal, 0.7)}
          tiempo={item.tiempo}
        />
      );
    });
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
        <Button3d />
        <Box3d
          color="#3F72AF"
          position={new Vector3(0, -10, 0)}
          metalnesVal={0.7}
          roughness={0.1}
        />

        {renderPositions()}

        <RankingStaging />
      </Canvas>
    </Suspense>
  );
};

export default RankingCanva;
