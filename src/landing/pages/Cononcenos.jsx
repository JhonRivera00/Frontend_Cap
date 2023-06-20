import React from "react";
import Zyro from '../../assets/img/zyro-image.png'
import Bullseye from '../../assets/img/icons/bullseye.svg'
import Circle1 from '../../assets/img/icons/1-circle.svg'
import Circle2 from '../../assets/img/icons/2-circle.svg'
import Circle3 from '../../assets/img/icons/3-circle.svg'
import Opjetivo from '../../assets/img/bienestar1.png'
import Video from '../../assets/img/videos/Bienestar al Aprendiz SENA.mp4'
import Centro from '../../assets/img/imgnav.jpg'


const Conocenos = () => {
  return (
    <>
      {/* <!-- Inicio Section --> */}
      <section className="">
        <img src={Centro} className="titulo-objetivo" alt="" />
        <div className="px-5 py-5">
          <p className="fs-3 fw-semibold"><img src={Bullseye} alt="" className="pe-3" /> OBJETIVOS</p>
          <hr className="w-25" />
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="">
                <p className="fs-5 fw-semibold"> <img src={Circle1} className="me-3" alt="" />Objetivo</p>
                <p>Implementar estrategias de acompañamiento para el desarrollo integral del aprendiz en su proceso formativo.</p>
                <p className="fs-5 fw-semibold"><img src={Circle2} className="me-3" alt="" />Objetivo </p>
                <p>Incentivar al aprendiz en su proceso de formación profesional integral mediante la implementación de un programa de estímulos.</p>
                <p className="fs-5 fw-semibold"> <img src={Circle3} className="me-3" alt="" />Objetivo </p>
                <p>Entregar con oportunidad y calidad los servicios de bienestar al aprendiz documentando procedimientos que soporten una operación ágil y flexible.</p>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <img src={Opjetivo} className="img-obj" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Fin section --> */}

      {/* <!-- Video --> */}

      <section className="video d-flexr align-items-center justify-content-center">
        <p className="fs-1 fw-semibold text-center titulos">
          VIDEO PRESENTACION
        </p>
        <video src={Video} className="w-75 border border-1 border-secondary rounded" style={{ height: "auto" }} controls></video>
      </section>



      {/* <!-- Fin Video --> */}

      <div className="text-center py-5 d-flex justify-content-center">
        <div className="w-75">

          <h1>¿Quiénes pueden acceder al Plan de Bienestar al Aprendiz?</h1>
          <p className="mt-4">Aprendices matriculados en formación Laboral y Formación tecnológica, de todos los niveles y jornadas, en sus diferentes modalidades: presencial, virtual o a distancia.
            Los Centros de Formación Profesional Integral incorporarán estrategias para la inclusión de aprendices pertenecientes a las comunidades minoritarias y vulnerables</p>
        </div>
      </div>

    </>
  );
};

export default Conocenos;

