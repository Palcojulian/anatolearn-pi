import { create } from 'zustand';
import { type User } from 'firebase/auth';

interface State {
    userLooged: User | null;
    fecha_inicio_sesion: string;
    setUserLogged: (user: User|null) => void,
    setFechaInicioSesion: (date: string) => void,
}

const useStoreAuth =create <State>((set) => {
    return {
        userLooged: null,
        fecha_inicio_sesion: '',
        setUserLogged: (user) => { set({userLooged: user}) },
        setFechaInicioSesion: (date) => { set({fecha_inicio_sesion: date})}
    }
})

export default useStoreAuth;