import { Suspense } from "react";
import ArteryHeartCaseView from "../../components/canvas/ArteryHeartCaseView";

const WhatIs = () => {
  return (
    <section className="px-6 py-10">
      <div className="grid md:grid-cols-2 items-center gap-8">
        <div>
          <p className="text-justify leading-relaxed">
            La cardiopatía isquémica es una enfermedad que ocurre cuando el corazón no recibe suficiente sangre rica en oxígeno debido al estrechamiento o bloqueo de las arterias coronarias. Este problema generalmente es causado por la acumulación de placas de grasa y colesterol (aterosclerosis) en las paredes de las arterias.
          </p>
        </div>
        
        <div className="h-[400px] w-full">
          <Suspense fallback={<p className="text-center">Cargando modelo...</p>}>
            <ArteryHeartCaseView />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;
