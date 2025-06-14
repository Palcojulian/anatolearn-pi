import { Vector3, Euler } from "three";

interface Props {
  color: string;
  position: Vector3;
  metalnesVal: number;
  roughness: number;
  scale?: number;
  width?: number;
  height?: number;
  depth?: number;
  rotation?: Euler;
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
  rotation = new Euler(0,0,0),
}: Props) => {
  return (
    <mesh receiveShadow={true} position={position} scale={scale} rotation={rotation }>
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
