import axios from 'axios'
import Swal from 'sweetalert2'

export const registroAprendiz = async (formDataApren) => {

    try {
        const response = await axios.post('/registrarAprendiz', formDataApren)
        console.log(response);
        if (response.status === 200) {
            Swal.fire({
                title: response.data.messagge,
                icon: "success",
                timer: 2000
            })
                .then((
                    location.reload()
                ))
        }

    } catch (error) {
        if (error.response.status  === 400 || 500) {
            Swal.fire({
                icon: "error",
                title: error.response.data
            });
        };

    }

}

export const registroProfesional = async (formData) => {
    try {
        const response = await axios.post(`/registrarProfesional`, formData)
        if (response.status === 200) {
            Swal.fire({
                title: response.data.messagge,
                icon: "success",
                timer: 2000
            })
                .then((
                    location.reload()
                ))
        }
    } catch (error) {
        if (error.response.status === 400 || error.response.status === 500) {
            Swal.fire({
                icon: "error",
                title: error.response.data
            });
        }
    }
}


export const acualizarAprendiz = async (id, data) => {
    try {
        const response = await axios.put(`/actualizarAprendiz/${id}`, data);
        if(response.status === 200){
            Swal.fire({
                title: response.data,
                icon: "success",
                timer: 2000
            })
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: error.response.data
        });
        console.log(error)
    }
} 

