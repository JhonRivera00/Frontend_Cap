import axios from 'axios'
import jwt_decode from 'jwt-decode'
import Swal from 'sweetalert2'


export const datosInicio = async () => {
  try {
    const { data } = await axios.get("/verEventos")
    const destacados = data.filter(data => data.tipo === "destacado")
    return destacados

  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data
      });
    }
  }
}

export const datosCronograma = async () => {
  try {
    const { data } = await axios.get("/verEventos")
    const destacados = data.filter(data => data.tipo === "destacado")
    return destacados

  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data
      });
    }
  }
}

export const dataVerCharlas = async () => {
  try {
    const tokenAdmin = localStorage.getItem("Token-Administrador")
    const { id } = jwt_decode(tokenAdmin)
    const { data } = await axios.get(`/verSolicitudes/${id}`)
    return data;
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data
      });
    }
  }
}

export const opProfesionales = async () => {
  try {
    const { data } = await axios.get("/verUsuariosProfesionales")
    return data;
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data
      });
    }
  }
}

export const aplazarCharlaData = async (id, motivo, nuevaFecha, nuevoProfesional) => {


  try {
    const response = await axios.put(`/solicitudesAplazar/${id}`, { motivo, nuevaFecha, nuevoProfesional })
    if (response.status === 200) {
      Swal.fire({
        title: response.data,
        icon: "success",
        timer: 2000
      })
        .then((
          location.reload()
        ))
    }

  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data
      });
    }
  }
}

export const solicitudesprofesional = async () => {
  try {

    const tokenAdmin = localStorage.getItem("Token-Administrador")
    const token = {
      headers: {
        'acceso-token': tokenAdmin
      }
    }
    const { data } = await axios.get("/solicitudesProfesional", token);
    return data
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data
      });
    }
  }
}
export const charlaAceptada = async (id) => {
  try {
    const response = await axios.put(`/solicitudesAceptar/${id}`)
    if (response.status === 200) {
      Swal.fire({
        title: response.data,
        icon: "success",
        timer: 2000
      })
        .then((
          location.reload()
        ))
    }
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data
      });
    }
  }

}
export const aceptarProfesional = async (id)=>{
  try {
    const tokenAdmin = localStorage.getItem("Token-Administrador")
    const headers = {
        'acceso-token': tokenAdmin
      }
    
    console.log(headers);
    const response = await axios.put(`/aceptarProfesional/${id}`,null,{headers})
    if (response.status === 200) {
      Swal.fire({
        title: response.data,
        icon: "success",
        timer: 2000
      })
        .then((
          location.reload()
        ))
    }
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data
      });
    }
  }
}