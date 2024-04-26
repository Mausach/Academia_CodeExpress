import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

//import { starCrearEmpresa } from '../Helpers/starCrearEmpresa';
import { useNavigate } from 'react-router-dom';
import { starRegister } from '../Helpers/StarRegister';


export const AltasModal = ({ showModal,setNuevoUsuarioCargado, handleCloseModal, rolus}) => {

 //state para usuario
 const [usuario, setUsuario] = useState({
  nombres: "",
  apellido: "",
  dni: "",
  fecha_nacimiento: "",
  genero: "",
  telefono: "",
  provincia: "",
  rol: "",
  email: "",
  password: "",
  
});

//estado para select de generos
const [genero, setGenero] = useState('Masculino');

const handleSelectChange = (e) => {
  setGenero(e.target.value);
};

//estado para select de Roles
const [rol, setRol] = useState('Alumnos');

const handleSelectChangeRol = (e) => {
  setRol(e.target.value);
};

const navigate = useNavigate();//para navegar a o7ras ru7as


//controla los cambios que se hagan en los campos del formulario
const onInputChange = (e) => {
setUsuario({
    ...usuario,
    [e.target.name]: e.target.value,
});
}


//captura lo el formulario y verifica los campos lanzando una alerta con swal
const onSubmit = (e) => {//solo con7rolamos los campos que de momen7o 7enemos en el backend de empresa que no son 7odos los del formulario
e.preventDefault();

if (
  
  usuario.nombres.trim() === "" ||
  usuario.apellido.trim() === "" ||
  usuario.dni.trim() === "" ||
  usuario.fecha_nacimiento.trim() === "" ||
  genero.trim() === "" ||
  usuario.telefono.trim() === "" ||
  usuario.provincia.trim() === "" ||
  rol.trim() === "" ||
  usuario.email.trim() === "" ||
  usuario.password.trim() === ""
) {
  swal("ERROR", "Todos los campos son obligatorios", "error");
  console.log(usuario.genero, usuario.rol)
} else {
  // Realiza la llamada al método que valida el CUIT aquí
  console.log(rol)
  
  starRegister(
    usuario.nombres,
    usuario.apellido,
    usuario.dni,
    usuario.fecha_nacimiento,
    genero,
    usuario.telefono,
    usuario.provincia,
    rol,
    usuario.email,
    usuario.password,
    setNuevoUsuarioCargado
  );

  handleCloseModal()

  
}
}

// Agrega aquí el contenido de tu modal


  return (
    <div>

<Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        
        <Modal.Title>Formulario de Registro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Ponemo el form a den7ro del modal */}
        <Form onSubmit={onSubmit}>      

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-dark'>
        
                        </Form.Label>
                    <Form.Control type="text" name='nombres' placeholder="Nombres" maxLength={33} value={usuario.nombres} onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        
                        </Form.Label>
                    <Form.Control type="text" name='apellido' placeholder="Apellido" minLength={3} maxLength={20} value={usuario.apellido} onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        
                        </Form.Label>
                    <Form.Control type="text" name='dni' placeholder="DNI" minLength={8} maxLength={8} value={usuario.dni} onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        
                        </Form.Label>
                    <Form.Control type="text" name='fecha_nacimiento' placeholder="fecha_nacimiento" minLength={5} maxLength={20} value={usuario.fecha_nacimiento} onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                
                <Form.Label className='text-dark'>
                        Genero
                        </Form.Label>
					<select value={genero} onChange={handleSelectChange}
						className='m-3 p-1 rounded'>
						<option value="Masculino">Masc</option>
						<option value="Femenino">Fem</option>
						<option value="Otros">Ramiro</option>
					</select>
				
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        
                        </Form.Label>
                    <Form.Control type="text" name='telefono' placeholder="N° de telefono" minLength={5} maxLength={20} value={usuario.telefono} onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        
                        </Form.Label>
                    <Form.Control type="text" name='provincia' placeholder="Provincia" minLength={8} maxLength={30} value={usuario.provincia} onChange={onInputChange} />
                </Form.Group>
                

                <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Label className='text-dark'>
                        Rol o Ocupacion
                        </Form.Label>
					<select value={rol} onChange={handleSelectChangeRol}
						className='m-3 p-1 rounded'>

            {rolus === 'Fundador' ? (
            <>
                <option value="Alumno">Alumno</option>
                <option value="Profesor">Docente</option>
                <option value="Admin">Adminitrador</option>
            </>
        ) : (
            <>
                <option value="Alumno">Alumno</option>
                <option value="Profesor">Docente</option>
                
            </>
        )}

						
					</select>
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                       
                        </Form.Label>
                    <Form.Control type="email" name='email' placeholder="email" maxLength={30} value={usuario.email} onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                       
                        </Form.Label>
                    <Form.Control type="text" name='password' placeholder="Contraseña asignada" maxLength={30} value={usuario.password} onChange={onInputChange} />
                </Form.Group>

            </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary"  onClick={handleCloseModal}>
          Cerrar
        </Button>
        <Button variant="primary"  onClick={onSubmit}>
          Registrar
        </Button>
      </Modal.Footer>
    </Modal>
        
    </div>
  )
}
