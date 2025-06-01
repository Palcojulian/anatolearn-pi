import { database } from '../../../../firebase.config';
import { ref, push, set, get, update } from 'firebase/database';
import { type User } from 'firebase/auth';

export interface Ranking {
    last_date: number;
    name_user: string;
    calificacion: number;
    tiempo: number;
}

interface Params {
    user: User;
    calificacion: number;
    tiempo: number;
}

export const updateRanking = async(params: Params):Promise<void> => {
    const refDb = ref(database, `ranking/${params.user.uid}`);
    const snapshot = await get(refDb);

    if(snapshot.exists()){
        await update(refDb, {
            last_date: Date.now(),
            name_user: params.user.displayName,
            calificacion: params.calificacion,
            tiempo: params.tiempo,
        })
        console.log("Actualizo ranking usuario");
        
    } else {    
        await set(refDb, {
            last_date: Date.now(),
            name_user: params.user.displayName,
            calificacion: params.calificacion,
            tiempo: params.tiempo,
        })
        console.log("Agrego ranking usuario");
    }
}

