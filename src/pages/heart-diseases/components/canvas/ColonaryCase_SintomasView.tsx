import { Suspense, useState, useEffect } from "react";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ColonaryCase_Sintomas from "../models-3d/ColonaryCase_Sintomas";

const ModelController = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [scale, setScale] = useState<number>(1.5);
    const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);
    
    useEffect(() => {
        const keysPressed = new Set<string>();
        let animationFrame: number;

        const update = () => {
            let changed = false;
            let newScale = scale;
            let newRotation = [...rotation] as [number, number, number];
            const zoomSpeed = 0.05;
            const rotationSpeed = 0.02;
            
            if (keysPressed.has('KeyW') || keysPressed.has('ArrowUp')) {
                newScale += zoomSpeed;
                changed = true;
            }
            if (keysPressed.has('KeyS') || keysPressed.has('ArrowDown')) {
                newScale -= zoomSpeed;
                changed = true;
            }
            if (keysPressed.has('KeyA') || keysPressed.has('ArrowLeft')) {
                newRotation[1] -= rotationSpeed;
                changed = true;
            }
            if (keysPressed.has('KeyD') || keysPressed.has('ArrowRight')) {
                newRotation[1] += rotationSpeed;
                changed = true;
            }
            if (keysPressed.has('KeyQ')) {
                newRotation[0] -= rotationSpeed;
                changed = true;
            }
            if (keysPressed.has('KeyE')) {
                newRotation[0] += rotationSpeed;
                changed = true;
            }
            if (keysPressed.has('KeyR')) {
                newScale = 1.5;
                newRotation = [0, 0, 0];
                changed = true;
            }
            
            // Limitar el zoom para evitar que el modelo se haga demasiado grande o pequeño
            if (newScale < 0.5) newScale = 0.5;
            if (newScale > 3.0) newScale = 3.0;
            
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
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        animationFrame = requestAnimationFrame(update);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            cancelAnimationFrame(animationFrame);
        };
    }, [scale, rotation]);

    const handlePointerOver = () => {
        setIsHovered(true);
        document.body.style.cursor = 'pointer';
    };
    const handlePointerOut = () => {
        setIsHovered(false);
        document.body.style.cursor = 'default';
    };
    const handleClick = () => {
        setIsClicked(!isClicked);
        console.log('Modelo clickeado:', !isClicked);
    };

    return (
        <>
            <ColonaryCase_Sintomas
                scale={isHovered ? scale * 1.1 : scale}
                position={[0, -1.5, 0]}
                rotation={rotation}
                castShadow
                receiveShadow
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
                onClick={handleClick}
            />
            
            {/* Controles */}
            <Html position={[-2, 0, 2]} center>
                <div style={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    color: 'white',
                    padding: '15px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    maxWidth: '200px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.5)'
                }}>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>Controles:</h3>
                    <ul style={{ margin: 0, paddingLeft: '15px' }}>
                        <li>W/S: Zoom in/out</li>
                        <li>A/D: Rotar Y</li>
                        <li>Q/E: Rotar X</li>
                        <li>R: Reset</li>
                    </ul>
                </div>
            </Html>
        </>
    );
};

const ColonaryCase_SintomasView = () => {
    return (
        <Suspense fallback={<h5>Cargando...</h5>}>
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }} shadows>
                <ambientLight intensity={0.5} />
                <directionalLight 
                    position={[5, 5, 5]} 
                    intensity={1.5} 
                    castShadow
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />
                <pointLight 
                    position={[-5, 5, 5]} 
                    intensity={0.8} 
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />
                <OrbitControls enableZoom={false} enableRotate={true} />
                <Environment preset="city" background={false} />
                <ModelController />
            </Canvas>
        </Suspense>
    );
};

export default ColonaryCase_SintomasView; 