import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import RankingStaging from "../staging/RankingStaging";
import WelcomeQuiz from "../questions/WelcomeQuiz";
import FirstQuestion from "../questions/FirstQuestion";
import SecondQuestion from "../questions/SecondQuestion";
import ThirdQuestion from "../questions/ThirdQuestion";
import FourthQuestion from "../questions/FourthQuestion";
import FifthQuestion from "../questions/FifthQuestion";
import SixthQuestion from "../questions/SixthQuestion";
import SeventhQuestion from "../questions/SeventhQuestion";
import EighthQuestion from "../questions/EighthQuestion";

import { useProgressQuiz } from "../../composables/useActionsQuiz";

const QuizCanva = () => {

  const { nQuestion } = useProgressQuiz();

  const renderModels = () => {
    if(nQuestion == 1)  {
      return <FirstQuestion />
    }else if(nQuestion == 2) {
      return <SecondQuestion />
    } else if(nQuestion == 3) {
      return <ThirdQuestion />
    }else if(nQuestion == 4) {
      return <FourthQuestion />
    }else if(nQuestion == 5)  {
      return <FifthQuestion />
    }else if(nQuestion == 6) {
      return <SixthQuestion />
    }else if(nQuestion == 7) {
      return <SeventhQuestion />
    }else if(nQuestion == 8) {
      return <EighthQuestion />
    }else {
      return <WelcomeQuiz />
    }
  }

  return (
    <Suspense fallback={<h6>Cargando...</h6>}>
      <Canvas camera={{ position: [0, 2, 7], fov: 100,  }}>
        <RankingStaging />
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          maxAzimuthAngle={Math.PI / 10}
          minAzimuthAngle={Math.PI / -10}
        />

        {renderModels()}
      </Canvas>
    </Suspense>
  );
};

export default QuizCanva;
