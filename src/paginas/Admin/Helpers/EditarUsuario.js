import swal from 'sweetalert';
import authApi from '../../../Api/authApi';


//Alerta Editar
export const AlertaEditar = (_id,nombres, apellido, dni, fecha_nacimiento, genero, telefono, provincia, rol, email,setNuevoUsuarioCargado) => {
    swal(
        {
            title: "¿Estas seguro de guardar los cambios?",
            text: '-',
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                editarUsuarioDB(_id,nombres, apellido, dni, fecha_nacimiento, genero, telefono, provincia, rol, email, password);
                swal("Se guardaron los cambios correctamente", {

                    icon: "success",
                });
                setNuevoUsuarioCargado(true)
            } else {
                swal("Solicitud cancelada");
            }
        });

}

//metodo de modificar menu (falta hacer el backend de esto)
const editarUsuarioDB = async (_id,nombres, apellido, dni, fecha_nacimiento, genero, telefono, provincia, rol, email, password) => {
    try {
        const resp = await authApi.put('/admin/edit', {
            _id,nombres, apellido, dni, fecha_nacimiento, genero, telefono, provincia, rol, email, password
        });

        console.log(resp);
    } catch (error) {
        console.log(error.response.data.msg);
        swal("ERROR", error.response.data.msg, "error");
    }
};