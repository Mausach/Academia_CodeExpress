import swal from 'sweetalert';
import authApi from '../../../Api/authApi';


export const starLogin = async (email, password, navigate) => {
  try {
    const resp = await authApi.post('/auth/login', {
      email,
      password,
    });
    localStorage.setItem('token', resp.data.token);

    if (resp.data.rol === 'Admin' || 'Fundador') {
      navigate("/admin", { state: resp.data });
      console.log(resp.data.rol)
      console.log(resp.data)

    } else {

      console.log(resp.data.rol)
      navigate('/home', { state: resp.data });
      
    }

  } catch (error) {
    console.log(error);
    swal("ERROR", error.response.data.msg, "error");
  }
}