import users1 from "../../assets/img/user1.png";
import { charlaAceptada } from "../data/DataAdmin";
import AplazarCharla from "./AplazarCharla";



const ModalCharla = (props) => {
const aceptarCharla=(e)=>{
 e.preventDefault();
charlaAceptada(props.dataAprendiz.idCharla);

}

    return (
        <>

            {/* Modal Solicitud */}

            <div className="modal" id="solicitud" data-bs-backdrop="static" >
                <div className="modal-dialog  modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title w-100 text-center" id="staticBackdropLabel">
                                SOLICITUD
                            </h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className=" modal-body">
                            <h5>Psicologia</h5>
                            <div className="row mt-4 ">
                                <div className="col-2">
                                    <img className="w-100 rounded-circle" src={users1} />
                                </div>
                                <div className="col-4">
                                    <div className=" d-flex">
                                        <p className=" fw-bold">Aprendiz: </p>
                                        <p className="ms-2">{props.dataAprendiz.nombre}{" "}{props.dataAprendiz.apellidos}</p>
                                    </div>
                                    <div className=" d-flex">
                                        <p className=" fw-bold">Ficha: </p>
                                        <p className="ms-2">{props.dataAprendiz.ficha}</p>
                                    </div>
                                    <div className=" d-flex">
                                        <p className=" fw-bold">Jornada: </p>
                                        <p className="ms-2">{props.dataAprendiz.jornada}</p>
                                    </div>
                                    <div className=" d-flex">
                                        <p className=" fw-bold">Telefono: </p>
                                        <p className="ms-2">{props.dataAprendiz.telefono}</p>
                                    </div>
                                    <div className=" d-flex">
                                        <p className=" fw-bold">Correo: </p>
                                        <p className="ms-2">{props.dataAprendiz.correo}</p>
                                    </div>
                                    <p></p>
                                </div>
                                <div className="col-6">
                                    <div className=" d-flex">
                                        <p className=" fw-bold">Fecha Solicitada: </p>
                                        <p className="ms-2">{props.dataAprendiz.fechaSolicitada}</p>
                                    </div>
                                    <div className=" d-flex">
                                        <p className=" fw-bold">Profesional solicitado: </p>
                                        <p className="ms-2">{props.dataAprendiz.nombresProfesional}{" "}{props.dataAprendiz.apellidosProfesional}</p>
                                    </div>
                                    <div className=" d-flex">
                                        <p className=" fw-bold">Motivo: </p>
                                        <p className="ms-2">{props.dataAprendiz.motivo}</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success"  onClick={aceptarCharla}>
                                Aceptar
                            </button>
                            <button type="button" className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#modalAplazar" >
                                Aplazar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fin modal Solicitud */}
            
            {/* Modal Aplazar Charla */}
            <AplazarCharla id={props.dataAprendiz.idCharla}/>

        </>
    )
}

export default ModalCharla;