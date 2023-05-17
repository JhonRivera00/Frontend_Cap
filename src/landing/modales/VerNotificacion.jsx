
const VerNotificacion = ({ datosMotivoNoti }) => {
    const tokenAprendiz = localStorage.getItem("Token-Aprendiz")
    const tokenProfesional = localStorage.getItem("Token-Profesional")
    const tokenAdmin = localStorage.getItem("Token-Administrador")
console.log(datosMotivoNoti);
    if (tokenAprendiz) {
        if(datosMotivoNoti.titulo === "Solicitud Aceptada"){
            return (
                <>
                    <div className="modal fade" id="verNotificacion" data-bs-backdrop="static" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-3" id="staticBackdropLabel">{datosMotivoNoti.titulo}</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                   <p className="fw-semibold">Tu solicitud ha sido aceptada con el profesional {datosMotivoNoti.nombreProf}{" "}{datosMotivoNoti.apellidoProf } y sera atendidad el dia {datosMotivoNoti.fechaAplazada}</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }else{
            return (
                <>
                    <div className="modal fade" id="verNotificacion" data-bs-backdrop="static" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-3" id="staticBackdropLabel">{datosMotivoNoti.titulo}</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                   <p className="fw-semibold">Tu solicitud ha sido aplazada por el motivo {datosMotivoNoti.motivo} y fue asignada con el profesional {datosMotivoNoti.nombreProf}{" "}{datosMotivoNoti.apellidoProf } y sera atendidad el dia {datosMotivoNoti.fechaAplazada}</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )

        }
    
    }
    else if(tokenProfesional){
        return (
            <>
                <div className="modal fade" id="verNotificacion" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-3" id="staticBackdropLabel">{datosMotivoNoti.titulo}</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Tienes una nueva cita con el aprendiz {datosMotivoNoti.nombreApre}{" "}{datosMotivoNoti.apellidoApre} numero de documento {datosMotivoNoti.numeroDocApre} para el dia {datosMotivoNoti.fechaAplazada}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }else if(tokenAdmin){
        return (
            <>
                <div className="modal fade" id="verNotificacion" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-3" id="staticBackdropLabel">Motivo Aplazamiento Admin</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body fs-4 ">
                                {datosMotivoNoti.motivo}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default VerNotificacion;