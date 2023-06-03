import React, { useState, useEffect } from "react";
import { registroAprendiz } from '../data/DataRegistro'
import Checkl from '../../assets/img/icons/checkl.svg'
import '../../assets/js/validarRegistros'
import axios from 'axios'
import Swal from "sweetalert2";

const Registrase = () => {
  const [nombres, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [tipo, setTipo] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [imgAprendiz, setImgAprendiz] = useState(null);
  const [correo, setCorreo] = useState("");
  const [numTelefono, setNumTelefono] = useState("");
  const [contrasenaUno, setContrasenaUno] = useState("");
  const [contrasenaDos, setContrasenaDos] = useState("");
  const [genero, setGenero] = useState("");
  const [programa, setPrograma] = useState("");
  const [options, setOptions] = useState([]);
  const URLP = "/programas";

  const validarCampo = (expresion, valor) => {
    if (expresion.test(valor)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarCampo(/^[a-zA-Z0-9\_\-]{4,16}$/, nombres)) {
      return Swal.fire({
        icon: "error",
        title: "Error en los nombres",
      });
    }

    if (!validarCampo(/^[a-zA-ZÀ-ÿ\s]{1,40}$/, apellidos)) {
      return Swal.fire({
        icon: "error",
        title: "Error en los apellidos",
      });
    }

    if (!validarCampo(/^.{8,20}$/, contrasenaUno)) {
      return Swal.fire({
        icon: "error",
        title: "Error en la contraseña",
      });
    }

    if (contrasenaUno !== contrasenaDos) {
      return Swal.fire({
        icon: "error",
        title: "Las contraseñas no coinciden",
      });
    }

    // Resto del código de envío del formulario
    // ...
  };

  useEffect(() => {
    const fetchData = async () => {
      const programas = await axios.get(URLP);
      setOptions(programas.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <!-- Modal Registro Aprendiz --> */}
      <div className="modal" id="registroAprendiz">
        <div className="contenedores-modal position-relative  ">
          <div id="modal-usuario-registro ">
            <div className="modal-dialog ">
              <div className="modal-content  bg-color-blue  text-white ">
                <form
                  className="needs-validation contenedor-registro rounded-3 mx-3"
                  id="formulario"
                  onSubmit={handleSubmit}
                >
                  <div className="row g-3  text-white  p-4 rounded-3 ">
                    <div className="w-100 d-flex justify-content-end ">
                      <button
                        type="button"
                        className="btn-close bg-light"
                        style={{ width: "20px", height: "20px" }}
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <h3 className="text-center pb-3">Regístrate</h3>

                    <div className="col-sm-6 formulario__grupo" id="grupo_nombres">
                      <label htmlFor="nombres" className="form-label">
                        Nombres
                      </label>
                      <div className="formulario__grupo-input">
                        <input
                          type="text"
                          className="form-control formulario__input"
                          id="nombres"
                          name="nombre"
                          value={nombres}
                          placeholder=""
                          onChange={(e) => setNombre(e.target.value)}
                        />
                        <i className="formulario_validacion-estado" src={Checkl}></i>
                      </div>
                      <p className="formulario__input-error">
                        El nombre solo puede contener letras y espacios.
                      </p>
                    </div>

                    <div className="col-sm-6">
                      <label htmlFor="lastName" className="form-label">
                        Apellidos
                      </label>
                      <input
                        type="text"
                        name="apellidos"
                        className="form-control"
                        id="lastName"
                        placeholder=""
                        onChange={(e) => setApellidos(e.target.value)}
                      />
                    </div>

                    {/* Resto de los campos del formulario */}

                    <div className="w-100 d-flex justify-content-center">
                      <button className="w-50 btn btn-green" type="submit" id="botton-registrar">
                        Registrar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registrase;
