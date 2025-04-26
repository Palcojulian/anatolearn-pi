import { useNavigate } from "react-router";

interface Tab {
  id: number;
  path: string;
  label: string;
}

interface Props {
  tabs: Tab[];
  tabSelected: number;
  action: (tab: number) => void;
}

const Tabs = (props: Props) => {
  const navigate = useNavigate();

  const actionTab = (path: string, idTab: number) => {
    props.action(idTab);
    navigate(path)
  };

  return (
    <div className="flex gap-0.5 w-full rounded-lg bg-semi-white p-1">
      {props.tabs.map((tab, index) => (
        <a
          key={index}
          onClick={() => actionTab(tab.path, tab.id)}
          className={`w-full hover:bg-[#E0D2C3] hover:rounded-[2px] hover:cursor-pointer font-medium py-1 ${
            props.tabSelected == tab.id ? "bg-[#E0D2C3] rounded-[2px]" : ""
          } `}
        >
          {tab.label}
        </a>
      ))}
    </div>
  );
};

export default Tabs;
