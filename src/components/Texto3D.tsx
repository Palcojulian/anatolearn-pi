import { Center, Text3D } from "@react-three/drei";
import { useRef } from "react";
import { Vector3, Mesh, Box3 } from "three";

interface Props {
  text: string;
  position: Vector3;
  color: string;
  bevelEnabled: boolean;
  bevelSize: number;
  bevelThickness: number;
  height: number;
  size: number;
  letterSpacing: number;
  scale?:number;
  pointerEnter?: () => void;
  pointerClick?: () => void;
  pointerMove?: (e: any) => void;
}

const Texto3D = ({
  position,
  bevelEnabled,
  bevelSize,
  bevelThickness,
  color,
  height,
  letterSpacing,
  size,
  text,
  scale=1,
  pointerEnter,
  pointerMove,
  pointerClick,
}: Props) => {
  const text3DRef = useRef<Mesh>(null);

  return (
    <Center position={position}>
      <Text3D
        ref={text3DRef}
        font={"/fonts/Hanken_Grotesk_Regular.json"}
        bevelEnabled={bevelEnabled}
        bevelSize={bevelSize}
        bevelThickness={bevelThickness}
        height={height}
        size={size}
        letterSpacing={letterSpacing}
        castShadow
        scale={scale}
        onPointerEnter={pointerEnter}
        onClick={pointerClick}
        onPointerMove={pointerMove}
        
        
      >
        {text}
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.1} />
      </Text3D>
    </Center>
  );
};

export default Texto3D;
