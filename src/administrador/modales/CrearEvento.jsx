import React, { useState } from 'react'

const CrearEvento = () => {
    const [evento, setEvento] = useState("");
    const [tipoEvento, setTipoEvento] = useState("");
    const [fechaInicial, setFechaInicial] = useState("");
    const [imagenes, setImagenes] = useState("")
    const [descripcion, setDescripcion] = useState("")
    
    const handleSubmit=()=>{
        const formData = new FormData();
        formData.append("evento",evento)
        formData.append('tipoEvento',tipoEvento)
        

        }



    return(
        <>
         {/* Modal CREAR EVENTO */}
         <div className="modal fade" id="exampleModalIN" data-bs-backdrop="static">
                <div className="modal-dialog ">
                    <div className="modal-content bg-color-blue text-white">

                        <div className="modal-header">
                            <h3 className="modal-title w-100 text-center" id="exampleModalINLabel">CREAR EVENTO</h3>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body"><br></br>
                            <form className="row g-2 needs-validation" onSubmit={handleSubmit}>

                                {/* Nombre del evento */}
                                <div className="col-12 mt-0" style={{ padding: "0 50px 0 50px" }}>
                                    <label htmlFor="validationCustom01" className="form-label">NOMBRE DEL EVENTO</label>
                                    <input type="text" className="form-control" placeholder='Ingresar Evento' id="validationCustom01" onChange={(e)=>(setEvento(e.target.value))}/>
                                </div>
                                {/* Tipo de evento */}
                                <div className="col-12 mt-0" style={{ padding: "0 50px 0 50px" }}><br></br>
                                    <label htmlFor="exampleFormControlSelect1" className="form-label">TIPO DE EVENTO</label>
                                    <select className="form-control" id="exampleFormControlSelect1"  onChange={(e)=>setTipoEvento(e.target.value)}>
                                        <option value="1">Seleccionar...</option>
                                        <option value="2">Destacado</option>
                                        <option value="3">Noticia</option>
                                        <option value="4">Cronograma</option>
                                    </select>
                                </div>
                                {/* Fecha y hora de inicio */}
                                <div className="col-12 mt-0" style={{ padding: "0 50px 0 50px" }}><br></br>
                                    <label htmlFor="validationCustom02" className="form-label">FECHA Y HORA DE INICIO</label>
                                    <input type="datetime-local" className="form-control" id="validationCustom02" onChange={(e)=>setFechaInicial(e.target.value)}/>
                                </div>
                                {/* Fecha y hora final */}
                                <div className="col-12 mt-0" style={{ padding: "0 50px 0 50px" }}><br></br>
                                    <label htmlFor="validationCustom03" className="form-label">FECHA Y HORA FINAL</label>
                                    <input type="datetime-local" className="form-control" id="validationCustom03" onChange={(e)=>setFechaFinal(e.target.value)}/>
                                </div>

                                <div className="col-12 mt-0" style={{ padding: "0 50px 0 50px" }}><br></br>
                                    <label htmlFor="validationCustom01" className="form-label">ADJUNTAR IMAGEN</label>
                                    <input type="file" rows="3" className="form-control" placeholder='Ingresar descripcion' id="validationCustom01" onChange={(e)=>setImagenes(e.target.files)}/>
                                </div>
                                {/* Descripcion */}
                                <div className="col-12 mt-0" style={{ padding: "0 50px 0 50px" }}><br></br>
                                    <label htmlFor="validationCustom01" className="form-label">DESCRIPCION</label>
                                    <textarea type="text" rows="3" className="form-control" placeholder='Ingresar descripcion' id="validationCustom01" onChange={(e)=>setDescripcion(e.target.value)}/>
                                </div>
                                {/* Botón CREAR EVENTO */}
                                <div className="col-12 d-flex justify-content-center mb-2 pb-6 pt-4">
                                    <button className="btn btn-green" type="submit">CREAR EVENTO</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* FinModal MODAL CREAR EVENTO */}

        
        </>
    )
};

export default CrearEvento;