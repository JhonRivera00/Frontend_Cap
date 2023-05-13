import axios from 'axios'
import jwt_decode from 'jwt-decode'
import Swal from 'sweetalert2'

export const dataSolicitudCharla = async (fecha, profesional, motivo) => {
    try {
      const URL = "https://backend-cap-273v.vercel.app/crearSolicitud";
      
      const token = localStorage.getItem("Token-Aprendiz");
      const decodedToken = jwt_decode(token);
      const nombre = decodedToken.id;
   
    
    const datosSolicitud = {
      id_aprendiz:nombre,
      fechaSolicitada:fecha,
      id_profesional:profesional,
      motivo:motivo
    };
    const response = await axios.post(URL, datosSolicitud);
    
    if (response.status === 200) {
      
      Swal.fire({
        title: response.data,
        icon: "success",
        timer:2000
      }).then((
        location.reload()
      ))
    }
    } catch (error) {
      console.log(error)
      if (error.response.status === 400){
        Swal.fire({
            icon: "error",
            title: error.response.data
          });
    }
    }
    
  }

 