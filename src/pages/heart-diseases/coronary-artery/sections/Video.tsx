import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useVideoTexture } from "@react-three/drei";

const BEIGE = '#E0D2C3';
const BTN_BLUE = '#3F72AF';
const BTN_BLUE_HOVER = '#2c4e7a';

const VideoPlane = ({ isPlaying, isMuted }: { isPlaying: boolean; isMuted: boolean }) => {
  const videoUrl = "/videos/Angioplastia de arteria coronaria (Vía radial).mp4";
  const texture = useVideoTexture(videoUrl, {
    muted: isMuted,
    loop: true,
    autoplay: false,
    start: false,
    crossOrigin: "anonymous",
  });
  const planeRef = useRef<any>(null);

  useEffect(() => {
    if (isPlaying) {
      texture.image.play();
    } else {
      texture.image.pause();
    }
    texture.image.muted = isMuted;
  }, [isPlaying, isMuted, texture]);

  useFrame(() => {
    if (planeRef.current) {
      planeRef.current.rotation.y = 0;
    }
  });

  // El plano ocupa casi todo el canvas (dejando un marco beige más delgado)
  return (
    <mesh position={[0, 0, 0]} ref={planeRef}>
      <planeGeometry args={[22, 12.375]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
};

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-2">
      <div
        className="w-full flex flex-col items-center mx-auto"
        style={{
          maxWidth: 900,
          width: '100%',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 900,
            minWidth: 320,
            aspectRatio: '16/9',
            background: BEIGE,
            borderRadius: 18,
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Suspense fallback={<div style={{ color: '#fff', textAlign: 'center', width: '100%' }}>Cargando video 3D...</div>}>
            <Canvas
              camera={{ position: [0, 0, 30], fov: 48 }}
              shadows
              style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.0)' }}
            >
              <ambientLight intensity={0.7} />
              <Environment preset="city" background={false} />
              <OrbitControls enableZoom={false} enableRotate={true} />
              <VideoPlane isPlaying={isPlaying} isMuted={isMuted} />
            </Canvas>
          </Suspense>
        </div>
        <div className="flex flex-row gap-4 justify-center items-center mt-6">
          <button
            style={{ background: BTN_BLUE, color: '#fff' }}
            className="px-6 py-2 rounded-lg shadow text-lg font-semibold transition-colors duration-200"
            onMouseOver={e => (e.currentTarget.style.background = BTN_BLUE_HOVER)}
            onMouseOut={e => (e.currentTarget.style.background = BTN_BLUE)}
            onClick={() => setIsPlaying((p) => !p)}
          >
            {isPlaying ? "Pausar video" : "Reproducir video"}
          </button>
          <button
            style={{ background: BTN_BLUE, color: '#fff' }}
            className="px-6 py-2 rounded-lg shadow text-lg font-semibold transition-colors duration-200"
            onMouseOver={e => (e.currentTarget.style.background = BTN_BLUE_HOVER)}
            onMouseOut={e => (e.currentTarget.style.background = BTN_BLUE)}
            onClick={() => setIsMuted((m) => !m)}
          >
            {isMuted ? "Activar sonido" : "Silenciar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
