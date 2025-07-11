import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { tabsArritmia } from "../helpers/tabs";
import Tabs from "../../../components/Tabs";
import IconArrowLeft from "../../../components/IconArrowLeft";
import Arrhytmia from "../components/canvas/Arrhytmia";
import SintomaArrhytmia from "../components/canvas/SintomaArrhytmia";
import CanvaArrhytmiaTreatment from "../components/canvas/CanvaArrhytmiaTreatment";
import CanvaArrhytmiaPrevencion from "../components/canvas/CanvaArrhytmiaPrevencion";


const Arrhythmia = () => {
  const navigate = useNavigate();
  const [tabSelected, setIdTab] = useState(1);

  const getIdTab = (id: number) => {
    setIdTab(id);
  };

  const renderModelo = () => {
    if (tabSelected == 1) {
      return <Arrhytmia />;
    } else if (tabSelected == 2) {
      return <SintomaArrhytmia />;
    } else if (tabSelected == 3) {
      return <CanvaArrhytmiaTreatment />;
    } else if (tabSelected == 4) {
      return <CanvaArrhytmiaPrevencion />;
    } else {
      return <h6>Seleccione una sección</h6>;
    }
  };

  return (
    <div className="grid grid-cols-2 w-[90%] pb-3">
      <div className=" col-span-1 gap-4 flex flex-col  justify-center">
        <h2 className="text-start">Arritmia</h2>
        <Tabs tabs={tabsArritmia} tabSelected={tabSelected} action={getIdTab} />
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
      <div className="col-span-1 flex flex-col justify-center items-center h-full">
        {renderModelo()}
      </div>
    </div>
  );
};

export default Arrhythmia;
