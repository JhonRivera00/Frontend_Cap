import ImagenTitulo from '../../assets/img/imgnav.jpg';
import React, { useState, useEffect } from 'react'
import { datosInicio} from '../../administrador/data/DataAdmin'
import ActualizarEvento from '../modales/ActualizarEvento'
import FechaNotificacion from '../../assets/js/FechaNotificacion';
import Swal from 'sweetalert2'


const Inicio = () => {
    const [dataInicio, setDataInicio] = useState([]);
    const [dataEvento, setDataEvento] = useState("")
   

    useEffect(() => {
        const fetchData = async () => {
            const data = await datosInicio(1);
            setDataInicio(data.reverse());
        }
        setTimeout(function() {
            localStorage.clear();
            Swal.fire({
              title: "Por tu seguridad se ha cerrado sesión",
              icon: "success"
            }).then(() => {
              Swal.clickConfirm(location.reload());
            });
          }, 3600000);
          
        fetchData()
    }, []);

    const verEventos = async (e) => {
        const loading = Swal.fire({
            title: 'Filtrando',
            text: 'Espere un momento...',
            allowOutsideClick: false,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });
        const data = await datosInicio(e);
        setDataInicio(data.reverse());
        loading.close()
    }
    const dataEventos = (_id, descripcion, fecha_inicio, fecha_final, idImg, urlImg, lugar, tipo, titulo) => {
        const data = { _id, descripcion, fecha_inicio, fecha_final, idImg, urlImg, lugar, tipo, titulo };
        setDataEvento(data)
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
                <div className="filter-container mb-sm-0 mb-4">
                    <div className='d-flex justify-content-end'>

                        <select
                            id="filtro-eventos"
                            className="form-select w-25  me-5 mt-4"
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
                        <div className="card mx-sm-5 my-sm-5 border rounded-0" key={data._id}>
                            <img className="card-img-top" src={data.imagen.urlImg} alt="slider1" />
                            <div className="card-body">
                                <h5 className="card-title text-uppercase text-center mb-3">
                                    {data.titulo}
                                </h5>
                                <p className="card-text">{
                                    data.descripcion
                                }
                                </p>
                                {data.pdf.urlPdf ? <p>
                                    <a href={data.pdf.urlPdf} target="_blank" rel="noopener noreferrer">Ver documento</a>
                                </p>:""}
                               

                            </div>
                            <div className="card-footer bg-green">
                                <small className="text-muted1 d-flex justify-content-between pt-0">Ultima actualización {data.updatedAt?FechaNotificacion(data.updatedAt):""}
                                    <div className="">
                                        <button className='btn btn-sm btn-secondary' data-bs-toggle="modal" data-bs-target="#actualizarEvento" onClick={() => dataEventos(data._id, data.descripcion, data.fecha_inicio, data.fecha_final, data.imagen.idImg, data.imagen.urlImg, data.lugar, data.tipo, data.titulo)}>Actualizar</button>
                                    </div>
                                </small>
                            </div>
                        </div>
                    ))

                    }


                </div>
            </div>

            <ActualizarEvento data={dataEvento} />
        </>
    )
}

export default Inicio;