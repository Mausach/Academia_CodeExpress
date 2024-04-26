import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

//import { starCrearEmpresa } from '../Helpers/starCrearEmpresa';
import { useNavigate } from 'react-router-dom';
import { starRegister } from '../Helpers/StarRegister';
import { AlertaEditar } from '../Helpers/EditarUsuario';


export const ModalEditarUsuario = ({ showModal,handleCloseModal,UsuarioEditar,setUsuarioEditar,setNuevoUsuarioCargado}) => {



const handleSelectChange = (e) => {
  const selectedGenero = e.target.value;

  setUsuarioEditar((prevUsuario) => ({
    ...prevUsuario,
    genero: selectedGenero,
  }));

  // También puedes imprimir en la consola para verificar el cambio
  console.log(`Selected Genero: ${selectedGenero}`);
};


const handleSelectChangeRol = (e) => {
  const selectedRol = e.target.value;

  setUsuarioEditar((prevUsuario) => ({
    ...prevUsuario,
    rol: selectedRol,
  }));

  // También puedes imprimir en la consola para verificar el cambio
  console.log(`Selected Rol: ${selectedRol}`);
};


//controla los cambios que se hagan en los campos del formulario
const onChangeEditar = (e) => {
setUsuarioEditar({
    ...UsuarioEditar,
    [e.target.name]: e.target.value,
});
}


//captura lo el formulario y verifica los campos lanzando una alerta con swal
const onSubmit = (e) => {//solo con7rolamos los campos que de momen7o 7enemos en el backend de empresa que no son 7odos los del formulario
e.preventDefault();

const { _id,nombres, apellido, dni, fecha_nacimiento, genero, telefono, provincia, rol, email } = UsuarioEditar;

if (
  
  nombres.trim() === '' ||
  apellido.trim() === '' ||
  dni.trim() === '' ||
  fecha_nacimiento.trim() === '' ||
  genero.trim() === '' ||
  telefono.trim() === '' ||
  provincia.trim() === '' ||
  rol.trim() === '' ||
  email.trim() === '' 
) {
  swal("ERROR", "Todos los campos son obligatorios", "error");
  console.log(usuario.genero, usuario.rol)
} else {
  // Realiza la llamada al método que valida el CUIT aquí
  console.log(UsuarioEditar)
  handleCloseModal()

  AlertaEditar(_id,nombres, apellido, dni, fecha_nacimiento, genero, telefono, provincia, rol, email, setNuevoUsuarioCargado)

  

  
}
}


  return (
    <div>

<Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        
        <Modal.Title>Datos del Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Ponemo el form a den7ro del modal */}
        <Form onSubmit={onSubmit}>      

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-dark'>
        
                        </Form.Label>
                    <Form.Control type="text" name='nombres' placeholder="Nombres" maxLength={33} value={UsuarioEditar.nombres} onChange={onChangeEditar} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        
                        </Form.Label>
                    <Form.Control type="text" name='apellido' placeholder="Apellido" minLength={3} maxLength={20} value={UsuarioEditar.apellido} onChange={onChangeEditar} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        
                        </Form.Label>
                    <Form.Control type="text" name='dni' placeholder="DNI" minLength={8} maxLength={8} value={UsuarioEditar.dni} onChange={onChangeEditar} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        
                        </Form.Label>
                    <Form.Control type="text" name='fecha_nacimiento' placeholder="fecha_nacimiento" minLength={5} maxLength={20} value={UsuarioEditar.fecha_nacimiento} onChange={onChangeEditar} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                
                <Form.Label className='text-dark'>
                        Genero
                        </Form.Label>
					<select value={UsuarioEditar.genero} onChange={handleSelectChange}
						className='m-3 p-1 rounded'>
						<option value="Masculino">Masc</option>
						<option value="Femenino">Fem</option>
						<option value="Otros">Ramiro</option>
					</select>
				
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        
                        </Form.Label>
                    <Form.Control type="text" name='telefono' placeholder="N° de telefono" minLength={5} maxLength={20} value={UsuarioEditar.telefono} onChange={onChangeEditar} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                        
                        </Form.Label>
                    <Form.Control type="text" name='provincia' placeholder="Provincia" minLength={8} maxLength={30} value={UsuarioEditar.provincia} onChange={onChangeEditar} />
                </Form.Group>
                

                <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Label className='text-dark'>
                        Rol o Ocupacion
                        </Form.Label>
					<select value={UsuarioEditar.rol} onChange={handleSelectChangeRol}
						className='m-3 p-1 rounded'>

                <option value="Alumno">Alumno</option>
                <option value="Profesor">Docente</option>
                <option value="Admin">Adminitrador</option>
            			
					</select>
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark'>
                       
                        </Form.Label>
                    <Form.Control type="email" name='email' placeholder="email" maxLength={30} value={UsuarioEditar.email} onChange={onChangeEditar} />
                </Form.Group>


            </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary"  onClick={handleCloseModal}>
          Cerrar
        </Button>
        <Button variant="primary"  onClick={onSubmit}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
        
    </div>
  )
}
