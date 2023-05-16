
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { datosCronograma } from '../../profesionales/data/DataSolicitudes';
import jwt_decode from 'jwt-decode';
import moment from 'moment'
import { horaLocal } from '../../assets/js/FormatoHora';



// Pasar a español
const localizer = momentLocalizer(moment);

const fechaCrono = () => {

  const horaFor = horaLocal(new Date())

  const fechaMoment = moment({ hour: horaFor });
  const anio = fechaMoment.year();
  const mes = fechaMoment.month() + 1;
  const dia = fechaMoment.date();
  const hora = fechaMoment.hours();
  const min = fechaMoment.minutes();
  const fechaFormateada = new Date(anio, mes, dia, hora, min);

  return fechaFormateada;

}

const CalendarioEventos = () => {

  const [allEvents, setAllEvents] = useState([]);
  console.log(allEvents)
  const [solicitud, setSolicitud] = useState([]);
  const token = localStorage.getItem('Token-Profesional');
  const { id } = jwt_decode(token);

  useEffect(() => {
    const fetchData = async () => {
      const data = await datosCronograma(id);
      console.log(data)
      setSolicitud(data);
    };

    fetchData();
  }, [id]);

  useEffect(() => {

    const calendarioData = solicitud.map((s) => {
      const start = fechaCrono(s.fechaAplazada);
      const title = s.titulo;
      const end = new Date(start.getTime());
      end.setDate(end.getDate() + 2);

      return { title, start, end };
    });

    setAllEvents(calendarioData);
  }, [solicitud]);


  return (
    <div className='container'>
      <div className='row w-100 text-center mt-4'>
        <h1>Calendario de eventos</h1>
        <h3>Nuevo evento</h3>

      </div>

      <Calendar
        className='mt-5'
        localizer={localizer}
        events={allEvents}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500 }}
        messages={{
          allDay: 'Todo el día',
          previous: 'Anterior',
          next: 'Siguiente',
          today: 'Hoy',
          month: 'Mes',
          week: 'Semana',
          day: 'Día',
          agenda: 'Agenda',
          date: 'Fecha',
          time: 'Hora',
          event: 'Evento',
          January: 'Enero',
          noEventsInRange: 'No hay eventos en este rango',
          showMore: (total) => `+ Ver más (${total})`,
        }}
      />
    </div>
  );
};

export default CalendarioEventos;