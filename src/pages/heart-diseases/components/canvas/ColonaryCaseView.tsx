import { Suspense, useState } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ColonaryCase from "../models-3d/ColonaryCase";

const ColonaryCaseView = () => {
    const [showInstructions, setShowInstructions] = useState(false);

    const toggleInstructions = () => {
        setShowInstructions(!showInstructions);
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '70vh' }}>
            <Suspense fallback={<h5>Cargando...</h5>}>
                <Canvas camera={{ position: [0, 0, 6], fov: 45 }} shadows>
                    {/* Luz direccional con sombra dura */}
                    <directionalLight 
                        position={[5, 8, 5]} 
                        intensity={2.5} 
                        castShadow
                        shadow-mapSize-width={2048}
                        shadow-mapSize-height={2048}
                        shadow-bias={-0.0005}
                        shadow-camera-near={1}
                        shadow-camera-far={30}
                        shadow-camera-left={-10}
                        shadow-camera-right={10}
                        shadow-camera-top={10}
                        shadow-camera-bottom={-10}
                    />
                    {/* Luz puntual con sombra dura */}
                    <pointLight 
                        position={[-6, 6, 6]} 
                        intensity={1.5} 
                        castShadow
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                        shadow-bias={-0.001}
                    />
                    {/* Luz tipo spot con sombra dura */}
                    <spotLight
                        position={[0, 10, 0]}
                        angle={0.35}
                        penumbra={0.1}
                        intensity={2}
                        castShadow
                        shadow-mapSize-width={2048}
                        shadow-mapSize-height={2048}
                        shadow-bias={-0.0005}
                        shadow-camera-near={1}
                        shadow-camera-far={30}
                    />
                    <ambientLight intensity={0.3} />
                    <OrbitControls enableZoom={false} enableRotate={true} />
                    <Environment preset="city" background={false} />
                    <ColonaryCase scale={1.5} position={[0, -1.5, 0]} />
                </Canvas>
            </Suspense>

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
                    zIndex: 1000
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
                INFO
            </button>

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
                        <strong>💡 Tip:</strong> Usa el mouse para explorar el modelo de la arteria coronaria desde diferentes ángulos.
                    </div>
                </div>
            )}
        </div>
    );
};

export default ColonaryCaseView;