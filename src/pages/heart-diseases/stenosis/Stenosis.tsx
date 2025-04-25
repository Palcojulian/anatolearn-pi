import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Tabs from "../../../components/Tabs";
import IconArrowLeft from "../../../components/IconArrowLeft";
import { tabsStenosis } from "../helpers/stenosisTabs";
// import StenosisHeart from "../components/models-3d/StenosisHeart";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Environment } from "@react-three/drei";
import StenosisH from "../components/canvas/Stenosis";


const Stenosis = () => {
  const navigate = useNavigate();
  const [tabSelected, setIdTab] = useState(0);

  const getIdTab = (id: number) => {
    setIdTab(id);
  };

  const renderModelo = () => {
    if (tabSelected == 1) {
      return <div style={{ width: '100%', height: '500px' }}><StenosisH /></div>;    
    } else if (tabSelected == 2) {
      return <div>Modelo 3d </div>;
    } else if (tabSelected == 3) {
      return <div>Modelo 3d </div>;
    } else if (tabSelected == 4) {
      return <div>Modelo 3d </div>;
    } else {
      return <h6>...</h6>;
    }
  };

  return (
    <div className="flex w-[90%] ">
      <div className="gap-4 flex flex-col w-full">
        <h2 className="text-start" >Stenosis</h2>
        <Tabs tabs={tabsStenosis} tabSelected={tabSelected} action={getIdTab} />
        <Outlet />
        <div className="flex mt-10 px-2">
          <button onClick={() => navigate("/enfermedades-corazon")} className="btn-primary flex">
            <IconArrowLeft />
            Volver
          </button>
        </div>

      </div>
      <div className="flex flex-col w-full">{renderModelo()}</div>
    </div>
  );
};

export default Stenosis;
