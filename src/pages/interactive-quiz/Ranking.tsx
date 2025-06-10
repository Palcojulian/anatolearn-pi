import { useState } from "react";
import { useAuthUser } from "../log-in/composables/useAuthUser";
import { useRanking } from "./composables/useActionsQuiz";
import RankingCanva from "./components/canvas/RankingCanva";


const Ranking = () => {
  const { userLooged: user } = useAuthUser();
  const { ranking, loading } = useRanking();
  
  return (
    <RankingCanva 
      data={ranking} 
      loading={loading} 
    />
  );
};

export default Ranking;
