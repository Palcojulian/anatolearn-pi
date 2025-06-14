import { create } from 'zustand';
interface State {
    scaleText3d: number;
    pathVideo: string;
    isPlayVideo : boolean;
    setStateVideo: () => void;
    changePathVideo: () => void;
    setScale: (n: number) => void;
}

const useStorePrevencion =create <State>((set) => ({
    scaleText3d: 0.15,
    pathVideo: 'alimentacion-saludable.mp4',
    isPlayVideo: false,
    setScale: (n: number) => set(() => ({scaleText3d: n})),
    changePathVideo: () => set((state) => (
        {pathVideo: state.pathVideo == "alimentacion-saludable.mp4" ? 'entrenamiento.mp4': 'alimentacion-saludable.mp4'  }
    )),
    setStateVideo: () => set((state) => ({isPlayVideo: !state.isPlayVideo})),
}))

export default useStorePrevencion;