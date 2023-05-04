import Imgnav from '../../assets/img/imgnav.jpg'
import Person from '../../assets/img/icons/person-lines-fill.svg'
import Pencil from '../../assets/img/icons/pencil-square.svg'
import search from '../../assets/img/icons/search.svg'
import {  useState,useEffect } from 'react'
import { datosPqrs } from '../data/DataAdmin'
import ResponderPqrs from '../modales/ResponderPqrs'

const Usuarios = () => {
  const [dataPqrs, setDataPqrs] = useState([])
  const [dataModalPqrs, setdataModalPqrs] = useState("")


  useEffect( () => {
    (async()=>{
      const data = await  datosPqrs()
      console.log(data);
      setDataPqrs(data)
    })()
    
  }, [])

  const modalPqrs = (tipo,motivo,id)=>{
const datos = {
  tipo,motivo,id
}
setdataModalPqrs(datos)
  }
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
                <th className='col-2'>Tipo</th>
                <th className=' col-5' >Pqrs</th>
                <th className='col-1 '><img src={Pencil} alt="" className=" bg-green-opacity p-2 rounded-2" /></th>
              </tr>
            </thead>
            <tbody>
              {dataPqrs.map((d,i)=>(
   <tr>
   <th>{i}</th>
   <td>{d.id_usuario.nombres}{" "}{d.id_usuario.apellidos}</td>
   <td>{d.id_usuario.programa.ficha}</td>
   <td>{d.tipo}</td>
   <td className="d-inline-block text-truncate" style={{ maxWidth: '200px' }}>{d.motivo}
   </td>
   <td>

     <button type='submit' className='bg-success btn p-1 border-0 link-light text-center' data-bs-toggle="modal" href="" data-bs-target="#modalpqrs" onClick={()=>modalPqrs(d.tipo,d.motivo,d._id)}>Responder</button>
   </td>
 </tr>

               ))}  
           

            </tbody>
          </table>
        </div>

      </div>
      {/* <!-- Fin Contenido --> */}
<ResponderPqrs dataModalPqrs={dataModalPqrs}/>
    </>
  )
}

export default Usuarios;