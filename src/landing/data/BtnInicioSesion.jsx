import React from 'react'
import box_arrow_right from "../../assets/img/icons/box-arrow-right.svg";
import person_circle from "../../assets/img/icons/person-circle.svg";
import bell2 from "../../assets/img/icons/bell2.svg";
import gear from '../../assets/img/icons/gear.svg'
import { Link, Outlet } from "react-router-dom";

const BtnInicioSesion = () => {


    const botonesIncio = () => {
        const tokenAprendiz = localStorage.getItem("Token-Aprendiz")
        const tokenProfesional = localStorage.getItem("Token-Profesional")
        const tokenAdministrador = localStorage.getItem("Token-Administrador")
        const token = tokenAprendiz || tokenProfesional || tokenAdministrador
        if (!token) {
            return (
                <>
                    <button className="btn btn-green ms-4" data-bs-toggle="modal" data-bs-target="#exampleModal1">Iniciar Sesion</button>
                </>
            )


        }
        else {
            return (
                <>


                    <div className="navbar-nav ms-3 user">
                        <li className="nav-item dropdown ">
                            <Link
                                className="nav-link "
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {" "}
                                <div className="d-inline-block position-relative">
                                    <img src={bell2} alt="icon-cerrarsesion" className="" />
                                    <span className="position-absolute top-0 start-100 translate-middle p-1 bg-green border  rounded-circle"></span>
                                </div>
                            </Link>

                            <div
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="dropdownNotifications"
                                data-bs-toggle="modal"
                                data-bs-target="#modalAseptarRecha"
                            >
                                <h6 className="dropdown-header ">Nuevas notificaciones</h6>
                                <Link className="dropdown-item" href="#">
                                    <div className="media">
                                        <img
                                            src="https://via.placeholder.com/50x50"
                                            className="mr-3 rounded-circle"
                                            alt="..."
                                        />

                                        <div className="media-body">
                                            <h6 className="mt-0 mb-1">Notificación 1</h6>
                                            <p>Descripción de la notificación 1.</p>
                                            <small className="text-muted">Hace 5 minutos</small>
                                        </div>
                                    </div>
                                </Link>

                                <Link className="dropdown-item" href="#">
                                    <div className="media">
                                        <img
                                            src="https://via.placeholder.com/50x50"
                                            className="mr-3 rounded-circle"
                                            alt="..."
                                        />
                                        <div className="media-body">
                                            <h6 className="mt-0 mb-1">Notificación 2</h6>
                                            <p>Descripción de la notificación 2.</p>
                                            <small className="text-muted">Hace 10 minutos</small>
                                        </div>
                                    </div>
                                </Link>

                                <Link className="dropdown-item" href="#">
                                    <div className="media">
                                        <img
                                            src="https://via.placeholder.com/50x50"
                                            className="mr-3 rounded-circle"
                                            alt="..."
                                        />
                                        <div className="media-body">
                                            <h6 className="mt-0 mb-1">Notificación 3</h6>
                                            <p>Descripción de la notificación 3.</p>
                                            <small className="text-muted">Hace 15 minutos</small>
                                        </div>
                                    </div>
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item text-center" href="#">
                                    Ver todas las notificaciones
                                </Link>
                            </div>
                        </li>
                    </div>

                    <div className="navbar-nav ms-3 user">
                        <li className="nav-item dropdown ">
                            <Link
                                className="nav-link "
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img src={person_circle} alt="icon-user" />
                            </Link>
                            <ul
                                className="dropdown-menu bg-green border-green"
                                style={{ left: "-120px", backgroundColor: "#00324d" }}
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <Link
                                        className="dropdown-item text-white"
                                        data-bs-toggle="modal"
                                        href=""
                                        data-bs-target="#modalInicioDatos"
                                    >
                                        <img src={gear} alt="icon-ajustes" className="me-3" />
                                        Ajustes
                                    </Link>
                                </li>
                                <li>
                                    <button className="dropdown-item text-white" onClick={() => localStorage.clear((location.reload()))}>
                                        <img
                                            src={box_arrow_right}
                                            alt="icon-cerrarsesion"
                                            className="me-3"

                                        />
                                        Cerrar Sesion
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </div>

                </>
            )
        }
    }
    return botonesIncio();
}
export default BtnInicioSesion;


