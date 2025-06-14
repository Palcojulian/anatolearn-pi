import React from "react";
import { Html } from "@react-three/drei";
import { Vector3 } from "three";
import IconBack from "../../../../components/IconBack";
import IconNext from "../../../../components/IconNext";
import IconPlay from "../../../../components/IconPlay";
import IconPause from "../../../../components/IconPause";

import useStorePrevencion from "../../arrhythmia/stores/useStorePrevencion";

interface Props {
  position: Vector3;
  scale?: number;
}

const ActionsVideoArrhytmia = ({ position, scale }: Props) => {
  const { changePathVideo, setStateVideo, isPlayVideo } = useStorePrevencion();

  const iconActionVideo = () => {
    return isPlayVideo ? <IconPause /> : <IconPlay />;
  };

  return (
    <Html
      occlude={false}
      center
      transform={false}
      position={position}
      scale={scale}
    >
      <div className="flex items-center justify-center gap-2 ">
        <button
          onClick={changePathVideo}
          className="bg-[#E0D2C3] flex items-center justify-center w-[50px] h-[50px]  rounded-full hover:cursor-pointer border"
        >
          <IconBack />
        </button>
        <button
          onClick={setStateVideo}
          className="bg-[#E0D2C3] flex items-center justify-center w-[50px] h-[50px]  rounded-full hover:cursor-pointer border"
        >
          {iconActionVideo()}
        </button>
        <button
          onClick={changePathVideo}
          className="bg-[#E0D2C3] flex items-center justify-center w-[50px] h-[50px]  rounded-full hover:cursor-pointer border"
        >
          <IconNext />
        </button>
      </div>
    </Html>
  );
};

export default ActionsVideoArrhytmia;
