import { Vector3 } from "three"
import Box3d from "./Box3d"
import BoxFirst from "./BoxFirst"
import BoxSecond from "./BoxSecond"
import BoxThird from "./BoxThird"
import Bronce from "./Bronce"
import Oro from "./Oro"
import Plata from "./Plata"
import Texto3D from "../../../../components/Texto3D"
const ModelsRanking = () => {
  return (
    <>
     <Box3d
          color="#3F72AF"
          position={new Vector3(0, -10, 0)}
          metalnesVal={0.7}
          roughness={0.1}
        />

        <BoxFirst
          color="#3F72AF"
          position={new Vector3(0, 1, 0)}
          metalnesVal={0.7}
          roughness={0.1}
        />
        <Oro position={[0, 1.9, 0]} scale={1.7} />

        <BoxSecond
          color="#3F72AF"
          position={new Vector3(-2, 0.9, 0)}
          metalnesVal={0.7}
          roughness={0.1}
        />

        <Plata position={[-2, 1.8, 0]} scale={0.8} rotation={[0, 1.7, 0]} />

        <BoxThird
          color="#3F72AF"
          position={new Vector3(2, 0.8, 0)}
          metalnesVal={0.7}
          roughness={0.1}
        />

        <Bronce position={[2, 1.6, 0]} scale={1.5} />

        <Texto3D
          text="¡Ranking"
          color="#3F72AF"
          position={new Vector3(6, 1, 1)}
          bevelEnabled
          bevelSize={0.1}
          bevelThickness={0.02}
          height={0.2}
          letterSpacing={0.1}
          size={1}
          scale={0.4}
        />
        <Texto3D
          text="de"
          color="#3F72AF"
          position={new Vector3(6.1, 0.4, 1)}
          bevelEnabled
          bevelSize={0.1}
          bevelThickness={0.02}
          height={0.2}
          letterSpacing={0.1}
          size={1}
          scale={0.4}
        />

        <Texto3D
          text="resultados!"
          color="#3F72AF"
          position={new Vector3(6.1, -0.3, 1)}
          bevelEnabled
          bevelSize={0.1}
          bevelThickness={0.02}
          height={0.2}
          letterSpacing={0.1}
          size={1}
          scale={0.4}
        />
    </>
  )
}

export default ModelsRanking
