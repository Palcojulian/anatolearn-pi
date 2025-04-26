const Treatment = () => {
  return (
    <div className="flex flex-col text-start gap-2">
      <p className="text-justify">
        El tratamiento depende del tipo y la gravedad de la arritmia. En casos
        de bradicardia o bloqueos en la conducción eléctrica del corazón, se
        puede requerir la implantación de un marcapasos
      </p>
      <h6>¿Qué es un marcapasos?</h6>
      <p className="text-justify"> 
        Es un dispositivo electrónico que se implanta bajo la piel y envía
        impulsos eléctricos al corazón para mantener un ritmo adecuado
      </p>
      <h6>Tipos de marcapasos</h6>

      <ul className="list-disc ps-6 space-y-2">
        <li>
          <p className="text-start">
            <b>Unicamerales: </b>
            estimulan una sola cámara del corazón (aurícula o ventrículo).
          </p>
        </li>
        <li>
          <p className="text-start">
            <b>Bicamerales: </b>
            estimulan ambas cámaras (aurícula y ventrículo) para una coordinación más natural.
          </p>
        </li>
        <li>
          <p className="text-start">
            <b>De resincronización cardíaca: </b>
            estimulan ambos ventrículos simultáneamente, usados en casos de insuficiencia cardíaca para mejorar la eficiencia del bombeo cardíaco.
          </p>
        </li>
      </ul>

    </div>
  );
};

export default Treatment;
