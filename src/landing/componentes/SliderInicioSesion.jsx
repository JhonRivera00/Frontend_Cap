import React, { useEffect, useState } from "react";
import axios from 'axios';

const Slider = () => {
  const [dataInicio, setDataInicio] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const URL = "/verEventos";
      const { data } = await axios.get(URL);
      // Filtrar los eventos que tengan el tipo "destacado"
      const destacados = data.filter(evento => evento.tipo === "destacado");

      setDataInicio(destacados);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {dataInicio.map((data, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
              aria-label={`Slide ${i}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {dataInicio.map((data, i) => (
            <div
              className={i === 0 ? "carousel-item active" : "carousel-item"}
              key={i}
            >
              <img
                src={data.imagen.urlImg}
                className="d-block w-100 img-slider mx-auto y-auto   mb-5"
                alt="Slide"
              />
              <div className="carousel-caption d-none d-md-block bg-color-blue w-75 mx-auto">
                <h5 className="fs-2">{data.titulo}</h5>
                <p className="fs-5">{data.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
