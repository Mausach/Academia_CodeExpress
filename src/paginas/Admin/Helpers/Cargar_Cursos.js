import swal from 'sweetalert';
import authApi from '../../../Api/authApi';

// Cargar unidades académicas desde la base de datos
export const cargarCursos = async (setCargarUnidadesAcademicas, navigate) => {
    try {
        const resp = await authApi.get('/admin/unidadesAcademicas'); 

        setCargarUnidadesAcademicas(resp.data.unidadesAcademicas);
    } catch (error) {
        console.log(error.response.data.msg);
        swal("ERROR", error.response.data.msg, "error");
        console.log(error);
        if (error.response.status === 401) {
            localStorage.removeItem('token');
            navigate('/login');
        } else if (error.response.status === 404) {
            navigate('/login');
        }
    }
};