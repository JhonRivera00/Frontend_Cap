
import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';
import { verAdmin } from '../../administrador/data/DataAdmin'


const DatosAjustes = () => {
    const [datos, setDatos] = useState();
    console.log(datos)
    const [mostrar, setMostrar] = useState({
        nombre: "",
        apellido: "",
        imgPerfil: "",
        correo: "",
        genero: "",
        telefono: "",
        contraseña: ""
    });
    console.log(mostrar);

    
    useEffect(() => {
        
        const token = localStorage.getItem('Token-Aprendiz');
        if(!token){

        return    
        }else{

            const { id } = jwt_decode(token);
            const fetAprendiz = async () => {
                const { data } = await verAdmin(id)
                setMostrar(data);
                setDatos(data)
            }
            fetAprendiz()
        }
    }, []);

    const handleTarget = ({target}) => {
        setMostrar({ ...mostrar, [target.name]: target.value});
    } 


    return (
        <>
            {/* <!-- Modal datos ajustes --> */}
            <div
                className="modal fade"
                id="modalInicioDatos"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog ">
                    <div className="modal-content bg-color-blue  text-white ">
                        <form
                            className="needs-validation"
                            action=""
                            autoComplete="off"
                        >
                            <div className="modal-header">
                                <h4 className="modal-title w-100 text-center ">Datos Generales</h4>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body text-white">
                                <div className="container">
                                    <div className="col-md-12 col-lg-10 mx-auto">

                                        {/* <div className="nav-item dropdown ">
                                            <li className="nav-link">
                                                <Link
                                                    className="nav-link "
                                                    id="navbarDropdownMenuLink"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >{dataPro && dataPro.perfil && dataPro.perfil.urlImg ?
                                                    <img src={dataPro.perfil.urlImg} alt="icon-user" style={{ width: "70px", height: "70px" }} className="rounded-circle" />
                                                    :
                                                    <img src={person_circle} alt="icon-user" style={{ width: "70px", height: "70px" }} className="rounded-circle" />
                                                    }
                                                </Link>
                                            </li>
                                        </div> */}


                                        <div className="row g-3">
                                            <div className="col-sm-6">
                                                <label htmlFor="firstName" className="form-label ">
                                                    Nombre
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control bg-white border-green"
                                                    name = "nombre"
                                                    value= {mostrar.nombre}
                                                    id="firstName"
                                                    placeholder=""
                                                    required
                                                    onChange={handleTarget}
                                                />
                                            </div>

                                            <div className="col-sm-6">
                                                <label htmlFor="lastName" className="form-label">
                                                    Apellido
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control  bg-white border-green"
                                                    id="lastName"
                                                    placeholder=""
                                                    required
                                                />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="lastName" className="form-label">Foto de perfil</label>
                                                <input type="file" className="form-control" id="lastName" placeholder=""  />
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="email" className="form-label">Correo</label>
                                                <input type="email" className="form-control" id="email" placeholder=""  />
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="validationGenero" className="form-label">Genero</label>
                                                <select className="form-select" id="validationGenero" aria-label="Default select example"  required>
                                                    <option disable="true" >Genero</option>
                                                    <option defaultValue="Masculino" >Masculino</option>
                                                    <option defaultValue="Femenino" >Femenino</option>
                                                </select>
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="email" className="form-label">
                                                    Telefono<span className="text-muted"></span>
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control  bg-white border-green"
                                                    id="email"
                                                    placeholder=""
                                                    required
                                                />
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="address1" className="form-label">Contraseña</label>
                                                <input type="password" className="form-control" id="address1" placeholder=""  />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Cerrar
                                </button>

                                <button type="submit" className="btn btn-green border-green">
                                    Guardar cambios
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Fin Modal Datos Ajustes --> */}
        </>
    )
}

export default DatosAjustes;