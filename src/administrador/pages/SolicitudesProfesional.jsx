import ModalProfesional from '../modales/ModalProfesional';
import Imgnav from "../../assets/img/imgnav.jpg";
// import users from "../../assets/img/users.png";
import search from '../../assets/img/icons/search.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { solicitudesprofesional } from '../data/DataAdmin';


const Profesional = () => {
const [data, setData] = useState([])
const [dataPro, setDataPro] = useState({})

useEffect(() => {
const datos = async () =>{
const data = await solicitudesprofesional()
setData(data)
}
datos()
}, [])
console.log(data,"data")

const enviarDataPro=(nombre,apellido,tipoDoc,numDoc,profesion,correo,telefono,id)=>{
const dataProfesional = {
  nombre,apellido,tipoDoc,numDoc,profesion,correo,telefono,id
}
setDataPro(dataProfesional)
console.log(dataProfesional);

}

  return (
    <>
 
      <div className="position-relative d-inline-block w-100">
        <img src={Imgnav} className="w-100 img-titulo-fondo" alt="" />
        <h1 className="text-titulo position-absolute text-center w-100">
          SOLICITUD PROFESIONAL
          <div className="d-flex justify-content-around pt-2">
            <div className="bg-green p-1 w-25"></div>
            <div className="bg-green p-1 w-25"></div>
          </div>
        </h1>
      </div>
      {/* Fin Titulo */}

      {/* Buscador */}

      <div className="row d-flex justify-content-center">
        <div className="input-group w-75 mt-4 ">
          <input type="search" className="form-control rounded" placeholder="Buscar..." aria-label="Search" aria-describedby="search-addon" />
          <img src={search} className="btn btn-outline-primary" alt="" />
        </div>
      </div>
      {/* Fin buscador */}

      {/* Fin selecionar filtro */}

      {/* Inicio Contenido*/}
      <main className="mt-3">
        <div className="table-responsive">
          <table className="table table-hover table-sm border-green">
            <thead className="border-1">
              <tr className="table-active bg-color-blue text-white">
                <th>NOMBRE</th>
                <th>NIT</th>
                <th>PROFESION</th>
                <th>ESTADO</th>
                <th>BOTONES</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((d)=>(
                  <tr>
                  <td data-label="paciente">{d.nombres}{" "}{d.apellidos}</td>
                  <td data-label="Nit">{d.documento.numeroDocumento}</td>
                  <td data-label="profesion">{d.profesion}</td>
                  <td className=" link-light ">
                    <div >
                      <p className="bg-warning rounded-pill text-center w-75">Pendiente</p>
                    </div>
                  </td>
                  <td data-label="descripcion">
                    <Link className="text-decoration-none" data-bs-toggle="modal" data-bs-target="#profesional" onClick={()=>enviarDataPro(d.nombres,d.apellidos,d.documento.tipo,d.documento.numeroDocumento,d.profesion,d.correo,d.numTelefono,d._id)} style={{ cursor: "pointer" }}> Ver mas...</Link>
                  </td>
                </tr>

                ))
              }

            </tbody>
          </table>
        </div>
      </main>
                {/* Modales */}
                <ModalProfesional dataProfesional={dataPro}/>

    </>
  );
};

export default Profesional;
