import avatar from "../../../public/img/avatar.png";
import { NavLink } from "react-router";
import logoHorizontal from "../../../public/img/logo_horizontal_blanco.png"

const Header = () => {

  
  return (
    <header className="bg-primary flex items-center justify-between px-8 py-2">
      <img src={logoHorizontal}  width={120}  />
      <nav className="flex items-center gap-2 ">
        <NavLink className="text-semi-white text-base font-medium hover:bg-[#F9F7F7] hover:text-[#3F72AF] rounded-md px-2 py-1"  to="/" end >
          Inicio
        </NavLink>
        <NavLink className="text-semi-white text-base font-medium hover:bg-[#F9F7F7] hover:text-[#3F72AF] rounded-md px-2 py-1"  to="/enfermedades-corazon"  end>
          Enfermedades
        </NavLink>
        <NavLink className="text-semi-white text-base font-medium hover:bg-[#F9F7F7] hover:text-[#3F72AF] rounded-md px-2 py-1"   to="/quiz" end>
          Quiz interactivo
        </NavLink>
        <NavLink  className="text-semi-white text-base font-medium hover:bg-[#F9F7F7] hover:text-[#3F72AF] rounded-md px-2 py-1" to="/about-us" end>
          Sobre nosotros
        </NavLink>
      </nav>

      <img
        src={avatar}
        alt="avatar"
        height={35}
        width={35}
        className="rounded-full object-contain"
      />
    </header>
  );
};

export default Header;
