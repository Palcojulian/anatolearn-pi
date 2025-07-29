import { Html } from "@react-three/drei";
import { useProgressQuiz } from "../../composables/useActionsQuiz";

const StepsQuix = () => {
    const { nQuestion } = useProgressQuiz();
    const calculateProgress = ():number => {
        const nPregunta = nQuestion - 1;
        if(nPregunta == 0) return 0;
        return (nPregunta / 4) * 100; 

    }
    return (
        <Html
            occlude={true}
            center
            position={[0, 8, -1]}
            distanceFactor={15}
            transform
            scale={1.4}
        >
            <div className="w-[200px] " >
                <div className="flex justify-between text-[9px]">
                    <span className="font-medium text-gray-700 dark:text-white">Progreso...</span>
                    <span className="font-medium text-gray-700 dark:text-white">{calculateProgress().toFixed(1)}%</span>
                </div>
                <div className="bg-gray-100 rounded-full h-2 dark:bg-gray-700">
                    <div className="bg-primary h-2 rounded-full" style={{
                        width: `${calculateProgress()}%`
                    }} ></div>
                </div>
            </div>
        </Html>
    )
}

export default StepsQuix
