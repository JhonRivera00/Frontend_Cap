import React, { useState, useEffect } from 'react'
import Imgnev from "../../assets/img/imgnav.jpg";
import Calentdar2 from '../../assets/img/icons/calendar2-week.svg'
import Check from '../../assets/img/icons/check-circle.svg'
import { format, subDays } from 'date-fns';
import { es } from 'date-fns/locale';
import { datosCronograma } from '../data/DataInicioSesion';
import { horaLocal } from '../../assets/js/FormatoHora';
const Cronograma = () => {

  const [dataCronograma, setDataCronograma] = useState([]);


  console.log(dataCronograma)

  useEffect(() => {
    const fetchData = async () => {
      const datos = await datosCronograma()

      setDataCronograma(datos.reverse())
    }
    fetchData();
  }, [])

  return (
    <>
      {/* <!-- Titulo --> */}
      <div className="position-relative d-inline-block w-100">
        <img src={Imgnev} className="w-100 img-titulo-fondo" alt="" />
        <h1 className="text-titulo position-absolute text-center  w-100">
          CRONOGRAMA
          <div className=" d-flex justify-content-around pt-2">
            <div className="bg-green p-1 w-25"></div>
            <div className="bg-green p-1 w-25"></div>
          </div>
        </h1>
      </div>
      {/* <!-- Fin Titulo --> */}

      {/* <!-- Inicio Contenido --> */}
      <main className="px-5 py-5">
        <p className="fs-3 fw-semibold ms-0 ms-lg-4 my-0 my-lg-4 ">
          <img src={Calentdar2} className="me-4" alt="" />
          LISTADO DE ACTIVIDADES
        </p>
        <hr /> 
        <div className="container-fluid mt-6">
          <div className="row d-flex justify-content-around">
            {dataCronograma.map((data, i) => (
              <div className="col-12 col-lg-4 col-md-6 my-4 d-flex align-items-stretch contenedor-actividades" key={i}>
                <div className="border-green mx-2 px-4 py-3 contenedor-actividades">
                  <p className="fs-5 fw-bold">
                    {" "}
                    <img src={Check} className="me-3" alt="" />
                    {data.titulo}
                  </p>
                  <p className="fs-6  m-0">
                    <b>Descripcion:</b>{data.descripcion}
                  </p>
                  <p className="fs-6  m-0">
                    <b>Lugar:</b> {data.lugar}
                  </p>
                  <p className="fs-6  m-0">
                    <b>Hora:</b> {horaLocal(data.fecha_inicio)}
                  </p>
                  <p className="fs-6 fw-semibold text-muted m-0 mt-3 w-100">
                    {" "}
                    {(format(subDays((new Date(data.fecha_inicio)), 0), 'eeee d \'de\' MMMM', { locale: es }))}

                  </p>
                </div>
              </div>))}
          </div>
        </div>
      </main>

      {/* <!-- Fin Contenido --> */}
    </>
  );
};

export default Cronograma;
