
import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { verAdmin } from '../../administrador/data/DataAdmin'

const DatosAjustes = () => {
    const [id, setId] = useState("");
    const [adminDatos, setAdminDatos] = useState({
      nombres: "",
      apellidos: "",
      correo: "",
      genero: "",
      numTelefono: ""
    });
    
    useEffect(() => {

        const token = localStorage.getItem('Token-Administrador');
        if (!token) { 

            return
        } else {

            const { id } = jwt_decode(token);
            setId(id);

            const fetAdmin = async () => {
                const { data } = await verAdmin(id);
                setAdminDatos(data);
            }
            fetAdmin()
        }
    }, []);
    
    const handleTarget = ({ target }) => {
      setAdminDatos({ ...adminDatos, [target.name]: target.value });
    };

    
    return (
        <>

            {/* <!-- Modal datos ajustes --> */}
            <div
                className="modal fade"
                id="modalInicioDatos"
                data-bs-backdrop="static"
            >
                <div className="modal-dialog ">
                    <div className="modal-content bg-color-blue  text-white ">
                        <form
                            className="needs-validation"
                            action=""
                            autoComplete="off"
                        >
                            <div className="modal-header">
                                <h4 className="modal-title w-100 text-center ">Perfil</h4>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body text-white">
                                <div className="container">
                                    <div className="col-md-7 col-lg-10   mx-auto">
                                        <div className="row g-3">
                                            <div className="col-sm-6">
                                                <label htmlFor="firstName" className="form-label ">
                                                    Nombre
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control bg-white border-green"
                                                    value={adminDatos.nombres}
                                                    id="firstName"
                                                    placeholder=""
                                                    required
                                                    onChange={handleTarget}
                                                />
                                            </div>

                                            <div className="col-sm-6">
                                                <label htmlFor="lastName" className="form-label">
                                                    Apellido
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control  bg-white border-green"
                                                    value={adminDatos.apellidos}
                                                    id="lastName"
                                                    placeholder=""
                                                    required
                                                    onChange={handleTarget}
                                                />
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="email" className="form-label">Correo</label>
                                                <input type="email" className="form-control"
                                                    id="email"
                                                    name="correo"
                                                    value={adminDatos.correo}
                                                    placeholder=""
                                                    onChange={handleTarget}
                                                />
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="validationGenero" className="form-label">Genero</label>
                                                <select className="form-select"
                                                    name="genero"
                                                    value={adminDatos.genero}
                                                    onChange={handleTarget}
                                                    id="validationGenero" aria-label="Default select example" required>
                                                    <option disable="true" >Genero</option>
                                                    <option defaultValue="Masculino" >Masculino</option>
                                                    <option defaultValue="Femenino" >Femenino</option>
                                                </select>
                                            </div>


                                            <div className="col-12">
                                                <label htmlFor="email" className="form-label">
                                                    Numero Telefono<span className="text-muted"></span>
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control  bg-white border-green"
                                                    value={adminDatos.numTelefono}
                                                    id="email"
                                                    placeholder="   "
                                                    required
                                                    onChange={handleTarget}
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer w-100  d-flex justify-content-center">
                                <button type="submit" className="btn btn-green border-green">
                                    Actualizar cambios
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Fin Modal Datos Ajustes --> */}

        </>
    )

}

export default DatosAjustes;