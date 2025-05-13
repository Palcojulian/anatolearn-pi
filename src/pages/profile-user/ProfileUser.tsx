import { useNavigate } from "react-router";
import { useAuthUser } from "../log-in/composables/useAuthUser";

const ProfileUser = () => {
  const { userLooged, fecha_inicio_sesion } = useAuthUser();

  return (
    <div className="flex bg-gray-100 p-5 w-[95%] h-full mb-5 rounded-xl">
      <div className="min-w-[400px] flex flex-col  gap-5 border border-gray-400 rounded-xl px-8 py-6 shadow-lg">
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
        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-around">
            <div className="flex flex-col">
              <span>QUIZ's REALIZADOS</span>
              <h6>45</h6>
            </div>

            <div className="flex flex-col">
              <span>PROMEDIO</span>
              <h6>4.8</h6>
            </div>
          </div>
          <button className="btn-primary text-sm" >
            Cerrar sesión
          </button>
        </div>
      </div>
      <div className="w-full"></div>
    </div>
  );
};

export default ProfileUser;
