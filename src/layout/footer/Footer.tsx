import { useNavigate } from "react-router";
import logo from "../../../public/img/logo_blanco.png";
import IconIg from "../../components/IconIg";
import IconLinkedin from "../../components/IconLinkedin";
import IconX from "../../components/IconX";
import IconYt from "../../components/IconYt";

const Footer = () => {

  const navigate = useNavigate();

  return (
    <footer className="flex flex-col bg-primary items-center py-3">
      <div className="flex justify-evenly w-full hover:cursor-pointer" onClick={() => navigate('/')}>
        <div className="flex flex-col items-center  min-w-[170px]">
          <img src={logo} alt="anatolearn-logo" width={130} />
          <div className="flex justify-between items-center w-full">
            <IconX />
            <IconLinkedin />
            <IconIg />
            <IconYt />
          </div>
        </div>
      </div>
      <span className="text-xs text-white">Copyright © 2025 Anatolearn</span>
    </footer>
  );
};

export default Footer;
