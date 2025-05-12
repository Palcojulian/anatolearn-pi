import useStoreAuth from "../stores/useStoreAuth"
import { auth } from '../../../../firebase.config';
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup, type User, UserCredential } from 'firebase/auth';

export function useAuthUser() {
    const { setUserLogged, userLooged } = useStoreAuth();
    
    const loginWithGoogle = async():Promise<void> => {
        const provider = new GoogleAuthProvider();
        try {
            const { user } = await signInWithPopup(auth, provider);
            setUserLogged(user);
        } catch (error) {  
            console.log(error);
        }
    }

    return {
        loginWithGoogle,
        userLooged,
    }
}