import React from 'react'
import Horizontal from '../../assets/img/Horizontal.png'
import favicon2 from '../../assets/img/favicon2.png'
import gear from '../../assets/img/icons/gear.svg'
import box_arrow from '../../assets/img/icons/box-arrow-right.svg'
import plus_circle from '../../assets/img/icons/plus-circle.svg'
import { Link } from 'react-router-dom';
// Modales
import CrearEvento from '../modales/CrearEvento'
import DatosAjustes from '../modales/DatosAjustes'
import AgregarFicha from '../modales/AgregarFicha'

function MenuSup() {
  return (
    <>
      {/* Inicio Nav */}
      <nav className="navbar navbar-expand-md p-0 navbar-dark bg-color-blue sticky-top  w-100" id="menu">
        <div className="container-fluid d-flex justify-content-between">
          <Link className="navbar-brand" href="/index2.html">
            <img src={Horizontal} alt="Logo" className="img-logo" />
            <img src={favicon2} alt="Logo" className="img-logo-mini d-none me-auto" /></Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbar " id="navbarSupportedContent">

            <Link className="btn btn-green ms-auto" data-bs-toggle="modal" data-bs-target="#exampleModalIN" >
              + Crear evento</Link>

            <div className="d-inline d-flex navbar-brand ms-auto" id="navbarSupportedContent">
              <div className="navbar-nav ms-3">

              </div>
              <div className="navbar-nav ms-3 h-100">
                <li className="nav-item dropdown ">
                  <Link className="nav-link dropdown-toggle h-100" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">   <img src="https://res.cloudinary.com/dvuzzneet/image/upload/v1684280453/sinF_ksqjai.png" style={{ width: "65px", height: "65px" }} className="ms-3" alt="" /></Link>
                  <ul className="dropdown-menu dropdown-menu-end bg-color-blue" aria-labelledby="navbarDropdownMenuLink">
                    <li>
                      <Link className="dropdown-item text-white" data-bs-toggle="modal" data-bs-target="#modalInicioDatos" ><img src={gear} alt="icon-ajustes"
                        className="me-3" />
                        Perfil</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" data-bs-target="#agregarFicha"  data-bs-toggle="modal">  <img src={plus_circle}
                          className="me-3" />
                        Agregar ficha
                      </Link>
                      
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" onClick={() => localStorage.clear((location.reload()))}>
                        <img src={box_arrow}
                          alt="icon-cerrarsesion" className="me-3" />
                        Cerrar Sesion
                      </Link>
                    </li>
                  </ul>
                </li>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <AgregarFicha/>

      {/* Modales */}
      <CrearEvento />
      <DatosAjustes />

    </>
  )
}

export default MenuSup
