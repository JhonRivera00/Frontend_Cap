import React, { useEffect, useState } from "react";
import IconPregunta from '../../assets/img/biene.jpg'
import { Link } from 'react-router-dom'
import Slider from '../componentes/SliderInicioSesion'
import { datosInicio, verPro, verProfesionales } from "../data/DataInicioSesion";
import FechaNotificacion from './../../assets/js/FechaNotificacion';
import { useNavigate } from 'react-router-dom'
import '../../assets/css/slider.css'


const Contenido = () => {

  const navigate = useNavigate()
  const [dataInicio, setDataInicio] = useState([]);
  const [dataPro, setDataPro] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const datos = await datosInicio()
      const destacados = datos.filter(evento => evento.tipo === "noticia");
      const dataPro = await verProfesionales();
      setDataInicio(destacados.reverse())
      setDataPro(dataPro)

    }
    fetchData();
  }, [])


  return (<>
    <Slider />
    <div className="card-group justify-content-around">
      {dataInicio.map((data) => (
        <div className="card mx-sm-5 my-sm-5 border rounded-0" key={data._id}>
          <img className="card-img-top"
            src={data.imagen.urlImg}
            alt="img" />
          <div className="card-body">
            <h5 className="card-title text-uppercase text-center mb-3">
              {data.titulo}
            </h5>
            <p className="card-text">
              {data.descripcion}
            </p>
            <p>
              {data.pdf.urlPdf ? <p>
                <a href={data.pdf.urlPdf} target="_blank" rel="noopener noreferrer">Ver documento</a>
              </p> : ""}
            </p>
          </div>
          <div className="card-footer bg-green">
            <small className="text-muted1">
              {data.updatedAt ? FechaNotificacion(data.updatedAt) : ""}
            </small>
          </div>
        </div>

      ))
      }
    </div>
    <div>
      <section className="container-fluid py-5 ">
        <div className=" d-flex flex-wrap justify-content-center">
          <img src={IconPregunta} className="" alt="" />
          <div className="w-50 d-flex flex-column my-auto fs-5 ms-5 nosotros">
            <p className="fw-bold fs-4 titulos">QUE HACE BIENESTAR AL APRENDIZ ?</p>
            Hacen acciones de acompañamiento a los aprendices en temas
            relacionados con: cultura, a las prácticas de prevención de la
            enfermedad y promoción de la salud, al desarrollo de habilidades
            blandas, al deporte, la actividad física, el aprovechamiento del
            tiempo libre y el arte.
            <Link
              to="/conocenos"
              className="btn btn-green btn-md w-50 mt-5 "
            >
              Conoce mas...
            </Link>

          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="d-flex justify-content-center">
          <div className=" w-75">
            <h4 className="fw-bold text-center fs-2 mb-3 pb-3 titulos">
              SOLICITA TU CHARLA
            </h4>
            <p className="text-center fs-5">
              Promover espacios en los que se afiancen las habilidades sociales,
              emocionales y académicas en pro de favorecer la adaptación
              universitaria y la mejora de la calidad de vida de los estudiantes
              y colaboradores del Politécnico Gran Colombiano.
            </p>
          </div>
        </div>

        <div className="w-100 card-group my-2">
          {dataPro.map((d) => (
            <div className="text-center mx-auto mt-2" key={d._id}>
              <div className="container">
                
                <div className="main-card">
                  <div className="cards">
                    <div className="card">
                      <div className="content" >
                        <div className="img">
                          <img src={d.perfil.urlImg} className="img-profesionales" alt="" />
                        </div>
                        <div className='details'>
                          <p className="fs-5 mb-2">
                            {d.nombres}{" "}{d.apellidos} <br /> {d.profesion}
                          </p>
                        </div>
                        <div>
                          <button onClick={() => navigate("/charla", { replace: true })} className="btn btn-green mt-3">
                            Solicitar charla
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          ))
          }

        </div>
      </section>
    </div>
  </>
  );
};

export default Contenido;
