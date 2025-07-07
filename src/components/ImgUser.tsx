import { type User } from "firebase/auth";
import { useNavigate } from "react-router";

const UserInfo = (props: User) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-end gap-2 hover:cursor-pointer" onClick={() => navigate('mi-perfil')} >
      <span className="text-white text-sm">¡Hola, {props.displayName?.split(" ")[0]}</span>
      <img
        src={`${props?.photoURL}`}
        alt=""
        width={33}
        className="rounded-full border border-white"
      />
    </div>
  );
};

export default UserInfo;
