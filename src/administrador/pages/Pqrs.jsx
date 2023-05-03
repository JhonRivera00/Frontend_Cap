import Imgnav from '../../assets/img/imgnav.jpg'
import Person from '../../assets/img/icons/person-lines-fill.svg'
import Pencil from '../../assets/img/icons/pencil-square.svg'
import search from '../../assets/img/icons/search.svg'



const Usuarios = () => {
  return (
    <>

      {/* <!-- Contenido --> */}

      <div className="col">

        <div className="position-relative d-inline-block w-100" >
          <img src={Imgnav} className="w-100 img-titulo-fondo" alt="" />
          <h1 className="text-titulo position-absolute text-center  w-100">PQRS
            <div className=" d-flex justify-content-around pt-2">
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
        <div className='table-responsive w-100 mt-3'>


          <table className="table caption-top w-100">
            <thead>
              <tr className='text-white' style={{ backgroundColor: '#00324d' }} >

                <th className='col-1'><img src={Person} alt="" className="ms-2 bg-green-opacity p-2 rounded-2" /></th>
                <th className='col-3'>Nombres</th>
                <th className='col-2'>Ficha</th>
                <th className=' col-5' >Pqrs</th>
                <th className='col-1 '><img src={Pencil} alt="" className=" bg-green-opacity p-2 rounded-2" /></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Jhoana</td>
                <td>2452439</td>
                <td className="d-inline-block text-truncate" style={{ maxWidth: '200px' }}>
                  Este es un texto largo que se truncará si es demasiado largo. Puedes hacer clic en el botón para leerlo completo.
                </td>

                <button className="btn btn-link" type='button' data-bs-toggle="collapse" data-bs-target="#texto-completo">Leer completo</button>
                <div id="texto-completo" className="collapse">
                  Este es un texto largo que se mostrará completo al hacer clic en el botón. ¡Genial!
                </div>
                <td>

                  <button type='submit' className='bg-success btn p-1 border-0 link-light text-center' data-bs-toggle="modal" href="" data-bs-target="#modalpqrs">Responder</button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
      {/* <!-- Fin Contenido --> */}

      {/* Modal CREAR EVENTO */}
      <div className="modal fade" id="modalpqrs" tabIndex="-1" aria-labelledby="exampleModalINLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content bg-color-blue text-white">
            <div className="modal-header">
              <h3 className="modal-title w-100 text-center" id="exampleModalINLabel">PQRS</h3>
              <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="row g-2 needs-validation " action="" >
                {/* Respuesta PQRS*/}
                <div className="col-12 mt-0" style={{ padding: "0 50px" }}>
                  <label htmlFor="validationCustom01" className="form-label">ESCRIBE TU RESPUESTA</label>
                  <textarea className='form-control' required></textarea>
                </div>

                {/* Botón CREAR EVENTO */}
                <div className="col-12 d-flex justify-content-center mb-2 pb-4 pt-3">
                  <button className="btn btn-green" type="submit">ENVIAR</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* FinModal MODAL CREAR EVENTO */}
    </>
  )
}

export default Usuarios;