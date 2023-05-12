import Imgnav from "../../assets/img/imgnav.jpg";
import { datosCronograma } from "../data/DataAdmin";
import { useState,useEffect} from "react";

const Cronograma = () => {

const [dataCronograma, setDataCronograma] = useState([]);
useEffect(() => {
    const fetchData = async () => {
        const data = await datosCronograma();
        setDataCronograma(data);
    }
    fetchData()
},[]);
console.log(dataCronograma)
  return (
    <>
        <div className="col">
            <div className="position-relative d-inline-block w-100">
              <img src={Imgnav} className="w-100 img-titulo-fondo" alt="" />
              <h1 className="text-titulo position-absolute text-center  w-100">
                CRONOGRAMA
                <div className=" d-flex justify-content-around pt-2">
                  <div className="bg-green p-1 w-25"></div>
                  <div className="bg-green p-1 w-25"></div>
                </div>
              </h1>
            </div>

            <div className="container">
              <div className="fs-1 text-center pt-3 fw-bold">
                Eventos Disponibles
              </div>

              <div className="row card-group  d-flex flex-wrap justify-content-around">
                {dataCronograma.map((data)=>(
                  <div className="card mx-sm-5 my-sm-5 border rounded-0 p-0 " id="cardd">
                  <img src={data.imagen.urlImg} className="card-img-top w-100 " alt="futbol" />
                  <div className="card-body">
                    <h5 className="card-title text-center">{data.titulo}</h5>
                    <p className="card-text ">{data.descripcion}
                    </p>
                    <div> Fecha y Hora de Inicio </div>
                    <input
                      className="form-control"
                      type="datetime-local"
                      placeholder="selecciones fecha"
                      required
                    />
                    <br />
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        checked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckChecked"
                      >
                        Evento Activo
                      </label>
                    </div>

                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      <label className="form-check-label"  htmlFor="flexSwitchCheckDefault" >
                        Desactivar Evento </label>
                    </div>
                  </div>
                </div>
                ))
              
                }
              </div>
            </div>
        </div>
    </>
  );
};

export default Cronograma;
