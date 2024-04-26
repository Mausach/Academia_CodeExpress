import swal from 'sweetalert';
import authApi from '../../../Api/authApi';


export const crearCurso = async (formData) => {
    try {
      const resp = await authApi.post('/admin/newUA', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (resp.status === 201) {
        swal("FELICIDADES", "Has creado un curso con éxito", "success");
      } else {
        const mensajeError = resp.data?.msg || "Error desconocido al crear el curso";
        swal("ERROR", mensajeError, "error");
      }
    } catch (error) {
      console.log(error.response.data);
      swal("ERROR", error.response.data.mensaje, "error");
    }
  };