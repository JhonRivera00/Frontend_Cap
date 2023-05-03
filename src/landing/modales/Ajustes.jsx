
import React from "react";


const DatosAjustes = () => {
    return (
        <>
            {/* <!-- Modal datos ajustes --> */}
            <div
                className="modal fade"
                id="modalInicioDatos"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog ">
                    <div className="modal-content bg-color-blue  text-white ">
                        <form
                            className="needs-validation"
                            action=""
                            autoComplete="off"
                        >
                            <div className="modal-header">
                                <h4 className="modal-title w-100 text-center ">Datos Generales</h4>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body text-white">
                                <div className="container">
                                    <div className="col-md-7 col-lg-8 mx-auto">
                                        <div className="row g-3">
                                            <div className="col-sm-6">
                                                <label htmlFor="firstName" className="form-label ">
                                                    Nombre
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control bg-white border-green"
                                                    id="firstName"
                                                    placeholder="Ingrese Nombre"
                                                    required
                                                />
                                            </div>

                                            <div className="col-sm-6">
                                                <label htmlFor="lastName" className="form-label">
                                                    Apellido
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control  bg-white border-green"
                                                    id="lastName"
                                                    placeholder="Ingrese Apellido"
                                                    required
                                                />
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="username" className="form-label">
                                                    correo electronico
                                                </label>
                                                <div className="input-group has-validation">
                                                    <span className="input-group-text border-green">@</span>
                                                    <input
                                                        type="text"
                                                        className="form-control  bg-white border-green"
                                                        id="username"
                                                        placeholder="Ingrese el correo Electronico"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="email" className="form-label">
                                                    Numero Telefono<span className="text-muted"></span>
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control  bg-white border-green"
                                                    id="email"
                                                    placeholder="Ingrese Numero Telefono"
                                                    required
                                                />
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="address" className="form-label">
                                                    Direccion:
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control  bg-white border-green"
                                                    id="address"
                                                    placeholder="Ingrese Dirreccion"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Cerrar
                                </button>

                                <button type="submit" className="btn btn-green border-green">
                                    Guardar cambios
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