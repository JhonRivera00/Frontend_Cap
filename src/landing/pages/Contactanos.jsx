import React, { useState } from "react";
import Imgnav from "../../assets/img/imgnav.jpg";
import Phone from "../../assets/img/icons/phone.svg";
import House from "../../assets/img/icons/house.svg";
import Chat from "../../assets/img/icons/chat-dots.svg";
import { formPqrs } from "../data/DataInicioSesion";
import Swal from 'sweetalert2'
import jwt_decoded from 'jwt-decode'


const Contactanos = () => {
  const [tipoPqrs, setTipoPqrs] = useState("")
  const [motivo, setMotivo] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    const tokenApre = localStorage.getItem("Token-Aprendiz")
    if (!tokenApre) {

      Swal.fire({
        title: "Debes Iniciar Sesion Primero",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: `<i  className="btn btn-green"    data-bs-toggle="modal"    data-bs-target="#exampleModal1" >  Iniciar sesion</i>`,

      })
    }
    else if (tokenApre) {
      const { id } = jwt_decoded(tokenApre);
      formPqrs(id, tipoPqrs, motivo)
    }
  }

  return (
    <>
      {/* <!-- Titulo --> */}
      <div className="position-relative d-inline-block w-100">
        <img src={Imgnav} className="w-100 img-titulo-fondo" alt="" />
        <h1 className="text-titulo position-absolute text-center  w-100">
          CONTACTANOS
          <div className=" d-flex justify-content-around pt-2">
            <div className="bg-green p-1 w-25"></div>
            <div className="bg-green p-1 w-25"></div>
          </div>
        </h1>
      </div>
      {/* <!-- Fin Titulo --> */}


      {/* <!--CONTACT STAR--> */}
      <main className="my-5">
        <div className="d-flex flex-wrap justify-content-around">
          <div className="bg-green py-4 mt-5 rounded-4 text-center shadow-black align-items-stretch contenedor-icons-contact">
            <img src={Phone} alt="" />
            <p className="text-white fs-5 mt-5">+57 321 0908 000</p>
            <p className="text-white fs-5">+57 321 0908 000</p>
          </div>
          <div className="bg-green py-4 mt-5 rounded-4 text-center shadow-black align-items-stretch contenedor-icons-contact">
            <img src={House} alt="" />
            <p className="text-white fs-5 mt-5"> a 3-111, Cra. 3 #3-1</p>
            <p className="text-white fs-5">Popayán, Cauca</p>
          </div>
          <div className="bg-green py-4 mt-5 rounded-4 text-center  shadow-black align-items-stretch contenedor-icons-contact">
            <img src={Chat} alt="" />
            <p className="text-white fs-5 mt-5">soysena@sena.edu.co</p>
            <p className="text-white fs-5">baprendiz@sena.edu.co</p>
          </div>
        </div>

        <div className="text-center d-flex flex-column justify-content-center align-items-center mt-5">
          <h1 className="mb-4"> Ponte en contacto</h1>
          <h6>
            Si tiene alguna pregunta, solo complete el formulario de contacto y{" "}
            <br /> le responderemos a la brevedad.
          </h6>

          <form className="needs-validation p-4" onSubmit={handleSubmit} >
            <div className="row g-2 my-2">


              <div className="col-sm-12 mt-md-5">
                <div className="col-md-12">
                  <select className="form-select col-md-12 border-green" id="validationCustom04" onChange={(e) => setTipoPqrs(e.target.value)} defaultValue="">
                    <option disabled value="" key={0}>Motivo mensaje...</option>
                    <option value="Felicitacion" key={1}>Felicitacion</option>
                    <option value="Peticion" key={2}>Peticion</option>
                    <option value="Queja" key={3}>Queja</option>
                    <option value="Reclamo" key={4}>Reclamo</option>
                    <option value="Sugerencia" key={5}>Sugerencia</option>
                  </select>
                </div>
              </div>

              <div className="col-sm-12  mt-md-5">
                <textarea
                  type="text"
                  defaultValue={motivo}
                  className="form-control border-green"
                  id="address2"
                  rows="5"
                  placeholder="Mensaje..." onChange={(e) => setMotivo(e.target.value)}

                ></textarea>
              </div>


              <div className="col-md-12 my-4 mt-md-5">
                <button
                  type="submit"
                  className="btn btn-green btn-lg"
                >
                  Enviar mensaje
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>

      {/* <!--CONTACT END--> */}





    </>
  );
};

export default Contactanos;