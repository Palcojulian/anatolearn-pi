import { Suspense, useState, useEffect } from "react";
import { OrbitControls, Environment, Sky, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import StenosisHeart from "../models-3d/StenosisHeart";
import Floor from "../../../../components/Floor";
import { Vector3 } from "three";

const Stenosis = () => {
  const position: Vector3 = new Vector3(0.5, -2, 0);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [scale, setScale] = useState<number>(20);
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

  useEffect(() => {
    const keysPressed = new Set<string>();
    let animationFrame: number;

    const update = () => {
      let changed = false;
      let newScale = scale;
      let newRotation = [...rotation] as [number, number, number];
      const zoomSpeed = 0.5;
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
        newScale = 20;
        newRotation = [0, 0, 0];
        changed = true;
      }

      // Limitar el zoom para evitar que el modelo se haga demasiado grande o pequeño
      if (newScale < 15) newScale = 15;
      if (newScale > 40) newScale = 40;

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
          camera={{ position: [2, 0, 6] }}
          style={{ height: "70vh", width: "100%" }}
          shadows={true}
          //className=" mask-radial-[40%_50%] mask-radial-from-70% hover:cursor-pointer"
        >
          <Html position={[-1.5, 5, -2]} style={{ pointerEvents: "none" }}>
            <h2
              style={{
                color: "#3F72AF",
                fontWeight: 800,
                fontSize: "1.1em",
                margin: 0,
                textShadow: "0 2px 8px rgba(0,0,0,0.18)",
                maxWidth: "750px",
                whiteSpace: "nowrap",
              }}
            >
              "Estructura interna del corazón"
            </h2>
          </Html>
          <directionalLight
            position={[0, 5, 5]}
            intensity={6}
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
          <ambientLight intensity={3} />

          <Sky />
          <StenosisHeart
            position={[0, -2, 0.8]}
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
            roughness={1}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Stenosis;
