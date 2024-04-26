import swal from 'sweetalert';
import authApi from '../../../Api/authApi';


export const starRegister = async (nombres, apellido, dni, fecha_nacimiento, genero, telefono, provincia, rol, email, password,setNuevoUsuarioCargado) => {
    try {
        const resp = await authApi.post('/admin/new', {
            nombres,
            apellido,
            dni,
            fecha_nacimiento,
            genero,
            telefono,
            provincia,
            rol,
            email,
            password,
        });

        swal("FELICIDADES"," Usted ah Registrado un Usuario con Exito","success");
        setNuevoUsuarioCargado(true)

    } catch (error) {
        console.log(error.response.data.msg);
        swal("ERROR", error.response.data.msg, "error");
    }

}