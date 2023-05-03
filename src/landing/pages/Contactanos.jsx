import React from "react";
import Imgnav from "../../assets/img/imgnav.jpg";
import Phone from "../../assets/img/icons/phone.svg";
import House from "../../assets/img/icons/house.svg";
import Chat from "../../assets/img/icons/chat-dots.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";


const Contactanos = () => {
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
          <div className="bg-green p-5 mt-5 rounded-4 text-center w-25 shadow-black align-items-stretch contenedor-icons-contact">
            <img src={Phone} alt="" />
            <p className="text-white fs-5 mt-5">+57 321 0908 000</p>
            <p className="text-white fs-5">+57 321 0908 000</p>
          </div>
          <div className="bg-green p-5 mt-5 rounded-4 text-center w-25 shadow-black align-items-stretch contenedor-icons-contact">
            <img src={House} alt="" />
            <p className="text-white fs-5 mt-5"> a 3-111, Cra. 3 #3-1</p>
            <p className="text-white fs-5">Popayán, Cauca</p>
          </div>
          <div className="bg-green p-5 mt-5 rounded-4 text-center w-25 shadow-black align-items-stretch contenedor-icons-contact">
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

          <form className="needs-validation w-50" >
            <div className="row g-2 my-2">
              <div className="col-sm-12 mt-4 mt-md-5">
                <input
                  type="text"
                  className="form-control border-green"
                  id="firstName"
                  placeholder="Nombre completo*"
                  required
                />
              </div>

              <div className="col-sm-6 mt-4 mt-md-5">
                <div className="input-group has-validation">
                  <input
                    type="number"
                    className="form-control border-green"
                    id="fecha"
                    placeholder="Numero telefono*"
                    required
                  />
                </div>
              </div>

              <div className="col-sm-6 mt-4 mt-md-5">
                <input
                  type="email"
                  className="form-control border-green"
                  id="motivo"
                  placeholder="Email*"
                  required
                />
              </div>

              <div className="col-sm-12 mt-4 mt-md-5">
                <textarea
                  type="text"
                  className="form-control border-green"
                  id="address2"
                  rows="5"
                  placeholder="Mensaje*"
                  required
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