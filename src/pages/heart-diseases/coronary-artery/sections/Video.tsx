import { Canvas } from '@react-three/fiber';
import { OrbitControls, useVideoTexture } from '@react-three/drei';

function VideoPlane() {
  // Usa la textura de video
  const texture = useVideoTexture('/videos/alimentacion-saludable.mp4');
  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[4, 2.25]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}

export default function Video3D() {
  return (
    <div style={{ width: '100%', height: '60vh' }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <VideoPlane />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
