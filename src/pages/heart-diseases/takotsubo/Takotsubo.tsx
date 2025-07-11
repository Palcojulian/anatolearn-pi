import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Tabs from "../../../components/Tabs";
import IconArrowLeft from "../../../components/IconArrowLeft";
import { tabsTakotsubo } from "../helpers/takotsuboTabs";
import TakotsuboTreatmentCanvas from "../components/canvas/TakotsuboTreatmentCanvas";
import TakotsuboPreventionCanvas from "../components/canvas/TakotsuboPreventionCanvas";
import TakotsuboWhatIsCanvas from "../components/canvas/TakotsuboWhatIsCanvas";
import TakotsuboSymtomsCanvas from "../components/canvas/TakotsuboSymptomsCanvas";

const Takotsubo = () => {
  const navigate = useNavigate();
  const [tabSelected, setIdTab] = useState(1);

  const getIdTab = (id: number) => {
    setIdTab(id);
  };

  const renderModelo = () => {
    if (tabSelected == 1) {
      return (
        <div style={{ width: "100%", height: "500px" }}>
          <TakotsuboWhatIsCanvas />
        </div>
      );
    } else if (tabSelected == 2) {
      return (
        <div style={{ width: "100%", height: "500px" }}>
          <TakotsuboSymtomsCanvas />
        </div>
      );
    } else if (tabSelected == 3) {
      return (
        <div style={{ width: "100%", height: "500px" }}>
          <TakotsuboTreatmentCanvas />
        </div>
      );
    } else if (tabSelected == 4) {
      return (
        <div style={{ width: "100%", height: "500px" }}>
          <TakotsuboPreventionCanvas />
        </div>
      );
    } else {
      return <h6>Selecciona una sección</h6>;
    }
  };

  return (
    <div className="flex w-[90%] ">
      <div className="gap-4 flex flex-col w-full">
        <h2 className="text-start">Miocardiopatía de takotsubo</h2>
        <Tabs
          tabs={tabsTakotsubo}
          tabSelected={tabSelected}
          action={getIdTab}
        />
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
      <div className="flex flex-col w-full">{renderModelo()}</div>
    </div>
  );
};

export default Takotsubo;
