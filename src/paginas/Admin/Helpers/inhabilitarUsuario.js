import swal from 'sweetalert';
import authApi from '../../../Api/authApi';


//Alerta Inhabilitar
export const AlertaInhabilitar = (_id, nombres, email,navigate,setNuevoUsuarioCargado) => {
    swal(
        {
            title: "¿Estas seguro de inhabilitar a este usuario?",
            text: nombres + '  -  ' + email,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                deshabilitarUsuarioClick(_id, navigate);
                swal("El usuario elegido fue inhabilitado", {
                    icon: "success",
                });
                setNuevoUsuarioCargado(true)
            } else {
                swal("Solicitud cancelada");
            }
        });
}

//metodo para dehabilitar a un usuario
const deshabilitarUsuarioClick = async (_id, navigate) => {
    try {
        const resp = await authApi.put('/admin/Deshabilitar', {
            _id,
        });
        console.log(resp);
    } catch (error) {
        console.log(error.response.data.msg);
        swal("ERROR", error.response.data.msg, "error");
        if (error.response.status === 401) {
            localStorage.removeItem('token');
            navigate('/login');
        }
    }
};