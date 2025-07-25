import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Tabs from "../../../components/Tabs";
import IconArrowLeft from "../../../components/IconArrowLeft";
import { tabsStenosis } from "../helpers/stenosisTabs";
// import StenosisHeart from "../components/models-3d/StenosisHeart";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Environment } from "@react-three/drei";
import StenosisH from "../components/canvas/Stenosis";
import Sintomas from "../components/canvas/Sintomas";
import Tratamiento from "../components/canvas/StenosisTratamiento";
import Prevencion from "../components/canvas/StenosisPrevencion";

const Stenosis = () => {
  const navigate = useNavigate();
  const [tabSelected, setIdTab] = useState(1);

  const getIdTab = (id: number) => {
    setIdTab(id);
  };

  const renderModelo = () => {
    if (tabSelected == 1) {
      return (
        <div>
          <StenosisH />
        </div>
      );
    } else if (tabSelected == 2) {
      return (
        <div style={{ width: "100%", height: "500px" }}>
          <Sintomas />
        </div>
      );
    } else if (tabSelected == 3) {
      return (
        <div>
          <Tratamiento />
        </div>
      );
    } else if (tabSelected == 4) {
      return (
        <div>
          <Prevencion />
        </div>
      );
    } else {
      return <h6>Seleccione una sección</h6>;
    }
  };

  return (
    <div className="grid grid-cols-2 w-[90%] ">
      <div className="col-span-1 gap-4 flex flex-col  justify-center">
        <h2 className="text-start">Stenosis</h2>
        <Tabs tabs={tabsStenosis} tabSelected={tabSelected} action={getIdTab} />
        <Outlet />
        <div className="flex mt-10 px-2">
          <button
            onClick={() => navigate("/enfermedades-corazon")}
            className="btn-primary flex"
          >
            <IconArrowLeft />
            Volver
          </button>
        </div>
      </div>
      <div className="col-span-1 flex flex-col justify-center  h-ful">
        {renderModelo()}
      </div>
    </div>
  );
};

export default Stenosis;
