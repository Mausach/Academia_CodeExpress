import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

//import { starCrearEmpresa } from '../Helpers/starCrearEmpresa';
import { useNavigate } from 'react-router-dom';
import { crearCurso } from '../Helpers/StarCrearCurso';

export const ModalAltaUnidaAcademinca = ({ showModal, handleCloseModal,}) => {

  //state para curos/carrera
 const [curso, setCurso] = useState({
  nombre: "",
  Categoria: "Curso",
  programaDeEstudioPDF: null,
  modulos: [],
  
});

//captura el programa de estudio del curso/carrera
const handleFileChange = (e) => {
  const file = e.target.files[0];
  setCurso({
    ...curso,
    programaDeEstudioPDF: file,
  });
};

const navigate = useNavigate();//para navegar a o7ras ru7as


//controla los cambios que se hagan en los campos del formulario
const onInputChange = (e) => {
setCurso({
    ...curso,
    [e.target.name]: e.target.value,
});
}


//captura lo el formulario y verifica los campos lanzando una alerta con swal
const onSubmit = async (e) => {
  e.preventDefault();

  if (curso.nombre.trim() === "" || curso.programaDeEstudioPDF === null) {
    swal("ERROR", "Todos los campos son obligatorios", "error");
  } else {
    try {
      console.log("se puede crear en bd", curso);
      
      const formData = new FormData();
      formData.append('Nombre', curso.nombre);
      formData.append('Categoria', curso.Categoria);
      formData.append('programaDeEstudioPDF', curso.programaDeEstudioPDF);

      await crearCurso(formData);

      handleCloseModal();
    } catch (error) {
      console.error(error);
      swal("ERROR", "Error al enviar el formulario", "error");
    }
  }
}

// Agrega aquí el contenido de tu modal
  return (
    <div>
       <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        
        <Modal.Title>Formulario de Unidad Academica</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Ponemo el form a den7ro del modal */}
        <Form onSubmit={onSubmit}>      

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-dark'>
        
                        </Form.Label>
                    <Form.Control type="text" name='nombre' placeholder="Nombre" maxLength={33} value={curso.nombre} onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCategoria">
              <Form.Label>Categoría</Form.Label>
              <Form.Control type="text" name='Categoria' placeholder="Carrera" value={curso.Categoria} disabled />
            </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFile">
              <Form.Label>Programa de Estudio PDF</Form.Label>
              <Form.Control type="file" name="programaDeEstudioPDF" accept=".pdf" onChange={handleFileChange} />
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
