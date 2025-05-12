import { useNavigate } from "react-router";

const BtnLogIn = () => {
  const navigate = useNavigate();
  const styleNavLink =
    "text-semi-white text-base font-medium hover:bg-[#F9F7F7] hover:text-[#3F72AF] rounded-md px-2 py-1";

  return (
    <button
      className={`${styleNavLink} border hover:cursor-pointer`}
      onClick={() => navigate("/iniciar-sesion")}
    >
      Iniciar sesión
    </button>
  );
};

export default BtnLogIn;
