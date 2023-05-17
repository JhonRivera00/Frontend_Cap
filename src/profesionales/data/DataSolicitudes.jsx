import axios from 'axios'

export const datosCronograma = async (id) => {
    try {
        const { data } = await axios.get(`/notificaciones/${id}`);
        return data;
    } catch (error) {
        console.log(error.response.data)
    }
}
