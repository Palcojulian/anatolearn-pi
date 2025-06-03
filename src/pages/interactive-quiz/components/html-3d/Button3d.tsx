import React from 'react'
import { Html } from '@react-three/drei'

const Button3d = () => {
  return (
    <Html
        center
        position={[-7,3,3]}
        transform
        distanceFactor={5}
    >
        <button className='btn-primary'>
            Realizar quiz
        </button>
    </Html>
  )
}

export default Button3d;
