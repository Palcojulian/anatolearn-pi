import { Suspense, useState, useRef, useEffect } from "react";
import { OrbitControls, Environment, Sparkles, Text, Stars } from "@react-three/drei";
import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ColonaryCase_Tratamiento from "../models-3d/ColonaryCase_Tratamiento";

const ColonaryCaseTratamientoController = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [color, setColor] = useState<string>("#fff");
    const [scale, setScale] = useState<number>(1.2); // Escala reducida
    const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

    useEffect(() => {
        const keysPressed = new Set<string>();
        let animationFrame: number;

        const update = () => {
            let changed = false;
            let newScale = scale;
            let newRotation = [...rotation] as [number, number, number];
            const zoomSpeed = 0.05;

            // Evento de teclado: W (zoom in)
            if (keysPressed.has('KeyW')) {
                newScale += zoomSpeed;
                changed = true;
            }
            // Evento de teclado: M (color verde)
            if (keysPressed.has('KeyM')) {
                setColor('#43a047');
            }
            // Evento de teclado: R (reset)
            if (keysPressed.has('KeyR')) {
                newScale = 1.5;
                newRotation = [0, 0, 0];
                changed = true;
            }
            // Limitar el zoom
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

    // Evento de mouse: onPointerOver
    const handlePointerOver = () => {
        setIsHovered(true);
        setColor('#4fc3f7'); // Azul claro al pasar el mouse
        document.body.style.cursor = 'pointer';
    };
    // Evento de mouse: onPointerOut
    const handlePointerOut = () => {
        setIsHovered(false);
        setColor('#fff'); // Vuelve al color original
        document.body.style.cursor = 'default';
    };
    // Evento de mouse: onClick
    const handleClick = () => {
        setIsClicked(!isClicked);
        setColor('#ffd600'); // Amarillo al hacer click
    };

    return (
        <ColonaryCase_Tratamiento
            scale={isHovered ? scale * 1.1 : scale}
            position={[0, -0.7, 0]} // Subo el modelo
            rotation={rotation}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
            onClick={handleClick}
            color={color}
        />
    );
};

const ColonaryCase_TratamientoView = () => {
    const [showInstructions, setShowInstructions] = useState(false);
    const [showColorInstructions, setShowColorInstructions] = useState(false);
    const [colorButtonActive, setColorButtonActive] = useState(false);
    const [sceneIndex, setSceneIndex] = useState(0); // 0: city, 1: sunset, 2: noche rosada

    const toggleInstructions = () => {
        setShowInstructions(!showInstructions);
    };
    const handleColorButton = () => {
        setColorButtonActive(!colorButtonActive);
        setShowColorInstructions(!showColorInstructions);
    };
    const toggleScene = () => {
        setSceneIndex((prev) => (prev === 2 ? 0 : prev + 1));
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '80vh' }}>
            <Suspense fallback={<h5>Cargando...</h5>}>
                <Canvas camera={{ position: [0, 0, 7], fov: 48 }} shadows>
                    {/* Título 3D fijo en la parte superior izquierda */}
                    <Html position={[-2.8, 2.2, 0]} style={{ pointerEvents: 'none' }}>
                        <h2 style={{
                            color: '#1976d2', // Azul de la página
                            fontWeight: 800,
                            fontSize: '1.1em', // Igual que Cambiar escena
                            margin: 0,
                            textShadow: '0 2px 8px rgba(0,0,0,0.18)'
                        }}>
                            Modelo 3
                        </h2>
                    </Html>
                    {/* Texto 3D para cambiar de escena en la parte superior derecha, alineado con los otros botones */}
                    <Text
                        position={[2.1, 1.6, 0]}
                        fontSize={0.18}
                        color="#E0D2C3"
                        anchorX="center"
                        anchorY="middle"
                        outlineColor="#000"
                        outlineWidth={0.01}
                        onClick={toggleScene}
                        onPointerOver={(e) => { e.stopPropagation(); document.body.style.cursor = 'pointer'; }}
                        onPointerOut={(e) => { e.stopPropagation(); document.body.style.cursor = 'default'; }}
                    >
                        Cambiar escena
                    </Text>
                    {/* 1. Luz direccional (sombra dura) */}
                    <directionalLight 
                        position={[5, 8, 5]} 
                        intensity={1.8} 
                        color="#ffffff"
                        castShadow
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                        shadow-bias={-0.0005}
                        shadow-camera-near={1}
                        shadow-camera-far={30}
                        shadow-camera-left={-10}
                        shadow-camera-right={10}
                        shadow-camera-top={10}
                        shadow-camera-bottom={-10}
                    />
                    {/* 2. Luz puntual (sombra suave) */}
                    <pointLight 
                        position={[-6, 6, 6]} 
                        intensity={1.2} 
                        color="#ffb300"
                        castShadow
                        shadow-mapSize-width={2048} // mayor tamaño para suavizar
                        shadow-mapSize-height={2048}
                        shadow-bias={-0.001}
                    />
                    {/* 3. Luz tipo spot (sombra suave) */}
                    <spotLight
                        position={[0, 10, 0]}
                        angle={0.35}
                        penumbra={0.5}
                        intensity={1.5}
                        color="#00bcd4"
                        castShadow
                        shadow-mapSize-width={2048}
                        shadow-mapSize-height={2048}
                        shadow-bias={-0.0005}
                        shadow-camera-near={1}
                        shadow-camera-far={30}
                    />
                    {/* 4. Luz hemisphere (sin sombra, solo ambiente) */}
                    <hemisphereLight
                        color="#e0d2c3"
                        groundColor="#b39ddb"
                        intensity={0.7}
                        position={[0, 10, 0]}
                    />
                    {/* Luz ambiental extra para relleno */}
                    <ambientLight intensity={0.15} />
                    <OrbitControls enableZoom={false} enableRotate={true} />
                    {/* Puesta en escena 1: city sin fondo */}
                    {sceneIndex === 0 && (
                        <>
                            <Environment preset="city" background={false} />
                            <Sparkles count={120} scale={8} size={2} color="#4fc3f7" speed={0.5} />
                        </>
                    )}
                    {/* Puesta en escena 2: sunset sin fondo */}
                    {sceneIndex === 1 && (
                        <>
                            <Environment preset="sunset" background={false} />
                            <Sparkles count={120} scale={8} size={2} color="#ffe066" speed={0.5} />
                        </>
                    )}
                    {/* Puesta en escena 3: noche rosada */}
                    {sceneIndex === 2 && (
                        <>
                            <Stars radius={180} depth={120} count={1200} factor={8} saturation={1} fade speed={2} />
                            <Sparkles count={300} scale={15} size={4} color="#e040fb" speed={1.5} />
                        </>
                    )}
                    <ColonaryCaseTratamientoController />
                    {/* Base circular vertical detrás del modelo, igual que en ColonaryCase_SintomasView */}
                    <mesh position={[0, -0.7, -0.7]} receiveShadow>
                        <cylinderGeometry args={[1.7, 1.7, 0.12, 64]} />
                        <meshStandardMaterial color="#E0D2C3" metalness={0.3} roughness={0.7} />
                    </mesh>
                </Canvas>
            </Suspense>

            {/* Botón COLOR fuera del canvas */}
            <button 
                onClick={handleColorButton}
                style={{
                    position: 'absolute',
                    right: '20px',
                    top: 'calc(50% - 80px)', // 80px arriba del centro
                    transform: 'translateY(-50%)',
                    backgroundColor: '#E0D2C3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    transition: 'all 0.3s ease',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: 0
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#D4C5B6';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#E0D2C3';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
            >
                <span style={{display: 'block', width: '100%', fontWeight: 'bold', fontSize: '16px', letterSpacing: '1px'}}>COLOR</span>
            </button>
            {/* Botón INFO fuera del canvas */}
            <button 
                onClick={toggleInstructions}
                style={{
                    position: 'absolute',
                    right: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: '#E0D2C3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    transition: 'all 0.3s ease',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: 0
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#D4C5B6';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#E0D2C3';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
            >
                <span style={{display: 'block', width: '100%', fontWeight: 'bold', fontSize: '16px', letterSpacing: '1px'}}>INFO</span>
            </button>

            {/* Instrucciones COLOR */}
            {showColorInstructions && (
                <div style={{
                    position: 'absolute',
                    right: '100px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0,0,0,0.9)',
                    color: 'white',
                    padding: '20px',
                    borderRadius: '12px',
                    fontSize: '14px',
                    maxWidth: '300px',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.5)',
                    border: '2px solid #E0D2C3',
                    zIndex: 1000,
                    fontFamily: 'inherit',
                    textAlign: 'left',
                }}>
                    <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#E0D2C3', fontWeight: 700 }}>Instrucciones de Color:</h3>
                    <div style={{marginBottom: '10px'}}>
                        <span style={{ color: '#7ecfff', fontWeight: 700 }}>Al pasar el puntero por encima</span>
                        <span style={{ color: '#fff', fontWeight: 400 }}> : Cambia el color del modelo a azul claro.</span>
                    </div>
                    <div style={{marginBottom: '16px'}}>
                        <span style={{ color: '#7ecfff', fontWeight: 700 }}>Al hacer clic</span>
                        <span style={{ color: '#fff', fontWeight: 400 }}> : Cambia el color del modelo a amarillo.</span>
                    </div>
                    <h4 style={{ margin: '0 0 8px 0', fontSize: '15px', color: '#E0D2C3', fontWeight: 700 }}>2 eventos de teclado 3D:</h4>
                    <div style={{marginBottom: '6px'}}>
                        <span style={{ color: '#fff', fontWeight: 400 }}>Tecla </span>
                        <span style={{ background:'#222', color:'#fff', padding:'2px 10px', borderRadius:'6px', fontWeight:700, marginRight:4, fontSize:'1em', display:'inline-block' }}>M</span>
                        <span style={{ color: '#fff', fontWeight: 400 }}>: Cambia el color del modelo a rojo.</span>
                    </div>
                    <div>
                        <span style={{ color: '#fff', fontWeight: 400 }}>Tecla </span>
                        <span style={{ background:'#222', color:'#fff', padding:'2px 10px', borderRadius:'6px', fontWeight:700, marginRight:4, fontSize:'1em', display:'inline-block' }}>X</span>
                        <span style={{ color: '#fff', fontWeight: 400 }}>: Cambia el color del modelo a blanco.</span>
                    </div>
                </div>
            )}
            {/* Instrucciones */}
            {showInstructions && (
                <div style={{
                    position: 'absolute',
                    right: '100px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0,0,0,0.9)',
                    color: 'white',
                    padding: '20px',
                    borderRadius: '12px',
                    fontSize: '14px',
                    maxWidth: '300px',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.5)',
                    border: '2px solid #E0D2C3',
                    zIndex: 1000
                }}>
                    <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#E0D2C3' }}>Instrucciones de Control:</h3>
                    <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '1.6' }}>
                        <li><strong>Mouse:</strong> Rotar la vista del modelo</li>
                        <li><strong>Click:</strong> Interactuar con el modelo</li>
                        <li><strong>Scroll:</strong> Zoom in/out (si está habilitado)</li>
                    </ul>
                    <div style={{ 
                        marginTop: '15px', 
                        padding: '8px', 
                        backgroundColor: 'rgba(224, 210, 195, 0.1)', 
                        borderRadius: '6px',
                        fontSize: '12px'
                    }}>
                        <strong>💡 Tip:</strong> Usa el mouse para explorar el modelo de tratamiento de la arteria coronaria desde diferentes ángulos.
                    </div>
                </div>
            )}
        </div>
    );
};

export default ColonaryCase_TratamientoView; 