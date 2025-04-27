import { create } from 'zustand';
interface State {
    isAlertText: boolean;
    isActiveAnimation: boolean;
    setStateAlertText: () => void;
    setStateAnimation: () => void;
}

const useStoreSintomas =create <State>((set) => ({
    isAlertText: false,
    isActiveAnimation: false,
    setStateAlertText: () => set(() => ({isAlertText: true})),
    setStateAnimation: () => set(() => ({isActiveAnimation: true})),
}))

export default useStoreSintomas;