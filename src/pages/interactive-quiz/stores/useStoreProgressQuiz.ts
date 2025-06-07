import { create } from 'zustand';

interface State {
    nQuestion: number;
    nextQuestion: () => void;
    restoreState: () => void;
}

const useStoreProgressQuiz = create<State>((set) => ({
    nQuestion: 0,
    nextQuestion: () => {
        set((state) => ({
            nQuestion: state.nQuestion + 1,
        }));
    },
    restoreState: () => {
        set(() => ({ nQuestion: 0 }))
    }
}))

export default useStoreProgressQuiz;