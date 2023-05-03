import React from 'react'
import Horizontal from '../../assets/img/Horizontal.png'
import favicon2 from '../../assets/img/favicon2.png'
import gear from '../../assets/img/icons/gear.svg'
import box_arrow from '../../assets/img/icons/box-arrow-right.svg'
import bell2 from '../../assets/img/icons/bell2.svg'
import person2 from '../../assets/img/icons/person-circle2.svg'
import { Link } from 'react-router-dom';
// Modales
import CrearEvento from '../modales/CrearEvento'
import DatosAjustes from '../modales/DatosAjustes'

function MenuSup() {
  return (
    <>
      {/* Inicio Nav */}
      <nav className="navbar navbar-expand-lg p-0 navbar-dark bg-color-blue sticky-top w-100" id="menu">
        <div className="container-fluid ">
          <Link className="navbar-brand" href="/index2.html">
            <img src={Horizontal} alt="Logo" className="img-logo" />
            <img src={favicon2} alt="Logo" className="img-logo-mini d-none me-auto" /></Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="btn btn-green" data-bs-toggle="modal" href="" data-bs-target="#exampleModalIN" >
            + Crear evento</Link>

          <div className="d-inline d-flex navbar-brand" id="navbarSupportedContent">
            <div className="navbar-nav ms-3">
              <li className="nav-item dropdown">
                <Link className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false"><img src={bell2} alt="icon-user" /></Link>
                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownNotifications">
                  <h6 class="dropdown-header">Nuevas notificaciones</h6>
                  <Link class="dropdown-item" href="#">
                    <div class="media">
                      <img src="https://via.placeholder.com/50x50" class="mr-3 rounded-circle" alt="..." />
                      <div class="media-body">
                        <h6 class="mt-0 mb-1">Notificación 1</h6>
                        <p>Descripción de la notificación 1.</p>
                        <small class="text-muted">Hace 5 minutos</small>
                      </div>
                    </div>
                  </Link>
                  <Link class="dropdown-item" href="#">
                    <div class="media">
                      <img src="https://via.placeholder.com/50x50" class="mr-3 rounded-circle" alt="..." />
                      <div class="media-body">
                        <h6 class="mt-0 mb-1">Notificación 2</h6>
                        <p>Descripción de la notificación 2.</p>
                        <small class="text-muted">Hace 10 minutos</small>
                      </div>
                    </div>
                  </Link>
                  <Link class="dropdown-item" href="#">
                    <div class="media">
                      <img src="https://via.placeholder.com/50x50" class="mr-3 rounded-circle" alt="..." />
                      <div class="media-body">
                        <h6 class="mt-0 mb-1">Notificación 3</h6>
                        <p>Descripción de la notificación 3.</p>
                        <small class="text-muted">Hace 15 minutos</small>
                      </div>
                    </div>
                  </Link>
                  <div class="dropdown-divider"></div>
                  <Link class="dropdown-item text-center" href="#">Ver todas las notificaciones</Link>
                </div>

              </li>
            </div>
            <div className="navbar-nav ms-3 h-100">
              <li className="nav-item dropdown">
                <Link className="nav-link h-100" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false"><img src={person2} alt="icon-user" /></Link>
                <ul className="dropdown-menu bg-color-blue" style={{ left: "-120px" }} aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <Link className="dropdown-item text-white" data-bs-toggle="modal" href="" data-bs-target="#modalInicioDatos" ><img src={gear} alt="icon-ajustes"
                      className="me-3" />
                      Ajustes</Link>
                  </li>
                  <li>
                  </li>
                  <li>
                    <Link className="dropdown-item text-white" to="/">
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
      </nav>

      {/* Modales */}
      <CrearEvento />
      <DatosAjustes/>

    </>
  )
}

export default MenuSup
