import React, { useState, useEffect } from "react";
import { loginAprendiz, loginProfesional, loginAdmin } from '../../landing/data/DataInicioSesion'


const InicioSesion = () => {

    //Login Aprendiz
    const [correoAprendiz, setCorreoAprendiz] = useState("");
    const [contrasenaAprendiz, setContrasenaAprendiz] = useState("");
    //Login Profesional
    const [correoProfesional, setCorreoProfesional] = useState("");
    const [contrasenaProfesional, setContrasenaProfesional] = useState("");
    //LoginAdmin
    const [correoAdmin, setCorreoAdmin] = useState("");
    const [contrasenaAdmin, setContrasenaAdmin] = useState("");
    //LoginAdmin
    const [btnActive, setbtnActive] = useState(false);


    const handleSumbitAprendiz = (e) => {
        e.preventDefault();

        loginAprendiz(correoAprendiz, contrasenaAprendiz)

    }
    const handleSumbitProfesional = (e) => {
        e.preventDefault();

        loginProfesional(correoProfesional, contrasenaProfesional)

    }
    const handleSumbitAdmin = (e) => {
        e.preventDefault();

        loginAdmin(correoAdmin, contrasenaAdmin)

    }
    useEffect(() => {

        if (btnActive === false) {
            document.querySelector("#tab-login-profesional").classList.remove("active-green")
            document.querySelector("#tab-login-aprendiz").classList.toggle("active-green")

        }
        else if (btnActive === true) {
            document.querySelector("#tab-login-aprendiz").classList.remove("active-green")
            document.querySelector("#tab-login-profesional").classList.toggle("active-green")

        }

    }, [btnActive]);


    return (
        <>
            <div className="modal bg-black bg-opacity-50" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Inicia Sesion</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                <li className="nav-item " role="presentation">
                                    <a className="nav-link active active-green shadow-lg"
                                        onClick={() => (setbtnActive(false))} id="tab-login-aprendiz" data-bs-toggle="pill" href="#pills-login-aprendiz" role="tab" aria-controls="pills-login-aprendiz" aria-selected="true">Aprendiz</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link shadow-lg " onClick={() => (setbtnActive(true))} id="tab-login-profesional" data-bs-toggle="pill" href="#pills-login-profesional" role="tab" aria-controls="pills-login-profesional" aria-selected="false">Profesional</a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                {/*Inicio Sesion Aprendiz */}
                                <div className="tab-pane show active " id="pills-login-aprendiz" role="tabpanel" aria-labelledby="tab-login-aprendiz">
                                    <form className="row g-2 needs-validation pt-4" onSubmit={handleSumbitAprendiz}  >
                                        <div className="col-12 mt-0 form-outline" style={{ padding: "0 70px" }}>
                                            <label htmlFor="inicioSesion" className="form-label">Usuario</label>
                                            <input type="email" className="form-control" id="inicioSesion" onChange={(e) => setCorreoAprendiz(e.target.value)} />
                                        </div>
                                        <div className="col-12 " style={{ padding: "0 70px" }}>
                                            <label htmlFor="validationCustom02" className="form-label">
                                                Contraseña
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="validationCustom02"
                                                onChange={(e) => setContrasenaAprendiz(e.target.value)}
                                            />
                                            <div className="invalid-feedback">
                                                Por favor, ingrese su contraseña.
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <span className="mt-2 me-4 pe-2 d-flex justify-content-end align-items-center">

                                                No tienes cuenta?{" "}
                                                <button
                                                    type="button"
                                                    className="btn text-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#resgistroAprendiz"
                                                >
                                                    Registrarte
                                                </button>
                                            </span>
                                        </div>
                                        <div className="w-100 d-flex justify-content-center">
                                            <button
                                                className="col-12  mb-2 btn btn-green w-50"
                                                type="submit"
                                            >
                                                Iniciar Sesion
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                {/*Inicio Sesion Profesional */}
                                <div className="tab-pane " id="pills-login-profesional" role="tabpanel" aria-labelledby="tab-login-profesional">
                                    <form className="row pt-4 g-2 needs-validation" onSubmit={handleSumbitProfesional} >
                                        <div className="col-12 mt-0" style={{ padding: "0 70px" }}>
                                            <label htmlFor="validationCustom01" className="form-label">
                                                Usuario
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="validationCustom01"
                                                onChange={(e) => setCorreoProfesional(e.target.value)}
                                            />
                                            <div className="invalid-feedback">
                                                Por favor, ingrese su nombre de usuario.
                                            </div>
                                        </div>
                                        <div className="col-12 " style={{ padding: "0 70px" }}>
                                            <label htmlFor="validationCustom02" className="form-label">
                                                Contraseña
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="validationCustom02"
                                                onChange={(e) => setContrasenaProfesional(e.target.value)}
                                            />
                                            <div className="invalid-feedback">
                                                Por favor, ingrese su contraseña.
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <span className="mt-2 me-4 pe-2 d-flex justify-content-end align-items-center">

                                                No tienes cuenta?{" "}
                                                <button
                                                    type="button"
                                                    className="btn text-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#modalRegistrarse"
                                                >
                                                    Registrarte
                                                </button>
                                            </span>
                                        </div>
                                        <div className="w-100 d-flex justify-content-center">
                                            <button
                                                className="col-12  mb-2 btn btn-green w-50"
                                                type="submit"
                                            >
                                                Iniciar Sesion
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
{/*inicio Sesion Admin */}
            <div className="modal text-white " id="inicioSesionAdmin" >
                <div className="modal-dialog">
                    <div className="modal-content bg-color-opacity  ">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                                <form className="row pt-4 g-2 needs-validation" onSubmit={handleSumbitAdmin} >
                                <div className="text-center w-100">
                                    <h2 className="h2 pt-4 pb-5 f">Administrador</h2>
                                </div>
                                        <div className="col-12 mt-0" style={{ padding: "0 70px" }}>
                                            <label htmlFor="validationCustom01" className="form-label">
                                                Usuario
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="validationCustom01"
                                                onChange={(e) => setCorreoAdmin(e.target.value)}
                                            />
                                            <div className="invalid-feedback">
                                                Por favor, ingrese su nombre de usuario.
                                            </div>
                                        </div>
                                        <div className="col-12 " style={{ padding: "0 70px" }}>
                                            <label htmlFor="validationCustom02" className="form-label">
                                                Contraseña
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="validationCustom02"
                                                onChange={(e) => setContrasenaAdmin(e.target.value)}
                                            />
                                            <div className="invalid-feedback">
                                                Por favor, ingrese su contraseña.
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <span className="mt-2 me-4 pe-2 d-flex justify-content-end align-items-center">

                                                No tienes cuenta?{" "}
                                                <button
                                                    type="button"
                                                    className="btn text-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#modalRegistrarse"
                                                >
                                                    Registrarte
                                                </button>
                                            </span>
                                        </div>
                                        <div className="w-100 d-flex justify-content-center">
                                            <button
                                                className="col-12  mb-2 btn btn-green w-50"
                                                type="submit"
                                            >
                                                Iniciar Sesion
                                            </button>
                                        </div>
                                    </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default InicioSesion;