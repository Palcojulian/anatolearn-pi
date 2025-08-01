import { Suspense, useState, useEffect } from "react";
import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TratamientoStenosis from "../models-3d/Stenosis_Tratamiento";
import Floor from "../../../../components/Floor";
import Texto3D from "../../../../components/Texto3D";
import { Vector3 } from "three";

const StenosisTratamiento = () => {
  const position: Vector3 = new Vector3(0.2, -5, -8.5);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [scale, setScale] = useState<number>(5);
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);
  const yOffset = -2 + (scale - 20) * 0.05;

  useEffect(() => {
    const keysPressed = new Set<string>();
    let animationFrame: number;

    const update = () => {
      let changed = false;
      let newScale = scale;
      let newRotation = [...rotation] as [number, number, number];
      const zoomSpeed = 0.07;
      const rotationSpeed = 0.06;

      if (keysPressed.has("KeyW") || keysPressed.has("ArrowUp")) {
        newScale += zoomSpeed;
        changed = true;
      }
      if (keysPressed.has("KeyS") || keysPressed.has("ArrowDown")) {
        newScale -= zoomSpeed;
        changed = true;
      }
      if (keysPressed.has("KeyA") || keysPressed.has("ArrowLeft")) {
        newRotation[1] -= rotationSpeed;
        changed = true;
      }
      if (keysPressed.has("KeyD") || keysPressed.has("ArrowRight")) {
        newRotation[1] += rotationSpeed;
        changed = true;
      }
      if (keysPressed.has("KeyQ")) {
        newRotation[0] -= rotationSpeed;
        changed = true;
      }
      if (keysPressed.has("KeyE")) {
        newRotation[0] += rotationSpeed;
        changed = true;
      }
      if (keysPressed.has("KeyR")) {
        newScale = 5;
        newRotation = [0, 0, 0];
        changed = true;
      }

      // Limitar el zoom para evitar que el modelo se haga demasiado grande o pequeño
      if (newScale < 4) newScale = 4;
      if (newScale > 10) newScale = 10;

      if (changed) {
        setScale(newScale);
        setRotation(newRotation);
      }
      animationFrame = requestAnimationFrame(update);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      keysPressed.add(event.code);
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      keysPressed.delete(event.code);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    animationFrame = requestAnimationFrame(update);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      cancelAnimationFrame(animationFrame);
    };
  }, [scale, rotation]);

  const handlePointerOver = () => {
    setIsHovered(true);
    document.body.style.cursor = "pointer";
  };
  const handlePointerOut = () => {
    setIsHovered(false);
    document.body.style.cursor = "default";
  };
  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log("Modelo clickeado:", !isClicked);
  };

  return (
    <div
      style={{
        maxHeight: "80vh",
        aspectRatio: "1 / 1",
        marginLeft: "2rem",
        marginRight: "auto",
      }}
    >
      <Suspense fallback={<h5>Cargando...</h5>}>
        <Canvas
          camera={{ position: [0, 0, 7] }}
          style={{ height: "68vh", width: "100%" }}
          shadows={true}
        >
          <ambientLight intensity={3} />
          <directionalLight
            position={[2, 5, 10]}
            intensity={4}
            castShadow={true}
          />
          {/* <OrbitControls enableZoom={false} enableRotate={true} autoRotate autoRotateSpeed={3} /> */}
          <OrbitControls
            enableZoom={false}
            enableRotate={true}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 2}
          />

          <Sky />
          <TratamientoStenosis
            position={[0, 1, -6]}
            scale={isHovered ? scale * 1.1 : scale}
            rotation={rotation}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
            onClick={handleClick}
          />
          <Floor
            color="#3F72AF"
            position={position}
            metalnesVal={0.5}
            roughness={0.7}
            scale={2.5}
          />
          <Texto3D
            text="Haz click sobre el modelo"
            color="#3F72AF"
            position={new Vector3(0, 4, 0)}
            bevelEnabled
            bevelSize={0.1}
            bevelThickness={0.02}
            height={0.2}
            letterSpacing={0.15}
            size={2}
            scale={0.2}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default StenosisTratamiento;
