import logo from "../../../public/img/logo_blanco.png";
import IconIg from "../../components/IconIg";
import IconLinkedin from "../../components/IconLinkedin";
import IconX from "../../components/IconX";
import IconYt from "../../components/IconYt";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-primary items-center py-3">
      <div className="flex justify-evenly w-full">
        <div className="flex flex-col items-center  min-w-[170px]">
          <img src={logo} alt="anatolearn-logo" width={130} />
          <div className="flex justify-between items-center w-full">
            <IconX />
            <IconLinkedin />
            <IconIg />
            <IconYt />
          </div>
        </div>
        <div className="flex flex-col text-white">
          <h6 className="mb-3">Use cases</h6>
          <span className="text-sm mb-1 font-light">UX design</span>
          <span className="text-sm mb-1 font-light">UI design</span>
          <span className="text-sm mb-1 font-light">Wireframing</span>
        </div>
        <div className="flex flex-col text-white">
          <h6 className="mb-3">Explore</h6>
          <span className="text-sm mb-1 font-light">Design</span>
          <span className="text-sm mb-1 font-light">Prototyping</span>
          <span className="text-sm mb-1 font-light">Development features</span>
          <span className="text-sm mb-1 font-light">Design systems</span>
        </div>
        <div className="flex flex-col text-white">
          <h6 className="mb-3">Resources</h6>
          <span className="text-sm mb-1 font-light">Blog</span>
          <span className="text-sm mb-1 font-light">Best practices</span>
          <span className="text-sm mb-1 font-light">Colors</span>
          <span className="text-sm mb-1 font-light">Color wheel</span>
          <span className="text-sm mb-1 font-light">Support</span>
        </div>
      </div>
      <span className="text-xs text-white">Copyright © 2025 Anatolearn</span>
    </footer>
  );
};

export default Footer;
