const Symptoms = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-start">
        A continuación, se describen algunos de los síntomas más comunes
        asociados a las arritmias, que pueden ayudar a identificar la necesidad
        de una evaluación médica.
      </p>

      <ul className="list-disc ps-6 space-y-2">
        <li>
          <p className="text-start">
            <b>Mareos o desmayos: </b>
            La alteración en el ritmo del corazón puede reducir el flujo de
            sangre al cerebro, provocando sensaciones de inestabilidad, vértigo
            o incluso pérdida temporal del conocimiento.
          </p>
        </li>
        <li>
          <p className="text-start">
            <b>Palpitaciones o sensación de latidos irregulares: </b>
            Se perciben como un aleteo en el pecho, latidos acelerados, fuertes
            o desordenados. Es una señal de que el ritmo cardíaco puede estar
            alterado.
          </p>
        </li>
        <li>
          <p className="text-start">
            <b>Fatiga: </b>
            La falta de un ritmo cardíaco eficiente puede hacer que el cuerpo no
            reciba suficiente oxígeno, generando una sensación constante de
            cansancio o debilidad, aun sin realizar esfuerzos importantes.
          </p>
        </li>
        <li>
          <p className="text-start">
            <b>Dificultad para respirar: </b>
            Cuando el corazón no bombea de manera adecuada, los pulmones pueden
            no recibir suficiente oxígeno, lo que causa una sensación de falta
            de aire o dificultad para respirar, especialmente durante
            actividades físicas o en reposo.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Symptoms;
