import useStoreAuth from "../stores/useStoreAuth"
import { auth } from '../../../../firebase.config';
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup, type User, UserCredential } from 'firebase/auth';
import { getData, saveData } from '../../../utils/local-store-service';

export function useAuthUser() {
    const { setUserLogged, setFechaInicioSesion,userLooged, fecha_inicio_sesion } = useStoreAuth();
    
    const getInfoUserLocalStore = ():void => {
        const user  = getData('info-user');
        const fechaInicioSesion  = getData('fecha-inicio-sesion');
        setUserLogged(user ? JSON.parse(user) : null);
        setFechaInicioSesion(fechaInicioSesion ? JSON.parse(fechaInicioSesion) : null);
    }

    const loginWithGoogle = async():Promise<void> => {
        const provider = new GoogleAuthProvider();
        try {
            const { user } = await signInWithPopup(auth, provider);
            saveData('info-user', JSON.stringify(user));
            saveData('fecha-inicio-sesion', JSON.stringify(new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" })));        
            setUserLogged(user);
            setFechaInicioSesion(new Date().toLocaleString("en-CO", { timeZone: "America/Bogota" }));
        } catch (error) {  
            console.log(error);
        }
    }

    return {
        getInfoUserLocalStore,
        loginWithGoogle,
        userLooged,
        fecha_inicio_sesion,
    }
}