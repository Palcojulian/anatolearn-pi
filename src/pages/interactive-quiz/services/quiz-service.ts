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

export const setInfoQuiz = async (params: Params): Promise<void> => {
    const refDb = push(ref(database, `users/${params.user.uid}/intentos`));
    await set(refDb, {
        created_at: Date.now(),
        calificacion: params.calificacion,
        tiempo: params.tiempo,
        respuestas: params.respuestas,
    });

    const quizsUser = await getQuizsUser(params.user);

    const promedioTiempo = quizsUser.map(quiz => quiz.tiempo).reduce((total, val) => total + val, 0) / quizsUser.length;
    const promedioCalificacion = quizsUser.map(cal => cal.calificacion).reduce((total, val) => total + val, 0) / quizsUser.length;
    
}




type Quiz = {
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