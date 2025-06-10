import { useState } from "react";
import { useAuthUser } from "../log-in/composables/useAuthUser";
import { useRanking } from "./composables/useActionsQuiz";
import RankingCanva from "./components/canvas/RankingCanva";


const Ranking = () => {
  const { userLooged: user } = useAuthUser();
  const { ranking } = useRanking();



  return (
    <RankingCanva data={ranking} />
  );
};

export default Ranking;
