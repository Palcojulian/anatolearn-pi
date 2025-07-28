import { useNavigate, useLocation, Link } from "react-router";
import logo from "../../../public/img/logo_blanco.png";


const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  const showLogo = () => {
    if (paths[0] == 'iniciar-sesion' || paths[0] == 'quiz' || paths[0] == 'ranking-quiz') {
      return (<hr />)
    } else {
      return (
        <div className="flex justify-evenly w-full hover:cursor-pointer" onClick={() => navigate('/')}>
          <div className="flex flex-col items-center  min-w-[170px]">
            <img src={logo} alt="anatolearn-logo" width={130} />
          </div>
        </div>
      )
    }
  }

  return (
    <footer className="flex flex-col bg-primary items-center py-3">
      {showLogo()}
      <div className="flex items-center gap-4 mt-2">
        <span className="text-xs text-white">Copyright © 2025 Anatolearn</span>
        <span className="text-xs text-white">|</span>
        <Link 
          to="/sitemap" 
          className="text-xs text-white hover:text-gray-200 hover:underline transition-colors duration-200"
        >
          Mapa del Sitio
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
