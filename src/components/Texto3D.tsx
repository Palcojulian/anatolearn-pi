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
}

const Texto3D = (props: Props) => {
  const text3DRef = useRef<Mesh>(null);

  return (
    <Center position={props.position}>
      <Text3D
        ref={text3DRef}
        font={"/fonts/Hanken_Grotesk_Regular.json"}
        bevelEnabled={props.bevelEnabled}
        bevelSize={props.bevelSize}
        bevelThickness={props.bevelThickness}
        height={props.height}
        size={props.size}
        letterSpacing={props.letterSpacing}
        castShadow
      >
        {props.text}
        <meshStandardMaterial color={props.color} metalness={0.7} roughness={0.1} />
      </Text3D>
    </Center>
  );
};

export default Texto3D;
