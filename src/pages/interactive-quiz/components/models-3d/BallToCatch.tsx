import { useRef, useState } from "react";
import HeartInBubble from "../../../about-us/components/models-3d/HeartInBubble";
import { RigidBody, type RapierRigidBody, RigidBodyTypeString } from "@react-three/rapier";

interface Props {
  disabledMove: boolean;
}

const BallToCatch = ({disabledMove}: Props) => {
  const rigidRef = useRef<RapierRigidBody>(null);
  const [isDragging, setIsDragging] = useState(false);
    const [typeObject, setTypeObject] = useState<RigidBodyTypeString>("dynamic")

  const handleDoubleClick = () => {
    setIsDragging(false);
    setTypeObject('dynamic')
  };

  const handlePointerClick = () => {
    if(disabledMove) return;
    setIsDragging(true);
    setTypeObject('kinematicPosition')
  };

  const handlePointerMove = (event: any) => {
    if (!isDragging || !rigidRef.current) return;
    const point = event.point;
    rigidRef.current.setTranslation({ y: point.y, x: point.x, z: 0 }, true);
  };

  return (
    <RigidBody ref={rigidRef} type={typeObject} colliders="ball">
      <HeartInBubble
        key={1}
        modelProps={{ scale: 0.3 }}
        mauseClick={handlePointerClick}
        doubleClick={handleDoubleClick}
        pointerMove={handlePointerMove}
      />
    </RigidBody>
  );
};

export default BallToCatch;
