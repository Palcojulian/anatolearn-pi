import { type Quiz } from "../pages/interactive-quiz/services/quiz-service";
import CircleCheck from "./CircleCheck";
import CircleX from "./CircleX";

const CardQuiz = (props: { quiz: Quiz; index: number }) => {
  return (
    <div className="flex flex-col bg-white p-4 rounded border border-gray-200 md:col-span-12 lg:col-span-6 xl:col-span-4 h-[380px]">
      <div>QUIZ N°: {props.index + 1}</div>
      <div>
        Realizado el:{" "}
        {new Date(props.quiz.created_at).toLocaleString().split(",")[0]}
      </div>
      <div>Puntaje: {props.quiz.calificacion.toFixed(1)}</div>
      <div>Tiempo: {props.quiz.tiempo.toFixed(1)} seg</div>
      <div className="flex flex-col items-center mt-2 gap-1">
        <div className="flex items-center gap-2 border border-gray-300 px-3 rounded py-1">
          <div
            className={`flex items-center justify-center rounded-full text-white h-[20px] w-[20px] ${
              props.quiz.respuestas["pregunta_1"]
                ? "bg-green-500"
                : "bg-red-600"
            }`}
          >
            {props.quiz.respuestas["pregunta_1"] ? (
              <CircleCheck />
            ) : (
              <CircleX />
            )}
          </div>
          <span>Pregunta 1</span>
        </div>
        <div className="flex items-center gap-2 border border-gray-300 px-3 rounded py-1">
          <div
            className={`flex items-center justify-center rounded-full text-white h-[20px] w-[20px] ${
              props.quiz.respuestas["pregunta_2"]
                ? "bg-green-500"
                : "bg-red-600"
            }`}
          >
            {props.quiz.respuestas["pregunta_2"] ? (
              <CircleCheck />
            ) : (
              <CircleX />
            )}
          </div>
          <span>Pregunta 2</span>
        </div>
        <div className="flex items-center gap-2 border border-gray-300 px-3 rounded py-1">
          <div
            className={`flex items-center justify-center rounded-full text-white h-[20px] w-[20px] ${
              props.quiz.respuestas["pregunta_3"]
                ? "bg-green-500"
                : "bg-red-600"
            }`}
          >
            {props.quiz.respuestas["pregunta_3"] ? (
              <CircleCheck />
            ) : (
              <CircleX />
            )}
          </div>
          <span>Pregunta 3</span>
        </div>
        <div className="flex items-center gap-2 border border-gray-300 px-3 rounded py-1">
          <div
            className={`flex items-center justify-center rounded-full text-white h-[20px] w-[20px] ${
              props.quiz.respuestas["pregunta_4"]
                ? "bg-green-500"
                : "bg-red-600"
            }`}
          >
            {props.quiz.respuestas["pregunta_4"] ? (
              <CircleCheck />
            ) : (
              <CircleX />
            )}
          </div>
          <span>Pregunta 4</span>
        </div>
        {/* <div className='flex items-center gap-2 border border-gray-300 px-3 rounded py-1' >
                <div className={`flex items-center justify-center rounded-full text-white h-[20px] w-[20px] ${props.quiz.respuestas['pregunta_5'] ? 'bg-green-500':'bg-red-600'}`}>
                    {props.quiz.respuestas['pregunta_5'] ? <CircleCheck /> : <CircleX/>}
                </div>
                <span>
                    Pregunta 5
                </span>
            </div>
            <div className='flex items-center gap-2 border border-gray-300 px-3 rounded py-1' >
                <div className={`flex items-center justify-center rounded-full text-white h-[20px] w-[20px] ${props.quiz.respuestas['pregunta_6'] ? 'bg-green-500':'bg-red-600'}`}>
                    {props.quiz.respuestas['pregunta_6'] ? <CircleCheck /> : <CircleX/>}
                </div>
                <span>
                    Pregunta 6
                </span>
            </div> */}
      </div>

      <div className="border border-[#3F72AF] mt-4"></div>
    </div>
  );
};

export default CardQuiz;
