import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { datosCronograma } from '../../profesionales/data/DataSolicitudes';
import jwt_decode from 'jwt-decode';
import moment from 'moment';
import { convertirFecha } from '../../assets/js/FormatoEventos';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// Pasar a español
const localizer = momentLocalizer(moment);

const CalendarioEventos = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [solicitud, setSolicitud] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
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
      const start = moment(convertirFecha(s.fechaAplazada), 'YYYY-MM-DDTHH:mm:ss').toDate();
      const title = s.titulo;
      const end = moment(start).add(2, 'hours').toDate();

      return { title, start, end };
    });

    setAllEvents(calendarioData);
  }, [solicitud]);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };


  const handleModalClose = () => {
    setShowModal(false);
  };

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
        style={{ height: 500 }}
        onSelectEvent={handleEventClick}
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
        }} />

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles del evento</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          {selectedEvent && solicitud.find((s) => s.titulo === selectedEvent.title) && (
            <div>
              <p>Título: {selectedEvent.title}</p>
              <p>Fecha: {solicitud.find((s) => s.titulo === selectedEvent.title).fechaAplazada}</p>
              <p>Descripción: {solicitud.find((s) => s.titulo === selectedEvent.title).contenido}</p>
              {/* ...otros datos relevantes */}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

    </div>


  );
};



export default CalendarioEventos;



/*
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const eventos = [
  {
    id: 1,
    title: 'Evento 1',
    start: new Date(2023, 4, 17, 9, 0), // Fecha y hora de inicio
    end: new Date(2023, 4, 17, 10, 0), // Fecha y hora de finalización
  },
  {
    id: 2,
    title: 'Evento 2',
    start: new Date(2023, 4, 19, 14, 30), // Fecha y hora de inicio
    end: new Date(2023, 4, 19, 16, 0), // Fecha y hora de finalización
  },
];

function App() {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={eventos}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
}

export default App;
*/