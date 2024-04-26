import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { NavBar } from '../../ComponentesGenerales/NavBar';
import { useState } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { cargar_Admins } from './Helpers/Cargar_Admins';
import { TablaAdmins } from './Componentes/TablaAdmins';
import'./css/admins.css'
import { cargar_Docentes } from './Helpers/Cargar_Docentes';
import { TablaDocentes } from './Componentes/TablaDocentes';
import { CardsComisiones } from './Componentes/CardsComisiones';
import { CardsCurso } from './Componentes/CardsCurso';
import { CardsCarrera } from './Componentes/CardsCarrera';
import { ModalAltaUnidaAcademinca } from './Componentes/ModalAltaUnidaAcademinca';
import { cargarCursos } from './Helpers/Cargar_Cursos';

export const Admin = () => {

  //para animaciion de carga al principio de cada screen
	const [loading, setLoading] = useState(true);

  

    const location = useLocation();
	const usuario = location.state;//recibe el onjeto

	 //estado para controlar si se carga una nuevo usuario
	 const [nuevoUsuarioCargado, setNuevoUsuarioCargado] = useState(false);

  //estado para opcion desplegada de la lista
	const [opcionSeleccionada, setOpcionSeleccionada] = useState('Comisiones');

  //estado para guardar los Alumnos traidos del backend
	const [cargarAlumnos, setCargarAlumnos] = useState([]);

	//estado para guardar los Profesores traidos del backend
	const [cargarProfesores, setCargarProfesores] = useState([]);

	//estado para guardar los Administradores traidos del backend
	const [cargarAdmins, setCargarAdmins] = useState([]);

	//estado para guardar los cursos/carreras (Unidad Academica) traidos del backend
	const [cargarUA, setCargarUA] = useState([]);

	//para modal de Editar Usuario
	const [showModal, setShowModal] = useState(false);

	//para abrir los modla de crear
	const handleCloseModal = () => setShowModal(false);
	const handleShowModal = () => setShowModal(true);

  const cambiarOpcion = (nuevaOpcion) => {
    setOpcionSeleccionada(nuevaOpcion);
  };

  const navigate = useNavigate();

  const CargarTabla = () => {

	console.log("cargarAdmins:", cargarAdmins);

		if (opcionSeleccionada === "Admin") {//opcion solo para fundadores
			
			if (loading) {
				return (
					<div className="d-flex align-items-center justify-content-center customHeigth">
						<Spinner animation="border" role="status" variant="light" />
						<span className="visually-hidden">Loading...</span>
					</div>
				)
			} else {
				return (
					<div>
						<TablaAdmins cargarAdmins={cargarAdmins} navigate={navigate} setNuevoUsuarioCargado={setNuevoUsuarioCargado}/>
						

					</div>
				);
			}
		} else if (opcionSeleccionada == "Profesor") {
			
			if (loading) {
				return (
					<div className="d-flex align-items-center justify-content-center customHeigth">
						<Spinner animation="border" role="status" variant="light" />
						<span className="visually-hidden">Loading...</span>
					</div>
				)
			} else {
				return (
					<div>
            <TablaDocentes cargarProfesores={cargarProfesores} navigate={navigate} setNuevoUsuarioCargado={setNuevoUsuarioCargado}/>
						

					</div>
				);
			}
		}

		else if (opcionSeleccionada == "Comiciones") {
			
			if (loading) {
				return (
					<div className="d-flex align-items-center justify-content-center customHeigth">
						<Spinner animation="border" role="status" variant="light" />
						<span className="visually-hidden">Loading...</span>
					</div>
				)
			} else {
				return (
					<div>
						<Button variant="outline-light" className="" onClick={handleShowModal}>
                             Crear +
                    </Button>

					<CardsComisiones/>
						

					</div>
				);
			}
		}

		else if (opcionSeleccionada == "Cursos") {
			
			if (loading) {
				return (
					<div className="d-flex align-items-center justify-content-center customHeigth">
						<Spinner animation="border" role="status" variant="light" />
						<span className="visually-hidden">Loading...</span>
					</div>
				)
			} else {
				return (
					<div>
						<Button variant="outline-light" className="" onClick={handleShowModal}>
                             Crear +
                    </Button>

					<div>
                        <Container >
                            <Row>
                                {cargarUA.map((curso) => {
                                    
                                        return <Col key={curso._id} >
											<CardsCurso curso={curso} navigate={navigate}/>
                                         </Col>
                                    
                                })}
                            </Row>
                        </Container>
                    </div>

					
						<ModalAltaUnidaAcademinca showModal={showModal} handleCloseModal={handleCloseModal} />

					</div>
				);
			}
		}

		else if (opcionSeleccionada == "Carreras") {
			
			if (loading) {
				return (
					<div className="d-flex align-items-center justify-content-center customHeigth">
						<Spinner animation="border" role="status" variant="light" />
						<span className="visually-hidden">Loading...</span>
					</div>
				)
			} else {
				return (
					<div>
						<Button variant="outline-light" className="" onClick={handleShowModal}>
                             Crear +
                    </Button>

					<CardsCarrera/>
						

					</div>
				);
			}
		}
    {/*
  else if (opcionSeleccionada == "Comiciones") {
			
			if (loading) {
				return (
					<div className="d-flex align-items-center justify-content-center customHeigth">
						<Spinner animation="border" role="status" variant="light" />
						<span className="visually-hidden">Loading...</span>
					</div>
				)
			} else {
				return (
					<div>
						<TablaPedidos cargarPedidos={cargarPedidos} navigate={navigate} />
					</div>
				);
			}
		}
  */}
    
    
	}

	useEffect(() => {

		setTimeout(() => {
			setLoading(false);
		}, 2000);

		if (nuevoUsuarioCargado) {
			cargar_Admins(setCargarAdmins,navigate);
			cargar_Docentes(setCargarProfesores,navigate);
			cargarCursos(setCargarUA,navigate)
			setNuevoUsuarioCargado(false);
		  } else {
			cargar_Admins(setCargarAdmins,navigate);
			cargar_Docentes(setCargarProfesores,navigate);
			cargarCursos(setCargarUA,navigate)
		  }

		
		
		
	}, [nuevoUsuarioCargado]);



  return (
    <div>
        <NavBar usuario={usuario} setNuevoUsuarioCargado={setNuevoUsuarioCargado} cambiarOpcion={cambiarOpcion}/>
        
        <hr className='custom-input'></hr>
        
        
        
		{CargarTabla()}
		
    </div>
  )
}
