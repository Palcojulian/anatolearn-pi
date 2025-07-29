import { useRef, useState } from 'react'
import { Vector3 } from "three";
import Texto3D from "../../../../components/Texto3D";
import Btn3DHtml from "../html-3d/Btn3DHtml";
import { useProgressQuiz, useQuiz } from "../../composables/useActionsQuiz";
import { type User } from "firebase/auth";
import { Physics, RigidBody, type RapierRigidBody } from '@react-three/rapier';
import Floor from "../../../../components/Floor";



const FifthQuestion = (user: User) => {
  const { nextQuestion } = useProgressQuiz();
  const { setAnswer } = useQuiz(user);

  const rigidRef = useRef<RapierRigidBody>(null);
  const [isDragging, setIsDragging] = useState(false);
  const saveAnswerUser = (): void => {
    /* 
      Deben implementar logica de la respuesta del usuario 
      una vez lo hagan, se debe gurdar como:
      true: respuesta correcta
      false: respuesta incorrecta
            
      Las respuestas se van almacenando en un store, estas -
      se guardan en la DB de firebase una vez el usuario responda todas -
      las preguntas.
  
      NOTA: ¡LO UNICO QUE CAMBIA ES EL VALOR BOOLEANDO, TRUE O FALSE
      'pregunta_5' QUEDA IGUAL, ES LA KEY QUE SE CONFIGURO EN LA DB, -
      DE FIREBASE PARA ALMACENARLA!
    */
    setAnswer("pregunta_5", true);

    /* 
      Una vez se capturemos la respuesta del usuario, se redirige a la, -
      siguiente pregunta.
    */
    nextQuestion();
  };



  const handlePointerEnter = () => {
    setIsDragging(true);
  };

  const handlePointerClick = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (event: any) => {
   
    
    if (!isDragging || !rigidRef.current) return;

    const point = event.point; // posición 3D del mouse
    console.log({y: point.y, x: point.x, t:'model mouse'});
    
    rigidRef.current.setTranslation({y: point.y, x: point.x, z: 0}, true); // mueve el objeto al puntero
  };

  const handleCollision = (event: any) => {
    const other = event.other;
    if (other.rigidBodyObject?.name === "floor") {
      console.log("Colisión con el piso");
      // Aquí puedes ejecutar cualquier acción
    }
  };

  window.addEventListener('mousemove',(e) => {
    console.log({x:e.x, y:e.y, t: 'mause'});
    
    
  })


  return (
    <>
      
      <Physics debug>
        <Btn3DHtml
          position={new Vector3(8, -5, 0)}
          action={saveAnswerUser}
          label="Siguiente"
          scale={0.7}
        />
        <RigidBody 
          ref={rigidRef} 
          type="dynamic" 
          colliders="ball"
          onCollisionEnter={handleCollision}
        >
          <Texto3D
            text="5"
            color="#3F72AF"
            position={new Vector3(0, 0, 0)}
            bevelEnabled
            bevelSize={0.1}
            bevelThickness={0.02}
            height={0.2}
            letterSpacing={0.1}
            size={1}
            pointerEnter={handlePointerEnter}
            pointerClick={handlePointerClick}
            pointerMove={handlePointerMove}
          />
        </RigidBody>
        <RigidBody type="fixed" onCollisionEnter={() => console.log("Choque floor")} >
          <Floor
            color="#3F72AF"
            position={new Vector3(0, -3, 0)}
            metalnesVal={1}
            roughness={0.7}
            scale={1}
          />
        </RigidBody>


      </Physics>
    </>
  );
};

export default FifthQuestion;
