const Floor = () => {
    return (
      <mesh
        rotation-x={-Math.PI / 2}
        receiveShadow={true}
        position={[0,-1.3,0]}
      >
        <circleGeometry args={[2.5, 50]} />
        <meshStandardMaterial roughness={0.7} metalness={1} color={'#3F72AF'} />
      </mesh>
    );
  };
  
  export default Floor;