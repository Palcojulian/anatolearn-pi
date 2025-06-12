import { Text } from "@react-three/drei";
import { Vector3 } from "three";

interface Props {
  position: Vector3;
  color: string;
  fontSize: number;
  text: string;
}

const Text2D = ({ color, fontSize, position, text }: Props) => {
  return (
    <Text
      color={color}
      fontSize={fontSize}
      position={position}
      anchorX={"center"}
      anchorY={"middle"}
      font={"/fonts/HKGrotesk-Regular.ttf"}
    >
      {text}
    </Text>
  );
};

export default Text2D;
