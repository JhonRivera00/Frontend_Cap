import Imagen1 from "../../assets/img/imgslider1.jpg";
import Imagen2 from "../../assets/img/imgslider2.jpg";
import Imagen3 from "../../assets/img/imgslider4.jpg";
import ImagenTitulo from '../../assets/img/imgnav.jpg';
import Threevertical from '../../assets/img/icons/three-dots-vertical.svg'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {datosInicio} from '../../administrador/data/DataAdmin'


const Inicio = () => {
const [dataInicio, setDataInicio] = useState([]);
useEffect(() => {
    const fetchData = async () => {
        const data = await datosInicio();
        setDataInicio(data);
    }
    fetchData()
},[]);

    return (
        <>
            <div className="col-12 ">
                <div className="position-relative d-inline-block w-100" >
                    <img src={ImagenTitulo} className="w-100 img-titulo-fondo" alt="" />
                    <h1 className="text-titulo position-absolute text-center  w-100">EVENTOS
                        <div className=" d-flex justify-content-around pt-2">
                            <div className="bg-green p-1 w-25" ></div>
                            <div className="bg-green p-1 w-25" ></div>
                        </div>
                    </h1>
                </div>

                <div className="mt-0 w-100 mt-4 d-flex justify-content-end">
                    <select className="form-control w-25 me-5" id="exampleFormControlSelect1" defaultValue="1">
                        <option value="1" disabled>FILTRO...</option>
                        <option value="2">Destacados</option>
                        <option value="3">Noticias</option>
                    </select>
                </div>


                <div className="card-group d-flex flex-wrap justify-content-around">
{dataInicio.map((data)=>(
 <div className="card mx-sm-5 my-sm-5 border rounded-0">
 <img className="card-img-top" src={data.imagen.urlImg} alt="slider1" />
 <div className="card-body">
     <h5 className="card-title text-uppercase text-center mb-3">
        {data.titulo}
     </h5>
     <p className="card-text">{
        data.descripcion
     }
     </p>
     <p>
         Mas info en:
         <Link href="https://www.sena.edu.co/es-co/Paginas/default.aspx">Click aqui</Link>
     </p>
 </div>
 <div className="card-footer bg-green">
     <small className="text-muted1 d-flex justify-content-between pt-0">Ultima actualización hace 3 minutos..
         <div className="dropdown">
             <Link href="" className=" float-end" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                 <img src={Threevertical} className="bg-white rounded p-2 bg-opacity-25 border" alt="" /></Link>
             <ul className="dropdown-menu border-green" aria-labelledby="dropdownMenuButton1" >
                 <li><Link className="dropdown-item" href="#">Eliminar</Link></li>
                 <li><Link className="dropdown-item" href="#">Editar</Link></li>
                 <li><Link className="dropdown-item" href="#">Inhabilitar</Link></li>
                 <li><Link className="dropdown-item" href="#">Habilitar</Link></li>
             </ul>
         </div>
     </small>
 </div>
</div>
))

}
                   

                </div>
            </div>
        </>
    )
}

export default Inicio
