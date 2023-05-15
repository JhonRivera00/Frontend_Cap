import ImagenTitulo from '../../assets/img/imgnav.jpg';
import Threevertical from '../../assets/img/icons/three-dots-vertical.svg'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { datosInicio } from '../../administrador/data/DataAdmin'


const Inicio = () => {
    const [dataInicio, setDataInicio] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await datosInicio(1);
            setDataInicio(data.reverse());
        }
        fetchData()
    }, []);

    const verEventos = async (e) => {
        const data = await datosInicio(e);
        console.log(data);
        setDataInicio(data.reverse());
    }

    return (
        <>
            <div className="col-12 ">
                <div className="position-relative d-inline-block w-100" >
                    <img src={ImagenTitulo} className="w-100 img-titulo-fondo" alt="" />
                    <h1 className="text-titulo position-absolute text-center  w-100">EVENTOS
                        <div className=" d-flex justify-content-around ">
                            <div className="bg-green p-1 w-25" ></div>
                            <div className="bg-green p-1 w-25" ></div>
                        </div>
                    </h1>
                </div>
                <div className="filter-container ">
                    <div className='d-flex justify-content-end'>

                    <select
                        id="filtro-eventos"
                        className="form-select w-25 me-5 mt-4"
                        defaultValue=""
                        onChange={(e) => verEventos(e.target.value)}
                        >
                        <option value="" disabled>
                            Filtrar por...
                        </option>
                        <option value="destacado">Destacados</option>
                        <option value="noticia">Noticias</option>
                    </select>
                        </div>
                </div>




                <div className="card-group d-flex mt-0  flex-wrap justify-content-around">
                    {dataInicio.map((data) => (
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
