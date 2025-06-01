import { useAuthUser } from "../log-in/composables/useAuthUser";
import InfoUser from "../../components/InfoUser";
import { User } from "firebase/auth";
import { useQuizsUser } from "../interactive-quiz/composables/useActionsQuiz";

const ProfileUser = () => {
  const { userLooged, fecha_inicio_sesion, logOut } = useAuthUser();
  const { calificacion, quizs } = useQuizsUser(userLooged ?? {} as User);

  return (
    <div className="flex bg-gray-100 p-5 w-[95%]  mb-5 rounded-xl ">
      <div className="min-w-[400px]">
        <InfoUser
          fecha={fecha_inicio_sesion}
          logout={logOut}
          nQuizs={quizs.length}
          promedio={calificacion}
          user={userLooged ?? {} as User}
        />

      </div>
      <div className="w-full">
        <pre>{JSON.stringify(quizs, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ProfileUser;
