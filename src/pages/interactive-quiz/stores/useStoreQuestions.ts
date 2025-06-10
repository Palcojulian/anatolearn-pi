import { create } from 'zustand';

type Respuesta = {
    [preguntaId: string]: boolean;
}

interface State {
    tiempoInicio: Date;
    tiempoFin: Date;
    respuestas: Respuesta;
    setRespuesta: (key: string, value: boolean) => void;
    setTiempoInicio: (date: Date) => void;
    setTiempoFin: (date: Date) => void;
    limpiarStore: () => void;
}

const useStoreQuestions = create<State>((set) => ({
    tiempoFin: new Date(),
    tiempoInicio: new Date(),
    respuestas: {},
    setRespuesta: (key, value) => {
        set((state) => ({
            respuestas: {
                ...state.respuestas,
                [key]: value,
            }
        }));
    },
    setTiempoFin: (date) => {
        set(() => ({ tiempoFin: date }))
    },
    setTiempoInicio: (date) => {
        set(() => ({ tiempoInicio: date }))
    },
    limpiarStore: () => {
        set(() => ({
            tiempoFin:  new Date(),
            tiempoInicio: new Date(),
            respuestas: {},
        }))
    }
}))

export default useStoreQuestions;