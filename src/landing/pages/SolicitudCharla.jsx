import React, { useEffect, useState } from 'react'
import ImagNav from '../../assets/img/imgnav.jpg'
import Psicologa1 from '../../assets/img/psicologa1.jfif'
import Psicologa2 from '../../assets/img/psicologa2.jfif'
import Psicologo1 from '../../assets/img/psicologo1.webp'
import Swal from 'sweetalert2'
import InicioSesion from '../modales/InicioSesion'
import axios from 'axios'
import { dataSolicitudCharla} from '../data/DataSolicitudCharla'
const Charla = () => {
  //Datos
  
  const [fecha, setFecha] = useState("");
  const [profesional, setProfesional] = useState("");
  const [motivo, setMotivo] = useState("");


  //Opciones Profesionales
  const [profesionales, setProfesionales] = useState([]);
  useEffect(() => {
    const dataProfesionales = async () => {
      const URL = "https://backend-cap-273v.vercel.app/verUsuariosProfesionales"
      const data = await axios.get(URL)
      setProfesionales(data.data)
    }
    dataProfesionales();
  }, [])

  const validarToken = (e) => {
    const token = localStorage.getItem("Token-Aprendiz")
    e.preventDefault();

    if (!token) {
      Swal.fire({
        title: "Debes Iniciar Sesion Primero",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: `<i  className="btn btn-green"    data-bs-toggle="modal"    data-bs-target="#exampleModal1" >  Iniciar sesion</i>`,

      })
    }
    else if(token){
      dataSolicitudCharla( fecha, profesional, motivo)
    }
  }
  return (
    <>

      {/* <!-- Titulo --> */}
      <div className="position-relative d-inline-block w-100">
        <img src={ImagNav} className="w-100 img-titulo-fondo" alt="" />
        <h1 className="text-titulo position-absolute text-center  w-100">SOLICITA TU CHARLA
          <div className=" d-flex justify-content-around pt-2">
            <div className="bg-green p-1 w-25" ></div>
            <div className="bg-green p-1 w-25" ></div>
          </div>
        </h1>
      </div>
      {/* <!-- Fin Titulo --> */}
      {/* <!-- Profesionales --> */}
      <section className="py-5">
        <div className="d-flex justify-content-center">
          <div className=" w-75 fs-5">
            <p className="text-center fw-semibold fs-3"> QUE BUSCAMOS</p>
            <hr className="w-75 m-auto pb-4" />
            <p className="text-center ">Promover espacios en los que se afiancen las habilidades sociales, emocionales y
              académicas en pro de favorecer la adaptación estudiantil y la mejora de la calidad de vida de los
              estudiantes y colaboradores del Centro de Teleinformatica y Produccion Industrial (CTPI).</p>
          </div>
        </div>
        <div className="w-100 d-flex flex-wrap my-5">
          <div className="text-center mx-auto mt-4">
            <div className="">
              <p className="fs-5 mb-2">Ana Maria Echeverry <br /> Enfermera</p>
              <img src={Psicologa1} className="img-profesionales" alt="" />
            </div>
          </div>
          <div className="text-center mx-auto mt-4">
            <div className="">
              <p className="fs-5 mb-2">Angie Lorena Quintana <br /> Psicóloga</p>
              <img src={Psicologa2} className="img-profesionales" alt="" />
            </div>
          </div>
          <div className="text-center mx-auto mt-4">
            <div className="">
              <p className="fs-5 mb-2">Jose Danilo Ortega <br /> Psicólogo</p>
              <img src={Psicologo1} className="img-profesionales" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Profesionales --> */}
      <main className="text-center d-flex flex-column justify-content-center align-items-center" id="form-charla">
        <p className="fs-3 fw-semibold w-50 ">SOLICITA TU CHARLA DE FORMA GRUPAL O PERSONAL CON UNO DE NUESTROS PROFESIONALES</p>
        <div className="bg-green pt-1 w-25 "></div>
        <form className="needs-validation w-50 " onSubmit={validarToken} >
          <div className="row g-2 my-2">

            <div className="col-sm-12 mt-4 mt-md-5">
              <div className="input-group has-validation">
                <input type="datetime-local" className="form-control border-green" id="fecha"
                  onChange={(e) => setFecha(e.target.value)} />

              </div>
            </div>

            <div className="col-md-12 mt-4 mt-md-5">

              <select className="form-select col-md-12 border-green" defaultValue="1" id="validationCustom04" onChange={(e) => { setProfesional(e.target.value) }}>
                <option disable="true" >Profesionales disponibles...</option>
                {profesionales.map((data) => (
                  <option value={data._id} key={data._id}>{data.nombres}{" "}{data.apellidos}{"  -    "}{data.profesion}</option>
                ))
                }
              </select>

            </div>

            <div className="col-sm-12 mt-4 mt-md-5">
              <textarea type="text" className="form-control border-green" id="address2" rows="5"
                placeholder="Motivo de su cita..." onChange={(e) => setMotivo(e.target.value)}></textarea>
            </div>


            <div className="col-md-12 my-4 mt-md-5">
              <button
                type="submit"
                className="btn btn-green btn-lg">Solicitar</button>
            </div>
          </div>
        </form>
        <InicioSesion/>
      </main>
    </>
  )
}

export default Charla