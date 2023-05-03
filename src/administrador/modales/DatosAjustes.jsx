
import React from 'react'

const DatosAjustes = () => {

    return (
        <>

            {/* <!-- Modal datos ajustes --> */}
            <div
                class="modal fade"
                id="modalInicioDatos"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog ">
                    <div class="modal-content bg-color-blue  text-white ">
                        <form
                            class="needs-validation"
                            action=""
                            autocomplete="off"
                        >
                            <div class="modal-header">
                                <h4 class="modal-title w-100 text-center ">Datos Generales</h4>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body text-white">
                                <div class="container">
                                    <div class="col-md-7 col-lg-8 mx-auto">
                                        <div class="row g-3">
                                            <div class="col-sm-6">
                                                <label for="firstName" class="form-label ">
                                                    Nombre
                                                </label>
                                                <input
                                                    type="text"
                                                    class="form-control bg-white border-green"
                                                    id="firstName"
                                                    placeholder="Ingrese Nombre"
                                                    required
                                                />
                                            </div>

                                            <div class="col-sm-6">
                                                <label for="lastName" class="form-label">
                                                    Apellido
                                                </label>
                                                <input
                                                    type="text"
                                                    class="form-control  bg-white border-green"
                                                    id="lastName"
                                                    placeholder="Ingrese Apellido"
                                                    required
                                                />
                                            </div>

                                            <div class="col-12">
                                                <label for="username" class="form-label">
                                                    correo electronico
                                                </label>
                                                <div class="input-group has-validation">
                                                    <span class="input-group-text border-green">@</span>
                                                    <input
                                                        type="text"
                                                        class="form-control  bg-white border-green"
                                                        id="username"
                                                        placeholder="Ingrese el correo Electronico"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <label for="email" class="form-label">
                                                    Numero Telefono<span class="text-muted"></span>
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control  bg-white border-green"
                                                    id="email"
                                                    placeholder="Ingrese Numero Telefono"
                                                    required
                                                />
                                            </div>

                                            <div class="col-12">
                                                <label for="address" class="form-label">
                                                    Direccion:
                                                </label>
                                                <input
                                                    type="text"
                                                    class="form-control  bg-white border-green"
                                                    id="address"
                                                    placeholder="Ingrese Dirreccion"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Cerrar
                                </button>

                                <button type="submit" class="btn btn-green border-green">
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