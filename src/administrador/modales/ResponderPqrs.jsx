import React from 'react'

function ResponderPqrs({dataModalPqrs}) {
    console.log(dataModalPqrs);
    return (
        <>

            {/* Modal Pqrs */}
            <div className="modal fade" id="modalpqrs" tabIndex="-1" aria-labelledby="exampleModalINLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-color-blue text-white">
                        <div className="modal-header">
                            <h3 className="modal-title w-100 text-center" id="exampleModalINLabel">PQRS</h3>
                            <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-2 needs-validation " action="" >

                                <div className="col-12 mt-0 px-5"> 
                                    <h5 className=' text-center pt-1'>{dataModalPqrs.tipo}</h5>
                                    <p className='text-center pt-2'>{dataModalPqrs.motivo}
                                    </p>
                                </div>
                                {/* Respuesta PQRS*/}
                                <div className="col-12 mt-0 px-5" >
                                    <label htmlFor="validationCustom01" className="form-label pt-2">ESCRIBE TU RESPUESTA</label>
                                    <textarea className='form-control' required></textarea>
                                </div>

                                {/* Botón CREAR EVENTO */}
                                <div className="col-12 d-flex justify-content-center mb-2 pb-4 pt-3">
                                    <button className="btn btn-green" type="submit">Responder</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* FinModal Pqrs */}
        </>
    )
}

export default ResponderPqrs