import React from "react";
import Users1 from "../../assets/img/user1.png";
import circle from '../../assets/img/icons/x-circle.svg';
import { aceptarProfesional } from "../data/DataAdmin";

const ModalProfesional = ({dataProfesional}) => { 
  const btnAceptarProfesional = ()=>{
    const response = aceptarProfesional(dataProfesional.id);
  }
  return (
    <>
      {/* Modal solicitud profecional */}

      <div
        className="modal fade"
        id="profesional"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4
                className="modal-title text-center w-100 "
                id="staticBackdropLabel"
              >
                SOLICITUD PROFESIONAL
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className=" modal-body">
              <h5>Profesional</h5>
              <div className="row mt-4 ">
                <div className="col-2">
                  <img className="w-100 rounded-circle" src={Users1} />
                </div>
                <div className="col-4">
                  <div className=" d-flex">
                    <p className=" fw-bold">Nombre: </p>
                    <p className="ms-2">{dataProfesional.nombre}{" "}{dataProfesional.apellido}</p>
                  </div>
                  <div className=" d-flex">
                    <p className=" fw-bold">Nit: </p>
                    <p className="ms-2">{dataProfesional.tipoDoc}{" "}{dataProfesional.numDoc}</p>
                  </div>
                  <div className=" d-flex">
                    <p className=" fw-bold">Telefono: </p>
                    <p className="ms-2">{dataProfesional.telefono}</p>
                  </div>
                  <div className=" d-flex">
                    <p className=" fw-bold">Correo: </p>
                    <p className="ms-2">{dataProfesional.correo}</p>
                  </div>
                  <p></p>
                </div>
                <div className="col-6">
                  <div className=" d-flex">
                    <p className=" fw-bold">Profesion: </p>
                    <p className="ms-2">{dataProfesional.profesion}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal" onClick={btnAceptarProfesional}
              >
                Aceptar
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#modalAplazar"
              >
                Rechazar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal solicitud profecional */}


      {/* Modal Rechazar */}
      <div className="modal fade" id="modalAplazar" tabIndex="-1" aria-labelledby="exampleModalINLabel" aria-hidden="true">
        <div className="modal-dialog ">
          <div className="modal-content bg-color-blue text-white">
            
            <div className="modal-body">
              <form className="row g-2 needs-validation" action="/">
                <div>
                <h3 className="modal-title w-100 text-center " id="exampleModalINLabel">!Solicitud rechazada¡</h3>
                </div>

                <div className="w-100 d-flex justify-content-center ">
                <img src={circle} className="mx-auto w-25" alt="" />
                </div>

                {/* Botón CREAR EVENTO */}
                <div className="col-12 d-flex justify-content-center mb-2 pb-6 pt-2">
                  <button className="btn btn-green w-25" type="submit">Aceptar</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
      {/* FinModal MODAL Reachazar */}

    </>
  );
};

export default ModalProfesional;
