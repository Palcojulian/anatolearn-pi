import { type User } from 'firebase/auth';
import { setInfoQuiz, getQuizsUser, type Quiz } from "../services/quiz-service";
import { updateRanking, type Ranking } from "../services/ranking-service";
import useStoreQuestions from "../stores/useStoreQuestions";
import { ref, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';
import { database } from '../../../../firebase.config';

export const useQuiz = (user: User) => {
    const {
        respuestas,
        tiempoInicio,
        tiempoFin,
        setRespuesta,
        limpiarStore,
        setTiempoFin,
        setTiempoInicio,
    } = useStoreQuestions();

    const setLastAnswer = async (key: string, val: boolean): Promise<void> => {
        setRespuesta(key, val);
        setTiempoFin(new Date());

        let tiempo = (tiempoFin.getTime() - tiempoInicio.getTime()) / 1000;
        const puntosPorPregunta = 5 / Object.values(respuestas).length;
        let calificacion = Object.values(respuestas).filter(val => val).length * puntosPorPregunta;
        const isSuccess = await setInfoQuiz({ calificacion, respuestas, tiempo, user })

        if (isSuccess) {
            /*
                Se obtienen los quizs del usuario, y se calcula el promedio del, -
                tiempo y calificación, de acuerdo a la cantidad de quizs -
                realizados
            */
            const quizsUser = await getQuizsUser(user);
            tiempo = (quizsUser.map(quiz => quiz.tiempo).reduce((total, val) => total + val, 0)) / quizsUser.length;
            calificacion = (quizsUser.map(quiz => quiz.calificacion).reduce((total, val) => total + val, 0)) / quizsUser.length;

            await updateRanking({ calificacion, tiempo, user });
            limpiarStore();
        }
    }

    return {
        startQuiz: () => {
            setTiempoInicio(new Date())
        },
        setAnswer: (key: string, val: boolean) => {
            setRespuesta(key, val)
        },
        setLastAnswer,
    }
}

export const useQuizsUser = (user: User) => {
    const [quizs, setQuizs] = useState<Quiz[]>([]);
    const [calificacion, setCalificacion] = useState<number>(0);
 
    useEffect(() => {
        if (!user) return;

        const refDb = ref(database, `users/${user.uid}/intentos`);

        const unsubscribe = onValue(refDb, (snapshot) => {
            const data = snapshot.val();

            if (!data) {
                setQuizs([]);
                return;
            }

            const quizArray = Object.entries(data).map(([key, value]) => ({
                id: key,
                ...(value as Quiz),
            }));

            const calificacion = (quizArray.map(quiz => quiz.calificacion).reduce((total, val) => total + val, 0)) / quizArray.length;
            setQuizs(quizArray);
            setCalificacion(calificacion);
           
        });

        return () => unsubscribe();
    }, [user]);

    return {
        quizs,
        calificacion,
    };
};

export const useRanking = () => {
    const [ranking, setRanking] = useState<Ranking[]>([]);
    
    useEffect(() => {
        const refDb = ref(database, 'ranking');

        const unsubscribe = onValue(refDb, (snapshot) => {
            const data = snapshot.val();
            if(!data) {
                setRanking([]);
                return;
            }

            const allRanking = Object.entries(data).map(([_key, value]) => ({
                ...(value as Ranking)
            }))

            setRanking(allRanking);
        })

        return () => unsubscribe();

    },[]);

    return {
        ranking,
    }
} 