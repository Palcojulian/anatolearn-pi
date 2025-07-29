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
import Resumen from "../questions/Resumen";


import { useProgressQuiz } from "../../composables/useActionsQuiz";
import ProgressQuiz from "../html-3d/ProgressQuiz";
import { useAuthUser } from "../../../log-in/composables/useAuthUser";

const QuizCanva = () => {

  const { nQuestion } = useProgressQuiz();
  const { userLooged } = useAuthUser();

  const renderModels = () => {
    if(nQuestion == 1)  {
      return <FirstQuestion {...userLooged!} />
    }else if(nQuestion == 2) {
      return <SecondQuestion {...userLooged!} />
    } else if(nQuestion == 3) {
      return <ThirdQuestion {...userLooged!} />
    }else if(nQuestion == 4) {
      return <FourthQuestion {...userLooged!} />
    }else if(nQuestion == 5)  {
      return <Resumen {...userLooged!} /> 
    }else {
      return <WelcomeQuiz {...userLooged!} />
    }
  }

  const renderProgress = () => {
    if(nQuestion != 0) return <ProgressQuiz />
    return;
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
        {renderProgress()}
        {renderModels()}
      </Canvas>
    </Suspense>
  );
};

export default QuizCanva;
