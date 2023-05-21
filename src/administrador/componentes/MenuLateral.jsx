import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import person_circle from '../../assets/img/icons/person-circle.svg'
import house1 from '../../assets/img/icons/house1.svg'
import calendar3 from '../../assets/img/icons/calendar3.svg'
import MenuSup from './MenuSup'
import chatdots from '../../assets/img/icons/chat-dotsadm.svg'
import badgde from '../../assets/img/icons/badge-fill.svg'
import linesfi from '../../assets/img/icons/person-lines-fill.svg'
import envelopef from '../../assets/img/icons/envelope-fill.svg'
import jwt_decode from 'jwt-decode'
import { verAdmin } from '../data/DataAdmin';


function Menulateral() {
  const token = localStorage.getItem("Token-Administrador")
  const [dataAdmin, setDataAdmin] = useState("")
  const {id}= jwt_decode(token)
  useEffect(() => {
   (async()=>{
    const {data} = await verAdmin(id)
    setDataAdmin(data)
   })()
  }, [])
  
  return (
    <>
      <MenuSup />
      <div className="row">
        <div className="col-3  col-md-3 col-sm-3  col-lg-4">
          {/* Menu Lateral */}
          <div className="col-3 col-md-3 col-lg-4 col-xl-4 px-sm-2 px-0 bg-color-blue position-fixed">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-0 px-sm-3 pt-2 text-white min-vh-100 bg-white bg-opacity-25 mx-3">
              <div className="py-2 mt-2 mb-md-0 me-md-auto text-white text-decoration-none d-flex shadow-black rounded-3 w-100">
                <img src="https://res.cloudinary.com/dvuzzneet/image/upload/v1684280453/sinF_ksqjai.png" style={{ maxWidth: "65px", maxHeight: "65px" }} className="ms-md-3 " alt="" />

                <div className="d-flex flex-column ms-3 mt-1">
                  <div className="d-lg-flex d-none w-100 d-flex justify-content-around">
                    <span className="text-white fw-light ms-1">{dataAdmin.nombres}{" "}{dataAdmin.apellidos}</span>

                    <span className="badge rounded-pill bg-green float-right ms-2" style={{display: "inline-flex", alignItems: "center", width: "fit-content"}}>En línea</span>

                  </div>
                </div>

              </div>
              <ul className="navbar-nav flex-column mb-sm-auto mt-4 align-items-sm-start w-100" id="menu">
                <li className="nav-item w-100 rounded-4 shadow-lg">
                  <Link to="/admin" className="nav-link pt-3 ps-2">
                    <img src={house1} alt="" className="bg-green-opacity p-2 rounded-2" />
                    <span className="d-none d-lg-inline text-white fs-5 ms-3 fw-light">INICIO</span>
                  </Link>
                </li>
                <li className="nav-item w-100 rounded-4 shadow-lg">
                  <Link to="/admin/cronograma" className="nav-link pt-4 ps-2">
                    <img src={calendar3} alt="" className="bg-green-opacity p-2 rounded-2" />
                    <span className="d-none d-lg-inline text-white fs-5 ms-3 fw-light">CRONOGRAMA</span>
                  </Link>
                </li>
                <li className="nav-item w-100 rounded-4 shadow-lg">
                  <Link to="/admin/charlas" className="nav-link pt-4 ps-2 d-inline-flex">
                    <img src={chatdots} alt="" className="bg-green-opacity p-2 rounded-2" />
                    <span className="d-none d-lg-inline text-white fs-5 ms-3 fw-light">VER CHARLAS</span>
                  </Link>
                </li>
                <li className="nav-item w-100 rounded-4 shadow-lg">
                  <Link to="/admin/profesional" className="nav-link pt-4 ps-2">
                    <img src={badgde} alt="" className="bg-green-opacity p-2 rounded-2" />
                    <span className="d-none d-lg-inline text-white fs-5 ms-3 fw-light">SOLICITUD PROFESIONAL</span>
                  </Link>
                </li>
                <li className="nav-item w-100 rounded-4 shadow-lg">
                  <Link to="/admin/solicitudes" className="nav-link pt-4 ps-2">
                    <img src={linesfi} alt="" className="bg-green-opacity p-2 rounded-2" />
                    <span className="d-none d-lg-inline text-white fs-5 ms-3 fw-light">USUARIOS</span>
                  </Link>
                </li>
                <li className="nav-item w-100 rounded-4 shadow-lg">
                  <Link to="/admin/usuarios" className="nav-link pt-4 ps-2">
                    <img src={envelopef} alt="" className="bg-green-opacity p-2 rounded-2" />
                    <span className="d-none d-lg-inline text-white fs-5 ms-3 fw-light">PQRS</span>
                  </Link>
                </li>

              </ul>
              <hr />
            </div>
          </div>
          {/* Fin Menu Lateral */}

        </div>
        <div className="col-9 col-md-9  col-sm-9 col-lg-8">
          <Outlet />
        </div>
      </div>
    </>)
}

export default Menulateral