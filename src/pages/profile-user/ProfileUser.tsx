import { useAuthUser } from "../log-in/composables/useAuthUser";
import InfoUser from "../../components/InfoUser";
import { User } from "firebase/auth";
import { useQuizsUser } from "../interactive-quiz/composables/useActionsQuiz";
import CardQuiz from "../../components/CardQuiz";

const ProfileUser = () => {
  const { userLooged, fecha_inicio_sesion, logOut } = useAuthUser();
  const { calificacion, quizs, loading } = useQuizsUser(userLooged ?? ({} as User));

  const renderQuizsUser = () => {
    if (quizs.length == 0){
      return (
        <div className="col-span-12 flex items-center justify-center bg-blue-50 text-primary font-bold text-2xl h-[400px] rounded-xl border border-dashed border-[#3F72AF] ">
          NO SE HA REALIZADO NINGÚN QUIZ
        </div>
      );
    }

    return quizs.map((item, i) => {
      return <CardQuiz index={i} quiz={item} key={i}  />;
    });
  };

  return (
    <div className="flex gap-3 bg-gray-100 p-5 w-[95%]  mb-5 rounded-xl">
      <div className="min-w-[400px]">
        <InfoUser
          fecha={fecha_inicio_sesion}
          logout={logOut}
          nQuizs={quizs.length}
          promedio={calificacion}
          user={userLooged ?? ({} as User)}
        />
      </div>
      <div className="w-full h-full grid grid-cols-12 gap-2 overflow-y-scroll p-2" style={{
        maxHeight: '700px'
      }}>
        {loading ? <span>Cargando información...</span> : renderQuizsUser()}
      </div>
    </div>
  );
};

export default ProfileUser;
