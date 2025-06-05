import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Vector3 } from "three";
import { type Ranking } from "../../services/ranking-service";

import Button3d from "../html-3d/Button3d";
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

interface Props {
  data: Ranking[];
}

const RankingCanva = (props: Props) => {
  const position = new Vector3(0, -3, 0);

  const renderPositions = () => {
    let ejeYVal = -1;

    return props.data.map((item, i) => {
      if (i == 0) {
        return (
          <FirstPosition
            {...item}
            photo_user="https://lh3.googleusercontent.com/a/ACg8ocL9zPDUH4ql98o378MPwdjaOrkFboutDIKxwEcDKmYtfbx9WUWV=s96-c"
          />
        );
      }

      if (i == 1) {
        return (
          <SecondPosition
            {...item}
            photo_user="https://lh3.googleusercontent.com/a/ACg8ocL9zPDUH4ql98o378MPwdjaOrkFboutDIKxwEcDKmYtfbx9WUWV=s96-c"
          />
        );
      }

      if (i == 2) {
        return (
          <ThirdPosition
            {...item}
            photo_user="https://lh3.googleusercontent.com/a/ACg8ocL9zPDUH4ql98o378MPwdjaOrkFboutDIKxwEcDKmYtfbx9WUWV=s96-c"
          />
        );
      }

      if (i > 3) ejeYVal -= 0.9;
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
      </Canvas>
    </Suspense>
  );
};

export default RankingCanva;
