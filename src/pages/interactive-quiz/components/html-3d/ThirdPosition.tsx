import { Html } from "@react-three/drei";
import { type Ranking } from "../../services/ranking-service";
import Medalla from "../../../../../public/img/medalla-de-bronce.png";

const ThirdPosition = (props: Ranking) => {

  return (
    <Html occlude center position={[2, 0.45, 0.6]} transform distanceFactor={4}>
      <div className="relative flex flex-col justify-center gap-3 items-center w-[130px] h-[170px] rounded-lg shadow-[-4px_4px_56px_-4px_#bf8970]">
        <div className="flex gap-1 flex-col items-center">
          <img
            src={`${props.photo_user}`}
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-[10px] bg-white px-2 rounded text-gray-700 font-medium">
            {`
            ${props.name_user.split(" ")[0].toUpperCase()} 
            ${props.name_user.split(" ")[2] ? props.name_user.split(" ")[2].toUpperCase() : ""}`}
          </span>
        </div>

        <div className="flex gap-2">
          <div className="w-full flex flex-col gap-1 items-center">
            <div className="w-[35px] h-[35px] bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
              {props.calificacion}
            </div>
            <div className="text-[10px] bg-white px-1 rounded text-gray-700 font-medium ">
              PUNTAJE
            </div>
          </div>
          <div className="w-full flex flex-col gap-1  items-center">
            <div className="w-[35px] h-[35px] bg-violet-600 rounded-full flex items-center justify-center text-white text-[10px] ">
              {props.tiempo}
            </div>
            <div className="text-[10px] bg-white px-1 rounded text-gray-700 font-medium ">SEGUNDOS</div>
          </div>
        </div>
        <img 
          className="absolute top-[-15px] left-[-12px]" 
          src={Medalla} 
          width={40} 
          height={40} 
        />
      </div>
    </Html>
  );
};

export default ThirdPosition;

