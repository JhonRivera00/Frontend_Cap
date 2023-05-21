
import Imgnav from "../../assets/img/imgnav.jpg";
import Person from '../../assets/img/icons/person-lines-fill.svg'
import search from '../../assets/img/icons/search.svg'
import { useEffect, useState } from "react";
import { verUsuarios } from "../data/DataAdmin";


const Solicitudes = () => {
  const [usuarios, setUsuarios] = useState([])
  console.log(usuarios);
  useEffect(() => {
    (async () => {
      const usuario = await verUsuarios()
      setUsuarios(usuario.reverse());
    })()
  }, [])

  return (
    <>
      {/* <!-- Contenido --> */}

      <div className="position-relative d-inline-block w-100" >
        <img src={Imgnav} className="w-100 img-titulo-fondo" alt="" />
        <h1 className="text-titulo position-absolute text-center  w-100">USUARIOS
          <div className=" d-flex justify-content-around ">
            <div className="bg-green p-1 w-25" ></div>
            <div className="bg-green p-1 w-25" ></div>
          </div>
        </h1>
      </div>
      {/* <!-- Fin Titulo --> */}


      {/* Buscador */}

      <div className="row d-flex justify-content-center">
        <div className="input-group w-75 mt-4 ">
          <input type="search" className="form-control rounded" placeholder="Buscar..." aria-label="Search" aria-describedby="search-addon" />
          <img src={search} className="btn btn-outline-primary" alt="" />
        </div>
      </div>
      {/* Fin buscador */}


      {/* Fin selecionar filtro */}


      {/* <!-- Inicio Contenido --> */}
      <div className="table-responsive w-100">
        <table className="table caption-top mt-3 w-100">
          <thead>
            <tr className="bg-color-blue text-white">
              <th scope="col">
                <img
                  src={Person}
                  alt=""
                  className=" bg-green-opacity p-2 rounded-2"
                />
              </th>
              <th scope="col">Nombre</th>
              <th scope="col">Identificacion</th>
              <th scope="col">Ficha</th>
              <th scope="col">Estado</th>
              {/* <th Roll scope="col text-center">Roll</th> */}
            </tr>
          </thead>
          <tbody>
            {
              usuarios.map((user,i) => (
                <tr key={user._id}>
                  <th scope="row">{i}</th>
                  <td>{user.nombres}{" "}{user.apellidos}</td>
                  <td>{user.documento.numeroDocumento}</td>
                  <td>{user.programa.ficha}</td>
                  <td className=" link-light ">
                    <div >
                      <p className="bg-success rounded-pill text-center w-75"> Habilitado</p>
                    </div>
                  </td>
                  <td>
                    {/* <div className="form-check form-switch">
                      <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                      <p className="text-muted">Aprendiz</p>
                    </div> */}
                  </td>
                </tr>

              ))


            }

          </tbody>
        </table>
      </div>
      {/* <!-- Fin Contenido --> */}
    </>
  );
};

export default Solicitudes;