import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { tabsArritmia } from "../helpers/tabs";
import Tabs from "../../../components/Tabs";
import IconArrowLeft from "../../../components/IconArrowLeft";

const Arrhythmia = () => {
  const navigate = useNavigate();
  const [tabSelected, setIdTab] = useState(0);

  const getIdTab = (id: number) => {
    setIdTab(id);
  };

  const renderModelo = () => {
    if (tabSelected == 1) {
      return <div>Modelo 3d que es :3 </div>;
    } else if (tabSelected == 2) {
      return <div>Modelo 3d sintomas :3 </div>;
    } else if (tabSelected == 3) {
      return <div>Modelo 3d tratamiento :3 </div>;
    } else if (tabSelected == 4) {
      return <div>Modelo 3d Prevención :3 </div>;
    } else {
      return <h6>...</h6>;
    }
  };

  return (
    <div className="flex w-[90%] ">
      <div className="gap-4 flex flex-col w-full">
        <h2 className="text-start" >Arritmia</h2>
        <Tabs tabs={tabsArritmia} tabSelected={tabSelected} action={getIdTab} />
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

export default Arrhythmia;
