import React, { useState } from 'react';
import { crearEvento } from '../data/DataAdmin';

const CrearEvento = () => {
  const [evento, setEvento] = useState("");
  const [tipoEvento, setTipoEvento] = useState("");
  const [lugar, setLugar] = useState("");
  const [fechaInicial, setFechaInicial] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const [imagenes, setImagenes] = useState("");
  const [pdf, setPdf] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const fechaActual = new Date();
  fechaActual.setHours(fechaActual.getHours() - 5);
  const fechaInicio = fechaActual.toISOString().slice(0, 16);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fechaInicial);
        const formData = new FormData();
        formData.append("titulo", evento)
        formData.append("lugar", lugar)
        formData.append('tipo', tipoEvento)
        formData.append('fecha_inicio', fechaInicial)
        formData.append('fecha_final', fechaFinal)
        formData.append('eventoImg', imagenes)
        formData.append('pdf', pdf)
        formData.append('descripcion', descripcion)

    crearEvento(formData);
  };

  const selectFuncion = (e) => {
    setTipoEvento(e);
    if (e === "cronograma") {
      document.querySelector("#div-lugar").classList.remove("d-none");
      document.querySelector("#div-img").classList.toggle("d-none");
      document.querySelector("#div-pdf").classList.toggle("d-none");
    } else {
      if (e === "destacado") {
        document.querySelector("#div-pdf").classList.toggle("d-none");
      } else if (document.querySelector("#div-lugar").classList.contains("d-none")) {
        document.querySelector("#div-img").classList.remove("d-none");
        document.querySelector("#div-pdf").classList.remove("d-none");
      } else {
        document.querySelector("#div-img").classList.remove("d-none");
        document.querySelector("#div-pdf").classList.remove("d-none");
        document.querySelector("#div-lugar").classList.toggle("d-none");
      }
    }
  };

  return (
    <>
      {/* Modal CREAR EVENTO */}
      <div className="modal fade" id="exampleModalIN" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content bg-color-blue text-white">
            <div className="modal-header">
              <h3 className="modal-title w-100 text-center" id="exampleModalINLabel">CREAR EVENTO</h3>
              <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body mt-4">
              <form className="row g-2 needs-validation" onSubmit={handleSubmit}>
                {/* Tipo de evento */}
                <div className="col-12 mt-0" style={{ padding: "0 50px" }}>
                  <label htmlFor="exampleFormControlSelect1" className="form-label">CATEGORIA EVENTO</label>
                  <select value={tipoEvento} className="form-control" id="exampleFormControlSelect1" onChange={(e) => { selectFuncion(e.target.value); }}>
                    <option value="">Seleccionar...</option>
                    <option value="destacado">Destacado</option>
                    <option value="noticia">Noticia</option>
                    <option value="cronograma">Cronograma</option>
                  </select>
                </div>
                {/* Nombre del evento */}
                <div className="col-12 mt-0 mt-4" style={{ padding: "0 50px" }}>
                  <label htmlFor="validationCustom01" className="form-label">TITULO DEL EVENTO</label>
                  <input type="text" className="form-control" placeholder='Titulo' id="validationCustom01" value={evento} onChange={(e) => setEvento(e.target.value)} />
                </div>
                <div className="col-12 mt-0 mt-4" id='div-lugar' style={{ padding: "0 50px" }}>
                  <label htmlFor="validationCustom01" className="form-label">LUGAR EVENTO</label>
                  <input type="text" className="form-control" placeholder='Lugar evento' id="validationCustom01" value={lugar} onChange={(e) => setLugar(e.target.value)} />
                </div>
                {/* Fecha y hora de inicio */}
                <div className="col-12 mt-4" style={{ padding: "0 50px 0 50px" }}>
                  <label htmlFor="validationCustom02" className="form-label">FECHA Y HORA DE INICIO</label>
                  <input type="datetime-local" className="form-control" min={fechaInicio} id="validationCustom02" value={fechaInicial} onChange={(e) => setFechaInicial(e.target.value)} />
                </div>
                {/* Fecha y hora final */}
                <div className="col-12 mt-4" style={{ padding: "0 50px 0 50px" }}>
                  <label htmlFor="validationCustom03" className="form-label">FECHA Y HORA FINAL</label>
                  <input type="datetime-local" className="form-control" min={fechaInicial} id="validationCustom03" value={fechaFinal} onChange={(e) => setFechaFinal(e.target.value)} />
                </div>
                <div id='div-img' className="col-12 mt-4" style={{ padding: "0 50px 0 50px" }}>
                  <label htmlFor="validationCustom01" className="form-label">ADJUNTAR IMAGEN</label>
                  <input type="file" className="form-control" placeholder='Ingresar descripcion' accept="image/*" id="validationCustom01" onChange={(e) => setImagenes(e.target.files[0])} />
                </div>
                <div id='div-pdf' className="col-12 mt-4" style={{ padding: "0 50px 0 50px" }}>
                  <label htmlFor="validationCustom01" className="form-label">ADJUNTAR PDF (Opcional)</label>
                  <input type="file" className="form-control" id="validationCustom01" accept="application/pdf" onChange={(e) => setPdf(e.target.files[0])} />
                </div>
                {/* Descripcion */}
                <div className="col-12 mt-4" style={{ padding: "0 50px 0 50px" }}>
                  <label htmlFor="validationCustom01" className="form-label">DESCRIPCION</label>
                  <textarea type="text" rows="3" className="form-control" value={descripcion} placeholder='Ingresar descripcion' id="validationCustom01" onChange={(e) => setDescripcion(e.target.value)} />
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
  );
};

export default CrearEvento;
