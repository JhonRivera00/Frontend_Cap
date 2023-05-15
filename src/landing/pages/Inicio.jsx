import React, {useEffect, useState} from "react";
import IconPregunta from '../../assets/img/IconPregunta.png'
import Psicologa1 from '../../assets/img/psicologa1.jfif'
import Psicologa2 from '../../assets/img/psicologa2.jfif'
import Psicologo1 from '../../assets/img/psicologo1.webp'
import {Link} from 'react-router-dom'
import Slider from '../componentes/SliderInicioSesion'
import { datosInicio } from "../data/DataInicioSesion";



const Contenido = () => {
  
  
const [dataInicio, setDataInicio] = useState([]);
// const [dataNoticia, setDataNoticia] = useState([]);

  useEffect(()=>{
  const fetchData = async () =>{
  const datos = await datosInicio()
  const destacados = datos.filter(evento => evento.tipo === "noticia");
    setDataInicio(destacados.reverse())
  }
  fetchData();
},[])


  return (<>
    <Slider/>
    <div className="card-group d-flex justify-content-around">

      {dataInicio.map((data)=>(
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
                 Mas info en:
                 <Link href="https://www.sena.edu.co/es-co/Paginas/default.aspx">
                   Click aqui
                 </Link>
               </p>
             </div>
             <div className="card-footer bg-green">
               <small className="text-muted1">
                 Ultima actualización hace 3 minutos..
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
        <div className="w-100 d-flex flex-wrap my-5">
          <div className="text-center mx-auto mt-4">
            <div>
              <p className="fs-5 mb-2">
                Ana Maria Echeverry <br /> Enfermera
              </p>
              <img src={Psicologa1} className="img-profesionales" alt="" />
            </div>
            <Link href="/dashboard/charla.html" className="btn btn-green mt-3">
              Solicitar charla
            </Link>
          </div>
          <div className="text-center mx-auto mt-4">
            <div className="">
              <p className="fs-5 mb-2">
                Angie Lorena Quintana <br /> Psicóloga
              </p> 
              <img src={Psicologa2} className="img-profesionales" alt="" />
            </div>
            <Link href="/dashboard/charla.html" className="btn btn-green mt-3">
              Solicitar charla
            </Link>
          </div>
          <div className="text-center mx-auto mt-4">
            <div className="">
              <p className="fs-5 mb-2">
                Jose Danilo Ortega <br /> Psicólogo
              </p>
              <img src={Psicologo1}className="img-profesionales" alt="" />
            </div>
            <Link href="/dashboard/charla.html" className="btn btn-green mt-3">
              Solicitar charla
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contenido;
