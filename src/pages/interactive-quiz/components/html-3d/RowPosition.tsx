import { Html } from "@react-three/drei";
import { Vector3 } from "three";

interface Props {
  photoUrl: string;
  nameUser: string;
  tiempo: number;
  calificacion: number;
  position: Vector3;
  index: number;
}

const RowPosition = (props: Props) => {
  return (
    <Html occlude center position={props.position} transform distanceFactor={4}>
      <div className="relative w-[550px] bg-slate-200 rounded-[3px] flex items-center gap-2 p-2">
        <div className="w-full flex flex-col items-center">
            
          <img
            src={`${props.photoUrl}`}
            alt=""
            className="w-[35px] h-[35px] rounded-full"
          />
          <div className="w-[120px] truncate text-xs"> {props.nameUser}</div>
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="w-[35px] h-[35px] bg-blue-600 rounded-full flex items-center justify-center text-white text-xl">
            {props.calificacion}
          </div>
          <div className="text-xs" >PUNTAJE</div>
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="w-[35px] h-[35px] bg-violet-600 rounded-full flex items-center justify-center text-white text-xs ">
            {props.tiempo}
          </div>
          <div className="text-xs" >SEGUNGOS</div>
        </div>

        <div className="absolute top-[-11px] w-[25px] h-[25px] rounded-full left-[-12px] bg-indigo-800 text-white flex items-center justify-center">
          {props.index}
        </div>
      </div>
    </Html>
  );
};

export default RowPosition;
