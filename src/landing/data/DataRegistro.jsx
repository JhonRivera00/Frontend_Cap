import axios from 'axios'
import Swal from 'sweetalert2'

export const registroAprendiz = async (nombres,apellidos,tipo,numeroDocumento,correo,numTelefono,contrasenaUno,contrasenaDos,genero,programa)=>{
    if(contrasenaUno != contrasenaDos){
        Swal.fire({
            icon: "error",
            title: "Contraseñas no coinciden"
          });

    }else{
        const contrasena = contrasenaUno;
        try {
         const response = await axios.post(`/registrarAprendiz`,{
             nombres,apellidos,tipo,numeroDocumento,genero,programa,correo,numTelefono,contrasena,
         })
         if(response.status === 200){
             Swal.fire({
                 title: response.data.messagge,
                 icon: "success",
                 timer:2000
               })
         }
     } catch (error) {
         if (error.response.status === 400){
             Swal.fire({
                 icon: "error",
                 title: error.response.data
               });
         }
     }
    }

    

}
export const registroProfesional = async (formData) =>{
        try {
         const response = await axios.post(`/registrarProfesional`, formData)
         if(response.status === 200){
             Swal.fire({
                 title: response.data.messagge,
                 icon: "success",
                 timer:2000
               })
               .then((
                location.reload()
               ))
         }
     } catch (error) {
         if (error.response.status === 400 || 500){
             Swal.fire({
                 icon: "error",
                 title: error.response.data
               });
         }
     }
    }

