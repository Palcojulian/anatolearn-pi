import { Html } from "@react-three/drei";
import { Vector3 } from "three";

interface Props {
  position: Vector3;
  label: string;
  action: () => void;
  scale?: number;
  width?: string;
}

const Btn3DHtml = ({action, label, position, scale = 1, width = "w-[140px]"}: Props) => {
  return (
    <Html 
      occlude={false} 
      center 
      transform 
      position={position} 
      distanceFactor={15}
      scale={scale}
    >
      <button onClick={action} className={`btn-primary inline-block ${width} h-[50px] text-lg rounded-4xl`}>
        {label}
      </button>
    </Html>
  );
};

export default Btn3DHtml;
