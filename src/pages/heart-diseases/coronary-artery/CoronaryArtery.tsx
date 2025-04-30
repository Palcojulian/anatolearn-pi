import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Tabs from "../../../components/Tabs";
import IconArrowLeft from "../../../components/IconArrowLeft";
import { tabsCoronary } from "../helpers/coronaryTabs";
import ArteryHeartCaseView from "../components/canvas/ArteryHeartCaseView";

const CoronaryArtery = () => {
  const navigate = useNavigate();
  const [tabSelected, setIdTab] = useState(0);

  const getIdTab = (id: number) => {
    setIdTab(id);
  };

  const renderModelo = () => {
    if (tabSelected === 1) {
      return <ArteryHeartCaseView />;
    } else {
      return null;
    }
  };

  return (
    <div className="flex w-[90%]">
      <div className="gap-4 flex flex-col w-full">
        <h2 className="text-start">Obtrucción de Arteria Coronaria</h2>
        <Tabs tabs={tabsCoronary} tabSelected={tabSelected} action={getIdTab} />
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

export default CoronaryArtery;
