import { create } from 'zustand';
interface State {
    colorLight: string;
    nStars: number;
    dirRotation: number;
    setLeftDir: () => void,
    setRightDir: () => void,
    setColor: (color: string) => void;
    setStars: () => void;
}

const useStoreTratamiento =create <State>((set) => ({
    dirRotation: (0.004),
    colorLight: "white",
    nStars: 10,
    setLeftDir: () => set(() => ({dirRotation: -(0.004)})),
    setRightDir: () => set(() => ({dirRotation: (0.004)})),
    setColor: (color: string) => set(() => ({colorLight: color})),
    setStars: () => set((state) => ({ nStars: state.nStars < 250 ? state.nStars + 5 : 10 })),
}))

export default useStoreTratamiento;