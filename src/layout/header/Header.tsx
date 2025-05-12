import avatar from "../../../public/img/avatar.png";
import { NavLink, useLocation, useNavigate } from "react-router";
import logoHorizontal from "../../../public/img/logo_horizontal_blanco.png"


const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const paths = location.pathname.split("/").filter(Boolean);
  const styleNavLink = "text-semi-white text-base font-medium hover:bg-[#F9F7F7] hover:text-[#3F72AF] rounded-md px-2 py-1"
  const navSelected = "bg-[#F9F7F7] text-[#3F72AF]";

  return (
    <header className="bg-primary flex items-center justify-between px-8 py-2"  >
      <img  src={logoHorizontal}  width={120}  onClick={() => navigate('/')} className="hover:cursor-pointer"  />
      <nav className="flex items-center gap-2 ">
        <NavLink className={`${styleNavLink} ${paths[0] == undefined ? navSelected : ''}`}  to="/" end >
          Inicio
        </NavLink>
        <NavLink className={`${styleNavLink} ${paths[0] == 'enfermedades-corazon' ? navSelected : '' }`}  to="/enfermedades-corazon"  end>
          Enfermedades
        </NavLink>
        <NavLink className={`${styleNavLink} ${paths[0] == 'quiz' ? navSelected : '' }`}   to="/quiz" end>
          Quiz interactivo
        </NavLink>
        <NavLink  className={`${styleNavLink} ${paths[0] == 'about-us' ? navSelected : '' }`} to="/about-us" end>
          Sobre nosotros
        </NavLink>
      </nav>

      <button className={`${styleNavLink} border hover:cursor-pointer`} onClick={() =>  navigate('/iniciar-sesion')} >
        Iniciar sesión
      </button>
      {/* <img
        src={avatar}
        alt="avatar"
        height={35}
        width={35}
        className="rounded-full object-contain"
      /> */}
    </header>
  );
};

export default Header;
