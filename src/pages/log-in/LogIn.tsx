import logo from "../../../public/img/logo_azul.png";
import logoGoogle from "../../../public/img/google-logo.png";
import { useAuthUser } from "./composables/useAuthUser";
import { useCallback } from "react";

const LogIn = () => {
    const { loginWithGoogle } = useAuthUser();

    const handleLogIn = useCallback(async() => {
        await loginWithGoogle();
    }, [loginWithGoogle]);

    return (
    <>
        <div className="flex justify-center w-full" >
            <div className="flex flex-col gap-3 items-center shadow w-[300px] min-w-[170px] py-7 px-4 rounded">
                <img src={logo} alt="anatolearn-logo"  width={180} />
                <span>¡Ingresa con tu cuenta de google!</span>
                <button onClick={handleLogIn} className="flex border border-gray-100 justify-center gap-2 w-full bg-gray-100 p-1 rounded-[5px] font-medium hover:cursor-pointer hover:border-[#3F72AF] " > 
                    <img src={logoGoogle} alt="logo-google" width={25} />
                    Iniciar sesión
                </button>
            </div>
        </div>
    </>
    )
}


export default LogIn;