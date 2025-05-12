import { create } from 'zustand';
import { type User } from 'firebase/auth';

interface State {
    userLooged: User | null;
    setUserLogged: (user: User|null) => void,
}

const useStoreAuth =create <State>((set) => {
    return {
        userLooged: null,
        setUserLogged: (user) => { set({userLooged: user}) },
    }
})

export default useStoreAuth;