import { database } from '../../../../firebase.config';
import { ref, push, set, get } from 'firebase/database';
import { type User } from 'firebase/auth';

type Respuesta = {
    [preguntaId: string]: boolean;
}

interface Params {
    user: User;
    calificacion: number;
    tiempo: number;
    respuestas: Respuesta;
}

export const setInfoQuiz = async (params: Params): Promise<boolean> => {
    const refDb = push(ref(database, `users/${params.user.uid}/intentos`));

    try {
        await set(refDb, {
            created_at: Date.now(),
            calificacion: params.calificacion,
            tiempo: params.tiempo,
            respuestas: params.respuestas,
        });
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }    
}

export type Quiz = {
    created_at: number;
    respuestas: Respuesta,
    calificacion: number;
    tiempo: number;
}

export const getQuizsUser = async (user: User): Promise<Quiz[]> => {
    const refDb = ref(database, `users/${user.uid}/intentos`);
    const snapshot = await get(refDb);

    if (!snapshot.exists()) return [];

    const data = snapshot.val();
    
    return Object.entries(data).map(([key, value]) => ({
        id: key,
        ...(value as Quiz),
    }));

}