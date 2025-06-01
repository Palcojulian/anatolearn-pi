import { useState } from "react";
import { useAuthUser } from "../log-in/composables/useAuthUser";
import { useRanking } from "./composables/useActionsQuiz";

const Quiz = () => {
  const { userLooged: user } = useAuthUser();
  const { ranking } = useRanking();



  return (
    <div className="flex flex-col" >
      <pre>
        {JSON.stringify(ranking, null, 2)}
      </pre>


    </div>
  );
};

export default Quiz;
