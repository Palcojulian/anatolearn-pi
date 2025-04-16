import { useNavigate } from "react-router";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  path: string;
}

const Card = (props: Props) => {
    const navigate = useNavigate();
    return (
    <div className="flex flex-col gap-4 border border-gray-200 shadow-sm rounded-[6px] w-[440px] p-4">
      <div className="flex flex-col items-start">
        <h5>{props.title}</h5>
        <span className="text-sm font-semibold">{props.subtitle}</span>
      </div>
      <div className="flex flex-col gap-3 items-start ">
        <p className="text-gray-600 text-justify">{props.description}</p>
        <button onClick={() => navigate(props.path)} className="btn-primary">
            Ver más
        </button>
      </div>
    </div>
  );
};

export default Card;
