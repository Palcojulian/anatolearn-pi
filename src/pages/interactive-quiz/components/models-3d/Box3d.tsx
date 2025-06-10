import { Vector3 } from "three";

interface Props {
  color: string;
  position: Vector3;
  metalnesVal: number;
  roughness: number;
  scale?: number;
  width?: number;
  height?: number;
  depth?: number;
}

const Box3d = ({
  color,
  position,
  metalnesVal,
  roughness,
  scale = 1,
  width = 7,
  height = 20,
  depth = 1,

}: Props) => {
  return (
    <mesh receiveShadow position={position} scale={scale}>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial
        roughness={roughness}
        metalness={metalnesVal}
        color={color}
      />
    </mesh>
  );
};

export default Box3d;
