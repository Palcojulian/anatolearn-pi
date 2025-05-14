import { useNavigate } from "react-router";
import { useAuthUser } from "../log-in/composables/useAuthUser";
import Nquizs from "./canvas/Nquizs";


const ProfileUser = () => {
  const { userLooged, fecha_inicio_sesion, logOut } = useAuthUser();

  return (
    <div className="flex bg-gray-100 p-5 w-[95%]  mb-5 rounded-xl ">
      <div className="min-w-[400px] flex flex-col  gap-5 border border-gray-400 rounded-xl px-8 py-6 shadow-lg h-full">
        <div className="flex flex-col items-center gap-2">
          <img
            src={`${userLooged?.photoURL}`}
            alt=""
            className="rounded-full"
            width={100}
          />
          <h6>{userLooged ? userLooged.displayName?.toUpperCase() : ""}</h6>
          <hr className="border w-[50%] border-gray-400" />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm">
            <b>Email: </b>
            {userLooged?.email}
          </span>
          <span className="text-sm">
            <b>Teléfono: </b>
            {userLooged?.providerData[0].phoneNumber ?? "Sin telefono"}
          </span>
          <span className="text-sm">
            <b>Proveedor: </b>
            {userLooged?.providerData[0].providerId}
          </span>
          <span className="text-sm">
            <b>Email verificado: </b>
            {userLooged?.emailVerified ? "Si" : "No"}
          </span>
          <span className="text-sm">
            <b>Fecha inicio sesión: </b>
            {fecha_inicio_sesion}
          </span>
        </div>
        <div className="flex flex-col gap-5 ">
          <div className="flex justify-around">
            <div className="flex flex-col items-center justify-center">
              <span className="font-bold" >QUIZ's REALIZADOS</span>
              <Nquizs  text="56" />
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="font-bold" >PROMEDIO</span>
              <Nquizs  text="4.8" />
              
            </div>
          </div>
          <button onClick={logOut} className="btn-primary text-sm" >
            Cerrar sesión
          </button>
        </div>
      </div>
      <div className="w-full"></div>
    </div>
  );
};

export default ProfileUser;
