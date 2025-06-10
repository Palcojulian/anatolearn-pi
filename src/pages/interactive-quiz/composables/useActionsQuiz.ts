import { useNavigate } from 'react-router';
import { type User } from 'firebase/auth';
import { setInfoQuiz, getQuizsUser, type Quiz } from "../services/quiz-service";
import { updateRanking, type Ranking } from "../services/ranking-service";
import { ref, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';
import { database } from '../../../../firebase.config';
import useStoreQuestions from "../stores/useStoreQuestions";
import useStoreProgressQuiz from '../stores/useStoreProgressQuiz';

export const useQuiz = (user: User) => {
    const navigate = useNavigate();
    const { restoreState } = useStoreProgressQuiz();
    const {
        respuestas,
        tiempoInicio,
        tiempoFin,
        setRespuesta,
        limpiarStore,
        setTiempoInicio,
        setTiempoFin,
    } = useStoreQuestions();

    const saveAllAnswers = async (): Promise<void> => {

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
            restoreState();
            navigate('/ranking-quiz');
        }
    }

    return {
        startQuiz: () => {
            setTiempoInicio(new Date())
        },
        setAnswer: (key: string, val: boolean) => {
            setRespuesta(key, val)
        },
        setEndTime: () => {
            setTiempoFin(new Date());
        },
        saveAllAnswers,
        respuestas,
        tiempoInicio,
    }
}

export const useQuizsUser = (user: User) => {
    const [quizs, setQuizs] = useState<Quiz[]>([]);
    const [calificacion, setCalificacion] = useState<number>(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            setQuizs([]);
            setCalificacion(0);
            setLoading(false);
            return;
        };

        const refDb = ref(database, `users/${user.uid}/intentos`);
        setLoading(true);

        const unsubscribe = onValue(refDb, (snapshot) => {
            const data = snapshot.val();

            if (!data) {
                setQuizs([]);
                setCalificacion(0);
                setLoading(false);
                return;
            }

            const quizArray = Object.entries(data).map(([key, value]) => ({
                id: key,
                ...(value as Quiz),
            }));

            const calificacion = (quizArray.map(quiz => quiz.calificacion).reduce((total, val) => total + val, 0)) / quizArray.length;
            setQuizs(quizArray);
            setCalificacion(calificacion);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [user]);

    return {
        quizs,
        calificacion,
        loading,
    };
};

export const useRanking = () => {
    const [ranking, setRanking] = useState<Ranking[]>([]);
    const [loading, setLoading] = useState(true);

    const orderRanking = (ranking: Ranking[]): Ranking[] => {
        let orderData = [...ranking];

        for (let i = 0; i < orderData.length; i++) {
            for (let j = (i + 1); j < orderData.length; j++) {
                if (orderData[i].calificacion == orderData[j].calificacion) {
                    if (orderData[j].tiempo < orderData[i].tiempo) {
                        const aux = orderData[i];
                        orderData[i] = orderData[j];
                        orderData[j] = aux;
                    }
                } else if (orderData[j].calificacion > orderData[i].calificacion) {
                    const aux = orderData[i];
                    orderData[i] = orderData[j];
                    orderData[j] = aux;
                }
            }
        }

        return orderData;
    }


    useEffect(() => {
        const refDb = ref(database, 'ranking');

        const unsubscribe = onValue(refDb, (snapshot) => {
            const data = snapshot.val();
            if (!data) {
                setRanking([]);
                setLoading(false);
                return;
            }

            const allRanking = Object.entries(data).map(([_key, value]) => ({
                ...(value as Ranking)
            }))

            const positionsRanking = orderRanking(allRanking);
            setRanking(positionsRanking);
            setLoading(false);
        })

        return () => unsubscribe();

    }, []);

    return {
        loading,
        ranking,
    }
}

export const useProgressQuiz = () => {
    const { nQuestion, nextQuestion, restoreState } = useStoreProgressQuiz();
    return {
        nQuestion,
        nextQuestion,
        restoreState,
    }

}