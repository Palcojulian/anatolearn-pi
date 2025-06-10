import { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import logoHorizontal from "../../../public/img/logo_horizontal_blanco.png"
import { useAuthUser } from "../../pages/log-in/composables/useAuthUser";
import BtnLogIn from "../../components/BtnLogIn";
import ImgUser from "../../components/ImgUser";

const Header = () => {
  const { userLooged, getInfoUserLocalStore } = useAuthUser();
  const location = useLocation();
  const navigate = useNavigate();
  const paths = location.pathname.split("/").filter(Boolean);
  const styleNavLink = "text-semi-white text-base font-medium hover:bg-[#F9F7F7] hover:text-[#3F72AF] rounded-md px-2 py-1"
  const navSelected = "bg-[#F9F7F7] text-[#3F72AF]";

  const viewInfoIUser = () => {
    return userLooged ? <ImgUser {...userLooged} /> : <BtnLogIn />;
  }

  useEffect(() => {
    getInfoUserLocalStore();
  },[]);

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
        <NavLink className={`${styleNavLink} ${paths[0] == 'ranking-quiz' ? navSelected : '' }`}   to="/ranking-quiz" end>
          Quiz interactivo
        </NavLink>
        <NavLink  className={`${styleNavLink} ${paths[0] == 'about-us' ? navSelected : '' }`} to="/about-us" end>
          Sobre nosotros
        </NavLink>
      </nav>
      {viewInfoIUser()}
    </header>
  );
};

export default Header;
