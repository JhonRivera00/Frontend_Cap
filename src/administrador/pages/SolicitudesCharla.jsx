import Imgnav from "../../assets/img/imgnav.jpg";
import search from '../../assets/img/icons/search.svg';
import ModalCharla from '../modales/ModalCharla';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { dataVerCharlas } from '../data/DataAdmin'
import { format, parseISO } from 'date-fns';
import es from 'date-fns/locale/es';

const Charlas = () => {
  const [data, setData] = useState([]);
  const [dataAprendiz, setdataAprendiz] = useState({});
  useEffect(() => {
    const dataCharlas = async () => {
      const dataCharla = await dataVerCharlas()
      setData(dataCharla.reverse())
    }
    dataCharlas()
  }, []);

  
  const handleModal = (nombre, ficha, telefono, correo, motivo, fechaSolicitadaA,apellidos,jornada,nombresProfesional,apellidosProfesional,idCharla) => {
    const fechaISO = fechaSolicitadaA;
    const fecha = parseISO(fechaISO);
    const fechaSolicitada = format(fecha, "eeee d 'de' MMMM 'del' yyyy", { locale: es });
    
    const datos = { nombre, ficha, telefono, correo, motivo, fechaSolicitada,apellidos,jornada,nombresProfesional,apellidosProfesional,idCharla }
   
    setdataAprendiz(datos)
  }
  return (
    <>
      <div className="position-relative d-inline-block w-100">
        <img src={Imgnav} className="w-100 img-titulo-fondo" alt="" />
        <h1 className="text-titulo position-absolute text-center w-100">
          CHARLAS
          <div className="d-flex justify-content-around ">
            <div className="bg-green p-1 w-25"></div>
            <div className="bg-green p-1 w-25"></div>
          </div>
        </h1>
      </div>

      <div className="row">

        <div className="input-group w-75 mt-4 mx-auto">
          <input type="search" className="form-control rounded" placeholder="Buscar..." aria-label="Search" aria-describedby="search-addon" />
          <img src={search} className="btn btn-outline-primary" alt="" />
        </div>
      </div>
      <main className="mt-3">
        <div className="table-responsive">
          <table className="table table-hover table-sm border-green">
            <thead className="border-1">
              <tr className="table-active bg-color-blue text-white">
                <th>APRENDIZ</th>
                <th>FICHA</th>
                <th>MOTIVO</th>
                <th>ESTADO</th>
                <th>BOTONES</th>
              </tr>
            </thead>
            <tbody>{
              data.map((d) => (


                <tr key={d.id_aprendiz}>
                  <td data-label="paciente">{d.id_aprendiz.nombres}</td>
                  <td data-label="ficha">{d.id_aprendiz.programa.ficha}</td>
                  <td data-label="motivo">{d.motivo}</td>
                  <td className=" link-light ">
                    <div >
                      <p className={d.estado.pendiente === true ? "bg-warning rounded-pill text-center w-75" : "bg-success rounded-pill text-center w-75"}>{d.estado.pendiente === true ? "Pendiente" : "Aceptada"}</p>
                    </div>
                  </td>
                  <td data-label="descripcion">
                    <Link className="text-decoration-none" data-bs-toggle="modal" data-bs-target="#solicitud" style={{ cursor: "pointer" }} onClick={() => handleModal(d.id_aprendiz.nombres, d.id_aprendiz.programa.ficha, d.id_aprendiz.numTelefono, d.id_aprendiz.correo, d.motivo, d.fechaSolicitada,d.id_aprendiz.apellidos,d.id_aprendiz.programa.jornada,d.id_profesional.nombres,d.id_profesional.apellidos,d._id)}> Ver mas...</Link>
                  </td>
                </tr>

              ))
            }
              {/* Modales */}
              <ModalCharla dataAprendiz={dataAprendiz} />

            </tbody>
          </table>
        </div>
      </main>

    </>
  );
};

export default Charlas;
