import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import RankingStaging from '../staging/RankingStaging';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Floor from '../../../../components/Floor';
import { Vector3 } from 'three';
import Button3d from '../html-3d/Button3d';


const RankingCanva = () => {
    const position = new Vector3(0, -3, 0);

    return (
        <Suspense fallback={<h6>Cargando...</h6>} >
            <Canvas className='hover:cursor-move'>
                <PerspectiveCamera makeDefault position={[0, 10, 0]} fov={60} />
                
                <OrbitControls
                    enableZoom={false}
                    enableRotate={true}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                    maxAzimuthAngle={Math.PI / 6}
                    minAzimuthAngle={Math.PI / -15}
                />
                <RankingStaging />
                <Button3d />
                <Floor
                    position={position}
                    color="gray"
                    roughness={0.6}
                    metalnesVal={0.5}
                />
            </Canvas>
        </Suspense>
    )
}

export default RankingCanva
