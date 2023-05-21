import axios from 'axios'
import Swal from 'sweetalert2'

export const registroAprendiz = async (formDataApren) => {

    try {
        const loading = Swal.fire({
            title: 'Registrando aprendiz',
            text: 'Espere un momento por favor...',
            allowOutsideClick: false,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });
        const response = await axios.post('/registrarAprendiz', formDataApren)

        loading.close()

        
            Swal.fire({
                title: response.data.messagge,
                icon: "success",
                timer: 2000
            })
                .then((
                    location.reload()
                ))
        

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
        const loading = Swal.fire({
            title: 'Registrando profesional',
            text: 'Espere un momento por favor...',
            allowOutsideClick: false,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });
        const response = await axios.post(`/registrarProfesional`, formData)

        loading.close()
        
            Swal.fire({
                title: response.data.messagge,
                icon: "success",
                timer: 2000
            })
                .then((
                    location.reload()
                ))
        
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
        const loading = Swal.fire({
            title: 'Actualizando datos',
            text: 'Espere un momento por favor...',
            allowOutsideClick: false,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });
        const response = await axios.put(`/actualizarAprendiz/${id}`, data);

        loading.close()
        
            Swal.fire({
                title: response.data,
                icon: "success",
                timer: 2000
            })
        
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: error.response.data
        });
        console.log(error)
    }
} 

