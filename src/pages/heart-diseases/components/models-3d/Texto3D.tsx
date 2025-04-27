import { Center, Text3D } from "@react-three/drei";
import { useRef, useEffect } from "react";
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

  useEffect(() => {
    if (text3DRef.current && props.text) {
      const box = new Box3().setFromObject(text3DRef.current);
      const center = new Vector3();
      box.getCenter(center);

      text3DRef.current.position.x = props.position.x - center.x;
      text3DRef.current.position.y = props.position.y - center.y;
      text3DRef.current.position.z = props.position.z - center.z;
    }
  }, [text3DRef, props.text]);

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
      >
        {props.text}
        <meshStandardMaterial color={props.color} />
      </Text3D>
    </Center>
  );
};

export default Texto3D;
