import { Vector3 } from "three";

interface Props {
  color: string;
  position: Vector3;
  metalnesVal: number;
  roughness: number;
  scale?: number;
}

const Floor = (props: Props) => {
  return (
    <mesh rotation-x={-Math.PI} receiveShadow={true} position={props.position} scale={props.scale ?? 1}>
      <cylinderGeometry args={[2.5, 2.5, 0.15, 50]}  />
      <meshStandardMaterial
        roughness={props.roughness}
        metalness={props.metalnesVal}
        color={props.color}
      />
    </mesh>
  );
};

export default Floor;
