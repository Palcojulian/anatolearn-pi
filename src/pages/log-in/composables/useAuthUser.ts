import useStoreAuth from "../stores/useStoreAuth"
import { auth } from '../../../../firebase.config';
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup, type User, UserCredential } from 'firebase/auth';
import { getData, saveData } from '../../../utils/local-store-service';

export function useAuthUser() {
    const { setUserLogged, userLooged } = useStoreAuth();
    
    const getInfoUserLocalStore = ():void => {
        const user  = getData('info-user');
        setUserLogged(user ? JSON.parse(user) : null);
    }

    const loginWithGoogle = async():Promise<void> => {
        const provider = new GoogleAuthProvider();
        try {
            const { user } = await signInWithPopup(auth, provider);
            saveData('info-user', JSON.stringify(user));        
            setUserLogged(user);
        } catch (error) {  
            console.log(error);
        }
    }

    return {
        getInfoUserLocalStore,
        loginWithGoogle,
        userLooged,
    }
}