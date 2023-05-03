import React from "react";
import Horizontal from "../../assets/img/Horizontal.png";
import Favicon2 from "../../assets/img/favicon2.png";
import { Link, Outlet } from "react-router-dom";
import Footer from "../componentes/Footer";
import BtnInicio from '../data/BtnInicioSesion'
// Modales
import InicioSesion from '../modales/InicioSesion'
import DatosAjustes from '../modales/Ajustes'
import NotificacionAseptar from '../modales/AceptarRechazarCharla'
import Registrarse from '../modales/Registrarse'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const Navbar = () => {

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-color-blue p-3"
        id="menu"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Horizontal} alt="Logo" className="img-logo" />
            <img
              src={Favicon2}
              alt="Logo"
              className="img-logo-mini d-none me-auto"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse opciones-navbar"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item fs-6 ">
                <Link className="nav-link active" aria-current="page" to="/">
                  INICIO
                </Link>
              </li>
              <li className="nav-item active fs-6">
                <Link className="nav-link " to="/conocenos">
                  CONOCENOS
                </Link>
              </li>
              <li className="nav-item active fs-6">
                <Link
                  className="nav-link"
                  to="/charla"
                >
                  CHARLA
                </Link>
              </li>
              <li className="nav-item active fs-6">
                <Link className="nav-link" to="/cronograma">
                  CRONOGRAMA
                </Link>
              </li>
              <li className="nav-item  active fs-6">
                <Link className="nav-link" to="/contactanos">
                  CONTACTANOS
                </Link>
              </li>
            </ul>
            
            <BtnInicio />


          </div>
        </div>
      </nav>


      {/* Modales */}
      <InicioSesion />
      <DatosAjustes />
      <NotificacionAseptar />
      <Registrarse />

      <Outlet />
      <Footer />

    </>
  );
};

export default Navbar;
