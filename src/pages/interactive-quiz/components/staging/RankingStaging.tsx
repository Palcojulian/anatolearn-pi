import { Environment } from '@react-three/drei'
import React from 'react'


const RankingStaging = () => {
  return (
    <Environment 
        files={"staging/hdris/ranking-quiz/hdr-sky.hdr"}
        background
    />
  )
}

export default RankingStaging
