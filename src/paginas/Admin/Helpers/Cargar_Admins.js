import swal from 'sweetalert';
import authApi from '../../../Api/authApi';

//cargar Administradores desde DB
export const cargar_Admins = async (setCargarAdmins,navigate) => {
    try {
        const resp = await authApi.get('/admin/admins');

        setCargarAdmins(resp.data.Admins);
    } catch (error) {
        console.log(error.response.data.msg);
        swal("ERROR", error.response.data.msg, "error");
        console.log(error);
        if (error.response.status === 401) {
            localStorage.removeItem('token');
            navigate('/login');
        }else if(error.response.status === 404){
            navigate('/login')
        }
    }
};