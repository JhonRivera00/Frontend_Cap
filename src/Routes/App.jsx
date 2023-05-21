import { Routes, Route } from "react-router-dom";
//Landing Aprendiz
import Navbar from "../landing/componentes/Navbar";
import Inicio from "../landing/pages/Inicio";
import Charla from "../landing/pages/SolicitudCharla";
import Contactanos from "../landing/pages/Contactanos";
import Cronograma from "../landing/pages/Cronograma";
import Conocenos from "../landing/pages/Cononcenos";
//Profesional
import NavbarProfesional from "../profesionales/componentes/Navbar";
import InicioProfesional from "../profesionales/pages/Inicio";
import CharlaProfesional from "../profesionales/pages/SolicitudCharla";
import ContactanosProfesional from "../profesionales/pages/Contactanos";
import CronogramaProfesional from "../profesionales/pages/Cronograma";
import ConocenosProfesional from "../profesionales/pages/Cononcenos";
import EventosProfesional from '../profesionales/pages/Eventos';

//Administrador
import Menulateral from "../administrador/componentes/MenuLateral"
import InicioAdmin from '../administrador/pages/ListaInicio'
import Admincharlas from '../administrador/pages/SolicitudesCharla'
import Adminsolicitudes from '../administrador/pages/ListaUsuarios'
import Adminusuarios from '../administrador/pages/Pqrs'
import Admincronograma from '../administrador/pages/ListaCronograma'
import Adminprofesional from '../administrador/pages/SolicitudesProfesional'
import { ProtectRoutesAdmin,ProtectRoutesProfesional } from './ProtectRoutes'

import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"


const App = () => {
  return (  
    <div>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Inicio />} />
          <Route path="/conocenos" element={<Conocenos />} />
          <Route path="/charla" element={<Charla />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/cronograma" element={<Cronograma />} />
        </Route>

        <Route element={<ProtectRoutesProfesional/>}>

          <Route path="/profesional" element={<NavbarProfesional />} >
          <Route index element={<InicioProfesional />} />
          <Route path="/profesional/conocenos" element={<ConocenosProfesional />} />
          <Route path="/profesional/charla" element={<CharlaProfesional />} />
          <Route path="/profesional/evento" element={<EventosProfesional />} />
          <Route path="/profesional/contactanos" element={<ContactanosProfesional />} />
          <Route path="/profesional/cronograma" element={<CronogramaProfesional />} />
          </Route>
        </Route>

        
        <Route element={<ProtectRoutesAdmin />}>
          <Route path="/admin" element={<Menulateral />}>
            <Route index element={<InicioAdmin/>} />
            <Route path="/admin/charlas" element={<Admincharlas />} />
            <Route path="/admin/solicitudes" element={<Adminsolicitudes />} />
            <Route path="/admin/usuarios" element={<Adminusuarios />} />
            <Route path="/admin/cronograma" element={<Admincronograma />} />
            <Route path="/admin/profesional" element={<Adminprofesional />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
